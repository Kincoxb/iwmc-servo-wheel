const fs = require('fs');
const { createCanvas, loadImage } = require('@napi-rs/canvas');

async function crop(src, out, sx, sy, sw, sh) {
  const img = await loadImage(src);
  const canvas = createCanvas(sw, sh);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
  fs.writeFileSync(out, canvas.toBuffer('image/png'));
}

(async () => {
  fs.mkdirSync('assets', { recursive: true });
  const brochure = 'tmp/brochure-480-1.png';
  await crop(brochure, 'assets/iwmc050-hd.png', 2220 * 2, 730 * 2, 420 * 2, 220 * 2);
  await crop(brochure, 'assets/iwmc070-hd.png', 2750 * 2, 715 * 2, 450 * 2, 235 * 2);
  await crop(brochure, 'assets/iwmc085-hd.png', 3280 * 2, 695 * 2, 470 * 2, 255 * 2);
  await crop(brochure, 'assets/warehouse-hd.png', 2150 * 2, 1845 * 2, 370 * 2, 245 * 2);
  await crop(brochure, 'assets/industrial-hd.png', 3420 * 2, 1845 * 2, 370 * 2, 245 * 2);
  await crop(brochure, 'assets/humanoid-hd.png', 370 * 2, 1530 * 2, 360 * 2, 480 * 2);
  await crop(brochure, 'assets/quadruped-hd.png', 1220 * 2, 1630 * 2, 390 * 2, 380 * 2);
})();
