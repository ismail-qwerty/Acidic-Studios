// Netlify Function: authenticated CRUD proxy for the "posts" table.
//
// This function runs server-side only. It is the ONLY thing on the whole
// site that holds the Supabase SERVICE ROLE key (set as an env var in the
// Netlify dashboard — never committed, never sent to the browser).
//
// Every write request must carry a valid Netlify Identity JWT
// (Authorization: Bearer <token>). Netlify verifies that token at the edge
// before this function ever runs, and hands us the decoded user on
// `context.clientContext.user` — a client cannot forge this.

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

function json(statusCode, data) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
}

exports.handler = async (event, context) => {
  if (!SUPABASE_URL || !SERVICE_KEY) {
    return json(500, { error: 'Server is missing SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY env vars.' });
  }

  // Reads are allowed without auth (the public blog needs them), but this
  // function is only wired up to admin.html for writes — the public blog
  // pages still read straight from Supabase with the read-only anon key.
  const isWrite = event.httpMethod !== 'GET';

  if (isWrite) {
    const user = context.clientContext && context.clientContext.user;
    if (!user) {
      return json(401, { error: 'Not authenticated.' });
    }
  }

  const base = `${SUPABASE_URL}/rest/v1/posts`;
  const headers = {
    apikey: SERVICE_KEY,
    Authorization: `Bearer ${SERVICE_KEY}`,
    'Content-Type': 'application/json',
  };

  try {
    if (event.httpMethod === 'GET') {
      const res = await fetch(`${base}?select=*&order=created_at.desc`, { headers });
      const data = await res.json();
      return json(res.status, data);
    }

    if (event.httpMethod === 'POST') {
      const payload = JSON.parse(event.body || '{}');
      if (!payload.title || !payload.slug) return json(400, { error: 'Title and slug are required.' });
      const res = await fetch(base, {
        method: 'POST',
        headers: { ...headers, Prefer: 'return=representation' },
        body: JSON.stringify({
          title: payload.title,
          slug: payload.slug,
          description: payload.description || '',
          content: payload.content || '',
          image: payload.image || '',
          category: payload.category || '',
        }),
      });
      const data = await res.json();
      if (!res.ok) return json(res.status, data);
      return json(200, data);
    }

    if (event.httpMethod === 'PUT') {
      const { id, ...payload } = JSON.parse(event.body || '{}');
      if (!id) return json(400, { error: 'id is required.' });
      const res = await fetch(`${base}?id=eq.${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: { ...headers, Prefer: 'return=representation' },
        body: JSON.stringify({
          title: payload.title,
          slug: payload.slug,
          description: payload.description || '',
          content: payload.content || '',
          image: payload.image || '',
          category: payload.category || '',
        }),
      });
      const data = await res.json();
      if (!res.ok) return json(res.status, data);
      return json(200, data);
    }

    if (event.httpMethod === 'DELETE') {
      const { id } = JSON.parse(event.body || '{}');
      if (!id) return json(400, { error: 'id is required.' });
      const res = await fetch(`${base}?id=eq.${encodeURIComponent(id)}`, { method: 'DELETE', headers });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        return json(res.status, data);
      }
      return json(200, { ok: true });
    }

    return json(405, { error: 'Method not allowed.' });
  } catch (err) {
    return json(500, { error: err.message });
  }
};
