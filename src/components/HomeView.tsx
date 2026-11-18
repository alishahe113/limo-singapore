import React, { useState } from 'react';
import { ArrowRight, ChevronDown, MessageSquare, Phone, Check, MapPin, TrendingUp } from 'lucide-react';
import {
  IMAGES,
  VEHICLES,
  ALL_SERVICE_ROUTES,
  GENERAL_FAQS,
  GUIDES,
  LOCATION_HUBS,
  BUSINESS_INFO,
} from '../data/siteData';
import { RoutePath } from '../types';

interface HomeViewProps {
  onNavigate: (route: RoutePath, hash?: string) => void;
  onOpenBooking: (vehicleId?: string, initialData?: any) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenBooking }) => {
  // Instant Fare Estimator state
  const [estService, setEstService] = useState<'airport' | 'city' | 'hourly' | 'malaysia'>('airport');
  const [estVehicleId, setEstVehicleId] = useState<string>('toyota-alphard');
  const [isMidnight, setIsMidnight] = useState(false);

  // Fleet category filter
  const [fleetFilter, setFleetFilter] = useState<string>('All');
  // FAQ accordion state
  const [openFaqId, setOpenFaqId] = useState<string>(GENERAL_FAQS[0].id);

  const selectedVehicle = VEHICLES.find((v) => v.id === estVehicleId) || VEHICLES[1];

  const baseEstimate =
    estService === 'airport'
      ? selectedVehicle.airportRate
      : estService === 'hourly'
      ? selectedVehicle.hourlyRate * selectedVehicle.minHours
      : estService === 'malaysia'
      ? estVehicleId === 'mercedes-v-class'
        ? 190
        : 160
      : selectedVehicle.transferRate;

  const totalEstimate = baseEstimate + (isMidnight ? 15 : 0);

  const fleetCategories = ['All', 'Executive Sedan', 'Executive MPV', 'First Class Sedan', 'Ultra-Luxury'];
  const visibleVehicles =
    fleetFilter === 'All' ? VEHICLES : VEHICLES.filter((v) => v.category === fleetFilter);

  const go = (e: React.MouseEvent, route: RoutePath, hash?: string) => {
    e.preventDefault();
    onNavigate(route, hash);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 bg-[#0A0A0C]">
          <img
            src={IMAGES.heroMaybach}
            alt="Mercedes-Maybach S580 executive chauffeur parked at Marina Bay hotel porte-cochere Singapore"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/85 to-[#0A0A0C]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-[#0A0A0C]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E5C158]">
                Singapore Private Chauffeur & Limousine Dispatch
              </p>

              <h1
                className="font-serif font-bold text-white leading-[1.08] tracking-tight max-w-2xl"
                style={{ fontSize: 'clamp(2.35rem, 4vw, 3.85rem)', textWrap: 'balance' }}
              >
                Chauffeured Limousine Service in Singapore, from{' '}
                <span className="gold-gradient-text font-mono font-semibold tabular-nums">SGD $80</span>
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                24/7 Changi Airport pickups with Arrival Hall name-board meet-and-greet and 60 minutes free waiting from flight touchdown. Fixed ERP-inclusive fares across Toyota Alphard Executive Lounge, Mercedes-Benz V-Class, BMW 7 Series, Maybach S580, and Rolls-Royce Ghost.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => onOpenBooking(estVehicleId)}
                  className="gold-gradient-bg text-black font-semibold text-sm px-6 py-3.5 rounded-lg hover:brightness-110 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Reserve Your Chauffeur</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-lg bg-[#121216] border border-white/15 hover:border-emerald-500/50 text-slate-100 text-sm font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>

              {/* Operational Spec Strip */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs">
                <div>
                  <span className="font-mono text-base font-semibold text-white block tabular-nums">60 Mins Free</span>
                  <span className="text-slate-400">Changi wait from actual landing</span>
                </div>
                <div>
                  <span className="font-mono text-base font-semibold text-white block tabular-nums">Fixed Fares</span>
                  <span className="text-slate-400">ERP tolls & Changi parking included</span>
                </div>
                <div>
                  <span className="font-mono text-base font-semibold text-white block tabular-nums">6 Vehicles</span>
                  <span className="text-slate-400">3-pax sedans to 7-pax MPVs</span>
                </div>
              </div>
            </div>

            {/* Right Instant Fare Estimator */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="surface-card rounded-xl p-6 sm:p-7 space-y-5 shadow-2xl">
                <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-white">Instant Fare Estimator</h2>
                    <p className="text-xs text-slate-400 mt-0.5">Matches exact vehicles in our fleet below</p>
                  </div>
                  <span className="text-xs font-mono text-[#E5C158]">SGD</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="hero-service" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Service Type
                    </label>
                    <select
                      id="hero-service"
                      value={estService}
                      onChange={(e) => setEstService(e.target.value as any)}
                      className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="airport">Changi Airport Arrival (60-min free wait)</option>
                      <option value="city">Point-to-Point City / Hotel Transfer</option>
                      <option value="hourly">Hourly Chauffeur Charter (3-hr minimum)</option>
                      <option value="malaysia">Singapore → Johor Bahru Cross-Border</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hero-vehicle" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Select Vehicle
                    </label>
                    <select
                      id="hero-vehicle"
                      value={estVehicleId}
                      onChange={(e) => setEstVehicleId(e.target.value)}
                      className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:border-[#D4AF37] focus:outline-none"
                    >
                      {VEHICLES.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name} ({v.passengers} pax · {v.luggage} bags)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                    <label htmlFor="hero-midnight" className="flex items-center gap-2 cursor-pointer">
                      <input
                        id="hero-midnight"
                        type="checkbox"
                        checked={isMidnight}
                        onChange={(e) => setIsMidnight(e.target.checked)}
                        className="rounded border-white/20 bg-[#0A0A0C] accent-[#D4AF37]"
                      />
                      <span>Midnight window (23:30–06:30, +SGD $15)</span>
                    </label>
                  </div>

                  <div className="bg-[#0A0A0C] border border-white/10 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block">
                        {estService === 'hourly'
                          ? `${selectedVehicle.minHours}-Hour Minimum Total`
                          : 'All-Inclusive Fixed Quote'}
                      </span>
                      <span className="text-xs text-slate-300">
                        {selectedVehicle.passengers} seats · {selectedVehicle.luggage} suitcases
                      </span>
                    </div>
                    <span className="font-mono text-2xl font-bold text-[#E5C158] tabular-nums">
                      SGD ${totalEstimate}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onOpenBooking(estVehicleId, {
                        serviceType:
                          estService === 'airport'
                            ? 'Changi Airport Transfer'
                            : estService === 'hourly'
                            ? 'Hourly Chauffeur Charter'
                            : estService === 'malaysia'
                            ? 'Singapore to Malaysia Cross-Border'
                            : 'City / Hotel Point-to-Point',
                      })
                    }
                    className="w-full gold-gradient-bg text-black font-semibold text-sm py-3.5 rounded-lg hover:brightness-110 transition-all cursor-pointer"
                  >
                    Book {selectedVehicle.shortName}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01. DEDICATED SERVICE & LOCATION LANDING PAGES */}
      <section id="services" className="py-20 border-b border-white/10 bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E5C158]">
                01. Dedicated Chauffeur Services
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Dedicated Airport, Corporate, Bridal & Cross-Border Pages
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Select any service below to view full terminal meet-and-greet instructions, luggage limits, route tables, and FAQs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SERVICE_ROUTES.slice(0, 6).map((svc, idx) => (
              <a
                key={svc.slug}
                href={svc.slug}
                onClick={(e) => go(e, svc.slug)}
                className="surface-card-interactive rounded-xl p-6 flex flex-col justify-between gap-6 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono tabular-nums">0{idx + 1}</span>
                    <span className="font-mono text-[#E5C158] tabular-nums">From {svc.priceFrom}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#E5C158] transition-colors">
                    {svc.label}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Target focus: {svc.keyword}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-slate-200">
                  <span>View rates & terminal guide</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* Secondary Destination & Seasonal Hubs Row */}
          <div className="surface-card rounded-xl p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-bold text-white">
                Airport, Cruise, Resort & Flagship Hubs
              </h3>
              <p className="text-xs text-slate-400">
                Direct route guides for Marina Bay Sands, Sentosa, Seletar Jet Centre, MBCCS Cruise Terminal & F1/Airshow MICE events.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {ALL_SERVICE_ROUTES.slice(6).map((hub) => (
                <a
                  key={hub.slug}
                  href={hub.slug}
                  onClick={(e) => go(e, hub.slug)}
                  className="px-3.5 py-2 rounded-lg bg-[#0A0A0C] border border-white/10 hover:border-[#D4AF37]/50 text-xs font-medium text-slate-200 transition-colors"
                >
                  {hub.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02. UNIFIED FLEET DIRECTORY */}
      <section id="fleet" className="py-20 border-b border-white/10 bg-[#0D0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E5C158]">
                02. Unified Company Fleet
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Six Chauffeur-Driven Vehicles, Exact Seating & Luggage Specs
              </h2>
            </div>

            {/* Interactive Segmented Filter */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#141418] rounded-lg border border-white/10">
              {fleetCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFleetFilter(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    fleetFilter === cat
                      ? 'gold-gradient-bg text-black font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleVehicles.map((vehicle) => (
              <article
                key={vehicle.id}
                className="surface-card rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 bg-[#16161B] overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <p className="text-xs text-slate-400">
                        {vehicle.category} · <span className="tabular-nums">{vehicle.passengers} Passengers</span> ·{' '}
                        <span className="tabular-nums">{vehicle.luggage} Suitcases</span>
                      </p>
                      <h3 className="font-serif text-2xl font-bold text-white">{vehicle.name}</h3>
                      <p className="text-xs text-slate-400">{vehicle.tagline}</p>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/10">
                      {vehicle.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  <div className="grid grid-cols-3 gap-2 bg-[#0A0A0C] border border-white/10 rounded-lg p-3 text-center">
                    <div>
                      <span className="text-[11px] text-slate-400 block">City</span>
                      <span className="font-mono text-sm font-semibold text-white tabular-nums">
                        ${vehicle.transferRate}
                      </span>
                    </div>
                    <div className="border-x border-white/10">
                      <span className="text-[11px] text-slate-400 block">Changi</span>
                      <span className="font-mono text-sm font-semibold text-[#E5C158] tabular-nums">
                        ${vehicle.airportRate}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">Hourly</span>
                      <span className="font-mono text-sm font-semibold text-white tabular-nums">
                        ${vehicle.hourlyRate}/hr
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(vehicle.id)}
                      className="flex-1 gold-gradient-bg text-black font-semibold text-xs py-2.5 rounded-lg hover:brightness-110 transition-all cursor-pointer"
                    >
                      Reserve {vehicle.shortName}
                    </button>
                    {vehicle.detailRoute && (
                      <a
                        href={vehicle.detailRoute}
                        onClick={(e) => go(e, vehicle.detailRoute!)}
                        className="px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/25 text-xs font-medium text-slate-200 transition-colors"
                      >
                        Specs
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03. OPERATIONAL BOOKING & MEET-AND-GREET WORKFLOW */}
      <section id="process" className="py-20 border-b border-white/10 bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E5C158]">
              03. Arrival & Dispatch Standard
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              How Your Pickup Works From Touchdown to Drop-Off
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Upfront Fixed Quote',
                desc: 'Confirm vehicle class, passenger count, and suitcase volume via online form or WhatsApp. ERP tolls and Changi parking are included.',
              },
              {
                step: '02',
                title: '12-Hour Chauffeur Assignment',
                desc: 'Receive your chauffeur’s name, mobile WhatsApp, and vehicle licence plate 12 hours before pickup.',
              },
              {
                step: '03',
                title: 'Flight Radar & 60-Min Wait',
                desc: 'At Changi T1–T4, your driver tracks live landing status and meets you inside the Arrival Hall past customs with a name board.',
              },
              {
                step: '04',
                title: 'Direct Receipt & Review Link',
                desc: 'Receive an itemised corporate/concierge PDF receipt plus our Google Business Profile review link via WhatsApp after completion.',
              },
            ].map((item) => (
              <div key={item.step} className="surface-card rounded-xl p-6 space-y-3">
                <span className="font-mono text-sm font-semibold text-[#E5C158]">{item.step}</span>
                <h3 className="font-serif text-xl font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. LOCATIONS, GUIDES & WEBDDADY.SG CASE STUDY PREVIEW */}
      <section className="py-20 border-b border-white/10 bg-[#0D0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Locations Hub Summary */}
            <div className="lg:col-span-6 surface-card rounded-xl p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E5C158]">
                  04. Island-Wide & Cross-Border Hubs
                </p>
                <h2 className="font-serif text-3xl font-bold text-white">
                  Singapore Districts & Malaysia Routes
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  View fixed expressway timings and VIP driveway notes across {LOCATION_HUBS.length} primary service zones including Marina Bay, Sentosa, Seletar Airport, Marina Bay Cruise Centre, and Johor Bahru / KL.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                {LOCATION_HUBS.slice(0, 6).map((loc) => (
                  <div key={loc.id} className="bg-[#0A0A0C] border border-white/10 rounded-lg px-3 py-2.5 flex items-center justify-between gap-2">
                    <span className="text-slate-200 truncate">{loc.name.split('(')[0].trim()}</span>
                    <span className="font-mono text-[#E5C158] shrink-0 tabular-nums">${loc.startingTransferSgd}</span>
                  </div>
                ))}
              </div>

              <div>
                <a
                  href="/locations/"
                  onClick={(e) => go(e, '/locations/')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#E5C158] hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Explore All 8 Service Locations</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Guides + SEO Case Study Stack */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="surface-card rounded-xl p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E5C158]">
                    Chauffeur & Terminal Guides
                  </p>
                  <a
                    href="/guides/"
                    onClick={(e) => go(e, '/guides/')}
                    className="text-xs font-medium text-slate-300 hover:text-white"
                  >
                    All 6 Guides →
                  </a>
                </div>
                <div className="divide-y divide-white/10">
                  {GUIDES.slice(0, 3).map((g) => (
                    <a
                      key={g.id}
                      href="/guides/"
                      onClick={(e) => go(e, '/guides/')}
                      className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-4 group"
                    >
                      <div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-[#E5C158] transition-colors">
                          {g.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {g.category} · {g.readTime}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#E5C158] shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* WebDaddy.sg Case Study Card */}
              <a
                href="/seo-case-study/"
                onClick={(e) => go(e, '/seo-case-study/')}
                className="surface-card-interactive rounded-xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#E5C158]">
                    <TrendingUp className="w-4 h-4" />
                    <span>SEO Case Study · webdaddy.sg</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#E5C158] transition-colors">
                    How webdaddy.sg Helped Limo Singapore Build Organic Client Enquiries
                  </h3>
                  <p className="text-xs text-slate-400">
                    Review our 3-month Search Console recovery (5.59K impressions), technical audit fixes, and multi-page expansion.
                  </p>
                </div>
                <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 px-4 py-2.5 rounded-lg">
                  Read Case Study
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 05. FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-20 bg-[#0A0A0C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E5C158]">
              05. Frequently Asked Questions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Clear Answers on Terminals, Luggage, Customs & Rates
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {GENERAL_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span className="font-serif text-lg sm:text-xl font-semibold text-white group-hover:text-[#E5C158] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#E5C158]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-5 text-sm text-slate-300 leading-relaxed max-w-3xl">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Final Direct Dispatch Strip */}
          <div className="surface-card rounded-xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-white">Ready to confirm your pickup?</h3>
              <p className="text-xs text-slate-400">
                {BUSINESS_INFO.fullAddress} · UEN {BUSINESS_INFO.uen}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="px-4 py-2.5 rounded-lg bg-[#0A0A0C] border border-white/15 text-xs font-mono text-slate-200 inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="gold-gradient-bg text-black font-semibold text-xs px-5 py-2.5 rounded-lg cursor-pointer"
              >
                Reserve Chauffeur
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
