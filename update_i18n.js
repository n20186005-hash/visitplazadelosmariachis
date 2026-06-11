const fs = require('fs');
const path = require('path');

const locales = ['zh', 'en', 'de'];

const zhData = require('./src/messages/zh.json');
const enData = require('./src/messages/en.json');

// Updates for ZH
zhData.meta.title = '海德堡老桥 | Old Bridge Heidelberg';
zhData.meta.description = '探索德国巴登-符腾堡州的海德堡老桥 (Alte Brücke Heidelberg)。了解这座历史悠久的桥梁及其周边景点。';
zhData.hero.title = 'Old Bridge Heidelberg';
zhData.hero.subtitle = '海德堡 · 德国';
zhData.hero.rating = '4.8';
zhData.hero.reviewCount = '17,955';
zhData.basicInfo.officialNameValue = 'Alte Brücke Heidelberg';
zhData.basicInfo.typeValue = '桥';
zhData.basicInfo.countryValue = '德国';
zhData.basicInfo.cityValue = '海德堡 (Heidelberg)';
zhData.basicInfo.addressValue = 'Alte Brücke, 69117 Heidelberg, 德国';
zhData.basicInfo.plusCodeValue = 'CP75+RR 海德堡 德国';
zhData.footer.rights = '© 2026 Old Bridge Heidelberg. 保留所有权利。';
zhData.footer.officialLinks = {
  "germany_travel": { "name": "德国国家旅游局", "url": "https://www.germany.travel/en/home.html" },
  "bw_tourism": { "name": "巴登-符腾堡州旅游局", "url": "https://www.visit-bw.com/de" },
  "digital_library": { "name": "德国数字图书馆文化遗产库", "url": "https://www.deutsche-digitale-bibliothek.de/" },
  "bundesregierung": { "name": "德国联邦政府", "url": "https://www.bundesregierung.de/breg-de" },
  "denkmalpflege": { "name": "巴登-符腾堡州文物保护局", "url": "https://www.denkmalpflege-bw.de/" },
  "heidelberg_denkmal": { "name": "海德堡市文物保护局", "url": "https://www.heidelberg.de/HD/Leben/Denkmalschutz.html" },
  "bauforschung": { "name": "巴符州建筑研究与修复数据库", "url": "https://www.bauforschung-bw.de/" },
  "auswaertiges": { "name": "德国联邦外交部", "url": "https://www.auswaertiges-amt.de/" }
};

// Updates for EN
enData.meta.title = 'Old Bridge Heidelberg | Alte Brücke Heidelberg';
enData.meta.description = 'Explore the complete guide to Old Bridge Heidelberg in Baden-Württemberg, Germany.';
enData.hero.title = 'Old Bridge Heidelberg';
enData.hero.subtitle = 'Heidelberg · Germany';
enData.hero.rating = '4.8';
enData.hero.reviewCount = '17,955';
enData.basicInfo.officialNameValue = 'Alte Brücke Heidelberg';
enData.basicInfo.typeValue = 'Bridge';
enData.basicInfo.countryValue = 'Germany';
enData.basicInfo.cityValue = 'Heidelberg';
enData.basicInfo.addressValue = 'Alte Brücke, 69117 Heidelberg, Germany';
enData.basicInfo.plusCodeValue = 'CP75+RR Heidelberg Germany';
enData.footer.rights = '© 2026 Old Bridge Heidelberg. All rights reserved.';
enData.footer.officialLinks = {
  "germany_travel": { "name": "German National Tourist Board", "url": "https://www.germany.travel/en/home.html" },
  "bw_tourism": { "name": "Baden-Württemberg Tourism", "url": "https://www.visit-bw.com/de" },
  "digital_library": { "name": "German Digital Library", "url": "https://www.deutsche-digitale-bibliothek.de/" },
  "bundesregierung": { "name": "Federal Government of Germany", "url": "https://www.bundesregierung.de/breg-de" },
  "denkmalpflege": { "name": "State Office for Monument Preservation BW", "url": "https://www.denkmalpflege-bw.de/" },
  "heidelberg_denkmal": { "name": "Heidelberg Monument Protection", "url": "https://www.heidelberg.de/HD/Leben/Denkmalschutz.html" },
  "bauforschung": { "name": "Building Research Database BW", "url": "https://www.bauforschung-bw.de/" },
  "auswaertiges": { "name": "Federal Foreign Office", "url": "https://www.auswaertiges-amt.de/" }
};

