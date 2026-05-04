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
    description:
      'An ultra-lightweight rigid tender for small sailing yachts where storage space is at a premium.',
    features: ['Rigid monohull', 'Small sailing yacht compatibility', 'Minimal stowage footprint'],
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
    description:
      'A rigid-hull tender providing increased tracking and rowing efficiency for two to three passengers.',
    features: ['Rigid monohull', '2–3 passenger capacity', 'Improved tracking'],
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
    description:
      'A versatile rigid tender capable of handling small outboard engines for reliable shore transit.',
    features: ['Rigid monohull', 'Small outboard compatible', 'Shore-to-ship transit'],
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
    description:
      'The largest of the rigid tenders, offering high durability for use on rugged or rocky coastlines.',
    features: ['Rigid monohull', 'Rugged coastline optimised', 'High durability'],
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
    description:
      'Combines a rigid GRP floor with inflatable tubes, providing the highest stability and mother-ship protection. Standard equipment includes oars, handles, a pump, and a repair kit. The peripheral fender protects the yacht\'s hull during boarding, making it the preferred choice for larger motor yachts requiring a high-stability tender.',
    features: [
      'Rigid inflatable boat (RIB)',
      'Oars, pump & repair kit',
      'Peripheral elastic fender',
      'Yacht davit and garage optimised',
    ],
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
    engine: 'Up to 25 HP',
    description:
      'A compact runabout featuring high-quality hypalon construction. Standard equipment includes oars, rowlocks, handles, a pump, and a repair kit. Designed with three independent air chambers to ensure safety during coastal transits.',
    features: [
      'Hypalon construction',
      '3 independent air chambers',
      'Internal 2.30 × 0.77m · tube Ø 0.42m',
      'Oars, rowlocks, pump & repair kit',
    ],
    specs: {
      length: '3.20m',
      beam: '1.56m',
      weight: '75kg',
      maxPower: '25 HP',
      fuelCapacity: 'Portable',
      certification: 'CE Cat C',
    },
  },
  {
    id: 'pleasure-360',
    name: 'Pleasure 360',
    slug: 'pleasure-360',
    length: 3.6,
    category: 'pleasure',
    image: '/images/boat-3.jpg',
    gallery: ['/images/boat-3.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 4,
    engine: 'Up to 30 HP',
    description:
      'Provides a wider beam and larger tube diameter for increased stability and a drier ride. A popular choice for four adults, offering enough buoyancy to handle coastal "chop" while remaining light enough for easy trailering.',
    features: [
      'Wider beam & larger tubes',
      'Internal 2.70 × 0.80m · tube Ø 0.48m',
      '4 adults · easy trailering',
    ],
    specs: {
      length: '3.60m',
      beam: '1.70m',
      weight: '90kg',
      maxPower: '30 HP',
      fuelCapacity: 'Portable',
      certification: 'CE Cat C',
    },
  },
  {
    id: 'pleasure-400',
    name: 'Pleasure 400',
    slug: 'pleasure-400',
    length: 4,
    category: 'pleasure',
    image: '/images/boat-3.jpg',
    gallery: ['/images/boat-3.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 6,
    engine: 'Up to 40 HP',
    description:
      'A robust recreational RIB with a significantly higher mass than the smaller models, translating to a more "planted" feel in the water. With a weight of 180kg, the 400 features a thicker GRP layup and is rated for 6 passengers, making it a highly capable family ferry or recreational platform.',
    features: [
      'Thicker GRP layup',
      'Internal 3.20 × 0.78m · tube Ø 0.48m',
      '6 passengers · 3 air chambers',
    ],
    specs: {
      length: '4.00m',
      beam: '1.88m',
      weight: '180kg',
      maxPower: '40 HP',
      fuelCapacity: 'Integrated',
      certification: 'CE Cat C',
    },
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
    engine: '40-60 HP',
    description:
      'The largest Pleasure model, offering the best sea-keeping in its category while maintaining the series\' focus on simplicity. Designed for extended beach trips, providing the space and power needed to explore more distant coastal regions with a full crew and gear.',
    features: ['Extended recreational use', 'High-stability pleasure hull', 'Best sea-keeping in class'],
    specs: { length: '4.30m', beam: '1.95m', weight: '210kg', maxPower: '60 HP', fuelCapacity: '70L', certification: 'CE Cat C' },
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
    description:
      'A compact RIB providing a secure and manageable platform for young families. Designed for simplicity and ease of use, the 400 features a wide deck for its size. The hull is optimized for lower horsepower, making it an economical choice for coastal day trips.',
    features: ['4.00m length', 'Entry-level family boating', 'Low-HP optimised hull', 'Wide deck for its size'],
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
    description:
      'Offers more internal volume and a more robust console, allowing for longer durations on the water. Provides a balance between the portability of the 400 and the sea-keeping abilities of the larger 550, featuring enhanced storage capacity for beach and snorkeling equipment.',
    features: ['4.50m length', 'Expanded storage lockers', 'Enhanced passenger space'],
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
    description:
      'A true offshore-capable family boat, engineered to handle significant wave action while keeping passengers dry. Often the preferred choice for families who enjoy exploring distant coves. Features an integrated fuel tank and a console large enough to house a modern navigation suite.',
    features: ['5.50m length', 'Integrated long-range fuel tank', 'Deep-V coastal entry'],
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
    description:
      'Emphasizes social ergonomics, with dedicated seating areas at both the bow and the stern. Features a large bow sun-pad and a protective stern seating arrangement. The engineering focus is on providing a stable platform at anchor for swimming and socializing.',
    features: ['6.00m length', 'Dual sun-pad / seating layout', 'High static buoyancy'],
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
    description:
      'The premier model of the leisure-focused range, offering the space and comfort of a large cruiser with the handling of a RIB. Designed for large groups, with a hull that can carry significant weight without losing its planing efficiency. It represents the pinnacle of "passive safety" engineering in the leisure segment.',
    features: ['6.50m length', 'Maximum class passenger load', 'Premium family outfitting'],
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
    description:
      'The most compact of the professional-grade hulls, serving as a rugged utility or safety boat. Engineered with reinforced GRP and oversized tubes. Its primary mission is reliability in coastal work environments where durability is the highest priority.',
    features: ['4.51m length', 'Heavy-duty professional duty', 'Deep-V interceptor entry'],
    specs: { length: '4.51m', beam: '1.95m', weight: '260kg', maxPower: '80 HP', fuelCapacity: '80L', certification: 'CE Cat C' },
  },
  {
    id: 'offshore-501',
    name: 'Offshore 501',
    slug: 'offshore-501',
    length: 5,
    category: 'offshore',
    image: '/images/boat-5.jpg',
    gallery: ['/images/boat-5.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 7,
    engine: '90-115 HP',
    description:
      'The benchmark for the series, balancing manageable dimensions with significant rough-water capability. Designed for high-response handling, with weight distributed low and centrally to optimize the center of gravity, which is critical for maintaining stability during high-speed maneuvers in heavy swells.',
    features: [
      'Internal 3.35 × 1.19m · tube Ø 0.55m',
      '5 air chambers · 7 passengers',
      '340kg (std) · max 115 HP · rec. 90 HP',
    ],
    specs: {
      length: '5.00m',
      beam: '2.30m',
      weight: '340kg',
      maxPower: '115 HP',
      fuelCapacity: 'Integrated',
      certification: 'CE Cat B',
    },
  },
  {
    id: 'offshore-541',
    name: 'Offshore 541',
    slug: 'offshore-541',
    length: 5.40,
    category: 'offshore',
    image: '/images/boat-5.jpg',
    gallery: ['/images/boat-5.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 7,
    engine: '90-150 HP',
    description:
      'Provides an expanded deck area for professional gear, making it ideal for technical diving or search operations. Features a reinforced deck structure capable of supporting heavy loads, such as dive tanks or technical equipment, without compromising the vessel’s trim.',
    features: ['5.40m length', 'Cargo / technical reinforced deck', 'Oversized tube diameter'],
    specs: { length: '5.40m', beam: '2.20m', weight: '400kg', maxPower: '150 HP', fuelCapacity: '120L', certification: 'CE Cat B' },
  },
  {
    id: 'offshore-581',
    name: 'Offshore 581',
    slug: 'offshore-581',
    length: 5.80,
    category: 'offshore',
    image: '/images/boat-6.jpg',
    gallery: ['/images/boat-6.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 7,
    engine: '115-175 HP',
    description:
      'Optimized for high-speed offshore tracking, utilizing a hull that "grips" the water during aggressive turns. Designed for users who need to cover long distances rapidly in unprotected waters. Hull strakes are tuned to provide maximum lift and minimal drag.',
    features: ['5.80m length', 'Precision hydrodynamic strakes', 'Professional high-speed'],
    specs: { length: '5.80m', beam: '2.35m', weight: '480kg', maxPower: '175 HP', fuelCapacity: '150L', certification: 'CE Cat B' },
  },
  {
    id: 'offshore-621',
    name: 'Offshore 621',
    slug: 'offshore-621',
    length: 6.20,
    category: 'offshore',
    image: '/images/boat-6.jpg',
    gallery: ['/images/boat-6.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 8,
    engine: '150-200 HP',
    description:
      'The flagship of the Offshore series, providing the highest level of sea-keeping and autonomy in the professional range. Designed for long-range missions, featuring a large fuel capacity and a hull capable of bridging large wave gaps, providing a stable platform for professional mariners in the most demanding conditions.',
    features: ['6.20m length', 'Long-range offshore autonomy', 'Professional crew & equipment'],
    specs: { length: '6.20m', beam: '2.50m', weight: '560kg', maxPower: '200 HP', fuelCapacity: '180L', certification: 'CE Cat B' },
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
    passengers: 6,
    engine: '50-115 HP',
    description:
      'An agile "playboat" model engineered for dynamic recreation and water sports.',
    features: ['Water sports / agility', 'Deep-V sport hull', '4–6 persons'],
    specs: { length: '4.60m', beam: '1.90m', weight: '230kg', maxPower: '115 HP', fuelCapacity: '65L', certification: 'CE Cat C' },
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
    description: 'A versatile model engineered for agility, dynamic recreation, and water sports.',
    features: ['Water sports / agility', 'Deep-V sport hull', '4–6 persons'],
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
    description:
      'A capable mid-sized model engineered for dynamic recreation and towing capability.',
    features: ['Water sports / agility', 'Deep-V sport hull', '4–6 persons'],
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
    passengers: 6,
    engine: '115-175 HP',
    description:
      'Engineered for agility and high-speed exploration, creating a secure environment for dynamic recreation.',
    features: ['Water sports / agility', 'Deep-V sport hull', '4–6 persons'],
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
    passengers: 10,
    engine: '150-300 HP',
    description:
      'Serves as a high-speed performance cruiser capable of handling offshore sea states with a full athletic crew.',
    features: ['Performance cruising', 'Reinforced offshore sport hull', '8–12 persons'],
    specs: { length: '7.00m', beam: '2.55m', weight: '580kg', maxPower: '300 HP', fuelCapacity: '180L', certification: 'CE Cat B' },
  },
  {
    id: 'sport-800',
    name: 'Sport 800',
    slug: 'sport-800',
    length: 8,
    category: 'sport',
    image: '/images/boat-7.jpg',
    gallery: ['/images/boat-7.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 10,
    engine: '200-350 HP',
    description:
      'A larger high-speed performance cruiser capable of handling offshore sea states with a full athletic crew and increased comfort.',
    features: ['Performance cruising', 'Reinforced offshore sport hull', '8–12 persons'],
    specs: { length: '8.00m', beam: '2.80m', weight: '850kg', maxPower: '350 HP', fuelCapacity: '250L', certification: 'CE Cat B' },
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
    engine: '250-400 HP',
    description:
      'The largest model in the Sport range, serving as a high-speed performance cruiser capable of handling offshore sea states with a full athletic crew.',
    features: ['Performance cruising', 'Reinforced offshore sport hull', '8–12 persons'],
    specs: { length: '9.00m', beam: '3.00m', weight: '1100kg', maxPower: '400 HP', fuelCapacity: '320L', certification: 'CE Cat B' },
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
    description:
      'A compact yet highly capable RIB, designed for ease of management and versatile coastal use. It is optimized for users who require a boat that is easy to trailer and launch but provides the safety of an offshore-capable hull. The design emphasizes a dry ride, utilizing high tube placement to deflect spray.',
    features: ['5.50m length class', 'Multi-purpose day boating', 'Trailer-optimised architecture'],
    specs: { length: '5.50m', beam: '2.20m', weight: '370kg', maxPower: '150 HP', fuelCapacity: '100L', certification: 'CE Cat B' },
  },
  {
    id: 'spirit-650',
    name: 'Spirit 650',
    slug: 'spirit-650',
    length: 6.55,
    category: 'spirit',
    image: '/images/boat-6.jpg',
    gallery: ['/images/boat-6.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 8,
    engine: 'Up to 200 HP',
    description:
      'A significant technical upgrade within the category, featuring a 200-liter fuel capacity and a high-power rating for extended range and speed. Standard equipment is comprehensive, including a 6-position fuse panel, automatic bilge pump, and navigation lights. The helm features a semi-standing "leaning post" seat with an integrated wet bar and a folding table, enhancing social utility. The vessel is rated for a 200 HP outboard, providing professional-grade performance.',
    features: [
      '6-position fuse panel',
      'Automatic bilge pump',
      'Leaning post with wet bar & folding table',
      'Internal 5.55 × 2.00m · tube Ø 0.55m',
    ],
    specs: {
      length: '6.55m',
      beam: '2.48m',
      weight: '760kg',
      maxPower: '200 HP',
      fuelCapacity: '200L',
      certification: 'CE Cat B',
    },
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
    description:
      'Designed for rapid response and high-speed exploration, featuring a streamlined hull profile. Built for the driver who enjoys the mechanical sensation of a high-performance boat. The layout is minimalist, focusing on reducing weight to maximize the performance of the outboard engine.',
    features: ['High-speed streamlining', 'Narrow beam / deep-V', 'Performance helm & navigation'],
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
    description:
      'Provides increased longitudinal stability, allowing the driver to maintain high speeds in more challenging sea states. The additional length allows the hull to span wave crests more effectively, providing a smoother ride at velocity. Habitability is slightly expanded over the 68, with more space for passenger seating and equipment storage.',
    features: ['7.80m length class', 'Enhanced wave-spanning stability', 'High-velocity coastal transit'],
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
    description:
      'Serves as a sophisticated entry point for long-distance cruising. The vessel’s engineering emphasizes electrical redundancy and ventilation, crucial for overnight stays in Mediterranean climates. Standard equipment includes a 10-position electrical panel, comprehensive engine room lighting, and a full electrical installation. The habitability is enhanced by four opening windows and a ceiling hatch, allowing for cross-ventilation. The entry is secured by a high-grade Plexiglass door, and structural hardware includes anchor guides, bow and stern stainless steel (inox) cleats, and a double peripheral elastic fender to protect the tubes from pier abrasion.',
    features: [
      '10-position fuse panel',
      '440L fuel storage',
      '150L freshwater',
      'Double peripheral elastic fender',
      '4 side windows + ceiling hatch',
      'Marine or chemical toilet',
      'Inox railings & Plexiglass entry door',
    ],
    specs: { length: '8.00m', beam: '2.80m', weight: '950kg', maxPower: '300 HP', fuelCapacity: '440L', certification: 'CE Cat B' },
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
    description:
      'Represents a shift toward increased deck utility and higher passenger capacity while maintaining the core "residency" features of the 8. This model builds upon the standard 10-position electrical infrastructure and engine room illumination. The increased length over the Cabin 8 provides a more favorable hull-speed ratio and greater longitudinal stability. It focuses on the professional integration of the mechanical systems within the illuminated maintenance bay, ensuring ease of service during long-range voyages.',
    features: [
      '10-position control board',
      'Illuminated engine compartment',
      'Full navigation lights',
      'Bow and stern inox cleats',
      'Multi-chamber buoyancy system',
    ],
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
    description:
      'The flagship of the residency-focused fleet, engineered for maximum volume and the highest sea-state ratings. Utilizing the same 10-position electrical panel found throughout the series, the Cabin 10 is optimized for extended cruises with a larger crew. The engineering focus is on structural rigidity, using a reinforced GRP hull to support the larger cabin footprint. This model is designed for users who require a permanent maritime residence capable of high-speed transit between island groups.',
    features: [
      '10-position control board',
      'Illuminated engine room',
      'Long-range deep-V cabin hull',
      'Professional-grade navigation lights',
    ],
    specs: { length: '10.00m', beam: '3.20m', weight: '1600kg', maxPower: '500 HP Twin', fuelCapacity: '450L', certification: 'CE Cat A' },
  },
  
  // Top Gun Series
  {
    id: 'topgun-864',
    name: 'Top Gun 864',
    slug: 'top-gun-864',
    length: 8.6,
    category: 'topgun',
    image: '/images/boat-8.jpg',
    gallery: ['/images/boat-8.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 10,
    engine: '250-350 HP',
    description:
      'A high-speed, 8.6-meter cruiser designed for rapid island-hopping with a focus on pilot ergonomics and high-velocity stability.',
    features: ['8.60m length', 'Rapid island-hopping', 'High-velocity pilot ergonomics'],
    specs: { length: '8.60m', beam: '2.95m', weight: '1050kg', maxPower: '350 HP', fuelCapacity: '300L', certification: 'CE Cat B' },
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
    description:
      'The flagship performance cruiser, offering twin-engine capability and maximum deck space for luxury social entertaining at high speeds.',
    features: ['9.64m length', 'Twin-engine capable', 'Maximum deck space for socialising'],
    specs: { length: '9.64m', beam: '3.15m', weight: '1400kg', maxPower: '500 HP Twin', fuelCapacity: '400L', certification: 'CE Cat B' },
  },
  
  // Single Model Series
  {
    id: 'caramel',
    name: 'Caramel',
    slug: 'caramel',
    length: 9.9,
    category: 'caramel',
    image: '/images/boat-7.jpg',
    gallery: ['/images/boat-7.jpg', '/images/hero-boat.jpg', '/images/lifestyle.jpg'],
    passengers: 10,
    engine: '350-500 HP Twin',
    description:
      'One of the most technically advanced platforms in the Mostro lineup, featuring an 8-chamber tube system for maximum safety and a hull length that approaches the 10-meter mark. The engineering focuses on hydrodynamic lift and stability. The 8-chamber design ensures that even in the event of multiple chamber failures, the vessel retains sufficient buoyancy to remain operational. The internal width of 2.46 meters is exceptional for its class, allowing for a spacious deck layout that can accommodate up to 10 passengers in a luxury configuration.',
    features: [
      'Total length 9.90m · hull 9.40m',
      'Total width 3.30m · internal 8.50 × 2.46m',
      'Waterline 8.40m · tubes 45–58cm',
      '8 air chambers · 10 passengers',
    ],
    specs: {
      length: '9.90m',
      beam: '3.30m',
      weight: '1950kg',
      maxPower: '500 HP',
      fuelCapacity: '400L',
      certification: 'CE Cat B',
    },
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
    description:
      'Serves as a premium lifestyle platform, often utilized as a high-end chase boat or a primary vessel for elite coastal social engagements. This model prioritizes the "open-air" experience, with a hull design that provides a stable and dry platform even when carrying a full passenger load. The hull is balanced for both fuel efficiency at cruising speeds and the ability to reach high peak velocities when required.',
    features: [
      'Luxury social performance',
      'Reinforced GRP / Hypalon–Neoprene',
      'Premium upholstery & deck fittings',
      'Full safety & navigation compliance',
    ],
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
    passengers: 10,
    engine: '300-400 HP',
    description:
      'A performance-first RIB, engineered for users who prioritize rapid transit and technical handling. The naval architecture involves a specific strake and step configuration designed to reduce wetted surface area. This allows the vessel to achieve higher speeds with less horsepower compared to heavier cruising hulls. The deck is laid out to ensure the pilot has maximum visibility and access to all critical performance data.',
    features: ['High-speed interceptor profile', 'Performance helm seating', 'Stepped / high-lift hull', 'Rapid transit / sport'],
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
    description:
      'A specialist model featuring reinforced construction and a tactical deck layout, optimized for high-speed endurance and professional interceptor roles.',
    features: ['Tactical reinforcement', 'Professional endurance / interceptor', 'Hostile maritime conditions'],
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
