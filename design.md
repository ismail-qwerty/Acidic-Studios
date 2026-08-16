# ACIDIC STUDIOS — Design System

---

## Colour Palette

### Core

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#ffffff` | Headlines, primary text |
| `primary-fixed` | `#8bfe00` | Acid green — accents, borders, glows, CTAs |
| `primary-fixed-dim` | `#7adf00` | Dimmed acid green, hover states |
| `on-primary` | `#1a3700` | Text on green backgrounds |
| `on-primary-fixed` | `#0d2000` | Dark text on filled green buttons |

### Backgrounds & Surfaces

| Token | Hex | Usage |
|---|---|---|
| `background` / `surface` | `#131313` | Default page background |
| `surface-deep` | `#121212` | Alternate section background |
| `surface-container-lowest` | `#0e0e0e` | Cards, panels |
| `surface-container` | `#201f1f` | Elevated containers |
| `surface-container-high` | `#2a2a2a` | Higher elevation |
| `surface-variant` | `#353534` | Highest elevation |
| `#000000` / `#0A0A0A` | — | True black — hero, navbar, footer |

### Text

| Token | Hex | Usage |
|---|---|---|
| `on-surface` | `#e5e2e1` | Body text |
| `on-surface-variant` | `#becbae` | Muted / secondary text |
| `secondary` | `#c6c6c7` | Tertiary text |

### Borders

| Token | Hex | Usage |
|---|---|---|
| `border-muted` | `#262626` | Default borders, dividers |
| `outline-variant` | `#3f4a34` | Subtle outlines (e.g. outline buttons) |

### Semantic

| Token | Hex | Usage |
|---|---|---|
| `error` | `#ffb4ab` | Error states |
| Red `#ff0000` | — | REC pulse dot, live indicators |

### Glow

| Token | Value | Usage |
|---|---|---|
| `acid-glow` | `#8CFF00CC` | Text glow colour |
| Green glow | `rgba(139,254,0,0.6)` | Box shadows, text shadows |

---

## Typography

### Fonts

| Role | Family | Weights |
|---|---|---|
| Display / Headlines | `Montserrat` | 700, 800, 900 |
| Body | `Inter` | 400, 500, 600, 700 |
| Labels / Mono UI | `JetBrains Mono` | 400, 500, 700, 800 |


### Scale

| Token | Size | Line Height | Letter Spacing | Weight |
|---|---|---|---|---|
| `headline-xl` | 112px | 0.9 | -0.02em | 400 |
| `headline-lg` | 80px | 0.9 | -0.01em | 400 |
| `headline-lg-mobile` | 64px | 0.9 | — | 400 |
| `body-lg` | 18px | 1.6 | — | 400 |
| `body-md` | 16px | 1.6 | — | 400 |
| `label-sm` | 12px | 1 | 0.1em | 500 |

### Responsive Headline Sizes (inline overrides)

```
Mobile:  text-[56px]
Tablet:  text-[80px]
Desktop: text-headline-xl (112px)
```

### Special Effects

- `.stencil-text` — outline-only text: `-webkit-text-stroke: 1.5px #8bfe00; color: transparent`
- `.condensed-header` — vertically stretched: `transform: scaleY(1.15)`
- `.acid-glow` — green text glow: `text-shadow: 0 0 15px rgba(139,254,0,0.6)`

---

## Spacing

| Token | Value | Usage |
|---|---|---|
| `margin-mobile` | 16px | Horizontal page padding on mobile |
| `margin-desktop` | 64px | Horizontal page padding on desktop |
| `stack-sm` | 8px | Tight vertical gap |
| `stack-md` | 16px | Standard vertical gap |
| `stack-lg` | 32px | Section inner spacing |
| `gutter` | 24px | Grid gutter |

### Max Width
All content is constrained to `max-w-[1280px] mx-auto`.

### Section Padding
- Standard: `py-16 md:py-24`
- Large: `py-24 md:py-32`
- Hero: `min-h-[90vh]` with `py-32`

---

## Border Radius

| Token | Value |
|---|---|
| `DEFAULT` | 0.125rem (2px) — nearly square |
| `lg` | 0.25rem |
| `xl` | 0.5rem |
| `full` | 0.75rem |

> The design is intentionally sharp/angular. Avoid large border radii.

---

## Layout

### Grid
- 12-column grid via Tailwind (`grid-cols-12`)
- Common patterns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, `lg:grid-cols-4`
- Philosophy section uses `lg:col-span-8` / `lg:col-span-4` split

### Page Structure (every page)

