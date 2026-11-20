import type { LocaleCode } from '@/config/site';
import type { NearbyPlace } from './nearby';

const publishedHours: Record<string, { days: 'daily' | 'weekdays' | 'tueSun' | 'tueSat' | 'sun' | 'sat'; time: string }[]> = {
  'museo-cabanas': [{ days: 'tueSun', time: '10:00–17:00' }],
  'catedral-metropolitana-de-guadalajara': [{ days: 'daily', time: '08:00–20:00' }],
  'plaza-guadalajara': [{ days: 'daily', time: '00:00–24:00' }],
  'rotonda-de-los-jaliscienses-ilustres': [{ days: 'daily', time: '00:00–24:00' }],
  'palacio-municipal-de-guadalajara': [{ days: 'weekdays', time: '09:00–15:00' }],
  'museo-regional-de-guadalajara': [{ days: 'tueSun', time: '09:00–16:00' }],
  'museo-del-periodismo-y-las-artes-graficas-la-casa-de-los-perros': [{ days: 'tueSat', time: '10:00–17:30' }],
  'museo-de-la-ciudad-de-guadalajara': [{ days: 'tueSat', time: '10:00–17:30' }, { days: 'sun', time: '10:00–14:30' }],
  'casa-museo-lopez-portillo': [{ days: 'tueSat', time: '10:00–17:00' }, { days: 'sun', time: '10:00–15:00' }],
  'parroquia-san-juan-de-dios': [{ days: 'daily', time: '10:00–18:00' }],
  'parque-morelos': [{ days: 'daily', time: '00:00–24:00' }],
  'parque-agua-azul': [{ days: 'daily', time: '07:00–18:30' }],
  'musa-museo-de-las-artes': [{ days: 'tueSat', time: '10:00–18:00' }, { days: 'sun', time: '10:00–15:00' }],
  'ex-convento-del-carmen': [{ days: 'tueSat', time: '11:00–17:00' }, { days: 'sun', time: '11:00–14:00' }],
  'biblioteca-iberoamericana-octavio-paz': [{ days: 'weekdays', time: '09:00–21:00' }, { days: 'sat', time: '09:00–17:00' }],
};

const days = {
  es: { daily: 'Todos los días', weekdays: 'Lunes a viernes', tueSun: 'Martes a domingo', tueSat: 'Martes a sábado', sun: 'Domingo', sat: 'Sábado' },
  en: { daily: 'Daily', weekdays: 'Monday to Friday', tueSun: 'Tuesday to Sunday', tueSat: 'Tuesday to Saturday', sun: 'Sunday', sat: 'Saturday' },
  zh: { daily: '每天', weekdays: '周一至周五', tueSun: '周二至周日', tueSat: '周二至周六', sun: '周日', sat: '周六' },
};

