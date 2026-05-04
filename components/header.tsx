'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Anchor } from 'lucide-react';
import { SITE_NAV_LINKS } from '@/lib/site-nav';
import {
  RESET_BOAT_FILTERS_EVENT,
  RESET_BOAT_FILTERS_SESSION_KEY,
} from '@/lib/boat-filters-storage';
import { Button } from '@/components/ui/button';
import { HeaderMobileSheet } from '@/components/header-mobile-sheet';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === '/') {
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
      router.push('/');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
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

          <nav className="hidden md:flex items-center gap-8">
            {SITE_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </nav>

          <HeaderMobileSheet />
        </div>
      </div>
    </header>
  );
}
