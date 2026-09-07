import { useLocale, useTranslations, useMessages } from 'next-intl';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE, mapsSearchUrl, type LocaleCode } from '@/config/site';

export default function Intro() {
  const t = useTranslations('intro');
  const tOff = useTranslations('officialManagement');
  const locale = useLocale();
  const code = (['zh', 'en', 'es'].includes(locale) ? locale : 'en') as LocaleCode;
  const messages = useMessages() as any;
  const items: string[] = messages?.intro?.visitGuide?.items || [];
  const alsoKnownAsItems: string[] = messages?.intro?.alsoKnownAs?.items || [];
  const nearbyLandmarks = SITE.nearbyLandmarks[code] || SITE.nearbyLandmarks.en;

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs />

        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        {/* Semantic lead: equates the short name with the official full name */}
        <p
          className="text-lg font-medium leading-relaxed mb-5"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('lead')}
        </p>

        <p
          className="text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {alsoKnownAsItems.map((keyword, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Semantic cluster: surrounding landmarks of the attraction */}
        <div
          className="mt-12 rounded-xl p-6 sm:p-8 border border-[var(--accent)]"
          style={{ background: 'var(--bg-tertiary)' }}
        >
          <h3
            className="font-display text-xl font-semibold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('nearbyTitle')}
          </h3>
          <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
            {t('nearbyLead')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {nearbyLandmarks.map((landmark, i) => (
              <a
                key={i}
                href={mapsSearchUrl(`${landmark.name}, ${SITE.city}, ${SITE.state}, ${SITE.country}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-opacity hover:opacity-80"
                style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
              >
                <span>{landmark.name}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-xl border border-[var(--accent)]" style={{ background: 'var(--bg-tertiary)' }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {tOff('title')}
          </h2>
          <div className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
            {tOff('text')}
          </div>
        </div>
      </div>
    </section>
  );
}