```
Navbar (fixed, injected via #navbar-placeholder + main.js)
  └── Breadcrumb (pt-28 pb-4)
  └── Hero Section (gradient bg + grid overlay)
  └── Stats Bar (border-y, bg-surface-deep)
  └── [Content Sections alternating bg]
  └── CTA Section (text-center, py-24 md:py-32)
Footer
```

### Alternating Section Backgrounds
Sections alternate between:
- `bg-[#0A0A0A]` / transparent (default)
- `bg-surface-deep border-y border-border-muted` (dark stripe)

---

## Components

### Buttons — `.btn-tag`

Clip-path chamfered corners: `polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)`

| Variant | Class | Style |
|---|---|---|
| Filled | `.btn-tag-fill` | Green bg, dark text → hover: black bg, green text + glow |
| Outline | `.btn-tag-outline` | Transparent bg, white text, muted border → hover: green border + glow |
| Ghost | `.btn-tag-ghost` | Transparent, green text, green border → hover: filled green |
| Explore | `.btn-explore` | Smaller, green tint bg, green border, chamfered |

Button elements:
- `.btn-tag-index` — `A/` prefix, 50% opacity
- `.btn-tag-dot` — 6px circle bullet

### Cards

| Class | Usage |
|---|---|
| `.service-card` | Linked service tiles |
| `.spec-card` | Spec/info panels |
| `.feature-card` | Capability grid items |
| `.post-card` | Blog post tiles |

All cards: `bg-[#0e0e0e] border border-[#262626]` → hover: `border-[#8bfe00]`

### Section Labels

```html
<div class="flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-widest mb-10">
  <span class="material-symbols-outlined text-[16px]">bolt</span>
  Section Title
</div>
```

### Breadcrumb

```html
<div class="flex items-center gap-2 font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
  <a href="services.html">Services</a>
  <span class="text-border-muted">/</span>
  <span class="text-primary-fixed">Current Page</span>
</div>
```

### Hero Badge (REC indicator)

```html
<div class="flex items-center gap-2 text-red-500 font-label-sm text-label-sm uppercase tracking-widest mb-8 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]">
  <div class="w-2.5 h-2.5 rounded-full bg-red-500 rec-pulse"></div>
  CATALOGUE // PAGE_NAME
</div>
```

### Process Steps — `.step-line`

Vertical green-to-dark gradient line with a glowing dot. Used in 4-column grids.

### FAQ Accordion

`.faq-item` → `.faq-question` (click) → toggles `.faq-open` → `.faq-answer` expands via `max-height` transition.

### Navbar

- Transparent on load → `nav-solid` (dark bg + green border glow) on scroll
- Dropdown panels: black bg, `border-top: green gradient line`
- Sub-panels slide in from right on hover
- Mobile: full-screen overlay with `VintagePropagandist` font links

### Marquee

`.marquee-container` + `.marquee-content` — infinite horizontal scroll at 30s, logos tinted `#8bfe00` at 50% opacity.

---

## Background Decorations

### Grid Overlay (hero sections)
```css
background: linear-gradient(to right, #262626 1px, transparent 1px),
            linear-gradient(to bottom, #262626 1px, transparent 1px);
background-size: 48px 48px;
opacity: 0.10;
```

### Colour Gradient (hero tint, per-page)
Each service page uses a unique gradient tint:
- Ad Videos: `from-rose-500/20 via-red-500/10`
- Short-form: `from-fuchsia-500/20 via-pink-500/10`
- Video Editing: `from-orange-500/20 via-red-500/10`

### Chemical Bar
Animated flowing green gradient bar used as a divider/accent.

---

## Animations

| Name | Effect |
|---|---|
| `pulse-red` | Scale + red box-shadow pulse — REC dot |
| `marquee` | Infinite horizontal scroll |
| `chemical-flow` | Background-position shift on green gradient bar |

---

## Scrollbar

```css
width: 6px;
track: #000000;
thumb: #262626 → hover: #8bfe00;
```

---

## Icons

Google Material Symbols Outlined — loaded via CDN.
Usage: `<span class="material-symbols-outlined text-[16px]">icon_name</span>`

---

## Design Principles

1. **Sharp & angular** — minimal border radius, chamfered button corners
2. **Dark-first** — near-black backgrounds, high contrast acid green accents
3. **Uppercase everywhere** — all labels, nav, buttons, headings in `uppercase`
4. **Monospace for UI** — JetBrains Mono for all labels, tags, metadata
5. **Green = interactive** — `#8bfe00` signals links, hovers, active states, and CTAs
6. **Stencil + solid** — headlines pair a solid white word with a green outline word
7. **Sections alternate** — dark stripe / transparent rhythm throughout every page
