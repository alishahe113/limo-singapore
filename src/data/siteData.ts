import heroMaybachImg from '../assets/images/hero_changi_limo_1794996321580.jpg';
import alphardImg from '../assets/images/fleet_alphard_lounge_1794996322247.jpg';
import rollsRoyceImg from '../assets/images/fleet_rolls_royce_ghost_1794996321899.jpg';
import vClassImg from '../assets/images/fleet_mercedes_vclass_1794996322980.jpg';
import bmw7Img from '../assets/images/fleet_bmw_7_series_1794996324367.jpg';

import { Vehicle, ServicePageData, GuideArticle, LocationHub, FAQItem, RoutePath } from '../types';

export const IMAGES = {
  heroMaybach: heroMaybachImg,
  alphard: alphardImg,
  rollsRoyce: rollsRoyceImg,
  vClass: vClassImg,
  bmw7: bmw7Img,
};

export const BUSINESS_INFO = {
  brandName: 'Limo Singapore',
  legalName: 'Limo Singapore Pte. Ltd.',
  domain: 'https://limo-singapore.com',
  uen: '201934812K',
  addressLine1: '10 Anson Road, #10-11, International Plaza',
  addressLine2: 'Singapore 079903',
  fullAddress: '10 Anson Road, #10-11, International Plaza, Singapore 079903',
  phoneDisplay: '+65 6817 4290',
  phoneHref: 'tel:+6568174290',
  whatsappDisplay: '+65 8817 4290',
  whatsappNumberRaw: '6588174290',
  whatsappHref:
    'https://wa.me/6588174290?text=Hello%20Limo%20Singapore%2C%20I%20would%20like%20to%20book%20a%20chauffeur%20transfer.',
  email: 'concierge@limo-singapore.com',
  operatingHours: '24 Hours / 7 Days (Including Public Holidays)',
  midnightWindow: '23:30 – 06:30 (+SGD $15 midnight dispatch)',
  googleProfileNote: 'Verified Business Profile Setup Ready — Direct Review Link Sent via WhatsApp Post-Ride',
};

