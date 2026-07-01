/**
 * Genera favicons desde el icono de marca Inspechron (lupa del logo).
 * Fuente: brand/logo-source.png — recorte del símbolo central.
 */
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');
const source = path.join(repoRoot, 'brand/logo-source.png');

/** Recorte del icono lupa (ajustado sobre logo-source 512×512) */
const ICON_CROP = { left: 215, top: 140, width: 85, height: 230 };

const OUTPUT_DIRS = [
  repoRoot,
  path.join(repoRoot, 'landing-page/public'),
  path.join(repoRoot, 'landing-page/dist'),
];

async function makeIcon(size) {
  const padding = size <= 32 ? 0.08 : 0.12;
  const inner = Math.round(size * (1 - padding * 2));

  const cropped = await sharp(source)
    .extract(ICON_CROP)
    .resize(inner, inner, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: cropped, gravity: 'center' }])
    .png()
    .toBuffer();
}

const sizeMap = [
  [16, 'favicon-16.png'],
  [32, 'favicon-32.png'],
  [48, 'favicon-48.png'],
  [180, 'apple-touch-icon.png'],
  [192, 'favicon-192.png'],
];

for (const dir of OUTPUT_DIRS) {
  fs.mkdirSync(dir, { recursive: true });
  const pngPaths = [];

  for (const [size, filename] of sizeMap) {
    const outPath = path.join(dir, filename);
    fs.writeFileSync(outPath, await makeIcon(size));
    if ([16, 32, 48].includes(size)) pngPaths.push(outPath);
    console.log('✓', path.relative(repoRoot, outPath));
  }

  const icoPath = path.join(dir, 'favicon.ico');
  const icoBuffer = await pngToIco(pngPaths);
  fs.writeFileSync(icoPath, icoBuffer);
  console.log('✓', path.relative(repoRoot, icoPath));
}

console.log('\nFavicons generados desde brand/logo-source.png');
