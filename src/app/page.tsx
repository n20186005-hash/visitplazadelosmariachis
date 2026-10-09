import type { Metadata } from 'next';
import { SITE } from '@/config/site';

/**
 * `/` is not a language landing page: it exists only as a fallback handoff to
 * the Spanish edition (`/es`), which is the default locale of this attraction
 * guide. Production host/path redirects are enforced in `src/worker.ts`.
 *
 * It is excluded from indexing and its canonical points at `/es`, so search
 * engines consolidate every signal on the language page instead of keeping two
 * competing URLs for the same content (GSC previously showed both `/` and `/es`
 * appearing separately in search results).
 */
export const metadata: Metadata = {
  title: `${SITE.fullName} · ${SITE.city}`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${SITE.url}/es`,
  },
};

export default function RootPage() {
  return (
    <html lang="es">
      <head>
        <meta httpEquiv="refresh" content="0; url=/es" />
        <link rel="canonical" href={`${SITE.url}/es`} />
        <meta name="robots" content="noindex, follow" />
      </head>
      <body
        style={{
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: '#234d5c',
          color: '#ffffff',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <a href="/es" style={{ color: '#ffffff', fontSize: '1.125rem' }}>
          {SITE.fullName} — {SITE.city}, {SITE.state}
        </a>
        <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/es');" }} />
      </body>
    </html>
  );
}