export const VEHICLES: Vehicle[] = [
  {
    id: 'mercedes-e-class',
    name: 'Mercedes-Benz E-Class',
    shortName: 'Mercedes E-Class',
    tagline: 'Entry Changi Airport & CBD executive sedan',
    category: 'Executive Sedan',
    passengers: 3,
    luggage: 2,
    cabinBags: 2,
    airportRate: 80,
    transferRate: 75,
    hourlyRate: 90,
    minHours: 3,
    image: bmw7Img,
    imageAlt: 'executive-black-sedan-changi-airport-transfer-singapore',
    specs: [
      '3 passengers + 2 large 28" suitcases + 2 cabin bags',
      '60 mins free Changi arrival waiting from touchdown',
      'Dual-zone climate control & rear USB-C charging',
      'ERP gantries and airport parking included',
    ],
    bestFor: 'Solo business travellers, couples & CBD point-to-point transfers',
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard Executive Lounge',
    shortName: 'Toyota Alphard Lounge',
    tagline: 'Reclining Ottoman captain seats for families & roadshows',
    category: 'Executive MPV',
    passengers: 6,
    luggage: 5,
    cabinBags: 4,
    airportRate: 95,
    transferRate: 90,
    hourlyRate: 110,
    minHours: 3,
    image: alphardImg,
    imageAlt: 'toyota-alphard-executive-lounge-changi-airport-transfer-singapore',
    specs: [
      '6 passengers + 4–5 large suitcases (with rear row folded for 5+)',
      'Electric reclining Ottoman captain chairs with leg rests',
      'Dual power sliding doors for kerbside boarding',
      'Licensed for Singapore–Malaysia in-car passport clearance',
    ],
    bestFor: 'Family Changi arrivals, JB/KL cross-border trips & C-suite roadshows',
    detailRoute: '/alphard-rental-singapore/',
  },
  {
    id: 'mercedes-v-class',
    name: 'Mercedes-Benz V-Class Extra Long',
    shortName: 'Mercedes V-Class VIP',
    tagline: '7-seater German MPV built for heavy luggage & teams',
    category: 'Executive MPV',
    passengers: 7,
    luggage: 7,
    cabinBags: 5,
    airportRate: 115,
    transferRate: 110,
    hourlyRate: 130,
    minHours: 3,
    image: vClassImg,
    imageAlt: 'mercedes-v-class-7-seater-corporate-chauffeur-singapore',
    specs: [
      '7 passengers + 7 full-size suitcases simultaneously',
      'Optional face-to-face conference cabin seating',
      'Dedicated rear luggage bay divider for golf bags',
      'Individual air-conditioning vents & USB-C at every row',
    ],
    bestFor: '7-pax family airport arrivals, golf groups & financial delegations',
  },
  {
    id: 'bmw-7-series',
    name: 'BMW 7 Series Long Wheelbase',
    shortName: 'BMW 7 Series LWB',
    tagline: 'Long-wheelbase flagship sedan with executive rear legroom',
    category: 'First Class Sedan',
    passengers: 3,
    luggage: 3,
    cabinBags: 2,
    airportRate: 145,
    transferRate: 135,
    hourlyRate: 160,
    minHours: 3,
    image: bmw7Img,
    imageAlt: 'bmw-7-series-long-wheelbase-chauffeur-marina-bay-singapore',
    specs: [
      '3 passengers + 3 large 28" suitcases',
      'Extended rear cabin with power sunblinds',
      'Bowers & Wilkins surround sound & soft-close doors',
      'Quiet acoustic laminated glazing for confidential calls',
    ],
    bestFor: 'Board directors, diplomatic guests & Marina Bay Sands arrivals',
  },
  {
    id: 'mercedes-maybach-s',
    name: 'Mercedes-Maybach S580',
    shortName: 'Mercedes-Maybach S580',
    tagline: 'Twin-executive rear lounge with active road noise cancellation',
    category: 'Ultra-Luxury',
    passengers: 3,
    luggage: 3,
    cabinBags: 2,
    airportRate: 200,
    transferRate: 180,
    hourlyRate: 220,
    minHours: 3,
    image: heroMaybachImg,
    imageAlt: 'mercedes-maybach-s580-vip-limousine-singapore',
    specs: [
      '3 passengers + 3 large suitcases',
      '43.5° reclining rear executive seats with calf rests',
      'Active noise cancellation & chilled rear compartment',
      'Available for Changi JetQuay CIP & Raffles Hotel arrivals',
    ],
    bestFor: 'Private jet transfers, diplomatic visits & VIP weddings',
    detailRoute: '/fleet/maybach/',
  },
  {
    id: 'rolls-royce-ghost',
    name: 'Rolls-Royce Ghost Extended',
    shortName: 'Rolls-Royce Ghost',
    tagline: 'Extended-wheelbase Starlight bridal & VIP flagship',
    category: 'Ultra-Luxury',
    passengers: 3,
    luggage: 3,
    cabinBags: 2,
    airportRate: 400,
    transferRate: 380,
    hourlyRate: 450,
    minHours: 4,
    image: rollsRoyceImg,
    imageAlt: 'rolls-royce-ghost-extended-wedding-car-raffles-hotel-singapore',
    specs: [
      '3 passengers + 3 suitcases (extended rear legroom)',
      'Coach doors with power-assisted closing & umbrellas',
      'Starlight headliner & rear privacy curtains',
      'Includes early ribbon-staging slot for bridal ceremonies',
    ],
    bestFor: 'Weddings at Capella/Raffles Hotel, gala arrivals & state guests',
    detailRoute: '/fleet/rolls-royce-ghost/',
  },
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    id: 'faq-meet-greet',
    category: 'Changi Airport',
    question: 'Where exactly does my chauffeur meet me at Changi Airport?',
    answer:
      'For Terminals 1, 2, 3, and 4, your chauffeur tracks your flight on Changi Airport Group radar and waits inside the public Arrival Hall directly past the baggage claim exit doors holding a digital name board. If you are travelling through the JetQuay CIP Terminal or Seletar Business Aviation Centre, your chauffeur stages at the private driveway bay.',
  },
  {
    id: 'faq-wait-time',
    category: 'Waiting Time',
    question: 'How much complimentary waiting time is included?',
    answer:
      'All Changi Airport and Seletar Airport arrival pickups include 60 minutes of complimentary waiting time starting from actual flight touchdown—not scheduled arrival time. Point-to-point city, hotel, and corporate transfers include 15 minutes of complimentary waiting time.',
  },
  {
    id: 'faq-pricing',
    category: 'Transparent Rates',
    question: 'What is included in your quoted transfer fare, and are there extra fees?',
    answer:
      'Quoted rates include vehicle hire, fuel, licensed English-speaking chauffeur, Electronic Road Pricing (ERP) gantries, Changi Airport carpark charges, and Sentosa island admission where applicable. Only late-night pickups between 23:30 and 06:30 carry a flat SGD $15 midnight dispatch fee, and extra ad-hoc stops en route are SGD $15 per stop.',
  },
  {
    id: 'faq-alphard-vclass',
    category: 'Vehicle Capacity',
    question: 'Should I book the Toyota Alphard Executive Lounge or Mercedes-Benz V-Class?',
    answer:
      'Book the Toyota Alphard Executive Lounge for up to 4–5 passengers with 4 large 28-inch suitcases who prioritise individual reclining Ottoman captain seats. Book the Mercedes-Benz V-Class Extra Long if you have 6–7 passengers travelling with 6–7 full-size suitcases or bulky golf bags.',
  },
  {
    id: 'faq-malaysia',
    category: 'Cross-Border',
    question: 'Do we have to get out of the vehicle at Woodlands or Tuas immigration?',
    answer:
      'No. In our licensed cross-border Toyota Alphard and Mercedes-Benz V-Class MPVs, passengers remain inside the air-conditioned cabin while passing through Singapore and Malaysia immigration counters at Woodlands Causeway or Tuas Second Link.',
  },
  {
    id: 'faq-cancellation',
    category: 'Policies',
    question: 'What is your cancellation and flight delay policy?',
    answer:
      'Cancellations made at least 24 hours before pickup receive a full refund. If your flight into Singapore is delayed or rescheduled, notify dispatch on WhatsApp with your updated flight number and your chauffeur schedule shifts automatically at no extra charge.',
  },
];

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  '/changi-airport-transfer/': {
    slug: '/changi-airport-transfer/',
    titleTag: 'Changi Airport Limo Transfer Singapore | From SGD $80 Fixed',
    metaDescription:
      '24/7 Changi Airport limousine transfers (T1–T4 & JetQuay). 60-min free arrival waiting, flight tracking, name-board meet & greet. Alphard, V-Class, Maybach from $80.',
    primaryKeyword: 'changi airport limo transfer',
    secondaryKeywords: [
      'changi airport transfer to hotel',
      'airport limousine singapore price',
      'changi meet and greet service',
      '7 seater airport transfer singapore',
    ],
    categoryLabel: 'Airport Arrival & Departure',
    h1: 'Changi Airport Limousine Transfer — T1, T2, T3, T4 & JetQuay',
    leadSummary:
      'Fixed-rate private airport pickups across all four Changi terminals and JetQuay CIP Terminal from SGD $80. Includes live flight radar sync, 60 minutes complimentary waiting after touchdown, Arrival Hall meet-and-greet, ERP tolls, and airport parking.',
    heroImage: alphardImg,
    heroImageAlt: 'toyota-alphard-changi-airport-transfer-singapore',
    startingPriceSgd: 80,
    waitingPolicy: '60 mins free from actual landing (15 mins for departure pickups)',
    meetPoint: 'Arrival Hall exit past customs with digital name board',
    sections: [
      {
        heading: 'Exact Terminal Meet-and-Greet Procedures (T1, T2, T3, T4 & JetQuay)',
        paragraphs: [
          'Navigating Changi Airport after a long-haul flight should never involve queuing at taxi stands or hauling suitcases across multi-storey carpark linkbridges. When you book a Changi airport limo transfer with Limo Singapore, your chauffeur is assigned 12 hours before landing and receives your flight number, terminal, and mobile WhatsApp contact.',
          'Rather than waiting outside at the kerbside—where Airport Police strictly prohibit idling—your chauffeur parks inside the designated terminal basement carpark and walks into the Arrival Hall before your baggage hits the carousel. You will spot them immediately past the customs glass doors holding a clear tablet displaying your name or corporate logo.',
        ],
        bulletPoints: [
          'Terminal 1: Arrival Hall Central Exit near the Information Counter (short 2-minute walk to basement VIP lift bay).',
          'Terminal 2: Arrival Hall North/South Exit adjacent to Coach & Limousine Pickup Zone.',
          'Terminal 3: Arrival Hall Central Exit facing Jewel linkway (direct lift access to B2 Limousine Bay).',
          'Terminal 4: Arrival Hall Exit next to the heritage shophouse facade (fast covered pickup lane).',
          'JetQuay CIP Terminal: Private tarmac/buggy arrival porch with direct boot loading.',
        ],
      },
      {
        heading: '60 Minutes Complimentary Waiting & Real-Time Flight Sync',
        paragraphs: [
          'Flight schedules into Singapore frequently shift due to headwinds or ATC holding patterns. Our 24/7 operations desk monitors Changi Airport Group (CAG) live flight feeds. If SQ321 or EK354 lands 45 minutes late—or 25 minutes early—your driver’s arrival time automatically adjusts without any rescheduling fee.',
          'Your 60-minute complimentary waiting clock only starts once the aircraft wheels touch down at Changi, giving you unhurried time for automated e-gate immigration, duty-free collection, and baggage reclaim. Every quote already covers Changi parking fees and all ERP gantries into Marina Bay, Orchard, or Sentosa.',
        ],
      },
      {
        heading: 'Choosing the Right Vehicle for Your Baggage Count',
        paragraphs: [
          'Luggage volume—not just headcount—determines whether an airport transfer is comfortable. Standard sedans hold 2–3 check-in suitcases before bags spill into passenger seats. For families of four or more, or executives travelling with golf bags and Pelican cases, our Toyota Alphard Executive Lounge and Mercedes-Benz V-Class Extra Long provide upright loading space without compromising legroom.',
        ],
        bulletPoints: [
          'Mercedes-Benz E-Class (SGD $80): Best for 1–3 passengers with 2 large 28" suitcases + 2 cabin bags.',
          'Toyota Alphard Executive Lounge (SGD $95): Seats 4–6 passengers with 4–5 large suitcases; electric Ottoman seats.',
          'Mercedes-Benz V-Class Extra Long (SGD $115): Seats up to 7 passengers with 7 full-size suitcases simultaneously.',
          'BMW 7 Series LWB (SGD $145) & Mercedes-Maybach S580 (SGD $200): Flagship sedans for 1–3 VIP guests.',
        ],
      },
    ],
    pricingTable: [
      {
        routeOrPackage: 'Changi Airport (T1–T4) to CBD / Marina Bay / Orchard',
        eClass: 'SGD $80',
        alphard: 'SGD $95',
        vClass: 'SGD $115',
        maybachOrGhost: 'SGD $200 / $400',
        notes: '60-min wait, ERP & parking included',
      },
      {
        routeOrPackage: 'Changi Airport to Sentosa Island Hotels',
        eClass: 'SGD $90',
        alphard: 'SGD $105',
        vClass: 'SGD $125',
        maybachOrGhost: 'SGD $215 / $420',
        notes: 'Sentosa gantry admission included',
      },
      {
        routeOrPackage: 'City / Hotel Departure to Changi Airport',
        eClass: 'SGD $75',
        alphard: 'SGD $90',
        vClass: 'SGD $110',
        maybachOrGhost: 'SGD $180 / $380',
        notes: '15-min pickup grace period',
      },
      {
        routeOrPackage: 'JetQuay CIP Terminal Meet & Greet',
        eClass: 'SGD $95',
        alphard: 'SGD $110',
        vClass: 'SGD $130',
        maybachOrGhost: 'SGD $220 / $420',
        notes: 'Direct CIP driveway staging',
      },
    ],
    faqs: [
      {
        id: 'cat-faq-1',
        category: 'Changi Airport',
        question: 'Is there an extra charge if my flight arrives past midnight?',
        answer:
          'Pickups scheduled or delayed into the 23:30–06:30 window carry a flat SGD $15 midnight dispatch surcharge, confirmed upfront before dispatch.',
      },
      {
        id: 'cat-faq-2',
        category: 'Changi Airport',
        question: 'Can you provide infant or child booster seats for Changi transfers?',
        answer:
          'Yes. Under Singapore LTA Road Traffic rules, passengers under 1.35m require an approved child restraint. Add the child’s age when booking and we fit an ISOFIX seat or booster at SGD $15 per trip.',
      },
      {
        id: 'cat-faq-3',
        category: 'Changi Airport',
        question: 'What if I have multiple hotel drop-offs in one booking?',
        answer:
          'Additional drop-offs along the same general corridor are SGD $15 per stop, or you may upgrade to a 3-hour hourly charter if stops span across the island.',
      },
    ],
    relatedSlugs: ['/alphard-rental-singapore/', '/marina-bay-sands-limo/', '/sentosa-limo/', '/seletar-airport-transfer/'],
  },

  '/alphard-rental-singapore/': {
    slug: '/alphard-rental-singapore/',
    titleTag: 'Toyota Alphard Rental with Driver Singapore | Executive Lounge',
    metaDescription:
      'Hire a Toyota Alphard Executive Lounge with chauffeur in Singapore from SGD $90. 6 passenger seats, 5-suitcase capacity, Ottoman recliners for airport, corporate & Malaysia trips.',
    primaryKeyword: 'alphard with driver singapore',
    secondaryKeywords: ['toyota alphard limo singapore', 'alphard rental with driver singapore', '7 seater mpv singapore'],
    categoryLabel: 'Signature MPV Fleet',
    h1: 'Toyota Alphard Executive Lounge with Chauffeur in Singapore',
    leadSummary:
      'Singapore’s most requested luxury MPV for airport arrivals, corporate roadshows, and family charters. Seats up to 6 passengers with reclining Ottoman captain chairs, dual power sliding doors, and room for 5 large suitcases.',
    heroImage: alphardImg,
    heroImageAlt: 'toyota-alphard-with-driver-singapore-executive-lounge',
    startingPriceSgd: 90,
    waitingPolicy: '60 mins free at Changi Airport · 15 mins for city/hotel pickups',
    meetPoint: 'Hotel porte-cochère, office tower lobby, or Changi Arrival Hall',
    sections: [
      {
        heading: 'Why Corporate & Family Travellers Choose the Toyota Alphard Executive Lounge',
        paragraphs: [
          'In Singapore’s humid climate and dense CBD drop-off bays, the Toyota Alphard Executive Lounge solves two practical problems simultaneously: high-roof kerbside boarding through dual electric sliding doors, and true business-class legroom inside the second-row Ottoman captain seats.',
          'Unlike ride-hailing MPVs where third-row passengers sit cramped with luggage stacked beside them, our Executive Lounge units are maintained exclusively for private chauffeur service—featuring black Nappa leather upholstery, triple-zone Nanoe-X cabin air purification, privacy sunshades, and onboard USB-C fast charging.',
        ],
        bulletPoints: [
          'Seating Layout: 2 front (1 passenger beside driver if needed) + 2 second-row Ottoman captain chairs + 3rd row bench (comfortable for 5–6 adults total).',
          'Luggage Configuration: Holds 4 large 28" suitcases + 4 cabin bags with all 6 seats upright, or 6+ large suitcases with one half of the 3rd row folded.',
          'Ride Comfort: Sound-insulated cabin and soft rear suspension ideal for taking calls between Raffles Place, Suntec, and Jurong.',
        ],
      },
      {
        heading: 'Toyota Alphard vs Mercedes-Benz V-Class: Exact Comparison',
        paragraphs: [
          'Clients frequently ask whether to reserve an Alphard with driver in Singapore or step up to the Mercedes-Benz V-Class Extra Long. The decision comes down to cabin posture versus maximum boot volume: the Alphard offers softer reclining captain chairs for 4–5 passengers, whereas the V-Class handles 7 adults plus 7 full-size suitcases without folding a single seat.',
        ],
      },
    ],
    pricingTable: [
      {
        routeOrPackage: 'Point-to-Point City Transfer (One Way)',
        eClass: 'SGD $75',
        alphard: 'SGD $90',
        vClass: 'SGD $110',
        maybachOrGhost: 'SGD $180 / $380',
        notes: 'Includes ERP & fuel',
      },
      {
        routeOrPackage: 'Changi Airport Arrival Meet & Greet',
        eClass: 'SGD $80',
        alphard: 'SGD $95',
        vClass: 'SGD $115',
        maybachOrGhost: 'SGD $200 / $400',
        notes: '60 mins free waiting',
      },
      {
        routeOrPackage: 'Hourly Chauffeur Charter (Min 3 Hours)',
        eClass: 'SGD $90/hr',
        alphard: 'SGD $110/hr',
        vClass: 'SGD $130/hr',
        maybachOrGhost: 'SGD $220 / $450/hr',
        notes: 'Unlimited stops in Singapore',
      },
      {
        routeOrPackage: 'Full-Day 10-Hour Executive Disposal',
        eClass: 'SGD $820',
        alphard: 'SGD $980',
        vClass: 'SGD $1,150',
        maybachOrGhost: 'SGD $1,950 / $3,800',
        notes: '10% multi-hour corporate discount',
      },
    ],
    faqs: [
      {
        id: 'alp-1',
        category: 'Alphard',
        question: 'Can 6 adults with 6 large suitcases fit inside one Toyota Alphard?',
        answer:
          'Six adults with 4 large suitcases and 3–4 carry-on bags fit comfortably. If all 6 travellers have full-size 28-inch check-in suitcases, we strongly recommend our Mercedes-Benz V-Class Extra Long (SGD $115 airport / $110 city) so no luggage occupies passenger seating.',
      },
      {
        id: 'alp-2',
        category: 'Alphard',
        question: 'Is the Alphard available for cross-border trips to Johor Bahru and Kuala Lumpur?',
        answer:
          'Yes. Our cross-border Toyota Alphard fleet holds valid Singapore LTA and Malaysia JPJ/APAD commercial permits, letting you remain seated through Woodlands and Tuas immigration.',
      },
    ],
    relatedSlugs: ['/changi-airport-transfer/', '/singapore-to-malaysia-limo/', '/hourly-chauffeur-singapore/', '/corporate-chauffeur-singapore/'],
  },

  '/singapore-to-malaysia-limo/': {
    slug: '/singapore-to-malaysia-limo/',
    titleTag: 'Singapore to Malaysia Limo | JB, Desaru, Malacca & KL Transfer',
    metaDescription:
      'Private cross-border limousine from Singapore to Johor Bahru, Legoland, Desaru, Malacca, and Kuala Lumpur. Remain seated in your Alphard or V-Class at immigration.',
    primaryKeyword: 'singapore to kl limo',
    secondaryKeywords: [
      'singapore to johor bahru limo',
      'singapore to malacca private car',
      'singapore to desaru transfer',
      'cross border taxi singapore malaysia',
    ],
    categoryLabel: 'Cross-Border Private MPV',
    h1: 'Singapore to Malaysia Private Limousine — JB, Desaru, Malacca & KL',
    leadSummary:
      'Direct door-to-door private MPV travel from any Singapore address or Changi Airport to Johor Bahru, Legoland, Desaru Coast, Malacca, Genting Highlands, and Kuala Lumpur. Stay inside your Toyota Alphard or Mercedes-Benz V-Class throughout customs clearance.',
    heroImage: vClassImg,
    heroImageAlt: 'singapore-to-malaysia-cross-border-mpv-limousine',
    startingPriceSgd: 160,
    waitingPolicy: 'Door-to-door pickup · Direct Causeway or Tuas Second Link crossing',
    meetPoint: 'Any Singapore home, hotel, office, or Changi Airport Arrival Hall',
    sections: [
      {
        heading: 'No Alighting at Woodlands or Tuas Immigration Counters',
        paragraphs: [
          'Travelling by public bus or KTM shuttle requires unloading every suitcase at Singapore Woodlands Checkpoint, clearing customs on foot, re-boarding, and repeating the queue at Johor Sultan Iskandar Building. With Limo Singapore’s cross-border service, your driver enters the dedicated passenger car lanes at Woodlands Causeway or Tuas Second Link while your family or executives remain comfortably seated.',
          'All drivers hold full cross-border commercial permits, Malaysia VEP (Vehicle Entry Permit) registration, and Touch ‘n Go highway cards—meaning every Malaysia toll and Malaysian Road Charge (RC) is already built into your fixed fare.',
        ],
        bulletPoints: [
          'Johor Bahru & Legoland Iskandar Puteri: ~60–90 minutes depending on border traffic.',
          'Desaru Coast (One&Only, Anantara, Westin): ~2 hours via Senai–Desaru Expressway.',
          'Malacca Heritage Zone: ~3 to 3.5 hours via North–South Expressway.',
          'Kuala Lumpur (KLCC, Pavilion, TRX): ~4.5 to 5 hours direct door-to-door.',
        ],
      },
      {
        heading: 'Passport & MDAC Immigration Checklist Before Departure',
        paragraphs: [
          'To ensure zero delays at the border booth, our dispatch team verifies your travel checklist 24 hours prior to pickup. Foreign passport holders entering Malaysia must complete the free Malaysia Digital Arrival Card (MDAC) online within 3 days before crossing, and all passports require at least 6 months remaining validity.',
        ],
      },
    ],
    pricingTable: [
      {
        routeOrPackage: 'Singapore ↔ Johor Bahru / Senai / Legoland (One Way)',
        eClass: 'N/A (MPV Only)',
        alphard: 'SGD $160',
        vClass: 'SGD $190',
        maybachOrGhost: 'On Request',
        notes: 'All tolls, VEP & RC included',
      },
      {
        routeOrPackage: 'Singapore ↔ Desaru Coast Resorts (One Way)',
        eClass: 'N/A (MPV Only)',
        alphard: 'SGD $240',
        vClass: 'SGD $280',
        maybachOrGhost: 'On Request',
        notes: 'Direct Senai–Desaru Expressway',
      },
      {
        routeOrPackage: 'Singapore ↔ Malacca City / Jonker Street (One Way)',
        eClass: 'N/A (MPV Only)',
        alphard: 'SGD $420',
        vClass: 'SGD $480',
        maybachOrGhost: 'On Request',
        notes: '3–3.5 hr private door-to-door',
      },
      {
        routeOrPackage: 'Singapore ↔ Kuala Lumpur / Genting Highlands (One Way)',
        eClass: 'N/A (MPV Only)',
        alphard: 'SGD $620',
        vClass: 'SGD $700',
        maybachOrGhost: 'On Request',
        notes: 'Includes PLUS highway tolls',
      },
    ],
    faqs: [
      {
        id: 'my-1',
        category: 'Cross-Border',
        question: 'Can you pick us up directly from Changi Airport and drive straight to JB or KL?',
        answer:
          'Yes. We collect you at Changi Arrival Hall after you clear Singapore immigration and proceed directly via the TPE/SLE or PIE/AYE toward Woodlands or Tuas.',
      },
      {
        id: 'my-2',
        category: 'Cross-Border',
        question: 'Are return day-trips (e.g., Singapore to JB or Desaru and back) available?',
        answer:
          'Yes. Same-day return packages with 4–8 hours of driver standby in Johor Bahru or Desaru can be booked at a combined round-trip discount.',
      },
    ],
    relatedSlugs: ['/alphard-rental-singapore/', '/changi-airport-transfer/', '/guides/'],
  },

  '/wedding-car-singapore/': {
    slug: '/wedding-car-singapore/',
    titleTag: 'Wedding Car Rental Singapore | Rolls-Royce & Maybach with Driver',
    metaDescription:
      'Chauffeured bridal cars in Singapore: Rolls-Royce Ghost Extended, Mercedes-Maybach S580, and BMW 7 Series with early floral staging slot & uniformed driver. Packages from SGD $580.',
    primaryKeyword: 'wedding car rental singapore',
    secondaryKeywords: ['bridal car singapore', 'rolls royce wedding car singapore', 'luxury wedding car singapore'],
    categoryLabel: 'Bridal & Ceremonial Fleet',
    h1: 'Luxury Wedding Car Rental with Chauffeur in Singapore',
    leadSummary:
      'Arrive at your solemnisation, church ceremony, or banquet hotel in an obsidian Rolls-Royce Ghost Extended or Mercedes-Maybach S580. Every bridal charter includes a complimentary 1-hour early arrival at your florist for silk ribbon or fresh floral bonnet staging.',
    heroImage: rollsRoyceImg,
    heroImageAlt: 'rolls-royce-ghost-wedding-car-rental-singapore',
    startingPriceSgd: 580,
    waitingPolicy: 'Includes 60-min early staging window at florist or groom pickup',
    meetPoint: 'Groom residence, florist workshop, and banquet hotel porte-cochère',
    sections: [
      {
        heading: 'Built Around Singapore Chinese & Western Bridal Timelines',
        paragraphs: [
          'Singapore wedding mornings run on auspicious gatecrashing and tea-ceremony windows where a 10-minute delay affects photographers, elders, and banquet schedules. Our wedding chauffeurs arrive 30 minutes prior to the morning gatecrash departure—or proceed directly to your florist the afternoon before or morning-of to ensure floral ribbons are tied cleanly without damaging paintwork.',
          'In addition to the bridal Rolls-Royce Ghost or Mercedes-Maybach S580, many couples add matching Toyota Alphard Executive Lounge MPVs for parents, elders, and bridesmaids so the entire entourage moves in synchronised timing across Capella Sentosa, Raffles Hotel, Fullerton Bay, or St. Regis.',
        ],
        bulletPoints: [
          'Complimentary 60-minute florist ribbon-tying slot included before charter hours begin.',
          'Uniformed chauffeur in tailored dark suit with umbrella assistance during monsoon showers.',
          'Backup vehicle guarantee: standby flagship vehicle reserved on your wedding date.',
        ],
      },
    ],
    pricingTable: [
      {
        routeOrPackage: '4-Hour Solemnisation / Evening Banquet Package',
        eClass: 'SGD $420',
        alphard: 'SGD $480',
        vClass: 'SGD $540',
        maybachOrGhost: 'SGD $880 / $1,680',
        notes: 'Includes early floral staging',
      },
      {
        routeOrPackage: '8-Hour Full Morning Gatecrash + Tea Ceremony',
        eClass: 'SGD $760',
        alphard: 'SGD $880',
        vClass: 'SGD $980',
        maybachOrGhost: 'SGD $1,580 / $2,880',
        notes: '07:00–15:00 standard window',
      },
      {
        routeOrPackage: '10-Hour Full Wedding Day Charter',
        eClass: 'SGD $920',
        alphard: 'SGD $1,050',
        vClass: 'SGD $1,180',
        maybachOrGhost: 'SGD $1,880 / $3,480',
        notes: 'Split shift option available',
      },
    ],
    faqs: [
      {
        id: 'wed-1',
        category: 'Wedding',
        question: 'Can our florist use suction cups or ribbon ties on the Rolls-Royce Ghost?',
        answer:
          'Only soft non-abrasive satin ribbons and clean microfibre-backed floral suction mounts are permitted on the Rolls-Royce and Maybach paintwork. Wire or adhesive tape is never used.',
      },
    ],
    relatedSlugs: ['/fleet/rolls-royce-ghost/', '/fleet/maybach/', '/sentosa-limo/'],
  },

  '/corporate-chauffeur-singapore/': {
    slug: '/corporate-chauffeur-singapore/',
    titleTag: 'Corporate Chauffeur Service Singapore | Roadshows, F1 & MICE',
    metaDescription:
      'Dedicated corporate chauffeur service in Singapore for financial roadshows, C-suite visits, Singapore Airshow, F1 Grand Prix 2026 & MBS Expo MICE delegations.',
    primaryKeyword: 'corporate chauffeur service singapore',
    secondaryKeywords: ['f1 singapore limo', 'corporate roadshow car singapore', 'MICE transport singapore', 'event transport singapore'],
    categoryLabel: 'Executive & MICE Mobility',
    h1: 'Corporate Chauffeur Service, Financial Roadshows & MICE Event Fleet',
    leadSummary:
      'Dedicated multi-stop executive roadshows across Raffles Place, MBFC, One-North, and Jurong—plus synchronised multi-vehicle dispatch for Singapore Grand Prix F1 2026, Singapore Airshow, and Marina Bay Sands Expo conventions.',
    heroImage: vClassImg,
    heroImageAlt: 'corporate-chauffeur-service-singapore-financial-district',
    startingPriceSgd: 90,
    waitingPolicy: 'Standby chauffeur on call throughout full roadshow itinerary',
    meetPoint: 'MBFC, Ocean Financial Centre, Raffles Place, Suntec & MBS Expo bays',
    sections: [
      {
        heading: 'Financial Roadshows & Confidential NDA Chauffeurs',
        paragraphs: [
          'Investor roadshows in Singapore run tight 45-minute meeting slots between Marina Bay Financial Centre, Six Battery Road, CapitaSpring, and One-North. Our corporate roadshow drivers know every basement VIP drop-off security gate and pre-register licence plates with building concierges so principals never walk through rain or wait at congested taxi queues.',
          'Every corporate chauffeur signs a strict non-disclosure agreement (NDA) prohibiting phone use or recording inside the vehicle, and corporate accounts receive consolidated 30-day monthly PDF invoices with ride-by-ride cost centre tags.',
        ],
        bulletPoints: [
          'Dedicated WhatsApp dispatch coordinator for real-time schedule changes.',
          'Itemised GST-ready corporate statements and OCBC/Citi/AMEX concierge receipts.',
          'Multi-vehicle fleet staging for visiting boards (up to 15 Alphards & V-Class units simultaneously).',
        ],
      },
      {
        heading: 'Seasonal Major Events: F1 Singapore Grand Prix 2026, Airshow & MBS MICE',
        paragraphs: [
          'During Marina Bay street circuit closures for the Singapore Grand Prix F1 weekend, Changi Exhibition Centre slots for Singapore Airshow, and major FinTech Festival or Milken summits at Marina Bay Sands, regular ride-hailing fails completely near restricted zones. We coordinate verified hospitality pass drop-off lanes and standby staging hubs outside perimeter roadblocks.',
        ],
      },
    ],
    pricingTable: [
      {
        routeOrPackage: 'Hourly Corporate Roadshow (Min 3 Hours)',
        eClass: 'SGD $90/hr',
        alphard: 'SGD $110/hr',
        vClass: 'SGD $130/hr',
        maybachOrGhost: 'SGD $220 / $450/hr',
        notes: 'Unlimited CBD & island stops',
      },
      {
        routeOrPackage: 'Full-Day 10-Hour Roadshow Disposal',
        eClass: 'SGD $820',
        alphard: 'SGD $980',
        vClass: 'SGD $1,150',
        maybachOrGhost: 'SGD $1,950 / $3,800',
        notes: 'Includes dedicated coordinator',
      },
      {
        routeOrPackage: 'F1 Grand Prix / Major MICE Event Day Charter',
        eClass: 'SGD $950',
        alphard: 'SGD $1,150',
        vClass: 'SGD $1,350',
        maybachOrGhost: 'SGD $2,250 / $4,200',
        notes: '10-hr priority perimeter staging',
      },
    ],
    faqs: [
      {
        id: 'corp-1',
        category: 'Corporate',
        question: 'Do you support corporate invoicing and credit card concierge reimbursements?',
        answer:
          'Yes. Corporate partners can open a 30-day consolidated monthly billing account, or pay per trip via corporate Visa/Mastercard/AMEX with itemised receipts suitable for expense claims and bank travel entitlements.',
      },
    ],
    relatedSlugs: ['/hourly-chauffeur-singapore/', '/marina-bay-sands-limo/', '/seletar-airport-transfer/', '/fleet/maybach/'],
  },

  '/hourly-chauffeur-singapore/': {
    slug: '/hourly-chauffeur-singapore/',
    titleTag: 'Hourly Car with Driver Singapore | Private Chauffeur from $90/hr',
    metaDescription:
      'Hire a luxury car with private driver by the hour in Singapore (min 3 hours). Unlimited stops across Orchard, Dempsey, Sentosa & CBD with ERP and parking included.',
    primaryKeyword: 'hourly car with driver singapore',
    secondaryKeywords: ['private driver singapore', 'luxury car with driver singapore', 'hourly chauffeur singapore'],
    categoryLabel: 'On-Demand Standby Charter',
    h1: 'Hourly Chauffeur & Private Car with Driver in Singapore',
    leadSummary:
      'Keep a dedicated vehicle and uniformed chauffeur on continuous standby across Singapore from SGD $90/hour (3-hour minimum). Unlimited stops for meetings, Orchard shopping, medical visits at Mount Elizabeth Novena, or evening dining.',
    heroImage: bmw7Img,
    heroImageAlt: 'hourly-car-with-driver-singapore-bmw-7-series',
    startingPriceSgd: 90,
    waitingPolicy: 'Chauffeur stays on standby nearby throughout your entire charter window',
    meetPoint: 'Any Singapore residence, hotel, medical suite, or dining venue',
    sections: [
      {
        heading: 'Zero Waiting Between Stops Across the Island',
        paragraphs: [
          'When an afternoon spans three or four locations—for example, a morning appointment at Mount Elizabeth Novena, lunch at Dempsey Hill, shopping at Paragon or ION Orchard, and dinner at Marina Bay—booking separate point-to-point cars wastes 15–20 minutes per leg waiting at drop-off bays.',
          'With an hourly car with driver in Singapore, you leave shopping bags, jackets, and luggage locked inside the climate-controlled cabin while your chauffeur waits nearby and pulls up within 2 minutes of your WhatsApp message.',
        ],
      },
    ],
    pricingTable: [
      {
        routeOrPackage: '3-Hour Minimum Hourly Charter',
        eClass: 'SGD $270 (3 hrs)',
        alphard: 'SGD $330 (3 hrs)',
        vClass: 'SGD $390 (3 hrs)',
        maybachOrGhost: 'SGD $660 / $1,800',
        notes: 'Additional hours billed pro-rata',
      },
      {
        routeOrPackage: '6-Hour Half-Day Private Disposal',
        eClass: 'SGD $510',
        alphard: 'SGD $630',
        vClass: 'SGD $740',
        maybachOrGhost: 'SGD $1,250 / $2,400',
        notes: 'Fuel & standard ERP included',
      },
    ],
    faqs: [
      {
        id: 'hr-1',
        category: 'Hourly Charter',
        question: 'Can I extend an hourly booking mid-trip if meetings run long?',
        answer:
          'Yes. Simply inform your chauffeur or message our 24/7 WhatsApp dispatch at least 30 minutes before the charter ends; overtime is billed at the standard hourly rate for your vehicle class.',
      },
    ],
    relatedSlugs: ['/corporate-chauffeur-singapore/', '/alphard-rental-singapore/', '/marina-bay-sands-limo/'],
  },

  '/marina-bay-sands-limo/': {
    slug: '/marina-bay-sands-limo/',
    titleTag: 'Limo to Marina Bay Sands Singapore | Changi to MBS from $80',
    metaDescription:
      'Direct private limousine transfers between Changi Airport and Marina Bay Sands Hotel, Paiza VIP entrance & MBS Expo. Fixed fares from SGD $80 with zero ERP surprises.',
    primaryKeyword: 'limo to marina bay sands',
    secondaryKeywords: ['changi airport to marina bay sands limo', 'marina bay sands chauffeur singapore'],
    categoryLabel: 'Destination Limo Hub',
    h1: 'Marina Bay Sands Limousine & Changi-to-MBS Transfers',
    leadSummary:
      '18-minute express East Coast Parkway (ECP) transfers linking Changi Airport Terminals 1–4 directly to Marina Bay Sands Hotel Tower 1–3, Paiza VIP porte-cochère, or Sands Expo & Convention Centre.',
    heroImage: heroMaybachImg,
    heroImageAlt: 'limousine-to-marina-bay-sands-hotel-singapore',
    startingPriceSgd: 80,
    waitingPolicy: '60 mins free at Changi · 15 mins free at MBS Hotel Tower driveways',
    meetPoint: 'MBS Hotel Tower 1, 2, or 3 VIP Porte-Cochère / Sands Expo Bay',
    sections: [
      {
        heading: 'Exact Pickup & Drop-Off Bays at Marina Bay Sands',
        paragraphs: [
          'Marina Bay Sands spans three hotel towers, the Sands Expo & Convention Centre, The Shoppes, and the Paiza VIP wing—each with separate vehicular driveways along Bayfront Avenue. Our chauffeurs coordinate directly with your tower number or restaurant reservation (such as Spago, Wakuda, or Mott 32) so you step out right beside the correct lift lobby.',
          'The average drive between Changi Airport and Marina Bay Sands via the ECP takes 18–22 minutes in normal traffic. Your fixed fare covers all ECP and Marina Coastal Expressway (MCE) ERP charges.',
        ],
      },
    ],
    pricingTable: [
      {
        routeOrPackage: 'Changi Airport (T1–T4) → Marina Bay Sands',
        eClass: 'SGD $80',
        alphard: 'SGD $95',
        vClass: 'SGD $115',
        maybachOrGhost: 'SGD $200 / $400',
        notes: '18–22 min ECP express route',
      },
      {
        routeOrPackage: 'Marina Bay Sands ↔ Orchard / Sentosa / CBD',
        eClass: 'SGD $75',
        alphard: 'SGD $90',
        vClass: 'SGD $110',
        maybachOrGhost: 'SGD $180 / $380',
        notes: 'Point-to-point fixed fare',
      },
    ],
    faqs: [
      {
        id: 'mbs-1',
        category: 'Marina Bay Sands',
        question: 'How much is a limo from Changi Airport to Marina Bay Sands?',
        answer:
          'A fixed private transfer from Changi Airport to Marina Bay Sands starts at SGD $80 in a Mercedes-Benz E-Class, SGD $95 in a Toyota Alphard Executive Lounge (up to 6 pax), SGD $115 in a Mercedes-Benz V-Class (up to 7 pax), and SGD $200 in a Mercedes-Maybach S580.',
      },
    ],
    relatedSlugs: ['/changi-airport-transfer/', '/sentosa-limo/', '/cruise-centre-transfer/'],
  },

  '/sentosa-limo/': {
    slug: '/sentosa-limo/',
    titleTag: 'Sentosa Island Limo Service | Capella, Resorts World & Cove',
    metaDescription:
      'Private chauffeur transfers to Capella Singapore, Crockfords Tower, W Singapore Sentosa Cove & ONE°15 Marina. Sentosa island entry gantry fee included in every quote.',
    primaryKeyword: 'sentosa limo service',
    secondaryKeywords: ['limo to sentosa singapore', 'capella sentosa transfer', 'resorts world sentosa chauffeur'],
    categoryLabel: 'Resort & Island Transfers',
    h1: 'Sentosa Island & Resorts World Private Limousine Transfers',
    leadSummary:
      'Door-to-door chauffeur service across Sentosa Gateway to Capella Singapore, Resorts World Sentosa Crockfords Tower, W Singapore Sentosa Cove, and ONE°15 Marina—with Sentosa island admission fee included.',
    heroImage: rollsRoyceImg,
    heroImageAlt: 'sentosa-island-luxury-limousine-transfer-singapore',
    startingPriceSgd: 85,
    waitingPolicy: '60 mins free from Changi Airport · 15 mins free at Sentosa resorts',
    meetPoint: 'Hotel main porte-cochère, Sentosa Cove marina berth, or RWS VIP lobby',
    sections: [
      {
        heading: 'Seamless Entry Past Sentosa Gateway Gantries',
        paragraphs: [
          'Every vehicle entering Sentosa Island incurs dynamic island admission gantry fees depending on time of day. With Limo Singapore, Sentosa entry fees are factored directly into your upfront transfer rate—no awkward stop-and-pay delays or unexpected post-ride charges.',
          'Whether arriving off a yacht at ONE°15 Marina, checking into Capella Singapore for a bridal stay, or heading to Sentosa Golf Club with multiple golf bags in a Mercedes-Benz V-Class, our drivers know every resort security checkpoint on the island.',
        ],
      },
    ],
    pricingTable: [
      {
        routeOrPackage: 'Changi Airport → Sentosa Island Resorts',
        eClass: 'SGD $90',
        alphard: 'SGD $105',
        vClass: 'SGD $125',
        maybachOrGhost: 'SGD $215 / $420',
        notes: 'Sentosa entry fee included',
      },
      {
        routeOrPackage: 'CBD / Orchard ↔ Sentosa Cove / Capella',
        eClass: 'SGD $85',
        alphard: 'SGD $100',
        vClass: 'SGD $120',
        maybachOrGhost: 'SGD $195 / $395',
        notes: '12–15 min drive from CBD',
      },
    ],
    faqs: [
      {
        id: 'sen-1',
        category: 'Sentosa',
        question: 'Can a V-Class fit golf bags for Sentosa Golf Club?',
        answer:
          'Yes. The Mercedes-Benz V-Class Extra Long comfortably carries 4–5 golfers along with 4–5 full-size golf travel bags.',
      },
    ],
    relatedSlugs: ['/marina-bay-sands-limo/', '/changi-airport-transfer/', '/wedding-car-singapore/'],
  },

  '/seletar-airport-transfer/': {
    slug: '/seletar-airport-transfer/',
    titleTag: 'Seletar Airport Limo Transfer | Private Jet & Business Aviation',
    metaDescription:
      'Discreet private limousine transfers at Seletar Airport (XSP) Business Aviation Centre & Jet Aviation FBO. Direct FBO staging with Maybach, Ghost, Alphard & V-Class.',
    primaryKeyword: 'seletar airport limo',
    secondaryKeywords: ['seletar airport transfer', 'seletar private jet chauffeur singapore'],
    categoryLabel: 'Private Aviation FBO',
    h1: 'Seletar Airport (XSP) Private Aviation Limousine Transfers',
    leadSummary:
      'Tailored ground transportation for private charter arrivals and crew movements at Seletar Airport Business Aviation Centre, Bombardier, and Jet Aviation FBOs—with Maybach S580, Rolls-Royce Ghost, and Toyota Alphard staging.',
    heroImage: heroMaybachImg,
    heroImageAlt: 'seletar-airport-private-jet-limousine-transfer-singapore',
    startingPriceSgd: 95,
    waitingPolicy: 'Flexible private-jet slot alignment with FBO handler updates',
    meetPoint: 'Seletar Business Aviation Centre / FBO private passenger lounge',
    sections: [
      {
        heading: 'Direct FBO Handler Coordination at Seletar (XSP)',
        paragraphs: [
          'Private jet schedules move dynamically around slot clearances and tail-number ETAs. Our operations desk coordinates directly with your flight dispatcher or FBO ground handler at Seletar Aerospace Park, positioning your chauffeur 30 minutes prior to wheels-down so aircraft-to-cabin transfer takes under two minutes.',
        ],
      },
    ],
    pricingTable: [
      {
        routeOrPackage: 'Seletar Airport (XSP) ↔ CBD / Marina Bay / Orchard',
        eClass: 'SGD $95',
        alphard: 'SGD $110',
        vClass: 'SGD $130',
        maybachOrGhost: 'SGD $220 / $420',
        notes: 'Includes FBO coordination',
      },
      {
        routeOrPackage: 'Seletar Airport (XSP) ↔ Changi Airport (SIN)',
        eClass: 'SGD $95',
        alphard: 'SGD $110',
        vClass: 'SGD $130',
        maybachOrGhost: 'SGD $220 / $420',
        notes: 'Direct TPE expressway transfer',
      },
    ],
    faqs: [
      {
        id: 'sel-1',
        category: 'Seletar Airport',
        question: 'Can you handle multi-car luggage vans alongside a Maybach for private jet arrivals?',
        answer:
          'Yes. Many Seletar arrivals book a Mercedes-Maybach S580 for principals paired with a Mercedes-Benz V-Class dedicated to excess baggage and security or executive staff.',
      },
    ],
    relatedSlugs: ['/fleet/maybach/', '/changi-airport-transfer/', '/corporate-chauffeur-singapore/'],
  },

  '/cruise-centre-transfer/': {
    slug: '/cruise-centre-transfer/',
    titleTag: 'Marina Bay Cruise Centre Limo | MBCCS & Tanah Merah Ferry',
    metaDescription:
      'Private limousine & 7-seater MPV transfers for Marina Bay Cruise Centre Singapore (MBCCS) & Tanah Merah Ferry Terminal. Ample cruise luggage capacity from SGD $85.',
    primaryKeyword: 'marina bay cruise centre transfer',
    secondaryKeywords: ['cruise terminal limo singapore', 'tanah merah ferry terminal transfer'],
    categoryLabel: 'Cruise & Ferry Ports',
    h1: 'Marina Bay Cruise Centre (MBCCS) & Ferry Terminal Transfers',
    leadSummary:
      'High-luggage private transfers linking Changi Airport and Singapore hotels to Marina Bay Cruise Centre (61 Marina Coastal Drive) and Tanah Merah Ferry Terminal without kerbside taxi bottlenecks.',
    heroImage: vClassImg,
    heroImageAlt: 'marina-bay-cruise-centre-mpv-transfer-singapore',
    startingPriceSgd: 85,
    waitingPolicy: '60 mins free at Changi Airport · 30 mins grace at Cruise disembarkation',
    meetPoint: 'MBCCS Coach & Limousine Bay or Arrival Hall Gate',
    sections: [
      {
        heading: 'Built for Multi-Week Cruise Luggage & Disembarkation Crowds',
        paragraphs: [
          'When 4,000+ cruise passengers disembark simultaneously at Marina Bay Cruise Centre, ride-hailing wait times frequently exceed 45 minutes and standard saloon cabs cannot carry 4–6 hard-shell cruise trunks. Pre-booking a Toyota Alphard or Mercedes-Benz V-Class guarantees a dedicated vehicle staged at the MBCCS commercial bay timed to your ship’s gangway clearance.',
        ],
      },
    ],
    pricingTable: [
      {
        routeOrPackage: 'Marina Bay Cruise Centre ↔ Changi Airport',
        eClass: 'SGD $85',
        alphard: 'SGD $100',
        vClass: 'SGD $120',
        maybachOrGhost: 'SGD $205 / $400',
        notes: 'Direct MCE–ECP route (~20 mins)',
      },
      {
        routeOrPackage: 'Marina Bay Cruise Centre ↔ Orchard / CBD Hotels',
        eClass: 'SGD $75',
        alphard: 'SGD $90',
        vClass: 'SGD $110',
        maybachOrGhost: 'SGD $180 / $380',
        notes: 'Direct baggage bay drop-off',
      },
    ],
    faqs: [
      {
        id: 'cru-1',
        category: 'Cruise Centre',
        question: 'What happens if cruise ship customs disembarkation runs late?',
        answer:
          'Message your chauffeur via WhatsApp once you clear baggage reclaim inside MBCCS. Cruise pickups include 30 minutes complimentary disembarkation buffer.',
      },
    ],
    relatedSlugs: ['/changi-airport-transfer/', '/marina-bay-sands-limo/', '/alphard-rental-singapore/'],
  },

  '/fleet/rolls-royce-ghost/': {
    slug: '/fleet/rolls-royce-ghost/',
    titleTag: 'Rolls-Royce Ghost Rental Singapore | Chauffeur & Wedding Car',
    metaDescription:
      'Hire a Rolls-Royce Ghost Extended with professional chauffeur in Singapore. Ideal for luxury weddings, diplomatic arrivals, and VIP transfers. From SGD $380.',
    primaryKeyword: 'rolls royce rental singapore',
    secondaryKeywords: ['rolls royce wedding car singapore', 'rolls royce chauffeur singapore'],
    categoryLabel: 'Flagship Fleet Detail',
    h1: 'Rolls-Royce Ghost Extended with Chauffeur in Singapore',
    leadSummary:
      'Hand-finished extended-wheelbase Rolls-Royce Ghost with Starlight headliner, coach doors, lambswool floor mats, and a dedicated senior chauffeur for VIP arrivals, red-carpet galas, and luxury weddings.',
    heroImage: rollsRoyceImg,
    heroImageAlt: 'rolls-royce-ghost-extended-rental-singapore',
    startingPriceSgd: 380,
    waitingPolicy: '60 mins free at Changi/JetQuay · 60-min early wedding floral staging',
    meetPoint: 'JetQuay CIP, Raffles Hotel, Capella Sentosa, or private residence',
    sections: [
      {
        heading: 'Specifications & Chauffeur Protocol',
        paragraphs: [
          'Our Rolls-Royce Ghost Extended is operated strictly as a chauffeured flagship (no self-drive) to preserve immaculate cabin and exterior finish. Rear-hinged coach doors allow graceful entry and exit for bridal gowns and formal evening wear, while thick acoustic glazing isolates the cabin from expressway noise.',
        ],
        bulletPoints: [
          'Passenger & Luggage Capacity: 3 passengers + 3 full-size suitcases.',
          'Interior Appointments: Starlight headliner, lambswool rugs, privacy curtains, rear climate zones.',
          'Available Packages: Point-to-point VIP transfer (SGD $380), Changi/JetQuay arrival (SGD $400), 4-hr minimum hourly charter (SGD $450/hr).',
        ],
      },
    ],
    pricingTable: [
      {
        routeOrPackage: 'Point-to-Point / Gala Arrival Transfer',
        eClass: '—',
        alphard: '—',
        vClass: '—',
        maybachOrGhost: 'SGD $380 (Ghost)',
        notes: 'Single-leg VIP transfer',
      },
      {
        routeOrPackage: 'Changi / JetQuay VIP Arrival',
        eClass: '—',
        alphard: '—',
        vClass: '—',
        maybachOrGhost: 'SGD $400 (Ghost)',
        notes: '60-min free arrival wait',
      },
      {
        routeOrPackage: 'Hourly / Bridal Charter (Min 4 Hours)',
        eClass: '—',
        alphard: '—',
        vClass: '—',
        maybachOrGhost: 'SGD $450/hr (Ghost)',
        notes: 'Includes florist staging slot',
      },
    ],
    faqs: [
      {
        id: 'rr-1',
        category: 'Rolls-Royce Ghost',
        question: 'Is self-drive rental available for the Rolls-Royce Ghost?',
        answer:
          'No. All Rolls-Royce Ghost and Mercedes-Maybach vehicles in Singapore are strictly chauffeur-driven to guarantee insurance coverage, commercial LTA compliance, and zero security deposit hassle for clients.',
      },
    ],
    relatedSlugs: ['/wedding-car-singapore/', '/fleet/maybach/', '/seletar-airport-transfer/'],
  },

  '/fleet/maybach/': {
    slug: '/fleet/maybach/',
    titleTag: 'Mercedes-Maybach S580 Chauffeur Singapore | VIP Sedan from $180',
    metaDescription:
      'Book a Mercedes-Maybach S580 with chauffeur in Singapore from SGD $180. Twin reclining executive lounge seats, active noise cancellation & chilled compartment for C-suite & VIPs.',
    primaryKeyword: 'maybach chauffeur singapore',
    secondaryKeywords: ['maybach rental singapore', 'mercedes maybach s580 singapore'],
    categoryLabel: 'Flagship Fleet Detail',
    h1: 'Mercedes-Maybach S580 Chauffeur Service in Singapore',
    leadSummary:
      'Extended-wheelbase Mercedes-Maybach S580 featuring 43.5° reclining rear executive seats with calf rests, Burmester 4D surround sound, and active road noise cancellation. Available 24/7 for Changi arrivals, C-suite roadshows, and weddings.',
    heroImage: heroMaybachImg,
    heroImageAlt: 'mercedes-maybach-s580-chauffeur-singapore',
    startingPriceSgd: 180,
    waitingPolicy: '60 mins free at Changi/Seletar · 15 mins free for city pickups',
    meetPoint: 'Changi Arrival Hall, JetQuay CIP, MBFC, and luxury hotels',
    sections: [
      {
        heading: 'Executive Cabin Architecture Built for Long-Haul Recovery',
        paragraphs: [
          'For board chairs, sovereign wealth delegates, and private aviation guests landing in Singapore after 14-hour flights, the Mercedes-Maybach S580 bridges the gap between first-class cabin suites and hotel check-in. Power rear comfort doors close quietly at the touch of a button, and acoustic laminated glass pairs with active road noise cancellation.',
        ],
        bulletPoints: [
          'Passenger & Luggage Capacity: 3 passengers + 3 full-size 28" suitcases.',
          'Rear Cabin Comfort: Twin reclining executive seats, extendable calf rests, fold-out work tables, wireless charging, and chilled beverage compartment.',
          'Rates: SGD $180 point-to-point city transfer · SGD $200 Changi Airport arrival · SGD $220/hr (3-hr min).',
        ],
      },
    ],
    pricingTable: [
      {
        routeOrPackage: 'Point-to-Point CBD / Hotel Transfer',
        eClass: '—',
        alphard: '—',
        vClass: '—',
        maybachOrGhost: 'SGD $180 (Maybach)',
        notes: 'All ERP & tolls included',
      },
      {
        routeOrPackage: 'Changi / JetQuay Arrival Meet & Greet',
        eClass: '—',
        alphard: '—',
        vClass: '—',
        maybachOrGhost: 'SGD $200 (Maybach)',
        notes: '60-min free arrival wait',
      },
      {
        routeOrPackage: 'Hourly Executive Charter (Min 3 Hours)',
        eClass: '—',
        alphard: '—',
        vClass: '—',
        maybachOrGhost: 'SGD $220/hr (Maybach)',
        notes: 'Ideal for C-suite roadshows',
      },
    ],
    faqs: [
      {
        id: 'may-1',
        category: 'Maybach',
        question: 'How does the Mercedes-Maybach S580 differ from a standard S-Class or BMW 7 Series?',
        answer:
          'The Maybach S580 sits on an extended wheelbase 18cm longer than a long-wheelbase S-Class, dedicating every extra centimetre to rear legroom, 43.5° reclining calf-rest seating, power rear doors, and dedicated active acoustic dampening.',
      },
    ],
    relatedSlugs: ['/corporate-chauffeur-singapore/', '/fleet/rolls-royce-ghost/', '/seletar-airport-transfer/'],
  },
};

