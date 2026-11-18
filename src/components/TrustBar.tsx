import React from 'react';
import { Star, ShieldCheck, Clock, Award, Car, CheckCircle2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    { icon: Star, label: '5.0★ Google Reviews', subtext: 'Over 1,200 Verified VVIP Ratings' },
    { icon: Clock, label: 'Available 24/7/365', subtext: 'Always On-Call Local Dispatch' },
    { icon: Award, label: 'Professional Chauffeurs', subtext: 'Uniformed, English Speaking, Vetted' },
    { icon: ShieldCheck, label: 'Licensed LTA Drivers', subtext: 'Full Commercial Insurance Cover' },
    { icon: Car, label: 'Pristine Luxury Fleet', subtext: 'Maybach, Rolls-Royce, Alphard, S-Class' },
    { icon: CheckCircle2, label: 'Fixed Transparent Pricing', subtext: 'Zero Peak Hour Surges or Toll Fees' },
  ];

  const clientLogos = [
    'The Ritz-Carlton Millenia',
    'Four Seasons Singapore',
    'Marina Bay Sands Paiza',
    'Raffles Hotel Singapore',
    'Capella Sentosa',
    'DBS Private Bank'
  ];

  return (
    <section id="trust" className="bg-[#0A0A0C] border-y border-[#C9A227]/20 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-[#C9A227]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-[#C9A227]" />
                </div>
                <h3 className="text-xs font-bold text-slate-100 uppercase tracking-wider">{point.label}</h3>
                <p className="text-[10px] text-slate-400 mt-0.5">{point.subtext}</p>
              </div>
            );
          })}
        </div>

        {/* Corporate Client Marquee Label */}
        <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
          <span className="text-[11px] font-semibold tracking-widest text-amber-200/60 uppercase">
            Trusted Transportation Partner For:
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {clientLogos.map((client, idx) => (
              <span
                key={idx}
                className="text-xs font-serif font-bold tracking-wider text-slate-400 hover:text-[#C9A227] transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
