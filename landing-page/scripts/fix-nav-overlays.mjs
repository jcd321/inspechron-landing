/**
 * Elimina scripts de overlay azul en páginas SEO (rompen el botón Atrás del navegador).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');

const OVERLAY_BLOCK = /\s*<script>\s*document\.querySelectorAll\('a\[href="\/"\]'\)\.forEach[\s\S]*?<\/script>\s*/g;

const HOME_PAGESHOW_BLOCK = /\s*<script>\s*window\.addEventListener\('pageshow', function \(e\) \{[\s\S]*?\}\);\s*<\/script>\s*/g;

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules' || ent.name === 'assets') continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (ent.name === 'index.html') files.push(p);
  }
  return files;
}

let fixed = 0;
for (const file of walk(repoRoot)) {
  if (file.endsWith(path.join('landing-page', 'index.html'))) continue;
  if (file.endsWith(path.join('landing-page', 'public', 'index.html'))) continue;
  if (file.endsWith(path.join('landing-page', 'dist', 'index.html'))) continue;
  if (file.endsWith(path.join('', 'index.html')) && !file.includes('landing-page')) {
    // root index handled separately
  }

  let content = fs.readFileSync(file, 'utf8');
  const before = content;
  content = content.replace(OVERLAY_BLOCK, '\n');
  if (content !== before) {
    fs.writeFileSync(file, content);
    console.log('✓ overlay removed:', path.relative(repoRoot, file));
    fixed++;
  }
}

// Home: quitar pageshow que vacía #root en bfcache (pantalla azul al volver)
for (const home of [
  path.join(repoRoot, 'index.html'),
  path.join(repoRoot, 'landing-page/index.html'),
  path.join(repoRoot, 'landing-page/public/index.html'),
  path.join(repoRoot, 'landing-page/dist/index.html'),
]) {
  if (!fs.existsSync(home)) continue;
  let content = fs.readFileSync(home, 'utf8');
  const before = content;
  content = content.replace(HOME_PAGESHOW_BLOCK, '\n');
  if (content !== before) {
    fs.writeFileSync(home, content);
    console.log('✓ pageshow removed:', path.relative(repoRoot, home));
    fixed++;
  }
}

console.log(`\n${fixed} archivo(s) corregidos.`);
