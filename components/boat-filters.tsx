'use client';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories, type BoatCategory } from '@/lib/boats';
import { cn } from '@/lib/utils';

interface BoatFiltersProps {
  selectedCategory: BoatCategory | 'all';
  onCategoryChange: (category: BoatCategory | 'all') => void;
  lengthRange: [number, number];
  onLengthChange: (range: [number, number]) => void;
  /** Desktop: show “Clear all” at the top of the filter block when filters are active */
  showClearInFilters?: boolean;
  hasActiveFilters?: boolean;
  onClearAll?: () => void;
}

export function BoatFilters({
  selectedCategory,
  onCategoryChange,
  lengthRange,
  onLengthChange,
  showClearInFilters,
  hasActiveFilters,
  onClearAll,
}: BoatFiltersProps) {
  return (
    <div className="space-y-6">
      {showClearInFilters && hasActiveFilters && onClearAll && (
        <div className="flex justify-end -mt-1">
          <Button variant="ghost" size="sm" onClick={onClearAll} className="gap-2 -mr-2">
            Clear all
          </Button>
        </div>
      )}

      {/* Category Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Model Series
        </h3>
        
        {/* Mobile: Dropdown only */}
        <div className="md:hidden">
          <Select
            value={selectedCategory}
            onValueChange={(value) => onCategoryChange(value as BoatCategory | 'all')}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a model series" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Models</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Desktop: All category chips */}
        <div className="hidden md:flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange('all')}
            className="rounded-full text-xs"
          >
            All Models
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={selectedCategory === cat.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(cat.value)}
              className="rounded-full text-xs"
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Length Filter - Slider and Presets Side by Side */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider shrink-0">
            Length
          </h3>
          <span className="text-sm font-medium text-foreground tabular-nums">
            {lengthRange[0]}m - {lengthRange[1]}m
          </span>
        </div>

        {/* Slider uses half the row; presets sit beside it */}
        <div className="flex flex-wrap items-start gap-4">
          <div className="w-full md:w-1/2 min-w-[min(100%,12rem)] px-1">
            <Slider
              value={lengthRange}
              min={2}
              max={11}
              step={0.5}
              onValueChange={(value) => onLengthChange(value as [number, number])}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>2m</span>
              <span>11m</span>
            </div>
          </div>

          {/* Quick Length Buttons */}
          <div className="flex flex-wrap gap-1.5 shrink-0">
            {[
              { label: '2-4m', range: [2, 4] as [number, number] },
              { label: '4-6m', range: [4, 6] as [number, number] },
              { label: '6-8m', range: [6, 8] as [number, number] },
              { label: '8+m', range: [8, 11] as [number, number] },
            ].map((item) => (
              <Button
                key={item.label}
                variant="outline"
                size="sm"
                onClick={() => onLengthChange(item.range)}
                className={cn(
                  'text-xs h-7 px-2',
                  lengthRange[0] === item.range[0] && lengthRange[1] === item.range[1]
                    ? 'bg-primary text-primary-foreground border-primary'
                    : ''
                )}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
