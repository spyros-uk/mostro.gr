export type BoatCategory = 
  | 'cabin' 
  | 'caramel' 
  | 'dolce-vita' 
  | 'vendetta' 
  | 'spirit' 
  | 'corvette' 
  | 'family' 
  | 'offshore' 
  | 'pleasure' 
  | 'tender' 
  | 'topgun' 
  | 'sport' 
  | 'top-gun-shark';

export interface Boat {
  id: string;
  name: string;
  slug: string;
  length: number;
  category: BoatCategory;
  image: string;
  gallery: string[];
  passengers: number;
  engine: string;
  description: string;
  features: string[];
  specs: {
    length: string;
    beam: string;
    weight: string;
    maxPower: string;
    fuelCapacity: string;
    certification: string;
  };
}

export const categories: { value: BoatCategory; label: string }[] = [
  { value: 'cabin', label: 'Cabin' },
  { value: 'caramel', label: 'Caramel' },
  { value: 'corvette', label: 'Corvette' },
  { value: 'dolce-vita', label: 'Dolce Vita' },
  { value: 'family', label: 'Family' },
  { value: 'offshore', label: 'Offshore' },
  { value: 'pleasure', label: 'Pleasure' },
  { value: 'spirit', label: 'Spirit' },
  { value: 'sport', label: 'Sport' },
  { value: 'tender', label: 'Tender' },
  { value: 'topgun', label: 'Top Gun' },
  { value: 'top-gun-shark', label: 'Top Gun Shark' },
  { value: 'vendetta', label: 'Vendetta' },
];

