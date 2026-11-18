import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown, MessageSquare } from 'lucide-react';
import { SERVICE_PAGES, ALL_SERVICE_ROUTES, BUSINESS_INFO } from '../data/siteData';
import { RoutePath } from '../types';

interface ServiceDetailViewProps {
  route: RoutePath;
  onNavigate: (route: RoutePath, hash?: string) => void;
  onOpenBooking: (vehicleId?: string, initialData?: any) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  route,
  onNavigate,
  onOpenBooking,
}) => {
  const page = SERVICE_PAGES[route] || SERVICE_PAGES['/changi-airport-transfer/'];
  const [openFaq, setOpenFaq] = useState<string>(page.faqs[0]?.id || '');

  const go = (e: React.MouseEvent, target: RoutePath) => {
    e.preventDefault();
    onNavigate(target);
  };

  return (
    <div className="pt-24 pb-20 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <a href="/" onClick={(e) => go(e, '/')} className="hover:text-white transition-colors">
            Home
          </a>
          <span aria-hidden="true">/</span>
          <span className="text-slate-300">{page.categoryLabel}</span>
          <span aria-hidden="true">/</span>
          <span className="text-[#E5C158]">{page.h1.split('—')[0].trim()}</span>
        </nav>

        {/* Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E5C158]">
              {page.categoryLabel}
            </p>
            <h1
              className="font-serif font-bold text-white leading-[1.1]"
              style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.35rem)', textWrap: 'balance' }}
            >
              {page.h1}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">{page.leadSummary}</p>

            {/* Concrete Operational Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Starting Rate</span>
                <span className="font-mono text-lg font-semibold text-[#E5C158] tabular-nums">
                  SGD ${page.startingPriceSgd}
                </span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Waiting Window</span>
                <span className="text-xs text-slate-200 leading-snug block mt-0.5">{page.waitingPolicy}</span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Meeting Point</span>
                <span className="text-xs text-slate-200 leading-snug block mt-0.5">{page.meetPoint}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking(undefined, { serviceType: page.h1 })}
                className="gold-gradient-bg text-black font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Reserve This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-[#121216] border border-white/15 hover:border-emerald-500/50 text-slate-100 text-sm font-medium inline-flex items-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full min-h-[280px] rounded-xl overflow-hidden border border-white/10 bg-[#121216]">
              <img
                src={page.heroImage}
                alt={page.heroImageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Long-form SEO Operational Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4 border-t border-white/10">
          <div className="lg:col-span-8 space-y-10">
            {page.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">{sec.heading}</h2>
                {sec.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {para}
                  </p>
                ))}
                {sec.bulletPoints && (
                  <ul className="space-y-2.5 pt-2">
                    {sec.bulletPoints.map((pt, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-200">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Rate Comparison Table */}
            <section className="space-y-4 pt-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Transparent Rate Table (SGD)
              </h2>
              <div className="overflow-x-auto surface-card rounded-xl">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#18181D] text-slate-300 border-b border-white/10">
                    <tr>
                      <th className="py-3.5 px-4 font-semibold">Route / Charter</th>
                      <th className="py-3.5 px-4 font-semibold">E-Class</th>
                      <th className="py-3.5 px-4 font-semibold">Alphard Lounge</th>
                      <th className="py-3.5 px-4 font-semibold">V-Class VIP</th>
                      <th className="py-3.5 px-4 font-semibold">Maybach / Ghost</th>
                      <th className="py-3.5 px-4 font-semibold">Inclusions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {page.pricingTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="py-3.5 px-4 font-medium text-white">{row.routeOrPackage}</td>
                        <td className="py-3.5 px-4 font-mono tabular-nums text-slate-200">{row.eClass}</td>
                        <td className="py-3.5 px-4 font-mono tabular-nums text-[#E5C158]">{row.alphard}</td>
                        <td className="py-3.5 px-4 font-mono tabular-nums text-slate-200">{row.vClass}</td>
                        <td className="py-3.5 px-4 font-mono tabular-nums text-slate-200">{row.maybachOrGhost}</td>
                        <td className="py-3.5 px-4 text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400">
                Midnight dispatch (23:30–06:30) adds flat SGD $15. Infant/booster seat available at SGD $15 per trip.
              </p>
            </section>

            {/* Page-Specific FAQs */}
            {page.faqs.length > 0 && (
              <section className="space-y-4 pt-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">Service FAQ</h2>
                <div className="divide-y divide-white/10 border-y border-white/10">
                  {page.faqs.map((faq) => {
                    const isOpen = openFaq === faq.id;
                    return (
                      <div key={faq.id}>
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? '' : faq.id)}
                          aria-expanded={isOpen}
                          className="w-full py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                        >
                          <span className="font-serif text-lg font-semibold text-white">{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                              isOpen ? 'rotate-180 text-[#E5C158]' : ''
                            }`}
                          />
                        </button>
                        {isOpen && <p className="pb-4 text-sm text-slate-300 leading-relaxed">{faq.answer}</p>}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar: Related Service Pages & Local Address */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="surface-card rounded-xl p-6 space-y-4">
              <h3 className="font-serif text-xl font-bold text-white">Related Chauffeur Pages</h3>
              <ul className="divide-y divide-white/10 text-sm">
                {page.relatedSlugs.map((slug) => {
                  const meta = ALL_SERVICE_ROUTES.find((r) => r.slug === slug);
                  if (!meta) return null;
                  return (
                    <li key={slug} className="py-2.5 first:pt-0 last:pb-0">
                      <a
                        href={slug}
                        onClick={(e) => go(e, slug)}
                        className="flex items-center justify-between text-slate-200 hover:text-[#E5C158] transition-colors"
                      >
                        <span>{meta.label}</span>
                        <span className="font-mono text-xs text-slate-400 tabular-nums">{meta.priceFrom}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="surface-card rounded-xl p-6 space-y-3 text-xs text-slate-300">
              <h3 className="font-serif text-lg font-bold text-white">Singapore Dispatch Office</h3>
              <p>{BUSINESS_INFO.fullAddress}</p>
              <p className="text-slate-400">UEN: <span className="font-mono">{BUSINESS_INFO.uen}</span></p>
              <p>
                Hotline:{' '}
                <a href={BUSINESS_INFO.phoneHref} className="text-[#E5C158] font-mono tabular-nums">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
              <p>Hours: {BUSINESS_INFO.operatingHours}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
