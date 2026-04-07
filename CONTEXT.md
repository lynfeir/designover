# DOA (Design over Atlanta) — Context

## What This Is
The primary marketing website for Design over Atlanta, a web design and business automation agency. This is the production version hosted at designoveratlanta.com (per CNAME). It offers custom websites from $200 with 48-hour delivery, plus business automation tools. Features an earthy, editorial design language with a forest/terra color scheme. Includes a marketing toolkit with 106 downloadable social media ads, marketing plans, referral program, and promotional materials.

## Tech Stack
- Next.js 16.1.6 (App Router)
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- Nodemailer (email sending for contact form)
- html2canvas (screenshot/image generation)

## Architecture
- `src/app/` -- App Router pages: home, about, services, contact, terms, ads, toolkit, prompts
- `src/app/api/contact/` -- Contact form API endpoint (uses Nodemailer)
- `src/app/toolkit/` -- Marketing toolkit with tabbed interface (ads, marketing plans, referral program, promo materials)
- `src/app/ads/` -- Ad showcase/gallery page
- `src/components/` -- Shared: Navbar, Footer, ContactForm, PricingSection, ScrollReveal
- `src/components/toolkit/` -- Toolkit-specific: AdGrid, MarketingPlans, ReferralProgram, PromoMaterials, ToolkitNav
- CNAME file points to designoveratlanta.com (deployed via Vercel)
- Contact form submits to API route that sends email via Nodemailer

## Rules & Conventions
- Earthy/editorial design: forest green background, terra cotta accent, cream body sections
- Geometric design elements (diamond shapes, dot grids, diagonal lines)
- Color variables: forest, terra, terra-light, bg-cream, text-heading, text-body, text-muted
- Mobile-first responsive with max-w-[1400px] container
- Font sizing uses clamp() for fluid typography
- Components use PascalCase naming
- Marketing copy emphasizes cost savings vs competitors

## What's Built vs What's Not
### Built
- Full marketing homepage with hero, stats, services breakdown
- Services page with two tiers (Websites + Automation)
- Pricing section with tiered pricing
- Contact page with working email form (Nodemailer)
- About page
- Terms page
- Marketing toolkit with 106 downloadable ads in 4 social formats
- Marketing plans section
- Referral program ($50 per referral)
- Promotional materials (elevator pitches, email signatures, business cards, flyers, social bios)
- Ad showcase page
- Scroll reveal animations
- Custom domain (designoveratlanta.com)

### Not Built / Incomplete
- Prompts section (route exists, content unclear)
- No CMS integration
- No analytics dashboard
- No client portal

## Decision Log
| Date | Decision | Why |
|------|----------|-----|
| 2026-03-27 | Initial CONTEXT.md created | Automated scan |

## Change Log
| Date | Change |
|------|--------|
| 2026-03-27 | CONTEXT.md created from automated project scan |