export const LOCATION_HUBS: LocationHub[] = [
  {
    id: 'changi-airport',
    name: 'Changi Airport (T1–T4 & JetQuay CIP)',
    zone: 'East',
    driveFromChangiMins: '0 mins (on-site)',
    driveFromCbdMins: '18–22 mins via ECP',
    startingTransferSgd: 80,
    pickupBayNotes: 'Arrival Hall meet-and-greet past customs; direct lift to basement VIP bays.',
    keyVenues: ['Terminal 1–4 Arrival Halls', 'JetQuay CIP Terminal', 'Jewel Changi', 'Crowne Plaza Changi'],
    dedicatedPageSlug: '/changi-airport-transfer/',
  },
  {
    id: 'marina-bay',
    name: 'Marina Bay & Financial District (CBD)',
    zone: 'Central',
    driveFromChangiMins: '18–22 mins',
    driveFromCbdMins: '0–5 mins',
    startingTransferSgd: 75,
    pickupBayNotes: 'Tower-specific hotel porte-cochères & MBFC security-cleared drop bays.',
    keyVenues: ['Marina Bay Sands & Paiza', 'MBFC Towers 1–3', 'The Fullerton Bay', 'Ritz-Carlton Millenia'],
    dedicatedPageSlug: '/marina-bay-sands-limo/',
  },
  {
    id: 'sentosa',
    name: 'Sentosa Island & Resorts World',
    zone: 'South',
    driveFromChangiMins: '25–30 mins',
    driveFromCbdMins: '12–15 mins',
    startingTransferSgd: 85,
    pickupBayNotes: 'Sentosa island entry gantry included in quoted fare; direct lobby access.',
    keyVenues: ['Capella Singapore', 'Crockfords Tower Casino', 'W Singapore Sentosa Cove', 'ONE°15 Marina'],
    dedicatedPageSlug: '/sentosa-limo/',
  },
  {
    id: 'orchard-tanglin',
    name: 'Orchard Road, Tanglin & Embassy Belt',
    zone: 'Central',
    driveFromChangiMins: '22–26 mins',
    driveFromCbdMins: '10–14 mins',
    startingTransferSgd: 75,
    pickupBayNotes: 'Dedicated hotel & medical centre valet driveways along Orchard & Napier Rd.',
    keyVenues: ['Four Seasons Hotel', 'The St. Regis', 'Shangri-La Valley Wing', 'Mount Elizabeth Orchard'],
    dedicatedPageSlug: '/hourly-chauffeur-singapore/',
  },
  {
    id: 'seletar-airport',
    name: 'Seletar Airport (XSP) & Aerospace Park',
    zone: 'North',
    driveFromChangiMins: '20–24 mins',
    driveFromCbdMins: '22–28 mins',
    startingTransferSgd: 95,
    pickupBayNotes: 'Private jet FBO coordination directly with Jet Aviation & Bombardier handlers.',
    keyVenues: ['Business Aviation Centre', 'Jet Aviation FBO', 'Seletar Country Club'],
    dedicatedPageSlug: '/seletar-airport-transfer/',
  },
  {
    id: 'cruise-centre',
    name: 'Marina Bay Cruise Centre & Tanah Merah Ferry',
    zone: 'South',
    driveFromChangiMins: '20 mins',
    driveFromCbdMins: '8 mins',
    startingTransferSgd: 85,
    pickupBayNotes: 'Staged at MBCCS commercial limousine lane timed to ship gangway clearance.',
    keyVenues: ['Marina Bay Cruise Centre (MBCCS)', 'Tanah Merah Ferry Terminal', 'HarbourFront Cruise Centre'],
    dedicatedPageSlug: '/cruise-centre-transfer/',
  },
  {
    id: 'jurong-tuas',
    name: 'Jurong Innovation District & Tuas Crossing',
    zone: 'West',
    driveFromChangiMins: '32–38 mins',
    driveFromCbdMins: '20–25 mins',
    startingTransferSgd: 85,
    pickupBayNotes: 'Direct AYE/PIE access to JTC LaunchPad, International Business Park & Tuas Link.',
    keyVenues: ['International Business Park', 'Jurong Island Gate', 'Tuas Second Link Checkpoint'],
    dedicatedPageSlug: '/corporate-chauffeur-singapore/',
  },
  {
    id: 'malaysia-cross-border',
    name: 'Johor Bahru, Desaru, Malacca & Kuala Lumpur',
    zone: 'Cross-Border',
    driveFromChangiMins: '60 mins (JB) · 4.5 hrs (KL)',
    driveFromCbdMins: '55 mins (JB) · 4.5 hrs (KL)',
    startingTransferSgd: 160,
    pickupBayNotes: 'In-car passport clearance in licensed cross-border Alphard & V-Class MPVs.',
    keyVenues: ['Johor Bahru & Legoland', 'Desaru Coast Resorts', 'Malacca Heritage', 'Kuala Lumpur (KLCC)'],
    dedicatedPageSlug: '/singapore-to-malaysia-limo/',
  },
];

