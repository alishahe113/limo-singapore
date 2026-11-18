import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { RoutePath } from '../types';
import { ALL_SERVICE_ROUTES, BUSINESS_INFO } from '../data/siteData';

interface FooterProps {
  onNavigate: (route: RoutePath, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const go = (e: React.MouseEvent, route: RoutePath, hash?: string) => {
    e.preventDefault();
    onNavigate(route, hash);
  };

  return (
    <footer className="bg-[#070709] text-slate-400 border-t border-white/10 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Company & Local SEO Address Block */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="/"
              onClick={(e) => go(e, '/')}
              className="font-serif text-2xl font-bold tracking-wide text-white inline-block"
            >
              LIMO <span className="gold-gradient-text">SINGAPORE</span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              24/7 private limousine and chauffeur fleet serving Singapore Changi Airport, Seletar Business Aviation, corporate roadshows, bridal charters, and Singapore–Malaysia cross-border transfers.
            </p>

            <div className="space-y-2.5 text-xs pt-1">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="block">{BUSINESS_INFO.addressLine1}</span>
                  <span className="block text-slate-400">
                    {BUSINESS_INFO.addressLine2} · UEN <span className="font-mono">{BUSINESS_INFO.uen}</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={BUSINESS_INFO.phoneHref} className="hover:text-white transition-colors font-mono tabular-nums">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <MessageSquare className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Dispatch ({BUSINESS_INFO.whatsappDisplay})
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Dedicated Service Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2 text-xs">
              {ALL_SERVICE_ROUTES.slice(0, 6).map((item) => (
                <li key={item.slug}>
                  <a
                    href={item.slug}
                    onClick={(e) => go(e, item.slug)}
                    className="hover:text-[#E5C158] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destination & Fleet Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Destinations & Fleet</h3>
            <ul className="space-y-2 text-xs">
              {ALL_SERVICE_ROUTES.slice(6).map((item) => (
                <li key={item.slug}>
                  <a
                    href={item.slug}
                    onClick={(e) => go(e, item.slug)}
                    className="hover:text-[#E5C158] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & SEO */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Resources</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/locations/" onClick={(e) => go(e, '/locations/')} className="hover:text-[#E5C158] transition-colors">
                  Service Locations
                </a>
              </li>
              <li>
                <a href="/guides/" onClick={(e) => go(e, '/guides/')} className="hover:text-[#E5C158] transition-colors">
                  Chauffeur Guides
                </a>
              </li>
              <li>
                <a href="/seo-case-study/" onClick={(e) => go(e, '/seo-case-study/')} className="hover:text-[#E5C158] transition-colors">
                  WebDaddy.sg SEO Case Study
                </a>
              </li>
              <li>
                <a href="/about-us.html" className="hover:text-[#E5C158] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-[#E5C158] transition-colors">
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 {BUSINESS_INFO.legalName} · UEN {BUSINESS_INFO.uen} · {BUSINESS_INFO.addressLine2}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy-policy.html" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a href="/terms-and-conditions.html" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <span aria-hidden="true">·</span>
            <a href="/disclaimer.html" className="hover:text-slate-300 transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
