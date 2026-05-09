import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/** Keeps `<html lang>` in sync with the active locale (a11y + font shaping). */
export function HtmlLang() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language?.startsWith('el') ? 'el' : 'en';
    document.documentElement.lang = lang;
  }, [i18n.language]);

  return null;
}
