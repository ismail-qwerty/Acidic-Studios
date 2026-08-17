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
      <button id="menuBtn" class="flex h-10 w-10 items-center justify-center rounded-full text-white hover:text-[#8bfe00] hover:bg-white/5 transition-colors lg:hidden" aria-label="Toggle menu" aria-expanded="false">
        <span class="material-symbols-outlined text-[22px]" id="menuIcon">menu</span>
      </button>
    </div>
  </div>
</nav>

<div id="mobileMenu">
  <div class="mobile-menu-scrim" id="mobileMenuScrim"></div>
  <div class="mobile-menu-panel">
    <div class="mobile-menu-header">
      <span class="mobile-menu-title"><span class="w-1.5 h-1.5 rounded-full bg-[#8bfe00] pulse-dot-green inline-block mr-2"></span>Menu</span>
      <button class="nav-close-btn" id="mobileCloseBtn" aria-label="Close menu"><span class="material-symbols-outlined text-[18px]">close</span></button>
    </div>
    <div class="mobile-menu-inner">
      <a class="mobile-link" href="${p}index.html"><span class="material-symbols-outlined item-icon">home</span>Home</a>
      <details class="mobile-services">
        <summary><span class="material-symbols-outlined item-icon">apps</span>Services</summary>
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
      <a class="mobile-link" href="${p}blog.html"><span class="material-symbols-outlined item-icon">rss_feed</span>Blog</a>
      <a class="mobile-link" href="${p}team.html"><span class="material-symbols-outlined item-icon">groups</span>Team</a>
      <a class="mobile-link" href="${p}careers.html"><span class="material-symbols-outlined item-icon">work</span>Careers</a>
      <a class="mobile-link" href="${p}contact.html"><span class="material-symbols-outlined item-icon">mail</span>Contact</a>
      <a href="${p}contact.html" class="nav-btn-tag justify-center mt-3">Start a Project</a>
    </div>
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
  const menuScrim  = document.getElementById('mobileMenuScrim');

  function closeMenu() {
    mobileMenu.classList.remove('open');
    if (menuIcon) menuIcon.textContent = 'menu';
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  window.closeMenu = closeMenu;

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (menuScrim) menuScrim.addEventListener('click', closeMenu);
  // Tapping a real link inside the panel should close it too (in case the
  // destination page load is slow enough that the panel would otherwise
  // still be visible during the transition).
  mobileMenu.querySelectorAll('a[href]').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      if (menuIcon) menuIcon.textContent = isOpen ? 'close' : 'menu';
      menuBtn.setAttribute('aria-expanded', String(isOpen));
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
<footer class="relative bg-black w-full px-3 sm:px-6 md:px-10 py-8 md:py-14">
<div class="relative max-w-[1280px] mx-auto rounded-[36px] sm:rounded-[56px] md:rounded-[72px] bg-primary-fixed overflow-hidden">
  <div class="relative z-10 px-6 sm:px-12 md:px-16 pt-12 md:pt-16">

    <div class="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 pb-10">

      <div class="col-span-2 md:col-span-4">
        <h3 class="font-headline-lg text-on-primary-fixed text-[22px] sm:text-[26px] uppercase leading-tight mb-4">Sharper Brands.<br>Louder Work.</h3>
        <p class="font-label-sm text-[10px] font-bold text-on-primary-fixed uppercase tracking-widest">© 2024 Acidic Studios — Digital Alchemy Lab</p>
      </div>

      <div class="md:col-span-2">
        <h4 class="font-label-sm text-[11px] text-on-primary-fixed uppercase tracking-widest mb-5 font-bold">Navigation</h4>
        <ul class="space-y-3">
          <li><a class="font-label-sm text-[12px] font-bold text-on-primary-fixed hover:text-black transition-colors uppercase tracking-widest" href="${p}index.html">Home</a></li>
          <li><a class="font-label-sm text-[12px] font-bold text-on-primary-fixed hover:text-black transition-colors uppercase tracking-widest" href="${p}services.html">Services</a></li>
          <li><a class="font-label-sm text-[12px] font-bold text-on-primary-fixed hover:text-black transition-colors uppercase tracking-widest" href="${p}blog.html">Blog</a></li>
          <li><a class="font-label-sm text-[12px] font-bold text-on-primary-fixed hover:text-black transition-colors uppercase tracking-widest" href="${p}team.html">Team</a></li>
          <li><a class="font-label-sm text-[12px] font-bold text-on-primary-fixed hover:text-black transition-colors uppercase tracking-widest" href="${p}careers.html">Careers</a></li>
        </ul>
      </div>

      <div class="md:col-span-2">
        <h4 class="font-label-sm text-[11px] text-on-primary-fixed uppercase tracking-widest mb-5 font-bold">Support</h4>
        <ul class="space-y-3">
          <li><a class="font-label-sm text-[12px] font-bold text-on-primary-fixed hover:text-black transition-colors uppercase tracking-widest" href="${p}contact.html">Contact Us</a></li>
          <li><a class="font-label-sm text-[12px] font-bold text-on-primary-fixed hover:text-black transition-colors uppercase tracking-widest" href="${p}faqs.html">FAQs</a></li>
          <li><a class="font-label-sm text-[12px] font-bold text-on-primary-fixed hover:text-black transition-colors uppercase tracking-widest" href="${p}book-a-call.html">Book a Call</a></li>
          <li><a class="font-label-sm text-[12px] font-bold text-on-primary-fixed hover:text-black transition-colors uppercase tracking-widest" href="${p}privacy-policy.html">Privacy Policy</a></li>
        </ul>
      </div>

      <div class="col-span-2 md:col-span-4">
        <h4 class="font-label-sm text-[11px] text-on-primary-fixed uppercase tracking-widest mb-5 font-bold">Get the latest from Acidic.</h4>
        <form id="footerNewsletter" action="https://formspree.io/f/xeeybqvo" method="POST" class="flex flex-col sm:flex-row gap-3 mb-2">
          <input type="email" name="email" required placeholder="Email Address" class="flex-1 min-w-0 text-[13px] px-4 py-3 font-body-md border-0 focus:outline-none" style="background:#0d2000;color:#8bfe00;clip-path:polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)">
          <button type="submit" id="newsletterBtn" class="btn-tag shrink-0" style="background:#0d2000;color:#8bfe00">
            <span id="newsletterLabel">Subscribe</span>
          </button>
        </form>
        <p id="newsletterMsg" class="hidden font-label-sm text-[11px] text-on-primary-fixed/80 uppercase tracking-widest mb-6"></p>
        <h4 class="font-label-sm text-[11px] text-on-primary-fixed uppercase tracking-widest mb-4 font-bold mt-6">Follow Us</h4>
        <div class="flex gap-2">
          <a class="footer-icon-btn" href="https://www.instagram.com/acidic._.studios/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span class="material-symbols-outlined text-base">photo_camera</span></a>
          <a class="footer-icon-btn" href="https://www.facebook.com/profile.php?id=61581056850793" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span class="material-symbols-outlined text-base">thumb_up</span></a>
          <a class="footer-icon-btn" href="https://www.linkedin.com/company/acidic-studios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><span class="material-symbols-outlined text-base">hub</span></a>
        </div>
      </div>

    </div>

    <!-- Giant wordmark -->
    <div class="pointer-events-none select-none -mt-2 md:-mt-4" aria-hidden="true">
      <span class="block font-headline-xl text-on-primary-fixed font-black leading-none tracking-tight text-center md:text-left" style="font-size:clamp(64px,15vw,190px)">ACIDIC</span>
    </div>
  </div>
</div>
</footer>`;

  const tmp = document.createElement('div');
  tmp.innerHTML = footerHTML;
  placeholder.replaceWith(...tmp.childNodes);

  const newsletterForm = document.getElementById('footerNewsletter');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn = document.getElementById('newsletterBtn');
      const label = document.getElementById('newsletterLabel');
      const msg = document.getElementById('newsletterMsg');
      btn.disabled = true; label.textContent = 'Sending...';
      msg.classList.add('hidden');
      try {
        const res = await fetch(this.action, { method: 'POST', body: new FormData(this), headers: { Accept: 'application/json' } });
        if (res.ok) {
          this.reset();
          msg.textContent = "You're on the list — welcome.";
          msg.classList.remove('hidden');
        } else {
          throw new Error('failed');
        }
      } catch (err) {
        msg.textContent = 'Something went wrong — try again or email hello@acidic.studio directly.';
        msg.classList.remove('hidden');
      }
      btn.disabled = false; label.textContent = 'Subscribe';
    });
  }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();

// ── Scroll-reveal + count-up stats + hero entrance ──────────────────────────
// Runs on every page automatically (targets the shared card/component classes
// already used site-wide), no per-page markup needed. Respects prefers-reduced-motion.
(function () {
  // Two rAFs, not one: the browser needs to actually paint the .reveal
  // (opacity:0) state at least once before we flip to .in-view, otherwise —
  // for anything already sitting in the viewport at load, which is most of
  // what you see above the fold without scrolling — the browser can coalesce
  // both class changes into a single style recalc and skip the transition
  // entirely, so the element just pops in with no visible animation at all.
  function nextPaint(cb) {
    requestAnimationFrame(function () { requestAnimationFrame(cb); });
  }

  function run() {
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    // Hero entrance: fade + rise on every page load, no scrolling required —
    // this is the one animation guaranteed visible immediately.
    var hero = document.querySelector('main > section:first-of-type');
    if (hero) {
      hero.classList.add('reveal', 'reveal-hero');
      nextPaint(function () { hero.classList.add('in-view'); });
    }

    // Reveal-on-scroll for cards & repeating components further down the page.
    if ('IntersectionObserver' in window) {
      var revealSelector = [
        '.feature-card', '.spec-card', '.service-card', '.testimonial-card',
        '.pricing-card', '.showcase-card', '.post-card', '.step-line'
      ].join(', ');
      var revealEls = document.querySelectorAll(revealSelector);
      revealEls.forEach(function (el) { el.classList.add('reveal'); });

      var revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var target = entry.target;
            revealIO.unobserve(target);
            nextPaint(function () { target.classList.add('in-view'); });
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      revealEls.forEach(function (el) { revealIO.observe(el); });
    }

    // Count-up for the big stat numbers used in stats-strip sections
    // (font-headline-lg + text-primary-fixed + block + leading-none is the
    // consistent signature of that component across every page).
    if (!('IntersectionObserver' in window)) return;
    var statEls = document.querySelectorAll('.font-headline-lg.text-primary-fixed.block.leading-none');
    statEls.forEach(function (el) {
      var raw = el.textContent.trim();
      var match = raw.match(/^([\d]+(?:\.\d+)?)(.*)$/);
      if (!match) return; // non-numeric-leading value (e.g. "Any API") — leave as-is
      var target = parseFloat(match[1]);
      if (!target) return; // "0" stays "0" — nothing to animate
      var decimals = (match[1].split('.')[1] || '').length;
      var suffix = match[2];

      el.textContent = (decimals ? (0).toFixed(decimals) : '0') + suffix;
      var done = false;
      var statIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !done) {
            done = true;
            statIO.unobserve(entry.target);
            var start = null;
            var duration = 1100;
            function frame(ts) {
              if (start === null) start = ts;
              var progress = Math.min((ts - start) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
              var current = target * eased;
              el.textContent = (decimals ? current.toFixed(decimals) : Math.round(current)) + suffix;
              if (progress < 1) requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);
          }
        });
      }, { threshold: 0.4 });
      statIO.observe(el);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
