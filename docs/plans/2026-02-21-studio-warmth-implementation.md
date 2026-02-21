# Studio Warmth Redesign - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign designoveratlanta.com from dark blue/amber "Arch Architecture" to warm, approachable "Studio Warmth" aesthetic across all pages.

**Architecture:** Replace all CSS custom properties and utility classes in globals.css with the new warm palette. Rewrite each page component to use light backgrounds, organic shapes, and soft shadows instead of dark sections, glows, and architectural motifs. Keep all business logic (contact form, API, routing) intact.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript

---

### Task 1: Replace Design Tokens in globals.css

**Files:**
- Modify: `src/app/globals.css` (lines 1-41 — the `@theme inline` block)

**Step 1: Replace the @theme inline block with new Studio Warmth tokens**

Replace the entire `@theme inline { ... }` block (lines 3-41) with:

```css
@theme inline {
  /* Backgrounds — warm, light-dominant */
  --color-bg-cream: #FAF7F2;
  --color-bg-white: #FFFFFF;
  --color-bg-sage: #F0F4EE;
  --color-bg-honey: #FDF8EE;

  /* Text */
  --color-text-heading: #1A2B3D;
  --color-text-body: #3D4A5C;
  --color-text-muted: #8494A7;

  /* Accent — Terracotta (primary CTA) */
  --color-terra: #C75B3A;
  --color-terra-light: #D4714F;
  --color-terra-dark: #A84A2E;
  --color-terra-soft: rgba(199, 91, 58, 0.10);

  /* Accent — Sage Green (secondary) */
  --color-sage: #6B8F71;
  --color-sage-soft: rgba(107, 143, 113, 0.10);

  /* Accent — Golden Honey (warm highlight) */
  --color-honey: #D4A853;
  --color-honey-soft: rgba(212, 168, 83, 0.10);

  /* Accent — Deep Forest (dark accent) */
  --color-forest: #2C4A3E;

  /* Status */
  --color-success: #4A8C2A;
  --color-success-soft: rgba(74, 140, 42, 0.10);
  --color-error: #C75B3A;

  /* Borders */
  --color-border: #E2DDD5;
  --color-border-light: #EDE9E3;
}
```

**Step 2: Run dev server to verify no build errors**

Run: `npm run dev`
Expected: Compiles without errors (pages will look broken — that's expected)

**Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: replace design tokens with Studio Warmth palette"
```

---

### Task 2: Rewrite globals.css Utility Classes & Remove Scene Animations

**Files:**
- Modify: `src/app/globals.css` (lines 42-782 — everything after the @theme block)

**Step 1: Replace all utility classes and remove scene animations**

Replace everything from line 42 onward (after the closing `}` of `@theme inline`) with:

```css
/* Fonts loaded via next/font/google in layout.tsx */

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  background-color: var(--color-bg-cream);
  color: var(--color-text-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-barlow-condensed), var(--font-inter), sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-text-heading);
}

/* ── Scroll Reveal ── */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered reveal delays */
.reveal-stagger-1 { transition-delay: 0.08s; }
.reveal-stagger-2 { transition-delay: 0.16s; }
.reveal-stagger-3 { transition-delay: 0.24s; }
.reveal-stagger-4 { transition-delay: 0.32s; }

/* ── Card Hover ── */
.card-hover {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}

/* ── Button Hover ── */
.btn-hover {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-hover:hover {
  transform: scale(1.02);
}

/* ── Wave Section Divider ── */
.wave-divider {
  position: relative;
}
.wave-divider::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 60px;
  background: var(--wave-next-bg, var(--color-bg-cream));
  clip-path: ellipse(55% 100% at 50% 100%);
  z-index: 2;
}

/* ── Accessibility ── */
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .card-hover:hover {
    transform: none;
  }
  .btn-hover:hover {
    transform: none;
  }
}
```

This removes:
- All scene animation keyframes (~300 lines)
- All arch architecture shapes (~100 lines)
- Gradient text, glow effects, mesh backgrounds
- Shimmer, trace-border, glass-card, niche-tag
- All per-project scene CSS classes

**Step 2: Verify build**

Run: `npm run dev`
Expected: Compiles without errors

**Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: rewrite utility classes, remove scene animations and arch shapes"
```

