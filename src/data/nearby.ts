import type { LocaleCode } from '@/config/site';
import records from './nearby.json';

type Localized = Record<LocaleCode, string>;
type Manager = 'city' | 'state' | 'church' | 'inah' | 'udg';
export type NearbyPlace = { names: Localized; body: Localized; manager: string; address: string; photo: string; faq: Record<LocaleCode, string[]> };

export const nearbyPlaces: Record<string, NearbyPlace> = records;
export const nearbySlugs = Object.keys(records);
export const tourismPlace = 'https://tequiero.guadalajara.gob.mx/lugares/';
export const marketPhoto = 'https://d1q5u2b0g1ojg5.cloudfront.net/2025/07/large_19_san_juan_de_dios_6_8649f7f135.webp';

const managers: Record<Manager, Localized> = {
  city: { es: 'Ayuntamiento de Guadalajara', en: 'Guadalajara city government', zh: '瓜达拉哈拉市政府' },
  state: { es: 'Gobierno del Estado de Jalisco', en: 'Government of Jalisco', zh: '哈利斯科州政府' },
  church: { es: 'Iglesia católica local (Arquidiócesis de Guadalajara)', en: 'Local Catholic church (Archdiocese of Guadalajara)', zh: '当地天主教会（瓜达拉哈拉总教区）' },
  inah: { es: 'Instituto Nacional de Antropología e Historia (INAH)', en: 'National Institute of Anthropology and History (INAH)', zh: '墨西哥国家人类学与历史研究所（INAH）' },
  udg: { es: 'Universidad de Guadalajara', en: 'University of Guadalajara', zh: '瓜达拉哈拉大学' },
};

export const nearbyLabels = {
  es: {
    managerPrefix: 'Responsable del lugar', transit: 'Ver cómo llegar en transporte público', accessInfo: 'Horario y acceso',
    heading: 'Lugares cerca de la Plaza de los Mariachis', about: 'Quién gestiona el lugar', basics: 'Información básica', history: 'Historia y qué observar', transport: 'Cómo llegar', map: 'Ver el lugar en Google Maps', walking: 'Ruta a pie desde la plaza', photo: 'Fotografía y ficha del lugar', reviews: 'Opiniones de visitantes', readReviews: 'Consultar las opiniones actuales en Google Maps', faq: 'Preguntas frecuentes', access: '¿Conviene consultar el acceso antes de ir?', outdoor: 'Puedes planear la visita por el espacio exterior. Consulta los avisos locales si hay eventos, obras o cierres.', indoor: 'Sí. Consulta la ficha enlazada y confirma con el recinto los horarios, el acceso y cualquier costo antes de ir.', address: 'Dirección', source: 'Turismo de Guadalajara', spot: 'Visita y punto de fotografía', train: 'Consulta la red de SITEUR',
  },
  en: {
    managerPrefix: 'Managed by', transit: 'Find public transport directions', accessInfo: 'Hours and admission',
    heading: 'Places near Plaza de los Mariachis', about: 'Who manages this place', basics: 'Essential information', history: 'History and what to look for', transport: 'Getting there', map: 'View this place in Google Maps', walking: 'Walking directions from the square', photo: 'Photograph and place listing', reviews: 'Visitor reviews', readReviews: 'Read current reviews on Google Maps', faq: 'Frequently asked questions', access: 'Should I check access before visiting?', outdoor: 'You can plan an outdoor visit. Check local notices for events, works or closures.', indoor: 'Yes. Use the linked listing and confirm hours, access and any charges with the venue before leaving.', address: 'Address', source: 'Guadalajara Tourism', spot: 'How to visit and where to take photos', train: 'Check the SITEUR transit network',
  },
  zh: {
    managerPrefix: '管理主体', transit: '查看公共交通路线', accessInfo: '开放与入场',
    heading: '马里亚奇广场周边景点', about: '关于景点与管理主体', basics: '基础信息', history: '历史与建筑观察', transport: '交通方式', map: '在 Google 地图查看地点', walking: '从马里亚奇广场步行前往', photo: '实景照片与地点资料', reviews: '游客评价', readReviews: '在 Google 地图查看最新评分和评价', faq: '常见问题', access: '出发前需要查询开放情况吗？', outdoor: '可安排户外游览。遇到活动、施工或临时关闭，请以现场公告为准。', indoor: '建议先查看链接中的资料，再向场馆确认开放时间、入场方式及可能产生的费用。', address: '地址', source: '瓜达拉哈拉市旅游局', spot: '游览建议与拍摄位置', train: '查询 SITEUR 公共交通网络',
  },
};

export function managerName(manager: string, locale: LocaleCode) {
  return managers[manager as Manager][locale];
}

export function guideOwner(slug: string, locale: LocaleCode) {
  if (slug === 'ruta-centro-historico') {
    return {
      es: 'El Ayuntamiento de Guadalajara se ocupa de los espacios públicos del recorrido. El Teatro Degollado y los recintos culturales tienen su propia gestión y condiciones de acceso.',
      en: 'Guadalajara’s city government looks after the public spaces on this walk. Teatro Degollado and the cultural venues have their own management and admission arrangements.',
      zh: '沿线公共步道与广场由瓜达拉哈拉市政府管理。德戈亚多剧院及各文化场馆另有各自的管理和入场安排。',
    }[locale];
  }
  return managerName('city', locale);
}
