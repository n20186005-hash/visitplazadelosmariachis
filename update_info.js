const fs = require('fs');

function updateJson(file) {
  let data = fs.readFileSync(file, 'utf8');
  let obj = JSON.parse(data);

  if (file.includes('zh.json')) {
    obj.intro.description = "埃武拉历史中心坐落于阿连特茹平缓高地，整座老城被中世纪古城墙环绕，素有露天博物馆之称。两千多年文明在此交融沉淀，留存古罗马遗址、摩尔人古巷、哥特式教堂与文艺复兴民居建筑。老城以吉拉尔多广场为路网中心，多条古巷向外延伸，戴安娜花园地处老城高地，衔接古罗马神庙与主教建筑群，白墙配铁艺阳台、手绘花砖是街区标志性风貌。";
    obj.intro.visitGuide.items = [
      "全城多凹凸鹅卵石路面，务必穿着防滑舒适步行鞋；老城内部民宿大多可协助短途转运行李",
      "夏季日间气温偏高，做好防晒、常备饮用水，避开正午高温时段",
      "旅行团多集中上午抵达热门景点，想要清静游览可赶在展馆开馆第一时间入园",
      "当地公立博物馆周日免费参观，宗教场馆不适用该优惠"
    ];
    obj.intro.alsoKnownAs.items = [
      "多时期古建筑集群：2 世纪古罗马戴安娜神庙、中世纪要塞大教堂、16 世纪人骨礼拜堂、文艺复兴贵族宅邸集中分布",
      "原生态中世纪街巷：摩尔风格曲折鹅卵石小路，本土传统建筑肌理保存完整",
      "高地观景视野：大教堂塔顶、戴安娜花园平台可俯瞰整片老城红瓦屋顶与外侧阿连特茹平原",
      "浓厚市井人文：广场周边露天餐吧、手工艺品商铺密布，古迹与本地日常生活相融"
    ];
    
    obj.hours.outdoorTime = "老城街巷、吉拉尔多广场、戴安娜花园全域全天候免费通行；内部收费展馆分季节定时开放";
    obj.hours.summerTime = "常规 9:00-17:00，法定节假日营业时间微调";
    obj.hours.summer = "人骨礼拜堂";
    obj.hours.winterTime = "9:30-18:00";
    obj.hours.winter = "埃武拉大教堂含观景露台";
    obj.hours.warningTime = "全天对外开放，附属小型展馆限时开放";
    obj.hours.warning = "罗马神庙户外遗址";
    obj.hours.tip = "每年 4-10 月春至秋季；7、8 月盛夏正午炎热，优选清晨或傍晚出游";

    obj.tickets.outdoorPrice = "免费开放";
    obj.tickets.outdoor = "老城公共街区、广场、神庙外立面";
    obj.tickets.adultsPrice = "常规票价，学生享优惠";
    obj.tickets.adults = "人骨礼拜堂";
    obj.tickets.studentsPrice = "成人票价，学生半价";
    obj.tickets.students = "埃武拉大教堂（登顶露台）";
    obj.tickets.cardPrice = "多场馆联票可选购优惠套票";
    obj.tickets.card = "购票建议";
    obj.tickets.childrenPrice = "古城城墙内部禁止机动车驶入，城墙外围近郊设有多处免费公共停车场，泊车后步行 5 至 10 分钟即可进入老城";

    obj.transport.airportDesc = "就近国际机场：里斯本 LIS 机场（约 135 公里，车程 1 小时 25 分）、法鲁 FAO 机场（约 240 公里，车程 2 小时 50 分），落地推荐租车自驾。";
    obj.transport.selfDriveDesc = "里斯本出发沿 A2 高速南下，转接 A6 高速直达埃武拉城区，导航目的地 Jardim Diana，停靠城外停车场。";
    obj.transport.busDesc = "里斯本 Sete Rios 车站搭乘 Rede Expressos 城际巴士直达埃武拉汽车站，出站步行可达老城；里斯本主城区火车站有直达埃武拉班次，出站短途步行入城。";
    obj.transport.intercityDesc = "老城全程依靠步行；城郊平原地势平缓，去往周边巨石遗迹、葡萄酒庄园可骑行或包车出行。";
    obj.transport.intercity = "短途出行";

    obj.route.overview = "标准步行游览路线（半日行程）";
    obj.route.steps = [
      "城外停车场步行经古渡槽城门进入老城",
      "游览吉拉尔多广场，休整小憩",
      "步行前往圣方济各教堂与人骨礼拜堂参观",
      "前往埃武拉大教堂，登顶露台俯瞰全城",
      "移步戴安娜花园，观赏古罗马神庙远景",
      "近距离参观戴安娜罗马神庙石柱遗存",
      "傍晚穿梭老城小巷，品尝当地特色餐食"
    ];

    obj.photoSpots.spots = [
      {
        "name": "大教堂屋顶露台",
        "desc": "日落时段拍摄老城连片屋顶与远方平原全景"
      },
      {
        "name": "戴安娜花园观景台",
        "desc": "平视古罗马神庙主体石柱，搭配老城白屋背景"
      },
      {
        "name": "吉拉尔多广场中心",
        "desc": "利用放射状街巷打造纵深人文画面"
      },
      {
        "name": "老城西侧小众鹅卵石巷道",
        "desc": "白墙花砖门窗，适合人像拍摄"
      }
    ];
    obj.photoSpots.tipsContent = "日落黄金时刻光线柔和，神庙夜间配有景观照明，夜景出片效果佳。";

    obj.hotels.hotels = [
      {
        "name": "城墙内历史民宿",
        "desc": "由老式贵族宅院改造，出门直达各大古迹",
        "price": "旺季需要提前预定"
      },
      {
        "name": "城外近郊庄园酒店",
        "desc": "旧式修道院、乡村农庄改造，多配备庭院泳池",
        "price": "适配自驾游客"
      },
      {
        "name": "老城外围平价公寓",
        "desc": "临近停车场，周边餐饮配套充足",
        "price": "性价比突出"
      }
    ];
    obj.hotels.supplementsTitle = "本地美食";
    obj.hotels.supplementsContent = "主打阿连特茹乡土菜系：面包浓汤、蒜香焖制主食、产区葡萄酒以及传统葡式甜点。老城街巷遍布本地风味餐馆，可随机择店用餐。";
  } else {
    // English translation for the same content
    obj.intro.description = "The Historic Centre of Évora is situated on the gentle hills of the Alentejo region. The entire old town is enclosed by medieval walls, earning it the title of an open-air museum. Over two thousand years of civilization converge here, preserving ancient Roman ruins, Moorish alleys, Gothic churches, and Renaissance civil architecture. The old town is centered around Praça do Giraldo, with multiple ancient alleys radiating outward. Jardim Diana is located on the old town's high ground, connecting the Roman Temple and the episcopal complex. Whitewashed walls adorned with wrought-iron balconies and hand-painted tiles form the iconic streetscape.";
    obj.intro.visitGuide.items = [
      "The city features many uneven cobblestone streets; non-slip, comfortable walking shoes are essential. Most guesthouses within the old town can assist with short-distance luggage transfers.",
      "Summer daytime temperatures are high. Ensure adequate sun protection, carry drinking water, and avoid the midday heat.",
      "Tour groups mostly arrive at popular sites in the morning. For a quieter experience, try to enter as soon as the venues open.",
      "Local public museums offer free admission on Sundays; religious sites are not included in this offer."
    ];
    obj.intro.alsoKnownAs.items = [
      "Multi-Era Historic Building Clusters: Concentrated distribution of the 2nd-century Roman Temple of Diana, medieval fortress-like Cathedral, 16th-century Chapel of Bones, and Renaissance noble mansions.",
      "Authentic Medieval Streets: Moorish-style winding cobblestone paths with perfectly preserved local traditional architectural textures.",
      "High-Altitude Panoramic Views: The Cathedral tower and Jardim Diana terrace offer sweeping views of the old town's red-tiled roofs and the surrounding Alentejo plains.",
      "Rich Local Culture: Plazas surrounded by open-air cafes and artisan shops, blending historical monuments with local daily life."
    ];
    
    obj.hours.outdoorTime = "The old town streets, Praça do Giraldo, and Jardim Diana are open 24/7 for free. Paid indoor venues have seasonal scheduled opening hours.";
    obj.hours.summerTime = "Regularly 9:00-17:00, slight adjustments on public holidays";
    obj.hours.summer = "Chapel of Bones";
    obj.hours.winterTime = "9:30-18:00";
    obj.hours.winter = "Évora Cathedral (including viewing terrace)";
    obj.hours.warningTime = "Outdoor ruins open 24/7, attached small exhibition hall has limited hours";
    obj.hours.warning = "Roman Temple Outdoor Ruins";
    obj.hours.tip = "Best visited from April to October (Spring to Autumn); July and August are very hot at noon, so early morning or evening is preferred.";

    obj.tickets.outdoorPrice = "Free Admission";
    obj.tickets.outdoor = "Old Town Public Streets, Plazas, Temple Exteriors";
    obj.tickets.adultsPrice = "Regular admission, discounts for students";
    obj.tickets.adults = "Chapel of Bones";
    obj.tickets.studentsPrice = "Adult admission, half-price for students";
    obj.tickets.students = "Évora Cathedral (Viewing Terrace)";
    obj.tickets.cardPrice = "Discounted combo tickets available for multiple venues";
    obj.tickets.card = "Ticket Advice";
    obj.tickets.childrenPrice = "Motor vehicles are prohibited inside the ancient walls. Several free public parking lots are available just outside the walls, requiring only a 5 to 10-minute walk into the old town.";

    obj.transport.airportDesc = "Nearest international airports: Lisbon (LIS) Airport (approx. 135 km, 1h 25m drive) and Faro (FAO) Airport (approx. 240 km, 2h 50m drive). Renting a car upon arrival is recommended.";
    obj.transport.selfDriveDesc = "From Lisbon, take the A2 highway south, then connect to the A6 directly to Évora. Navigate to Jardim Diana and park in the lots outside the city walls.";
    obj.transport.busDesc = "Take a Rede Expressos intercity bus from Sete Rios station in Lisbon directly to the Évora bus station, which is within walking distance of the old town. Alternatively, there are direct trains from central Lisbon to Évora, requiring a short walk into the city.";
    obj.transport.intercityDesc = "The old town is entirely navigable on foot. The surrounding suburban plains are flat and ideal for cycling or chartering a car to visit nearby megalithic monuments and wineries.";
    obj.transport.intercity = "Short-Distance Travel";

    obj.route.overview = "Standard Walking Tour Route (Half-Day Itinerary)";
    obj.route.steps = [
      "Walk from the outside parking lot through the ancient aqueduct gate into the old town",
      "Explore Praça do Giraldo and take a short break",
      "Walk to visit the Church of St. Francis and the Chapel of Bones",
      "Head to the Évora Cathedral and climb to the terrace for a panoramic view",
      "Move to Jardim Diana to view the Roman Temple from a distance",
      "Get up close to the remaining columns of the Roman Temple of Diana",
      "Wander through the old town alleys in the evening and taste local specialties"
    ];

    obj.photoSpots.spots = [
      {
        "name": "Cathedral Roof Terrace",
        "desc": "Capture the continuous roofs of the old town and the distant plains at sunset."
      },
      {
        "name": "Jardim Diana Viewing Platform",
        "desc": "Eye-level view of the main Roman Temple columns with the white houses of the old town in the background."
      },
      {
        "name": "Center of Praça do Giraldo",
        "desc": "Utilize the radiating streets to create deep, culturally rich compositions."
      },
      {
        "name": "Niche Cobblestone Alleys in the West",
        "desc": "Whitewashed walls and tiled doors/windows, perfect for portraits."
      }
    ];
    obj.photoSpots.tipsContent = "The golden hour at sunset provides soft light. The temple is illuminated at night, making it excellent for night photography.";

    obj.hotels.hotels = [
      {
        "name": "Historic Guesthouses Inside the Walls",
        "desc": "Converted from old noble mansions, steps away from major monuments.",
        "price": "Advance booking required in peak season"
      },
      {
        "name": "Suburban Estate Hotels",
        "desc": "Converted old monasteries and rural farms, often featuring courtyard pools.",
        "price": "Ideal for self-driving tourists"
      },
      {
        "name": "Budget Apartments Outside the Old Town",
        "desc": "Close to parking lots with plenty of dining options nearby.",
        "price": "Outstanding value for money"
      }
    ];
    obj.hotels.supplementsTitle = "Local Cuisine";
    obj.hotels.supplementsContent = "Focuses on rustic Alentejo cuisine: bread soup, garlic braised dishes, regional wines, and traditional Portuguese sweets. Local flavor restaurants are scattered throughout the old town alleys, perfect for spontaneous dining.";
  }

  fs.writeFileSync(file, JSON.stringify(obj, null, 2));
}

updateJson('src/messages/zh.json');
updateJson('src/messages/en.json');
updateJson('src/messages/pt.json');
updateJson('src/messages/mwl.json');
console.log('Done');