import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import elUi from '../locales/el-ui.json';
import { elBoatsNested } from '../locales/el-boats-data';

export const I18N_LANG_STORAGE_KEY = 'mostro.i18n.lang';

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    el: { translation: { ...elUi, boats: elBoatsNested } },
  },
  // Must match static HTML so the first client paint hydrates cleanly; real locale applies in I18nClientLanguageSync after mount.
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'el'],
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (lng) => {
    const code = lng.startsWith('el') ? 'el' : 'en';
    localStorage.setItem(I18N_LANG_STORAGE_KEY, code);
  });
}

export default i18n;
