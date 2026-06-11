const fs = require('fs');
const path = require('path');

const locales = ['zh', 'en', 'pt', 'mwl'];

locales.forEach(loc => {
  const filePath = path.join(__dirname, 'src/messages', `${loc}.json`);
  if (!fs.existsSync(filePath)) return;
  
  let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (loc === 'zh') {
    data.reviews.items = [
      {
        "name": "João Silva",
        "date": "2个月前",
        "rating": 5,
        "text": "一个绝妙的保存完好的城市花园！石板路和雕像充满了历史感，在这里散步感觉非常放松。强烈推荐日落时分来这里。"
      },
      {
        "name": "Maria Costa",
        "date": "1个月前",
        "rating": 5,
        "text": "莱里亚最美的休闲去处之一！这里的宁静让人放松，周围的绿植非常漂亮。不过要注意，夏天去的时候会有些热，记得带水和防晒。"
      },
      {
        "name": "Carlos Rodrigues",
        "date": "3个月前",
        "rating": 4,
        "text": "令人惊叹的地方。花园虽然不大，但位置绝佳。在附近的餐厅吃了一顿非常棒的传统葡萄牙菜。唯一的问题是停车位在旺季可能不太好找。"
      },
      {
        "name": "Ana Martins",
        "date": "半年多前",
        "rating": 5,
        "text": "非常浪漫且充满魅力的地方。我们在这里散步，晚上看夜景简直是一绝，完全爱上了这里！"
      },
      {
        "name": "Pedro Santos",
        "date": "1年前",
        "rating": 5,
        "text": "这里的景色真的让人心情愉悦。你能看到精美的雕像和广阔的广场交织在一起。花园本身也很迷人，周围有很多咖啡馆。"
      },
      {
        "name": "Teresa Ferreira",
        "date": "半年多前",
        "rating": 4,
        "text": "很值得一游！从莱里亚城堡走过来很方便。建议穿平底鞋，因为全是鹅卵石路。当地人很友好，有很多适合拍照的绝佳地点。"
      },
      {
        "name": "Rui Almeida",
        "date": "3个月前",
        "rating": 5,
        "text": "仿佛回到了古典时期！每一条小路、每一处喷泉都有它的故事。在长椅上休息的时候感觉时间都静止了。莱里亚的必去之地。"
      },
      {
        "name": "Catarina Gomes",
        "date": "2个月前",
        "rating": 5,
        "text": "美得难以用语言形容。无论是卡蒙斯雕像还是周围绿色的植被，都让人流连忘返。特别推荐坐在喷泉旁边，虽然偶尔有水花，但感觉最棒。"
      }
    ];
  } else if (loc === 'en') {
    data.reviews.items = [
      {
        "name": "João Silva",
        "date": "2 months ago",
        "rating": 5,
        "text": "A wonderful, well-preserved urban garden! The cobblestone paths and statues are full of history. Walking here is very relaxing. Highly recommend coming at sunset."
      },
      {
        "name": "Maria Costa",
        "date": "1 month ago",
        "rating": 5,
        "text": "One of the most beautiful leisure spots in Leiria! The tranquility here is so relaxing, and the surrounding greenery is gorgeous. Be careful in summer as it can get hot, bring water and sunscreen."
      },
      {
        "name": "Carlos Rodrigues",
        "date": "3 months ago",
        "rating": 4,
        "text": "An amazing place. The garden isn't huge, but the location is perfect. Had a great traditional Portuguese meal at a nearby restaurant. The only issue is finding parking during peak season."
      },
      {
        "name": "Ana Martins",
        "date": "Over 6 months ago",
        "rating": 5,
        "text": "A very romantic and charming place. We walked around here and the night view is absolutely stunning. Completely fell in love with it!"
      },
      {
        "name": "Pedro Santos",
        "date": "1 year ago",
        "rating": 5,
        "text": "The scenery here really lifts your mood. You can see the exquisite statue blending with the wide square. The garden itself is charming with many cafes around."
      },
      {
        "name": "Teresa Ferreira",
        "date": "Over 6 months ago",
        "rating": 4,
        "text": "Well worth a visit! It's very easy to walk here from Leiria Castle. Recommend wearing flat shoes due to the cobblestone paths. Locals are friendly, great spots for photos."
      },
      {
        "name": "Rui Almeida",
        "date": "3 months ago",
        "rating": 5,
        "text": "Feels like stepping back in time! Every path and fountain has its story. Resting on a bench makes you feel like time has stopped. A must-visit in Leiria."
      },
      {
        "name": "Catarina Gomes",
        "date": "2 months ago",
        "rating": 5,
        "text": "Beautiful beyond words. Whether it's the Camões statue or the green vegetation, you won't want to leave. Highly recommend sitting by the fountain, it feels amazing."
      }
    ];
  } else if (loc === 'pt') {
    data.reviews.items = [
      {
        "name": "João Silva",
        "date": "Há 2 meses",
        "rating": 5,
        "text": "Um jardim urbano maravilhoso e bem preservado! Os caminhos de calçada e as estátuas estão cheios de história. Caminhar aqui é muito relaxante. Recomendo vivamente vir ao pôr do sol."
      },
      {
        "name": "Maria Costa",
        "date": "Há 1 mês",
        "rating": 5,
        "text": "Um dos locais de lazer mais bonitos de Leiria! A tranquilidade aqui é muito relaxante e a vegetação circundante é linda. Cuidado no verão, pois pode ficar quente, leve água e protetor solar."
      },
      {
        "name": "Carlos Rodrigues",
        "date": "Há 3 meses",
        "rating": 4,
        "text": "Um lugar incrível. O jardim não é enorme, mas a localização é perfeita. Tive uma ótima refeição tradicional portuguesa num restaurante próximo. O único problema é encontrar estacionamento na época alta."
      },
      {
        "name": "Ana Martins",
        "date": "Há mais de 6 meses",
        "rating": 5,
        "text": "Um lugar muito romântico e encantador. Caminhamos por aqui e a vista noturna é absolutamente deslumbrante. Fiquei completamente apaixonada!"
      },
      {
        "name": "Pedro Santos",
        "date": "Há 1 ano",
        "rating": 5,
        "text": "A paisagem aqui realmente levanta o ânimo. Pode ver a estátua requintada a misturar-se com a ampla praça. O jardim em si é encantador com muitos cafés ao redor."
      },
      {
        "name": "Teresa Ferreira",
        "date": "Há mais de 6 meses",
        "rating": 4,
        "text": "Vale bem a pena a visita! É muito fácil caminhar até aqui a partir do Castelo de Leiria. Recomendo usar sapatos rasos devido aos caminhos de calçada. Os locais são amigáveis, ótimos locais para fotos."
      },
      {
        "name": "Rui Almeida",
        "date": "Há 3 meses",
        "rating": 5,
        "text": "Parece que recuámos no tempo! Cada caminho e fonte tem a sua história. Descansar num banco faz-nos sentir que o tempo parou. Uma visita obrigatória em Leiria."
      },
      {
        "name": "Catarina Gomes",
        "date": "Há 2 meses",
        "rating": 5,
        "text": "Lindo além das palavras. Quer seja a estátua de Camões ou a vegetação verde, não vai querer ir embora. Recomendo vivamente sentar-se junto à fonte, a sensação é incrível."
      }
    ];
  } else if (loc === 'mwl') {
    data.reviews.items = [
      {
        "name": "João Silva",
        "date": "Hai 2 meses",
        "rating": 5,
        "text": "Un jardin ourbano marabilhoso i bien preserbado! Ls caminos de calçada i las státuas stan chenos de stória. Caminar eiqui ye mui relaxante. Recumendo bibamente benir al poner de l sol."
      },
      {
        "name": "Maria Costa",
        "date": "Hai 1 mës",
        "rating": 5,
        "text": "Un de ls lhocales de lhazer mais guapos de Leiria! La tranquilidade eiqui ye mui relaxante i la begetaçon circundante ye guapa. Cuidado ne l berano, pus puode quedar caliente, lhebe auga i protetor solar."
      },
      {
        "name": "Carlos Rodrigues",
        "date": "Hai 3 meses",
        "rating": 4,
        "text": "Un lhugar ancreíble. L jardin nun ye einorme, mas la lhocalizaçon ye purfeita. Tibe ua ótima refeiçon tradecional pertuesa nun restourante próssimo. L único porblema ye ancontrar stacionamiento na época alta."
      },
      {
        "name": "Ana Martins",
        "date": "Hai mais de 6 meses",
        "rating": 5,
        "text": "Un lhugar mui romántico i ancantador. Caminamos por eiqui i la bista noturna ye absolutamente çlumbrante. Quedei cumpletamente apaixonada!"
      },
      {
        "name": "Pedro Santos",
        "date": "Hai 1 anho",
        "rating": 5,
        "text": "La paisaige eiqui rialmente lhebanta l ánimo. Puode ber la státua requintada a misturar-se cula ampla praça. L jardin an si ye ancantador cun muitos cafés al redror."
      },
      {
        "name": "Teresa Ferreira",
        "date": "Hai mais de 6 meses",
        "rating": 4,
        "text": "Bal bien la pena la bejita! Ye mui fácele caminar até eiqui a partir de l Castielho de Leiria. Recumendo ousar çapatos rasos debido als caminos de calçada. Ls lhocales son amigables, ótimos lhocales para fotos."
      },
      {
        "name": "Rui Almeida",
        "date": "Hai 3 meses",
        "rating": 5,
        "text": "Parece que recuámos ne l tiempo! Cada camino i fuonte ten la sue stória. Çcansar nun banco faç-nos sentir que l tiempo parou. Ua bejita oubrigatória an Leiria."
      },
      {
        "name": "Catarina Gomes",
        "date": "Hai 2 meses",
        "rating": 5,
        "text": "Guapo para alhá de las palabras. Quier seia la státua de Camões ó la begetaçon berde, nun bai querer ir ambora. Recumendo bibamente sentar-se junto a la fuonte, la sensaçon ye ancreíble."
      }
    ];
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
});