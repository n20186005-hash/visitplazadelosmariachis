'use client';

import { useTranslations, useMessages } from 'next-intl';

interface FaqItem {
  q: string;
  a: string;
}

/**
 * Visible FAQ block. Its content mirrors the FAQPage JSON-LD rendered in
 * the server layout, which is required for FAQ rich results.
 */
export default function FAQ() {
  const t = useTranslations('faq');
  const messages = useMessages() as any;
  const items: FaqItem[] = messages?.faq?.items || [];

  return (
    <section
      id="faq"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl overflow-hidden"
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
              }}
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 sm:px-6 py-4 sm:py-5 list-none">
                <span className="font-medium text-base sm:text-lg leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {item.q}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform group-open:rotate-45"
                  style={{ background: 'var(--bg-primary)', color: 'var(--accent)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 sm:px-6 pb-5">
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
