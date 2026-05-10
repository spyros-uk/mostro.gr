/** Acknowledgement that the visitor has seen the essential-storage notice (not ad tracking). */
export const COOKIE_BANNER_STORAGE_KEY = 'mostro.cookieBanner';

export function isCookieBannerDismissed(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    return window.localStorage.getItem(COOKIE_BANNER_STORAGE_KEY) === '1';
  } catch {
    return true;
  }
}

export function dismissCookieBanner(): void {
  try {
    window.localStorage.setItem(COOKIE_BANNER_STORAGE_KEY, '1');
  } catch {
    /* ignore */
  }
}
