'use client';

import { useTranslations, useMessages } from 'next-intl';

interface Plan {
  id: string;
  title: string;
  suitable: string;
  points: string[];
  tip: string;
}

export default function VisitPlansSection() {
  const t = useTranslations('visitPlans');
  const messages = useMessages() as any;
  const plans: Plan[] = messages?.visitPlans?.plans || [];
  const halfItems: string[] = messages?.visitPlans?.half?.items || [];
  const fullItems: string[] = messages?.visitPlans?.full?.items || [];

  return (
    <section id="plans" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        {/* By traveller type */}
        <h3 className="font-display text-xl sm:text-2xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
          {t('audienceTitle')}
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="rounded-xl p-6 flex flex-col"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <h4 className="font-display text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                {plan.title}
              </h4>
              <p className="text-sm mb-4" style={{ color: 'var(--accent)' }}>{plan.suitable}</p>
              <ol className="space-y-3 text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                {plan.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 font-semibold" style={{ color: 'var(--accent)' }}>{i + 1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-5 rounded-lg px-4 py-3 text-xs leading-relaxed" style={{ background: 'var(--bg-primary)', color: 'var(--text-muted)' }}>
                {plan.tip}
              </div>
            </article>
          ))}
        </div>

        {/* General half / full day */}
        <h3 className="font-display text-xl sm:text-2xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
          {t('generalTitle')}
        </h3>
        <p className="mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>{t('generalNote')}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {[
            { label: t('half.label'), items: halfItems },
            { label: t('full.label'), items: fullItems },
          ].map((group, gi) => (
            <article
              key={gi}
              className="rounded-xl p-6 sm:p-7"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <p className="font-display font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
                {group.label}
              </p>
              <ol className="space-y-3.5 text-sm leading-relaxed">
                {group.items.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full flex items-center justify-center text-xs font-semibold"
                      style={{ background: 'var(--bg-primary)', color: 'var(--accent)' }}
                    >
                      {i + 1}
                    </span>
                    <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
