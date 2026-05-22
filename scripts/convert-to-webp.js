const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
const backupDir = path.join(__dirname, 'public', 'images', 'backup');

let convertedCount = 0;

async function convertToWebp(filePath) {
  const relativePath = path.relative(imagesDir, filePath);
  const outputFilePath = path.join(imagesDir, path.basename(filePath, path.extname(filePath)) + '.webp');

  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputFilePath);

    console.log(`✓ ${relativePath} → ${path.basename(outputFilePath)}`);
    convertedCount++;
  } catch (err) {
    console.error(`✗ ${relativePath}: ${err.message}`);
  }
}

async function processDirectory(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const stat = await fs.promises.stat(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpe?g|png)$/i.test(entry.name)) {
      await convertToWebp(fullPath);
    }
  }
}

async function main() {
  console.log('Scanning backup directory for images to convert...\n');
  await processDirectory(backupDir);
  console.log(`\n${convertedCount} file(s) converted.`);
}

main();
