import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = 'S:/My_Projects/ps_termez/src/assets/newImages/about';
const outputDir = path.join(
  'S:/My_Projects/ps_termez/src/assets/newImages/optimized'
);

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdirSync(inputDir).forEach(async (file) => {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return; // faqat rasm fayllar

  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, path.parse(file).name + '.webp');

  if (fs.existsSync(outputPath)) {
    console.log(`Skip: ${file} (already exists)`);
    return;
  }

  try {
    await sharp(inputPath)
      .resize({ width: 1920 }) // kerakli o‘lcham
      .webp({ quality: 75 }) // sifat va siqish balansi
      .toFile(outputPath);
    console.log(`Optimized: ${file}`);
  } catch (err) {
    console.error(`Error with ${file}:`, err.message);
  }
});
