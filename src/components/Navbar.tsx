import React, { useState, useEffect } from 'react';
import { Mail, Play, Pause, Music } from 'lucide-react';

interface NavbarProps {
  onReopenEnvelope: () => void;
  isPlaying?: boolean;
  onToggleMusic?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onReopenEnvelope,
  isPlaying = false,
  onToggleMusic,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm py-2.5 border-b border-[#E8DFC8]'
          : 'bg-transparent py-3.5'
      }`}
    >
      <div className="max-w-2xl mx-auto px-4 flex items-center justify-between">
        {/* Brand & A&J Monogram */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center">
            <span className="font-monogram text-2xl sm:text-3xl font-bold tracking-widest text-[#B58A38] hover:text-[#996515] transition-colors select-none">
              A & J
            </span>
          </div>

          {/* Quick Music Icon beside A&J */}
          {onToggleMusic && (
            <button
              onClick={onToggleMusic}
              className="p-1 rounded-full text-[#8C6A28] hover:text-[#5E4413] hover:bg-[#E8DFC8]/50 transition-colors cursor-pointer"
              aria-label={isPlaying ? 'Pause music' : 'Play music'}
              title={isPlaying ? 'Pause wedding song' : 'Play wedding song'}
            >
              <Music className={`w-3.5 h-3.5 ${isPlaying ? 'text-[#C5A059] animate-pulse' : 'opacity-70'}`} />
            </button>
          )}
        </div>

        {/* Right side actions: Music Play Button & Envelope Reopen */}
        <div className="flex items-center gap-2">
          {/* Top Navbar Music Play Button */}
          {onToggleMusic && (
            <button
              onClick={onToggleMusic}
              className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 border shadow-xs ${
                isPlaying
                  ? 'bg-amber-50/95 hover:bg-amber-100 text-stone-900 border-[#C5A059]/80'
                  : 'bg-white/95 hover:bg-white text-stone-800 border-[#E8DFC8]'
              }`}
              aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
              title={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-[#8C6A28] text-[#8C6A28]" />
                  <span className="text-[11px] font-semibold text-[#8C6A28]">Pause</span>
                  {/* Subtle sound wave animation */}
                  <span className="hidden sm:inline-flex items-end gap-0.5 h-3 ml-0.5">
                    <span className="w-0.5 h-2 bg-[#8C6A28] rounded-full animate-pulse" />
                    <span className="w-0.5 h-3 bg-[#8C6A28] rounded-full animate-bounce" />
                    <span className="w-0.5 h-1.5 bg-[#8C6A28] rounded-full animate-pulse" />
                  </span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                  <span className="text-[11px] font-medium text-stone-800">Play Music</span>
                </>
              )}
            </button>
          )}

          {/* Envelope Reopen Button */}
          <button
            onClick={onReopenEnvelope}
            className="px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-stone-800 border border-[#E8DFC8] text-xs font-medium tracking-wide shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
            title="Re-open wedding envelope"
          >
            <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="hidden xs:inline">Envelope</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
