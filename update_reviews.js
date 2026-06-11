const fs = require('fs');
const path = require('path');

const locales = ['zh', 'en', 'ru', 'uk'];

locales.forEach(loc => {
  const filePath = path.join(__dirname, 'src/messages', `${loc}.json`);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Odesa with Kharkiv in the 8th review
  if (loc === 'zh') {
    content = content.replace('敖德萨的一个宝藏公园！', '哈尔科夫的一个宝藏公园！');
  } else if (loc === 'en') {
    content = content.replace('A hidden gem park in Odesa!', 'A hidden gem park in Kharkiv!');
  } else if (loc === 'ru') {
    content = content.replace('Скрытое сокровище парков Одессы!', 'Скрытое сокровище парков Харькова!');
    // Some translations might use "Скрытая жемчужина в Одессе" or something similar
    // Let's do a generic replace
    content = content.replace('Одесс', 'Харьков');
    content = content.replace('Одес', 'Харьков');
  } else if (loc === 'uk') {
    content = content.replace('Одес', 'Харков'); // just in case
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated reviews in ${loc}.json`);
});
