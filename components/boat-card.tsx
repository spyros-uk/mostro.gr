'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { type Boat, categories } from '@/lib/boats';
import { jpegPathToWebp } from '@/lib/image-webp';
import { Users, Gauge, ArrowRight } from 'lucide-react';

interface BoatCardProps {
  boat: Boat;
}

export function BoatCard({ boat }: BoatCardProps) {
  const categoryLabel = categories.find((c) => c.value === boat.category)?.label;
  const webpSrc = jpegPathToWebp(boat.image);

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <Link href={`/boats/${boat.slug}/`} prefetch={false}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <img
              src={boat.image}
              alt={boat.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              width={800}
              height={600}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </picture>
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              {categoryLabel}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge className="bg-accent text-accent-foreground">
              {boat.length}m
            </Badge>
          </div>
        </div>
      </Link>
      <CardContent className="p-5 space-y-4">
        <div>
          <Link href={`/boats/${boat.slug}/`} prefetch={false}>
            <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
              {boat.name}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {boat.description}
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{boat.passengers} passengers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge className="w-4 h-4" />
            <span>{boat.engine}</span>
          </div>
        </div>

        <Link href={`/boats/${boat.slug}/`} prefetch={false}>
          <Button
            variant="ghost"
            className="w-full justify-between group/btn hover:bg-primary hover:text-primary-foreground"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
