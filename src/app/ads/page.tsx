"use client";

import { useRef, useState, useEffect, useCallback } from "react";

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
  headline: string;
  subline: string;
  cta: string;
  badge?: string;
  accent: string;
  accentRGB: string;
  icon: string;
}

/* ──────────────────────── PLATFORM SIZES ───────────────────────── */

const VARIANTS: AdVariant[] = [
  // Instagram
  { id: "ig-post", label: "Post (1080×1080)", w: 1080, h: 1080, platform: "Instagram", platformIcon: "ig", category: "Instagram" },
  { id: "ig-story", label: "Story (1080×1920)", w: 1080, h: 1920, platform: "Instagram", platformIcon: "ig", category: "Instagram" },
  { id: "ig-reel", label: "Reel Cover (1080×1920)", w: 1080, h: 1920, platform: "Instagram", platformIcon: "ig", category: "Instagram" },
  // Facebook
  { id: "fb-post", label: "Post (1200×630)", w: 1200, h: 630, platform: "Facebook", platformIcon: "fb", category: "Facebook" },
  { id: "fb-story", label: "Story (1080×1920)", w: 1080, h: 1920, platform: "Facebook", platformIcon: "fb", category: "Facebook" },
  { id: "fb-cover", label: "Cover Photo (1640×856)", w: 1640, h: 856, platform: "Facebook", platformIcon: "fb", category: "Facebook" },
  // Twitter / X
  { id: "x-post", label: "Post (1600×900)", w: 1600, h: 900, platform: "X (Twitter)", platformIcon: "x", category: "X (Twitter)" },
  { id: "x-header", label: "Header (1500×500)", w: 1500, h: 500, platform: "X (Twitter)", platformIcon: "x", category: "X (Twitter)" },
  // LinkedIn
  { id: "li-post", label: "Post (1200×627)", w: 1200, h: 627, platform: "LinkedIn", platformIcon: "li", category: "LinkedIn" },
  { id: "li-cover", label: "Cover (1584×396)", w: 1584, h: 396, platform: "LinkedIn", platformIcon: "li", category: "LinkedIn" },
  // TikTok
  { id: "tt-cover", label: "Video Cover (1080×1920)", w: 1080, h: 1920, platform: "TikTok", platformIcon: "tt", category: "TikTok" },
  // Pinterest
  { id: "pin", label: "Pin (1000×1500)", w: 1000, h: 1500, platform: "Pinterest", platformIcon: "pin", category: "Pinterest" },
  // YouTube
  { id: "yt-thumb", label: "Thumbnail (1280×720)", w: 1280, h: 720, platform: "YouTube", platformIcon: "yt", category: "YouTube" },
  { id: "yt-banner", label: "Banner (2560×1440)", w: 2560, h: 1440, platform: "YouTube", platformIcon: "yt", category: "YouTube" },
];

/* ──────────────────────── AD DESIGNS ───────────────────────────── */

const DESIGNS: AdDesign[] = [
  {
    id: "websites",
    name: "Custom Websites",
    headline: "Stunning Websites\nFrom Just $200",
    subline: "Hand-coded. Mobile-first. Conversion-focused.\nFree demo before you pay a dime.",
    cta: "Get Your Free Demo",
    badge: "FROM $200",
    accent: "#6366f1",
    accentRGB: "99,102,241",
    icon: "web",
  },
  {
    id: "design",
    name: "Graphic Design",
    headline: "Professional Design\nStarting at $99",
    subline: "Logos, business cards, flyers, social assets.\n24-72 hour turnaround.",
    cta: "See Our Work",
    badge: "FROM $99",
    accent: "#3b82f6",
    accentRGB: "59,130,246",
    icon: "design",
  },
  {
    id: "ai-tools",
    name: "AI Business Tools",
    headline: "Automate Your\nBusiness With AI",
    subline: "Booking systems, intake forms, chatbots.\nSave hours every single week.",
    cta: "Learn More",
    badge: "AI POWERED",
    accent: "#8b5cf6",
    accentRGB: "139,92,246",
    icon: "ai",
  },
  {
    id: "hosting",
    name: "Hosting Plans",
    headline: "Reliable Hosting\nFrom $3/month",
    subline: "Others charge $20+/mo. We don't.\nFast, secure, and always online.",
    cta: "View Plans",
    badge: "$3/MO",
    accent: "#10b981",
    accentRGB: "16,185,129",
    icon: "hosting",
  },
  {
    id: "promo",
    name: "General Promo",
    headline: "Design That Drives\nReal Results",
    subline: "150+ projects delivered. 5+ years of experience.\nAtlanta's most affordable creative studio.",
    cta: "Start Your Project",
    badge: "150+ PROJECTS",
    accent: "#6366f1",
    accentRGB: "99,102,241",
    icon: "star",
  },
  {
    id: "testimonial",
    name: "Client Testimonial",
    headline: "\"Exceeded Every\nExpectation\"",
    subline: "— Real clients, real results.\nJoin 150+ businesses who trust us.",
    cta: "See Testimonials",
    badge: "5-STAR REVIEWS",
    accent: "#f59e0b",
    accentRGB: "245,158,11",
    icon: "quote",
  },
];

