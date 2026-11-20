import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mapsSearchUrl, SITE, type LocaleCode } from '@/config/site';
import { managerName, nearbyLabels, nearbyPlaces, nearbyReviewUrl, nearbySlugs, tourismPlace } from '@/data/nearby';
import { nearbyPlanning } from '@/data/nearby-planning';
import { visitDetails } from '@/data/nearby-visit';
import { buildAlternates } from '@/lib/alternates';

type Props = { params: Promise<{ locale: LocaleCode; slug: string }> };

export function generateStaticParams() {
  return nearbySlugs.map((slug) => ({ slug }));
}

async function findPlace(params: Props['params']) {
  const { locale, slug } = await params;
  if (!Object.hasOwn(nearbyPlaces, slug) || !Object.hasOwn(nearbyLabels, locale)) notFound();
  return { locale, slug, place: nearbyPlaces[slug], labels: nearbyLabels[locale] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug, place } = await findPlace(params);
  const title = `${place.names[locale]} | Guadalajara`;
  return {
    title,
    description: place.body[locale].split(/(?<=\.) |(?<=。)/u, 2).join(locale === 'zh' ? '' : ' '),
    alternates: buildAlternates(`/nearby/${slug}`, locale),
    openGraph: {
      title,
      description: place.body[locale],
      url: `${SITE.url}/${locale}/nearby/${slug}`,
      images: [{ url: place.photo, alt: place.names[locale] }],
      type: 'article',
      siteName: SITE.fullName,
    },
  };
}

