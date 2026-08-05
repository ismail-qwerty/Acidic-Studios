// ── Navbar loader (no fetch — works on file:// protocol) ───────────────────
(function () {
  const placeholder = document.getElementById('navbar-placeholder');
  if (!placeholder) return;

  const parts = window.location.pathname.replace(/\\/g, '/').split('/');
  const rootMarker = 'Acidic Studios';
  const rootIdx = parts.lastIndexOf(rootMarker);
  const fileIdx = parts.findIndex(s => s.includes('.'));
  const depth = rootIdx !== -1 ? Math.max(0, fileIdx - rootIdx - 1) : 0;
  const p = depth > 0 ? '../'.repeat(depth) : '';

  const navHTML = `
<style>
  .nav-shell{background-color:rgba(18,18,18,0.15);transition:background-color .3s ease,border-color .3s ease,box-shadow .3s ease}
  .nav-shell.nav-solid{background-color:rgba(10,10,10,0.75);border-color:rgba(139,254,0,0.3);box-shadow:0 4px 30px rgba(139,254,0,0.1)}
  .nav-link{position:relative}
  .nav-link::after{content:"";position:absolute;left:0;bottom:-4px;height:1px;width:0;background:#8bfe00;transition:width .25s ease}
  .nav-link:hover::after,.nav-link.active::after{width:100%}
  .nav-link.active{color:#8bfe00}
  .nav-dropdown{position:relative}
  .dropdown-panel{position:absolute;top:calc(100% + 20px);left:50%;transform:translateX(-50%) translateY(-6px);min-width:220px;background:rgba(10,10,10,0.95);border:1px solid #262626;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);opacity:0;pointer-events:none;transition:opacity .2s ease,transform .2s ease;z-index:100}
  .dropdown-panel::before{content:"";position:absolute;top:-20px;left:0;right:0;height:20px}
  .dropdown-panel::after{content:"";position:absolute;top:-1px;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#8bfe00,transparent)}
  .nav-dropdown:hover .dropdown-panel{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0)}
  .dropdown-item{position:relative;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 18px;font-family:"JetBrains Mono",monospace;font-size:11px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#becbae;border-bottom:1px solid #1a1a1a;transition:color .15s ease,background .15s ease;white-space:nowrap;cursor:pointer}
  .dropdown-item:last-child{border-bottom:none}
  .dropdown-item:hover{color:#8bfe00;background:rgba(139,254,0,0.05)}
  .dropdown-item .chevron{font-size:14px;opacity:0.5;transition:opacity .15s ease}
  .dropdown-item:hover .chevron{opacity:1}
  .sub-panel{position:absolute;top:0;left:100%;min-width:200px;background:rgba(10,10,10,0.97);border:1px solid #262626;border-left:1px solid #8bfe0033;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);opacity:0;pointer-events:none;transition:opacity .15s ease,transform .15s ease;transform:translateX(-6px);z-index:101}
  .dropdown-item:hover .sub-panel{opacity:1;pointer-events:auto;transform:translateX(0)}
  .sub-item{display:block;padding:10px 18px;font-family:"JetBrains Mono",monospace;font-size:10px;font-weight:400;letter-spacing:0.1em;text-transform:uppercase;color:#7a8a6a;border-bottom:1px solid #1a1a1a;transition:color .15s ease,background .15s ease;white-space:nowrap}
  .sub-item:last-child{border-bottom:none}
  .sub-item:hover{color:#8bfe00;background:rgba(139,254,0,0.05)}
  .nav-btn-tag{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 24px 14px 18px;font-family:"JetBrains Mono",monospace;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;white-space:nowrap;clip-path:polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px);transition:background-color .2s ease,color .2s ease,box-shadow .2s ease;background-color:#8bfe00;color:#0d2000;text-decoration:none}
  .nav-btn-tag:hover{background-color:#0A0A0A;color:#8bfe00;box-shadow:inset 0 0 0 1px #8bfe00,0 0 20px rgba(139,254,0,0.35)}
  @keyframes _nav_pulse{0%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(255,0,0,0.7)}70%{transform:scale(1);box-shadow:0 0 0 6px rgba(255,0,0,0)}100%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(255,0,0,0)}}
  .nav-rec-pulse{animation:_nav_pulse 2s infinite}
  #mobileMenu{display:none;position:fixed;inset:0;z-index:200;background:rgba(10,10,10,0.98);backdrop-filter:blur(20px);flex-direction:column;align-items:center;justify-content:center;gap:2rem;padding-top:5rem}
  #mobileMenu.open{display:flex}
  #mobileMenu a{font-family:'VintagePropagandistRegular',sans-serif;font-size:2.5rem;text-transform:uppercase;color:#e5e2e1;letter-spacing:0.05em;transition:color .2s;text-decoration:none}
  #mobileMenu a:hover{color:#8bfe00}
  #mobileMenu .nav-close-btn{position:absolute;top:1.5rem;right:1.5rem;background:none;border:none;color:#e5e2e1;cursor:pointer;font-size:2rem}
</style>

<nav id="siteNav" class="nav-shell fixed top-0 w-full z-50 backdrop-blur-xl border-b border-transparent h-24 flex items-center pt-[env(safe-area-inset-top)]">
  <div class="max-w-[1280px] w-full mx-auto px-4 md:px-16 flex items-center justify-between">
    <a class="flex items-center gap-3 group" href="${p}index.html">
      <img src="${p}assets/images/Acidic studios header logo.png" alt="Acidic Studios" style="height:64px;width:420px;object-fit:contain;object-position:left center;">
    </a>
    <div class="hidden lg:flex items-center gap-7" style="font-family:'JetBrains Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#becbae;">
      <a class="nav-link hover:text-[#8bfe00] transition-colors" href="${p}index.html">Home</a>
      <div class="nav-dropdown">
        <a class="nav-link hover:text-[#8bfe00] transition-colors flex items-center gap-1" href="${p}services.html">Services <span class="material-symbols-outlined" style="font-size:14px">keyboard_arrow_down</span></a>
        <div class="dropdown-panel">
          <div class="dropdown-item">
            <a class="flex-1" href="${p}ai-video-production.html" style="color:inherit;text-decoration:none">AI Video Production</a>
            <span class="material-symbols-outlined chevron" style="font-size:14px">chevron_right</span>
            <div class="sub-panel">
              <a class="sub-item" href="${p}ai-short-films.html">AI Short Films</a>
              <a class="sub-item" href="${p}ai-advertisement.html">AI Advertisement</a>
              <a class="sub-item" href="${p}ai-short-videos.html">AI Short Videos</a>
              <a class="sub-item" href="${p}ai-ugc-content.html">AI UGC Content</a>
            </div>
          </div>
          <div class="dropdown-item">
            <a class="flex-1" href="${p}ai-agents.html" style="color:inherit;text-decoration:none">AI Agents</a>
            <span class="material-symbols-outlined chevron" style="font-size:14px">chevron_right</span>
            <div class="sub-panel">
              <a class="sub-item" href="${p}ai-chatbots.html">AI Chatbots</a>
              <a class="sub-item" href="${p}ai-caller-voice-agents.html">AI Caller / Voice Agents</a>
              <a class="sub-item" href="${p}ai-automation.html">AI Automation</a>
              <a class="sub-item" href="${p}custom-ai-agents.html">Custom AI Agents</a>
            </div>
          </div>
          <div class="dropdown-item">
            <a class="flex-1" href="${p}websites.html" style="color:inherit;text-decoration:none">Website Dev / Design</a>
            <span class="material-symbols-outlined chevron" style="font-size:14px;opacity:0">chevron_right</span>
          </div>
          <div class="dropdown-item">
            <a class="flex-1" href="${p}branding.html" style="color:inherit;text-decoration:none">Branding</a>
            <span class="material-symbols-outlined chevron" style="font-size:14px;opacity:0">chevron_right</span>
          </div>
          <div class="dropdown-item">
            <a class="flex-1" href="${p}video-editing.html" style="color:inherit;text-decoration:none">Video Editing</a>
            <span class="material-symbols-outlined chevron" style="font-size:14px">chevron_right</span>
            <div class="sub-panel">
              <a class="sub-item" href="${p}ad-videos.html">Ad Videos</a>
              <a class="sub-item" href="${p}ugc-videos.html">UGC Videos</a>
              <a class="sub-item" href="${p}short-form-videos.html">Short-form Videos</a>
              <a class="sub-item" href="${p}long-form-videos.html">Long-form Videos</a>
              <a class="sub-item" href="${p}youtube-automation.html">YouTube Automation</a>
            </div>
          </div>
        </div>
      </div>
      <a class="nav-link hover:text-[#8bfe00] transition-colors" href="${p}websites.html">Websites</a>
      <a class="nav-link hover:text-[#8bfe00] transition-colors" href="${p}blog.html">Blog</a>
      <a class="nav-link hover:text-[#8bfe00] transition-colors" href="${p}team.html">Team</a>
      <a class="nav-link hover:text-[#8bfe00] transition-colors" href="${p}careers.html">Careers</a>
      <a class="nav-link hover:text-[#8bfe00] transition-colors" href="${p}contact.html">Contact</a>
    </div>
    <div class="flex items-center gap-3">
      <a class="nav-btn-tag hidden sm:inline-flex" href="${p}contact.html">Start a Project</a>
      <button id="menuBtn" class="flex h-11 w-11 items-center justify-center text-white hover:text-[#8bfe00] transition-colors lg:hidden" aria-label="Toggle menu">
        <span class="material-symbols-outlined" id="menuIcon">menu</span>
      </button>
    </div>
  </div>
</nav>

<div id="mobileMenu">
  <button class="nav-close-btn" id="mobileCloseBtn">&#x2715;</button>
  <a href="${p}index.html">Home</a>
  <a href="${p}services.html">Services</a>
  <a href="${p}ai-video-production.html">AI Video</a>
  <a href="${p}ai-agents.html">AI Agents</a>
  <a href="${p}websites.html">Websites</a>
  <a href="${p}branding.html">Branding</a>
  <a href="${p}video-editing.html">Video Editing</a>
  <a href="${p}blog.html">Blog</a>
  <a href="${p}team.html">Team</a>
  <a href="${p}careers.html">Careers</a>
  <a href="${p}contact.html">Contact</a>
  <a href="${p}contact.html" class="nav-btn-tag mt-4">Start a Project</a>
</div>`;

  const tmp = document.createElement('div');
  tmp.innerHTML = navHTML;
  placeholder.replaceWith(...tmp.childNodes);

  // ── Active link ────────────────────────────────────────────────────────
  const page = window.location.pathname.replace(/\\/g, '/').split('/').pop() || 'index.html';
  document.querySelectorAll('#siteNav .nav-link').forEach(function (link) {
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('/').pop();
    if (linkFile === page || (page === '' && linkFile === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Scroll solid ───────────────────────────────────────────────────────
  const nav = document.getElementById('siteNav');
  const onScroll = function () { nav.classList.toggle('nav-solid', window.scrollY > 80); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Mobile menu ────────────────────────────────────────────────────────
  const menuBtn    = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon   = document.getElementById('menuIcon');
  const closeBtn   = document.getElementById('mobileCloseBtn');

  function closeMenu() {
    mobileMenu.classList.remove('open');
    if (menuIcon) menuIcon.textContent = 'menu';
    document.body.style.overflow = '';
  }
  window.closeMenu = closeMenu;

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      if (menuIcon) menuIcon.textContent = isOpen ? 'close' : 'menu';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }
})();
