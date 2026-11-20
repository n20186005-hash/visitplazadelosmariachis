import type { LocaleCode } from '@/config/site';
import plans from './nearby-plans.json';

type Localized = Record<LocaleCode, string>;
type Area = { district: string; station?: string; lines?: string };
const areas: Record<string, Area> = {
  centro: { district: 'Centro Histórico', station: 'Guadalajara Centro', lines: 'L3' },
  sanJuan: { district: 'San Juan de Dios / Centro Histórico', station: 'San Juan de Dios', lines: 'L2' },
  analco: { district: 'Analco / Las Conchas', station: 'San Juan de Dios', lines: 'L2' },
  aguaAzul: { district: 'Agua Azul / Moderna' },
  mexicaltzingo: { district: 'Mexicaltzingo / Centro', station: 'Mexicaltzingo', lines: 'L1' },
  santuario: { district: 'El Santuario / Centro', station: 'Santuario', lines: 'L3' },
  juarez: { district: 'Corredor Juárez', station: 'Juárez', lines: 'L1 · L2' },
  refugio: { district: 'Capilla de Jesús', station: 'Refugio', lines: 'L1' },
  americana: { district: 'Colonia Americana / zona poniente' },
  vallarta: { district: 'Corredor Vallarta / López Mateos' },
  avila: { district: 'Corredor Ávila Camacho', station: 'Ávila Camacho', lines: 'L1 · L3' },
};

const culturalListings: Record<string, { url: string; street?: string; alternateHours?: Localized }> = {
  'museo-de-la-ciudad-de-guadalajara': { url: 'https://sic.cultura.gob.mx/ficha.php?table=museo&table_id=564', street: 'Independencia 684', alternateHours: {
    es: 'El directorio cultural indica martes a sábado, 10:00–15:00.',
    en: 'The cultural directory lists Tuesday to Saturday, 10:00–15:00.',
    zh: '文化信息系统另列周二至周六 10:00–15:00。',
  } },
  'museo-de-las-artes-populares-de-jalisco': { url: 'https://sic.cultura.gob.mx/ficha.php?table=museo&table_id=1022', street: 'San Felipe 211', alternateHours: {
    es: 'El directorio cultural también indica domingo, 11:00–14:00.',
    en: 'The cultural directory also lists Sunday, 11:00–14:00.',
    zh: '文化信息系统另列周日 11:00–14:00。',
  } },
  'museo-raul-anguiano-mura': { url: 'https://sic.cultura.gob.mx/ficha.php?table=museo&table_id=306', street: 'Avenida Mariano Otero 375' },
  'musa-museo-de-las-artes': { url: 'https://sic.cultura.gob.mx/ficha.php?table=museo&table_id=444', street: 'Avenida Juárez 975' },
};

const writing = {
  es: {
    culturalDirectory: 'Sistema de Información Cultural', district: 'Sector', duration: 'Tiempo orientativo', entrance: 'Acceso de referencia', station: 'Estación de referencia',
    stationWalk: 'Caminar desde la estación', free: 'El Sistema de Información Cultural indica entrada libre. Consulta por separado las actividades especiales.',
    events: 'El acceso depende de la función, la exposición, la visita guiada o la actividad elegida. Consulta la cartelera y las condiciones del recinto.',
    market: 'Puedes recorrer los pasillos y pagar por separado lo que consumas o compres. Pregunta el precio en el puesto.',
    park: 'Consulta las condiciones del acceso general y, por separado, el precio de las actividades o instalaciones del parque.',
    publicTransit: 'Consulta la ruta en transporte público desde tu punto de salida. La estación indicada es una referencia para el tramo a pie.',
    transitOnly: 'Busca el recorrido en transporte público desde tu punto de salida y comprueba el último tramo hasta el acceso.',
    mapReviews: 'Consulta en la ficha el promedio, el número de opiniones y las reseñas recientes para este lugar.',
    scheduleDifference: 'La ficha municipal y el directorio cultural publican horarios distintos. Confirma la apertura con el museo antes de ir.',
  },
  en: {
    culturalDirectory: 'Cultural Information System', district: 'Area', duration: 'Suggested time', entrance: 'Entrance reference', station: 'Rail station reference',
    stationWalk: 'Walk from the station', free: 'Mexico’s Cultural Information System lists free admission. Check separately for special activities.',
    events: 'Admission depends on the performance, exhibition, tour or activity you choose. Check the venue’s programme and access terms.',
    market: 'You can explore the aisles and pay separately for food or purchases. Ask the stall for its prices.',
    park: 'Check the terms for general entry and ask separately about any charges for activities or facilities.',
    publicTransit: 'Check public transit from your starting point. The station shown is a reference for the final walk.',
    transitOnly: 'Check public transit from your starting point and confirm the final leg to the entrance.',
    mapReviews: 'Open the listing to see this place’s current average rating, review count and recent comments.',
    scheduleDifference: 'The municipal listing and cultural directory publish different hours. Confirm opening with the museum before you go.',
  },
  zh: {
    culturalDirectory: '墨西哥文化信息系统', district: '所在片区', duration: '建议停留', entrance: '入口门牌参考', station: '轨道交通参考站',
    stationWalk: '从该站步行前往', free: '墨西哥文化信息系统公布常规参观免费。特别活动的入场安排请单独查询。',
    events: '入场安排取决于所选演出、展览、导览或活动。请查场馆的当期节目及入场说明。',
    market: '可逛市场通道，餐饮和购物按摊位分别付费。点餐或购买前可先问价。',
    park: '请分别查询公园普通入园条件和园内特定设施或活动的费用。',
    publicTransit: '请按实际出发点查询公共交通。下方参考站可用来规划下车后的步行路段。',
    transitOnly: '请按实际出发点查询公共交通，并核对最后一段到景点入口的路线。',
    mapReviews: '打开地点详情即可查看该景点当前评分、评价数量和近期游客留言。',
    scheduleDifference: '市旅游资料与文化信息系统公布的时段有出入，请出发前直接向博物馆确认。',
  },
};

const guidePlans: Record<string, { area: string; plan: Localized }> = plans;

export function nearbyPlanning(slug: string, locale: LocaleCode) {
  const place = guidePlans[slug];
  const details = areas[place.area];
  const text = writing[locale];
  const cultural = culturalListings[slug];
  const fee = cultural ? text.free
    : slug.startsWith('mercado-') ? text.market
    : ['parque-agua-azul', 'parque-alcalde', 'parque-avila-camacho'].includes(slug) ? text.park
    : ['teatro-degollado', 'larva', 'palacio-de-las-vacas', 'museo-panteon-de-belen'].includes(slug) ? text.events
    : undefined;
  return { ...details, plan: place.plan[locale], text, cultural, fee };
}
