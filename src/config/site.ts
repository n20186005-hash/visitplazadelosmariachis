/**
 * Central single-attraction entity configuration.
 *
 * Every SEO template value referenced in the guide maps back to this object,
 * so structured data, meta tags, headings and body copy stay consistent.
 *
 * Place data source:
 *   C. Álvaro Obregón 23, San Juan de Dios, 44360 Guadalajara, Jal., Mexico
 *   Plus code: MMF5+XC Guadalajara, Jalisco, Mexico
 */

export type LocaleCode = 'en' | 'es' | 'zh';

export const SITE = {
  domain: 'visitplazadelosmariachis.com',
  url: 'https://visitplazadelosmariachis.com',

  // Attraction entity ({{ATTRACTION_FULL_NAME}} / geo data)
  fullName: 'Plaza de los Mariachis',
  streetAddress: 'C. Álvaro Obregón 23, San Juan de Dios',
  city: 'Guadalajara',
  state: 'Jalisco',
  country: 'Mexico',
  countryCode: 'MX',
  postalCode: '44360',
  plusCode: 'MMF5+XC Guadalajara, Jalisco, Mexico',
  latitude: 20.6749906,
  longitude: -103.3414944,

  // {{MAPS_SHARE_URL}} / {{MAPS_EMBED_SRC}}
  mapsShareUrl: 'https://maps.app.goo.gl/xEPZJkRTbcobgu39A',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.866967303899!2d-103.3414944!3d20.674990599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1f180128a85%3A0x67bab2426b4d2443!2sPlaza%20de%20los%20Mariachis!5e0!3m2!1sen!2s!4v1788745864622!5m2!1sen!2s',

  // {{GOVT_TOURISM_URL}} (.gob / .org authorities)
  govtTourismUrl: 'https://secturjal.jalisco.gob.mx/',
  govtTourismName: 'Secretaría de Turismo de Jalisco',

  // Imagery — the local first gallery photo doubles as hero / og:image source
  heroImage: '/gallery/plaza-de-los-mariachis-guadalajara-1.jpg',
  heroImageAbsolute:
    'https://visitplazadelosmariachis.com/gallery/plaza-de-los-mariachis-guadalajara-1.jpg',

  // {{ATTRACTION_SHORT_NAME}} — short name / domain-meaning per supported locale
  shortNames: {
    en: 'Mariachi Square',
    es: 'Plaza del Mariachi',
    zh: '马里亚奇广场',
  } as Record<LocaleCode, string>,

  // Nearby landmark display names per locale (used for semantic clusters / links)
  nearbyLandmarks: {
    en: [
      { name: 'San Juan de Dios Market' },
      { name: 'Guadalajara Cathedral' },
    ],
    es: [
      { name: 'Mercado San Juan de Dios' },
      { name: 'Catedral de Guadalajara' },
    ],
    zh: [
      { name: '圣胡安德迪奥斯市场（Mercado San Juan de Dios）' },
      { name: '瓜达拉哈拉大教堂（Catedral de Guadalajara）' },
    ],
  } as Record<LocaleCode, { name: string }[]>,

  // Analytics
  ga4Id: 'G-HXM22WWPKP',
} as const;

/** Google Maps search link used for nearby landmark anchors. */
export function mapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