export const boats: Boat[] = [
  // Tender Series
  {
    id: 'tender-200',
    name: 'Tender 200 Monohull',
    slug: 'tender-200-monohull',
    length: 2,
    category: 'tender',
    image: '/images/boat-1.jpg',
    gallery: ['/images/boat-1.jpg', '/images/boat-detail-1.jpg', '/images/lifestyle.jpg', '/images/boat-sunset.jpg'],
    passengers: 2,
    engine: '5-10 HP',
    description: 'Ultra-compact monohull tender, perfect for yacht support and short transfers.',
    features: ['Lightweight monohull design', 'Easy storage', 'Single-piece construction', 'UV-resistant materials'],
    specs: { length: '2.00m', beam: '1.20m', weight: '35kg', maxPower: '10 HP', fuelCapacity: 'Portable', certification: 'CE Cat D' },
  },
  {
    id: 'tender-245',
    name: 'Tender 245 Monohull',
    slug: 'tender-245-monohull',
    length: 2.45,
    category: 'tender',
    image: '/images/boat-1.jpg',
    gallery: ['/images/boat-1.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 3,
    engine: '8-15 HP',
    description: 'Agile monohull tender with improved stability for coastal excursions.',
    features: ['Enhanced stability', 'Bow handle', 'Transom wheels compatible', 'Reinforced keel'],
    specs: { length: '2.45m', beam: '1.35m', weight: '42kg', maxPower: '15 HP', fuelCapacity: 'Portable', certification: 'CE Cat D' },
  },
  {
    id: 'tender-250',
    name: 'Tender 250 Monohull',
    slug: 'tender-250-monohull',
    length: 2.5,
    category: 'tender',
    image: '/images/boat-1.jpg',
    gallery: ['/images/boat-1.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 3,
    engine: '10-20 HP',
    description: 'Versatile monohull tender for yacht support and harbor navigation.',
    features: ['Monohull construction', 'Storage compartment', 'Aluminum floor', 'Lifting handles'],
    specs: { length: '2.50m', beam: '1.40m', weight: '48kg', maxPower: '20 HP', fuelCapacity: 'Portable', certification: 'CE Cat D' },
  },
  {
    id: 'tender-280',
    name: 'Tender 280 Monohull',
    slug: 'tender-280-monohull',
    length: 2.8,
    category: 'tender',
    image: '/images/boat-2.jpg',
    gallery: ['/images/boat-2.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 4,
    engine: '15-25 HP',
    description: 'Spacious monohull tender with enhanced seating for family transfers.',
    features: ['Wide beam', 'Cushioned seats', 'Bow locker', 'Stainless hardware'],
    specs: { length: '2.80m', beam: '1.50m', weight: '58kg', maxPower: '25 HP', fuelCapacity: 'Portable', certification: 'CE Cat D' },
  },
  {
    id: 'tender-289',
    name: 'Tender 289 RIB',
    slug: 'tender-289-rib',
    length: 2.89,
    category: 'tender',
    image: '/images/boat-2.jpg',
    gallery: ['/images/boat-2.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 4,
    engine: '20-30 HP',
    description: 'Classic RIB tender with inflatable tubes for superior stability and safety.',
    features: ['Inflatable tubes', 'Rigid hull', 'Non-slip deck', 'Towing ring'],
    specs: { length: '2.89m', beam: '1.58m', weight: '65kg', maxPower: '30 HP', fuelCapacity: '25L', certification: 'CE Cat C' },
  },
  
  // Pleasure Series
  {
    id: 'pleasure-320',
    name: 'Pleasure 320',
    slug: 'pleasure-320',
    length: 3.2,
    category: 'pleasure',
    image: '/images/boat-2.jpg',
    gallery: ['/images/boat-2.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 4,
    engine: '25-40 HP',
    description: 'Entry-level pleasure craft for relaxed coastal cruising.',
    features: ['Comfortable seating', 'Sun pad', 'Storage locker', 'Navigation lights'],
    specs: { length: '3.20m', beam: '1.60m', weight: '120kg', maxPower: '40 HP', fuelCapacity: '40L', certification: 'CE Cat C' },
  },
  {
    id: 'pleasure-360',
    name: 'Pleasure 360',
    slug: 'pleasure-360',
    length: 3.6,
    category: 'pleasure',
    image: '/images/boat-3.jpg',
    gallery: ['/images/boat-3.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 5,
    engine: '30-50 HP',
    description: 'Balanced pleasure craft with room for friends and gear.',
    features: ['Extended deck', 'Bow storage', 'Swim ladder', 'Cup holders'],
    specs: { length: '3.60m', beam: '1.70m', weight: '145kg', maxPower: '50 HP', fuelCapacity: '50L', certification: 'CE Cat C' },
  },
  {
    id: 'pleasure-400',
    name: 'Pleasure 400',
    slug: 'pleasure-400',
    length: 4,
    category: 'pleasure',
    image: '/images/boat-3.jpg',
    gallery: ['/images/boat-3.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 5,
    engine: '40-60 HP',
    description: 'Mid-size pleasure boat for day trips and water activities.',
    features: ['Center console option', 'Ice box', 'Fuel gauge', 'Bilge pump'],
    specs: { length: '4.00m', beam: '1.80m', weight: '180kg', maxPower: '60 HP', fuelCapacity: '60L', certification: 'CE Cat C' },
  },
  {
    id: 'pleasure-430',
    name: 'Pleasure 430',
    slug: 'pleasure-430',
    length: 4.3,
    category: 'pleasure',
    image: '/images/boat-4.jpg',
    gallery: ['/images/boat-4.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 6,
    engine: '50-75 HP',
    description: 'Top of the Pleasure range with premium amenities.',
    features: ['T-top compatible', 'Freshwater shower', 'Cushioned sundeck', 'USB charging'],
    specs: { length: '4.30m', beam: '1.90m', weight: '210kg', maxPower: '75 HP', fuelCapacity: '70L', certification: 'CE Cat C' },
  },
  
  // Family Series
  {
    id: 'family-400',
    name: 'Family 400',
    slug: 'family-400',
    length: 4,
    category: 'family',
    image: '/images/boat-3.jpg',
    gallery: ['/images/boat-3.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 5,
    engine: '40-60 HP',
    description: 'Safe and spacious entry point into the Family series.',
    features: ['Wide beam', 'Safety rails', 'Cushioned seating', 'Storage nets'],
    specs: { length: '4.00m', beam: '1.85m', weight: '190kg', maxPower: '60 HP', fuelCapacity: '55L', certification: 'CE Cat C' },
  },
  {
    id: 'family-450',
    name: 'Family 450',
    slug: 'family-450',
    length: 4.5,
    category: 'family',
    image: '/images/boat-4.jpg',
    gallery: ['/images/boat-4.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 6,
    engine: '50-80 HP',
    description: 'Perfect balance of space and performance for family outings.',
    features: ['Bow sundeck', 'Swim platform', 'Ice box', 'Bimini ready'],
    specs: { length: '4.50m', beam: '1.95m', weight: '240kg', maxPower: '80 HP', fuelCapacity: '70L', certification: 'CE Cat C' },
  },
  {
    id: 'family-550',
    name: 'Family 550',
    slug: 'family-550',
    length: 5.5,
    category: 'family',
    image: '/images/boat-5.jpg',
    gallery: ['/images/boat-5.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 7,
    engine: '70-115 HP',
    description: 'Generous dimensions for extended family adventures.',
    features: ['T-top shade', 'Fresh water tank', 'Anchor locker', 'LED lighting'],
    specs: { length: '5.50m', beam: '2.20m', weight: '380kg', maxPower: '115 HP', fuelCapacity: '100L', certification: 'CE Cat B' },
  },
  {
    id: 'family-600',
    name: 'Family 600',
    slug: 'family-600',
    length: 6,
    category: 'family',
    image: '/images/boat-5.jpg',
    gallery: ['/images/boat-5.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 8,
    engine: '90-150 HP',
    description: 'Premium family cruiser with all-day comfort.',
    features: ['Hydraulic steering', 'Sound system', 'Bow table', 'Electric windlass'],
    specs: { length: '6.00m', beam: '2.35m', weight: '480kg', maxPower: '150 HP', fuelCapacity: '130L', certification: 'CE Cat B' },
  },
  {
    id: 'family-650',
    name: 'Family 650',
    slug: 'family-650',
    length: 6.5,
    category: 'family',
    image: '/images/boat-6.jpg',
    gallery: ['/images/boat-6.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 8,
    engine: '115-175 HP',
    description: 'Flagship of the Family series with maximum comfort.',
    features: ['Cabin storage', 'Full galley prep', 'Electric toilet option', 'Radar arch'],
    specs: { length: '6.50m', beam: '2.50m', weight: '580kg', maxPower: '175 HP', fuelCapacity: '150L', certification: 'CE Cat B' },
  },
  
  // Offshore Series
  {
    id: 'offshore-451',
    name: 'Offshore 451',
    slug: 'offshore-451',
    length: 4.51,
    category: 'offshore',
    image: '/images/boat-4.jpg',
    gallery: ['/images/boat-4.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 5,
    engine: '50-80 HP',
    description: 'Entry offshore RIB built for rougher conditions.',
    features: ['Deep-V hull', 'Self-bailing deck', 'Heavy cleats', 'Rod holders'],
    specs: { length: '4.51m', beam: '1.95m', weight: '260kg', maxPower: '80 HP', fuelCapacity: '80L', certification: 'CE Cat C' },
  },
  {
    id: 'offshore-501',
    name: 'Offshore 501',
    slug: 'offshore-501',
    length: 5.01,
    category: 'offshore',
    image: '/images/boat-5.jpg',
    gallery: ['/images/boat-5.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 6,
    engine: '70-115 HP',
    description: 'Capable offshore performer for open water adventures.',
    features: ['Reinforced tubes', 'GPS ready', 'Dive ladder', 'Anchor winch'],
    specs: { length: '5.01m', beam: '2.10m', weight: '340kg', maxPower: '115 HP', fuelCapacity: '100L', certification: 'CE Cat B' },
  },
  {
    id: 'offshore-541',
    name: 'Offshore 541',
    slug: 'offshore-541',
    length: 5.41,
    category: 'offshore',
    image: '/images/boat-5.jpg',
    gallery: ['/images/boat-5.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 7,
    engine: '90-150 HP',
    description: 'Serious offshore craft for fishing and exploration.',
    features: ['Live bait well', 'Fish finder mount', 'Tackle storage', 'Leaning post'],
    specs: { length: '5.41m', beam: '2.20m', weight: '400kg', maxPower: '150 HP', fuelCapacity: '120L', certification: 'CE Cat B' },
  },
  {
    id: 'offshore-581',
    name: 'Offshore 581',
    slug: 'offshore-581',
    length: 5.81,
    category: 'offshore',
    image: '/images/boat-6.jpg',
    gallery: ['/images/boat-6.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 7,
    engine: '115-175 HP',
    description: 'Professional-grade offshore RIB for demanding conditions.',
    features: ['Console cabin', 'Radar mount', 'Twin battery', 'Trim tabs'],
    specs: { length: '5.81m', beam: '2.35m', weight: '480kg', maxPower: '175 HP', fuelCapacity: '150L', certification: 'CE Cat B' },
  },
  {
    id: 'offshore-621',
    name: 'Offshore 621',
    slug: 'offshore-621',
    length: 6.21,
    category: 'offshore',
    image: '/images/boat-6.jpg',
    gallery: ['/images/boat-6.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 8,
    engine: '150-200 HP',
    description: 'Top offshore model with extended range capability.',
    features: ['Extended fuel range', 'Fighting chair mount', 'Outrigger bases', 'Hydraulic steering'],
    specs: { length: '6.21m', beam: '2.50m', weight: '560kg', maxPower: '200 HP', fuelCapacity: '180L', certification: 'CE Cat B' },
  },
  
  // Sport Series
  {
    id: 'sport-460',
    name: 'Sport 460',
    slug: 'sport-460',
    length: 4.6,
    category: 'sport',
    image: '/images/boat-4.jpg',
    gallery: ['/images/boat-4.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 5,
    engine: '50-90 HP',
    description: 'Agile sport RIB for water skiing and wakeboarding.',
    features: ['Ski tow pylon', 'Quick planing', 'Sport seating', 'Speedometer'],
    specs: { length: '4.60m', beam: '1.90m', weight: '230kg', maxPower: '90 HP', fuelCapacity: '65L', certification: 'CE Cat C' },
  },
  {
    id: 'sport-500',
    name: 'Sport 500',
    slug: 'sport-500',
    length: 5,
    category: 'sport',
    image: '/images/boat-4.jpg',
    gallery: ['/images/boat-4.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 6,
    engine: '70-115 HP',
    description: 'Balanced sport performer with enhanced stability.',
    features: ['Center console', 'Wake tower ready', 'Fuel tank gauge', 'Navigation lights'],
    specs: { length: '5.00m', beam: '2.00m', weight: '280kg', maxPower: '115 HP', fuelCapacity: '80L', certification: 'CE Cat C' },
  },
  {
    id: 'sport-550',
    name: 'Sport 550',
    slug: 'sport-550',
    length: 5.5,
    category: 'sport',
    image: '/images/boat-5.jpg',
    gallery: ['/images/boat-5.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 6,
    engine: '90-150 HP',
    description: 'Mid-range sport craft with impressive acceleration.',
    features: ['Performance hull', 'Sport steering', 'Premium upholstery', 'Swim platform'],
    specs: { length: '5.50m', beam: '2.15m', weight: '350kg', maxPower: '150 HP', fuelCapacity: '100L', certification: 'CE Cat B' },
  },
  {
    id: 'sport-600',
    name: 'Sport 600',
    slug: 'sport-600',
    length: 6,
    category: 'sport',
    image: '/images/boat-5.jpg',
    gallery: ['/images/boat-5.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 7,
    engine: '115-175 HP',
    description: 'High-performance sport RIB for serious enthusiasts.',
    features: ['Sport T-top', 'Bolster seats', 'LED cockpit', 'Freshwater shower'],
    specs: { length: '6.00m', beam: '2.30m', weight: '420kg', maxPower: '175 HP', fuelCapacity: '130L', certification: 'CE Cat B' },
  },
  {
    id: 'sport-700',
    name: 'Sport 700',
    slug: 'sport-700',
    length: 7,
    category: 'sport',
    image: '/images/boat-6.jpg',
    gallery: ['/images/boat-6.jpg', '/images/boat-interior-1.jpg', '/images/boat-detail-1.jpg', '/images/boat-sunset.jpg'],
    passengers: 8,
    engine: '150-225 HP',
    description: 'Elite sport cruiser blending speed with comfort.',
    features: ['Console cabin', 'Sound system', 'Hydraulic trim', 'Sport arch'],
    specs: { length: '7.00m', beam: '2.55m', weight: '580kg', maxPower: '225 HP', fuelCapacity: '180L', certification: 'CE Cat B' },
  },
  {
    id: 'sport-800',
    name: 'Sport 800',
    slug: 'sport-800',
    length: 8,
    category: 'sport',
    image: '/images/boat-7.jpg',
    gallery: ['/images/boat-7.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 9,
    engine: '200-300 HP',
    description: 'Premium sport yacht for those who demand excellence.',
    features: ['Standing cabin', 'Electric windlass', 'Twin engine ready', 'Full instrumentation'],
    specs: { length: '8.00m', beam: '2.80m', weight: '850kg', maxPower: '300 HP', fuelCapacity: '250L', certification: 'CE Cat B' },
  },
  {
    id: 'sport-900',
    name: 'Sport 900',
    slug: 'sport-900',
    length: 9,
    category: 'sport',
    image: '/images/boat-8.jpg',
    gallery: ['/images/boat-8.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 10,
    engine: '250-350 HP',
    description: 'Flagship sport model with unmatched performance.',
    features: ['Full cabin', 'Wet bar', 'Air conditioning ready', 'Bow thruster option'],
    specs: { length: '9.00m', beam: '3.00m', weight: '1100kg', maxPower: '350 HP', fuelCapacity: '320L', certification: 'CE Cat B' },
  },
  
  // Spirit Series
  {
    id: 'spirit-550',
    name: 'Spirit 550',
    slug: 'spirit-550',
    length: 5.5,
    category: 'spirit',
    image: '/images/boat-5.jpg',
    gallery: ['/images/boat-5.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 6,
    engine: '90-150 HP',
    description: 'Elegant design meets spirited performance.',
    features: ['Designer styling', 'Premium finish', 'LED mood lighting', 'Teak accents'],
    specs: { length: '5.50m', beam: '2.20m', weight: '370kg', maxPower: '150 HP', fuelCapacity: '100L', certification: 'CE Cat B' },
  },
  {
    id: 'spirit-650',
    name: 'Spirit 650',
    slug: 'spirit-650',
    length: 6.5,
    category: 'spirit',
    image: '/images/boat-6.jpg',
    gallery: ['/images/boat-6.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 8,
    engine: '115-200 HP',
    description: 'The ultimate expression of the Spirit philosophy.',
    features: ['Sundeck', 'USB charging', 'Premium sound', 'Bespoke upholstery'],
    specs: { length: '6.50m', beam: '2.50m', weight: '540kg', maxPower: '200 HP', fuelCapacity: '150L', certification: 'CE Cat B' },
  },
  
  // Corvette Series
  {
    id: 'corvette-68',
    name: 'Corvette 68',
    slug: 'corvette-68',
    length: 6.8,
    category: 'corvette',
    image: '/images/boat-6.jpg',
    gallery: ['/images/boat-6.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 8,
    engine: '150-225 HP',
    description: 'Corvette-class performance with Mediterranean elegance.',
    features: ['Sport cabin', 'Entertainment center', 'LED package', 'Autopilot ready'],
    specs: { length: '6.80m', beam: '2.60m', weight: '620kg', maxPower: '225 HP', fuelCapacity: '180L', certification: 'CE Cat B' },
  },
  {
    id: 'corvette-78',
    name: 'Corvette 78',
    slug: 'corvette-78',
    length: 7.8,
    category: 'corvette',
    image: '/images/boat-7.jpg',
    gallery: ['/images/boat-7.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 10,
    engine: '200-300 HP',
    description: 'Flagship Corvette combining speed with luxury.',
    features: ['Full cabin berth', 'Galley', 'Electric toilet', 'Twin engines'],
    specs: { length: '7.80m', beam: '2.85m', weight: '900kg', maxPower: '300 HP', fuelCapacity: '250L', certification: 'CE Cat B' },
  },
  
  // Cabin Series
  {
    id: 'cabin-8',
    name: 'Cabin 8',
    slug: 'cabin-8',
    length: 8,
    category: 'cabin',
    image: '/images/boat-7.jpg',
    gallery: ['/images/boat-7.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 8,
    engine: '200-300 HP',
    description: 'Entry cabin cruiser for overnight adventures.',
    features: ['V-berth cabin', 'Full head', 'Galley area', 'Shore power'],
    specs: { length: '8.00m', beam: '2.80m', weight: '950kg', maxPower: '300 HP', fuelCapacity: '280L', certification: 'CE Cat B' },
  },
  {
    id: 'cabin-9',
    name: 'Cabin 9',
    slug: 'cabin-9',
    length: 9,
    category: 'cabin',
    image: '/images/boat-8.jpg',
    gallery: ['/images/boat-8.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 10,
    engine: '250-350 HP',
    description: 'Mid-size cabin cruiser with full amenities.',
    features: ['Master berth', 'Full bathroom', 'Climate control', 'Generator ready'],
    specs: { length: '9.00m', beam: '3.00m', weight: '1250kg', maxPower: '350 HP', fuelCapacity: '350L', certification: 'CE Cat B' },
  },
  {
    id: 'cabin-10',
    name: 'Cabin 10',
    slug: 'cabin-10',
    length: 10,
    category: 'cabin',
    image: '/images/boat-9.jpg',
    gallery: ['/images/boat-9.jpg', '/images/boat-interior-1.jpg', '/images/boat-detail-1.jpg', '/images/hero-boat.jpg', '/images/boat-sunset.jpg'],
    passengers: 12,
    engine: '350-500 HP Twin',
    description: 'Flagship cabin yacht for extended Mediterranean cruising.',
    features: ['Owner suite', 'Guest cabin', 'Full kitchen', 'Entertainment system'],
    specs: { length: '10.00m', beam: '3.20m', weight: '1600kg', maxPower: '500 HP Twin', fuelCapacity: '450L', certification: 'CE Cat A' },
  },
  
  // Top Gun Series
  {
    id: 'topgun-864',
    name: 'Top Gun 864',
    slug: 'top-gun-864',
    length: 8.64,
    category: 'topgun',
    image: '/images/boat-8.jpg',
    gallery: ['/images/boat-8.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 10,
    engine: '250-350 HP',
    description: 'High-performance cruiser for those who demand the best.',
    features: ['Standing cabin', 'Full galley', 'Electric windlass', 'Twin engine ready'],
    specs: { length: '8.64m', beam: '2.95m', weight: '1050kg', maxPower: '350 HP', fuelCapacity: '300L', certification: 'CE Cat B' },
  },
  {
    id: 'topgun-964',
    name: 'Top Gun 964',
    slug: 'top-gun-964',
    length: 9.64,
    category: 'topgun',
    image: '/images/boat-9.jpg',
    gallery: ['/images/boat-9.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 12,
    engine: '350-500 HP Twin',
    description: 'Elite performance yacht with uncompromising luxury.',
    features: ['Master suite', 'Crew area', 'Full electronics', 'Hydraulic platform'],
    specs: { length: '9.64m', beam: '3.15m', weight: '1400kg', maxPower: '500 HP Twin', fuelCapacity: '400L', certification: 'CE Cat B' },
  },
  
  // Single Model Series
  {
    id: 'caramel',
    name: 'Caramel',
    slug: 'caramel',
    length: 7.5,
    category: 'caramel',
    image: '/images/boat-7.jpg',
    gallery: ['/images/boat-7.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 9,
    engine: '175-250 HP',
    description: 'Sweet sophistication meets Mediterranean style.',
    features: ['Distinctive design', 'Premium teak', 'Custom upholstery', 'Bose sound'],
    specs: { length: '7.50m', beam: '2.70m', weight: '720kg', maxPower: '250 HP', fuelCapacity: '200L', certification: 'CE Cat B' },
  },
  {
    id: 'dolce-vita',
    name: 'Dolce Vita',
    slug: 'dolce-vita',
    length: 7.8,
    category: 'dolce-vita',
    image: '/images/boat-8.jpg',
    gallery: ['/images/boat-8.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 10,
    engine: '200-300 HP',
    description: 'Live the sweet life with Italian-inspired luxury.',
    features: ['Forward cabin', 'Full teak deck', 'Premium sound', 'Hydraulic steering'],
    specs: { length: '7.80m', beam: '2.85m', weight: '880kg', maxPower: '300 HP', fuelCapacity: '250L', certification: 'CE Cat B' },
  },
  {
    id: 'vendetta',
    name: 'Vendetta',
    slug: 'vendetta',
    length: 9.2,
    category: 'vendetta',
    image: '/images/boat-9.jpg',
    gallery: ['/images/boat-9.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 12,
    engine: '300-400 HP',
    description: 'Bold, powerful, and uncompromising luxury.',
    features: ['Air conditioning', 'Generator', 'Bow thruster', 'Hydraulic swim platform'],
    specs: { length: '9.20m', beam: '3.10m', weight: '1350kg', maxPower: '400 HP', fuelCapacity: '380L', certification: 'CE Cat B' },
  },
  {
    id: 'top-gun-shark',
    name: 'Top Gun Shark',
    slug: 'top-gun-shark',
    length: 11,
    category: 'top-gun-shark',
    image: '/images/boat-10.jpg',
    gallery: ['/images/boat-10.jpg', '/images/boat-interior-1.jpg', '/images/boat-detail-1.jpg', '/images/hero-boat.jpg', '/images/boat-sunset.jpg'],
    passengers: 14,
    engine: '500-700 HP Twin',
    description: 'The ultimate flagship - apex predator of the Mediterranean.',
    features: ['Owner suite', 'Crew quarters', 'Full kitchen', 'Complete electronics package'],
    specs: { length: '11.00m', beam: '3.40m', weight: '2200kg', maxPower: '700 HP Twin', fuelCapacity: '550L', certification: 'CE Cat A' },
  },
];

/** Global length slider bounds (m), must match `BoatFilters` slider min/max. */
export const SLIDER_LENGTH_GLOBAL: [number, number] = [2, 11];

/**
 * Slider range for a model series: shortest hull length floored to whole metres,
 * longest ceiled to whole metres, clamped to {@link SLIDER_LENGTH_GLOBAL}.
 * For `"all"`, returns the global range.
 */
export function getSliderLengthRangeForCategory(
  category: BoatCategory | 'all',
): [number, number] {
  if (category === 'all') return SLIDER_LENGTH_GLOBAL;
  const inCategory = boats.filter((b) => b.category === category);
  if (inCategory.length === 0) return SLIDER_LENGTH_GLOBAL;
  const minLen = Math.min(...inCategory.map((b) => b.length));
  const maxLen = Math.max(...inCategory.map((b) => b.length));
  const [gMin, gMax] = SLIDER_LENGTH_GLOBAL;
  const minSlider = Math.max(gMin, Math.min(gMax, Math.floor(minLen)));
  const maxSlider = Math.max(gMin, Math.min(gMax, Math.ceil(maxLen)));
  if (minSlider > maxSlider) return SLIDER_LENGTH_GLOBAL;
  return [minSlider, maxSlider];
}

/** True when the stored length range differs from the auto range for the category. */
export function inferLengthFilterManual(
  category: BoatCategory | 'all',
  lengthRange: [number, number],
): boolean {
  const [a0, a1] = getSliderLengthRangeForCategory(category);
  return lengthRange[0] !== a0 || lengthRange[1] !== a1;
}

export const lengthRanges = [
  { min: 2, max: 4, label: '2-4m' },
  { min: 4, max: 6, label: '4-6m' },
  { min: 6, max: 8, label: '6-8m' },
  { min: 8, max: 11, label: '8-11m' },
];

export function getBoatBySlug(slug: string): Boat | undefined {
  return boats.find((boat) => boat.slug === slug);
}

export function getRelatedBoats(boat: Boat, limit = 3): Boat[] {
  return boats
    .filter((b) => b.id !== boat.id && b.category === boat.category)
    .slice(0, limit);
}
