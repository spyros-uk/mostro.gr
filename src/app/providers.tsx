'use client';

import '@/src/i18n/config';
import { HtmlLang } from '@/src/i18n/html-lang';
import { I18nClientLanguageSync } from '@/src/i18n/client-language-sync';
import { ScrollToHash } from '@/components/scroll-to-hash';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLang />
      <I18nClientLanguageSync />
      <ScrollToHash />
      {children}
    </>
  );
}
