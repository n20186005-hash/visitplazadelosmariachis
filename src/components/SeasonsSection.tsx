'use client';

import { useTranslations, useMessages } from 'next-intl';

interface SeasonRow {
  months: string;
  weather: string;
  crowds: string;
  advice: string;
}

export default function SeasonsSection() {
  const t = useTranslations('seasons');
  const messages = useMessages() as any;
  const cols: string[] = messages?.seasons?.cols || [];
  const rows: SeasonRow[] = messages?.seasons?.rows || [];

  return (
    <section id="seasons" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border-color)' }}>
          <table className="w-full min-w-[860px] border-collapse text-sm">
            <thead>
              <tr style={{ background: 'var(--bg-tertiary)' }}>
                {cols.map((col, i) => (
                  <th
                    key={i}
                    className="text-left font-medium px-5 py-4"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{ borderTop: '1px solid var(--border-color)' }}>
                  <td className="px-5 py-5 align-top font-semibold whitespace-nowrap" style={{ color: 'var(--accent)' }}>
                    {row.months}
                  </td>
                  <td className="px-5 py-5 align-top" style={{ color: 'var(--text-secondary)' }}>
                    {row.weather}
                  </td>
                  <td className="px-5 py-5 align-top" style={{ color: 'var(--text-secondary)' }}>
                    {row.crowds}
                  </td>
                  <td className="px-5 py-5 align-top" style={{ color: 'var(--text-secondary)' }}>
                    {row.advice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
