import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { RoutePath } from '../types';
import { BUSINESS_INFO } from '../data/siteData';

interface HeaderProps {
  currentRoute: RoutePath;
  onNavigate: (route: RoutePath, hash?: string) => void;
  onOpenBooking: (vehicleId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems: { label: string; route: RoutePath; hash?: string }[] = [
    { label: 'Services', route: '/changi-airport-transfer/' },
    { label: 'Fleet', route: '/', hash: 'fleet' },
    { label: 'Locations', route: '/locations/' },
    { label: 'Guides', route: '/guides/' },
    { label: 'SEO Case Study', route: '/seo-case-study/' },
  ];

  const handleLinkClick = (e: React.MouseEvent, route: RoutePath, hash?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(route, hash);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#0A0A0C]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-[#0A0A0C]/80 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
        >
          LIMO <span className="gold-gradient-text">SINGAPORE</span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive =
              item.route !== '/'
                ? currentRoute === item.route
                : currentRoute === '/' && false;
            return (
              <a
                key={item.label}
                href={item.hash ? `/#${item.hash}` : item.route}
                onClick={(e) => handleLinkClick(e, item.route, item.hash)}
                className={`text-sm font-medium whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
                  isActive
                    ? 'text-[#E5C158] border-[#D4AF37]'
                    : 'text-slate-300 border-transparent hover:text-white hover:border-white/30'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile drawer toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center gold-gradient-bg text-black font-semibold text-xs tracking-wide px-5 py-2.5 rounded-lg hover:brightness-110 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Reserve Chauffeur
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F13] border-b border-white/10 px-4 py-5 space-y-4">
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.hash ? `/#${item.hash}` : item.route}
                onClick={(e) => handleLinkClick(e, item.route, item.hash)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-[#E5C158] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>24/7 Dispatch</span>
              <a href={BUSINESS_INFO.phoneHref} className="text-slate-200 font-mono tabular-nums">
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full gold-gradient-bg text-black font-semibold text-sm py-3 rounded-lg cursor-pointer"
            >
              Reserve Chauffeur
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
