'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { jpegPathToWebp } from '@/lib/image-webp';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

function SlidePicture({
  jpeg,
  alt,
  objectClass,
  priority,
}: {
  jpeg: string;
  alt: string;
  objectClass: 'object-cover' | 'object-contain';
  priority?: boolean;
}) {
  const webp = jpegPathToWebp(jpeg);
  return (
    <picture className="absolute inset-0 block h-full w-full">
      <source srcSet={webp} type="image/webp" />
      <img
        src={jpeg}
        alt={alt}
        className={cn('h-full w-full', objectClass)}
        width={1600}
        height={1000}
        sizes="(max-width: 768px) 100vw, 50vw"
        decoding="async"
        fetchPriority={priority ? 'high' : 'low'}
      />
    </picture>
  );
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!lightboxOpen || images.length <= 1) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else {
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxOpen, images.length]);

  return (
    <div className="space-y-4">
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-muted group">
          <SlidePicture
            jpeg={images[selectedIndex]}
            alt={`${alt} - Image ${selectedIndex + 1}`}
            objectClass="object-cover"
            priority
          />

          <button
            type="button"
            aria-label="View image full screen"
            className="absolute inset-0 z-[5] hidden cursor-zoom-in border-0 bg-transparent p-0 md:block"
            onClick={() => setLightboxOpen(true)}
          />

          {images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 md:hidden h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 md:hidden h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}

          <div className="pointer-events-none absolute bottom-3 right-3 z-10 bg-background/80 px-2.5 py-1 text-xs font-medium backdrop-blur-sm rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>

        <DialogContent
          showCloseButton
          className={cn(
            'fixed inset-0 left-0 top-0 z-50 flex h-[100dvh] max-h-[100dvh] w-screen max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none border-0 bg-black p-0 shadow-none sm:max-w-none',
            'data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100',
            '[&_[data-slot=dialog-close]]:text-white [&_[data-slot=dialog-close]]:hover:bg-white/10',
          )}
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">
            {alt} — image {selectedIndex + 1} of {images.length}
          </DialogTitle>

          <div className="relative flex min-h-0 flex-1 items-center justify-center p-4 pt-14">
            <div className="relative h-full w-full max-h-[calc(100dvh-6rem)] max-w-[100vw]">
              <SlidePicture
                jpeg={images[selectedIndex]}
                alt={`${alt} - Image ${selectedIndex + 1}`}
                objectClass="object-contain"
              />
            </div>

            {images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full bg-background/90 text-foreground backdrop-blur-sm md:left-4 md:h-12 md:w-12"
                  onClick={handlePrevious}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 rounded-full bg-background/90 text-foreground backdrop-blur-sm md:right-4 md:h-12 md:w-12"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={cn(
                'relative h-16 w-20 shrink-0 overflow-hidden rounded-lg transition-all md:h-20 md:w-24',
                selectedIndex === index
                  ? 'ring-2 ring-primary ring-offset-2'
                  : 'opacity-70 hover:opacity-100',
              )}
              aria-label={`View image ${index + 1}`}
            >
              <picture className="absolute inset-0 block h-full w-full">
                <source srcSet={jpegPathToWebp(image)} type="image/webp" />
                <img
                  src={image}
                  alt={`${alt} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  width={96}
                  height={80}
                  sizes="96px"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
