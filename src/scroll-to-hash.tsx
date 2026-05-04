import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router client navigations do not scroll to in-document targets like
 * native `<a href="#id">`. Retry briefly so lazy-loaded sections can mount.
 */
export function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
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
  }, [pathname, hash, key]);

  return null;
}
