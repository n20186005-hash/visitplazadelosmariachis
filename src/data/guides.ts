import type { LocaleCode } from '@/config/site';

export const guideSlugs = ['mariachi-en-vivo', 'mercado-san-juan-de-dios', 'ruta-centro-historico'] as const;
export type GuideSlug = (typeof guideSlugs)[number];

type Guide = {
  title: string;
  summary: string;
  location: string;
  about: string;
  sections: [string, string][];
  faq: [string, string];
};

const tourism = 'https://tequiero.guadalajara.gob.mx';
export const guidePlaces: Record<GuideSlug, { mapQuery: string; source: string }> = {
  'mariachi-en-vivo': { mapQuery: 'Plaza de los Mariachis, San Juan de Dios, Guadalajara, Jalisco', source: tourism + '/lugares/plaza-de-los-mariachis' },
  'mercado-san-juan-de-dios': { mapQuery: 'Mercado Libertad San Juan de Dios, Guadalajara, Jalisco', source: tourism + '/lugares/mercado-san-juan-de-dios' },
  'ruta-centro-historico': { mapQuery: 'Teatro Degollado, Calle Degollado, Guadalajara, Jalisco', source: tourism + '/planea-tu-viaje/explora/centro-historico' },
};

export const guideLabels = {
  es: { heading: 'Guías para tu visita', about: 'Sobre el lugar', location: 'Ubicación', map: 'Abrir en Google Maps', source: 'Turismo de Guadalajara', faq: 'Pregunta frecuente', back: 'Volver a Plaza de los Mariachis' },
  en: { heading: 'Plan your visit', about: 'About the place', location: 'Location', map: 'Open in Google Maps', source: 'Guadalajara Tourism', faq: 'Frequently asked question', back: 'Back to Plaza de los Mariachis' },
  zh: { heading: '周边游览指南', about: '关于景点', location: '位置', map: '在 Google 地图打开', source: '瓜达拉哈拉市旅游局', faq: '常见问题', back: '返回马里亚奇广场' },
};

