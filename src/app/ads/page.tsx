"use client";

import { useRef, useState, useLayoutEffect, useCallback } from "react";

/* ───────────────────────────── TYPES ───────────────────────────── */

interface AdVariant {
  id: string;
  label: string;
  w: number;
  h: number;
  platform: string;
  platformIcon: string;
  category: string;
}

interface AdDesign {
  id: string;
  name: string;
  category: string;
  layout: "hero" | "comparison" | "roi" | "testimonial" | "stats" | "savings" | "process" | "urgency" | "social-proof" | "eye-catcher";
  headline: string;
  subline: string;
  cta: string;
  badge?: string;
  accent: string;
  accentRGB: string;
  // Layout-specific data
  comparisonData?: { them: string; themPrice: string; us: string; usPrice: string; savings: string };
  roiData?: { year1Us: string; year1Them: string; saved: string; percent: string };
  testimonialData?: { quote: string; name: string; title: string; stat?: string };
  statsData?: { items: { value: string; label: string }[] };
  processSteps?: string[];
  savingsRows?: { label: string; them: string; us: string }[];
  bulletPoints?: string[];
}

/* ──────────────────────── PLATFORM SIZES ───────────────────────── */

const VARIANTS: AdVariant[] = [
  // Instagram — 3 sizes
  { id: "ig-post", label: "Post (1080x1080)", w: 1080, h: 1080, platform: "Instagram", platformIcon: "ig", category: "Instagram" },
  { id: "ig-story", label: "Story (1080x1920)", w: 1080, h: 1920, platform: "Instagram", platformIcon: "ig", category: "Instagram" },
  { id: "ig-landscape", label: "Landscape (1080x566)", w: 1080, h: 566, platform: "Instagram", platformIcon: "ig", category: "Instagram" },
  // Facebook — 3 sizes
  { id: "fb-post", label: "Post (1200x630)", w: 1200, h: 630, platform: "Facebook", platformIcon: "fb", category: "Facebook" },
  { id: "fb-story", label: "Story (1080x1920)", w: 1080, h: 1920, platform: "Facebook", platformIcon: "fb", category: "Facebook" },
  { id: "fb-square", label: "Square (1200x1200)", w: 1200, h: 1200, platform: "Facebook", platformIcon: "fb", category: "Facebook" },
  // Twitter / X
  { id: "x-post", label: "Post (1600x900)", w: 1600, h: 900, platform: "X (Twitter)", platformIcon: "x", category: "X (Twitter)" },
  // LinkedIn
  { id: "li-post", label: "Post (1200x627)", w: 1200, h: 627, platform: "LinkedIn", platformIcon: "li", category: "LinkedIn" },
  // TikTok
  { id: "tt-cover", label: "Video Cover (1080x1920)", w: 1080, h: 1920, platform: "TikTok", platformIcon: "tt", category: "TikTok" },
  // Pinterest
  { id: "pin", label: "Pin (1000x1500)", w: 1000, h: 1500, platform: "Pinterest", platformIcon: "pin", category: "Pinterest" },
  // YouTube
  { id: "yt-thumb", label: "Thumbnail (1280x720)", w: 1280, h: 720, platform: "YouTube", platformIcon: "yt", category: "YouTube" },
];

/* ──────────────────────── AD DESIGNS ───────────────────────────── */

