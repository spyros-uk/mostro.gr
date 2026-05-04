import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/hero-boat-mobile.webp"
            type="image/webp"
          />
          <source srcSet="/images/hero-boat.webp" type="image/webp" />
          <img
            src="/images/hero-boat.jpg"
            alt="Sport Rigid Inflatable Boat cruising in the Mediterranean"
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1280}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-primary-foreground/80 text-sm md:text-base uppercase tracking-[0.3em] font-medium">
            Premium RIBs Since 2005
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight text-balance">
            Live the Experience
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
            Holidays at Sea
          </p>
          <p className="text-primary-foreground/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Discover our collection of 13 premium Sport Rigid Inflatable Boats,
            crafted for the Aegean Sea. From compact tenders to luxury cruisers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild className="text-base">
              <Link href="#boats">Explore Our Boats</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#boats" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
          <ChevronDown className="w-8 h-8" />
          <span className="sr-only">Scroll to boats</span>
        </Link>
      </div>
    </section>
  );
}
