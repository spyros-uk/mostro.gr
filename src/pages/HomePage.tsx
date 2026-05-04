import { Suspense, lazy } from 'react';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { AboutSection } from '@/components/about-section';
import { Footer } from '@/components/footer';
import { BoatsSectionSkeleton, ContactSectionSkeleton } from '@/components/home-section-fallbacks';

const HomeBelowHero = lazy(() =>
  import('@/components/home-below-hero').then((mod) => ({ default: mod.HomeBelowHero })),
);

export function HomePage() {
  return (
    <main>
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