const DESIGNS: AdDesign[] = [
  // ─── 1. THE PRICE SHOCK (Eye-catcher) ───
  {
    id: "price-shock",
    name: "Price Shock",
    category: "Eye-Catcher",
    layout: "eye-catcher",
    headline: "$200 Websites.",
    subline: "Agencies charge $2,000-$5,000+\nfor the same thing.\nWe charge $200.",
    cta: "Get a Free Demo",
    badge: "10x CHEAPER",
    accent: "#6366f1",
    accentRGB: "99,102,241",
    bulletPoints: [
      "Hand-coded, no templates",
      "Mobile-first & SEO-ready",
      "Free demo before you pay",
      "Full source code ownership",
    ],
  },
  // ─── 2. THE ROI BREAKDOWN ───
  {
    id: "roi-breakdown",
    name: "ROI Breakdown",
    category: "Convince",
    layout: "roi",
    headline: "Your Website Pays\nFor Itself",
    subline: "The hosting savings alone cover\nthe cost of the website.",
    cta: "See the Math",
    badge: "PAYS FOR ITSELF",
    accent: "#10b981",
    accentRGB: "16,185,129",
    roiData: {
      year1Them: "$2,240+",
      year1Us: "$236",
      saved: "$2,004",
      percent: "85%",
    },
    savingsRows: [
      { label: "Website Design", them: "$2,000+", us: "$200" },
      { label: "Hosting (12 mo)", them: "$240/yr", us: "$36/yr" },
      { label: "Year 1 Total", them: "$2,240+", us: "$236" },
    ],
  },
  // ─── 3. SIDE-BY-SIDE COMPARISON ───
  {
    id: "vs-agencies",
    name: "Us vs Agencies",
    category: "Convince",
    layout: "comparison",
    headline: "Why Pay\n10x More?",
    subline: "Same quality. Same result.\nA fraction of the cost.",
    cta: "Switch to Us",
    badge: "THE COMPARISON",
    accent: "#6366f1",
    accentRGB: "99,102,241",
    comparisonData: {
      them: "Typical Agency",
      themPrice: "$2,000+",
      us: "Design over Atlanta",
      usPrice: "$200",
      savings: "Save $1,800+",
    },
  },
  // ─── 4. HOSTING SAVINGS ───
  {
    id: "hosting-saves",
    name: "Hosting Saves",
    category: "Convince",
    layout: "savings",
    headline: "Stop Overpaying\nFor Hosting",
    subline: "Others charge $20/mo.\nWe charge $3/mo.\nThat's 85% less.",
    cta: "View Plans",
    badge: "$3/MO HOSTING",
    accent: "#10b981",
    accentRGB: "16,185,129",
    savingsRows: [
      { label: "Monthly Hosting", them: "$20/mo", us: "$3/mo" },
      { label: "Annual Cost", them: "$240/yr", us: "$36/yr" },
      { label: "You Save", them: "", us: "$204/yr" },
    ],
  },
  // ─── 5. SOCIAL PROOF / TESTIMONIAL ───
  {
    id: "testimonial-brooke",
    name: "3x Conversions",
    category: "Social Proof",
    layout: "testimonial",
    headline: "3x More\nConversions",
    subline: "Real results from real clients.",
    cta: "Get Results Like This",
    badge: "CLIENT RESULTS",
    accent: "#f59e0b",
    accentRGB: "245,158,11",
    testimonialData: {
      quote: "Our landing page loads instantly and converts 3x better than our previous site. Absolute wizard with code!",
      name: "Brooke Brum",
      title: "CEO, Fit4Lyfe",
      stat: "3x",
    },
  },
  // ─── 6. STATS CREDIBILITY ───
  {
    id: "stats-grid",
    name: "By the Numbers",
    category: "Social Proof",
    layout: "stats",
    headline: "Trusted by 150+\nBusinesses",
    subline: "Atlanta's most affordable\ncreative studio.",
    cta: "Join Them",
    badge: "PROVEN TRACK RECORD",
    accent: "#6366f1",
    accentRGB: "99,102,241",
    statsData: {
      items: [
        { value: "150+", label: "Projects Delivered" },
        { value: "$200", label: "Sites Starting At" },
        { value: "3x", label: "Better Conversions" },
        { value: "24hr", label: "Design Turnaround" },
      ],
    },
  },
  // ─── 7. DEMO FIRST PROMISE ───
  {
    id: "demo-first",
    name: "Demo First",
    category: "Trust",
    layout: "process",
    headline: "See It Before\nYou Pay",
    subline: "We build your site first.\nYou only pay if you love it.\nZero risk. Zero commitment.",
    cta: "Get Your Free Demo",
    badge: "100% FREE DEMO",
    accent: "#8b5cf6",
    accentRGB: "139,92,246",
    processSteps: [
      "Tell us about your business",
      "We build a working demo",
      "Love it? Make it yours",
      "Don't love it? No charge",
    ],
  },
  // ─── 8. GRAPHIC DESIGN PROMO ───
  {
    id: "design-promo",
    name: "Design Services",
    category: "Services",
    layout: "hero",
    headline: "Professional Design\nFrom $99",
    subline: "Business cards, logos, flyers,\nsocial graphics, brochures.\n24-72 hour turnaround.",
    cta: "Get a Quote",
    badge: "FROM $99",
    accent: "#3b82f6",
    accentRGB: "59,130,246",
    bulletPoints: [
      "Print-ready files included",
      "Full commercial rights",
      "Unlimited revisions",
      "Brand consistency guaranteed",
    ],
  },
  // ─── 9. AI AUTOMATION ───
  {
    id: "ai-tools",
    name: "AI Automation",
    category: "Services",
    layout: "hero",
    headline: "Replace That\nExtra Hire",
    subline: "Booking systems, intake forms,\nchatbots — running 24/7.\nNo salary. No sick days.",
    cta: "Automate Now",
    badge: "AI POWERED",
    accent: "#8b5cf6",
    accentRGB: "139,92,246",
    bulletPoints: [
      "Online booking systems",
      "Smart intake & lead forms",
      "Customer chatbot assistants",
      "Workflow automation bots",
    ],
  },
  // ─── 10. URGENCY / SCARCITY ───
  {
    id: "limited-offer",
    name: "Limited Offer",
    category: "Urgency",
    layout: "urgency",
    headline: "Your Competitors\nAlready Have One",
    subline: "A professional website is no longer\na luxury — it's a requirement.\nDon't get left behind.",
    cta: "Start for $200",
    badge: "DON'T WAIT",
    accent: "#f43f5e",
    accentRGB: "244,63,94",
    bulletPoints: [
      "3-7 day turnaround",
      "Free demo, no commitment",
      "Same-day response guaranteed",
    ],
  },
  // ─── 11. TESTIMONIAL 2 ───
  {
    id: "testimonial-cindy",
    name: "Client Love",
    category: "Social Proof",
    layout: "testimonial",
    headline: "\"Incredible\nAttention to Detail\"",
    subline: "Real feedback from real businesses.",
    cta: "See More Reviews",
    badge: "5-STAR REVIEW",
    accent: "#f59e0b",
    accentRGB: "245,158,11",
    testimonialData: {
      quote: "The attention to detail is incredible. Every animation, every interaction feels purposeful. Our users love the new experience!",
      name: "Cindy Evanoff",
      title: "Manager, Pine Crest Camp",
    },
  },
  // ─── 12. THE FULL BREAKDOWN ───
  {
    id: "full-package",
    name: "Full Package",
    category: "Convince",
    layout: "stats",
    headline: "Everything You Need.\nNothing You Don't.",
    subline: "One partner for web, design & AI.",
    cta: "Get Started",
    badge: "ALL-IN-ONE",
    accent: "#6366f1",
    accentRGB: "99,102,241",
    statsData: {
      items: [
        { value: "$200", label: "Custom Websites" },
        { value: "$99", label: "Graphic Design" },
        { value: "$3/mo", label: "Secure Hosting" },
        { value: "100%", label: "Code Ownership" },
      ],
    },
  },
  // ─── 13. WEBSITE REDESIGN — EYE-CATCHER ───
  {
    id: "redesign-shock",
    name: "Redesign Shock",
    category: "Redesigns",
    layout: "eye-catcher",
    headline: "Redesigns\nFrom $150.",
    subline: "Your old site is costing you\ncustomers every single day.\nWe'll rebuild it for less than\nyou think.",
    cta: "Get a Free Redesign Demo",
    badge: "WEBSITE REDESIGNS",
    accent: "#f59e0b",
    accentRGB: "245,158,11",
    bulletPoints: [
      "Keep your branding, lose the clutter",
      "Faster load times & modern design",
      "Mobile-first responsive rebuild",
      "SEO improvements built in",
    ],
  },
  // ─── 14. REDESIGN PRICING BREAKDOWN ───
  {
    id: "redesign-pricing",
    name: "Redesign Pricing",
    category: "Redesigns",
    layout: "roi",
    headline: "Redesign Pricing\nThat Makes Sense",
    subline: "Don't pay agency rates to fix\nwhat already exists.",
    cta: "Get Your Quote",
    badge: "TRANSPARENT PRICING",
    accent: "#f59e0b",
    accentRGB: "245,158,11",
    roiData: {
      year1Them: "$3,000+",
      year1Us: "$150",
      saved: "$2,850",
      percent: "95%",
    },
    savingsRows: [
      { label: "Homepage Redesign", them: "$1,500+", us: "$150" },
      { label: "Full Site (3-5pg)", them: "$3,000+", us: "$350-$600" },
      { label: "E-commerce Rebuild", them: "$5,000+", us: "$1,000+" },
    ],
  },
  // ─── 15. REDESIGN BEFORE/AFTER COMPARISON ───
  {
    id: "redesign-vs",
    name: "Old vs New",
    category: "Redesigns",
    layout: "comparison",
    headline: "Outdated Site?\nWe Fix That.",
    subline: "Same business. Completely\ntransformed online presence.",
    cta: "See the Difference",
    badge: "BEFORE & AFTER",
    accent: "#f59e0b",
    accentRGB: "245,158,11",
    comparisonData: {
      them: "Your Current Site",
      themPrice: "Losing $$$",
      us: "After Redesign",
      usPrice: "From $150",
      savings: "More traffic. More conversions.",
    },
  },
  // ─── 16. THE RULEBOOK — HOW WE WORK ───
  {
    id: "rulebook",
    name: "The Rulebook",
    category: "Rulebook",
    layout: "process",
    headline: "Our Rulebook.\nHow We Work.",
    subline: "Clear rules. No surprises.\nNo hidden fees. No BS.",
    cta: "Start Your Project",
    badge: "THE DOA RULEBOOK",
    accent: "#6366f1",
    accentRGB: "99,102,241",
    processSteps: [
      "You see a demo before you pay",
      "No contracts — cancel anytime",
      "You own 100% of the code",
      "Same-day response guaranteed",
      "Flat pricing — no hourly traps",
      "Unlimited revisions until perfect",
    ],
  },
  // ─── 17. RULEBOOK — WHAT'S INCLUDED ───
  {
    id: "rulebook-included",
    name: "What's Included",
    category: "Rulebook",
    layout: "stats",
    headline: "Every Project.\nAll of This Included.",
    subline: "No add-on fees. No \"premium\" tiers\nfor basic features.",
    cta: "See Plans",
    badge: "INCLUDED FREE",
    accent: "#10b981",
    accentRGB: "16,185,129",
    statsData: {
      items: [
        { value: "SSL", label: "Security Certificate" },
        { value: "SEO", label: "Search Optimization" },
        { value: "Mobile", label: "Responsive Design" },
        { value: "Code", label: "Full Source Ownership" },
      ],
    },
  },
  // ─── 18. FULL PRICING MENU ───
  {
    id: "pricing-menu",
    name: "Full Pricing",
    category: "Pricing",
    layout: "roi",
    headline: "Every Service.\nEvery Price.",
    subline: "No hidden fees. No surprises.\nFlat rates you can plan around.",
    cta: "Get a Free Demo",
    badge: "FULL PRICE LIST",
    accent: "#6366f1",
    accentRGB: "99,102,241",
    roiData: {
      year1Them: "",
      year1Us: "",
      saved: "",
      percent: "",
    },
    savingsRows: [
      { label: "Landing Page", them: "$1,500+", us: "$200" },
      { label: "Business Site", them: "$3,000+", us: "$400-$800" },
      { label: "Site Redesign", them: "$2,000+", us: "From $150" },
      { label: "Graphic Design", them: "$500+", us: "From $99" },
      { label: "Hosting", them: "$20/mo", us: "$3/mo" },
    ],
  },
  // ─── 19. HOSTING SWITCH — EYE-CATCHER ───
  {
    id: "switch-hosting",
    name: "Switch & Save",
    category: "Hosting Switch",
    layout: "eye-catcher",
    headline: "$3/mo Hosting.",
    subline: "You're probably paying $20/mo\nfor the same thing right now.\nSwitch and save $204 every year.",
    cta: "Switch Your Hosting",
    badge: "SAVE 85%",
    accent: "#10b981",
    accentRGB: "16,185,129",
    bulletPoints: [
      "Same speed, same uptime",
      "Free SSL certificate included",
      "Monthly backups included",
      "No contracts — cancel anytime",
    ],
  },
  // ─── 20. HOSTING SWITCH — THE MATH ───
  {
    id: "switch-math",
    name: "The Hosting Math",
    category: "Hosting Switch",
    layout: "roi",
    headline: "Do The Math\nOn Your Hosting",
    subline: "Your current hosting bill is\npaying for nothing extra.",
    cta: "See Plans",
    badge: "THE REAL NUMBERS",
    accent: "#10b981",
    accentRGB: "16,185,129",
    roiData: {
      year1Them: "$240/yr",
      year1Us: "$36/yr",
      saved: "$204",
      percent: "85%",
    },
    savingsRows: [
      { label: "Monthly Cost", them: "$20/mo", us: "$3/mo" },
      { label: "Annual Cost", them: "$240/yr", us: "$36/yr" },
      { label: "Over 3 Years", them: "$720", us: "$108" },
    ],
  },
  // ─── 21. HOSTING SWITCH — BAR CHART ───
  {
    id: "switch-bars",
    name: "Hosting Bars",
    category: "Hosting Switch",
    layout: "savings",
    headline: "Your Hosting\nIs a Ripoff",
    subline: "Most hosts charge $15-$25/mo\nfor basic shared hosting.\nWe charge $3. Same features.",
    cta: "Switch Today",
    badge: "STOP OVERPAYING",
    accent: "#10b981",
    accentRGB: "16,185,129",
    savingsRows: [
      { label: "Monthly Hosting", them: "$20/mo", us: "$3/mo" },
      { label: "Annual Total", them: "$240/yr", us: "$36/yr" },
      { label: "You Save", them: "", us: "$204/yr" },
    ],
  },
  // ─── 22. HOSTING SWITCH — PAYS FOR THE SITE ───
  {
    id: "switch-payoff",
    name: "Site Pays Itself",
    category: "Hosting Switch",
    layout: "process",
    headline: "Your Hosting\nPays For Your Site",
    subline: "Switch hosting, save $204/yr.\nThat covers a $200 website\nin the first 12 months.",
    cta: "Get Started",
    badge: "HOSTING PAYS FOR ITSELF",
    accent: "#10b981",
    accentRGB: "16,185,129",
    processSteps: [
      "You pay $20/mo hosting now",
      "Switch to us at $3/mo",
      "Save $17/mo ($204/yr)",
      "That covers a $200 website",
      "Free site + cheaper hosting",
    ],
  },
  // ─── 23. HOSTING SWITCH — URGENCY ───
  {
    id: "switch-now",
    name: "Switch Now",
    category: "Hosting Switch",
    layout: "urgency",
    headline: "Every Month You\nWait Costs $17",
    subline: "That's $17/mo you're throwing\naway on overpriced hosting.\nSwitch takes less than a day.",
    cta: "Switch for $3/mo",
    badge: "$17/MO WASTED",
    accent: "#f43f5e",
    accentRGB: "244,63,94",
    bulletPoints: [
      "We handle the entire migration",
      "Zero downtime during switch",
      "Same-day setup available",
    ],
  },
  // ─── 24. HOSTING SWITCH — COMPARISON CARDS ───
  {
    id: "switch-vs",
    name: "Them vs Us",
    category: "Hosting Switch",
    layout: "comparison",
    headline: "Your Host\nvs. Ours",
    subline: "Same hosting. Different price.\nWhy are you still paying more?",
    cta: "Make the Switch",
    badge: "SIDE BY SIDE",
    accent: "#10b981",
    accentRGB: "16,185,129",
    comparisonData: {
      them: "Your Current Host",
      themPrice: "$20/mo",
      us: "Design over Atlanta",
      usPrice: "$3/mo",
      savings: "Save $204 every year",
    },
  },
  // ─── 25. HOSTING — WHAT'S INCLUDED ───
  {
    id: "switch-included",
    name: "All Included",
    category: "Hosting Switch",
    layout: "stats",
    headline: "$3/mo Gets You\nAll of This",
    subline: "Others charge extra for these.\nWe include them free.",
    cta: "View Plans",
    badge: "ALL INCLUDED AT $3/MO",
    accent: "#10b981",
    accentRGB: "16,185,129",
    statsData: {
      items: [
        { value: "SSL", label: "Free Certificate" },
        { value: "99.9%", label: "Uptime Guaranteed" },
        { value: "Daily", label: "Site Backups" },
        { value: "$0", label: "Migration Fee" },
      ],
    },
  },
];

