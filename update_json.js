const fs = require('fs');
const path = require('path');

const locales = ['zh', 'en', 'pt', 'mwl'];

locales.forEach(loc => {
  const filePath = path.join(__dirname, 'src/messages', `${loc}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (loc === 'zh') {
    data.meta.title = "Jardim Luís de Camões | 葡萄牙莱里亚的城市纪念花园";
    data.meta.description = "探索葡萄牙莱里亚 Jardim Luís de Camões（路易斯·德·卡蒙斯花园）的完整指南。了解这座纪念伟大诗人的花园的休闲步道与周边景点。";
    
    data.intro.title = "探索 Jardim Luís de Camões";
    data.intro.description = "Jardim Luís de Camões 是莱里亚市中心的一座小型城市纪念花园，毗邻莱里亚城堡和老城区，是当地人休闲散步的热门场所。花园中心矗立着葡萄牙最伟大诗人路易斯·德·卡蒙斯的青铜雕像，周围环绕着修剪整齐的灌木、花卉、长椅和小型喷泉，环境清幽，非常适合短暂休憩。";
    
    data.intro.visitGuide.items = [
      "花园为开放式城市公园，地势平坦，铺设有舒适的步行道",
      "设有充足的长椅和阴凉处，是游览周边景点（如莱里亚城堡）前后的理想休憩地",
      "全天免费开放，随时可以前往散步或欣赏卡蒙斯雕像",
      "紧邻莱里亚老城区，周边有众多咖啡馆和餐厅可供选择"
    ];
    
    data.intro.alsoKnownAs.title = "花园特色";
    data.intro.alsoKnownAs.items = [
      "纪念意义：中心矗立着为纪念葡萄牙伟大诗人路易斯·德·卡蒙斯而建的青铜雕像",
      "优美环境：修剪整齐的绿色灌木、时令花卉和小型喷泉交相辉映",
      "核心位置：位于莱里亚市中心，从花园步行 5 分钟即可到达核心历史景点莱里亚城堡",
      "城市绿洲：为市民和游客提供了一个清幽的休闲放松空间"
    ];

    data.knowledge.title = "发现路易斯·德·卡蒙斯花园的魅力";
    data.knowledge.sections = [
      {
        "id": "history",
        "title": "纪念意义",
        "content": "这座花园是莱里亚市为了向葡萄牙文学巨匠路易斯·德·卡蒙斯致敬而设立的城市空间，其核心的青铜雕像成为了花园的标志。"
      },
      {
        "id": "architecture",
        "title": "园林景观",
        "content": "花园内部设计精巧，绿植修剪整齐，配有古典风格的喷泉和休闲长椅，与周围的城市建筑和谐相融。"
      },
      {
        "id": "experience",
        "title": "休闲体验",
        "content": "在游览完雄伟的莱里亚城堡后，这里是完美的放松地点。您可以坐在长椅上聆听喷泉的水声，感受莱里亚的慢节奏生活。"
      }
    ];

    data.basicInfo.typeValue = "城市纪念花园";
    
    data.hours.outdoor = "花园全域";
    data.hours.outdoorTime = "全天免费开放，无内部收费展馆，无分季节限制";
    data.hours.lighthouse = "周边景点";
    data.hours.summer = "莱里亚城堡";
    data.hours.summerTime = "通常为 09:30-17:30（具体以城堡官方公告为准）";
    data.hours.winter = "莱里亚博物馆";
    data.hours.winterTime = "通常为 09:30-17:30（周一闭馆）";
    data.hours.warning = "喷泉与雕像区";
    data.hours.warningTime = "全天开放供游客观赏";
    data.hours.tip = "清晨和傍晚是花园最宁静的时刻，适合散步和拍照";

    data.tickets.outdoor = "Jardim Luís de Camões";
    data.tickets.outdoorPrice = "全天免费开放";
    data.tickets.lighthouse = "周边付费景点";
    data.tickets.adults = "莱里亚城堡";
    data.tickets.adultsPrice = "需购买门票进入";
    data.tickets.students = "周边博物馆";
    data.tickets.studentsPrice = "根据各场馆规定收费";
    data.tickets.children = "停车费";
    data.tickets.childrenPrice = "花园周边街道设有付费停车位，步行 1-2 分钟即可到达";
    data.tickets.card = "交通建议";
    data.tickets.cardPrice = "位于市中心，步行即可轻松抵达周边餐饮与购物区";

    data.transport.airportDesc = "就近国际机场：里斯本 LIS 机场（约 140 公里，车程 1 小时 30 分）、波尔图 OPO 机场（约 200 公里，车程 2 小时）。";
    data.transport.selfDriveDesc = "从里斯本出发沿 A8 或 A1 高速向北行驶可直达莱里亚。导航目的地设为 Largo 5 de Outubro 48，可在附近街道寻找付费停车位。";
    data.transport.busDesc = "里斯本和波尔图均有直达莱里亚的城际巴士（Rede Expressos）和火车，抵达莱里亚车站后，步行即可轻松到达花园。";
    data.transport.intercityDesc = "莱里亚市中心景点集中，从花园步行 5 分钟即可到达莱里亚城堡。";
    data.transport.cyclingDesc = "莱里亚及周边沿海地区（如纳扎雷、圣佩德罗迪莫埃尔）适合公路骑行。";
    data.transport.tipsDesc = "莱里亚位于葡萄牙中部，周边有大西洋海岸、奥比多斯城堡、巴塔利亚修道院等著名景点，建议作为中部旅行的中转站。";

    data.route.overview = "莱里亚市中心休闲步行路线";
    data.route.steps = [
      "抵达 Jardim Luís de Camões，欣赏卡蒙斯雕像与喷泉",
      "在花园长椅上小憩，感受城市中心的绿意",
      "步行前往莱里亚老城区，探索当地的咖啡馆和手工艺品店",
      "步行 5 分钟前往参观雄伟的莱里亚城堡（Castelo de Leiria）",
      "游览周边的莱里亚大教堂或当地博物馆",
      "在老城区品尝葡萄牙中部特色美食"
    ];
    data.route.supplements = [
      "花园为开放空间，无需预约即可游览",
      "周边街道停车需注意付费标志和时长限制",
      "莱里亚城堡位于高处，步行前往需经过一段上坡路"
    ];

    data.photoSpots.spots = [
      {
        "name": "路易斯·德·卡蒙斯雕像",
        "desc": "花园的核心标志，适合拍摄带有纪念意义的人像"
      },
      {
        "name": "花园喷泉与绿植",
        "desc": "利用水景和修剪整齐的灌木作为前景，拍摄清新的园林风光"
      },
      {
        "name": "花园休闲长椅区",
        "desc": "捕捉当地人闲适的日常生活画面"
      },
      {
        "name": "远眺莱里亚城堡",
        "desc": "从花园周边特定角度可以拍摄到高处的城堡轮廓"
      }
    ];
    data.photoSpots.tipsContent = "清晨的阳光透过树叶洒在雕像上，是拍摄花园的最佳时机。";

    data.hotels.hotels = [
      {
        "name": "莱里亚市中心精品酒店",
        "desc": "距离花园和城堡仅步遥之遥，出行极度便利",
        "price": "适合喜欢城市氛围的游客"
      },
      {
        "name": "老城区舒适公寓",
        "desc": "配备厨房设施，周边餐饮和超市配套完善",
        "price": "适合家庭或长途旅行者"
      },
      {
        "name": "周边沿海度假村（如纳扎雷附近）",
        "desc": "距离莱里亚约半小时车程，可享受大西洋海景",
        "price": "适合自驾且追求度假体验的游客"
      }
    ];
    data.hotels.supplementsContent = "莱里亚及葡萄牙中部以海鲜、烤肉和传统修道院甜点闻名。花园周边步行范围内有众多评价极高的本地风味餐馆。";

    data.gallery.captions = [
      "卡蒙斯雕像",
      "花园喷泉",
      "修剪整齐的灌木",
      "莱里亚城堡远景",
      "休闲的林荫小道",
      "城市绿洲",
      "莱里亚老城街道",
      "当地特色咖啡馆",
      "阳光下的长椅",
      "花园花卉",
      "城市广场",
      "葡萄牙特色碎石路",
      "傍晚的花园",
      "莱里亚大教堂",
      "纪念碑细节",
      "静谧的午后",
      "城市景观",
      "历史建筑风貌",
      "喷泉水景",
      "市民休闲时光"
    ];

    data.officialManagement.text = "Jardim Luís de Camões 是莱里亚市中心的一座重要纪念花园，由莱里亚市议会（Câmara Municipal de Leiria）管理与维护。";
  }

  // EN translation update
  if (loc === 'en') {
    data.meta.title = "Jardim Luís de Camões | Urban Memorial Garden in Leiria, Portugal";
    data.meta.description = "Explore the complete guide to Jardim Luís de Camões in Leiria, Portugal. Learn about this memorial garden, its central statue, and nearby attractions like Leiria Castle.";
    
    data.intro.title = "Explore Jardim Luís de Camões";
    data.intro.description = "Jardim Luís de Camões is a small urban memorial garden located in the heart of Leiria, adjacent to the Leiria Castle and the old town. It is a popular spot for locals to relax and take a walk. At the center of the garden stands a bronze statue honoring Portugal's greatest poet, Luís de Camões, surrounded by manicured shrubs, flowers, benches, and a small fountain, offering a tranquil environment perfect for a brief rest.";
    
    data.intro.visitGuide.items = [
      "The garden is an open urban park with flat terrain and comfortable walking paths",
      "Equipped with plenty of benches and shade, making it an ideal resting place before or after visiting nearby attractions like Leiria Castle",
      "Free and open all day, you can visit anytime for a walk or to admire the Camões statue",
      "Located right next to Leiria's old town, with numerous cafes and restaurants nearby"
    ];
    
    data.intro.alsoKnownAs.title = "Garden Highlights";
    data.intro.alsoKnownAs.items = [
      "Memorial Significance: Features a central bronze statue dedicated to the great Portuguese poet Luís de Camões",
      "Beautiful Environment: A harmonious blend of manicured green shrubs, seasonal flowers, and a small fountain",
      "Central Location: Situated in downtown Leiria, just a 5-minute walk from the historic Castelo de Leiria",
      "Urban Oasis: Provides a quiet, relaxing space for both citizens and tourists"
    ];

    data.knowledge.title = "Discover the Charm of Jardim Luís de Camões";
    data.knowledge.sections = [
      {
        "id": "history",
        "title": "Memorial Significance",
        "content": "This garden was established by the city of Leiria as an urban space to pay tribute to the Portuguese literary giant Luís de Camões, with his bronze statue acting as the centerpiece."
      },
      {
        "id": "architecture",
        "title": "Landscaping",
        "content": "The garden features a delicate design with neatly trimmed greenery, a classical-style fountain, and relaxing benches that blend harmoniously with the surrounding urban architecture."
      },
      {
        "id": "experience",
        "title": "Relaxing Experience",
        "content": "It is the perfect place to unwind after visiting the majestic Leiria Castle. You can sit on a bench, listen to the fountain, and experience the slow-paced lifestyle of Leiria."
      }
    ];

    data.basicInfo.typeValue = "Urban Memorial Garden";
    
    data.hours.outdoor = "Entire Garden";
    data.hours.outdoorTime = "Free and open all day, no ticketed indoor pavilions, no seasonal restrictions";
    data.hours.lighthouse = "Nearby Attractions";
    data.hours.summer = "Leiria Castle";
    data.hours.summerTime = "Usually 09:30-17:30 (subject to official castle announcements)";
    data.hours.winter = "Museum of Leiria";
    data.hours.winterTime = "Usually 09:30-17:30 (Closed on Mondays)";
    data.hours.warning = "Fountain & Statue Area";
    data.hours.warningTime = "Open all day for viewing";
    data.hours.tip = "Early mornings and late afternoons are the most peaceful times, perfect for walking and photography";

    data.tickets.outdoor = "Jardim Luís de Camões";
    data.tickets.outdoorPrice = "Free all day";
    data.tickets.lighthouse = "Nearby Paid Attractions";
    data.tickets.adults = "Leiria Castle";
    data.tickets.adultsPrice = "Requires an admission ticket";
    data.tickets.students = "Nearby Museums";
    data.tickets.studentsPrice = "Fees apply according to each venue's rules";
    data.tickets.children = "Parking Fees";
    data.tickets.childrenPrice = "Paid street parking is available around the garden, a 1-2 minute walk away";
    data.tickets.card = "Transport Tip";
    data.tickets.cardPrice = "Located in the city center, walking distance to nearby dining and shopping areas";

    data.transport.airportDesc = "Nearest International Airports: Lisbon LIS Airport (approx. 140 km, 1.5 hours drive), Porto OPO Airport (approx. 200 km, 2 hours drive).";
    data.transport.selfDriveDesc = "From Lisbon, take the A8 or A1 highway north directly to Leiria. Set your GPS to Largo 5 de Outubro 48, and find paid street parking nearby.";
    data.transport.busDesc = "Direct intercity buses (Rede Expressos) and trains run from both Lisbon and Porto to Leiria. From the Leiria station, the garden is easily reachable on foot.";
    data.transport.intercityDesc = "Attractions in downtown Leiria are close together; Castelo de Leiria is just a 5-minute walk from the garden.";
    data.transport.cyclingDesc = "The coastal areas around Leiria (such as Nazaré and São Pedro de Moel) are great for road cycling.";
    data.transport.tipsDesc = "Leiria is centrally located in Portugal, close to the Atlantic coast, Óbidos Castle, and Batalha Monastery, making it an excellent hub for exploring the central region.";

    data.route.overview = "Leiria City Center Walking Route";
    data.route.steps = [
      "Arrive at Jardim Luís de Camões to admire the Camões statue and fountain",
      "Take a break on a garden bench and enjoy the urban greenery",
      "Walk to Leiria's old town to explore local cafes and craft shops",
      "Take a 5-minute walk up to the majestic Castelo de Leiria",
      "Visit the nearby Leiria Cathedral or local museums",
      "Taste traditional Central Portugal cuisine in the old town"
    ];
    data.route.supplements = [
      "The garden is an open space, no reservations needed",
      "Pay attention to parking meters and time limits on surrounding streets",
      "Leiria Castle is located on a hill, requiring an uphill walk"
    ];

    data.photoSpots.spots = [
      {
        "name": "Luís de Camões Statue",
        "desc": "The central landmark of the garden, perfect for memorial portraits"
      },
      {
        "name": "Fountain and Greenery",
        "desc": "Use the water features and manicured shrubs as foregrounds for fresh garden shots"
      },
      {
        "name": "Relaxation Benches",
        "desc": "Capture the laid-back daily life of the locals"
      },
      {
        "name": "Distant View of Leiria Castle",
        "desc": "The silhouette of the castle can be framed from specific angles around the garden"
      }
    ];
    data.photoSpots.tipsContent = "Morning sunlight filtering through the leaves onto the statue creates the best lighting for photography.";

    data.hotels.hotels = [
      {
        "name": "Downtown Boutique Hotels",
        "desc": "Just steps away from the garden and castle, extremely convenient",
        "price": "Ideal for those who love a city vibe"
      },
      {
        "name": "Old Town Cozy Apartments",
        "desc": "Equipped with kitchens, surrounded by restaurants and supermarkets",
        "price": "Great for families or extended stays"
      },
      {
        "name": "Coastal Resorts (e.g., near Nazaré)",
        "desc": "About a 30-minute drive from Leiria, offering Atlantic ocean views",
        "price": "Perfect for drivers seeking a beach holiday experience"
      }
    ];
    data.hotels.supplementsContent = "Leiria and Central Portugal are famous for seafood, roasted meats, and traditional conventual sweets. Numerous highly-rated local restaurants are within walking distance of the garden.";

    data.gallery.captions = [
      "Camões Statue",
      "Garden Fountain",
      "Manicured Shrubs",
      "Leiria Castle View",
      "Shaded Walking Path",
      "Urban Oasis",
      "Leiria Old Town Streets",
      "Local Cafe",
      "Sunlit Bench",
      "Garden Flowers",
      "City Square",
      "Portuguese Cobblestones",
      "Garden at Dusk",
      "Leiria Cathedral",
      "Monument Details",
      "Quiet Afternoon",
      "Cityscape",
      "Historical Architecture",
      "Water Feature",
      "Locals Relaxing"
    ];

    data.officialManagement.text = "Jardim Luís de Camões is an important memorial garden in the center of Leiria, managed and maintained by the Leiria City Council (Câmara Municipal de Leiria).";
  }

  // PT translation update
  if (loc === 'pt') {
    data.meta.title = "Jardim Luís de Camões | Jardim Memorial Urbano em Leiria, Portugal";
    data.meta.description = "Explore o guia completo do Jardim Luís de Camões em Leiria, Portugal. Conheça este jardim memorial, a sua estátua central e atrações próximas como o Castelo de Leiria.";
    
    data.intro.title = "Explorar o Jardim Luís de Camões";
    data.intro.description = "O Jardim Luís de Camões é um pequeno jardim memorial urbano localizado no coração de Leiria, adjacente ao Castelo de Leiria e ao centro histórico. É um local popular para os habitantes locais relaxarem e passearem. No centro do jardim ergue-se uma estátua de bronze em homenagem ao maior poeta de Portugal, Luís de Camões, rodeada por arbustos bem cuidados, flores, bancos e uma pequena fonte, oferecendo um ambiente tranquilo perfeito para um breve descanso.";
    
    data.intro.visitGuide.items = [
      "O jardim é um parque urbano aberto com terreno plano e caminhos confortáveis",
      "Equipado com muitos bancos e sombra, tornando-o um local de descanso ideal antes ou depois de visitar atrações próximas, como o Castelo de Leiria",
      "Gratuito e aberto todo o dia, pode visitar a qualquer momento para passear ou admirar a estátua de Camões",
      "Localizado mesmo ao lado do centro histórico de Leiria, com inúmeros cafés e restaurantes nas proximidades"
    ];
    
    data.intro.alsoKnownAs.title = "Destaques do Jardim";
    data.intro.alsoKnownAs.items = [
      "Significado Memorial: Apresenta uma estátua de bronze central dedicada ao grande poeta português Luís de Camões",
      "Ambiente Belo: Uma mistura harmoniosa de arbustos verdes bem cuidados, flores sazonais e uma pequena fonte",
      "Localização Central: Situado no centro de Leiria, a apenas 5 minutos a pé do histórico Castelo de Leiria",
      "Oásis Urbano: Proporciona um espaço tranquilo e relaxante tanto para os cidadãos como para os turistas"
    ];

    data.knowledge.title = "Descubra o Encanto do Jardim Luís de Camões";
    data.knowledge.sections = [
      {
        "id": "history",
        "title": "Significado Memorial",
        "content": "Este jardim foi estabelecido pela cidade de Leiria como um espaço urbano para prestar homenagem ao gigante literário português Luís de Camões, tendo a sua estátua de bronze como peça central."
      },
      {
        "id": "architecture",
        "title": "Paisagismo",
        "content": "O jardim apresenta um design delicado com vegetação bem aparada, uma fonte de estilo clássico e bancos relaxantes que se misturam harmoniosamente com a arquitetura urbana circundante."
      },
      {
        "id": "experience",
        "title": "Experiência Relaxante",
        "content": "É o lugar perfeito para descontrair depois de visitar o majestoso Castelo de Leiria. Pode sentar-se num banco, ouvir a fonte e experimentar o estilo de vida tranquilo de Leiria."
      }
    ];

    data.basicInfo.typeValue = "Jardim Memorial Urbano";
    
    data.hours.outdoor = "Todo o Jardim";
    data.hours.outdoorTime = "Gratuito e aberto todo o dia, sem pavilhões interiores pagos, sem restrições sazonais";
    data.hours.lighthouse = "Atrações Próximas";
    data.hours.summer = "Castelo de Leiria";
    data.hours.summerTime = "Normalmente 09:30-17:30 (sujeito a anúncios oficiais do castelo)";
    data.hours.winter = "Museu de Leiria";
    data.hours.winterTime = "Normalmente 09:30-17:30 (Encerrado à segunda-feira)";
    data.hours.warning = "Área da Fonte e Estátua";
    data.hours.warningTime = "Aberto todo o dia para visualização";
    data.hours.tip = "As primeiras horas da manhã e os finais de tarde são os momentos mais tranquilos, perfeitos para passear e fotografar";

    data.tickets.outdoor = "Jardim Luís de Camões";
    data.tickets.outdoorPrice = "Gratuito todo o dia";
    data.tickets.lighthouse = "Atrações Pagas Próximas";
    data.tickets.adults = "Castelo de Leiria";
    data.tickets.adultsPrice = "Requer bilhete de entrada";
    data.tickets.students = "Museus Próximos";
    data.tickets.studentsPrice = "Aplicam-se taxas de acordo com as regras de cada local";
    data.tickets.children = "Taxas de Estacionamento";
    data.tickets.childrenPrice = "Estacionamento pago na rua está disponível ao redor do jardim, a 1-2 minutos a pé";
    data.tickets.card = "Dica de Transporte";
    data.tickets.cardPrice = "Localizado no centro da cidade, a uma curta caminhada de áreas de restauração e comércio próximas";

    data.transport.airportDesc = "Aeroportos Internacionais Mais Próximos: Aeroporto de Lisboa LIS (aprox. 140 km, 1,5 horas de carro), Aeroporto do Porto OPO (aprox. 200 km, 2 horas de carro).";
    data.transport.selfDriveDesc = "A partir de Lisboa, apanhe a autoestrada A8 ou A1 para norte diretamente até Leiria. Defina o seu GPS para Largo 5 de Outubro 48 e encontre estacionamento pago na rua nas proximidades.";
    data.transport.busDesc = "Autocarros interurbanos diretos (Rede Expressos) e comboios partem de Lisboa e do Porto para Leiria. A partir da estação de Leiria, o jardim é facilmente acessível a pé.";
    data.transport.intercityDesc = "As atrações no centro de Leiria estão próximas umas das outras; o Castelo de Leiria fica a apenas 5 minutos a pé do jardim.";
    data.transport.cyclingDesc = "As áreas costeiras ao redor de Leiria (como a Nazaré e São Pedro de Moel) são ótimas para o ciclismo de estrada.";
    data.transport.tipsDesc = "Leiria tem uma localização central em Portugal, perto da costa atlântica, do Castelo de Óbidos e do Mosteiro da Batalha, tornando-se um excelente ponto de partida para explorar a região central.";

    data.route.overview = "Percurso Pedestre no Centro de Leiria";
    data.route.steps = [
      "Chegue ao Jardim Luís de Camões para admirar a estátua de Camões e a fonte",
      "Faça uma pausa num banco do jardim e desfrute do verde urbano",
      "Caminhe até ao centro histórico de Leiria para explorar os cafés locais e lojas de artesanato",
      "Faça uma caminhada de 5 minutos até ao majestoso Castelo de Leiria",
      "Visite a vizinha Sé de Leiria ou os museus locais",
      "Prove a cozinha tradicional do Centro de Portugal no centro histórico"
    ];
    data.route.supplements = [
      "O jardim é um espaço aberto, não são necessárias reservas",
      "Preste atenção aos parquímetros e limites de tempo nas ruas circundantes",
      "O Castelo de Leiria está localizado numa colina, exigindo uma caminhada a subir"
    ];

    data.photoSpots.spots = [
      {
        "name": "Estátua de Luís de Camões",
        "desc": "O marco central do jardim, perfeito para retratos memoriais"
      },
      {
        "name": "Fonte e Vegetação",
        "desc": "Use as características da água e os arbustos bem cuidados como primeiros planos para fotos frescas do jardim"
      },
      {
        "name": "Bancos de Relaxamento",
        "desc": "Capture a vida quotidiana descontraída dos habitantes locais"
      },
      {
        "name": "Vista Distante do Castelo de Leiria",
        "desc": "A silhueta do castelo pode ser enquadrada a partir de ângulos específicos ao redor do jardim"
      }
    ];
    data.photoSpots.tipsContent = "A luz solar da manhã filtrada pelas folhas sobre a estátua cria a melhor iluminação para fotografia.";

    data.hotels.hotels = [
      {
        "name": "Hotéis Boutique no Centro",
        "desc": "A poucos passos do jardim e do castelo, extremamente conveniente",
        "price": "Ideal para quem gosta do ambiente citadino"
      },
      {
        "name": "Apartamentos Acolhedores no Centro Histórico",
        "desc": "Equipados com cozinhas, rodeados de restaurantes e supermercados",
        "price": "Ótimo para famílias ou estadias prolongadas"
      },
      {
        "name": "Resorts Costeiros (ex: perto da Nazaré)",
        "desc": "A cerca de 30 minutos de carro de Leiria, oferecendo vistas para o Oceano Atlântico",
        "price": "Perfeito para condutores que procuram uma experiência de férias na praia"
      }
    ];
    data.hotels.supplementsContent = "Leiria e o Centro de Portugal são famosos pelo marisco, carnes assadas e doçaria conventual tradicional. Inúmeros restaurantes locais bem avaliados encontram-se a uma curta distância a pé do jardim.";

    data.gallery.captions = [
      "Estátua de Camões",
      "Fonte do Jardim",
      "Arbustos Cuidados",
      "Vista do Castelo de Leiria",
      "Caminho Sombreado",
      "Oásis Urbano",
      "Ruas do Centro Histórico de Leiria",
      "Café Local",
      "Banco ao Sol",
      "Flores do Jardim",
      "Praça da Cidade",
      "Calçada Portuguesa",
      "Jardim ao Anoitecer",
      "Sé de Leiria",
      "Detalhes do Monumento",
      "Tarde Tranquila",
      "Paisagem Urbana",
      "Arquitetura Histórica",
      "Característica da Água",
      "Locais a Relaxar"
    ];

    data.officialManagement.text = "O Jardim Luís de Camões é um importante jardim memorial no centro de Leiria, gerido e mantido pela Câmara Municipal de Leiria.";
  }

  // MWL translation update
  if (loc === 'mwl') {
    data.meta.title = "Jardim Luís de Camões | Jardin Memorial Ourbano an Leiria, Pertual";
    data.meta.description = "Splore l guia cumpleto de l Jardim Luís de Camões an Leiria, Pertual. Coñeça este jardin memorial, la sue státua central i atraçones próssimas cumo l Castielho de Leiria.";
    
    data.intro.title = "Splorar l Jardim Luís de Camões";
    data.intro.description = "L Jardim Luís de Camões ye un pequeinho jardin memorial ourbano lhocalizado ne l coraçon de Leiria, adjacente al Castielho de Leiria i al centro stórico. Ye un lhocal popular para ls habitantes lhocales relaxáren i passeáren. Ne l centro de l jardin argue-se ua státua de bronze an houmenaige al maior poeta de Pertual, Luís de Camões, rodeada por arbustos bien cuidados, flores, bancos i ua pequeinha fuonte, ouferecendo un ambiente tranquilo purfeito para un brebe çcanso.";
    
    data.intro.visitGuide.items = [
      "L jardin ye un parque ourbano abierto cun terreno praino i caminos cunfortables",
      "Eiquipado cun muitos bancos i selombra, tornando-lo un lhocal de çcanso eideal antes ó depuis de bejitar atraçones próssimas, cumo l Castielho de Leiria",
      "Gratuito i abierto to l die, puode bejitar la qualquiera momiento para passear ó admirar la státua de Camões",
      "Lhocalizado mesmo al lhado de l centro stórico de Leiria, cun einúmeros cafés i restourantes nas prossimidades"
    ];
    
    data.intro.alsoKnownAs.title = "Destaques de l Jardin";
    data.intro.alsoKnownAs.items = [
      "Seneficado Memorial: Apresenta ua státua de bronze central dedicada al grande poeta pertués Luís de Camões",
      "Ambiente Guapo: Ua mistura harmoniosa de arbustos berdes bien cuidados, flores sazonales i ua pequeinha fuonte",
      "Lhocalizaçon Central: Situado ne l centro de Leiria, a solo 5 minutos a pie de l stórico Castielho de Leiria",
      "Oásis Ourbano: Proporciona un spácio tranquilo i relaxante tanto para ls cidadanos cumo para ls turistas"
    ];

    data.knowledge.title = "Çcubra l Ancanto de l Jardim Luís de Camões";
    data.knowledge.sections = [
      {
        "id": "history",
        "title": "Seneficado Memorial",
        "content": "Este jardin fui stablecido pula cidade de Leiria cumo un spácio ourbano para prestar houmenaige al gigante lhiterário pertués Luís de Camões, tenendo la sue státua de bronze cumo peça central."
      },
      {
        "id": "architecture",
        "title": "Paisagismo",
        "content": "L jardin prisenta un zeño delicado cun begetaçon bien aparada, ua fuonte de stilo clássico i bancos relaxantes que se mistúran harmoniosamente cula arquitetura ourbana circundante."
      },
      {
        "id": "experience",
        "title": "Speriéncia Relaxante",
        "content": "Ye l lhugar purfeito para çcontrair depuis de bejitar l majestoso Castielho de Leiria. Puode sentar-se nun banco, oubir la fuonte i spurmentar l stilo de bida tranquilo de Leiria."
      }
    ];

    data.basicInfo.typeValue = "Jardin Memorial Ourbano";
    
    data.hours.outdoor = "To l Jardin";
    data.hours.outdoorTime = "Gratuito i abierto to l die, sin pabilhones anteriores pagos, sin restriçones sazonales";
    data.hours.lighthouse = "Atraçones Próssimas";
    data.hours.summer = "Castielho de Leiria";
    data.hours.summerTime = "Normalmente 09:30-17:30 (sujeito la anúncios oufeciales de l castielho)";
    data.hours.winter = "Museu de Leiria";
    data.hours.winterTime = "Normalmente 09:30-17:30 (Ancerrado a la segunda-feira)";
    data.hours.warning = "Ária de la Fuonte i Státua";
    data.hours.warningTime = "Abierto to l die para bisualizaçon";
    data.hours.tip = "Las purmeiras horas de la manhana i ls finales de tarde son ls momientos mais tranquilos, purfeitos para passear i fotografar";

    data.tickets.outdoor = "Jardim Luís de Camões";
    data.tickets.outdoorPrice = "Gratuito to l die";
    data.tickets.lighthouse = "Atraçones Pagas Próssimas";
    data.tickets.adults = "Castielho de Leiria";
    data.tickets.adultsPrice = "Requier belhete de antrada";
    data.tickets.students = "Museus Próssimos";
    data.tickets.studentsPrice = "Aplícan-se taxas d'acuordo culas regras de cada lhocal";
    data.tickets.children = "Taxas de Stacionamiento";
    data.tickets.childrenPrice = "Stacionamiento pago na rue stá çponible al redror de l jardin, a 1-2 minutos a pie";
    data.tickets.card = "Dica de Trasporte";
    data.tickets.cardPrice = "Lhocalizado ne l centro de la cidade, a ua curta caminada de árias de restouraçon i comércio próssimas";

    data.transport.airportDesc = "Aeroportos Anternacionales Mais Próssimos: Aeroporto de Lhisboua LIS (aprox. 140 km, 1,5 horas de carro), Aeroporto de l Porto OPO (aprox. 200 km, 2 horas de carro).";
    data.transport.selfDriveDesc = "A partir de Lhisboua, apañe la outoestrada A8 ó A1 para norte diretamente até Leiria. Defina l sou GPS para Largo 5 de Outubro 48 i ancontre stacionamiento pago na rue nas prossimidades.";
    data.transport.busDesc = "Outocarros anterurbanos diretos (Rede Expressos) i camboios pártem de Lhisboua i de l Porto para Leiria. A partir de la staçon de Leiria, l jardin ye facilmente acessible a pie.";
    data.transport.intercityDesc = "Las atraçones ne l centro de Leiria stan próssimas uas de las outras; l Castielho de Leiria queda a solo 5 minutos a pie de l jardin.";
    data.transport.cyclingDesc = "Las árias costeiras al redror de Leiria (cumo la Nazaré i San Pedro de Moel) son ótimas para l ciclismo de strada.";
    data.transport.tipsDesc = "Leiria ten ua lhocalizaçon central an Pertual, acerca de la cuosta atlántica, de l Castielho de Óbidos i de l Mosteiro de la Batalha, tornando-se un eicelente punto de partida para splorar la region central.";

    data.route.overview = "Pecurso Pedestre ne l Centro de Leiria";
    data.route.steps = [
      "Chegue al Jardim Luís de Camões para admirar la státua de Camões i la fuonte",
      "Faga ua pausa nun banco de l jardin i çfrute de l berde ourbano",
      "Camine até al centro stórico de Leiria para splorar ls cafés lhocales i lhojas de artesanato",
      "Faga ua caminada de 5 minutos até al majestoso Castielho de Leiria",
      "Bejite la bezina Sé de Leiria ó ls museus lhocales",
      "Probe la cozina tradecional de l Centro de Pertual ne l centro stórico"
    ];
    data.route.supplements = [
      "L jardin ye un spácio abierto, nun son neçairias reserbas",
      "Preste atençon als parquímetros i lhemites de tiempo nas rues circundantes",
      "L Castielho de Leiria stá lhocalizado nua colina, eisigindo ua caminada a xubir"
    ];

    data.photoSpots.spots = [
      {
        "name": "Státua de Luís de Camões",
        "desc": "L marco central de l jardin, purfeito para retratos memoriales"
      },
      {
        "name": "Fuonte i Begetaçon",
        "desc": "Use las caratelísticas de la auga i ls arbustos bien cuidados cumo purmeiros prainos para fotos frescas de l jardin"
      },
      {
        "name": "Bancos de Relaxamiento",
        "desc": "Capture la bida quotidiana çcontraída de ls habitantes lhocales"
      },
      {
        "name": "Bista Çtante de l Castielho de Leiria",
        "desc": "La silhueta de l castielho puode ser anquadrada a partir de ángulos specíficos al redror de l jardin"
      }
    ];
    data.photoSpots.tipsContent = "La luç solar de la manhana filtrada pulas fuolhas subre la státua cria la melhor eiluminaçon para fotografie.";

    data.hotels.hotels = [
      {
        "name": "Houtéles Boutique ne l Centro",
        "desc": "A poucos passos de l jardin i de l castielho, stremamente cumbeniente",
        "price": "Eideal para quien gusta de l ambiente citadino"
      },
      {
        "name": "Apartamientos Acolhedores ne l Centro Stórico",
        "desc": "Eiquipados cun cozinas, rodeados de restourantes i supermercados",
        "price": "Ótimo para famílias ó stadias prolongadas"
      },
      {
        "name": "Resorts Costeiros (eis: acerca de la Nazaré)",
        "desc": "A cerca de 30 minutos de carro de Leiria, ouferecendo bistas para l Ouceano Atlántico",
        "price": "Purfeito para cundutores que percuran ua speriéncia de bacanças na praia"
      }
    ];
    data.hotels.supplementsContent = "Leiria i l Centro de Pertual son famosos pul marisco, carnes assadas i doçarie cumbentual tradecional. Einúmeros restourantes lhocales bien abaliados ancóntran-se a ua curta çtáncia a pie de l jardin.";

    data.gallery.captions = [
      "Státua de Camões",
      "Fuonte de l Jardin",
      "Arbustos Cuidados",
      "Bista de l Castielho de Leiria",
      "Caminho Sombreado",
      "Oásis Ourbano",
      "Rues de l Centro Stórico de Leiria",
      "Café Lhocal",
      "Banco al Sol",
      "Flores de l Jardin",
      "Praça de la Cidade",
      "Calçada Pertuesa",
      "Jardin al Anoitecer",
      "Sé de Leiria",
      "Detalhes de l Monumiento",
      "Tarde Tranquila",
      "Paisaige Ourbana",
      "Arquitetura Stórica",
      "Caratelística de la Auga",
      "Lhocales a Relaxar"
    ];

    data.officialManagement.text = "L Jardim Luís de Camões ye un amportante jardin memorial ne l centro de Leiria, gerido i mantenido pula Cámara Municipal de Leiria.";
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});