export const visitLabels = {
  es: { intro: 'Descubre el lugar', plan: 'Consejos de visita', highlights: 'Qué lo distingue', hours: 'Horarios', fees: 'Entradas y precios', features: 'Historia, arquitectura y cultura', route: 'Recorrido sugerido', notes: 'Antes de ir', camera: 'Dónde hacer fotos', lodging: 'Dónde alojarse', directions: 'Dirección y mapa', type: 'Tipo de visita', manager: 'Entidad responsable', sourceHours: 'Horario publicado. Confirma cambios y días festivos con el recinto.', noHours: 'Consulta el horario de visita y los avisos del recinto antes de salir.', publicHours: 'Espacio exterior. Consulta avisos municipales si hay actos, obras o cierres.', free: 'El recorrido por el espacio público exterior es gratuito. Los recintos y eventos cercanos tienen sus propias condiciones.', tickets: 'Consulta con el recinto si la entrada, visita guiada o actividad elegida requiere boleto y cuánto cuesta.', outdoor: 'Espacio público al aire libre', church: 'Edificio religioso en uso', venue: 'Recinto con sus propias condiciones de acceso', centralStay: 'Zona Centro: busca alojamiento cerca de Avenida Fray Antonio Alcalde para combinar esta visita con la Catedral y el Teatro Degollado.', eastStay: 'San Juan de Dios o Zona Centro: elige un alojamiento cerca de un acceso a Calzada Independencia si piensas combinar esta visita con Cabañas y el mercado.', westStay: 'Colonia Americana o Zona Centro: busca alojamiento cerca de Avenida Juárez si vas a combinar recintos culturales y el corredor del Carmen.', start: 'Comienza en la Plaza de los Mariachis y abre la ruta a pie hasta el destino.', end: 'Desde el destino, continúa a otro punto del mismo sector:', worship: 'Si hay culto, deja paso en el acceso y consulta antes de fotografiar el interior.', indoor: 'Confirma qué salas o zonas están abiertas y pregunta por las reglas de fotografía antes de entrar.', publicNote: 'Usa los cruces señalados y deja libres las entradas y zonas de paso al hacer fotos.' },
  en: { intro: 'Explore the attraction', plan: 'Planning your visit', highlights: 'What makes it distinctive', hours: 'Opening hours', fees: 'Tickets and prices', features: 'History, architecture and culture', route: 'Suggested route', notes: 'Before you go', camera: 'Where to take photos', lodging: 'Where to stay', directions: 'Address and map', type: 'Type of visit', manager: 'Managed by', sourceHours: 'Published hours. Check with the venue for changes and holidays.', noHours: 'Check the venue’s visitor hours and notices before leaving.', publicHours: 'Outdoor public space. Check municipal notices for events, work or closures.', free: 'The outdoor public space is free to visit. Nearby venues and events set their own admission terms.', tickets: 'Ask the venue whether your preferred visit, tour or activity requires a ticket and what it costs.', outdoor: 'Outdoor public space', church: 'Active place of worship', venue: 'Venue with its own visitor access rules', centralStay: 'Zona Centro: look near Avenida Fray Antonio Alcalde for a base that also works for the cathedral and Teatro Degollado.', eastStay: 'San Juan de Dios or Zona Centro: stay near an approach to Calzada Independencia if you plan to visit Cabañas and the market as well.', westStay: 'Colonia Americana or Zona Centro: look near Avenida Juárez if you plan to visit cultural venues along the Carmen corridor.', start: 'Start at Plaza de los Mariachis and open the walking route for the destination.', end: 'Continue from the destination to another stop in the same area:', worship: 'Keep the entrance clear during worship and ask before taking photographs inside.', indoor: 'Check which rooms are open and ask about photography rules before entering.', publicNote: 'Use marked crossings and keep entrances and pedestrian routes clear when taking photographs.' },
  zh: { intro: '探索景点', plan: '游览建议', highlights: '景区特色', hours: '开放时间', fees: '门票价格', features: '发现魅力：历史、建筑与文化', route: '游览路线', notes: '游览须知', camera: '拍照机位', lodging: '住宿建议', directions: '交通指南', type: '景点类型', manager: '管理主体', sourceHours: '以上为公布时段，临时调整及假日安排请向场馆核实。', noHours: '出发前请查询场馆公布的访客时段及临时公告。', publicHours: '户外公共空间。遇活动、施工或临时关闭，请以市政公告为准。', free: '户外公共区域可免费游览。附近场馆或活动的入场条件请分别查询。', tickets: '请向场馆查询所选参观、导览或活动是否需要购票及当日票价。', outdoor: '户外公共空间', church: '仍在使用的宗教建筑', venue: '设有独立参观安排的场馆', centralStay: '想连逛大教堂和德戈亚多剧院，可选老城区弗赖·安东尼奥·阿尔卡尔德大道一带住宿。', eastStay: '若打算一并去卡瓦尼亚斯博物馆和市场，可住圣胡安德迪奥斯或老城区，优先选择便于走到独立大道的住宿。', westStay: '若还要逛卡门旧修道院一带的文化场馆，可选华雷斯大道附近的美洲街区或老城区住宿。', start: '从马里亚奇广场出发，打开前往该景点的步行导航。', end: '游览后可步行前往同片区的下一站：', worship: '遇礼拜请让出入口，拍摄室内前先询问。', indoor: '入内前确认开放区域和拍摄规则。', publicNote: '使用有标识的人行过街点，拍摄时为出入口和步行通道留出空间。' },
};

