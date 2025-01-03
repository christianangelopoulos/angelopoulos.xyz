const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

async function build() {
  // Clean public directory
  console.log('Cleaning public directory...');
  await fs.emptyDir('./public');

  // Build Tailwind CSS
  console.log('Building Tailwind CSS...');
  await new Promise((resolve, reject) => {
    exec('npx tailwindcss -i ./src/input.css -o ./src/styles/output.css', (error) => {
      if (error) reject(error);
      else resolve();
    });
  });

  // Copy all files from src to public
  console.log('Copying files to public directory...');
  await fs.copy('./src', './public', {
    filter: (src) => {
      // Optionally exclude certain files/folders from copying
      return !src.includes('node_modules');
    }
  });

  console.log('Build complete!');
}

build().catch(console.error); 