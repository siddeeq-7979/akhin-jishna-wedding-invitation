import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { triggerEnvelopeFlowerBurst } from './FlowerPetals';

interface EnvelopeModalProps {
  isOpen: boolean;
  onOpenInvitation: () => void;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({ isOpen, onOpenInvitation }) => {
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [isExited, setIsExited] = useState<boolean>(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Trigger flower petals & confetti
    setTimeout(() => {
      triggerEnvelopeFlowerBurst();
      onOpenInvitation();
    }, 450);

    // Allow animation to complete before removing overlay
    setTimeout(() => {
      setIsExited(true);
    }, 1500);
  };

  if (isExited) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/90 backdrop-blur-md overflow-hidden select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Wedding Invitation Envelope"
        >
          {/* ============================================================== */}
          {/* ENVELOPE SECTION BACKGROUND (Uploaded Traditional Artwork)      */}
          {/* ============================================================== */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <img
              src="/assets/aistudio/IMG_4027_7c393d31.jpeg"
              alt="Traditional Kerala Wedding Backdrop"
              className="w-full h-full object-cover object-center opacity-30 filter blur-[1.5px] scale-105 transform"
            />
            {/* Ambient luxury vignetting and warm gold tint */}
            <div className="absolute inset-0 bg-radial from-stone-950/40 via-stone-950/75 to-stone-950/95" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.18)_0%,transparent_70%)]" />
          </div>

          <div className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center z-10">
            {/* Header Text Above Envelope */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-center mb-2.5 text-stone-200"
            >
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E2C792] mb-0.5">
                <Sparkles className="w-3 h-3 text-[#C5A059]" />
                <span>Wedding Invitation</span>
                <Sparkles className="w-3 h-3 text-[#C5A059]" />
              </div>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide">
                Akhin & Jishna
              </h2>
            </motion.div>

            {/* ============================================================== */}
            {/* ANIMATED GROOM AND BRIDE VECTOR (Kerala Kasavu Couple Artwork) */}
            {/* ============================================================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 15 }}
              animate={
                isOpening
                  ? { opacity: 0.95, scale: 1.05, y: -10 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative mb-3 flex flex-col items-center"
            >
              {/* Gentle romantic breathing & floating animation */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="relative cursor-pointer group"
                onClick={handleOpen}
              >
                {/* Radiant golden halo aura */}
                <div className="absolute -inset-2 bg-gradient-to-t from-[#C5A059]/40 via-[#F4E8C1]/20 to-transparent rounded-t-full rounded-b-3xl blur-lg pointer-events-none" />

                {/* Arched portrait frame featuring the couple illustration */}
                <div className="relative w-28 h-36 sm:w-32 sm:h-42 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#C5A059] shadow-2xl bg-[#F5EDE1] shadow-black/60 p-0.5">
                  <img
                    src="/assets/aistudio/IMG_4027_7c393d31.jpeg"
                    alt="Animated Groom & Bride Vector - Akhin & Jishna"
                    className="w-full h-full object-cover object-bottom rounded-t-full rounded-b-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gentle shimmer sweep */}
                  <motion.div
                    initial={{ x: '-120%' }}
                    animate={{ x: '220%' }}
                    transition={{ repeat: Infinity, duration: 3.5, repeatDelay: 2, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none transform -skew-x-12"
                  />
                </div>

                {/* Auspicious golden Kasavu badge */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-stone-900/95 border border-[#C5A059]/70 text-[#E2C792] text-[9px] font-semibold tracking-wider uppercase shadow-md whitespace-nowrap flex items-center gap-1"
                >
                  <Heart className="w-2.5 h-2.5 fill-rose-500 text-rose-500" />
                  <span>Kalyanam · 2027</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ============================================================== */}
            {/* THE ENVELOPE 3D CONTAINER                                      */}
            {/* ============================================================== */}
            <div
              className="relative w-full aspect-[4/3] max-w-[340px] sm:max-w-[380px] cursor-pointer group select-none mt-1"
              onClick={handleOpen}
            >
              {/* Envelope Back Base */}
              <div className="absolute inset-0 bg-[#EFE8DC] rounded-2xl shadow-2xl border border-[#D5C7B0] overflow-hidden" />

              {/* Inside Gold Foil Lining */}
              <div className="absolute inset-2 bg-gradient-to-tr from-[#996515] via-[#E2C792] to-[#8C6A28] rounded-xl opacity-80" />

              {/* Invitation Letter Card (slides up when opening) */}
              <motion.div
                initial={{ y: 0 }}
                animate={isOpening ? { y: -110, scale: 1.02 } : { y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="absolute inset-x-4 top-4 bottom-3 bg-[#FAF7F2] rounded-xl shadow-lg border border-[#E8DFC8] p-4 flex flex-col items-center justify-center text-center z-20"
              >
                <div className="font-pinyon text-2xl sm:text-3xl text-[#996515] my-0.5">
                  Save the Date
                </div>
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 leading-tight">
                  Akhin Kishor & Jishna Vijayan
                </h3>
                <div className="w-8 h-[1px] bg-[#C5A059] my-1.5" />
                <p className="text-[11px] font-medium text-stone-700">
                  20 Jan (Ceremony) & 23 Jan 2027 (Reception)
                </p>
                <p className="text-[10px] text-stone-500 italic mt-0.5">
                  Anchil House, Kunjom, Wayanad
                </p>
              </motion.div>

              {/* Envelope Front Pocket (Triangles) */}
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  clipPath: 'polygon(0% 100%, 50% 50%, 100% 100%)',
                  background: 'linear-gradient(180deg, #E6DDD0 0%, #D8CBB9 100%)',
                }}
              />
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  clipPath: 'polygon(0% 0%, 0% 100%, 50% 50%)',
                  background: 'linear-gradient(90deg, #EFE8DC 0%, #E3D7C5 100%)',
                }}
              />
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)',
                  background: 'linear-gradient(-90deg, #EFE8DC 0%, #E3D7C5 100%)',
                }}
              />

              {/* Envelope Top Flap (folds open with 3D rotateX) */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={isOpening ? { rotateX: 180, zIndex: 10 } : { rotateX: 0 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                style={{ transformOrigin: 'top center' }}
                className="absolute inset-x-0 top-0 h-1/2 z-30"
              >
                <div
                  className="w-full h-full drop-shadow-md"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                    background: 'linear-gradient(180deg, #F5EDE1 0%, #DDD0BD 100%)',
                  }}
                />
              </motion.div>

              {/* Royal Golden Wax Seal in Center */}
              <motion.div
                initial={{ scale: 1 }}
                animate={
                  isOpening
                    ? { scale: [1, 1.3, 0], rotate: 45, opacity: 0 }
                    : { scale: [1, 1.04, 1] }
                }
                transition={
                  isOpening
                    ? { duration: 0.5 }
                    : { repeat: Infinity, duration: 2.5, ease: 'easeInOut' }
                }
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-16 h-16 sm:w-18 sm:h-18 rounded-full shadow-2xl flex items-center justify-center p-1 bg-gradient-to-tr from-[#7A5A1F] via-[#C5A059] to-[#E2C792] border-2 border-[#F4E8C1] group-hover:scale-105 transition-transform"
              >
                <div className="w-full h-full rounded-full border border-[#8C6A28]/40 flex flex-col items-center justify-center bg-[#8C6A28] text-white shadow-inner">
                  <span className="font-monogram text-base sm:text-lg font-bold leading-none text-[#F4E8C1]">
                    A & J
                  </span>
                  <span className="text-[7px] uppercase tracking-widest text-[#E2C792] font-semibold mt-0.5">
                    1202
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Instruction CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-4 flex flex-col items-center gap-1.5"
            >
              <button
                onClick={handleOpen}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8C6A28] to-[#C5A059] hover:from-[#78591D] hover:to-[#B58F48] text-stone-950 font-bold text-xs uppercase tracking-widest shadow-lg shadow-black/40 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 fill-stone-950" />
                <span>Tap to Open Invitation</span>
              </button>
              <p className="text-[10px] text-stone-400 italic">
                Opens envelope with traditional wedding melodies & blessings
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