---

### Task 3: Update Root Layout

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Update body classes**

Change line 42:
```tsx
<body className="bg-bg-dark text-text-white antialiased">
```
To:
```tsx
<body className="bg-bg-cream text-text-body antialiased">
```

**Step 2: Verify build**

Run: `npm run dev`
Expected: Page renders with cream background

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: update root layout to warm cream background"
```

---

### Task 4: Redesign Navbar Component

**Files:**
- Modify: `src/components/Navbar.tsx`

**Step 1: Rewrite the Navbar with Studio Warmth styling**

Replace the entire file content with a warm-themed navbar:
- White background (not dark)
- Shadow on scroll instead of backdrop blur
- Deep navy text instead of white
- Terracotta CTA button
- Terracotta underline on active link
- Warm cream mobile menu background
- Hamburger lines in dark color

Key changes:
- `bg-bg-dark/95` → `bg-white shadow-sm`
- `text-text-white` → `text-text-heading`
- `text-text-muted` → `text-text-body`
- `gradient-cta` → `bg-terra text-white`
- Mobile menu: `bg-bg-dark/98` → `bg-bg-cream`
- Active indicator: `gradient-cta` → `bg-terra`
- Remove all `border-white/[0.08]` borders
- Add `border-b border-border-light` when scrolled

**Step 2: Verify navbar renders correctly**

Run: `npm run dev`
Expected: White navbar with dark text, terracotta button

**Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: redesign navbar with warm white theme"
```

---

### Task 5: Redesign Footer Component

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Restyle Footer with sage wash background**

Key changes:
- `bg-bg-dark` → `bg-bg-sage`
- `border-border-dark` → `border-border`
- `text-text-white` → `text-text-heading`
- `text-text-muted` → `text-text-body`
- `gradient-text` on "over" → just `text-terra`
- `text-accent` → `text-terra`
- Link hover: `hover:text-text-white` → `hover:text-text-heading`
- Bottom border: `border-border-dark` → `border-border`
- Copyright text: `text-text-muted` → `text-text-muted` (same token name, new value)

**Step 2: Verify footer**

