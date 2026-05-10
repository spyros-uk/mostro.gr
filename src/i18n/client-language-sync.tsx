'use client';

import { useEffect } from 'react';
import i18n, { I18N_LANG_STORAGE_KEY } from '@/src/i18n/config';

function normalizeLang(raw: string | null): 'en' | 'el' | null {
  if (!raw) return null;
  const base = raw.replace('_', '-').split('-')[0]?.toLowerCase();
  if (base === 'el') return 'el';
  if (base === 'en') return 'en';
  return null;
}

function detectFromNavigator(): 'en' | 'el' | null {
  if (typeof navigator === 'undefined') return null;
  const list = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const raw of list) {
    const n = normalizeLang(raw);
    if (n) return n;
  }
  return null;
}

function languageMatchesDesired(current: string, desired: 'en' | 'el') {
  return desired === 'el' ? current.startsWith('el') : current.startsWith('en');
}

/** Applies stored / browser locale after mount so the first client render matches SSG (en). */
export function I18nClientLanguageSync() {
  useEffect(() => {
    const fromStorage = normalizeLang(localStorage.getItem(I18N_LANG_STORAGE_KEY));
    const fromNav = detectFromNavigator();
    const fromHtml = normalizeLang(document.documentElement.lang);

    const target = fromStorage ?? fromNav ?? fromHtml;
    if (target && !languageMatchesDesired(i18n.language, target)) {
      void i18n.changeLanguage(target);
    }
  }, []);

  return null;
}
