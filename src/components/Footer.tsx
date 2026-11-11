import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 bg-stone-950 text-stone-400 text-center text-xs relative overflow-hidden">
      <div className="max-w-xl mx-auto space-y-4">
        <p className="font-serif-wedding text-[#E2C792] text-sm italic tracking-wide">
          "മംഗല്യം തന്തുനാനേന മമ ജീവന ഹേതുനാ · കണ്ഠേ ബധ്നാമി ശുഭഗേ ത്വം ജീവ ശരദാം ശതം"
        </p>

        <div className="pt-4 border-t border-stone-800/80 max-w-md mx-auto">
          <p className="text-stone-400 text-xs sm:text-sm font-medium tracking-wide">
            For wedding invitation related work contact
          </p>
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919747797992"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F1B16] border border-[#C5A059]/40 text-[#E2C792] hover:text-white hover:border-[#C5A059] font-mono text-sm font-bold tracking-wider transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>+91 9747797992</span>
            </a>

            <a
              href="https://wa.me/919747797992?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20wedding%20invitation%20website%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-950/70 border border-emerald-700/60 text-emerald-300 hover:text-white hover:bg-emerald-900/80 text-xs font-semibold transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

