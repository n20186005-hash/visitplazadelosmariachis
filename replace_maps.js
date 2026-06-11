const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('https://maps.app.goo.gl/6WaNcoHmFRCSmj4s5')) {
    content = content.replace(/https:\/\/maps\.app\.goo\.gl\/6WaNcoHmFRCSmj4s5/g, 'https://maps.app.goo.gl/E6sARLKkqxeeVSDH7');
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
}