export default async function NearbyPage({ params }: Props) {
  const { locale, slug, place, labels } = await findPlace(params);
  setRequestLocale(locale);
  const home = `/${locale}`;
  const title = place.names[locale];
  const address = `${place.address}, Guadalajara, Jalisco`;
  const destination = `${place.names.es}, ${address}`;
  const map = mapsSearchUrl(destination);
  const reviews = nearbyReviewUrl(slug, map);
  const walking = 'https://www.google.com/maps/dir/?' + new URLSearchParams({
    api: '1', origin: 'Plaza de los Mariachis, Guadalajara, Jalisco', destination, travelmode: 'walking',
  });
  const transport = 'https://www.google.com/maps/dir/?' + new URLSearchParams({ api: '1', destination, travelmode: 'transit' });
  const source = tourismPlace + slug;
  const visitSource = slug === 'museo-regional-de-guadalajara' ? 'https://www.inah.gob.mx/museos/museo-regional-de-guadalajara'
    : slug === 'museo-cabanas' ? 'https://sic.gob.mx/ficha.php?table=museo&table_id=1027'
    : slug === 'palacio-de-las-vacas' ? 'https://www.palaciodelasvacas.com.mx/' : source;
  const url = `${SITE.url}${home}/nearby/${slug}`;
  const management = managerName(place.manager, locale);
  const [history, ...visit] = place.body[locale].split(locale === 'zh' ? /(?<=。)/u : /(?<=\.)\s+/u);
  const content = visit.join(locale === 'zh' ? '' : ' ');
  const [question, answer] = place.faq[locale];
  const details = visitDetails(slug, place, locale);
  const copy = details.labels;
  const planning = nearbyPlanning(slug, locale);
  const stationWalk = planning.station ? 'https://www.google.com/maps/dir/?' + new URLSearchParams({
    api: '1', origin: `Estación ${planning.station}, Guadalajara, Jalisco`, destination, travelmode: 'walking',
  }) : undefined;
  const facts = [
    [labels.address, address],
    ...(planning.cultural?.street ? [[planning.text.entrance, planning.cultural.street]] : []),
    [planning.text.district, planning.district],
    [copy.type, details.type],
    [copy.manager, management],
    [labels.accessInfo, details.hours.join(' · ') || details.hoursNote],
    [planning.text.duration, details.duration],
    ...(planning.station ? [[planning.text.station, `${planning.station} (${planning.lines})`]] : []),
  ];
  const nextStop = details.nextSlug ? nearbyPlaces[details.nextSlug] : undefined;
  const related = nearbySlugs.filter((neighbor) => neighbor !== slug);
  const position = nearbySlugs.indexOf(slug);
  const siblings = related.slice(Math.max(0, position - 2), Math.max(0, position - 2) + 3);
  const structured = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'TouristAttraction', name: title, description: history, url, image: place.photo, hasMap: map, address: { '@type': 'PostalAddress', streetAddress: place.address, addressLocality: 'Guadalajara', addressRegion: 'Jalisco', addressCountry: 'MX' }, sameAs: source },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: SITE.fullName, item: SITE.url + home },
        { '@type': 'ListItem', position: 2, name: title, item: url },
      ] },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\\u003c') }} />
      <Header />
      <main>
        <div className="relative isolate min-h-[25rem] px-4 pb-10 pt-24 text-white sm:px-6" style={{ background: '#234d5c' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={place.photo} alt={title} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" fetchPriority="high" />
          <div className="absolute inset-0 -z-10 bg-black/70" />
          <div className="mx-auto max-w-4xl">
            <a className="text-sm underline underline-offset-4" href={`${home}#nearby`}>{labels.heading}</a>
            <h1 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-lg">{place.tagline[locale]}</p>
            <ul className="mt-3 space-y-1 text-sm">
              <li><a className="underline" href={reviews}>{labels.readReviews}</a></li>
              <li>{details.hours.join(' · ') || details.hoursNote}</li>
            </ul>
            <a className="mt-5 inline-block rounded-md border border-white px-4 py-2" href={map}>{labels.map}</a>
          </div>
        </div>
        <article className="mx-auto max-w-4xl space-y-8 px-4 py-10 leading-relaxed sm:px-6" style={{ color: 'var(--text-primary)' }}>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{copy.intro}</h2>
            <p>{history}</p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{copy.plan}</h2>
            <p>{planning.plan}</p>
            <p className="mt-2">{details.duration}{locale === 'zh' ? '。' : '. '}{details.notes}</p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{copy.highlights}</h2>
            <p>{place.tagline[locale]}</p>
          </section>
          <section className="rounded-lg p-5" style={{ background: 'var(--bg-secondary)' }}>
            <h2 className="mb-2 font-display text-2xl font-semibold">{labels.about}</h2>
            <p>{labels.managerPrefix} <strong>{management}</strong></p>
            <p>{history}</p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{labels.basics}</h2>
            <dl className="divide-y rounded-lg border px-4" style={{ borderColor: 'var(--border-color)' }}>
              {facts.map(([label, value]) => (
                <div key={label} className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr]">
                  <dt className="font-semibold">{label}</dt><dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{copy.hours}</h2>
            {details.hours.length > 0 && <ul className="list-disc pl-6">{details.hours.map((time) => <li key={time}>{time}</li>)}</ul>}
            <p>{details.hoursNote} <a className="underline" href={visitSource}>{copy.hours}</a></p>
            {planning.cultural?.alternateHours && <p className="mt-2">{planning.cultural.alternateHours[locale]} {planning.text.scheduleDifference} <a className="underline" href={planning.cultural.url}>{planning.text.culturalDirectory}</a></p>}
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{copy.fees}</h2>
            <p>{planning.fee ?? details.fees}</p>
            {planning.cultural && <a className="mr-4 inline-block underline" href={planning.cultural.url}>{planning.text.culturalDirectory}</a>}
            <a className="underline" href={visitSource}>{copy.fees}</a>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{labels.transport}</h2>
            <p className="mb-2">{stationWalk ? planning.text.publicTransit : planning.text.transitOnly}</p>
            <ul className="list-disc pl-6">
              {stationWalk && <li><a className="underline" href={stationWalk}>{planning.text.stationWalk} · {planning.station} ({planning.lines})</a></li>}
              <li><a className="underline" href={walking}>{labels.walking}</a></li>
              <li><a className="underline" href={transport}>{labels.transit}</a></li>
              <li><a className="underline" href="https://www.siteur.gob.mx/">{labels.train}</a></li>
            </ul>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{copy.features}</h2>
            <p>{history}</p>
            <p className="mt-2">{content}</p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{copy.route}</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li><a className="underline" href={walking}>{copy.start}</a></li>
              <li>{planning.plan}</li>
              {nextStop && <li>{copy.end} <a className="underline" href={`${home}/nearby/${details.nextSlug}`}>{nextStop.names[locale]}</a></li>}
            </ol>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{copy.notes}</h2>
            <h3 className="font-semibold">{labels.faq}</h3>
            <p className="mt-1 font-medium">{question}</p>
            <p>{answer}</p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{copy.camera}</h2>
            <p>{place.camera[locale]}</p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{copy.lodging}</h2>
            <p>{details.lodging}</p>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{labels.reviews}</h2>
            <p className="mb-2">{planning.text.mapReviews}</p>
            <a className="underline" href={reviews}>{labels.readReviews}</a>
          </section>
          <section>
            <h2 className="mb-2 font-display text-2xl font-semibold">{copy.directions}</h2>
            <p>{address}</p>
            <a className="underline" href={map}>{labels.map}</a>
          </section>
          <p><a className="underline" href={source}>{labels.photo} · {labels.source}</a></p>
          <nav aria-label={labels.heading}>
            <h2 className="mb-2 font-display text-2xl font-semibold">{labels.heading}</h2>
            <ul className="list-disc pl-6">
              {siblings.map((neighbor) => (
                <li key={neighbor}><a className="underline" href={`${home}/nearby/${neighbor}`}>{nearbyPlaces[neighbor].names[locale]}</a></li>
              ))}
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