export const guides: Record<LocaleCode, Record<GuideSlug, Guide>> = {
  es: {
    'mariachi-en-vivo': {
      title: 'Dónde escuchar mariachi en vivo en Guadalajara',
      summary: 'Qué esperar en la Plaza de los Mariachis, cómo pedir una canción y qué acordar con los músicos antes de empezar.',
      location: 'Paseo de los Mariachis, junto a Calzada Independencia, barrio de San Juan de Dios.',
      about: 'La callejuela ocupa el antiguo desembarco del puente de San Juan de Dios. El comercio, las cantinas y el tránsito de viajeros ayudaron a consolidar la presencia de músicos, y el nombre de Plaza de los Mariachis se difundió a mediados del siglo XX.',
      sections: [
        ['Cómo pedir una canción', 'Si hay músicos disponibles, pregunta por una pieza o pide una recomendación. Acuerda el importe total, cuántas canciones incluye y cómo se paga antes de que empiecen. Si estás en un establecimiento, confirma si el consumo se cobra por separado.'],
        ['Cuándo ir y qué observar', 'Empieza por recorrer el pasaje y fíjate en el contraste entre los locales de la planta baja y los pisos altos de los edificios eclécticos. Si tu visita depende de escuchar música, consulta ese día con el lugar donde piensas sentarte y deja margen para visitar el mercado cercano.'],
      ],
      faq: ['¿Hay un espectáculo a una hora fija?', 'La ficha turística municipal no publica un programa fijo para la plaza. Consulta directamente con los músicos o el establecimiento para confirmar su disponibilidad.'],
    },
    'mercado-san-juan-de-dios': {
      title: 'Mercado San Juan de Dios en Guadalajara',
      summary: 'Cómo combinar el Mercado Libertad y la Plaza de los Mariachis en una visita, con ideas para comer y recorrer sus tres niveles.',
      location: 'Calzada Independencia Sur, Zona Centro, Guadalajara.',
      about: 'También llamado Mercado Libertad, abrió en 1958 y fue diseñado por el arquitecto Alejandro Zohn. Sus tres niveles reúnen puestos de alimentos, artesanías, ropa y otros comercios. El patio ayuda a orientarse dentro del edificio.',
      sections: [
        ['Recorrido desde la plaza', 'Desde el Paseo de los Mariachis, dirígete hacia Calzada Independencia y sigue la señalización hacia el mercado por los cruces peatonales. Una vez dentro, localiza un acceso reconocible antes de subir de nivel para facilitar el regreso.'],
        ['Qué probar y dónde hacer una pausa', 'Compara las cartas de las fondas si buscas birria, tortas ahogadas o un jugo. Si también quieres comprar artesanías, deja las compras para el regreso a la salida. Consulta el horario publicado por Turismo de Guadalajara y confirma con el puesto si buscas uno en particular.'],
      ],
      faq: ['¿Mercado Libertad y Mercado San Juan de Dios son el mismo lugar?', 'Sí. Ambos nombres identifican el mercado de Calzada Independencia Sur en Guadalajara.'],
    },
    'ruta-centro-historico': {
      title: 'Ruta a pie del Teatro Degollado a la Plaza de los Mariachis',
      summary: 'Un paseo por el Centro Histórico de Guadalajara que conecta el Teatro Degollado, Plaza Tapatía y el barrio de San Juan de Dios.',
      location: 'Salida sugerida desde Teatro Degollado, Calle Degollado, Zona Centro.',
      about: 'El Teatro Degollado, inaugurado en 1866, es un punto de partida para observar la arquitectura neoclásica. El paseo atraviesa un corredor peatonal del centro antes de llegar al entorno comercial de San Juan de Dios.',
      sections: [
        ['1. Teatro Degollado', 'Empieza en la fachada del teatro. Desde el espacio abierto frente al edificio se puede observar el pórtico completo antes de continuar hacia Paseo Degollado.'],
        ['2. Paseo Degollado y Plaza Tapatía', 'Sigue el paseo peatonal en dirección a Plaza Tapatía. Si añades una parada cultural o para fotografías, reserva tiempo para hacer ese desvío antes de cruzar Calzada Independencia.'],
        ['3. Plaza de los Mariachis y el mercado', 'Usa los cruces peatonales habilitados para entrar al barrio de San Juan de Dios. Recorre el Paseo de los Mariachis y termina en el Mercado Libertad si quieres comer o comprar artesanías.'],
      ],
      faq: ['¿Hay que entrar al teatro para hacer el paseo?', 'Puedes empezar frente al teatro y seguir la ruta al aire libre. Para visitar su interior, consulta las condiciones de acceso y la programación.'],
    },
  },
  en: {
    'mariachi-en-vivo': {
      title: 'Where to Hear Live Mariachi in Guadalajara',
      summary: 'What to expect at Plaza de los Mariachis, how to request a song and what to agree with the musicians before they start.',
      location: 'Paseo de los Mariachis by Calzada Independencia, San Juan de Dios.',
      about: 'The passage stands where the old San Juan de Dios bridge once ended. Shops, cantinas and travelers helped create a gathering place for musicians. The name Plaza de los Mariachis came into use in the mid-20th century.',
      sections: [
        ['Requesting a song', 'If musicians are available, ask for a particular song or invite them to suggest one. Agree on the total price, number of songs and payment method before the performance. If you are seated at a business, ask whether food or drinks are billed separately.'],
        ['Planning your stop', 'Walk through the triangular passage and look up at the eclectic buildings, whose ground floors were built for shops and upper floors for housing. If live music is your main reason to go, check with the place you plan to visit that day and leave time for the nearby market.'],
      ],
      faq: ['Is there a performance at a fixed time?', 'The municipal tourism listing does not publish a fixed program for the square. Check availability directly with musicians or the venue.'],
    },
    'mercado-san-juan-de-dios': {
      title: 'San Juan de Dios Market in Guadalajara',
      summary: 'Pair Mercado Libertad with Plaza de los Mariachis and plan where to eat and what to look for across the market’s three levels.',
      location: 'Calzada Independencia Sur, downtown Guadalajara.',
      about: 'Designed by architect Alejandro Zohn and opened in 1958, Mercado Libertad is also called San Juan de Dios Market. Its three levels house food stalls, crafts, clothing and other shops. The courtyard is a useful point of reference inside.',
      sections: [
        ['Walking from the square', 'Head from Paseo de los Mariachis toward Calzada Independencia and follow signs for the market using marked pedestrian crossings. Inside, pick a recognizable entrance or landmark before exploring the upper levels.'],
        ['Food and shopping stops', 'Compare menus at the food counters if you want birria, tortas ahogadas or fresh juice. If you plan to buy crafts as well, consider shopping on your way out. Check the city tourism listing for market hours and confirm separately with any stall you specifically want to visit.'],
      ],
      faq: ['Are Mercado Libertad and San Juan de Dios Market the same place?', 'Yes. Both names refer to the market on Calzada Independencia Sur in Guadalajara.'],
    },
    'ruta-centro-historico': {
      title: 'Walk from Teatro Degollado to Plaza de los Mariachis',
      summary: 'A walk through historic Guadalajara linking Teatro Degollado, Plaza Tapatía and the San Juan de Dios neighborhood.',
      location: 'Suggested start at Teatro Degollado, Calle Degollado, downtown Guadalajara.',
      about: 'Teatro Degollado opened in 1866 and offers a starting point for looking at Guadalajara’s neoclassical architecture. The walk follows a pedestrian corridor toward the commercial neighborhood of San Juan de Dios.',
      sections: [
        ['1. Teatro Degollado', 'Start outside the theater. The open space in front of the building gives you room to look at the whole portico before continuing toward Paseo Degollado.'],
        ['2. Paseo Degollado and Plaza Tapatía', 'Follow the pedestrian promenade toward Plaza Tapatía. Allow extra time before crossing Calzada Independencia if you plan to stop for photographs or make a cultural detour.'],
        ['3. Plaza de los Mariachis and the market', 'Use marked pedestrian crossings to reach San Juan de Dios. Walk along Paseo de los Mariachis and finish at Mercado Libertad if you want to eat or shop for crafts.'],
      ],
      faq: ['Do I need to go inside the theater?', 'The walk starts outside the theater and follows public spaces. Check the theater’s access information and program separately if you want to see the interior.'],
    },
  },
  zh: {
    'mariachi-en-vivo': {
      title: '在瓜达拉哈拉哪里听马里亚奇现场演奏',
      summary: '走进马里亚奇广场，了解如何点歌、演奏前需要问清哪些费用，以及怎样安排到访时间。',
      location: '圣胡安德迪奥斯街区，独立大道旁的马里亚奇步道。',
      about: '这条巷道位于旧圣胡安德迪奥斯桥的出口一带。沿街商铺、酒馆和往来旅客让这里逐渐成为乐手聚集之处。到 20 世纪中叶，马里亚奇广场这一名称已在当地流传。',
      sections: [
        ['如何点歌', '遇到有空的乐手，可以提出想听的曲目，也可以请他们推荐。在开演前问清总价、包含几首歌和付款方式。如果坐在餐饮店里，也可先问清餐饮消费是否另计。'],
        ['什么时候去、看什么', '沿三角形巷道走一圈，留意折衷风格建筑底层商铺和楼上住宅的布局。如果此行主要为了听现场演奏，出发当天先向计划光顾的店家询问，并给附近市场预留时间。'],
      ],
      faq: ['广场有固定演出时刻吗？', '市旅游局的景点页面未公布固定演出表。当天是否有乐手及能否点歌，可直接向乐手或店家询问。'],
    },
    'mercado-san-juan-de-dios': {
      title: '瓜达拉哈拉圣胡安德迪奥斯市场游览指南',
      summary: '把自由市场和马里亚奇广场排在同一次游览，了解三层市场怎么逛、在哪里找当地小吃。',
      location: '瓜达拉哈拉市中心，独立大道南段。',
      about: '圣胡安德迪奥斯市场又称自由市场，由建筑师亚历杭德罗·佐恩设计，1958 年启用。三层空间内有餐饮、手工艺品及服装等摊位，中央庭院可以用来辨认方向。',
      sections: [
        ['从广场步行到市场', '沿马里亚奇步道往独立大道走，使用有标识的人行过街点，按路牌前往市场。进场后先记一个容易辨认的入口或地标，逛完楼上再下来会比较好找出口。'],
        ['吃什么、怎么买', '想尝本地小吃，可以先比较餐台菜单上的炖肉、辣酱浸面包和鲜榨果汁。手工艺品可留到返回出口时再买。市场营业信息以市旅游局页面为参考，特定摊位请另行确认。'],
      ],
      faq: ['自由市场和圣胡安德迪奥斯市场是同一个地方吗？', '是。两个名称都指瓜达拉哈拉独立大道南段的同一座市场。'],
    },
    'ruta-centro-historico': {
      title: '瓜达拉哈拉老城步行路线｜德戈亚多剧院到马里亚奇广场',
      summary: '从德戈亚多剧院出发，经塔帕蒂亚广场走到圣胡安德迪奥斯街区，在马里亚奇广场和市场收尾。',
      location: '建议从瓜达拉哈拉市中心德戈亚多街的德戈亚多剧院出发。',
      about: '德戈亚多剧院于 1866 年启用，是观察当地新古典主义建筑的一个起点。步行路线沿老城的行人通道走向圣胡安德迪奥斯商业街区。',
      sections: [
        ['1. 德戈亚多剧院', '从剧院外开始，在门前开阔处观察完整的门廊，再往德戈亚多步道方向走。'],
        ['2. 德戈亚多步道和塔帕蒂亚广场', '沿行人步道走向塔帕蒂亚广场。如果要停下来拍照或安排其他文化景点，可在穿过独立大道之前预留时间。'],
        ['3. 马里亚奇广场和市场', '在有标识的人行过街点通过独立大道，进入圣胡安德迪奥斯街区。走完马里亚奇步道后，可以到自由市场吃饭或逛手工艺品摊位。'],
      ],
      faq: ['走这条路线需要进入剧院吗？', '路线从剧院外开始，沿公共空间步行。如果想参观剧院内部，请另查入场条件和节目安排。'],
    },
  },
};
