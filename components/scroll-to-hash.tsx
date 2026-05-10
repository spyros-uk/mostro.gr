'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Next.js client navigations do not scroll to in-document hash targets like native
 * full-page loads. Retry briefly so lazy sections can mount.
 */
export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (!hash || hash === '#') return;

    const anchorId = decodeURIComponent(hash.slice(1));
    if (!anchorId) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let attempts = 0;
    const maxAttempts = 50;

    const clear = () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
      }
    };

    const tick = () => {
      if (cancelled) return;
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) {
        timeoutId = setTimeout(tick, 80);
      }
    };

    timeoutId = setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(tick);
      });
    }, 0);

    return () => {
      cancelled = true;
      clear();
    };
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      const h = window.location.hash;
      if (!h || h === '#') return;
      const anchorId = decodeURIComponent(h.slice(1));
      if (!anchorId) return;
      let attempts = 0;
      const maxAttempts = 40;
      const tick = () => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        attempts += 1;
        if (attempts < maxAttempts) {
          setTimeout(tick, 80);
        }
      };
      requestAnimationFrame(() => requestAnimationFrame(tick));
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return null;
}