/* ──────────────────────── CANVAS RENDERER ──────────────────────── */

function renderAd(
  canvas: HTMLCanvasElement,
  variant: AdVariant,
  design: AdDesign
) {
  const { w, h } = variant;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  const isPortrait = h > w;
  const isWide = w / h > 2.5;
  const scale = Math.min(w, h) / 1080;

  /* ─── Background ─── */
  ctx.fillStyle = "#050a14";
  ctx.fillRect(0, 0, w, h);

  // Mesh gradient orbs
  const drawOrb = (x: number, y: number, rx: number, ry: number, color: string, alpha: number) => {
    const grad = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry));
    grad.addColorStop(0, color.replace(")", `,${alpha})`).replace("rgb", "rgba"));
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
  };

  drawOrb(w * 0.7, h * 0.3, w * 0.5, h * 0.4, `rgb(${design.accentRGB})`, 0.12);
  drawOrb(w * 0.2, h * 0.75, w * 0.35, h * 0.35, "rgb(16,185,129)", 0.08);
  drawOrb(w * 0.5, h * 0.1, w * 0.3, h * 0.2, `rgb(${design.accentRGB})`, 0.06);

  // Subtle grid pattern
  ctx.strokeStyle = "rgba(255,255,255,0.02)";
  ctx.lineWidth = 1;
  const gridSize = 60 * scale;
  for (let x = 0; x < w; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  /* ─── Decorative geometric shapes ─── */
  // Floating rings
  ctx.strokeStyle = `rgba(${design.accentRGB},0.08)`;
  ctx.lineWidth = 2 * scale;
  ctx.beginPath();
  ctx.arc(w * 0.85, h * 0.15, 80 * scale, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(w * 0.85, h * 0.15, 50 * scale, 0, Math.PI * 1.4);
  ctx.stroke();

  ctx.strokeStyle = `rgba(${design.accentRGB},0.05)`;
  ctx.beginPath();
  ctx.arc(w * 0.1, h * 0.85, 120 * scale, 0, Math.PI * 2);
  ctx.stroke();

  // Corner accent lines
  const cornerLen = 100 * scale;
  ctx.strokeStyle = `rgba(${design.accentRGB},0.3)`;
  ctx.lineWidth = 3 * scale;
  // Top-left
  ctx.beginPath();
  ctx.moveTo(40 * scale, 40 * scale);
  ctx.lineTo(40 * scale + cornerLen, 40 * scale);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(40 * scale, 40 * scale);
  ctx.lineTo(40 * scale, 40 * scale + cornerLen);
  ctx.stroke();
  // Bottom-right
  ctx.beginPath();
  ctx.moveTo(w - 40 * scale, h - 40 * scale);
  ctx.lineTo(w - 40 * scale - cornerLen, h - 40 * scale);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w - 40 * scale, h - 40 * scale);
  ctx.lineTo(w - 40 * scale, h - 40 * scale - cornerLen);
  ctx.stroke();

  /* ─── Glowing accent line at top ─── */
  const lineGrad = ctx.createLinearGradient(0, 0, w, 0);
  lineGrad.addColorStop(0, "rgba(0,0,0,0)");
  lineGrad.addColorStop(0.3, `rgba(${design.accentRGB},0.8)`);
  lineGrad.addColorStop(0.7, `rgba(${design.accentRGB},0.8)`);
  lineGrad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = lineGrad;
  ctx.fillRect(0, 0, w, 4 * scale);
  // Glow under line
  const lineGlow = ctx.createLinearGradient(0, 0, 0, 30 * scale);
  lineGlow.addColorStop(0, `rgba(${design.accentRGB},0.3)`);
  lineGlow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = lineGlow;
  ctx.fillRect(w * 0.2, 0, w * 0.6, 30 * scale);

  /* ─── Content Layout ─── */
  const pad = isWide ? 60 * scale : 80 * scale;
  let cy = isPortrait ? h * 0.22 : isWide ? h * 0.28 : h * 0.3;

  /* ─── Badge ─── */
  if (design.badge) {
    const badgeFS = Math.round(14 * scale);
    ctx.font = `800 ${badgeFS}px 'Inter', sans-serif`;
    const badgeText = design.badge;
    const badgeMetrics = ctx.measureText(badgeText);
    const badgePadX = 20 * scale;
    const badgePadY = 10 * scale;
    const badgeW = badgeMetrics.width + badgePadX * 2;
    const badgeH = badgeFS + badgePadY * 2;
    const badgeX = pad;
    const badgeY = cy - badgeH - 20 * scale;

    // Badge background
    ctx.fillStyle = `rgba(${design.accentRGB},0.15)`;
    roundRect(ctx, badgeX, badgeY, badgeW, badgeH, 8 * scale);
    ctx.fill();
    // Badge border
    ctx.strokeStyle = `rgba(${design.accentRGB},0.4)`;
    ctx.lineWidth = 1.5 * scale;
    roundRect(ctx, badgeX, badgeY, badgeW, badgeH, 8 * scale);
    ctx.stroke();
    // Badge text
    ctx.fillStyle = design.accent;
    ctx.textBaseline = "middle";
    ctx.fillText(badgeText, badgeX + badgePadX, badgeY + badgeH / 2 + 1);
  }

  /* ─── Headline ─── */
  const headlineFS = isWide
    ? Math.round(48 * scale)
    : isPortrait
    ? Math.round(68 * scale)
    : Math.round(58 * scale);
  ctx.font = `800 ${headlineFS}px 'Satoshi', 'Inter', sans-serif`;
  ctx.textBaseline = "top";

  const lines = design.headline.split("\n");
  lines.forEach((line, i) => {
    // Gradient text effect
    const lineY = cy + i * (headlineFS * 1.15);
    const textGrad = ctx.createLinearGradient(pad, lineY, pad + ctx.measureText(line).width, lineY + headlineFS);
    textGrad.addColorStop(0, "#f1f5f9");
    textGrad.addColorStop(0.6, "#f1f5f9");
    textGrad.addColorStop(1, "#cbd5e1");
    ctx.fillStyle = textGrad;
    ctx.fillText(line, pad, lineY);
  });

  cy += lines.length * (headlineFS * 1.15) + 24 * scale;

  /* ─── Accent underline beneath headline ─── */
  const underlineY = cy - 12 * scale;
  const ulGrad = ctx.createLinearGradient(pad, 0, pad + 160 * scale, 0);
  ulGrad.addColorStop(0, design.accent);
  ulGrad.addColorStop(1, `rgba(${design.accentRGB},0)`);
  ctx.fillStyle = ulGrad;
  ctx.fillRect(pad, underlineY, 160 * scale, 4 * scale);

  cy += 8 * scale;

  /* ─── Subline ─── */
  const subFS = isWide
    ? Math.round(18 * scale)
    : Math.round(22 * scale);
  ctx.font = `400 ${subFS}px 'Inter', sans-serif`;
  ctx.fillStyle = "#94a3b8";
  const subLines = design.subline.split("\n");
  subLines.forEach((line, i) => {
    ctx.fillText(line, pad, cy + i * (subFS * 1.6));
  });

  cy += subLines.length * (subFS * 1.6) + 36 * scale;

  /* ─── CTA Button ─── */
  if (!isWide) {
    const ctaFS = Math.round(20 * scale);
    ctx.font = `700 ${ctaFS}px 'Inter', sans-serif`;
    const ctaText = design.cta;
    const ctaMetrics = ctx.measureText(ctaText);
    const ctaPadX = 36 * scale;
    const ctaPadY = 18 * scale;
    const ctaW = ctaMetrics.width + ctaPadX * 2;
    const ctaH = ctaFS + ctaPadY * 2;
    const ctaX = pad;
    const ctaY = cy;

    // Button glow
    ctx.shadowColor = `rgba(${design.accentRGB},0.4)`;
    ctx.shadowBlur = 30 * scale;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 8 * scale;

    // Button fill
    const btnGrad = ctx.createLinearGradient(ctaX, ctaY, ctaX + ctaW, ctaY + ctaH);
    btnGrad.addColorStop(0, design.accent);
    btnGrad.addColorStop(1, `rgba(${design.accentRGB},0.85)`);
    ctx.fillStyle = btnGrad;
    roundRect(ctx, ctaX, ctaY, ctaW, ctaH, 12 * scale);
    ctx.fill();

    // Reset shadow
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Button text
    ctx.fillStyle = "#ffffff";
    ctx.textBaseline = "middle";
    ctx.fillText(ctaText, ctaX + ctaPadX, ctaY + ctaH / 2 + 1);

    // Arrow icon
    const arrowX = ctaX + ctaPadX + ctaMetrics.width + 12 * scale;
    const arrowY = ctaY + ctaH / 2;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2.5 * scale;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(arrowX, arrowY - 6 * scale);
    ctx.lineTo(arrowX + 8 * scale, arrowY);
    ctx.lineTo(arrowX, arrowY + 6 * scale);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(arrowX - 8 * scale, arrowY);
    ctx.lineTo(arrowX + 8 * scale, arrowY);
    ctx.stroke();
  }

  /* ─── Bottom branding bar ─── */
  const barH = isWide ? 60 * scale : 80 * scale;
  const barY = h - barH;

  // Bar background
  ctx.fillStyle = "rgba(5,10,20,0.85)";
  ctx.fillRect(0, barY, w, barH);
  // Bar top border
  ctx.fillStyle = `rgba(${design.accentRGB},0.2)`;
  ctx.fillRect(0, barY, w, 1.5 * scale);

  // Logo text
  const logoFS = Math.round(isWide ? 18 * scale : 22 * scale);
  ctx.font = `700 ${logoFS}px 'Satoshi', 'Inter', sans-serif`;
  ctx.textBaseline = "middle";
  const logoY = barY + barH / 2;

  ctx.fillStyle = "#f1f5f9";
  ctx.fillText("Design ", pad, logoY);
  const dw = ctx.measureText("Design ").width;

  // "over" in gradient
  const overGrad = ctx.createLinearGradient(pad + dw, logoY - logoFS / 2, pad + dw + ctx.measureText("over").width, logoY + logoFS / 2);
  overGrad.addColorStop(0, "#6366f1");
  overGrad.addColorStop(0.5, "#818cf8");
  overGrad.addColorStop(1, "#a78bfa");
  ctx.fillStyle = overGrad;
  ctx.fillText("over", pad + dw, logoY);
  const ow = ctx.measureText("over").width;

  ctx.fillStyle = "#f1f5f9";
  ctx.fillText(" Atlanta", pad + dw + ow, logoY);

  // Website URL on right
  const urlFS = Math.round(isWide ? 14 * scale : 16 * scale);
  ctx.font = `500 ${urlFS}px 'Inter', sans-serif`;
  ctx.fillStyle = "#94a3b8";
  const urlText = "designoveratlanta.com";
  const urlW = ctx.measureText(urlText).width;
  ctx.fillText(urlText, w - pad - urlW, logoY);

  /* ─── Icon decoration (portrait only) ─── */
  if (isPortrait) {
    drawServiceIcon(ctx, design.icon, w - pad - 100 * scale, h * 0.12, 100 * scale, design.accent, design.accentRGB, scale);
  }

  /* ─── Floating dots decoration ─── */
  ctx.fillStyle = `rgba(${design.accentRGB},0.15)`;
  for (let i = 0; i < 6; i++) {
    const dx = w * (0.6 + Math.sin(i * 1.2) * 0.3);
    const dy = h * (0.4 + Math.cos(i * 0.8) * 0.25);
    const dr = (4 + i * 2) * scale;
    ctx.beginPath();
    ctx.arc(dx, dy, dr, 0, Math.PI * 2);
    ctx.fill();
  }
}

