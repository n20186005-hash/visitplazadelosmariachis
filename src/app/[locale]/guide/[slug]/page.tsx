import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mapsSearchUrl, SITE, type LocaleCode } from '@/config/site';
import { guideLabels, guidePlaces, guides, guideSlugs } from '@/data/guides';
import { buildAlternates } from '@/lib/alternates';

type Props = { params: Promise<{ locale: LocaleCode; slug: string }> };

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

async function getGuide(params: Props['params']) {
  const { locale, slug } = await params;
  const guideSlug = guideSlugs.find((candidate) => candidate === slug);
  if (!guideSlug || !guides[locale]) notFound();
  return { locale, slug: guideSlug, guide: guides[locale][guideSlug] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug, guide } = await getGuide(params);
  const path = `/guide/${slug}`;
  return {
    title: guide.title,
    description: guide.summary,
    alternates: buildAlternates(path, locale),
    openGraph: {
      title: guide.title,
      description: guide.summary,
      url: `${SITE.url}/${locale}${path}`,
      siteName: SITE.fullName,
      type: 'article',
      locale: { es: 'es_MX', en: 'en_US', zh: 'zh_CN' }[locale],
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug, guide } = await getGuide(params);
  setRequestLocale(locale);
  const labels = guideLabels[locale];
  const place = guidePlaces[slug];
  const home = `/${locale}`;
  const url = `${SITE.url}${home}/guide/${slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: guide.title, description: guide.summary, inLanguage: locale, mainEntityOfPage: url, citation: place.source },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: SITE.fullName, item: SITE.url + home },
        { '@type': 'ListItem', position: 2, name: guide.title, item: url },
      ] },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <Header />
      <main>
        <div className="px-4 pb-12 pt-24 sm:px-6 sm:pb-16" style={{ background: '#234d5c', color: '#fff' }}>
          <div className="mx-auto max-w-4xl">
            <a href={home} className="text-sm underline underline-offset-4">{labels.back}</a>
            <h1 className="mt-5 font-display text-3xl font-semibold sm:text-5xl">{guide.title}</h1>
            <p className="mt-4 max-w-3xl text-lg">{guide.summary}</p>
          </div>
        </div>
        <article className="mx-auto max-w-4xl space-y-8 px-4 py-10 leading-relaxed sm:px-6" style={{ color: 'var(--text-primary)' }}>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{labels.about}</h2>
            <p>{guide.about}</p>
          </section>
          <section className="rounded-lg p-5" style={{ background: 'var(--bg-secondary)' }}>
            <h2 className="mb-2 font-display text-2xl font-semibold">{labels.location}</h2>
            <p>{guide.location}</p>
            <a className="mt-2 inline-block underline" href={mapsSearchUrl(place.mapQuery)}>{labels.map}</a>
          </section>
          {guide.sections.map(([heading, body]) => (
            <section key={heading}>
              <h2 className="mb-2 font-display text-2xl font-semibold">{heading}</h2>
              <p>{body}</p>
            </section>
          ))}
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{labels.faq}</h2>
            <h3 className="mb-1 font-semibold">{guide.faq[0]}</h3>
            <p>{guide.faq[1]}</p>
          </section>
          <p><a className="underline" href={place.source}>{labels.source}</a></p>
          <nav aria-label={labels.heading}>
            <h2 className="mb-2 font-display text-2xl font-semibold">{labels.heading}</h2>
            <ul className="list-disc space-y-2 pl-6">
              {guideSlugs.filter((other) => other !== slug).map((other) => (
                <li key={other}><a className="underline" href={`${home}/guide/${other}`}>{guides[locale][other].title}</a></li>
              ))}
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
