// ── Navbar loader (no fetch — works on file:// protocol) ───────────────────
(function () {
  function run() {
  const placeholder = document.getElementById('navbar-placeholder');
  if (!placeholder) return;

  const parts = window.location.pathname.replace(/\\/g, '/').split('/');
  const rootMarker = 'Acidic Studios';
  const rootIdx = parts.lastIndexOf(rootMarker);
  const fileIdx = parts.findIndex(s => s.includes('.'));
  const depth = rootIdx !== -1 ? Math.max(0, fileIdx - rootIdx - 1) : 0;
  const p = depth > 0 ? '../'.repeat(depth) : '';

  const navHTML = `
<nav id="siteNav" class="nav-shell fixed top-0 w-full z-50 backdrop-blur-xl border-b border-transparent h-20 flex items-center pt-[env(safe-area-inset-top)]">
  <div class="max-w-[1280px] w-full mx-auto px-4 md:px-16 flex items-center justify-between">
    <a class="flex items-center group" href="${p}index.html">
      <img src="${p}assets/images/acidic-header-logo-cropped.png" alt="Acidic Studios" style="height:46px;width:auto;max-height:46px;min-width:calc(46px * 1.85 + 4px);display:block;object-fit:contain;">
    </a>
    <div class="hidden lg:flex items-center gap-7" style="font-family:'JetBrains Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#becbae;">
      <a class="nav-link hover:text-[#8bfe00] transition-colors" href="${p}index.html">Home</a>
      <div class="nav-dropdown">
        <a class="nav-link hover:text-[#8bfe00] transition-colors flex items-center gap-1" href="${p}services.html">Services <span class="material-symbols-outlined nav-chevron-toggle" style="font-size:14px" role="button" tabindex="0" aria-label="Toggle services menu">keyboard_arrow_down</span></a>
        <div class="dropdown-panel">
          <div class="dropdown-eyebrow"><span class="material-symbols-outlined">apps</span>Services</div>
          <div class="dropdown-item">
            <span class="material-symbols-outlined item-icon">movie</span>
            <a class="flex-1" href="${p}ai-video-production.html" style="color:inherit;text-decoration:none">AI Video Production</a>
            <span class="material-symbols-outlined chevron nav-chevron-toggle" style="font-size:14px" role="button" tabindex="0" aria-label="Toggle AI Video Production submenu">chevron_right</span>
            <div class="sub-panel">
              <div class="sub-panel-eyebrow">AI Video Production</div>
              <a class="sub-item" href="${p}ai-short-films.html"><span class="material-symbols-outlined item-icon">theaters</span>AI Short Films</a>
              <a class="sub-item" href="${p}ai-advertisement.html"><span class="material-symbols-outlined item-icon">campaign</span>AI Advertisement</a>
              <a class="sub-item" href="${p}ai-short-videos.html"><span class="material-symbols-outlined item-icon">smartphone</span>AI Short Videos</a>
              <a class="sub-item" href="${p}ai-ugc-content.html"><span class="material-symbols-outlined item-icon">record_voice_over</span>AI UGC Content</a>
            </div>
          </div>
          <div class="dropdown-item">
            <span class="material-symbols-outlined item-icon">auto_awesome</span>
            <a class="flex-1" href="${p}ai-agents.html" style="color:inherit;text-decoration:none">AI Agents</a>
            <span class="material-symbols-outlined chevron nav-chevron-toggle" style="font-size:14px" role="button" tabindex="0" aria-label="Toggle AI Agents submenu">chevron_right</span>
            <div class="sub-panel">
              <div class="sub-panel-eyebrow">AI Agents</div>
              <a class="sub-item" href="${p}ai-chatbots.html"><span class="material-symbols-outlined item-icon">smart_toy</span>AI Chatbots</a>
              <a class="sub-item" href="${p}ai-caller-voice-agents.html"><span class="material-symbols-outlined item-icon">call</span>AI Caller / Voice Agents</a>
              <a class="sub-item" href="${p}ai-automation.html"><span class="material-symbols-outlined item-icon">bolt</span>AI Automation</a>
              <a class="sub-item" href="${p}custom-ai-agents.html"><span class="material-symbols-outlined item-icon">tune</span>Custom AI Agents</a>
            </div>
          </div>
          <div class="dropdown-item">
            <span class="material-symbols-outlined item-icon">code</span>
            <a class="flex-1" href="${p}websites.html" style="color:inherit;text-decoration:none">Website Dev / Design</a>
            <span class="material-symbols-outlined chevron" style="font-size:14px;opacity:0">chevron_right</span>
          </div>
          <div class="dropdown-item">
            <span class="material-symbols-outlined item-icon">palette</span>
            <a class="flex-1" href="${p}branding.html" style="color:inherit;text-decoration:none">Branding</a>
            <span class="material-symbols-outlined chevron" style="font-size:14px;opacity:0">chevron_right</span>
          </div>
          <div class="dropdown-item">
            <span class="material-symbols-outlined item-icon">content_cut</span>
            <a class="flex-1" href="${p}video-editing.html" style="color:inherit;text-decoration:none">Video Editing</a>
            <span class="material-symbols-outlined chevron nav-chevron-toggle" style="font-size:14px" role="button" tabindex="0" aria-label="Toggle Video Editing submenu">chevron_right</span>
            <div class="sub-panel">
              <div class="sub-panel-eyebrow">Video Editing</div>
              <a class="sub-item" href="${p}ad-videos.html"><span class="material-symbols-outlined item-icon">campaign</span>Ad Videos</a>
              <a class="sub-item" href="${p}ugc-videos.html"><span class="material-symbols-outlined item-icon">group</span>UGC Videos</a>
              <a class="sub-item" href="${p}short-form-videos.html"><span class="material-symbols-outlined item-icon">movie_edit</span>Short-form Videos</a>
              <a class="sub-item" href="${p}long-form-videos.html"><span class="material-symbols-outlined item-icon">video_stable</span>Long-form Videos</a>
              <a class="sub-item" href="${p}youtube-automation.html"><span class="material-symbols-outlined item-icon">subscriptions</span>YouTube Automation</a>
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
  <div class="mobile-menu-inner">
  <a href="${p}index.html">Home</a>
  <details class="mobile-services">
    <summary>Services</summary>
    <div class="mobile-sub-group">
      <span class="mobile-sub-heading">AI Video Production</span>
      <a class="mobile-sub-link" href="${p}ai-video-production.html">Overview</a>
      <a class="mobile-sub-link" href="${p}ai-short-films.html">AI Short Films</a>
      <a class="mobile-sub-link" href="${p}ai-advertisement.html">AI Advertisement</a>
      <a class="mobile-sub-link" href="${p}ai-short-videos.html">AI Short Videos</a>
      <a class="mobile-sub-link" href="${p}ai-ugc-content.html">AI UGC Content</a>
    </div>
    <div class="mobile-sub-group">
      <span class="mobile-sub-heading">AI Agents</span>
      <a class="mobile-sub-link" href="${p}ai-agents.html">Overview</a>
      <a class="mobile-sub-link" href="${p}ai-chatbots.html">AI Chatbots</a>
      <a class="mobile-sub-link" href="${p}ai-caller-voice-agents.html">AI Caller / Voice Agents</a>
      <a class="mobile-sub-link" href="${p}ai-automation.html">AI Automation</a>
      <a class="mobile-sub-link" href="${p}custom-ai-agents.html">Custom AI Agents</a>
    </div>
    <div class="mobile-sub-group">
      <a class="mobile-sub-link" href="${p}websites.html">Website Dev / Design</a>
      <a class="mobile-sub-link" href="${p}branding.html">Branding</a>
    </div>
    <div class="mobile-sub-group">
      <span class="mobile-sub-heading">Video Editing</span>
      <a class="mobile-sub-link" href="${p}video-editing.html">Overview</a>
      <a class="mobile-sub-link" href="${p}ad-videos.html">Ad Videos</a>
      <a class="mobile-sub-link" href="${p}ugc-videos.html">UGC Videos</a>
      <a class="mobile-sub-link" href="${p}short-form-videos.html">Short-form Videos</a>
      <a class="mobile-sub-link" href="${p}long-form-videos.html">Long-form Videos</a>
      <a class="mobile-sub-link" href="${p}youtube-automation.html">YouTube Automation</a>
    </div>
  </details>
  <a href="${p}blog.html">Blog</a>
  <a href="${p}team.html">Team</a>
  <a href="${p}careers.html">Careers</a>
  <a href="${p}contact.html">Contact</a>
  <a href="${p}contact.html" class="nav-btn-tag mt-4">Start a Project</a>
  </div>
</div>`;

  const tmp = document.createElement('div');
  tmp.innerHTML = navHTML;
  placeholder.replaceWith(...tmp.childNodes);

  // ── Active link (top nav, plus dropdown/sub items so sub-pages show "you are here") ──
  const page = window.location.pathname.replace(/\\/g, '/').split('/').pop() || 'index.html';
  function isCurrentPage(href) {
    const linkFile = (href || '').split('/').pop();
    return linkFile === page || (page === '' && linkFile === 'index.html');
  }
  document.querySelectorAll('#siteNav .nav-link').forEach(function (link) {
    if (isCurrentPage(link.getAttribute('href'))) link.classList.add('active');
  });
  let servicesActive = false;
  document.querySelectorAll('#siteNav .dropdown-item').forEach(function (item) {
    const link = item.querySelector('a.flex-1');
    if (link && isCurrentPage(link.getAttribute('href'))) { item.classList.add('active'); servicesActive = true; }
  });
  document.querySelectorAll('#siteNav .sub-item').forEach(function (link) {
    if (isCurrentPage(link.getAttribute('href'))) { link.classList.add('active'); servicesActive = true; }
  });
  if (servicesActive) {
    const servicesLink = document.querySelector('#siteNav .nav-dropdown > .nav-link');
    if (servicesLink) servicesLink.classList.add('active');
  }

  // ── Dropdown: click/tap toggles (hover still works for real pointer devices) ──
  function toggleOpen(el, cls, e) {
    e.preventDefault();
    e.stopPropagation();
    const wasOpen = el.classList.contains(cls);
    document.querySelectorAll('.dropdown-panel.force-open').forEach(function (p) { p.classList.remove('force-open'); });
    document.querySelectorAll('.dropdown-item.sub-open').forEach(function (d) { d.classList.remove('sub-open'); });
    if (!wasOpen) el.classList.add(cls);
  }
  document.querySelectorAll('#siteNav .nav-dropdown > .nav-link > .nav-chevron-toggle').forEach(function (toggle) {
    const panel = toggle.closest('.nav-dropdown').querySelector('.dropdown-panel');
    toggle.addEventListener('click', function (e) { toggleOpen(panel, 'force-open', e); });
    toggle.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') toggleOpen(panel, 'force-open', e); });
  });
  document.querySelectorAll('#siteNav .dropdown-item > .nav-chevron-toggle').forEach(function (toggle) {
    const item = toggle.closest('.dropdown-item');
    toggle.addEventListener('click', function (e) { toggleOpen(item, 'sub-open', e); });
    toggle.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') toggleOpen(item, 'sub-open', e); });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#siteNav')) {
      document.querySelectorAll('.dropdown-panel.force-open').forEach(function (p) { p.classList.remove('force-open'); });
      document.querySelectorAll('.dropdown-item.sub-open').forEach(function (d) { d.classList.remove('sub-open'); });
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
  }
  // Run now if the DOM (including anything after this <script> tag, like a
  // footer-placeholder further down the page) is already parsed; otherwise
  // wait — script position in the document must not matter here.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();

// ── Footer loader (same connected pattern as the navbar) ───────────────────
(function () {
  function run() {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  const parts = window.location.pathname.replace(/\\/g, '/').split('/');
  const rootMarker = 'Acidic Studios';
  const rootIdx = parts.lastIndexOf(rootMarker);
  const fileIdx = parts.findIndex(s => s.includes('.'));
  const depth = rootIdx !== -1 ? Math.max(0, fileIdx - rootIdx - 1) : 0;
  const p = depth > 0 ? '../'.repeat(depth) : '';

  const footerHTML = `
<footer class="bg-black border-t border-[#262626] w-full py-16 md:py-20">
<div class="max-w-[1280px] mx-auto px-4 md:px-16">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div class="lg:col-span-1">
<img src="${p}assets/images/acidic-header-logo-cropped.png" alt="Acidic Studios" class="h-10 w-auto mb-6 opacity-90">
<p class="font-body-md text-[13px] text-[#9a9a9a] leading-relaxed max-w-[220px]">Digital alchemy for brands that refuse to blend in.</p>
</div>
<div>
<h4 class="font-label-sm text-[11px] text-primary-fixed uppercase tracking-widest mb-5">Navigation</h4>
<ul class="space-y-3">
<li><a class="font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="${p}index.html">Home</a></li>
<li><a class="font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="${p}services.html">Services</a></li>
<li><a class="font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="${p}blog.html">Blog</a></li>
<li><a class="font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="${p}team.html">Team</a></li>
<li><a class="font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="${p}careers.html">Careers</a></li>
</ul>
</div>
<div>
<h4 class="font-label-sm text-[11px] text-primary-fixed uppercase tracking-widest mb-5">Services</h4>
<ul class="space-y-3">
<li><a class="font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="${p}ai-video-production.html">AI Video</a></li>
<li><a class="font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="${p}ai-agents.html">AI Agents</a></li>
<li><a class="font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="${p}websites.html">Websites</a></li>
<li><a class="font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="${p}branding.html">Branding</a></li>
<li><a class="font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="${p}video-editing.html">Video Editing</a></li>
</ul>
</div>
<div>
<h4 class="font-label-sm text-[11px] text-primary-fixed uppercase tracking-widest mb-5">Connect</h4>
<div class="flex flex-col gap-3">
<a class="flex items-center gap-2 font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="https://www.instagram.com/acidic._.studios/" target="_blank" rel="noopener noreferrer">
<span class="material-symbols-outlined text-[16px]">photo_camera</span> Instagram
</a>
<a class="flex items-center gap-2 font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="https://www.facebook.com/profile.php?id=61581056850793" target="_blank" rel="noopener noreferrer">
<span class="material-symbols-outlined text-[16px]">thumb_up</span> Facebook
</a>
<a class="flex items-center gap-2 font-label-sm text-[12px] text-[#9a9a9a] hover:text-primary-fixed transition-colors uppercase tracking-widest" href="https://www.linkedin.com/company/acidic-studios" target="_blank" rel="noopener noreferrer">
<span class="material-symbols-outlined text-[16px]">hub</span> LinkedIn
</a>
</div>
</div>
</div>
<div class="pt-8 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center gap-4">
<p class="font-label-sm text-[11px] text-[#9a9a9a]/50 uppercase tracking-[0.2em]">2024 Acidic Studios. All rights reserved.</p>
<div class="flex gap-6">
<a href="${p}privacy-policy.html" class="font-label-sm text-[11px] text-[#9a9a9a]/50 hover:text-primary-fixed transition-colors uppercase tracking-widest">Privacy Policy</a>
<a href="${p}contact.html" class="font-label-sm text-[11px] text-[#9a9a9a]/50 hover:text-primary-fixed transition-colors uppercase tracking-widest">Contact</a>
</div>
</div>
</div>
</footer>`;

  const tmp = document.createElement('div');
  tmp.innerHTML = footerHTML;
  placeholder.replaceWith(...tmp.childNodes);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