/* ─── Helpers ─── */

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

function drawServiceIcon(
  ctx: CanvasRenderingContext2D,
  icon: string,
  x: number,
  y: number,
  size: number,
  accent: string,
  accentRGB: string,
  scale: number
) {
  ctx.save();
  // Glowing circle background
  const grad = ctx.createRadialGradient(x + size / 2, y + size / 2, 0, x + size / 2, y + size / 2, size / 2);
  grad.addColorStop(0, `rgba(${accentRGB},0.12)`);
  grad.addColorStop(1, `rgba(${accentRGB},0)`);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();

  // Icon
  ctx.strokeStyle = accent;
  ctx.lineWidth = 3 * scale;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const cx = x + size / 2;
  const cy = y + size / 2;
  const s = size * 0.3;

  switch (icon) {
    case "web":
      ctx.beginPath();
      ctx.arc(cx, cy, s, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - s, cy);
      ctx.lineTo(cx + s, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx, cy, s * 0.5, s, 0, 0, Math.PI * 2);
      ctx.stroke();
      break;
    case "design":
      ctx.beginPath();
      ctx.moveTo(cx - s, cy + s);
      ctx.lineTo(cx - s * 0.3, cy - s * 0.8);
      ctx.lineTo(cx + s * 0.1, cy + s);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx + s * 0.5, cy - s * 0.3, s * 0.5, 0, Math.PI * 2);
      ctx.stroke();
      break;
    case "ai":
      ctx.beginPath();
      ctx.moveTo(cx, cy - s);
      ctx.lineTo(cx + s * 0.8, cy + s * 0.5);
      ctx.lineTo(cx - s * 0.8, cy + s * 0.5);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy + s * 0.1, s * 0.3, 0, Math.PI * 2);
      ctx.stroke();
      break;
    case "hosting":
      for (let i = -1; i <= 1; i++) {
        roundRect(ctx, cx - s, cy + i * s * 0.7 - s * 0.25, s * 2, s * 0.5, 4 * scale);
        ctx.stroke();
      }
      break;
    case "star":
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const px = cx + Math.cos(angle) * s;
        const py = cy + Math.sin(angle) * s;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      break;
    case "quote":
      ctx.font = `800 ${s * 2}px serif`;
      ctx.fillStyle = accent;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("\u201C", cx, cy);
      break;
  }
  ctx.restore();
}

