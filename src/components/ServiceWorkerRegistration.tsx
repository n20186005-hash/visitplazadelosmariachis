'use client';

import { useEffect } from 'react';

/**
 * Registers the static service worker so the site behaves like a PWA
 * (installable + offline-first after first visit).
 */
export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    const register = () => {
      navigator.serviceWorker
        .register('/sw.js')
        .catch(() => {
          // Registration failures are non-critical; keep the site working.
        });
    };

    if (document.readyState === 'complete') {
      register();
    } else {
      window.addEventListener('load', register, { once: true });
    }

    return () => window.removeEventListener('load', register);
  }, []);

  return null;
}
