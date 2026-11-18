import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { LOCATION_HUBS } from '../data/siteData';
import { RoutePath } from '../types';

interface LocationsViewProps {
  onNavigate: (route: RoutePath) => void;
  onOpenBooking: (vehicleId?: string, initialData?: any) => void;
}

export const LocationsView: React.FC<LocationsViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [zoneFilter, setZoneFilter] = useState<string>('All');
  const zones = ['All', 'Central', 'East', 'South', 'North', 'West', 'Cross-Border'];

  const visibleLocations =
    zoneFilter === 'All' ? LOCATION_HUBS : LOCATION_HUBS.filter((l) => l.zone === zoneFilter);

  return (
    <div className="pt-24 pb-20 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E5C158]">
            Island-Wide & Cross-Border Directory
          </p>
          <h1
            className="font-serif font-bold text-white leading-[1.1]"
            style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.35rem)', textWrap: 'balance' }}
          >
            Singapore Limousine Service Locations & Pickup Bays
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Fixed transfer rates and exact hotel, terminal, and corporate driveway pickup procedures across all Singapore districts plus Johor Bahru, Desaru, Malacca, and Kuala Lumpur.
          </p>
        </div>

        {/* Zone Filter */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-[#141418] rounded-lg border border-white/10 w-fit">
          {zones.map((z) => (
            <button
              key={z}
              type="button"
              onClick={() => setZoneFilter(z)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                zoneFilter === z ? 'gold-gradient-bg text-black font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {z}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleLocations.map((hub) => (
            <article key={hub.id} className="surface-card rounded-xl p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400">
                      {hub.zone} Zone · Changi {hub.driveFromChangiMins} · CBD {hub.driveFromCbdMins}
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-white mt-1">{hub.name}</h2>
                  </div>
                  <span className="font-mono text-sm font-semibold text-[#E5C158] shrink-0 tabular-nums">
                    From ${hub.startingTransferSgd}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">{hub.pickupBayNotes}</p>

                <div className="pt-2 border-t border-white/10">
                  <span className="text-xs font-medium text-slate-400 block mb-2">Primary Pickup & Drop-Off Venues</span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-200">
                    {hub.keyVenues.map((venue, idx) => (
                      <span key={venue} className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-[#D4AF37]" />
                        <span>{venue}</span>
                        {idx < hub.keyVenues.length - 1 && <span className="text-slate-600 ml-1">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(undefined, { dropoffLocation: hub.name })}
                  className="gold-gradient-bg text-black font-semibold text-xs px-4 py-2.5 rounded-lg cursor-pointer"
                >
                  Book This Location
                </button>
                {hub.dedicatedPageSlug && (
                  <a
                    href={hub.dedicatedPageSlug}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(hub.dedicatedPageSlug!);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-200 hover:text-[#E5C158] px-3 py-2.5"
                  >
                    <span>Dedicated Route Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