**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: redesign footer with sage wash background"
```

---

### Task 6: Restyle ContactForm Component

**Files:**
- Modify: `src/components/ContactForm.tsx`

**Step 1: Update form styling**

Key changes:
- Input focus: `focus:border-accent focus:ring-accent/10` → `focus:border-sage focus:ring-sage/10`
- Submit button: `gradient-cta` → `bg-terra hover:bg-terra-dark text-white btn-hover`
- Card wrapper shadow: replace blue shadow with neutral soft shadow
- Toast success: `bg-emerald` → `bg-success`
- Toast error: `bg-rose` → `bg-error`
- Success checkmark: `bg-emerald-soft text-emerald` → `bg-success-soft text-success`
- "Send Another" button: `hover:border-accent hover:text-accent-dark` → `hover:border-terra hover:text-terra`
- Remove `gradient-cta` from submit button, use solid terracotta

**Step 2: Verify form still submits correctly**

**Step 3: Commit**

```bash
git add src/components/ContactForm.tsx
git commit -m "feat: restyle contact form with warm theme"
```

---

### Task 7: Restyle PricingSection Component

**Files:**
- Modify: `src/components/PricingSection.tsx`

**Step 1: Complete restyle of pricing section**

Key changes:
- Section: `bg-bg-dark` → `bg-bg-cream`
- Remove all dot grids, diagonal textures, fine grid lines
- Section heading text: white → dark (`text-text-heading`)
- `shimmer-text` → solid `text-terra`
- `text-[#E8A838]` → `text-terra`
- `gradient-line` → simple `h-[3px] w-20 bg-terra rounded` div
- Savings callout: restyle with sage/cream bg, remove emerald/accent gradients
- Cards: `bg-bg-card border-border-dark` → `bg-white border-border shadow-sm`
- Professional card: `border-[#E8A838] glow-magenta` → `border-terra shadow-md`
- "Most Popular" badge: `gradient-cta` → `bg-terra`
- Card text: `text-text-white` → `text-text-heading`
- `text-text-muted` stays but maps to new muted value
- Checkmarks: `text-emerald` → `text-success`
- Price comparison: `text-rose` → `text-error`, `text-emerald` → `text-success`
- CTA buttons: `gradient-cta` → `bg-terra text-white`, outline → `border-border hover:border-terra`
- Remove all `hover-tilt`, replace with `card-hover`
- Remove grid textures on hover
- Remove connecting line between cards
- Remove corner accent ellipses

**Step 2: Verify pricing displays correctly**

**Step 3: Commit**

```bash
git add src/components/PricingSection.tsx
git commit -m "feat: restyle pricing section with warm cream theme"
```

---

### Task 8: Redesign Homepage (page.tsx)

**Files:**
- Modify: `src/app/page.tsx`

This is the largest task. The homepage has ~1400 lines and needs a complete rewrite.

**Step 1: Rewrite the Hero section**

Replace the current dark hero (lines 1-165) with:
- Cream background, no dark overlays or dot grids
- Remove all floating orbs, arch accents, grid textures
- Keep the two-column layout (copy left, visual right)
- Change text colors: `text-text-white` → `text-text-heading`
- Change `text-text-muted` → `text-text-body`
- Replace `shimmer-text` with `text-terra`
- Replace `gradient-cta` buttons with `bg-terra text-white btn-hover`
- Replace outline button: `border-white/20` → `border-border hover:border-terra`
- Replace browser mockup card: `bg-bg-card border-border-dark` → `bg-white border-border shadow-lg`
- Browser dots stay (they're universal)
- Remove floating chips or make them cream/white themed
- Replace `step-number` with plain styled numbers
- Replace arch divider with wave divider
- Stats bar: `border-border-dark` → `border-border`, stat numbers in `text-terra`
- Remove duplicate "Est. Atlanta, GA" line

**Step 2: Rewrite the Services section**

Replace the services section with:
- `bg-bg-sage` background
- Remove `section-arch` class, dot grid
- Heading: `text-text-heading`, remove `gradient-text`
- Replace `gradient-line` with solid terracotta bar
- Cards: `bg-white border-border shadow-sm card-hover`
- Remove all grid line textures, corner accent triangles, arch accents
- Icons stay, update colors: `text-accent-dark` → `text-terra`, `text-[#E8A838]` → `text-honey`, `text-[#4FA3D9]` → `text-sage`
- Tags: `bg-accent-soft text-accent-dark` → `bg-terra-soft text-terra`
- "See Full Service Details" link: `border-border-light` → `border-border hover:border-terra hover:text-terra`
- Wave divider to next section

**Step 3: Rewrite the Demo-First Promise section**

- `bg-bg-cream` background
- Card: `bg-white border-border shadow-md` instead of dark gradient
- Text: dark colors
- CTA: `bg-terra text-white btn-hover`
- Remove spire-accent, arch accents, glow orbs

**Step 4: Rewrite the Meet the Founder section**

- `bg-bg-sage` background
- Remove grid behind headshot, accent shapes
- Headshot border: `border-border` instead of `border-accent/15`
- Text: dark colors
- Tags: `bg-terra-soft text-terra`
- CTA buttons: terracotta primary, outline secondary

**Step 5: Rewrite the Portfolio section — MAJOR CHANGE**

This is where the biggest design change happens. Remove ALL scene animations and replace with simple project cards.

Replace the entire portfolio section (~700 lines) with a clean grid:
- `bg-bg-cream` background
- Section heading: dark text, terracotta accent
- 3-column grid (2 on tablet, 1 on mobile)
- Each project card: white bg, rounded corners, shadow, hover lift
- Card contains: colored accent bar at top (3px), project name, niche tag, description (shortened), tech tags, "View Site →" link
- No browser chrome mockups, no scene animations, no perspective transforms
- Keep project data (name, url, niche, tags, desc) but simplify
- Remove: scene, colorGlow, colorSoft, stat, reverse properties
- Keep: name, url, tagline, desc (shortened), niche, tags, color

**Step 6: Rewrite the Process section**

- `bg-bg-sage` background
- Remove grid textures, arch divider
- Step cards: clean, centered, no hover grid textures
- Step number circles: `bg-terra-soft text-terra` for icons
- Numbers: `text-terra/20`
- Remove connecting line between steps or make it cream/sage
- Replace `gradient-text` with `text-terra`

**Step 7: Rewrite the Testimonials section**

- `bg-bg-cream` background
- Remove grid textures, orbs, arch accents
- Cards: `bg-white border-border shadow-sm card-hover`
- Quote mark: light terra color
- Remove arch top accents, corner triangles
- Text: dark colors for names, body for quotes
- Initials circle: `bg-terra-soft text-terra`

**Step 8: Rewrite the CTA section**

- `bg-bg-honey` (golden honey wash) background
- Remove all layered backgrounds (glow orbs, arch accents, grids, dot grids)
- Founder avatar: simple rounded, border-terra
- Remove `shimmer-text`
- Heading/subtext: dark colors
- CTA: `bg-terra text-white btn-hover`
- Secondary: `border-border hover:border-terra text-text-heading`

**Step 9: Verify homepage renders correctly**

Run: `npm run dev` and check all sections

**Step 10: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: redesign homepage with Studio Warmth theme"
```

---

### Task 9: Redesign About Page

**Files:**
- Modify: `src/app/about/page.tsx`

**Step 1: Restyle all sections**

- Hero: `bg-bg-cream` instead of `bg-bg-dark`, dark text
- Remove all grid lines, arch accents, radial gradients
- "Meet Hunter" section: `bg-bg-sage`, remove grid behind headshot
- Headshot: warm border, remove accent shapes
- Tags: `bg-terra-soft text-terra`
- "What Sets Us Apart" section: `bg-bg-cream`
- Cards: `bg-white border-border shadow-sm card-hover`
- Remove hover grid textures, corner accent triangles
- Stats: `bg-bg-sage`, stat numbers in `text-terra`
- Testimonials: `bg-bg-cream`, cards same as homepage
- CTA: `bg-bg-honey` with terracotta buttons
- Remove all `gradient-line`, `gradient-cta`, `shimmer-text`
- Replace `gradient-text` with `text-terra`
- Remove `<start_project>` / `</start_project>` code tags

**Step 2: Verify**

**Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: redesign about page with warm theme"
```

---

### Task 10: Redesign Services Page

**Files:**
- Modify: `src/app/services/page.tsx`

**Step 1: Restyle all sections**

- Hero: `bg-bg-cream`, dark text, remove grid/arch
- Websites section: `bg-bg-cream`, clean cards
- Graphic Design section: `bg-bg-sage`
- AI Tools section: `bg-bg-cream`
- "Why Our Pricing Wins" comparison: `bg-bg-sage`
  - Cards: white bg with soft shadows
  - Remove glow-accent, grid textures
  - Red/green comparison colors stay
- Remove all grid line textures, arch accents, corner triangles
- All `gradient-line` → solid terracotta bar
- All `gradient-cta` → `bg-terra text-white`
- CTA section: `bg-bg-honey`
- Remove `<get_started>` code tags

**Step 2: Verify**

**Step 3: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "feat: redesign services page with warm theme"
```

---

### Task 11: Redesign Contact Page

**Files:**
- Modify: `src/app/contact/page.tsx`

**Step 1: Restyle all sections**

- Hero: `bg-bg-cream`, dark text
- Contact section: `bg-bg-cream` (already bg-bg-white, close enough)
- Sidebar info cards: `bg-bg-sage border-border` instead of `bg-bg-light border-border-light`
- Icon backgrounds: `bg-terra-soft` with terra icons
- "Need Something Today" card: `bg-forest text-white` (deep forest for contrast)
  - Or keep as `bg-bg-sage` with terra buttons
- FAQ section: `bg-bg-sage`
- FAQ cards: `bg-white border-border shadow-sm`
- CTA: `bg-bg-honey`
- Remove radial gradients from hero
- All `text-accent` → `text-terra`
- All `gradient-cta` → `bg-terra text-white`

**Step 2: Verify form still works**

**Step 3: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat: redesign contact page with warm theme"
```

---

### Task 12: Minimal Refresh on Remaining Pages

**Files:**
- Modify: `src/app/prompts/page.tsx`
- Modify: `src/app/ads/page.tsx`
- Modify: `src/app/terms/page.tsx`
- Modify: `src/app/toolkit/page.tsx`

**Step 1: Update color references in each file**

For each file, search and replace:
- `bg-bg-dark` → `bg-bg-cream`
- `bg-bg-card` → `bg-white`
- `bg-bg-white` / `bg-bg-light` → `bg-bg-cream` or `bg-bg-sage`
- `text-text-white` → `text-text-heading`
- `text-text-muted` → `text-text-muted` (same token, new value)
- `text-accent` / `text-accent-light` → `text-terra`
- `border-border-dark` → `border-border`
- `border-border-light` → `border-border-light`
- `gradient-cta` → `bg-terra text-white`
- `gradient-text` → `text-terra`
- `bg-accent-soft` → `bg-terra-soft`
- Remove any `glow-*`, `arch-*`, `shimmer-*`, `mesh-bg` classes

**Step 2: Verify each page loads**

**Step 3: Commit**

```bash
git add src/app/prompts/page.tsx src/app/ads/page.tsx src/app/terms/page.tsx src/app/toolkit/page.tsx
git commit -m "feat: apply warm theme to prompts, ads, terms, and toolkit pages"
```

---

### Task 13: Update Toolkit Sub-Components

**Files:**
- Modify: `src/components/toolkit/AdGrid.tsx`
- Modify: `src/components/toolkit/AdCard.tsx`
- Modify: `src/components/toolkit/DownloadButton.tsx`
- Modify: `src/components/toolkit/MarketingPlans.tsx`
- Modify: `src/components/toolkit/PromoMaterials.tsx`
- Modify: `src/components/toolkit/ReferralProgram.tsx`
- Modify: `src/components/toolkit/ToolkitNav.tsx`

**Step 1: Apply same color mapping as Task 12**

Same search-and-replace pattern:
- Dark backgrounds → cream/sage/white
- White text → dark text
- Accent colors → terra/sage
- Remove any glow/arch classes

**Step 2: Verify toolkit tabs work**

**Step 3: Commit**

```bash
git add src/components/toolkit/
git commit -m "feat: apply warm theme to toolkit components"
```

---

### Task 14: Final Verification & Cleanup

**Step 1: Run full build**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 2: Visual verification of all pages**

Start dev server and check:
- `/` — Homepage renders with cream bg, all sections visible
- `/about` — About page styled correctly
- `/services` — Services page styled correctly
- `/contact` — Contact form works, submits correctly
- `/prompts` — Prompts page styled
- `/ads` — Ads page styled
- `/toolkit` — Toolkit tabs work
- `/terms` — Terms page styled

**Step 3: Check responsive design**

Verify mobile nav toggle works, all grids collapse properly

**Step 4: Search for any remaining old color references**

Run grep for:
- `bg-bg-dark` — should be zero hits
- `gradient-cta` — should be zero hits
- `shimmer-text` — should be zero hits
- `glow-` — should be zero hits
- `arch-` — should be zero hits

**Step 5: Final commit**

```bash
git add -A
git commit -m "fix: clean up any remaining old theme references"
```