/* ═══════════════════════ CANVAS RENDERERS ═══════════════════════ */

function renderAd(canvas: HTMLCanvasElement, variant: AdVariant, design: AdDesign) {
  const { w, h } = variant;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  const s = Math.min(w, h) / 1080; // scale factor
  const isPortrait = h > w;
  const isWide = w / h > 2;
  const pad = (isWide ? 50 : 70) * s;

  // ─── Shared Background ───
  drawBackground(ctx, w, h, s, design);

  // ─── Dispatch to layout renderer ───
  switch (design.layout) {
    case "hero": renderHeroLayout(ctx, w, h, s, pad, design, isPortrait, isWide); break;
    case "eye-catcher": renderEyeCatcherLayout(ctx, w, h, s, pad, design, isPortrait, isWide); break;
    case "comparison": renderComparisonLayout(ctx, w, h, s, pad, design, isPortrait, isWide); break;
    case "roi": renderROILayout(ctx, w, h, s, pad, design, isPortrait, isWide); break;
    case "savings": renderSavingsLayout(ctx, w, h, s, pad, design, isPortrait, isWide); break;
    case "testimonial": renderTestimonialLayout(ctx, w, h, s, pad, design, isPortrait, isWide); break;
    case "stats": renderStatsLayout(ctx, w, h, s, pad, design, isPortrait, isWide); break;
    case "process": renderProcessLayout(ctx, w, h, s, pad, design, isPortrait, isWide); break;
    case "urgency": renderUrgencyLayout(ctx, w, h, s, pad, design, isPortrait, isWide); break;
    default: renderHeroLayout(ctx, w, h, s, pad, design, isPortrait, isWide); break;
  }

  // ─── Shared bottom branding bar ───
  drawBrandingBar(ctx, w, h, s, pad, design, isWide);
}

/* ════════════════════════ SHARED DRAWING ════════════════════════ */