// Create DE data based on EN but translated
const deData = JSON.parse(JSON.stringify(enData));
deData.meta.title = 'Alte Brücke Heidelberg | Reiseführer';
deData.meta.description = 'Entdecken Sie die Alte Brücke Heidelberg in Baden-Württemberg, Deutschland.';
deData.header = {
  "home": "Startseite",
  "gallery": "Galerie",
  "reviews": "Bewertungen",
  "map": "Karte",
  "backToHome": "Zurück zur Startseite"
};
deData.hero.title = 'Old Bridge Heidelberg';
deData.hero.subtitle = 'Heidelberg · Deutschland';
deData.hero.hours = '24 Stunden geöffnet';
deData.hero.openMaps = 'Standort ansehen';
deData.basicInfo.title = 'Basisinformationen';
deData.basicInfo.officialName = 'Offizieller Name';
deData.basicInfo.type = 'Kategorie';
deData.basicInfo.typeValue = 'Brücke';
deData.basicInfo.country = 'Land';
deData.basicInfo.countryValue = 'Deutschland';
deData.basicInfo.city = 'Stadt';
deData.basicInfo.address = 'Adresse';
deData.basicInfo.addressValue = 'Alte Brücke, 69117 Heidelberg, Deutschland';
deData.basicInfo.plusCodeValue = 'CP75+RR Heidelberg Deutschland';
deData.mapSection = {
  "title": "Anfahrt",
  "subtitle": "Alte Brücke, 69117 Heidelberg, Deutschland",
  "openMaps": "Auf Google Maps ansehen"
};
deData.gallery.title = 'Wunderschöne Fotos';
deData.gallery.subtitle = 'Bezaubernde Landschaft der Alten Brücke Heidelberg';
deData.gallery.viewAll = 'Mehr Fotos auf Google Maps ansehen';
deData.gallery.showAllPhotos = 'Alle Fotos anzeigen';
deData.reviews.title = 'Besertungen';
deData.reviews.declaration = 'Bewertungsinformationen können über Google Maps eingesehen werden (externer Link).';
deData.reviews.moreReviews = 'Mehr Bewertungen auf Google Maps ansehen';
deData.footer.rights = '© 2026 Old Bridge Heidelberg. Alle Rechte vorbehalten.';
deData.footer.officialResourcesTitle = 'Verwandte Ressourcen & Informationen';
deData.footer.disclaimer = 'Diese Website ist ein unabhängiges Informationsprojekt von Dritten.';
deData.footer.privacy = 'Datenschutz';
deData.footer.terms = 'Nutzungsbedingungen';
deData.footer.cookies = 'Cookie-Einstellungen';
deData.footer.officialLinks = {
  "germany_travel": { "name": "Deutsche Zentrale für Tourismus", "url": "https://www.germany.travel/en/home.html" },
  "bw_tourism": { "name": "Tourismus Baden-Württemberg", "url": "https://www.visit-bw.com/de" },
  "digital_library": { "name": "Deutsche Digitale Bibliothek", "url": "https://www.deutsche-digitale-bibliothek.de/" },
  "bundesregierung": { "name": "Bundesregierung", "url": "https://www.bundesregierung.de/breg-de" },
  "denkmalpflege": { "name": "Landesamt für Denkmalpflege BW", "url": "https://www.denkmalpflege-bw.de/" },
  "heidelberg_denkmal": { "name": "Denkmalschutz Heidelberg", "url": "https://www.heidelberg.de/HD/Leben/Denkmalschutz.html" },
  "bauforschung": { "name": "Bauforschungsdatenbank BW", "url": "https://www.bauforschung-bw.de/" },
  "auswaertiges": { "name": "Auswärtiges Amt", "url": "https://www.auswaertiges-amt.de/" }
};

fs.writeFileSync('./src/messages/zh.json', JSON.stringify(zhData, null, 2));
fs.writeFileSync('./src/messages/en.json', JSON.stringify(enData, null, 2));
fs.writeFileSync('./src/messages/de.json', JSON.stringify(deData, null, 2));

console.log('i18n updated');
