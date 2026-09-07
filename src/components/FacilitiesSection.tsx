'use client';

import { useTranslations, useMessages } from 'next-intl';

interface Facility {
  id: string;
  title: string;
  text: string;
}

const MARKS: Record<string, string> = {
  wc: 'WC',
  parking: 'P',
  fuel: 'E',
};

export default function FacilitiesSection() {
  const t = useTranslations('facilities');
  const messages = useMessages() as any;
  const items: Facility[] = messages?.facilities?.items || [];

  return (
    <section id="facilities" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-3" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <p className="mb-8 text-sm font-medium" style={{ color: 'var(--accent)' }}>{t('note')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-xl p-6 flex flex-col"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
                  style={{ background: 'var(--bg-primary)', color: 'var(--accent)' }}
                >
                  {MARKS[item.id] || item.title.slice(0, 1).toUpperCase()}
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
