import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { BoatsSection } from '@/components/boats-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BoatsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
