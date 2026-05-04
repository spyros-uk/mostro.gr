import dynamic from 'next/dynamic';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { AboutSection } from '@/components/about-section';
import { Footer } from '@/components/footer';
import { BoatsSectionSkeleton, ContactSectionSkeleton } from '@/components/home-section-fallbacks';

const HomeBelowHero = dynamic(
  () => import('@/components/home-below-hero').then((mod) => ({ default: mod.HomeBelowHero })),
  {
    loading: () => (
      <>
        <BoatsSectionSkeleton />
        <ContactSectionSkeleton />
      </>
    ),
  },
);

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HomeBelowHero />
      <AboutSection />
      <Footer />
    </main>
  );
}
