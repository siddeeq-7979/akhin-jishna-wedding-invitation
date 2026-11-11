import React from 'react';
import { GROOM_DETAILS, BRIDE_DETAILS } from '../data/weddingData';
import { MapPin, Home, User, Heart, Sparkles } from 'lucide-react';

export const CoupleCards: React.FC = () => {
  return (
    <section id="couple" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6A28] mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>The Blessed Couple</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
        </div>
        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          Two Souls, Bound by Sacred Ties
        </h2>
        <p className="font-serif-wedding italic text-stone-600 text-lg max-w-xl mx-auto mt-2">
          United with the loving blessings of parents, family, and elders
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-stretch">
        {/* GROOM CARD */}
        <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DFC8] shadow-lg shadow-stone-900/5 relative overflow-hidden flex flex-col justify-between group hover:border-[#C5A059] transition-all">
          {/* Top traditional gold ribbon accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C5A059] to-[#8C6A28]" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A28] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E8DFC8]">
                The Groom · വരൻ
              </span>
              <span className="text-2xl" role="img" aria-label="Traditional lamp">🪔</span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 mb-1">
              {GROOM_DETAILS.name}
            </h3>

            <p className="font-serif-wedding text-base text-[#8C6A28] font-semibold mb-4">
              {GROOM_DETAILS.parents}
            </p>

            <div className="space-y-3 text-sm text-stone-600 border-t border-stone-100 pt-4">
              <div className="flex items-start gap-2.5">
                <Home className="w-4 h-4 text-[#8C6A28] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-stone-800">{GROOM_DETAILS.house}</span>
                  <p className="text-xs text-stone-500">Family Ancestral Home</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8C6A28] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-stone-800">
                    {GROOM_DETAILS.postOffice}, {GROOM_DETAILS.village}
                  </span>
                  <p className="text-xs text-stone-500">{GROOM_DETAILS.district}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span>Anchil Family, Wayanad</span>
            <span className="text-[#8C6A28] font-medium">Reception Venue Host</span>
          </div>
        </div>

        {/* BRIDE CARD */}
        <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8DFC8] shadow-lg shadow-stone-900/5 relative overflow-hidden flex flex-col justify-between group hover:border-[#C5A059] transition-all">
          {/* Top traditional gold ribbon accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8C6A28] to-[#C5A059]" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C6A28] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E8DFC8]">
                The Bride · വധു
              </span>
              <span className="text-2xl" role="img" aria-label="Lotus flower">🪷</span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 mb-1">
              {BRIDE_DETAILS.name}
            </h3>

            <p className="font-serif-wedding text-base text-[#8C6A28] font-semibold mb-4">
              {BRIDE_DETAILS.parents}
            </p>

            <div className="space-y-3 text-sm text-stone-600 border-t border-stone-100 pt-4">
              <div className="flex items-start gap-2.5">
                <Home className="w-4 h-4 text-[#8C6A28] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-stone-800">{BRIDE_DETAILS.house}</span>
                  <p className="text-xs text-stone-500">Puthumana Family</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8C6A28] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-stone-800">
                    {BRIDE_DETAILS.postOffice}, {BRIDE_DETAILS.village}
                  </span>
                  <p className="text-xs text-stone-500">{BRIDE_DETAILS.district}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span>Puthumana Family, Malappuram</span>
            <span className="text-[#8C6A28] font-medium">Sacred Union</span>
          </div>
        </div>
      </div>
    </section>
  );
};
