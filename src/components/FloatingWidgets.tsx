import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface FloatingWidgetsProps {
  onOpenBooking: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Desktop WhatsApp Quick Button */}
      <a
        href={BUSINESS_INFO.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with dispatch on WhatsApp"
        className="hidden lg:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xl transition-colors"
      >
        <MessageSquare className="w-4 h-4" />
        <span>WhatsApp Dispatch</span>
      </a>

      {/* Mobile Compact Bottom Bar (<= 15% mobile viewport height) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 h-14 bg-[#0A0A0C]/95 backdrop-blur-md border-t border-white/10 px-3 flex items-center gap-2.5">
        <a
          href={BUSINESS_INFO.phoneHref}
          className="flex-1 h-10 rounded-lg bg-[#16161B] border border-white/10 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Call</span>
        </a>
        <a
          href={BUSINESS_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-10 rounded-lg bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-medium flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-[1.4] h-10 rounded-lg gold-gradient-bg text-black text-xs font-semibold cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </>
  );
};
