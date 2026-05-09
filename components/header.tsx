'use client';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Anchor } from 'lucide-react';
import { SITE_NAV_LINKS } from '@/lib/site-nav';
import {
  RESET_BOAT_FILTERS_EVENT,
  RESET_BOAT_FILTERS_SESSION_KEY,
} from '@/lib/boat-filters-storage';
import { Button } from '@/components/ui/button';
import { HeaderMobileSheet } from '@/components/header-mobile-sheet';
import { LanguageSwitcher } from '@/components/language-switcher';

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      try {
        sessionStorage.removeItem(RESET_BOAT_FILTERS_SESSION_KEY);
      } catch {
        /* ignore */
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent(RESET_BOAT_FILTERS_EVENT));
    } else {
      try {
        sessionStorage.setItem(RESET_BOAT_FILTERS_SESSION_KEY, '1');
      } catch {
        /* ignore */
      }
      navigate('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Anchor className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              mostro<span className="text-accent">.gr</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {SITE_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={`/${link.href}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <LanguageSwitcher className="shrink-0" />
            <Button asChild>
              <Link to="/#contact">{t('nav.quote')}</Link>
            </Button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher className="shrink-0" />
            <HeaderMobileSheet />
          </div>
        </div>
      </div>
    </header>
  );
}
