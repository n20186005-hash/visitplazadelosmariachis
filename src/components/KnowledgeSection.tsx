'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function KnowledgeSection() {
  const t = useTranslations('science');
  const messages = useMessages() as any;
  const s = messages?.science;
  const cultureItems: string[] = s?.cultureItems || [];
  const legendItems: string[] = s?.legendItems || [];
  const responsibleItems: string[] = s?.responsibleItems || [];

  return (
    <section id="knowledge" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        {/* Narrative */}
        <div
          className="rounded-xl p-6 sm:p-8 mb-8 border border-[var(--accent)]"
          style={{ background: 'var(--bg-tertiary)' }}
        >
          <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: 'var(--text-primary)' }}>
            {s?.narrative}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          <article className="rounded-xl p-6 sm:p-7" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h3 className="font-display text-xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
              {t('cultureTitle')}
            </h3>
            <ul className="space-y-3.5 text-sm leading-relaxed">
              {cultureItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl p-6 sm:p-7" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h3 className="font-display text-xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
              {t('legendTitle')}
            </h3>
            <ul className="space-y-5 text-sm leading-relaxed">
              {legendItems.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 mt-0.5 font-display text-2xl leading-none" style={{ color: 'var(--accent)' }}>
                    "
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Visitor responsibility */}
        <div
          className="rounded-xl p-6 sm:p-8"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <h3 className="font-display text-xl sm:text-2xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
            {t('responsibleTitle')}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm leading-relaxed">
            {responsibleItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
