import React, { useState } from 'react';
import { GROOM_COORDINATES } from '../utils/calendar';
import { GROOM_DETAILS } from '../data/weddingData';
import { MapPin, Navigation, Copy, Check, ExternalLink, Compass, Car, Phone } from 'lucide-react';

export const VenueMap: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${GROOM_COORDINATES.lat},${GROOM_COORDINATES.lng}`;
  const navigationUrl = `https://www.google.com/maps/dir/?api=1&destination=${GROOM_COORDINATES.lat},${GROOM_COORDINATES.lng}`;

  const handleCopyCoordinates = () => {
    navigator.clipboard.writeText(GROOM_COORDINATES.dms);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="py-16 px-4 bg-[#F5EFE6] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6A28] mb-2">
            <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Venue & Directions</span>
            <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            How to Reach the Reception Venue
          </h2>
          <p className="font-serif-wedding text-stone-600 text-lg max-w-xl mx-auto italic mt-1">
            Groom's Residence: Anchil House, Kunjom P.O., Thondernad, Wayanad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map display (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-3 border border-[#E8DFC8] shadow-lg flex flex-col justify-between overflow-hidden">
            <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
              {/* Embedded OpenStreetMap interactive frame with accurate marker */}
              <iframe
                title="Reception Venue Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=75.834806%2C11.747083%2C75.854806%2C11.767083&layer=mapnik&marker=${GROOM_COORDINATES.lat}%2C${GROOM_COORDINATES.lng}`}
                className="w-full h-full"
              />

              {/* Pin Overlay Badge */}
              <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center gap-1.5 border border-[#C5A059]/40">
                <MapPin className="w-3.5 h-3.5 text-[#E2C792]" />
                <span>Anchil House, Kunjom</span>
              </div>
            </div>

            {/* Quick action bar */}
            <div className="p-3 pt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCoordinates}
                  className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-mono font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy GPS coordinates"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{GROOM_COORDINATES.dms}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={navigationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#C5A059] hover:bg-[#b58f48] text-stone-950 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Location info and travel guidelines (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFC8] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <h3 className="font-cinzel text-xl font-bold text-stone-900">
                  Venue Address & Contact
                </h3>
              </div>

              <p className="text-stone-700 text-sm font-medium">
                {GROOM_DETAILS.house}
              </p>
              <p className="text-stone-600 text-xs mt-0.5">
                {GROOM_DETAILS.postOffice}, {GROOM_DETAILS.village}
              </p>
              <p className="text-stone-600 text-xs">
                {GROOM_DETAILS.district} · PIN: {GROOM_DETAILS.pincode}
              </p>

              {/* Coordinates info box */}
              <div className="mt-4 p-3 rounded-2xl bg-[#FAF7F2] border border-[#E8DFC8] text-xs space-y-1">
                <div className="flex justify-between text-stone-500">
                  <span>DMS Coordinates:</span>
                  <span className="font-mono text-stone-800 font-semibold">{GROOM_COORDINATES.dms}</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>Decimal Coordinates:</span>
                  <span className="font-mono text-stone-800">{GROOM_COORDINATES.lat}, {GROOM_COORDINATES.lng}</span>
                </div>
              </div>

              {/* Route Guide */}
              <div className="mt-5 space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#8C6A28] flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5" />
                  <span>Travel Milestones & Routes</span>
                </h4>

                <div className="text-xs text-stone-600 space-y-2 border-l-2 border-[#E8DFC8] pl-3">
                  <div>
                    <span className="font-semibold text-stone-800">From Mananthavady (~18 km):</span>
                    <p className="text-stone-500">Head via Vellamunda to Kunjom junction. Ample parking available near the residence.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-stone-800">From Kalpetta / Kozhikode:</span>
                    <p className="text-stone-500">Via Panamaram or Tharuvana towards Thondernad / Kunjom.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help finding the venue? */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="text-stone-500">Family Assistance:</span>
              <a
                href={`tel:${GROOM_DETAILS.phone.replace(/\s+/g, '')}`}
                className="font-medium text-[#8C6A28] hover:text-[#5f4618] flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>Chandran Anchil</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
