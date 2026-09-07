'use client';

import { useTranslations, useMessages } from 'next-intl';

interface SourceItem {
  name: string;
  url: string;
  description: string;
}

/**
 * Sources / references section (E-E-A-T): links authoritative .gob and .org
 * resources used to compile this visitor guide.
 */
export default function Sources() {
  const t = useTranslations('sources');
  const messages = useMessages() as any;
  const items: SourceItem[] = messages?.sources?.items || [];

  return (
    <section
      id="sources"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
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
          {items.map((source, i) => (
            <a
              key={i}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl p-5 sm:p-6 transition-transform hover:-translate-y-0.5"
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="font-medium text-base sm:text-lg mb-1.5 leading-snug"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {source.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {source.description}
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0 mt-1.5"
                  style={{ color: 'var(--accent)' }}
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
