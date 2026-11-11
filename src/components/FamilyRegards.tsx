import React, { useState } from 'react';
import { INVITATION_CORDIAL_TEXT, INVITATION_CREDITS, GROOM_DETAILS } from '../data/weddingData';
import { Heart, Share2, Copy, Check, MessageSquare, Phone } from 'lucide-react';

export const FamilyRegards: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const shareText = `*Wedding & Reception Invitation*\n\nAkhin Kishor & Jishna Vijayan\n\nWedding Ceremony: Wednesday, 20 January 2027 at Guruvayur Temple\n\nGrand Reception: Saturday, 23 January 2027 (4:00 PM – 8:00 PM) at Groom's Residence, Anchil House, Kunjom P.O., Thondernad, Wayanad.\n\nGoogle Maps: 11°45'25.5"N 75°50'41.3"E\n\n"We cordially invite you with family to join us for the reception on this auspicious occasion."\n\nWith regards: Chandran Anchil & Sheela\nWith best compliments: Friends & Relatives\n\nInvitation link: ${window.location.origin}`;

  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#FAF7F2] to-[#F1E8D9] border-t border-[#E8DFC8]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Auspicious Thali / Knot Emblem */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#8C6A28] to-[#C5A059] text-white flex items-center justify-center mx-auto mb-6 shadow-md shadow-[#C5A059]/20 text-2xl">
          🌸
        </div>

        <blockquote className="font-serif-wedding text-xl sm:text-2xl text-stone-800 italic leading-relaxed mb-8 max-w-xl mx-auto">
          "{INVITATION_CORDIAL_TEXT}"
        </blockquote>

        {/* Regards and Best Compliments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-10 text-left">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#E8DFC8] text-center shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C6A28] block mb-1">
              With Warm Regards
            </span>
            <p className="font-cinzel text-lg font-bold text-stone-900">
              {INVITATION_CREDITS.regards}
            </p>
            <p className="text-xs text-stone-500 mt-0.5">Parents of the Groom</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#E8DFC8] text-center shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C6A28] block mb-1">
              With Best Compliments
            </span>
            <p className="font-cinzel text-lg font-bold text-stone-900">
              {INVITATION_CREDITS.compliments}
            </p>
            <p className="text-xs text-stone-500 mt-0.5">Anchil & Puthumana Families</p>
          </div>
        </div>

        {/* Share buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleShareWhatsApp}
            className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Share via WhatsApp</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-medium text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Invitation Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Invitation Card</span>
              </>
            )}
          </button>

          <a
            href={`tel:${GROOM_DETAILS.phone.replace(/\s+/g, '')}`}
            className="px-6 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#b58f48] text-stone-950 font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call Family</span>
          </a>
        </div>
      </div>
    </section>
  );
};
