/**
 * Compress the Higgsfield cinematic PNGs to web-sized WebP.
 *   node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";

const dir = path.join(process.cwd(), "public", "cinematic");
// Max width per asset (hero spans full screen; others are backdrops).
const MAX = { "hero-atlanta": 2400, default: 1600 };

const files = (await readdir(dir)).filter((f) => f.endsWith(".png"));

for (const f of files) {
  const base = f.replace(/\.png$/, "");
  const src = path.join(dir, f);
  const out = path.join(dir, `${base}.webp`);
  const width = MAX[base] ?? MAX.default;

  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);

  const before = (await stat(src)).size;
  const after = (await stat(out)).size;
  console.log(
    `${f}  ${(before / 1e6).toFixed(2)}MB → ${base}.webp ${(after / 1e6).toFixed(2)}MB`
  );
  await unlink(src);
}
console.log("done");
