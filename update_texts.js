const fs = require('fs');

const zh = require('./src/messages/zh.json');
const en = require('./src/messages/en.json');
const de = require('./src/messages/de.json');

zh.intro.title = '探索 Old Bridge Heidelberg';
zh.intro.description = '海德堡老桥 (Alte Brücke Heidelberg) 位于德国巴登-符腾堡州海德堡，是内卡河上的一座著名历史石桥。作为海德堡的地标之一，这里不仅拥有极高的历史价值，也是游客欣赏海德堡城堡和老城美景的绝佳位置。';
zh.intro.alsoKnownAs.title = '核心亮点';
zh.intro.alsoKnownAs.items = [
  "历史建筑：内卡河上的标志性石桥，拥有悠久的历史和精美的雕塑。",
  "绝佳视角：在桥上可以完美欣赏海德堡城堡和老城的全景。",
  "核心位置：紧邻海德堡老城，步行即可到达周边多个景点。"
];
zh.intro.visitGuide.items = [
  "全天免费开放，随时可以前往散步或拍照",
  "建议清晨或傍晚前往，光线最适合拍摄风景和人像",
  "桥上风大时请注意保暖",
  "周边有很多咖啡馆和传统德国餐厅可供选择"
];
zh.route.overview = "海德堡老城休闲步行路线";
zh.photoSpots.spots[0].name = "老桥铜像";
zh.photoSpots.spots[0].desc = "拍摄标志性铜像及背景的老城建筑";
zh.photoSpots.spots[3].name = "远眺海德堡城堡";
zh.photoSpots.spots[3].desc = "从桥上仰望雄伟的海德堡城堡";
zh.hotels.supplementsContent = "海德堡周边有众多极高评价的本地风味餐馆，可以品尝传统德国美食。";
zh.gallery.subtitle = "海德堡老桥的迷人风光";

fs.writeFileSync('./src/messages/zh.json', JSON.stringify(zh, null, 2));

en.intro.title = 'Explore Old Bridge Heidelberg';
en.intro.description = 'The Old Bridge (Alte Brücke Heidelberg) is a famous historical stone bridge over the Neckar River in Heidelberg, Baden-Württemberg, Germany. As one of Heidelberg\'s landmarks, it not only holds great historical value but also offers visitors the perfect vantage point to admire Heidelberg Castle and the old town.';
en.intro.alsoKnownAs.title = 'Highlights';
en.intro.alsoKnownAs.items = [
  "Historical Architecture: An iconic stone bridge over the Neckar River with a rich history and exquisite sculptures.",
  "Perfect Vantage Point: Offers a perfect panoramic view of Heidelberg Castle and the old town.",
  "Central Location: Adjacent to Heidelberg's old town, within walking distance to multiple surrounding attractions."
];
en.intro.visitGuide.items = [
  "Free and open all day, visit anytime for a walk or photography",
  "Early morning or late afternoon is recommended for the best lighting",
  "Dress warmly as it can be windy on the bridge",
  "Plenty of cafes and traditional German restaurants nearby"
];
en.route.overview = "Heidelberg Old Town Walking Route";
en.photoSpots.spots[0].name = "Old Bridge Statues";
en.photoSpots.spots[0].desc = "Capture the iconic bronze statues with the old town in the background";
en.photoSpots.spots[3].name = "Distant View of Heidelberg Castle";
en.photoSpots.spots[3].desc = "Look up at the majestic Heidelberg Castle from the bridge";
en.hotels.supplementsContent = "There are numerous highly-rated local restaurants around Heidelberg where you can taste traditional German cuisine.";
en.gallery.subtitle = "Charming Scenery of Old Bridge Heidelberg";

fs.writeFileSync('./src/messages/en.json', JSON.stringify(en, null, 2));

de.intro.title = 'Entdecken Sie die Alte Brücke Heidelberg';
de.intro.description = 'Die Alte Brücke (Alte Brücke Heidelberg) ist eine berühmte historische Steinbrücke über den Neckar in Heidelberg, Baden-Württemberg, Deutschland. Als eines der Wahrzeichen Heidelbergs hat sie nicht nur einen großen historischen Wert, sondern bietet Besuchern auch den perfekten Aussichtspunkt, um das Heidelberger Schloss und die Altstadt zu bewundern.';
de.intro.alsoKnownAs.title = 'Highlights';
de.intro.alsoKnownAs.items = [
  "Historische Architektur: Eine ikonische Steinbrücke über den Neckar mit einer reichen Geschichte und exquisiten Skulpturen.",
  "Perfekter Aussichtspunkt: Bietet einen perfekten Panoramablick auf das Heidelberger Schloss und die Altstadt.",
  "Zentrale Lage: Direkt an der Heidelberger Altstadt, viele Sehenswürdigkeiten sind zu Fuß erreichbar."
];
de.intro.visitGuide.items = [
  "Rund um die Uhr kostenlos zugänglich, jederzeit für einen Spaziergang oder Fotos geöffnet",
  "Frühmorgens oder am späten Nachmittag für das beste Licht empfohlen",
  "Ziehen Sie sich warm an, da es auf der Brücke windig sein kann",
  "Viele Cafés und traditionelle deutsche Restaurants in der Nähe"
];
de.route.overview = "Heidelberger Altstadt Spaziergang";
de.photoSpots.spots[0].name = "Alte Brücke Statuen";
de.photoSpots.spots[0].desc = "Fotografieren Sie die ikonischen Bronzestatuen mit der Altstadt im Hintergrund";
de.photoSpots.spots[3].name = "Blick auf das Heidelberger Schloss";
de.photoSpots.spots[3].desc = "Blicken Sie von der Brücke zum majestätischen Heidelberger Schloss hinauf";
de.hotels.supplementsContent = "Rund um Heidelberg gibt es zahlreiche hoch bewertete lokale Restaurants, in denen Sie traditionelle deutsche Küche probieren können.";
de.gallery.subtitle = "Bezaubernde Landschaft der Alten Brücke Heidelberg";

fs.writeFileSync('./src/messages/de.json', JSON.stringify(de, null, 2));
