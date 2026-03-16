const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateImages() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load the HTML file
  const htmlPath = path.resolve(__dirname, 'marketing-images.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  // Generate Cover Image (1280x720)
  console.log('Generating cover image...');
  const coverElement = await page.$('.cover');
  await coverElement.screenshot({ 
    path: 'cover-image.png',
    type: 'png'
  });

  // Generate Thumbnail (600x400)
  console.log('Generating thumbnail...');
  const thumbnailElement = await page.$('.thumbnail');
  await thumbnailElement.screenshot({ 
    path: 'thumbnail.png',
    type: 'png'
  });

  await browser.close();
  
  console.log('\n✅ Images generated successfully!');
  console.log('- cover-image.png (1280x720)');
  console.log('- thumbnail.png (600x400)');
}

generateImages().catch(console.error);
