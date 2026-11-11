import React from 'react';
import { DRESS_CODE_PALETTE } from '../data/weddingData';
import { Sparkles } from 'lucide-react';

export const DressCode: React.FC = () => {
  return (
    <section className="py-14 px-4 bg-[#FAF7F2] border-t border-b border-[#E8DFC8]/60">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6A28] mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Attire & Palette</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
          Dress Code & Wedding Palette
        </h2>
        <p className="font-serif-wedding text-stone-600 text-base max-w-lg mx-auto italic mt-1 mb-8">
          Traditional Kerala festive wear or elegant ethnic attire. We love to celebrate together in shades of Kasavu gold, serene off-whites, and festive greens.
        </p>

        {/* Color Palette Swatches (Inspired by reference mockup) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
          {DRESS_CODE_PALETTE.map((color, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-md border-2 border-white group-hover:scale-110 transition-transform cursor-pointer relative"
                style={{ backgroundColor: color.hex }}
              />
              <div className="text-center">
                <span className="block text-xs font-medium text-stone-800 leading-tight">
                  {color.name}
                </span>
                <span className="text-[10px] text-stone-400 font-mono">
                  {color.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Helpful attire suggestions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left text-xs sm:text-sm text-stone-600">
          <div className="bg-white p-4 rounded-2xl border border-[#E8DFC8]">
            <h4 className="font-cinzel font-bold text-stone-900 mb-1 flex items-center gap-1.5">
              <span>Gentlemen</span>
            </h4>
            <p className="text-xs text-stone-600">
              Traditional Kerala Kasavu Mundu with Kurta / Shirt, or smart ethnic festive wear in ivory, cream, or pastel tones.
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#E8DFC8]">
            <h4 className="font-cinzel font-bold text-stone-900 mb-1 flex items-center gap-1.5">
              <span>Ladies</span>
            </h4>
            <p className="text-xs text-stone-600">
              Kasavu Saree / Set Mundu, festive silk sarees, or elegant Indian ethnic ensembles adorned with traditional jewelry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
