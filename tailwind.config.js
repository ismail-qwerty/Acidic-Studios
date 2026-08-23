// Compiled once (by `npm run build:css`, or automatically on every Netlify
// deploy per netlify.toml) into assets/css/tailwind-built.css.
//
// This replaces the Tailwind Play CDN (`cdn.tailwindcss.com`) that every
// page used to load. That CDN JIT-compiles the entire utility stylesheet
// in the browser on first load, AND sets up a MutationObserver that
// recompiles the WHOLE stylesheet again on every DOM change — including
// our own navbar/footer injection and every scroll-reveal class toggle.
// That's the actual cause of "loads slow, then lags while scrolling."
// A precompiled static file has none of that: no runtime compiler, no
// observer, just CSS.
//
// This config is the union of every distinct inline `tailwind.config`
// block that used to be duplicated across all 30 pages (7 slightly
// different variants existed). One real conflict was found and resolved
// during the merge: team.html defined its own smaller headline-* font
// sizes (72/48/38px) that no other page shared; team.html's one usage of
// the shared class was switched to an explicit text-[48px] override so it
// keeps rendering at the same size without needing a page-specific config.
module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './assets/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'surface-variant': '#353534',
        'surface-bright': '#3a3939',
        'on-secondary-fixed-variant': '#454747',
        'error-container': '#93000a',
        'surface-container-high': '#2a2a2a',
        tertiary: '#ffffff',
        'surface-container-low': '#1c1b1b',
        'on-surface': '#e5e2e1',
        'on-secondary-container': '#b4b5b5',
        'surface-deep': '#121212',
        'primary-fixed': '#8bfe00',
        'secondary-fixed': '#e2e2e2',
        'on-primary': '#1a3700',
        'surface-dim': '#131313',
        'tertiary-fixed-dim': '#c6c6c6',
        'on-tertiary': '#2f3131',
        outline: '#89957a',
        'on-tertiary-fixed': '#1a1c1c',
        'on-primary-fixed': '#0d2000',
        'on-secondary-fixed': '#1a1c1c',
        'on-background': '#e5e2e1',
        'primary-fixed-dim': '#7adf00',
        background: '#131313',
        'tertiary-container': '#e3e2e2',
        'primary-container': '#8bfe00',
        'on-surface-variant': '#becbae',
        'on-secondary': '#2f3131',
        'on-primary-fixed-variant': '#285000',
        'border-muted': '#262626',
        'on-tertiary-fixed-variant': '#464747',
        'acid-glow': '#8CFF00CC',
        'inverse-primary': '#376b00',
        'surface-container-highest': '#353534',
        'outline-variant': '#3f4a34',
        'inverse-on-surface': '#313030',
        'on-primary-container': '#3b7100',
        'surface-container': '#201f1f',
        'secondary-container': '#454747',
        secondary: '#c6c6c7',
        surface: '#131313',
        'inverse-surface': '#e5e2e1',
        'tertiary-fixed': '#e3e2e2',
        'on-error': '#690005',
        'on-tertiary-container': '#636465',
        'surface-container-lowest': '#0e0e0e',
        'on-error-container': '#ffdad6',
        primary: '#ffffff',
        'secondary-fixed-dim': '#c6c6c7',
        error: '#ffb4ab',
        'surface-tint': '#7adf00',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      spacing: {
        'stack-sm': '8px',
        gutter: '24px',
        'stack-md': '16px',
        'margin-mobile': '16px',
        'margin-desktop': '64px',
        'stack-lg': '32px',
      },
      fontFamily: {
        'body-md': ['Inter'],
        'headline-xl': ['Montserrat', 'sans-serif'],
        'body-lg': ['Inter'],
        'label-sm': ['JetBrains Mono'],
        'headline-lg': ['Montserrat', 'sans-serif'],
        'headline-lg-mobile': ['Montserrat', 'sans-serif'],
        headline: ['Montserrat', 'sans-serif'],
        label: ['JetBrains Mono'],
        body: ['Inter'],
      },
      fontSize: {
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'headline-xl': ['112px', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '500' }],
        'headline-lg': ['80px', { lineHeight: '0.9', letterSpacing: '-0.01em', fontWeight: '400' }],
        'headline-lg-mobile': ['64px', { lineHeight: '0.9', fontWeight: '400' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
