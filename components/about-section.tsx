import Image from 'next/image';
import { Award, Shield, Wrench, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Greek Craftsmanship',
    description: 'Each boat is handcrafted in Greece with precision and passion.',
  },
  {
    icon: Shield,
    title: '5-Year Warranty',
    description: 'Industry-leading warranty for complete peace of mind.',
  },
  {
    icon: Wrench,
    title: 'Expert Service',
    description: 'Dedicated after-sales support and maintenance services.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Personalized consultation to find your ideal vessel.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/lifestyle.jpg"
              alt="Family enjoying a day on a Mostro RIB"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-3">
                About Mostro
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Building Dreams for the Aegean Sea
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Since 2005, Mostro has been at the forefront of RIB manufacturing in Greece. 
                Our boats combine Italian design philosophy with Greek craftsmanship, 
                creating vessels perfectly suited for the unique conditions of the Mediterranean.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">13</p>
                <p className="text-sm text-muted-foreground">Models</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">2-11m</p>
                <p className="text-sm text-muted-foreground">Range</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
