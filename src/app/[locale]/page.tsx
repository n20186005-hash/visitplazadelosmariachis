import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HistoryTimeline from '@/components/HistoryTimeline';
import RouteSection from '@/components/RouteSection';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import WeatherSection from '@/components/WeatherSection';
import SeasonsSection from '@/components/SeasonsSection';
import VisitPlansSection from '@/components/VisitPlansSection';
import KnowledgeSection from '@/components/KnowledgeSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import MapEmbed from '@/components/MapEmbed';
import Sources from '@/components/Sources';
import Footer from '@/components/Footer';
import { guideLabels, guides, guideSlugs } from '@/data/guides';
import { SITE } from '@/config/site';
import type { LocaleCode } from '@/config/site';

const LANG_MAP: Record<LocaleCode, string> = {
  zh: 'zh-CN',
  en: 'en',
  es: 'es',
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default;
  const code = (['zh', 'en', 'es'].includes(locale) ? locale : 'en') as LocaleCode;
  const shortName = SITE.shortNames[code];
  const langCode = LANG_MAP[code];
  const localeUrl = `${SITE.url}/${code}`;
  // Aliases used by schema.org alternateName (deduped, all supported languages)
  const attractionNames = Array.from(
    new Set([
      SITE.fullName,
      `${SITE.city} ${SITE.fullName}`,
      shortName,
      ...Object.values(SITE.shortNames),
    ]),
  );

  // ---- Structured data: TouristAttraction entity (schema.org / JSON-LD) ----
  const attractionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${localeUrl}#attraction`,
    name: SITE.fullName,
    alternateName: attractionNames,
    description: messages.meta?.description || `Comprehensive visitor guide to ${SITE.fullName} in ${SITE.city}, ${SITE.state}, ${SITE.country}.`,
    url: localeUrl,
    image: [SITE.heroImageAbsolute],
    inLanguage: langCode,
    mainEntityOfPage: localeUrl,
    isAccessibleForFree: true,
    priceRange: 'Free entry (mariachi songs paid separately)',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.googleRating,
      reviewCount: SITE.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.streetAddress,
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      postalCode: SITE.postalCode,
      addressCountry: SITE.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.latitude,
      longitude: SITE.longitude,
    },
    hasMap: SITE.mapsShareUrl,
    sameAs: [SITE.mapsShareUrl, SITE.govtTourismUrl],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.fullName,
    description: messages.meta?.description,
    inLanguage: langCode,
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${localeUrl}#webpage`,
    url: localeUrl,
    name: messages.meta?.title,
    description: messages.meta?.description,
    inLanguage: langCode,
    isPartOf: {
      '@id': `${SITE.url}/#website`,
    },
    about: {
      '@id': `${localeUrl}#attraction`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: SITE.heroImageAbsolute,
    },
  };

  // ---- Structured data: FAQPage (visible FAQ below mirrors this content) ----
  const faqItems = (messages.faq?.items || []) as Array<{ q: string; a: string }>;
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: langCode,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const renderJsonLd = (data: object) => ({ __html: JSON.stringify(data) });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={renderJsonLd(websiteJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={renderJsonLd(webPageJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={renderJsonLd(attractionJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={renderJsonLd(faqJsonLd)} />
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <HistoryTimeline />
        <RouteSection />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <FacilitiesSection />
        <WeatherSection locale={code} />
        <SeasonsSection />
        <VisitPlansSection />
        <KnowledgeSection />
        <section id="guides" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-5 font-display text-3xl font-semibold">{guideLabels[code].heading}</h2>
            <ul className="grid gap-4 md:grid-cols-3">
              {guideSlugs.map((slug) => (
                <li key={slug} className="rounded-lg border p-5" style={{ background: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
                  <a className="font-semibold underline underline-offset-4" href={`/${code}/guide/${slug}`}>{guides[code][slug].title}</a>
                  <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{guides[code][slug].summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <Gallery />
        <Reviews />
        <FAQ />
        <MapEmbed />
        <Sources />
      </main>
      <Footer />
    </>
  );
}
