# Studio Warmth Redesign - Design Document

## Overview

Full site overhaul of designoveratlanta.com moving from the current dark blue/amber "Arch Architecture" theme to a warm, approachable "Studio Warmth" aesthetic. The goal is to create a distinctive, human-feeling site that avoids generic AI aesthetics while serving four business objectives equally: lead generation, portfolio showcase, service/pricing clarity, and trust building.

## Color System

| Role | Color | Hex |
|------|-------|-----|
| Background (primary) | Warm cream | `#FAF7F2` |
| Background (cards) | Soft white | `#FFFFFF` |
| Background (accent sections) | Light sage wash | `#F0F4EE` |
| Text (headings) | Deep navy | `#1A2B3D` |
| Text (body) | Warm charcoal | `#3D4A5C` |
| Text (muted) | Slate gray | `#8494A7` |
| Accent (primary CTA) | Terracotta | `#C75B3A` |
| Accent (secondary) | Sage green | `#6B8F71` |
| Accent (warm highlight) | Golden honey | `#D4A853` |
| Accent (dark) | Deep forest | `#2C4A3E` |

## Typography

- **Headlines:** Barlow Condensed (existing) - larger sizes, tighter letter-spacing
- **Body:** Inter (existing) - clean and readable
- **Accent text:** Inter semi-bold for pull quotes and testimonials

## Visual Language

- Rounded corners (12-16px radius) on all cards/containers
- Soft box shadows (`0 2px 12px rgba(0,0,0,0.06)`) instead of hard borders or glows
- Organic blob/wave shapes as subtle section decorators (replacing arch/blueprint motifs)
- Warm gradient overlays (cream-to-transparent) instead of dark gradients
- Wave SVG dividers between sections (organic curves, not geometric arches)

## Page Layouts

### Homepage (`/`)

1. **Hero Section**
   - Warm cream background, no dark overlay
   - Large headline: conversational, human copy about demo-first approach
   - Subtext explaining value proposition
   - Terracotta CTA button ("Get Your Free Demo")
   - Hunter's headshot in rounded frame on the right side
   - Subtle organic shape decorator in background

2. **Trust Bar**
   - Simple strip: "Trusted by 50+ Atlanta businesses" or client logo row
   - Light sage wash background

3. **Services Preview**
   - 3-column card grid on sage wash background
   - Each card: icon, service name, one-line description, starting price, "Learn more" link
   - White cards with soft shadows, rounded corners

4. **Portfolio Showcase**
   - Section title + 3-4 featured projects
   - Real browser/phone mockup screenshots (replace scene animations entirely)
   - Project name, client industry, "View project" link
   - Clean grid layout, no heavy animations

5. **About Teaser**
   - Side-by-side layout: Hunter's rounded photo + short bio
   - "Meet Hunter" link to about page
   - Sage background section with organic shape accent

6. **Pricing Preview**
   - Clean comparison table/cards for 3 hosting tiers
   - Terracotta highlight on recommended plan
   - Clear CTAs per tier

7. **CTA Section**
   - "Ready to get started?" heading
   - Contact form embedded directly (not just a link)
   - Golden honey accent background wash

### About Page (`/about`)

- Large hero with Hunter's photo, warm cream overlay
- Story section with pull quotes in golden honey
- Values/approach as icon + text blocks
- CTA to contact at bottom

### Services Page (`/services`)

- Service cards in staggered grid
- Each service with clear pricing displayed
- Examples/sample work references
- CTA after each service section

### Contact Page (`/contact`)

- Two-column: form left, contact info right
- Warm inviting copy ("Let's talk about your project")
- Rounded form fields, sage focus states
- No map needed - keep it simple

### Portfolio (within homepage, expandable later)

- Grid of project cards with hover detail reveal
- Filter by service type (if multiple categories)
- Links to live sites or case studies

### Prompts Page (`/prompts`) - Minimal refresh

- Apply new color palette and typography
- Keep functionality intact

### Ads/Toolkit Pages - Minimal refresh

- Apply new color palette
- Keep existing functionality

### Terms Page - Minimal refresh

- Apply new typography and colors

## Components

### Navbar

- Sticky, white background
- Subtle bottom shadow appears on scroll
- DOA logo (left), nav links (center), "Get a Quote" terracotta button (right)
- Mobile: slide-in drawer from right, warm cream background

### Footer

- Sage wash background
- 3 columns: navigation links, contact info, social links
- Small DOA logo + copyright bottom

### Shared Components

- **Buttons:** Rounded (8px radius), terracotta primary, sage secondary, outline variant. Gentle scale-up (1.02x) on hover.
- **Cards:** White background, 14px radius, soft shadow, generous padding (24-32px). Lift slightly on hover with shadow deepening.
- **Section dividers:** Gentle wave SVG curves (organic, not geometric arches)
- **Badge/tag:** For service categories, rounded pill shape
- **ScrollReveal:** Keep but simplify to fade-up only, no complex sequences

### Micro-interactions

- Cards: lift + shadow deepen on hover
- Buttons: scale 1.02x on hover, subtle color shift
- Nav links: terracotta underline slide animation on hover
- Portfolio mockups: subtle parallax tilt on hover
- Scroll reveal: simple fade-up with staggered delays
- All animations respect `prefers-reduced-motion`

## What Gets Removed

- All scene animations (floating books, fireflies, water droplets, car gleams, etc.)
- Arch Architecture shape system (arch-divider, blueprint-grid, column-accent, spire-accent, skyline-accent)
- Dark background sections (replaced with cream/sage/white)
- Glow effects (glow-accent, glow-magenta, glow-emerald)
- Mesh background overlays
- Gradient text effects (replaced with solid deep navy)
- Complex gradient headers

## What Gets Kept

- Next.js 16 + Tailwind v4 stack
- Inter + Barlow Condensed fonts
- Contact form functionality (nodemailer + SMS)
- ScrollReveal component (simplified)
- PricingSection component (restyled)
- Responsive mobile-first approach
- All page routes and their core content/functionality
- API endpoint for contact form

## Technical Notes

- Replace CSS custom properties in globals.css with new palette
- Remove ~500 lines of scene animation CSS
- Replace arch shape classes with organic wave/blob SVGs
- Update Navbar and Footer components
- Restyle all page components with new design tokens
- Keep all existing functionality intact (forms, routing, API)
