'use client';

import { useTranslation } from 'react-i18next';

/** Lightweight placeholders while below-the-fold client sections load. */
export function BoatsSectionSkeleton() {
  const { t } = useTranslation();

  return (
    <section
      id="boats"
      className="py-16 md:py-24 bg-background"
      aria-busy="true"
      aria-label={t('boatsSection.loadingBoatsAria')}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <div className="mx-auto h-4 w-32 rounded bg-muted animate-pulse" />
          <div className="mx-auto h-9 w-full max-w-md rounded bg-muted animate-pulse" />
          <div className="mx-auto h-16 max-w-xl rounded bg-muted animate-pulse" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            >
              <div className="aspect-[4/3] bg-muted animate-pulse" />
              <div className="space-y-3 p-5">
                <div className="h-5 w-full max-w-[12rem] rounded bg-muted animate-pulse" />
                <div className="h-10 rounded bg-muted animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSectionSkeleton() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="min-h-[520px] py-16 md:py-24 bg-background"
      aria-busy="true"
      aria-label={t('contact.loadingContactAria')}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
          <div className="mx-auto h-4 w-28 rounded bg-muted animate-pulse" />
          <div className="mx-auto h-9 w-full max-w-sm rounded bg-muted animate-pulse" />
        </div>
        <div className="mx-auto max-w-2xl space-y-4 rounded-xl border border-border bg-card p-8">
          <div className="h-10 rounded bg-muted animate-pulse" />
          <div className="h-10 rounded bg-muted animate-pulse" />
          <div className="h-32 rounded bg-muted animate-pulse" />
        </div>
      </div>
    </section>
  );
}
