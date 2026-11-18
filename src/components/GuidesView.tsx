import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { GUIDES } from '../data/siteData';
import { RoutePath } from '../types';

interface GuidesViewProps {
  onNavigate: (route: RoutePath) => void;
  onOpenBooking: () => void;
}

export const GuidesView: React.FC<GuidesViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedGuideId, setSelectedGuideId] = useState<string>(GUIDES[0].id);
  const activeGuide = GUIDES.find((g) => g.id === selectedGuideId) || GUIDES[0];

  return (
    <div className="pt-24 pb-20 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E5C158]">
            Chauffeur & Terminal Guides
          </p>
          <h1
            className="font-serif font-bold text-white leading-[1.1]"
            style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.35rem)', textWrap: 'balance' }}
          >
            Singapore Limousine Pricing, Terminal & Cross-Border Guides
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Practical answers on Changi-to-Marina Bay Sands fares, Toyota Alphard vs Mercedes V-Class luggage sizing, Singapore–KL immigration documents, and wedding car pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Guide Selector List */}
          <div className="lg:col-span-4 space-y-2.5">
            {GUIDES.map((guide, index) => {
              const isSelected = guide.id === activeGuide.id;
              return (
                <button
                  key={guide.id}
                  type="button"
                  onClick={() => setSelectedGuideId(guide.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#16161B] border-[#D4AF37]/60'
                      : 'bg-[#111115] border-white/10 hover:border-white/25'
                  }`}
                >
                  <span className="text-xs text-slate-400 block">
                    0{index + 1} · {guide.category} · {guide.readTime}
                  </span>
                  <span
                    className={`font-serif text-lg font-bold block mt-1 ${
                      isSelected ? 'text-[#E5C158]' : 'text-white'
                    }`}
                  >
                    {guide.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Full Guide Reader Panel */}
          <article className="lg:col-span-8 surface-card rounded-xl p-6 sm:p-8 space-y-6">
            <div className="space-y-2 pb-6 border-b border-white/10">
              <p className="text-xs text-slate-400">
                {activeGuide.category} · {activeGuide.publishedDate} · {activeGuide.readTime} · {activeGuide.author}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                {activeGuide.title}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">{activeGuide.excerpt}</p>
            </div>

            <div className="space-y-8">
              {activeGuide.sections.map((sec, idx) => (
                <section key={idx} className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">{sec.heading}</h3>
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {sec.bullets && (
                    <ul className="space-y-2 pt-2">
                      {sec.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-200">
                          <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <a
                href={activeGuide.relatedServiceSlug}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(activeGuide.relatedServiceSlug);
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E5C158] hover:text-white transition-colors"
              >
                <span>Open Related Service Page</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="gold-gradient-bg text-black font-semibold text-xs px-5 py-2.5 rounded-lg cursor-pointer"
              >
                Reserve Chauffeur
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