function drawBackground(ctx: CanvasRenderingContext2D, w: number, h: number, s: number, design: AdDesign) {
  // Dark base
  ctx.fillStyle = "#050a14";
  ctx.fillRect(0, 0, w, h);

  // Mesh gradient orbs
  const drawOrb = (x: number, y: number, r: number, rgb: string, a: number) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(${rgb},${a})`);
    g.addColorStop(1, `rgba(${rgb},0)`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  };

  drawOrb(w * 0.75, h * 0.2, w * 0.45, design.accentRGB, 0.1);
  drawOrb(w * 0.15, h * 0.8, w * 0.35, "16,185,129", 0.07);
  drawOrb(w * 0.5, h * 0.5, w * 0.25, design.accentRGB, 0.04);

  // Subtle dot grid
  ctx.fillStyle = "rgba(255,255,255,0.015)";
  const gap = 40 * s;
  for (let x = gap; x < w; x += gap) {
    for (let y = gap; y < h; y += gap) {
      ctx.beginPath();
      ctx.arc(x, y, 1.2 * s, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Top accent line
  const lg = ctx.createLinearGradient(0, 0, w, 0);
  lg.addColorStop(0, "transparent");
  lg.addColorStop(0.2, `rgba(${design.accentRGB},0.7)`);
  lg.addColorStop(0.8, `rgba(${design.accentRGB},0.7)`);
  lg.addColorStop(1, "transparent");
  ctx.fillStyle = lg;
  ctx.fillRect(0, 0, w, 4 * s);

  // Top glow
  const tg = ctx.createLinearGradient(0, 0, 0, 40 * s);
  tg.addColorStop(0, `rgba(${design.accentRGB},0.2)`);
  tg.addColorStop(1, "transparent");
  ctx.fillStyle = tg;
  ctx.fillRect(0, 0, w, 40 * s);

  // Corner brackets
  drawCornerBrackets(ctx, w, h, s, design.accentRGB);
}

function drawCornerBrackets(ctx: CanvasRenderingContext2D, w: number, h: number, s: number, rgb: string) {
  const len = 80 * s;
  const off = 30 * s;
  ctx.strokeStyle = `rgba(${rgb},0.25)`;
  ctx.lineWidth = 2.5 * s;
  ctx.lineCap = "round";
  // TL
  ctx.beginPath(); ctx.moveTo(off + len, off); ctx.lineTo(off, off); ctx.lineTo(off, off + len); ctx.stroke();
  // TR
  ctx.beginPath(); ctx.moveTo(w - off - len, off); ctx.lineTo(w - off, off); ctx.lineTo(w - off, off + len); ctx.stroke();
  // BL
  ctx.beginPath(); ctx.moveTo(off, h - off - len); ctx.lineTo(off, h - off); ctx.lineTo(off + len, h - off); ctx.stroke();
  // BR
  ctx.beginPath(); ctx.moveTo(w - off, h - off - len); ctx.lineTo(w - off, h - off); ctx.lineTo(w - off - len, h - off); ctx.stroke();
}

function drawBrandingBar(ctx: CanvasRenderingContext2D, w: number, h: number, s: number, pad: number, design: AdDesign, isWide: boolean) {
  const barH = (isWide ? 50 : 70) * s;
  const barY = h - barH;

  // Frosted bar
  ctx.fillStyle = "rgba(5,10,20,0.88)";
  ctx.fillRect(0, barY, w, barH);
  ctx.fillStyle = `rgba(${design.accentRGB},0.15)`;
  ctx.fillRect(0, barY, w, 1.5 * s);

  // Logo
  const fs = Math.round((isWide ? 16 : 20) * s);
  ctx.font = `700 ${fs}px 'Satoshi','Inter',sans-serif`;
  ctx.textBaseline = "middle";
  const ly = barY + barH / 2;

  ctx.fillStyle = "#f1f5f9";
  ctx.fillText("Design ", pad, ly);
  const dw = ctx.measureText("Design ").width;

  const og = ctx.createLinearGradient(pad + dw, ly - fs / 2, pad + dw + ctx.measureText("over").width, ly + fs / 2);
  og.addColorStop(0, "#6366f1");
  og.addColorStop(0.5, "#818cf8");
  og.addColorStop(1, "#a78bfa");
  ctx.fillStyle = og;
  ctx.fillText("over", pad + dw, ly);
  const ow = ctx.measureText("over").width;

  ctx.fillStyle = "#f1f5f9";
  ctx.fillText(" Atlanta", pad + dw + ow, ly);

  // URL
  const uf = Math.round((isWide ? 13 : 15) * s);
  ctx.font = `500 ${uf}px 'Inter',sans-serif`;
  ctx.fillStyle = "#64748b";
  const url = "designoveratlanta.com";
  ctx.fillText(url, w - pad - ctx.measureText(url).width, ly);

  // Phone
  const phoneText = "(470) 758-3549";
  ctx.fillStyle = `rgba(${design.accentRGB},0.7)`;
  const phoneW = ctx.measureText(phoneText).width;
  const urlW = ctx.measureText(url).width;
  if (w - pad * 2 - dw - ow - ctx.measureText(" Atlanta").width > phoneW + urlW + 60 * s) {
    ctx.fillText(phoneText, w - pad - urlW - phoneW - 30 * s, ly);
  }
}

function drawBadge(ctx: CanvasRenderingContext2D, x: number, y: number, text: string, s: number, rgb: string, accent: string): number {
  const fs = Math.round(13 * s);
  ctx.font = `800 ${fs}px 'Inter',sans-serif`;
  const tw = ctx.measureText(text).width;
  const px = 16 * s, py = 9 * s;
  const bw = tw + px * 2, bh = fs + py * 2;

  ctx.fillStyle = `rgba(${rgb},0.15)`;
  roundRect(ctx, x, y, bw, bh, 8 * s);
  ctx.fill();
  ctx.strokeStyle = `rgba(${rgb},0.4)`;
  ctx.lineWidth = 1.5 * s;
  roundRect(ctx, x, y, bw, bh, 8 * s);
  ctx.stroke();
  ctx.fillStyle = accent;
  ctx.textBaseline = "middle";
  ctx.fillText(text, x + px, y + bh / 2 + 1);

  return bh;
}

function drawHeadline(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, s: number, maxW: number, isPortrait: boolean, isWide: boolean): number {
  const fs = Math.round((isWide ? 44 : isPortrait ? 62 : 52) * s);
  ctx.font = `800 ${fs}px 'Satoshi','Inter',sans-serif`;
  ctx.textBaseline = "top";
  const lines = text.split("\n");
  const lh = fs * 1.12;
  lines.forEach((line, i) => {
    const g = ctx.createLinearGradient(x, y + i * lh, x + Math.min(ctx.measureText(line).width, maxW), y + (i + 1) * lh);
    g.addColorStop(0, "#ffffff");
    g.addColorStop(0.7, "#f1f5f9");
    g.addColorStop(1, "#cbd5e1");
    ctx.fillStyle = g;
    ctx.fillText(line, x, y + i * lh, maxW);
  });
  return lines.length * lh;
}

function drawSubline(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, s: number, maxW: number, isWide: boolean): number {
  const fs = Math.round((isWide ? 17 : 20) * s);
  ctx.font = `400 ${fs}px 'Inter',sans-serif`;
  ctx.textBaseline = "top";
  ctx.fillStyle = "#94a3b8";
  const lines = text.split("\n");
  const lh = fs * 1.55;
  lines.forEach((line, i) => {
    ctx.fillText(line, x, y + i * lh, maxW);
  });
  return lines.length * lh;
}

function drawAccentLine(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, accent: string, rgb: string) {
  const g = ctx.createLinearGradient(x, 0, x + 140 * s, 0);
  g.addColorStop(0, accent);
  g.addColorStop(1, `rgba(${rgb},0)`);
  ctx.fillStyle = g;
  ctx.fillRect(x, y, 140 * s, 3.5 * s);
}

function drawCTA(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, s: number, accent: string, rgb: string) {
  const fs = Math.round(18 * s);
  ctx.font = `700 ${fs}px 'Inter',sans-serif`;
  const tw = ctx.measureText(text).width;
  const px = 32 * s, py = 16 * s;
  const bw = tw + px * 2 + 24 * s, bh = fs + py * 2;

  // Shadow
  ctx.shadowColor = `rgba(${rgb},0.35)`;
  ctx.shadowBlur = 25 * s;
  ctx.shadowOffsetY = 6 * s;

  const bg = ctx.createLinearGradient(x, y, x + bw, y + bh);
  bg.addColorStop(0, accent);
  bg.addColorStop(1, `rgba(${rgb},0.8)`);
  ctx.fillStyle = bg;
  roundRect(ctx, x, y, bw, bh, 12 * s);
  ctx.fill();

  ctx.shadowColor = "transparent"; ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;

  ctx.fillStyle = "#ffffff";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x + px, y + bh / 2 + 1);

  // Arrow
  const ax = x + px + tw + 14 * s, ay = y + bh / 2;
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2.5 * s;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(ax - 6 * s, ay);
  ctx.lineTo(ax + 6 * s, ay);
  ctx.moveTo(ax + 1 * s, ay - 5 * s);
  ctx.lineTo(ax + 6 * s, ay);
  ctx.lineTo(ax + 1 * s, ay + 5 * s);
  ctx.stroke();
}

function drawBulletPoints(ctx: CanvasRenderingContext2D, items: string[], x: number, y: number, s: number, accent: string, rgb: string): number {
  const fs = Math.round(17 * s);
  ctx.font = `500 ${fs}px 'Inter',sans-serif`;
  const lh = fs * 2;
  items.forEach((item, i) => {
    const iy = y + i * lh;
    // Checkmark circle
    ctx.fillStyle = `rgba(${rgb},0.15)`;
    ctx.beginPath();
    ctx.arc(x + 10 * s, iy + fs / 2, 10 * s, 0, Math.PI * 2);
    ctx.fill();
    // Checkmark
    ctx.strokeStyle = accent;
    ctx.lineWidth = 2 * s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(x + 5 * s, iy + fs / 2);
    ctx.lineTo(x + 9 * s, iy + fs / 2 + 4 * s);
    ctx.lineTo(x + 16 * s, iy + fs / 2 - 4 * s);
    ctx.stroke();
    // Text
    ctx.fillStyle = "#e2e8f0";
    ctx.textBaseline = "top";
    ctx.fillText(item, x + 28 * s, iy);
  });
  return items.length * lh;
}

/* ═══════════════════════ LAYOUT RENDERERS ═══════════════════════ */

function renderHeroLayout(ctx: CanvasRenderingContext2D, w: number, h: number, s: number, pad: number, d: AdDesign, isP: boolean, isW: boolean) {
  const contentW = w - pad * 2;
  let cy = isP ? h * 0.12 : isW ? h * 0.15 : h * 0.18;

  if (d.badge) { const bh = drawBadge(ctx, pad, cy, d.badge, s, d.accentRGB, d.accent); cy += bh + 18 * s; }
  const hh = drawHeadline(ctx, d.headline, pad, cy, s, contentW, isP, isW);
  cy += hh + 12 * s;
  drawAccentLine(ctx, pad, cy, s, d.accent, d.accentRGB);
  cy += 20 * s;
  const sh = drawSubline(ctx, d.subline, pad, cy, s, contentW, isW);
  cy += sh + 16 * s;

  if (d.bulletPoints && !isW) {
    const bph = drawBulletPoints(ctx, d.bulletPoints, pad, cy, s, d.accent, d.accentRGB);
    cy += bph + 20 * s;
  }

  if (!isW) drawCTA(ctx, d.cta, pad, cy, s, d.accent, d.accentRGB);
}

function renderEyeCatcherLayout(ctx: CanvasRenderingContext2D, w: number, h: number, s: number, pad: number, d: AdDesign, isP: boolean, isW: boolean) {
  const contentW = w - pad * 2;
  let cy = isP ? h * 0.1 : isW ? h * 0.12 : h * 0.13;

  if (d.badge) { const bh = drawBadge(ctx, pad, cy, d.badge!, s, d.accentRGB, d.accent); cy += bh + 18 * s; }

  // Giant price
  const bigFS = Math.round((isW ? 80 : isP ? 110 : 90) * s);
  ctx.font = `900 ${bigFS}px 'Satoshi','Inter',sans-serif`;
  ctx.textBaseline = "top";
  const priceGrad = ctx.createLinearGradient(pad, cy, pad + ctx.measureText(d.headline).width, cy + bigFS);
  priceGrad.addColorStop(0, "#ffffff");
  priceGrad.addColorStop(1, d.accent);
  ctx.fillStyle = priceGrad;
  ctx.fillText(d.headline, pad, cy, contentW);
  cy += bigFS + 10 * s;

  drawAccentLine(ctx, pad, cy, s, d.accent, d.accentRGB);
  cy += 22 * s;

  const sh = drawSubline(ctx, d.subline, pad, cy, s, contentW, isW);
  cy += sh + 18 * s;

  if (d.bulletPoints && !isW) {
    const bph = drawBulletPoints(ctx, d.bulletPoints, pad, cy, s, d.accent, d.accentRGB);
    cy += bph + 24 * s;
  }

  if (!isW) drawCTA(ctx, d.cta, pad, cy, s, d.accent, d.accentRGB);
}

function renderComparisonLayout(ctx: CanvasRenderingContext2D, w: number, h: number, s: number, pad: number, d: AdDesign, isP: boolean, isW: boolean) {
  const cd = d.comparisonData!;
  const contentW = w - pad * 2;
  let cy = isP ? h * 0.1 : isW ? h * 0.1 : h * 0.12;

  if (d.badge) { const bh = drawBadge(ctx, pad, cy, d.badge!, s, d.accentRGB, d.accent); cy += bh + 16 * s; }
  const hh = drawHeadline(ctx, d.headline, pad, cy, s, contentW, isP, isW);
  cy += hh + 10 * s;
  drawAccentLine(ctx, pad, cy, s, d.accent, d.accentRGB);
  cy += 26 * s;

  // Comparison cards
  const cardW = isW ? contentW * 0.38 : isP ? contentW : contentW * 0.44;
  const cardH = isP ? 200 * s : 160 * s;
  const gap = isP ? 16 * s : 24 * s;
  const cardX1 = isP ? pad : pad;
  const cardX2 = isP ? pad : pad + cardW + gap;
  const cardY1 = cy;
  const cardY2 = isP ? cy + cardH + gap : cy;

  // THEM card (red tint)
  ctx.fillStyle = "rgba(244,63,94,0.08)";
  roundRect(ctx, cardX1, cardY1, cardW, cardH, 16 * s);
  ctx.fill();
  ctx.strokeStyle = "rgba(244,63,94,0.25)";
  ctx.lineWidth = 1.5 * s;
  roundRect(ctx, cardX1, cardY1, cardW, cardH, 16 * s);
  ctx.stroke();

  ctx.font = `600 ${Math.round(14 * s)}px 'Inter',sans-serif`;
  ctx.fillStyle = "#f87171";
  ctx.textBaseline = "top";
  ctx.fillText(cd.them, cardX1 + 20 * s, cardY1 + 20 * s);

  ctx.font = `800 ${Math.round(38 * s)}px 'Satoshi','Inter',sans-serif`;
  ctx.fillStyle = "#f87171";
  ctx.fillText(cd.themPrice, cardX1 + 20 * s, cardY1 + 50 * s);

  // Strikethrough
  const priceW = ctx.measureText(cd.themPrice).width;
  ctx.strokeStyle = "#f87171";
  ctx.lineWidth = 3 * s;
  ctx.beginPath();
  ctx.moveTo(cardX1 + 16 * s, cardY1 + 70 * s);
  ctx.lineTo(cardX1 + 24 * s + priceW, cardY1 + 70 * s);
  ctx.stroke();

  ctx.font = `400 ${Math.round(13 * s)}px 'Inter',sans-serif`;
  ctx.fillStyle = "#94a3b8";
  ctx.fillText("+ $20/mo hosting", cardX1 + 20 * s, cardY1 + cardH - 40 * s);

  // US card (green tint)
  ctx.fillStyle = `rgba(${d.accentRGB},0.1)`;
  roundRect(ctx, cardX2, cardY2, cardW, cardH, 16 * s);
  ctx.fill();
  ctx.strokeStyle = `rgba(${d.accentRGB},0.35)`;
  ctx.lineWidth = 2 * s;
  roundRect(ctx, cardX2, cardY2, cardW, cardH, 16 * s);
  ctx.stroke();
  // Glow
  ctx.shadowColor = `rgba(${d.accentRGB},0.15)`;
  ctx.shadowBlur = 20 * s;
  roundRect(ctx, cardX2, cardY2, cardW, cardH, 16 * s);
  ctx.stroke();
  ctx.shadowColor = "transparent"; ctx.shadowBlur = 0;

  ctx.font = `600 ${Math.round(14 * s)}px 'Inter',sans-serif`;
  ctx.fillStyle = d.accent;
  ctx.textBaseline = "top";
  ctx.fillText(cd.us, cardX2 + 20 * s, cardY2 + 20 * s);

  ctx.font = `800 ${Math.round(38 * s)}px 'Satoshi','Inter',sans-serif`;
  ctx.fillStyle = "#ffffff";
  ctx.fillText(cd.usPrice, cardX2 + 20 * s, cardY2 + 50 * s);

  ctx.font = `400 ${Math.round(13 * s)}px 'Inter',sans-serif`;
  ctx.fillStyle = "#94a3b8";
  ctx.fillText("+ $3/mo hosting", cardX2 + 20 * s, cardY2 + cardH - 40 * s);

  cy = (isP ? cardY2 : cardY1) + cardH + 24 * s;

  // Savings banner
  const savFS = Math.round(20 * s);
  ctx.font = `800 ${savFS}px 'Satoshi','Inter',sans-serif`;
  const savText = cd.savings;
  const savTW = ctx.measureText(savText).width;
  const savPX = 24 * s, savPY = 14 * s;
  const savW = savTW + savPX * 2;
  const savH = savFS + savPY * 2;
  const savX = pad;

  ctx.fillStyle = `rgba(16,185,129,0.12)`;
  roundRect(ctx, savX, cy, savW, savH, 10 * s);
  ctx.fill();
  ctx.fillStyle = "#10b981";
  ctx.textBaseline = "middle";
  ctx.fillText(savText, savX + savPX, cy + savH / 2 + 1);

  cy += savH + 24 * s;
  if (!isW) drawCTA(ctx, d.cta, pad, cy, s, d.accent, d.accentRGB);
}

function renderROILayout(ctx: CanvasRenderingContext2D, w: number, h: number, s: number, pad: number, d: AdDesign, isP: boolean, isW: boolean) {
  const rd = d.roiData!;
  const rows = d.savingsRows!;
  const contentW = w - pad * 2;
  let cy = isP ? h * 0.09 : isW ? h * 0.1 : h * 0.1;

  if (d.badge) { const bh = drawBadge(ctx, pad, cy, d.badge!, s, d.accentRGB, d.accent); cy += bh + 16 * s; }
  const hh = drawHeadline(ctx, d.headline, pad, cy, s, contentW, isP, isW);
  cy += hh + 10 * s;
  drawAccentLine(ctx, pad, cy, s, d.accent, d.accentRGB);
  cy += 22 * s;

  const sh = drawSubline(ctx, d.subline, pad, cy, s, contentW, isW);
  cy += sh + 20 * s;

  // Table — dynamic row height based on number of rows
  const tableW = Math.min(contentW, 560 * s);
  const rowH = rows.length > 3 ? 38 * s : 44 * s;
  const colW = [tableW * 0.4, tableW * 0.3, tableW * 0.3];
  const tblX = pad;

  // Header
  ctx.fillStyle = `rgba(${d.accentRGB},0.1)`;
  roundRect(ctx, tblX, cy, tableW, rowH, 10 * s);
  ctx.fill();

  const hdrFS = Math.round(13 * s);
  ctx.font = `700 ${hdrFS}px 'Inter',sans-serif`;
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText("", tblX + 16 * s, cy + rowH / 2);
  ctx.fillStyle = "#f87171";
  ctx.fillText("Them", tblX + colW[0] + 16 * s, cy + rowH / 2);
  ctx.fillStyle = d.accent;
  ctx.fillText("Us", tblX + colW[0] + colW[1] + 16 * s, cy + rowH / 2);
  cy += rowH + 4 * s;

  // Data rows
  const dataFS = Math.round(15 * s);
  rows.forEach((row, i) => {
    const isLast = i === rows.length - 1;
    if (isLast) {
      ctx.fillStyle = `rgba(16,185,129,0.08)`;
      roundRect(ctx, tblX, cy, tableW, rowH, 8 * s);
      ctx.fill();
    }

    ctx.font = `${isLast ? "700" : "400"} ${dataFS}px 'Inter',sans-serif`;
    ctx.textBaseline = "middle";
    ctx.fillStyle = isLast ? "#ffffff" : "#cbd5e1";
    ctx.fillText(row.label, tblX + 16 * s, cy + rowH / 2);

    ctx.fillStyle = "#f87171";
    if (row.them) {
      ctx.fillText(row.them, tblX + colW[0] + 16 * s, cy + rowH / 2);
      if (isLast) {
        // Strikethrough
        const tw = ctx.measureText(row.them).width;
        ctx.strokeStyle = "rgba(248,113,113,0.6)";
        ctx.lineWidth = 2 * s;
        ctx.beginPath();
        ctx.moveTo(tblX + colW[0] + 14 * s, cy + rowH / 2);
        ctx.lineTo(tblX + colW[0] + 18 * s + tw, cy + rowH / 2);
        ctx.stroke();
      }
    }

    ctx.fillStyle = isLast ? "#10b981" : d.accent;
    ctx.font = `${isLast ? "800" : "600"} ${isLast ? Math.round(18 * s) : dataFS}px 'Inter',sans-serif`;
    ctx.fillText(row.us, tblX + colW[0] + colW[1] + 16 * s, cy + rowH / 2);

    cy += rowH + 2 * s;
  });

  cy += 12 * s;

  // Big savings callout (only if roiData has values)
  if (rd.saved) {
    const bigFS = Math.round(28 * s);
    ctx.font = `800 ${bigFS}px 'Satoshi','Inter',sans-serif`;
    ctx.fillStyle = "#10b981";
    ctx.textBaseline = "top";
    ctx.fillText(`You save ${rd.saved} in Year 1`, pad, cy);
    cy += bigFS + 8 * s;

    ctx.font = `400 ${Math.round(14 * s)}px 'Inter',sans-serif`;
    ctx.fillStyle = "#64748b";
    ctx.fillText("By month 12, the design has already paid for itself.", pad, cy);
    cy += 30 * s;
  } else {
    // Generic bottom line for pricing menus
    const bigFS = Math.round(22 * s);
    ctx.font = `700 ${bigFS}px 'Satoshi','Inter',sans-serif`;
    ctx.fillStyle = "#10b981";
    ctx.textBaseline = "top";
    ctx.fillText("No hidden fees. No hourly billing. Ever.", pad, cy);
    cy += bigFS + 20 * s;
  }

  if (!isW) drawCTA(ctx, d.cta, pad, cy, s, d.accent, d.accentRGB);
}

function renderSavingsLayout(ctx: CanvasRenderingContext2D, w: number, h: number, s: number, pad: number, d: AdDesign, isP: boolean, isW: boolean) {
  const rows = d.savingsRows!;
  const contentW = w - pad * 2;
  let cy = isP ? h * 0.1 : isW ? h * 0.12 : h * 0.13;

  if (d.badge) { const bh = drawBadge(ctx, pad, cy, d.badge!, s, d.accentRGB, d.accent); cy += bh + 16 * s; }
  const hh = drawHeadline(ctx, d.headline, pad, cy, s, contentW, isP, isW);
  cy += hh + 10 * s;
  drawAccentLine(ctx, pad, cy, s, d.accent, d.accentRGB);
  cy += 22 * s;

  const sh = drawSubline(ctx, d.subline, pad, cy, s, contentW, isW);
  cy += sh + 24 * s;

  // Visual bar comparison
  rows.forEach((row) => {
    const labelFS = Math.round(14 * s);
    ctx.font = `600 ${labelFS}px 'Inter',sans-serif`;
    ctx.fillStyle = "#94a3b8";
    ctx.textBaseline = "top";
    ctx.fillText(row.label, pad, cy);
    cy += labelFS + 10 * s;

    if (row.them) {
      // "Them" bar (wide, red)
      const barMaxW = contentW * 0.85;
      const barH = 36 * s;

      ctx.fillStyle = "rgba(244,63,94,0.12)";
      roundRect(ctx, pad, cy, barMaxW, barH, 8 * s);
      ctx.fill();
      ctx.font = `700 ${Math.round(14 * s)}px 'Inter',sans-serif`;
      ctx.fillStyle = "#f87171";
      ctx.textBaseline = "middle";
      ctx.fillText(`Others: ${row.them}`, pad + 14 * s, cy + barH / 2);
      cy += barH + 6 * s;

      // "Us" bar (short, green)
      const usBarW = barMaxW * 0.18;
      ctx.fillStyle = `rgba(${d.accentRGB},0.2)`;
      roundRect(ctx, pad, cy, usBarW, barH, 8 * s);
      ctx.fill();
      ctx.shadowColor = `rgba(${d.accentRGB},0.2)`;
      ctx.shadowBlur = 12 * s;
      ctx.fillStyle = d.accent;
      roundRect(ctx, pad, cy, usBarW, barH, 8 * s);
      ctx.fill();
      ctx.shadowColor = "transparent"; ctx.shadowBlur = 0;

      ctx.font = `700 ${Math.round(14 * s)}px 'Inter',sans-serif`;
      ctx.fillStyle = "#ffffff";
      ctx.textBaseline = "middle";
      ctx.fillText(`Us: ${row.us}`, pad + 14 * s, cy + barH / 2);
      cy += barH + 20 * s;
    } else {
      // Savings highlight
      const savFS = Math.round(32 * s);
      ctx.font = `900 ${savFS}px 'Satoshi','Inter',sans-serif`;
      ctx.fillStyle = d.accent;
      ctx.textBaseline = "top";
      ctx.fillText(row.us, pad, cy);
      cy += savFS + 6 * s;
      ctx.font = `400 ${Math.round(13 * s)}px 'Inter',sans-serif`;
      ctx.fillStyle = "#64748b";
      ctx.fillText("saved every single year", pad, cy);
      cy += 30 * s;
    }
  });

  if (!isW) drawCTA(ctx, d.cta, pad, cy, s, d.accent, d.accentRGB);
}

function renderTestimonialLayout(ctx: CanvasRenderingContext2D, w: number, h: number, s: number, pad: number, d: AdDesign, isP: boolean, isW: boolean) {
  const td = d.testimonialData!;
  const contentW = w - pad * 2;
  let cy = isP ? h * 0.12 : isW ? h * 0.1 : h * 0.12;

  if (d.badge) { const bh = drawBadge(ctx, pad, cy, d.badge!, s, d.accentRGB, d.accent); cy += bh + 16 * s; }

  // Big stat if available
  if (td.stat) {
    const statFS = Math.round((isP ? 120 : 80) * s);
    ctx.font = `900 ${statFS}px 'Satoshi','Inter',sans-serif`;
    ctx.textBaseline = "top";
    const sg = ctx.createLinearGradient(pad, cy, pad + ctx.measureText(td.stat).width, cy + statFS);
    sg.addColorStop(0, d.accent);
    sg.addColorStop(1, "#ffffff");
    ctx.fillStyle = sg;
    ctx.fillText(td.stat, pad, cy);

    // Label next to stat
    const statW = ctx.measureText(td.stat).width;
    const lblFS = Math.round(24 * s);
    ctx.font = `700 ${lblFS}px 'Satoshi','Inter',sans-serif`;
    ctx.fillStyle = "#f1f5f9";
    ctx.fillText("Better", pad + statW + 12 * s, cy + statFS * 0.2);
    ctx.fillText("Conversions", pad + statW + 12 * s, cy + statFS * 0.2 + lblFS * 1.2);

    cy += statFS + 20 * s;
  } else {
    const hh = drawHeadline(ctx, d.headline, pad, cy, s, contentW, isP, isW);
    cy += hh + 12 * s;
  }

  drawAccentLine(ctx, pad, cy, s, d.accent, d.accentRGB);
  cy += 24 * s;

  // Quote card
  const quoteCardPad = 24 * s;
  const quoteFS = Math.round((isW ? 16 : 19) * s);
  ctx.font = `italic 500 ${quoteFS}px 'Inter',sans-serif`;

  // Wrap quote text
  const wrappedLines = wrapText(ctx, td.quote, contentW - quoteCardPad * 2 - 20 * s);
  const quoteLH = quoteFS * 1.6;
  const quoteBlockH = wrappedLines.length * quoteLH + quoteCardPad * 2 + 40 * s;

  ctx.fillStyle = "rgba(255,255,255,0.03)";
  roundRect(ctx, pad, cy, contentW, quoteBlockH, 16 * s);
  ctx.fill();
  ctx.strokeStyle = `rgba(${d.accentRGB},0.15)`;
  ctx.lineWidth = 1.5 * s;
  roundRect(ctx, pad, cy, contentW, quoteBlockH, 16 * s);
  ctx.stroke();

  // Big quotation mark
  ctx.font = `800 ${Math.round(60 * s)}px serif`;
  ctx.fillStyle = `rgba(${d.accentRGB},0.3)`;
  ctx.textBaseline = "top";
  ctx.fillText("\u201C", pad + quoteCardPad, cy + quoteCardPad - 10 * s);

  // Quote text
  ctx.font = `italic 500 ${quoteFS}px 'Inter',sans-serif`;
  ctx.fillStyle = "#e2e8f0";
  ctx.textBaseline = "top";
  wrappedLines.forEach((line, i) => {
    ctx.fillText(line, pad + quoteCardPad + 10 * s, cy + quoteCardPad + 30 * s + i * quoteLH);
  });

  // Attribution
  const attrY = cy + quoteBlockH - quoteCardPad - 10 * s;
  ctx.font = `700 ${Math.round(15 * s)}px 'Inter',sans-serif`;
  ctx.fillStyle = d.accent;
  ctx.fillText(td.name, pad + quoteCardPad + 10 * s, attrY);
  ctx.font = `400 ${Math.round(13 * s)}px 'Inter',sans-serif`;
  ctx.fillStyle = "#64748b";
  ctx.fillText(td.title, pad + quoteCardPad + 10 * s + ctx.measureText(td.name + "  ").width, attrY + 2 * s);

  cy += quoteBlockH + 24 * s;

  if (!isW) drawCTA(ctx, d.cta, pad, cy, s, d.accent, d.accentRGB);
}

function renderStatsLayout(ctx: CanvasRenderingContext2D, w: number, h: number, s: number, pad: number, d: AdDesign, isP: boolean, isW: boolean) {
  const sd = d.statsData!;
  const contentW = w - pad * 2;
  let cy = isP ? h * 0.1 : isW ? h * 0.1 : h * 0.12;

  if (d.badge) { const bh = drawBadge(ctx, pad, cy, d.badge!, s, d.accentRGB, d.accent); cy += bh + 16 * s; }
  const hh = drawHeadline(ctx, d.headline, pad, cy, s, contentW, isP, isW);
  cy += hh + 10 * s;
  drawAccentLine(ctx, pad, cy, s, d.accent, d.accentRGB);
  cy += 22 * s;
  const sh = drawSubline(ctx, d.subline, pad, cy, s, contentW, isW);
  cy += sh + 28 * s;

  // 2x2 stats grid
  const cols = isW || (!isP && contentW > 600 * s) ? 4 : 2;
  const rows = Math.ceil(sd.items.length / cols);
  const cellW = (contentW - (cols - 1) * 16 * s) / cols;
  const cellH = (isP ? 130 : 110) * s;

  sd.items.forEach((item, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = pad + col * (cellW + 16 * s);
    const cellY = cy + row * (cellH + 12 * s);

    // Card
    ctx.fillStyle = "rgba(255,255,255,0.03)";
    roundRect(ctx, cx, cellY, cellW, cellH, 14 * s);
    ctx.fill();
    ctx.strokeStyle = `rgba(${d.accentRGB},0.12)`;
    ctx.lineWidth = 1.5 * s;
    roundRect(ctx, cx, cellY, cellW, cellH, 14 * s);
    ctx.stroke();

    // Value
    const valFS = Math.round(36 * s);
    ctx.font = `900 ${valFS}px 'Satoshi','Inter',sans-serif`;
    const vg = ctx.createLinearGradient(cx, cellY, cx + cellW, cellY + cellH);
    vg.addColorStop(0, "#ffffff");
    vg.addColorStop(1, d.accent);
    ctx.fillStyle = vg;
    ctx.textBaseline = "top";
    ctx.fillText(item.value, cx + 18 * s, cellY + 18 * s);

    // Label
    ctx.font = `500 ${Math.round(13 * s)}px 'Inter',sans-serif`;
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(item.label, cx + 18 * s, cellY + cellH - 30 * s);
  });

  cy += rows * (cellH + 12 * s) + 16 * s;
  if (!isW) drawCTA(ctx, d.cta, pad, cy, s, d.accent, d.accentRGB);
}

function renderProcessLayout(ctx: CanvasRenderingContext2D, w: number, h: number, s: number, pad: number, d: AdDesign, isP: boolean, isW: boolean) {
  const steps = d.processSteps!;
  const contentW = w - pad * 2;
  let cy = isP ? h * 0.09 : isW ? h * 0.1 : h * 0.1;

  if (d.badge) { const bh = drawBadge(ctx, pad, cy, d.badge!, s, d.accentRGB, d.accent); cy += bh + 16 * s; }
  const hh = drawHeadline(ctx, d.headline, pad, cy, s, contentW, isP, isW);
  cy += hh + 10 * s;
  drawAccentLine(ctx, pad, cy, s, d.accent, d.accentRGB);
  cy += 22 * s;
  const sh = drawSubline(ctx, d.subline, pad, cy, s, contentW, isW);
  cy += sh + 28 * s;

  // Process steps with timeline — dynamic height based on step count
  const stepH = steps.length > 4 ? 46 * s : 56 * s;
  const dotR = 16 * s;
  const lineX = pad + dotR;

  steps.forEach((step, i) => {
    const stepY = cy + i * stepH;
    const isLast = i === steps.length - 1;

    // Connecting line
    if (!isLast) {
      ctx.strokeStyle = `rgba(${d.accentRGB},0.2)`;
      ctx.lineWidth = 2 * s;
      ctx.setLineDash([4 * s, 4 * s]);
      ctx.beginPath();
      ctx.moveTo(lineX, stepY + dotR + 4 * s);
      ctx.lineTo(lineX, stepY + stepH - 4 * s);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Dot
    ctx.fillStyle = `rgba(${d.accentRGB},0.15)`;
    ctx.beginPath();
    ctx.arc(lineX, stepY, dotR, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = d.accent;
    ctx.beginPath();
    ctx.arc(lineX, stepY, 6 * s, 0, Math.PI * 2);
    ctx.fill();

    // Number
    ctx.font = `800 ${Math.round(12 * s)}px 'Inter',sans-serif`;
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${i + 1}`, lineX, stepY + 1);
    ctx.textAlign = "left";

    // Step text
    ctx.font = `600 ${Math.round(17 * s)}px 'Inter',sans-serif`;
    ctx.fillStyle = "#e2e8f0";
    ctx.textBaseline = "middle";
    ctx.fillText(step, lineX + dotR + 16 * s, stepY);
  });

  cy += steps.length * stepH + 16 * s;
  if (!isW) drawCTA(ctx, d.cta, pad, cy, s, d.accent, d.accentRGB);
}

