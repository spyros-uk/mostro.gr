import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { boats, getBoatBySlug, getRelatedBoats, categories } from '@/lib/boats';
import { jpegPathToWebp } from '@/lib/image-webp';
import { ImageGallery } from '@/components/image-gallery';
import { SocialShare } from '@/components/social-share';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Users, Gauge, Ruler, Scale, Fuel, Shield, Anchor, ArrowRight } from 'lucide-react';

export function BoatPage() {
  const { slug = '' } = useParams();
  const boat = getBoatBySlug(slug);

  useEffect(() => {
    document.title = boat ? `${boat.name} | Mostro RIBs` : 'Boat Not Found | Mostro RIBs';
  }, [boat]);

  if (!boat) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Boat not found</h1>
          <p className="text-muted-foreground mb-8">The model you requested does not exist.</p>
          <Link to="/#boats">
            <Button>Back to all boats</Button>
          </Link>
        </div>
      </main>
    );
  }

  const relatedBoats = getRelatedBoats(boat);
  const categoryLabel = categories.find((c) => c.value === boat.category)?.label;
  const baseUrl = import.meta.env.VITE_BASE_URL || window.location.origin;
  const boatUrl = `${baseUrl}/boats/${boat.slug}/`;

  return (
    <main className="min-h-screen bg-background">
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <Link to="/#boats">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to All Boats
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <ImageGallery images={boat.gallery} alt={boat.name} />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{categoryLabel}</Badge>
                <Badge className="bg-accent text-accent-foreground">{boat.length}m</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{boat.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{boat.description}</p>
            </div>

            <SocialShare url={boatUrl} title={`${boat.name} - Mostro RIBs`} description={boat.description} />

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Passengers</p>
                  <p className="font-semibold">{boat.passengers}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Gauge className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Engine</p>
                  <p className="font-semibold">{boat.engine}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Specifications</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2.5 p-3 border rounded-lg">
                  <Ruler className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Length</p>
                    <p className="font-medium text-sm truncate">{boat.specs.length}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 border rounded-lg">
                  <Anchor className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Beam</p>
                    <p className="font-medium text-sm truncate">{boat.specs.beam}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 border rounded-lg">
                  <Scale className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Weight</p>
                    <p className="font-medium text-sm truncate">{boat.specs.weight}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 border rounded-lg">
                  <Gauge className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Max Power</p>
                    <p className="font-medium text-sm truncate">{boat.specs.maxPower}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 border rounded-lg">
                  <Fuel className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Fuel</p>
                    <p className="font-medium text-sm truncate">{boat.specs.fuelCapacity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 border rounded-lg">
                  <Shield className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Certification</p>
                    <p className="font-medium text-sm truncate">{boat.specs.certification}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Features</h2>
              <div className="flex flex-wrap gap-2">
                {boat.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="py-1.5 px-3">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link to="/#contact">
                <Button size="lg" className="w-full md:w-auto gap-2">
                  Request Information
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {relatedBoats.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="text-2xl font-bold mb-6">More from {categoryLabel} Series</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBoats.map((relatedBoat) => (
                <Link key={relatedBoat.id} to={`/boats/${relatedBoat.slug}/`}>
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <picture className="absolute inset-0 block h-full w-full">
                        <source srcSet={jpegPathToWebp(relatedBoat.image)} type="image/webp" />
                        <img
                          src={relatedBoat.image}
                          alt={relatedBoat.name}
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
                        <Badge className="bg-accent text-accent-foreground">{relatedBoat.length}m</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{relatedBoat.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{relatedBoat.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
