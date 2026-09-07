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
    '@id': `${SITE.url}/#attraction`,
    name: SITE.fullName,
    alternateName: attractionNames,
    description: messages.meta?.description || `Comprehensive visitor guide to ${SITE.fullName} in ${SITE.city}, ${SITE.state}, ${SITE.country}.`,
    url: SITE.url,
    image: [SITE.heroImageAbsolute],
    isAccessibleForFree: true,
    priceRange: 'Free entry (mariachi songs paid separately)',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: Number(messages.hero?.rating) || 4.1,
      reviewCount: Number(String(messages.hero?.reviewCount ?? '').replace(/,/g, '')) || 12186,
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
