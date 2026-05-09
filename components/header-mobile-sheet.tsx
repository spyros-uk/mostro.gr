'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu } from 'lucide-react';
import { SITE_NAV_LINKS } from '@/lib/site-nav';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from '@/components/language-switcher';

export function HeaderMobileSheet() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">{t('mobileMenu.openMenu')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs px-6">
        <div className="flex flex-col gap-6 mt-8 pr-2">
          <LanguageSwitcher className="self-start" />
          {SITE_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={`/${link.href}`}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-foreground hover:text-accent transition-colors"
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <Button asChild className="mt-4">
            <Link to="/#contact" onClick={() => setOpen(false)}>
              {t('nav.quote')}
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