/* ─── Platform Icon SVGs ─── */

function PlatformIcon({ platform, className }: { platform: string; className?: string }) {
  const cls = className || "w-5 h-5";
  switch (platform) {
    case "ig":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "fb":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "x":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "li":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "tt":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.24 8.24 0 005.58 2.18V11.7a4.85 4.85 0 01-3.18-1.18 4.83 4.83 0 01-1.64-3.83h3.45v-.01a4.83 4.83 0 001.37.01z" />
        </svg>
      );
    case "pin":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
        </svg>
      );
    case "yt":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}

/* ═══════════════════════════ COMPONENT ═══════════════════════════ */

export default function AdsPage() {
  const [activeDesign, setActiveDesign] = useState(0);
  const [activePlatform, setActivePlatform] = useState("all");
  const [generating, setGenerating] = useState<string | null>(null);
  const canvasRefs = useRef<Map<string, HTMLCanvasElement>>(new Map());
  const [rendered, setRendered] = useState(false);

  const design = DESIGNS[activeDesign];

  const filteredVariants =
    activePlatform === "all"
      ? VARIANTS
      : VARIANTS.filter((v) => v.category === activePlatform);

  const platforms = ["all", ...Array.from(new Set(VARIANTS.map((v) => v.category)))];

  const setCanvasRef = useCallback((id: string, el: HTMLCanvasElement | null) => {
    if (el) canvasRefs.current.set(id, el);
  }, []);

  // Render all visible canvases
  useEffect(() => {
    setRendered(false);
    const timer = setTimeout(() => {
      filteredVariants.forEach((variant) => {
        const canvas = canvasRefs.current.get(variant.id);
        if (canvas) renderAd(canvas, variant, design);
      });
      setRendered(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeDesign, activePlatform, filteredVariants, design]);

  const downloadAd = (variant: AdVariant) => {
    setGenerating(variant.id);
    // Create full-res canvas
    const offscreen = document.createElement("canvas");
    renderAd(offscreen, variant, design);
    offscreen.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `DOA-${design.id}-${variant.id}-${variant.w}x${variant.h}.png`;
      a.click();
      URL.revokeObjectURL(url);
      setGenerating(null);
    }, "image/png");
  };

  const downloadAll = () => {
    filteredVariants.forEach((v, i) => {
      setTimeout(() => downloadAd(v), i * 300);
    });
  };

  return (
    <div className="min-h-screen bg-bg-dark">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden py-20 pb-12">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-bold tracking-wider text-accent-light uppercase mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Social Media Ad Studio
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-5">
              Ready-to-Post{" "}
              <span className="gradient-text">Social Ads</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-text-muted leading-relaxed">
              Pixel-perfect advertisements for every major platform.
              Choose a design, pick your platform, and download in full resolution.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Controls ─── */}
      <section className="sticky top-[72px] z-30 border-b border-border-dark bg-bg-dark/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          {/* Design Selector */}
          <div className="mb-4">
            <label className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2 block">
              Ad Design
            </label>
            <div className="flex flex-wrap gap-2">
              {DESIGNS.map((d, i) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDesign(i)}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all ${
                    i === activeDesign
                      ? "border-accent bg-accent/10 text-accent-light shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                      : "border-white/8 bg-white/[0.03] text-text-muted hover:border-white/15 hover:text-text-white"
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: d.accent }}
                  />
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          {/* Platform Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-muted mr-2">
              Platform:
            </label>
            {platforms.map((p) => {
              const v = VARIANTS.find((v) => v.category === p);
              return (
                <button
                  key={p}
                  onClick={() => setActivePlatform(p)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    p === activePlatform
                      ? "bg-accent text-white shadow-[0_0_16px_rgba(99,102,241,0.3)]"
                      : "bg-white/[0.04] text-text-muted hover:bg-white/[0.08] hover:text-text-white"
                  }`}
                >
                  {p !== "all" && v && (
                    <PlatformIcon platform={v.platformIcon} className="w-3.5 h-3.5" />
                  )}
                  {p === "all" ? "All Platforms" : p}
                </button>
              );
            })}

            {/* Download All */}
            <button
              onClick={downloadAll}
              className="ml-auto flex items-center gap-2 rounded-lg bg-emerald/90 px-4 py-2 text-sm font-bold text-white hover:bg-emerald transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download All ({filteredVariants.length})
            </button>
          </div>
        </div>
      </section>

      {/* ─── Ad Grid ─── */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVariants.map((variant) => {
            const aspect = variant.w / variant.h;
            const isDownloading = generating === variant.id;

            return (
              <div
                key={variant.id}
                className="group relative rounded-2xl border border-border-dark bg-bg-card p-4 transition-all hover:border-white/10 hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Platform badge */}
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PlatformIcon
                      platform={variant.platformIcon}
                      className="w-4 h-4 text-text-muted"
                    />
                    <span className="text-sm font-semibold text-text-white">
                      {variant.platform}
                    </span>
                    <span className="text-xs text-text-muted">
                      {variant.label}
                    </span>
                  </div>
                  <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-bold text-text-muted">
                    {variant.w}×{variant.h}
                  </span>
                </div>

                {/* Canvas preview */}
                <div
                  className="relative overflow-hidden rounded-xl bg-bg-dark border border-white/[0.04]"
                  style={{ aspectRatio: aspect }}
                >
                  <canvas
                    ref={(el) => setCanvasRef(variant.id, el)}
                    className="w-full h-full object-contain"
                    style={{ imageRendering: "auto" }}
                  />
                  {!rendered && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
                    </div>
                  )}
                </div>

                {/* Download button */}
                <button
                  onClick={() => downloadAd(variant)}
                  disabled={isDownloading}
                  className={`mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all ${
                    isDownloading
                      ? "bg-accent/20 text-accent-light cursor-wait"
                      : "bg-accent text-white hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]"
                  }`}
                >
                  {isDownloading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Generating...
                    </>
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

      {/* ─── Tips Section ─── */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-2xl border border-border-dark bg-bg-card p-8">
          <h2 className="text-xl font-bold mb-4">
            <span className="gradient-text">Quick Tips</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Full Resolution",
                desc: "Every ad downloads at exact platform dimensions — no upscaling, no quality loss.",
                icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14",
              },
              {
                title: "Ready to Post",
                desc: "Download and upload directly to any platform. No cropping or resizing needed.",
                icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
              },
              {
                title: "Brand Consistent",
                desc: "Every ad matches your website's exact colors, fonts, and brand identity.",
                icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
              },
            ].map((tip) => (
              <div key={tip.title} className="flex gap-3">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={tip.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-white mb-1">{tip.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
