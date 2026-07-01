/**
 * Sincroniza landing-page/public/ → raíz del repo (lo que despliega Hostinger).
 * Ejecutar ANTES de cada commit que vaya a producción:
 *   npm run sync:deploy
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');
const publicDir = path.join(repoRoot, 'landing-page/public');

/** Carpetas/archivos que Hostinger sirve desde la raíz del repo */
const SYNC_ITEMS = [
  { from: 'assets', to: 'assets', type: 'dir' },
  { from: 'banners', to: 'banners', type: 'dir' },
  { from: 'brand', to: 'brand', type: 'dir' },
  { from: 'screenshots', to: 'screenshots', type: 'dir' },
  { from: 'index.html', to: 'index.html', type: 'file' },
  { from: 'sitemap.xml', to: 'sitemap.xml', type: 'file' },
  { from: 'llms.txt', to: 'llms.txt', type: 'file' },
  { from: 'robots.txt', to: 'robots.txt', type: 'file' },
  { from: 'site.webmanifest', to: 'site.webmanifest', type: 'file' },
  { from: '.htaccess', to: '.htaccess', type: 'file' },
  { from: 'favicon.ico', to: 'favicon.ico', type: 'file' },
  { from: 'favicon-16.png', to: 'favicon-16.png', type: 'file' },
  { from: 'favicon-32.png', to: 'favicon-32.png', type: 'file' },
  { from: 'favicon-48.png', to: 'favicon-48.png', type: 'file' },
  { from: 'favicon-192.png', to: 'favicon-192.png', type: 'file' },
  { from: 'apple-touch-icon.png', to: 'apple-touch-icon.png', type: 'file' },
];

/** Nombres incorrectos que no deben existir en producción */
const FORBIDDEN_BANNER_NAMES = [
  'hero-banner-en.png.png',
  'hero-banner-en.webp.png',
];

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, ent.name);
    const d = path.join(dest, ent.name);
    if (ent.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function rmDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) rmDir(p);
    else fs.unlinkSync(p);
  }
  fs.rmdirSync(dir);
}

for (const item of SYNC_ITEMS) {
  const src = path.join(publicDir, item.from);
  const dest = path.join(repoRoot, item.to);

  if (!fs.existsSync(src)) {
    console.warn('⚠ omitido (no existe en public):', item.from);
    continue;
  }

  if (item.type === 'dir') {
    rmDir(dest);
    copyDir(src, dest);
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
  console.log('✓', item.to);
}

for (const name of FORBIDDEN_BANNER_NAMES) {
  const bad = path.join(repoRoot, 'banners', name);
  if (fs.existsSync(bad)) {
    fs.unlinkSync(bad);
    console.log('✗ eliminado nombre incorrecto:', name);
  }
}

// Verificar banner EN
const enWebp = path.join(repoRoot, 'banners/hero-banner-en.webp');
if (fs.existsSync(enWebp)) {
  const size = fs.statSync(enWebp).size;
  if (size > 500_000) {
    console.error('ERROR: hero-banner-en.webp pesa', size, 'bytes (>500KB). Debe ser ~245KB.');
    process.exit(1);
  }
}

// Verificar lógica EN en JS principal
const jsPath = path.join(repoRoot, 'assets/index-6hJwm0gv.js');
if (fs.existsSync(jsPath)) {
  const js = fs.readFileSync(jsPath, 'utf8');
  if (!js.includes('hero-banner-en')) {
    console.error('ERROR: assets/index-6hJwm0gv.js no tiene lógica hero-banner-en.');
    process.exit(1);
  }
}

console.log('\nSync completado. Revisa git diff y haz commit + push.');
