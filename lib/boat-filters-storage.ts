import {
  categories,
  inferLengthFilterManual,
  type BoatCategory,
} from '@/lib/boats';

export const BOAT_FILTERS_STORAGE_KEY = 'mostro.gr/boat-filters';

/** Dispatched on the window when the logo (or similar) should reset boat filters. */
export const RESET_BOAT_FILTERS_EVENT = 'mostro:reset-boat-filters';

/**
 * Set before navigating home so `BoatsSection` resets on mount (logo from boat page,
 * where the section is not mounted yet).
 */
export const RESET_BOAT_FILTERS_SESSION_KEY = 'mostro-reset-boat-filters';

export type StoredBoatFilters = {
  selectedCategory: BoatCategory | 'all';
  lengthRange: [number, number];
  /** When true, changing model series does not overwrite the length slider. */
  lengthManual?: boolean;
};

const categoryValues = new Set<BoatCategory | 'all'>([
  'all',
  ...categories.map((c) => c.value),
]);

function isValidLengthRange(value: unknown): value is [number, number] {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === 'number' &&
    typeof value[1] === 'number' &&
    Number.isFinite(value[0]) &&
    Number.isFinite(value[1]) &&
    value[0] >= 2 &&
    value[0] <= 11 &&
    value[1] >= 2 &&
    value[1] <= 11 &&
    value[0] <= value[1]
  );
}

export function readStoredBoatFilters(): StoredBoatFilters | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(BOAT_FILTERS_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Partial<StoredBoatFilters>;
    if (!categoryValues.has(data.selectedCategory as BoatCategory | 'all')) {
      return null;
    }
    if (!isValidLengthRange(data.lengthRange)) return null;
    const category = data.selectedCategory as BoatCategory | 'all';
    const lengthRange = data.lengthRange as [number, number];
    const lengthManual =
      typeof data.lengthManual === 'boolean'
        ? data.lengthManual
        : inferLengthFilterManual(category, lengthRange);
    return {
      selectedCategory: category,
      lengthRange,
      lengthManual,
    };
  } catch {
    return null;
  }
}

export function writeStoredBoatFilters(state: StoredBoatFilters): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(BOAT_FILTERS_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore quota / private mode
  }
}
