import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { SITE } from '@/config/site';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const baseUrl = SITE.url;

  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;
  const esUrl = `${baseUrl}/es`;

  let selfUrl = esUrl;
  if (locale === 'zh') selfUrl = zhUrl;
  else if (locale === 'en') selfUrl = enUrl;

  const localeMap: Record<string, string> = {
    'es': 'es_MX',
    'zh': 'zh_CN',
    'en': 'en_US',
  };

  const ogImageAlt = messages.meta?.ogImageAlt || `${SITE.fullName} in ${SITE.city}`;

  return {
    metadataBase: new URL(SITE.url),
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        'es': esUrl,
        'zh': zhUrl,
        'en': enUrl,
        'x-default': esUrl,
      } as Record<string, string>,
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: SITE.fullName,
      locale: localeMap[locale] || 'zh_CN',
      type: 'website',
      images: [
        {
          url: SITE.heroImageAbsolute,
          alt: ogImageAlt,
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const langMap: Record<string, string> = {
    'zh': 'zh-CN',
    'en': 'en',
    'es': 'es',
  };

  const gaSnippet = `(function () {
  try {
    function analyticsEnabled() {
      try {
        var raw = localStorage.getItem('cookiePrefs');
        if (!raw) return true;
        var prefs = JSON.parse(raw);
        return prefs.analytics !== false;
      } catch (e) { return true; }
    }
    if (!analyticsEnabled()) return;
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${SITE.ga4Id}', { anonymize_ip: true });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=${SITE.ga4Id}';
    document.head.appendChild(s);
  } catch (e) {}
})();`;

  return (
    <html lang={langMap[locale] || 'zh-CN'} suppressHydrationWarning>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* GA4 - G-HXM22WWPKP (consent-aware loader) */}
        <script dangerouslySetInnerHTML={{ __html: gaSnippet }} />
        {/* PWA meta & links */}
        <meta name="theme-color" content="#234d5c" />
        <meta name="application-name" content={SITE.fullName} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={SITE.fullName} />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preload" as="image" href={SITE.heroImage} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/icons/icon-512.png" />
      </head>
      <body className="min-h-screen">
        <ServiceWorkerRegistration />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
