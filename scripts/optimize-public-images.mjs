/**
 * Writes WebP siblings next to JPEGs under public/images/.
 * Run: node scripts/optimize-public-images.mjs
 */
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');
const files = await readdir(imagesDir);
const jpegs = files.filter((f) => /\.jpe?g$/i.test(f));

for (const file of jpegs) {
  const input = path.join(imagesDir, file);
  const webpName = file.replace(/\.jpe?g$/i, '.webp');
  const output = path.join(imagesDir, webpName);

  await sharp(input).webp({ quality: 82, effort: 5 }).toFile(output);
  console.log('wrote', path.relative(process.cwd(), output));

  if (file === 'hero-boat.jpg') {
    const mobileOut = path.join(imagesDir, 'hero-boat-mobile.webp');
    await sharp(input)
      .resize({ width: 960, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(mobileOut);
    console.log('wrote', path.relative(process.cwd(), mobileOut));
  }
}

console.log('done:', jpegs.length, 'sources');
