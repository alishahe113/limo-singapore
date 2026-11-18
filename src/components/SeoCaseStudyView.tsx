import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { SEO_AUDIT_FIXES } from '../data/siteData';
import { RoutePath } from '../types';

interface SeoCaseStudyViewProps {
  onNavigate: (route: RoutePath) => void;
  onOpenBooking: () => void;
}

export const SeoCaseStudyView: React.FC<SeoCaseStudyViewProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="pt-24 pb-20 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Case Study Header */}
        <div className="space-y-4 max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E5C158]">
            Website SEO Case Study · Partnered with webdaddy.sg
          </p>
          <h1
            className="font-serif font-bold text-white leading-[1.08]"
            style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.5rem)', textWrap: 'balance' }}
          >
            How webdaddy.sg Helped Limo Singapore Build Organic Visibility & Client Enquiries
          </h1>
          <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
            When limo-singapore.com first launched, it operated as a single landing page with zero pages appearing in Google <span className="font-mono text-slate-200">site:</span> search, an unreachable <span className="font-mono text-slate-200">robots.txt</span>, and exposed personal author metadata. Partnering with{' '}
            <a
              href="https://webdaddy.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5C158] underline underline-offset-4 hover:text-white inline-flex items-center gap-1"
            >
              <span>webdaddy.sg</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            , we diagnosed the indexing bottlenecks in Google Search Console, corrected technical metadata, and restructured the domain into dedicated Singapore limousine service, fleet, location, and guide pages.
          </p>
        </div>

        {/* Verified Google Search Console Performance Screenshot + Metrics */}
        <section className="surface-card rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Google Search Console 3-Month Performance Snapshot
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Verified Search Console property data for <span className="font-mono">https://limo-singapore.com/</span> showing early impression recovery after Search Console submission.
              </p>
            </div>
            <span className="text-xs font-mono text-[#E5C158]">Source: Google Search Console</span>
          </div>

          {/* 4-Column Tabular Metrics Strip matching Screenshot */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#0A0A0C] border border-white/10 rounded-lg p-4">
              <span className="text-xs text-slate-400 block">Total Clicks (3 Months)</span>
              <span className="font-mono text-3xl font-bold text-white tabular-nums mt-1 block">26</span>
            </div>
            <div className="bg-[#0A0A0C] border border-white/10 rounded-lg p-4">
              <span className="text-xs text-slate-400 block">Total Impressions (3 Months)</span>
              <span className="font-mono text-3xl font-bold text-[#E5C158] tabular-nums mt-1 block">5.59K</span>
            </div>
            <div className="bg-[#0A0A0C] border border-white/10 rounded-lg p-4">
              <span className="text-xs text-slate-400 block">Average CTR</span>
              <span className="font-mono text-3xl font-bold text-white tabular-nums mt-1 block">0.5%</span>
            </div>
            <div className="bg-[#0A0A0C] border border-white/10 rounded-lg p-4">
              <span className="text-xs text-slate-400 block">Average Position</span>
              <span className="font-mono text-3xl font-bold text-white tabular-nums mt-1 block">66.8</span>
            </div>
          </div>

          {/* Embedded User Screenshot */}
          <figure className="space-y-3">
            <div className="rounded-xl overflow-hidden border border-white/15 bg-white">
              {!imgError ? (
                <img
                  src="/assets/aistudio/image_17a75447.png"
                  alt="Google Search Console performance screenshot for limo-singapore.com showing 26 total clicks, 5.59K impressions, 0.5% CTR, and upward daily impression trend engineered with webdaddy.sg"
                  onError={() => setImgError(true)}
                  className="w-full h-auto block"
                />
              ) : (
                <div className="p-10 text-center bg-[#121216] text-slate-300 text-sm">
                  Google Search Console screenshot: 26 clicks · 5.59K impressions · 0.5% CTR · 66.8 avg position
                </div>
              )}
            </div>
            <figcaption className="text-xs text-slate-400 leading-relaxed">
              Figure 1: Google Search Console 3-month performance report for limo-singapore.com. Note the sustained upward climb in daily impressions on the right half of the chart—reaching 100–140 impressions per day—immediately after webdaddy.sg initiated sitemap indexing, Search Console verification, and on-page search-intent optimisation.
            </figcaption>
          </figure>
        </section>

        {/* Strategy & Execution Story */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 surface-card rounded-xl p-7 space-y-4">
            <p className="text-xs font-mono text-[#E5C158]">PHASE 01 · TECHNICAL RECOVERY</p>
            <h2 className="font-serif text-2xl font-bold text-white">
              Why 5.59K Impressions Only Produced 0.5% CTR Initially
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              During the initial 90-day Search Console window captured above, Google began discovering limo-singapore.com—generating 5,590 impressions—yet average ranking sat at position 66.8 with 0.5% CTR. A single homepage with a generic 40-character title tag and repeated buzzword copy could not compete against specialised Singapore limousine competitors for high-intent terms like <em>changi airport limo transfer</em>, <em>alphard with driver singapore</em>, or <em>singapore to kl limo</em>.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Working alongside <strong>webdaddy.sg</strong>, we audited every crawl, trust, and metadata issue: exposing the missing XML sitemap and robots.txt, scrubbing a leaked personal email from Twitter metadata, publishing our International Plaza office address and ACRA UEN, and rewriting title tags and descriptions around real customer intent and WhatsApp booking speed.
            </p>
          </div>

          <div className="lg:col-span-6 surface-card rounded-xl p-7 space-y-4">
            <p className="text-xs font-mono text-[#E5C158]">PHASE 02 · MULTI-PAGE ARCHITECTURE</p>
            <h2 className="font-serif text-2xl font-bold text-white">
              Turning One Landing Page Into 18 Targeted Client Acquisition Pages
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To move impressions from page 7 (position 66.8) onto page 1 and capture qualified WhatsApp and phone leads, webdaddy.sg mapped a complete hub-and-spoke site architecture:
            </p>
            <ul className="space-y-2.5 text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  12 dedicated service, destination & flagship fleet pages (Changi Airport, Toyota Alphard, Malaysia Cross-Border, Wedding, Corporate/F1/MICE, Hourly, Marina Bay Sands, Sentosa, Seletar, Cruise Centre, Rolls-Royce Ghost, Maybach).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  6 long-tail operational buyer guides answering exact fare, terminal meet-and-greet, and customs questions.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Valid LocalBusiness, Service, and FAQPage JSON-LD without risky fabricated review markup, paired with a post-ride WhatsApp Google Business Profile review workflow.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Full Audit Verification Ledger */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Technical & On-Page SEO Audit Implementation Log
            </h2>
            <p className="text-xs text-slate-400">
              Every issue identified in the limo-singapore.com audit and its implemented resolution.
            </p>
          </div>

          <div className="overflow-x-auto surface-card rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#18181D] text-slate-300 border-b border-white/10">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Audit Item</th>
                  <th className="py-3.5 px-4 font-semibold">Previous Issue</th>
                  <th className="py-3.5 px-4 font-semibold">Implemented Fix</th>
                  <th className="py-3.5 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {SEO_AUDIT_FIXES.map((row) => (
                  <tr key={row.item} className="hover:bg-white/[0.02]">
                    <td className="py-3.5 px-4 font-medium text-white whitespace-nowrap">{row.item}</td>
                    <td className="py-3.5 px-4 text-slate-400">{row.before}</td>
                    <td className="py-3.5 px-4 text-slate-200">{row.after}</td>
                    <td className="py-3.5 px-4 font-mono text-emerald-400 whitespace-nowrap">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom Action Strip */}
        <div className="surface-card rounded-xl p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-white">
              Explore the New Service Pages Built Under This Strategy
            </h3>
            <p className="text-xs text-slate-400">
              Start with our Changi Airport Transfer or Toyota Alphard Executive Lounge pages.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/changi-airport-transfer/')}
              className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Changi Airport Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={onOpenBooking}
              className="gold-gradient-bg text-black font-semibold text-xs px-5 py-2.5 rounded-lg cursor-pointer"
            >
              Reserve Chauffeur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
