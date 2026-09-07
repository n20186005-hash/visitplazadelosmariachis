'use client';

import { useLocale, useTranslations } from 'next-intl';
import { SITE } from '@/config/site';

/**
 * Geographic breadcrumb / attribution chain:
 *   Plaza de los Mariachis → Guadalajara → Jalisco → Mexico
 * Reinforces the full-name + city + region + country entity hierarchy.
 */
export default function Breadcrumbs() {
  const t = useTranslations('header');
  const locale = useLocale();

  const crumbs: Array<{ label: string; href?: string }> = [
    { label: t('home'), href: `/${locale}` },
    { label: SITE.fullName, href: `/${locale}/#top` },
    { label: SITE.city },
    { label: SITE.state },
    { label: SITE.country },
  ];

  return (
    <nav aria-label="Breadcrumb" className="mb-6 -mt-2">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[13px]">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={i} className="flex items-center gap-x-1.5">
              {i > 0 && (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              )}
              {crumb.href && !isLast ? (
                <a
                  href={crumb.href}
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {crumb.label}
                </a>
              ) : (
                <span
                  style={{ color: isLast ? 'var(--text-primary)' : 'var(--text-muted)' }}
                  className={isLast ? 'font-medium' : undefined}
                >
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
