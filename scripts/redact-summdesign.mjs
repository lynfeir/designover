import sharp from "sharp";

const SRC =
  "C:/Users/Lynfeir/Pictures/Screenshots/Screenshot 2026-06-06 143151.png";
const OUT = "public/portfolio/summdesign.webp";

// Job name + company regions, in source pixels.
const boxes = [
  { left: 300, top: 375, width: 240, height: 58 }, // Mattamy card
  { left: 1085, top: 375, width: 180, height: 58 }, // Hunter Homes card
  { left: 300, top: 503, width: 225, height: 58 }, // Neal card
];

const overlays = boxes.map((b) => ({
  input: Buffer.from(
    `<svg width="${b.width}" height="${b.height}"><rect width="${b.width}" height="${b.height}" rx="8" fill="#e2e8f0"/></svg>`
  ),
  left: b.left,
  top: b.top,
}));

// Two stages: composite at full size first (sharp would otherwise resize
// before compositing and the blocks would drift), then crop to 16:10 (trim
// the empty right gutter so it fills the card without cropping the sidebar),
// then resize for the web.
const composited = await sharp(SRC).composite(overlays).png().toBuffer();
const meta = await sharp(composited).metadata();
const cropW = Math.min(meta.width, Math.round((meta.height * 16) / 10));
await sharp(composited)
  .extract({ left: 0, top: 0, width: cropW, height: meta.height })
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(OUT);

console.log(`redacted -> ${OUT} (cropped to ${cropW}x${meta.height})`);
