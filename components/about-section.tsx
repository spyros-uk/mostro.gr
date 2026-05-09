'use client';

import { useTranslation } from 'react-i18next';
import { Award, Shield, Wrench, Heart } from 'lucide-react';

const FEATURE_KEYS = ['craft', 'warranty', 'service', 'focus'] as const;
const FEATURE_ICONS = [Award, Shield, Wrench, Heart] as const;

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <picture className="absolute inset-0 block h-full w-full">
              <source srcSet="/images/lifestyle.webp" type="image/webp" />
              <img
                src="/images/lifestyle.jpg"
                alt={t('about.lifestyleAlt')}
                className="h-full w-full object-cover"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-3">
                {t('about.kicker')}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                {t('about.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.body')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURE_KEYS.map((key, i) => {
                const Icon = FEATURE_ICONS[i];
                return (
                  <div key={key} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {t(`about.features.${key}.title`)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(`about.features.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">13</p>
                <p className="text-sm text-muted-foreground">{t('about.statsModels')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">2-11m</p>
                <p className="text-sm text-muted-foreground">{t('about.statsRange')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">{t('about.statsYears')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
