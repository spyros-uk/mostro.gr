'use client';

import { BoatsSection } from '@/components/boats-section';
import { ContactSection } from '@/components/contact-section';

/** Single client island so Radix/Tailwind for boats + contact ship in one lazy chunk (fewer render-blocking CSS files). */
export function HomeBelowHero() {
  return (
    <>
      <BoatsSection />
      <ContactSection />
    </>
  );
}