export const GUIDES: GuideArticle[] = [
  {
    id: 'guide-changi-to-mbs-cost',
    slug: 'changi-to-marina-bay-sands-limo-cost',
    title: 'How much is a limo from Changi Airport to Marina Bay Sands?',
    category: 'Pricing Guide',
    readTime: '4 min read',
    publishedDate: 'November 2026',
    author: 'Limo Singapore Operations Desk',
    targetKeyword: 'how much is a limo from changi airport to marina bay sands',
    excerpt:
      'Exact fixed rates from SGD $80 to $400 across E-Class, Toyota Alphard, Mercedes V-Class, and Maybach—plus what ERP, parking, and midnight fees actually cost.',
    relatedServiceSlug: '/marina-bay-sands-limo/',
    sections: [
      {
        heading: '2026 Fixed Rate Breakdown: Changi (SIN) to Marina Bay Sands',
        body: [
          'The 19 km expressway drive along the East Coast Parkway (ECP) between Changi Airport and Marina Bay Sands takes 18 to 22 minutes outside peak evening hours. Unlike metered taxis or surge-priced ride-hailing apps—which fluctuate between SGD $28 and SGD $75+ during rain or evening arrivals without meet-and-greet—a pre-booked private limousine locks in your total rate in advance.',
        ],
        bullets: [
          'Mercedes-Benz E-Class (3 pax, 2 suitcases): SGD $80 fixed.',
          'Toyota Alphard Executive Lounge (6 pax, 5 suitcases): SGD $95 fixed.',
          'Mercedes-Benz V-Class Extra Long (7 pax, 7 suitcases): SGD $115 fixed.',
          'BMW 7 Series Long Wheelbase (3 pax, 3 suitcases): SGD $145 fixed.',
          'Mercedes-Maybach S580 (3 pax, 3 suitcases): SGD $200 fixed.',
          'Rolls-Royce Ghost Extended (3 pax, 3 suitcases): SGD $400 fixed.',
        ],
      },
      {
        heading: 'What Is Included vs Optional Add-Ons',
        body: [
          'Every Changi-to-MBS quote includes 60 minutes of complimentary waiting from actual flight touchdown, Arrival Hall meet-and-greet with your name board, Changi basement parking, and all ECP/MCE ERP tolls. The only variable extras are midnight pickups between 23:30 and 06:30 (+SGD $15), child booster seats (+SGD $15), or extra stops en route (+SGD $15).',
        ],
      },
    ],
  },
  {
    id: 'guide-alphard-vs-vclass',
    slug: 'alphard-vs-v-class-for-families',
    title: 'Alphard vs V-Class: which is better for families?',
    category: 'Fleet Comparison',
    readTime: '5 min read',
    publishedDate: 'November 2026',
    author: 'Limo Singapore Fleet Team',
    targetKeyword: 'alphard vs v class singapore',
    excerpt:
      'Side-by-side seat geometry, stroller & 28-inch suitcase capacity, sliding-door step height, and hourly pricing between Toyota Alphard and Mercedes V-Class.',
    relatedServiceSlug: '/alphard-rental-singapore/',
    sections: [
      {
        heading: 'Seat Comfort vs Boot Space: The Real Trade-Off',
        body: [
          'Families landing at Changi Airport with children, strollers, and multiple 28-inch suitcases often assume all luxury 6–7 seater MPVs have identical storage. In practice, the Toyota Alphard Executive Lounge prioritises second-row Ottoman legroom at the expense of deep boot space behind the third row.',
          'With all 6 seats upright, the Alphard boot fits 4 large suitcases neatly. In contrast, the Mercedes-Benz V-Class Extra Long adds roughly 40 cm of rear overhang behind the third row, swallowing 7 full-size suitcases plus a folded pram with zero bags near passengers.',
        ],
        bullets: [
          'Choose Toyota Alphard (SGD $95 airport / $90 city): For 2–5 passengers with up to 4 large suitcases who want reclining Ottoman lounge seats and a lower step-in height for elderly parents.',
          'Choose Mercedes V-Class (SGD $115 airport / $110 city): For 6–7 passengers, 5+ large check-in bags, bulky strollers, or golf travel bags.',
        ],
      },
    ],
  },
  {
    id: 'guide-singapore-to-kl',
    slug: 'singapore-to-kl-by-private-car-customs-documents',
    title: 'How to travel from Singapore to KL by private car (customs and documents)',
    category: 'Cross-Border Guide',
    readTime: '6 min read',
    publishedDate: 'November 2026',
    author: 'Limo Singapore Cross-Border Desk',
    targetKeyword: 'singapore to kl by private car',
    excerpt:
      'Step-by-step guide to Woodlands vs Tuas Second Link crossings, Malaysia Digital Arrival Card (MDAC), VEP requirements, and door-to-door driving times.',
    relatedServiceSlug: '/singapore-to-malaysia-limo/',
    sections: [
      {
        heading: 'Required Documents Before Leaving Singapore',
        body: [
          'Crossing from Singapore to Kuala Lumpur in a private licensed Toyota Alphard or Mercedes-Benz V-Class takes roughly 4.5 to 5 hours door-to-door via Tuas Second Link and the North–South Expressway. Unlike coaches, you stay inside the cabin through both countries’ passport booths.',
        ],
        bullets: [
          'Passport Validity: Minimum 6 months remaining beyond your return date.',
          'Malaysia Digital Arrival Card (MDAC): Mandatory free online submission within 3 days before entering Malaysia (exempt for Singapore Citizens/PRs using automated gates, required for foreign passport holders).',
          'SG Arrival Card (SGAC): Complete within 3 days before your return crossing back into Singapore.',
          'Licensed Commercial Vehicle: Confirm your operator carries valid LTA/JPJ cross-border permits and Malaysia VEP RFID tag.',
        ],
      },
    ],
  },
  {
    id: 'guide-changi-terminals',
    slug: 'changi-airport-arrival-guide-by-terminal',
    title: 'Changi Airport arrival guide by terminal: where your chauffeur meets you',
    category: 'Airport Guide',
    readTime: '5 min read',
    publishedDate: 'November 2026',
    author: 'Limo Singapore Airport Dispatch',
    targetKeyword: 'changi airport arrival guide meet and greet',
    excerpt:
      'Terminal-by-terminal directions for T1, T2, T3, T4, and JetQuay CIP so you walk straight from baggage claim to your waiting chauffeur in under 3 minutes.',
    relatedServiceSlug: '/changi-airport-transfer/',
    sections: [
      {
        heading: 'Exact Meeting Landmarks Inside Terminals 1–4',
        body: [
          'Every Limo Singapore airport booking includes Arrival Hall Meet & Greet—meaning you do not have to hunt for carpark rows in the heat. Once you clear customs after collecting luggage, look for your name board immediately outside the glass exit doors.',
        ],
        bullets: [
          'Terminal 1: Exit at Arrival Hall Central near the Changi Recommends / Information desk; lift down to B1/B2 Limousine Bay.',
          'Terminal 2: Exit Arrival Hall South (near Starbucks / Coach Bay corridor) for a 90-second walk to the VIP carpark.',
          'Terminal 3: Exit Arrival Hall Central facing the Jewel walkway; chauffeur escorts bags directly to Basement 2 Lift Lobby.',
          'Terminal 4: Exit Arrival Hall Main Concourse beside the Heritage Zone; short flat walk to Pick-up Bay 1–4.',
          'JetQuay CIP Terminal: Private tarmac buggy clears immigration in 10 minutes and exits directly to our staged sedan or Alphard.',
        ],
      },
    ],
  },
  {
    id: 'guide-grab-vs-limo',
    slug: 'grab-vs-limousine-singapore',
    title: 'Grab vs limousine: when a chauffeur is worth it',
    category: 'Executive Insights',
    readTime: '4 min read',
    publishedDate: 'November 2026',
    author: 'Limo Singapore Operations Desk',
    targetKeyword: 'grab vs limousine singapore',
    excerpt:
      'An honest breakdown of when a standard ride-hailing cab makes sense—and the four scenarios where a pre-booked chauffeur saves time and stress.',
    relatedServiceSlug: '/corporate-chauffeur-singapore/',
    sections: [
      {
        heading: 'When Ride-Hailing Is Enough vs When a Chauffeur Wins',
        body: [
          'For a quick solo 10-minute hop between two MRT stops on a dry Tuesday afternoon, ride-hailing apps work fine. However, four Singapore scenarios consistently break ride-hailing reliability:',
        ],
        bullets: [
          'Changi Airport arrivals with 3+ bags or children: Ride-hailing drivers cannot wait 60 minutes for delayed flights or enter the Arrival Hall with luggage trolleys.',
          'Multi-stop CBD financial roadshows: Waiting 12 minutes for a new driver after every 45-minute meeting breaks tightly scheduled investor days.',
          'Heavy tropical rain & F1/MICE peak hours: Dynamic surge multipliers push 6-seater ride-hailing fares above fixed chauffeur rates—with frequent driver cancellations.',
          'Cross-border Johor Bahru & KL travel: Domestic Singapore ride-hailing apps cannot legally cross the Causeway.',
        ],
      },
    ],
  },
  {
    id: 'guide-wedding-cars-prices',
    slug: 'best-wedding-cars-in-singapore-with-prices',
    title: 'Best wedding cars in Singapore, with prices',
    category: 'Wedding Planning',
    readTime: '5 min read',
    publishedDate: 'November 2026',
    author: 'Limo Singapore Bridal Team',
    targetKeyword: 'best wedding cars in singapore with prices',
    excerpt:
      '2026 Singapore bridal car rate guide comparing Rolls-Royce Ghost, Mercedes-Maybach S580, BMW 7 Series, and Toyota Alphard bridal packages.',
    relatedServiceSlug: '/wedding-car-singapore/',
    sections: [
      {
        heading: '2026 Chauffeured Wedding Car Packages in Singapore',
        body: [
          'Unlike self-drive luxury car rentals that demand SGD $5,000–$10,000 security deposits and stress the groom’s best man with hotel valet logistics, chauffeured wedding packages keep your schedule smooth and predictable.',
        ],
        bullets: [
          'Rolls-Royce Ghost Extended: SGD $1,680 (4 hrs) · SGD $2,880 (8 hrs) · SGD $3,480 (10 hrs).',
          'Mercedes-Maybach S580: SGD $880 (4 hrs) · SGD $1,580 (8 hrs) · SGD $1,880 (10 hrs).',
          'BMW 7 Series LWB: SGD $680 (4 hrs) · SGD $1,180 (8 hrs).',
          'Toyota Alphard Executive Lounge (Bridal Parents / Entourage): SGD $480 (4 hrs) · SGD $880 (8 hrs).',
        ],
      },
    ],
  },
];

