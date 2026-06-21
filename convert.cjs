const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'src', 'assets');

fs.readdir(assetsDir, async (err, files) => {
  if (err) throw err;
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(assetsDir, file);
      const filename = path.basename(file, ext);
      const outputPath = path.join(assetsDir, `${filename}.webp`);
      
      try {
        await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
        console.log(`Converted ${file} to WebP.`);
        // Optional: delete original
        fs.unlinkSync(inputPath);
        console.log(`Deleted original ${file}.`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
});
