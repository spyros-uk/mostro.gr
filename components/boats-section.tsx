'use client';

import { useState, useMemo } from 'react';
import { boats, type BoatCategory } from '@/lib/boats';
import { BoatFilters } from './boat-filters';
import { BoatCard } from './boat-card';
import { SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function BoatsSection() {
  const [selectedCategory, setSelectedCategory] = useState<BoatCategory | 'all'>('all');
  const [lengthRange, setLengthRange] = useState<[number, number]>([2, 11]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredBoats = useMemo(() => {
    return boats.filter((boat) => {
      const categoryMatch = selectedCategory === 'all' || boat.category === selectedCategory;
      const lengthMatch = boat.length >= lengthRange[0] && boat.length <= lengthRange[1];
      return categoryMatch && lengthMatch;
    });
  }, [selectedCategory, lengthRange]);

  const hasActiveFilters = selectedCategory !== 'all' || lengthRange[0] !== 2 || lengthRange[1] !== 11;

  const clearFilters = () => {
    setSelectedCategory('all');
    setLengthRange([2, 11]);
  };

  return (
    <section id="boats" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-3">
            Our Collection
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Find Your Perfect Boat
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From compact 2m tenders to our luxurious 11m flagship, discover the RIB 
            that matches your Mediterranean dreams.
          </p>
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:block mb-10 p-6 bg-card rounded-xl border border-border">
          <BoatFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            lengthRange={lengthRange}
            onLengthChange={setLengthRange}
          />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {filteredBoats.length} boat{filteredBoats.length !== 1 ? 's' : ''} found
          </div>
          <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-accent" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh] rounded-t-xl px-6">
              <SheetHeader className="pr-2">
                <SheetTitle className="flex items-center justify-between">
                  <span>Filter Boats</span>
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear all
                    </Button>
                  )}
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 pr-2">
                <BoatFilters
                  selectedCategory={selectedCategory}
                  onCategoryChange={(cat) => {
                    setSelectedCategory(cat);
                  }}
                  lengthRange={lengthRange}
                  onLengthChange={setLengthRange}
                />
              </div>
              <div className="mt-8 pr-2">
                <Button className="w-full" onClick={() => setFiltersOpen(false)}>
                  Show {filteredBoats.length} Boats
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Results Count - Desktop */}
        <div className="hidden md:flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredBoats.length} of {boats.length} boats
          </p>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-2">
              <X className="w-3 h-3" />
              Clear filters
            </Button>
          )}
        </div>

        {/* Boat Grid */}
        {filteredBoats.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBoats.map((boat) => (
              <BoatCard key={boat.id} boat={boat} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">
              No boats match your filters
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