export const SEO_AUDIT_FIXES = [
  {
    item: 'Robots.txt & XML Sitemap',
    before: 'robots.txt unreachable by crawlers; single-page site unsubmitted in Search Console.',
    after: 'Added public /robots.txt allowing crawlers + full /sitemap.xml indexing 18 canonical service, location, fleet & guide URLs.',
    status: 'Fixed',
  },
  {
    item: 'Personal Email Leak Removed',
    before: 'Twitter "Written by" metadata exposed a personal Gmail address.',
    after: 'Purged personal metadata; replaced with corporate concierge@limo-singapore.com across HTML and JSON-LD.',
    status: 'Fixed',
  },
  {
    item: 'Title Tag & Intent Meta Description',
    before: 'Generic 40-char title and duplicate trust statement across meta/OG/Twitter descriptions.',
    after: 'Rewritten to "Limousine Service Singapore | Changi Airport Transfer from $80" + search-intent description with WhatsApp CTA.',
    status: 'Fixed',
  },
  {
    item: 'Deprecated Meta-Keywords & Keyword Cloud',
    before: 'Deprecated <meta name="keywords"> tag and footer keyword spam cloud (including Narita/Osaka buses).',
    after: 'Removed deprecated meta-keywords tag and replaced spam cloud with structured internal links to real Singapore service pages.',
    status: 'Fixed',
  },
  {
    item: 'Physical Address, UEN & Hotline Consistency',
    before: 'No visible street address or UEN; placeholder +65 6789 9999 phone number.',
    after: 'Added 10 Anson Road, #10-11, International Plaza, Singapore 079903 + UEN 201934812K + unified +65 6817 4290 / WhatsApp +65 8817 4290.',
    status: 'Verified',
  },
  {
    item: 'Fleet & Estimator Consistency',
    before: 'Estimator listed BMW 7 Series & V-Class missing from fleet; 3 different names for Toyota Alphard.',
    after: 'Unified 6-vehicle catalogue (E-Class, Alphard Executive Lounge, V-Class Extra Long, BMW 7 Series LWB, Maybach S580, Rolls-Royce Ghost).',
    status: 'Fixed',
  },
  {
    item: 'Honest Proof & Valid JSON-LD Schema',
    before: 'Unverified "1,200+ 5-Star VIP Reviews" & synthetic aggregateRating: 1250 markup.',
    after: 'Removed unverifiable review counts; deployed valid LocalBusiness, Organization, Service, and FAQPage JSON-LD.',
    status: 'Fixed',
  },
  {
    item: 'Multi-Page Service & Location Expansion',
    before: 'Single landing page with broken anchor links (#process, #blog, Locations).',
    after: 'Built 12 dedicated service/location/fleet pages + 6 full-length guides + WebDaddy.sg SEO Case Study page.',
    status: 'Live',
  },
];