function renderUrgencyLayout(ctx: CanvasRenderingContext2D, w: number, h: number, s: number, pad: number, d: AdDesign, isP: boolean, isW: boolean) {
  const contentW = w - pad * 2;
  let cy = isP ? h * 0.12 : isW ? h * 0.12 : h * 0.14;

  // Warning-style badge
  if (d.badge) { const bh = drawBadge(ctx, pad, cy, d.badge!, s, d.accentRGB, d.accent); cy += bh + 18 * s; }

  const hh = drawHeadline(ctx, d.headline, pad, cy, s, contentW, isP, isW);
  cy += hh + 10 * s;
  drawAccentLine(ctx, pad, cy, s, d.accent, d.accentRGB);
  cy += 22 * s;

  const sh = drawSubline(ctx, d.subline, pad, cy, s, contentW, isW);
  cy += sh + 24 * s;

  if (d.bulletPoints && !isW) {
    const bph = drawBulletPoints(ctx, d.bulletPoints, pad, cy, s, d.accent, d.accentRGB);
    cy += bph + 16 * s;

    // Urgency divider
    ctx.fillStyle = `rgba(${d.accentRGB},0.15)`;
    roundRect(ctx, pad, cy, contentW, 48 * s, 10 * s);
    ctx.fill();
    ctx.font = `700 ${Math.round(15 * s)}px 'Inter',sans-serif`;
    ctx.fillStyle = d.accent;
    ctx.textBaseline = "middle";
    ctx.fillText("Same-day response guaranteed", pad + 18 * s, cy + 24 * s);
    cy += 64 * s;
  }

  if (!isW) drawCTA(ctx, d.cta, pad, cy, s, d.accent, d.accentRGB);
}

