import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getBoatBySlug, getRelatedBoats, type Boat } from '@/lib/boats';
import { jpegPathToWebp } from '@/lib/image-webp';
import { ImageGallery } from '@/components/image-gallery';
import { SocialShare } from '@/components/social-share';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useLocalizedBoat } from '@/hooks/use-localized-boat';
import {
  ArrowLeft,
  Users,
  Gauge,
  Ruler,
  Scale,
  Fuel,
  Shield,
  Anchor,
  ArrowRight,
} from 'lucide-react';

function RelatedBoatCard({ boat }: { boat: Boat }) {
  const b = useLocalizedBoat(boat);
  return (
    <Link to={`/boats/${b.slug}/`}>
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <picture className="absolute inset-0 block h-full w-full">
            <source srcSet={jpegPathToWebp(boat.image)} type="image/webp" />
            <img
              src={boat.image}
              alt={b.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              width={800}
              height={600}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </picture>
          <div className="absolute top-3 right-3">
            <Badge className="bg-accent text-accent-foreground">{b.length}m</Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold">{b.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{b.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

function BoatPageNotFound() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('boatDetail.notFoundMeta');
  }, [t, i18n.language]);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">{t('boatDetail.notFoundTitle')}</h1>
        <p className="text-muted-foreground mb-8">{t('boatDetail.notFoundBody')}</p>
        <Link to="/#boats">
          <Button>{t('boatDetail.backAll')}</Button>
        </Link>
      </div>
    </main>
  );
}

function BoatPageDetail({ boat }: { boat: Boat }) {
  const { t, i18n } = useTranslation();
  const lb = useLocalizedBoat(boat);
  const relatedBoats = getRelatedBoats(boat);
  const baseUrl = import.meta.env.VITE_BASE_URL || window.location.origin;
  const boatUrl = `${baseUrl}/boats/${boat.slug}/`;

  useEffect(() => {
    document.title = `${lb.name} | ${t('boatDetail.titleSuffix')}`;
  }, [lb.name, t, i18n.language]);

  return (
    <main className="min-h-screen bg-background">
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <Link to="/#boats">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t('boatDetail.backToBoats')}
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <ImageGallery images={boat.gallery} alt={lb.name} />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{lb.categoryLabel}</Badge>
                <Badge className="bg-accent text-accent-foreground">{lb.length}m</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{lb.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{lb.description}</p>
            </div>

            <SocialShare
              url={boatUrl}
              title={`${lb.name} — ${t('boatDetail.titleSuffix')}`}
              description={lb.description}
            />

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">{t('boatDetail.passengers')}</p>
                  <p className="font-semibold">{boat.passengers}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Gauge className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">{t('boatDetail.engine')}</p>
                  <p className="font-semibold">{lb.engine}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">{t('boatDetail.specifications')}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2.5 p-3 border rounded-lg">
                  <Ruler className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{t('boatDetail.specLength')}</p>
                    <p className="font-medium text-sm truncate">{lb.specs.length}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 border rounded-lg">
                  <Anchor className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{t('boatDetail.specBeam')}</p>
                    <p className="font-medium text-sm truncate">{lb.specs.beam}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 border rounded-lg">
                  <Scale className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{t('boatDetail.specWeight')}</p>
                    <p className="font-medium text-sm truncate">{lb.specs.weight}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 border rounded-lg">
                  <Gauge className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{t('boatDetail.specMaxPower')}</p>
                    <p className="font-medium text-sm truncate">{lb.specs.maxPower}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 border rounded-lg">
                  <Fuel className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{t('boatDetail.specFuel')}</p>
                    <p className="font-medium text-sm truncate">{lb.specs.fuelCapacity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 border rounded-lg">
                  <Shield className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{t('boatDetail.specCert')}</p>
                    <p className="font-medium text-sm truncate">{lb.specs.certification}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">{t('boatDetail.features')}</h2>
              <div className="flex flex-wrap gap-2">
                {lb.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="py-1.5 px-3">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link to="/#contact">
                <Button size="lg" className="w-full md:w-auto gap-2">
                  {t('boatDetail.requestInfo')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {relatedBoats.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="text-2xl font-bold mb-6">
              {t('boatDetail.moreFromSeries', { series: lb.categoryLabel })}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBoats.map((relatedBoat) => (
                <RelatedBoatCard key={relatedBoat.id} boat={relatedBoat} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export function BoatPage() {
  const { slug = '' } = useParams();
  const boat = getBoatBySlug(slug);

  if (!boat) {
    return <BoatPageNotFound />;
  }

  return <BoatPageDetail boat={boat} />;
}
