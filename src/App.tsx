import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWidgets } from './components/FloatingWidgets';
import { HomeView } from './components/HomeView';
import { ServiceDetailView } from './components/ServiceDetailView';
import { LocationsView } from './components/LocationsView';
import { GuidesView } from './components/GuidesView';
import { SeoCaseStudyView } from './components/SeoCaseStudyView';
import { SERVICE_PAGES, BUSINESS_INFO } from './data/siteData';
import { RoutePath } from './types';

const VALID_ROUTES = new Set<RoutePath>([
  '/',
  '/changi-airport-transfer/',
  '/alphard-rental-singapore/',
  '/singapore-to-malaysia-limo/',
  '/wedding-car-singapore/',
  '/corporate-chauffeur-singapore/',
  '/hourly-chauffeur-singapore/',
  '/marina-bay-sands-limo/',
  '/sentosa-limo/',
  '/seletar-airport-transfer/',
  '/cruise-centre-transfer/',
  '/fleet/rolls-royce-ghost/',
  '/fleet/maybach/',
  '/locations/',
  '/guides/',
  '/seo-case-study/',
]);

function normalizePath(rawPath: string): RoutePath {
  const clean = rawPath === '/' ? '/' : rawPath.endsWith('/') ? rawPath : `${rawPath}/`;
  return VALID_ROUTES.has(clean as RoutePath) ? (clean as RoutePath) : '/';
}

function getPageSeoMeta(route: RoutePath) {
  if (route === '/') {
    return {
      title: 'Limousine Service Singapore | Changi Airport Transfer from $80',
      description:
        '24/7 luxury limousine and chauffeur service in Singapore. Changi airport transfers, Alphard, Maybach and Rolls-Royce, corporate and wedding cars, Singapore–Malaysia trips. Book on WhatsApp.',
      canonical: `${BUSINESS_INFO.domain}/`,
    };
  }
  if (route === '/locations/') {
    return {
      title: 'Singapore Limousine Service Locations & Pickup Bays | Limo Singapore',
      description:
        'Fixed-rate limousine coverage across Changi Airport, Marina Bay, Orchard, Sentosa Island, Seletar Airport, Cruise Centre, and Johor Bahru / Kuala Lumpur.',
      canonical: `${BUSINESS_INFO.domain}/locations/`,
    };
  }
  if (route === '/guides/') {
    return {
      title: 'Singapore Limousine Pricing, Terminal & Customs Guides | Limo Singapore',
      description:
        'Operational guides on Changi Airport to Marina Bay Sands rates, Toyota Alphard vs Mercedes V-Class capacity, Singapore to KL customs documents, and bridal car packages.',
      canonical: `${BUSINESS_INFO.domain}/guides/`,
    };
  }
  if (route === '/seo-case-study/') {
    return {
      title: 'WebDaddy.sg SEO Case Study | Limo Singapore Organic Growth',
      description:
        'How webdaddy.sg helped limo-singapore.com resolve Search Console indexing blockers, build 5.59K impressions, and expand into dedicated Singapore limousine service pages.',
      canonical: `${BUSINESS_INFO.domain}/seo-case-study/`,
    };
  }
  const svc = SERVICE_PAGES[route];
  if (svc) {
    return {
      title: svc.titleTag,
      description: svc.metaDescription,
      canonical: `${BUSINESS_INFO.domain}${svc.slug}`,
    };
  }
  return {
    title: 'Limousine Service Singapore | Changi Airport Transfer from $80',
    description:
      '24/7 luxury limousine and chauffeur service in Singapore. Changi airport transfers, Alphard, Maybach and Rolls-Royce, corporate and wedding cars, Singapore–Malaysia trips. Book on WhatsApp.',
    canonical: `${BUSINESS_INFO.domain}/`,
  };
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>(() =>
    normalizePath(window.location.pathname)
  );
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | undefined>(undefined);
  const [bookingInitialData, setBookingInitialData] = useState<any>(undefined);

  useEffect(() => {
    const onPopState = () => {
      setCurrentRoute(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Sync document <head> metadata on route change
  useEffect(() => {
    const seo = getPageSeoMeta(currentRoute);
    document.title = seo.title;

    const updateMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };

    updateMeta('meta[name="description"]', seo.description);
    updateMeta('meta[property="og:title"]', seo.title);
    updateMeta('meta[property="og:description"]', seo.description);
    updateMeta('meta[property="og:url"]', seo.canonical);
    updateMeta('meta[name="twitter:title"]', seo.title);
    updateMeta('meta[name="twitter:description"]', seo.description);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', seo.canonical);

    // Update dynamic route JSON-LD when viewing a dedicated service page
    const existingDynamicLd = document.getElementById('ld-json-route');
    if (existingDynamicLd) existingDynamicLd.remove();

    const svc = SERVICE_PAGES[currentRoute];
    if (svc) {
      const script = document.createElement('script');
      script.id = 'ld-json-route';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Service',
            name: svc.h1,
            description: svc.metaDescription,
            provider: { '@id': `${BUSINESS_INFO.domain}/#organization` },
            areaServed: 'Singapore',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'SGD',
              price: String(svc.startingPriceSgd),
            },
          },
          ...(svc.faqs.length > 0
            ? [
                {
                  '@type': 'FAQPage',
                  mainEntity: svc.faqs.map((f) => ({
                    '@type': 'Question',
                    name: f.question,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: f.answer,
                    },
                  })),
                },
              ]
            : []),
        ],
      });
      document.head.appendChild(script);
    }
  }, [currentRoute]);

  const handleNavigate = useCallback((route: RoutePath, hash?: string) => {
    const targetPath = hash ? `${route}#${hash}` : route;
    if (window.location.pathname + window.location.hash !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setCurrentRoute(route);

    if (hash) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 40);
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleOpenBooking = useCallback((vehicleId?: string, initialData?: any) => {
    setSelectedVehicleId(vehicleId);
    setBookingInitialData(initialData);
    setBookingModalOpen(true);
  }, []);

  const renderView = () => {
    if (currentRoute === '/') {
      return <HomeView onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
    }
    if (currentRoute === '/locations/') {
      return <LocationsView onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
    }
    if (currentRoute === '/guides/') {
      return <GuidesView onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />;
    }
    if (currentRoute === '/seo-case-study/') {
      return <SeoCaseStudyView onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />;
    }
    return (
      <ServiceDetailView
        route={currentRoute}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-slate-100 font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col">
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      <main className="flex-1">{renderView()}</main>

      <Footer onNavigate={handleNavigate} />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedVehicleId={selectedVehicleId}
        initialData={bookingInitialData}
      />

      <FloatingWidgets onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
