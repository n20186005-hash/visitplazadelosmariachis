import type { Metadata } from 'next';
import { SITE } from '@/config/site';

/**
 * Builds per-page canonical + hreflang alternates from a single source.
 *
 * `path` must start with a slash ('' for the locale root). The canonical host is
 * always `https://www.visitplazadelosmariachis.com` so that every URL derived
 * from the site (sitemap, canonical, hreflang, internal links) resolves to the
 * same www origin that is indexed in Google Search Console.
 */
export function buildAlternates(
  path: string,
  locale: string,
): Metadata['alternates'] {
  const cleanPath = path && path !== '/' ? path : '';

  const esUrl = `${SITE.url}/es${cleanPath}`;
  const zhUrl = `${SITE.url}/zh${cleanPath}`;
  const enUrl = `${SITE.url}/en${cleanPath}`;

  const selfUrl = locale === 'zh' ? zhUrl : locale === 'en' ? enUrl : esUrl;

  return {
    canonical: selfUrl,
    languages: {
      es: esUrl,
      zh: zhUrl,
      en: enUrl,
      // Attraction is in Guadalajara, Mexico → Spanish page is the fallback.
      'x-default': esUrl,
    },
  };
}
