'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LOCALES = [
  { code: 'en' as const, short: 'EN', label: 'English' },
  { code: 'el' as const, short: 'ΕΛ', label: 'Ελληνικά' },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n, t } = useTranslation();

  return (
    <div
      className={cn('inline-flex items-center rounded-md border border-border bg-background p-0.5', className)}
      role="group"
      aria-label={t('language.switcherAria')}
    >
      {LOCALES.map(({ code, short, label }) => {
        const active = i18n.language.startsWith(code);
        return (
          <Button
            key={code}
            type="button"
            variant="ghost"
            size="sm"
            aria-pressed={active}
            aria-label={label}
            className={cn(
              'h-8 px-2.5 text-xs font-semibold rounded-sm',
              active ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground',
            )}
            onClick={() => void i18n.changeLanguage(code)}
          >
            {short}
          </Button>
        );
      })}
    </div>
  );
}
