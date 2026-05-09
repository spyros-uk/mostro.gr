import { useTranslation } from 'react-i18next';
import type { Boat } from '@/lib/boats';
import { categories } from '@/lib/boats';

export type LocalizedBoatDisplay = {
  id: string;
  slug: string;
  name: string;
  length: number;
  category: Boat['category'];
  image: string;
  gallery: string[];
  passengers: number;
  engine: string;
  description: string;
  features: string[];
  specs: Boat['specs'];
  categoryLabel: string;
};

export function useLocalizedBoat(boat: Boat): LocalizedBoatDisplay {
  const { t } = useTranslation();
  const p = `boats.${boat.id}`;

  const featuresTr = t(`${p}.features`, { returnObjects: true });
  const features =
    Array.isArray(featuresTr) &&
    featuresTr.length > 0 &&
    typeof featuresTr[0] === 'string'
      ? (featuresTr as string[])
      : boat.features;

  const specsTr = t(`${p}.specs`, { returnObjects: true });
  let specs = boat.specs;
  if (specsTr && typeof specsTr === 'object' && !Array.isArray(specsTr)) {
    const o = specsTr as Record<string, string>;
    specs = {
      length: o.length ?? boat.specs.length,
      beam: o.beam ?? boat.specs.beam,
      weight: o.weight ?? boat.specs.weight,
      maxPower: o.maxPower ?? boat.specs.maxPower,
      fuelCapacity: o.fuelCapacity ?? boat.specs.fuelCapacity,
      certification: o.certification ?? boat.specs.certification,
    };
  }

  const categoryLabel = t(`boatCategories.${boat.category}`, {
    defaultValue: categories.find((c) => c.value === boat.category)?.label ?? boat.category,
  });

  return {
    id: boat.id,
    slug: boat.slug,
    name: t(`${p}.name`, { defaultValue: boat.name }),
    length: boat.length,
    category: boat.category,
    image: boat.image,
    gallery: boat.gallery,
    passengers: boat.passengers,
    engine: t(`${p}.engine`, { defaultValue: boat.engine }),
    description: t(`${p}.description`, { defaultValue: boat.description }),
    features,
    specs,
    categoryLabel,
  };
}
