'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { dismissCookieBanner, isCookieBannerDismissed } from '@/lib/cookie-banner-storage';

/**
 * Minimal transparency bar: this site stores only essential preferences on your device
 * (language, boat filters). Dismissal is remembered in localStorage under the same key
 * namespace — see /cookies for details.
 */
export function CookieNotice() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!isCookieBannerDismissed());
  }, []);

  const acknowledge = () => {
    dismissCookieBanner();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-border bg-card/95 backdrop-blur-md shadow-lg"
      role="dialog"
      aria-label={t('cookieBanner.aria')}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm text-muted-foreground leading-relaxed sm:max-w-[70%]">
          {t('cookieBanner.message')}{' '}
          <Link to="/cookies" className="font-medium text-primary underline-offset-4 hover:underline">
            {t('cookieBanner.learnMore')}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2 sm:justify-end">
          <Button size="sm" onClick={acknowledge}>
            {t('cookieBanner.ok')}
          </Button>
        </div>
      </div>
    </div>
  );
}