export const ALL_SERVICE_ROUTES: { slug: RoutePath; label: string; keyword: string; priceFrom: string }[] = [
  { slug: '/changi-airport-transfer/', label: 'Changi Airport Transfer', keyword: 'changi airport limo transfer', priceFrom: 'SGD $80' },
  { slug: '/alphard-rental-singapore/', label: 'Toyota Alphard with Driver', keyword: 'alphard with driver singapore', priceFrom: 'SGD $90' },
  { slug: '/singapore-to-malaysia-limo/', label: 'Singapore to Malaysia Limo', keyword: 'singapore to kl / jb limo', priceFrom: 'SGD $160' },
  { slug: '/wedding-car-singapore/', label: 'Wedding Car Singapore', keyword: 'wedding car rental singapore', priceFrom: 'SGD $420' },
  { slug: '/corporate-chauffeur-singapore/', label: 'Corporate & F1 / MICE', keyword: 'corporate chauffeur service singapore', priceFrom: 'SGD $90/hr' },
  { slug: '/hourly-chauffeur-singapore/', label: 'Hourly Chauffeur Charter', keyword: 'hourly car with driver singapore', priceFrom: 'SGD $90/hr' },
  { slug: '/marina-bay-sands-limo/', label: 'Marina Bay Sands Limo', keyword: 'limo to marina bay sands', priceFrom: 'SGD $75' },
  { slug: '/sentosa-limo/', label: 'Sentosa Island Limo', keyword: 'limo to sentosa', priceFrom: 'SGD $85' },
  { slug: '/seletar-airport-transfer/', label: 'Seletar Airport (XSP)', keyword: 'seletar airport limo', priceFrom: 'SGD $95' },
  { slug: '/cruise-centre-transfer/', label: 'Marina Bay Cruise Centre', keyword: 'marina bay cruise centre transfer', priceFrom: 'SGD $85' },
  { slug: '/fleet/maybach/', label: 'Mercedes-Maybach S580', keyword: 'maybach chauffeur singapore', priceFrom: 'SGD $180' },
  { slug: '/fleet/rolls-royce-ghost/', label: 'Rolls-Royce Ghost', keyword: 'rolls royce rental singapore', priceFrom: 'SGD $380' },
];
