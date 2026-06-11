const fs = require('fs');
const path = require('path');

// 1. LanguageToggle.tsx
let langContent = fs.readFileSync('./src/components/LanguageToggle.tsx', 'utf8');
langContent = langContent.replace(/const labels: Record<string, string> = {[\s\S]*?};/, `const labels: Record<string, string> = {
  zh: '中文',
  en: 'English',
  de: 'Deutsch',
};`);
fs.writeFileSync('./src/components/LanguageToggle.tsx', langContent);

// 2. Hero.tsx
let heroContent = fs.readFileSync('./src/components/Hero.tsx', 'utf8');
heroContent = heroContent.replace(/jardim-luis-de-camoes \(1\)\.jpg/g, 'old-bridge-heidelberg (1).jpg');
heroContent = heroContent.replace(/Jardim Luís de Camões/g, 'Old Bridge Heidelberg');
fs.writeFileSync('./src/components/Hero.tsx', heroContent);

// 3. Gallery.tsx
let galleryContent = fs.readFileSync('./src/components/Gallery.tsx', 'utf8');
galleryContent = galleryContent.replace(/length: 16/g, 'length: 18');
galleryContent = galleryContent.replace(/jardim-luis-de-camoes/g, 'old-bridge-heidelberg');
galleryContent = galleryContent.replace(/Jardim Luís de Camões/g, 'Old Bridge Heidelberg');
fs.writeFileSync('./src/components/Gallery.tsx', galleryContent);

// 4. Map Links
const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('https://maps.app.goo.gl/6WaNcoHmFRCSmj4s5')) {
    content = content.replace(/https:\/\/maps\.app\.goo\.gl\/6WaNcoHmFRCSmj4s5/g, 'https://maps.app.goo.gl/E6sARLKkqxeeVSDH7');
    fs.writeFileSync(filePath, content);
    console.log(`Updated Map link in ${file}`);
  }
}
