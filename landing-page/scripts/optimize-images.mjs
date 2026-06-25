import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const publicDir = path.resolve('public')
const targets = [
  'banners/hero-banner.png',
  'banners/og-image.png',
  'screenshots/hero-mockup.png',
  ...['01-splash', '02-dashboard', '03-new-project', '04-new-section', '05-camera-detection', '06-report'].map(
    (name) => `screenshots/walkthrough/${name}.png`,
  ),
]

async function optimize(relativePath) {
  const input = path.join(publicDir, relativePath)
  const webpOut = input.replace(/\.png$/i, '.webp')

  const info = await stat(input)
  const beforeKb = Math.round(info.size / 1024)

  await sharp(input)
    .webp({ quality: 82, effort: 6 })
    .toFile(webpOut)

  const after = await stat(webpOut)
  const afterKb = Math.round(after.size / 1024)
  console.log(`${relativePath}: ${beforeKb} KB -> ${path.basename(webpOut)} ${afterKb} KB`)
}

for (const target of targets) {
  await optimize(target)
}

console.log('Done.')
