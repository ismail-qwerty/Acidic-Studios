const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const POSTS_FILE = path.join(__dirname, 'posts.json');

const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.webp': 'image/webp',
  '.mp4':  'video/mp4',
  '.webm': 'video/webm',
  '.ico':  'image/x-icon',
};

function readPosts() {
  try { return JSON.parse(fs.readFileSync(POSTS_FILE, 'utf8')); }
  catch { return []; }
}

function writePosts(posts) {
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2), 'utf8');
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  // ── API ──────────────────────────────────────────────────────────────────
  if (url.pathname === '/api/posts') {

    // GET all posts
    if (req.method === 'GET') {
      const posts = readPosts();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(posts));
    }

    // POST create
    if (req.method === 'POST') {
      let body = '';
      req.on('data', c => body += c);
      req.on('end', () => {
        const data = JSON.parse(body);
        const posts = readPosts();
        const slug = slugify(data.title) + '-' + Date.now();
        const post = {
          slug,
          title:       data.title,
          description: data.description,
          content:     data.content || '',
          image:       data.image || '',
          category:    data.category || 'General',
          date:        new Date().toISOString(),
        };
        posts.unshift(post);
        writePosts(posts);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(post));
      });
      return;
    }
  }

  // PUT update
  if (url.pathname.startsWith('/api/posts/') && req.method === 'PUT') {
    const slug = url.pathname.replace('/api/posts/', '');
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      const data = JSON.parse(body);
      const posts = readPosts();
      const idx = posts.findIndex(p => p.slug === slug);
      if (idx === -1) { res.writeHead(404); return res.end(); }
      posts[idx] = { ...posts[idx], ...data };
      writePosts(posts);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(posts[idx]));
    });
    return;
  }

  // DELETE
  if (url.pathname.startsWith('/api/posts/') && req.method === 'DELETE') {
    const slug = url.pathname.replace('/api/posts/', '');
    const posts = readPosts().filter(p => p.slug !== slug);
    writePosts(posts);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: true }));
  }

  // ── Static files ─────────────────────────────────────────────────────────
  let filePath = path.join(__dirname, url.pathname === '/' ? 'index.html' : url.pathname);
  const ext = path.extname(filePath);
  if (!ext) filePath += '.html';

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'text/plain' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n  ACIDIC STUDIOS — local server running`);
  console.log(`  http://localhost:${PORT}\n`);
});
