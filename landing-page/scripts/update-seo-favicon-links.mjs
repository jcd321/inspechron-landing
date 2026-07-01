import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');

const old = '    <link rel="icon" href="/favicon.ico" sizes="any" />';
const neu = `    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
    <link rel="icon" href="/favicon.ico" sizes="48x48" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />`;

const skip = new Set([
  path.join(repoRoot, 'index.html'),
  path.join(repoRoot, 'landing-page/index.html'),
  path.join(repoRoot, 'landing-page/public/index.html'),
  path.join(repoRoot, 'landing-page/dist/index.html'),
]);

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === 'assets') continue;
      walk(p);
    } else if (ent.name === 'index.html' && !skip.has(p)) {
      const content = fs.readFileSync(p, 'utf8');
      if (content.includes(old)) {
        fs.writeFileSync(p, content.replace(old, neu));
        console.log(path.relative(repoRoot, p));
      }
    }
  }
}

walk(repoRoot);
