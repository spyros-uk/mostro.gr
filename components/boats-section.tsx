'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  boats,
  getSliderLengthRangeForCategory,
  SLIDER_LENGTH_GLOBAL,
  type BoatCategory,
} from '@/lib/boats';
import {
  readStoredBoatFilters,
  writeStoredBoatFilters,
  RESET_BOAT_FILTERS_EVENT,
  RESET_BOAT_FILTERS_SESSION_KEY,
} from '@/lib/boat-filters-storage';
import { BoatFilters } from './boat-filters';
import { BoatCard } from './boat-card';
import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function BoatsSection() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<BoatCategory | 'all'>('all');
  const [lengthRange, setLengthRange] = useState<[number, number]>(SLIDER_LENGTH_GLOBAL);
  const [lengthManual, setLengthManual] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filtersHydrated, setFiltersHydrated] = useState(false);

  const resetFiltersToDefaults = useCallback(() => {
    setSelectedCategory('all');
    setLengthRange(SLIDER_LENGTH_GLOBAL);
    setLengthManual(false);
    setFiltersOpen(false);
    writeStoredBoatFilters({
      selectedCategory: 'all',
      lengthRange: SLIDER_LENGTH_GLOBAL,
      lengthManual: false,
    });
  }, []);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      sessionStorage.getItem(RESET_BOAT_FILTERS_SESSION_KEY) === '1'
    ) {
      sessionStorage.removeItem(RESET_BOAT_FILTERS_SESSION_KEY);
      setSelectedCategory('all');
      setLengthRange(SLIDER_LENGTH_GLOBAL);
      setLengthManual(false);
      setFiltersOpen(false);
      writeStoredBoatFilters({
        selectedCategory: 'all',
        lengthRange: SLIDER_LENGTH_GLOBAL,
        lengthManual: false,
      });
      window.scrollTo({ top: 0, behavior: 'instant' });
      setFiltersHydrated(true);
      return;
    }
    const stored = readStoredBoatFilters();
    if (stored) {
      setSelectedCategory(stored.selectedCategory);
      setLengthRange(stored.lengthRange);
      setLengthManual(stored.lengthManual ?? false);
    }
    setFiltersHydrated(true);
  }, []);

  useEffect(() => {
    const onReset = () => resetFiltersToDefaults();
    window.addEventListener(RESET_BOAT_FILTERS_EVENT, onReset);
    return () => window.removeEventListener(RESET_BOAT_FILTERS_EVENT, onReset);
  }, [resetFiltersToDefaults]);

  useEffect(() => {
    if (!filtersHydrated) return;
    writeStoredBoatFilters({ selectedCategory, lengthRange, lengthManual });
  }, [filtersHydrated, selectedCategory, lengthRange, lengthManual]);

  const handleCategoryChange = (cat: BoatCategory | 'all') => {
    if (cat !== 'all' && cat === selectedCategory) {
      setSelectedCategory('all');
      setLengthRange(SLIDER_LENGTH_GLOBAL);
      setLengthManual(false);
      return;
    }
    setSelectedCategory(cat);
    if (cat === 'all') {
      setLengthRange(SLIDER_LENGTH_GLOBAL);
      setLengthManual(false);
      return;
    }
    if (!lengthManual) {
      setLengthRange(getSliderLengthRangeForCategory(cat));
    }
  };

  const handleLengthChange = (range: [number, number]) => {
    setLengthRange(range);
    const [gMin, gMax] = SLIDER_LENGTH_GLOBAL;
    const isFullRange = range[0] === gMin && range[1] === gMax;
    setLengthManual(!isFullRange);
  };

  const filteredBoats = useMemo(() => {
    return boats.filter((boat) => {
      const categoryMatch = selectedCategory === 'all' || boat.category === selectedCategory;
      const lengthMatch = boat.length >= lengthRange[0] && boat.length <= lengthRange[1];
      return categoryMatch && lengthMatch;
    });
  }, [selectedCategory, lengthRange]);

  const [globalMin, globalMax] = SLIDER_LENGTH_GLOBAL;
  const hasActiveFilters =
    selectedCategory !== 'all' ||
    lengthRange[0] !== globalMin ||
    lengthRange[1] !== globalMax;

  const clearFilters = resetFiltersToDefaults;

  return (
    <section id="boats" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-3">
            {t('boatsSection.collection')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t('boatsSection.title')}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t('boatsSection.subtitle')}
          </p>
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:block mb-10 p-6 bg-card rounded-xl border border-border">
          <BoatFilters
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            lengthRange={lengthRange}
            onLengthChange={handleLengthChange}
            showClearInFilters
            hasActiveFilters={hasActiveFilters}
            onClearAll={clearFilters}
          />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {t('boatsSection.boatsFound', { count: filteredBoats.length })}
          </div>
          <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                {t('boatsSection.filters')}
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-accent" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh] rounded-t-xl px-6">
              <SheetHeader className="pr-2">
                <SheetTitle className="flex items-center justify-between">
                  <span>{t('boatsSection.filterBoats')}</span>
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      {t('boatsSection.clearAll')}
                    </Button>
                  )}
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 pr-2">
                <BoatFilters
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                  lengthRange={lengthRange}
                  onLengthChange={handleLengthChange}
                />
              </div>
              <div className="mt-8 pr-2">
                <Button className="w-full" onClick={() => setFiltersOpen(false)}>
                  {t('boatsSection.showBoats', { count: filteredBoats.length })}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Results Count - Desktop */}
        <div className="hidden md:block mb-6">
          <p className="text-sm text-muted-foreground">
            {t('boatsSection.showing', { filtered: filteredBoats.length, total: boats.length })}
          </p>
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
              {t('boatsSection.noMatch')}
            </p>
            <Button variant="outline" onClick={clearFilters}>
              {t('boatsSection.clearFilters')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