/* ═══════════════════════════ HELPERS ═══════════════════════════ */

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  words.forEach((word) => {
    const test = current ? current + " " + word : word;
    if (ctx.measureText(test).width > maxW && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  });
  if (current) lines.push(current);
  return lines;
}

/* ═══════════════════════ PLATFORM ICONS ═══════════════════════ */

function PlatformIcon({ platform, className }: { platform: string; className?: string }) {
  const cls = className || "w-5 h-5";
  switch (platform) {
    case "ig":
      return (<svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>);
    case "fb":
      return (<svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>);
    case "x":
      return (<svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>);
    case "li":
      return (<svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>);
    case "tt":
      return (<svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.24 8.24 0 005.58 2.18V11.7a4.85 4.85 0 01-3.18-1.18 4.83 4.83 0 01-1.64-3.83h3.45v-.01a4.83 4.83 0 001.37.01z" /></svg>);
    case "pin":
      return (<svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" /></svg>);
    case "yt":
      return (<svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>);
    default: return null;
  }
}

/* ═══════════════════════════ PAGE ═══════════════════════════ */

export default function AdsPage() {
  const [activeDesign, setActiveDesign] = useState(0);
  const [activePlatform, setActivePlatform] = useState("all");
  const [generating, setGenerating] = useState<string | null>(null);
  const canvasRefs = useRef<Map<string, HTMLCanvasElement>>(new Map());

  const design = DESIGNS[activeDesign];

  const filteredVariants =
    activePlatform === "all"
      ? VARIANTS
      : VARIANTS.filter((v) => v.category === activePlatform);

  const platforms = ["all", ...Array.from(new Set(VARIANTS.map((v) => v.category)))];
  const designCategories = Array.from(new Set(DESIGNS.map((d) => d.category)));

  // Render canvas immediately when ref attaches (no delay, no spinner)
  const setCanvasRef = useCallback((id: string, el: HTMLCanvasElement | null) => {
    if (el) {
      canvasRefs.current.set(id, el);
      const variant = VARIANTS.find((v) => v.id === id);
      if (variant) renderAd(el, variant, DESIGNS[activeDesign]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDesign]);

  // Re-render all visible canvases synchronously when design changes
  useLayoutEffect(() => {
    filteredVariants.forEach((variant) => {
      const canvas = canvasRefs.current.get(variant.id);
      if (canvas) renderAd(canvas, variant, design);
    });
  }, [activeDesign, activePlatform, filteredVariants, design]);

  const downloadAd = (variant: AdVariant) => {
    setGenerating(variant.id);
    const offscreen = document.createElement("canvas");
    renderAd(offscreen, variant, design);
    offscreen.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `DOA-${design.id}-${variant.platform.replace(/[^a-zA-Z]/g, "")}-${variant.w}x${variant.h}.png`;
      a.click();
      URL.revokeObjectURL(url);
      setGenerating(null);
    }, "image/png");
  };

  const downloadAll = () => {
    filteredVariants.forEach((v, i) => {
      setTimeout(() => downloadAd(v), i * 350);
    });
  };

  return (
    <div className="min-h-screen bg-bg-dark">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden py-20 pb-10">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-bold tracking-wider text-accent-light uppercase mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Social Media Ad Studio
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-4">
            Ads That Actually{" "}
            <span className="gradient-text">Convert</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-muted leading-relaxed">
            25 marketing-driven ad designs across every platform.
            Hosting switches, redesigns, pricing, the rulebook — ready to post.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold text-text-muted">
            <span className="rounded-full bg-white/[0.05] px-3 py-1">25 Ad Designs</span>
            <span className="rounded-full bg-white/[0.05] px-3 py-1">11 Platform Sizes</span>
            <span className="rounded-full bg-white/[0.05] px-3 py-1">Full Resolution PNGs</span>
            <span className="rounded-full bg-white/[0.05] px-3 py-1">One-Click Download</span>
          </div>
        </div>
      </section>

      {/* ─── Controls ─── */}
      <section className="sticky top-[72px] z-30 border-b border-border-dark bg-bg-dark/92 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          {/* Design Selector — grouped by category */}
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {designCategories.map((cat) => (
                <div key={cat} className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted/60 mr-1">{cat}:</span>
                  {DESIGNS.filter((d) => d.category === cat).map((d) => {
                    const i = DESIGNS.indexOf(d);
                    return (
                      <button
                        key={d.id}
                        onClick={() => setActiveDesign(i)}
                        className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition-all ${
                          i === activeDesign
                            ? "border-accent bg-accent/10 text-accent-light shadow-[0_0_16px_rgba(99,102,241,0.15)]"
                            : "border-white/6 bg-white/[0.02] text-text-muted hover:border-white/12 hover:text-text-white"
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full" style={{ background: d.accent }} />
                        {d.name}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Platform Filter + Download All */}
          <div className="flex flex-wrap items-center gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted/60 mr-1">Size:</label>
            {platforms.map((p) => {
              const v = VARIANTS.find((v) => v.category === p);
              return (
                <button
                  key={p}
                  onClick={() => setActivePlatform(p)}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                    p === activePlatform
                      ? "bg-accent text-white shadow-[0_0_14px_rgba(99,102,241,0.3)]"
                      : "bg-white/[0.03] text-text-muted hover:bg-white/[0.07] hover:text-text-white"
                  }`}
                >
                  {p !== "all" && v && <PlatformIcon platform={v.platformIcon} className="w-3.5 h-3.5" />}
                  {p === "all" ? "All" : p}
                </button>
              );
            })}
            <button
              onClick={downloadAll}
              className="ml-auto flex items-center gap-2 rounded-lg bg-emerald/90 px-4 py-2 text-xs font-bold text-white hover:bg-emerald transition-all hover:shadow-[0_0_18px_rgba(16,185,129,0.3)]"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download All ({filteredVariants.length})
            </button>
          </div>
        </div>
      </section>

      {/* ─── Ad Grid ─── */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVariants.map((variant) => {
            const aspect = variant.w / variant.h;
            const isDownloading = generating === variant.id;
            return (
              <div key={variant.id} className="group rounded-2xl border border-border-dark bg-bg-card p-3.5 transition-all hover:border-white/10 hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PlatformIcon platform={variant.platformIcon} className="w-4 h-4 text-text-muted" />
                    <span className="text-sm font-semibold text-text-white">{variant.platform}</span>
                    <span className="text-[11px] text-text-muted">{variant.label}</span>
                  </div>
                  <span className="rounded-full bg-white/[0.05] px-2 py-0.5 text-[10px] font-bold text-text-muted">{variant.w}x{variant.h}</span>
                </div>
                <div className="overflow-hidden rounded-xl bg-bg-dark border border-white/[0.04]" style={{ aspectRatio: aspect }}>
                  <canvas ref={(el) => setCanvasRef(variant.id, el)} className="w-full h-full" style={{ imageRendering: "auto" }} />
                </div>
                <button
                  onClick={() => downloadAd(variant)}
                  disabled={isDownloading}
                  className={`mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all ${
                    isDownloading
                      ? "bg-accent/20 text-accent-light cursor-wait"
                      : "bg-accent text-white hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(99,102,241,0.25)]"
                  }`}
                >
                  {isDownloading ? (
                    <><div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />Generating...</>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PNG
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Tips ─── */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-border-dark bg-bg-card p-6">
          <h2 className="text-lg font-bold mb-3"><span className="gradient-text">How to Use</span></h2>
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              { t: "Choose an Ad", d: "Pick from 25 designs — hosting switches, redesigns, pricing, the rulebook, and more." },
              { t: "Select Platform", d: "Filter by Instagram, Facebook, X, LinkedIn, TikTok, Pinterest, or YouTube." },
              { t: "Download Full-Res", d: "Every PNG downloads at exact native dimensions. No quality loss." },
              { t: "Post & Convert", d: "Upload directly to any platform. No cropping or resizing needed." },
            ].map((tip) => (
              <div key={tip.t}>
                <h3 className="text-sm font-bold text-text-white mb-1">{tip.t}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{tip.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
