const fs = require('fs-extra');
const path = require('path');

async function build() {
  // Clean public directory
  console.log('Cleaning public directory...');
  await fs.emptyDir('./public');

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