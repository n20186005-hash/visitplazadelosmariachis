import { MetadataRoute } from 'next';
import { nearbySlugs } from '@/data/nearby';
import { guideSlugs } from '@/data/guides';
import { SITE } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const locales = ['zh', 'en', 'es'];
  const routes = ['', '/privacy-policy', '/terms-of-service', '/cookie-settings', ...guideSlugs.map((slug) => `/guide/${slug}`), ...nearbySlugs.map((slug) => `/nearby/${slug}`)];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.5,
      });
    }
  }

  return sitemap;
}
