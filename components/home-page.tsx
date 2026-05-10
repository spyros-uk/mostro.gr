'use client';

import { Suspense, lazy, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { AboutSection } from '@/components/about-section';
import { Footer } from '@/components/footer';
import { BoatsSectionSkeleton, ContactSectionSkeleton } from '@/components/home-section-fallbacks';

const HomeBelowHero = lazy(() =>
  import('@/components/home-below-hero').then((mod) => ({ default: mod.HomeBelowHero })),
);

function HomeDocumentMeta() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('meta.homeTitle');
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', t('meta.homeDescription'));
    }
  }, [t, i18n.language]);

  return null;
}

export function HomePage() {
  return (
    <main>
      <HomeDocumentMeta />
      <Header />
      <Hero />
      <Suspense
        fallback={
          <>
            <BoatsSectionSkeleton />
            <ContactSectionSkeleton />
          </>
        }
      >
        <HomeBelowHero />
      </Suspense>
      <AboutSection />
      <Footer />
    </main>
  );
}
