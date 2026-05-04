'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { SITE_NAV_LINKS } from '@/lib/site-nav';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function HeaderMobileSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs px-6">
        <div className="flex flex-col gap-6 mt-8 pr-2">
          {SITE_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-4">
            <Link href="#contact" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
