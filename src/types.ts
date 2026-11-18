export type RoutePath =
  | '/'
  | '/changi-airport-transfer/'
  | '/alphard-rental-singapore/'
  | '/singapore-to-malaysia-limo/'
  | '/wedding-car-singapore/'
  | '/corporate-chauffeur-singapore/'
  | '/hourly-chauffeur-singapore/'
  | '/marina-bay-sands-limo/'
  | '/sentosa-limo/'
  | '/seletar-airport-transfer/'
  | '/cruise-centre-transfer/'
  | '/fleet/rolls-royce-ghost/'
  | '/fleet/maybach/'
  | '/locations/'
  | '/guides/'
  | '/seo-case-study/';

export interface Vehicle {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  category: 'Executive Sedan' | 'Executive MPV' | 'First Class Sedan' | 'Ultra-Luxury';
  passengers: number;
  luggage: number;
  cabinBags: number;
  airportRate: number;
  transferRate: number;
  hourlyRate: number;
  minHours: number;
  image: string;
  imageAlt: string;
  specs: string[];
  bestFor: string;
  detailRoute?: RoutePath;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PricingRow {
  routeOrPackage: string;
  eClass: string;
  alphard: string;
  vClass: string;
  maybachOrGhost: string;
  notes: string;
}

export interface ServiceSectionBlock {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface ServicePageData {
  slug: RoutePath;
  titleTag: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  categoryLabel: string;
  h1: string;
  leadSummary: string;
  heroImage: string;
  heroImageAlt: string;
  startingPriceSgd: number;
  waitingPolicy: string;
  meetPoint: string;
  sections: ServiceSectionBlock[];
  pricingTable: PricingRow[];
  faqs: FAQItem[];
  relatedSlugs: RoutePath[];
}

export interface GuideArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  excerpt: string;
  targetKeyword: string;
  sections: {
    heading: string;
    body: string[];
    bullets?: string[];
  }[];
  relatedServiceSlug: RoutePath;
}

export interface LocationHub {
  id: string;
  name: string;
  zone: 'Central' | 'East' | 'South' | 'North' | 'West' | 'Cross-Border';
  driveFromChangiMins: string;
  driveFromCbdMins: string;
  startingTransferSgd: number;
  pickupBayNotes: string;
  keyVenues: string[];
  dedicatedPageSlug?: RoutePath;
}

export interface BookingDetails {
  serviceType: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  pickupTime: string;
  selectedVehicleId: string;
  passengers: number;
  flightNumber?: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  specialRequests?: string;
  paymentMethod: string;
}
