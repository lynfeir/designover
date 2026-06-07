/**
 * Builds the brand assets:
 *   - logo-skyline.png  (favicon / square uses, from the SVG)
 *   - og-banner.png     (1200x630 link-preview card)
 * Run: node scripts/make-brand.mjs
 */
import sharp from "sharp";
import fs from "node:fs";

const pub = "public";

// 1. Logo PNG from the SVG (transparent)
await sharp(`${pub}/logo-skyline.svg`)
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(`${pub}/logo-skyline.png`);

// 2. OG / link-preview banner
const W = 1200;
const H = 630;

const skyline = `
  <g transform="translate(72,70) scale(1.4)" fill="url(#gold)">
    <rect x="3" y="42" width="7" height="16"/>
    <rect x="11" y="33" width="6" height="25"/>
    <rect x="18" y="47" width="5" height="11"/>
    <rect x="26" y="23" width="9" height="35"/>
    <path d="M26 23 L30.5 8 L35 23 Z"/>
    <rect x="36" y="29" width="6" height="29"/>
    <rect x="43" y="38" width="6" height="20"/>
    <rect x="50" y="33" width="5" height="25"/>
    <rect x="56" y="47" width="5" height="11"/>
    <rect x="2" y="58" width="60" height="2.6" rx="1.3"/>
  </g>`;

const overlay = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#E8B84B"/><stop offset="1" stop-color="#B9842B"/>
    </linearGradient>
    <linearGradient id="scrimL" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#06060A" stop-opacity="0.92"/>
      <stop offset="0.62" stop-color="#06060A" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#06060A" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="scrimB" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#06060A" stop-opacity="0"/>
      <stop offset="1" stop-color="#06060A" stop-opacity="0.8"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#06060A" opacity="0.32"/>
  <rect width="${W}" height="${H}" fill="url(#scrimL)"/>
  <rect width="${W}" height="${H}" fill="url(#scrimB)"/>
  ${skyline}
  <text x="170" y="120" font-family="Georgia, 'Times New Roman', serif" font-size="30" letter-spacing="6" fill="#E8B84B">ATLANTA, GA</text>
  <text x="70" y="340" font-family="Georgia, 'Times New Roman', serif" font-weight="600" font-size="92" fill="#F5EFE0">Design <tspan fill="#E8B84B">over</tspan> Atlanta</text>
  <rect x="74" y="372" width="90" height="3" fill="url(#gold)"/>
  <text x="70" y="436" font-family="'Segoe UI', Arial, sans-serif" font-size="34" fill="#E9E4D8">Custom websites &amp; automation, from $399 in 48 hours.</text>
  <text x="70" y="560" font-family="'Segoe UI', Arial, sans-serif" font-size="26" letter-spacing="2" fill="#B7AE9C">designoveratlanta.com</text>
</svg>`);

const base = await sharp(`${pub}/cinematic/hero-atlanta.webp`)
  .resize(W, H, { fit: "cover", position: "center" })
  .toBuffer();

await sharp(base)
  .composite([{ input: overlay, top: 0, left: 0 }])
  .png()
  .toFile(`${pub}/og-banner.png`);

console.log("logo-skyline.png:", (fs.statSync(`${pub}/logo-skyline.png`).size / 1024).toFixed(1) + "KB");
console.log("og-banner.png:", (fs.statSync(`${pub}/og-banner.png`).size / 1024).toFixed(1) + "KB");
