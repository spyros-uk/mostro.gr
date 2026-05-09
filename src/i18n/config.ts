import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import elUi from '../locales/el-ui.json';
import { elBoatsNested } from '../locales/el-boats-data';

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      el: { translation: { ...elUi, boats: elBoatsNested } },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'el'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'mostro.i18n.lang',
    },
    react: { useSuspense: false },
  });

export default i18n;