export function visitDetails(slug: string, place: NearbyPlace, locale: LocaleCode) {
  const labels = visitLabels[locale];
  const outdoor = /^(plaza|parque|paseo|jardin|rotonda)-/.test(slug);
  const publicSpace = outdoor && slug !== 'parque-agua-azul';
  const church = place.manager === 'church';
  const hours = (publishedHours[slug] ?? []).map(({ days: day, time }) => `${days[locale][day]} ${time}`);
  const east = /cabanas|analco|san-juan|morelos|tapatia/.test(slug);
  const west = /revolucion-parque-rojo|expiatorio|musa|carmen/.test(slug);
  const next = {
    'plaza-tapatia': 'museo-cabanas',
    'museo-cabanas': 'plaza-tapatia',
    'jardin-san-jose-de-analco': 'parroquia-san-jose-de-analco',
    'parroquia-san-jose-de-analco': 'jardin-san-jose-de-analco',
    'expiatorio-del-santisimo-sacramento': 'musa-museo-de-las-artes',
    'teatro-degollado': 'plaza-fundadores',
    'catedral-metropolitana-de-guadalajara': 'plaza-de-armas',
    'parque-agua-azul': null,
  } as Record<string, string | null>;
  return {
    labels, hours,
    duration: ({ es: ['15–30 min al aire libre', '20–40 min para el exterior y, si está abierto, el interior', '45–90 min según las salas o actividades'], en: ['15–30 min outdoors', '20–40 min for the exterior and the interior if open', '45–90 min depending on galleries or activities'], zh: ['户外游览建议预留 15–30 分钟', '参观外观和开放的室内区域建议预留 20–40 分钟', '视开放展厅或活动，建议预留 45–90 分钟'] })[locale][outdoor ? 0 : church ? 1 : 2],
    hoursNote: hours.length ? labels.sourceHours : publicSpace ? labels.publicHours : labels.noHours,
    fees: slug === 'museo-cabanas' ? {
      es: 'El Sistema de Información Cultural publica una entrada general de 80 MXN y acceso libre los martes. Consulta la tarifa vigente antes de ir.',
      en: 'Mexico’s Cultural Information System lists general admission at MXN 80 and free admission on Tuesdays. Check the current price before you go.',
      zh: '墨西哥文化信息系统公布普通门票为 80 墨西哥比索，周二免费。出发前请核实最新票价。',
    }[locale] : slug === 'museo-regional-de-guadalajara' ? {
      es: 'El INAH publica 210 MXN de entrada general y 105 MXN para nacionales y residentes en México. Consulta las tarifas vigentes con el museo.',
      en: 'INAH lists MXN 210 for general admission and MXN 105 for Mexican nationals and residents. Check the current rates with the museum.',
      zh: '墨西哥国家人类学与历史研究所公布普通门票为 210 墨西哥比索，墨西哥公民及居民票价为 105 比索。请以博物馆当天公布的票价为准。',
    }[locale] : publicSpace ? labels.free : labels.tickets,
    type: outdoor ? labels.outdoor : church ? labels.church : labels.venue,
    notes: church ? labels.worship : outdoor ? labels.publicNote : labels.indoor,
    lodging: east ? labels.eastStay : west ? labels.westStay : labels.centralStay,
    nextSlug: Object.hasOwn(next, slug) ? next[slug] : east ? 'plaza-tapatia' : west ? 'expiatorio-del-santisimo-sacramento' : 'catedral-metropolitana-de-guadalajara',
  };
}
