import React from 'react';

interface BotanicalProps {
  className?: string;
  flipped?: boolean;
}

export const BotanicalBranch: React.FC<BotanicalProps> = ({ className = '', flipped = false }) => {
  return (
    <div
      className={`relative w-full flex justify-center items-center pointer-events-none select-none ${className} ${
        flipped ? 'rotate-180' : ''
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[340px] sm:max-w-[420px] h-auto drop-shadow-sm"
      >
        <defs>
          <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E9A82" />
            <stop offset="100%" stopColor="#4A6B53" />
          </linearGradient>
          <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9FB7A2" />
            <stop offset="100%" stopColor="#607F68" />
          </linearGradient>
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A89269" />
            <stop offset="100%" stopColor="#556F59" />
          </linearGradient>
          <linearGradient id="goldVein" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2C792" />
            <stop offset="100%" stopColor="#C5A059" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Central graceful arching branch */}
        <path
          d="M 40,85 Q 120,45 200,55 T 360,85"
          stroke="url(#stemGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Botanical eucalyptus & olive leaves left wing */}
        <g opacity="0.95">
          {/* Leaf 1 */}
          <path
            d="M 65,75 Q 85,45 105,65 Q 85,85 65,75 Z"
            fill="url(#leafGrad1)"
          />
          <path d="M 67,74 Q 85,63 103,66" stroke="url(#goldVein)" strokeWidth="0.8" />

          {/* Leaf 2 */}
          <path
            d="M 100,60 Q 125,25 145,45 Q 120,65 100,60 Z"
            fill="url(#leafGrad2)"
          />
          <path d="M 102,59 Q 122,43 143,46" stroke="url(#goldVein)" strokeWidth="0.8" />

          {/* Leaf 3 */}
          <path
            d="M 135,55 Q 155,20 175,35 Q 155,55 135,55 Z"
            fill="url(#leafGrad1)"
          />
          <path d="M 137,54 Q 154,36 173,37" stroke="url(#goldVein)" strokeWidth="0.8" />

          {/* Leaf 4 downward */}
          <path
            d="M 90,72 Q 110,95 125,85 Q 110,65 90,72 Z"
            fill="url(#leafGrad2)"
          />
        </g>

        {/* Botanical leaves right wing */}
        <g opacity="0.95">
          {/* Leaf 5 */}
          <path
            d="M 335,75 Q 315,45 295,65 Q 315,85 335,75 Z"
            fill="url(#leafGrad1)"
          />
          <path d="M 333,74 Q 315,63 297,66" stroke="url(#goldVein)" strokeWidth="0.8" />

          {/* Leaf 6 */}
          <path
            d="M 300,60 Q 275,25 255,45 Q 280,65 300,60 Z"
            fill="url(#leafGrad2)"
          />
          <path d="M 298,59 Q 278,43 257,46" stroke="url(#goldVein)" strokeWidth="0.8" />

          {/* Leaf 7 */}
          <path
            d="M 265,55 Q 245,20 225,35 Q 245,55 265,55 Z"
            fill="url(#leafGrad1)"
          />
          <path d="M 263,54 Q 246,36 227,37" stroke="url(#goldVein)" strokeWidth="0.8" />

          {/* Leaf 8 downward */}
          <path
            d="M 310,72 Q 290,95 275,85 Q 290,65 310,72 Z"
            fill="url(#leafGrad2)"
          />
        </g>

        {/* Delicate white watercolor floral blossom center */}
        <g transform="translate(200, 52)">
          {/* Petals */}
          <path d="M 0,0 C -12,-20 -22,-8 0,-24 C 22,-8 12,-20 0,0 Z" fill="#FFFFFF" opacity="0.95" />
          <path d="M 0,0 C -22,-6 -18,14 -24,0 C -18,-14 -22,6 0,0 Z" fill="#FCFAF6" opacity="0.9" />
          <path d="M 0,0 C 22,-6 18,14 24,0 C 18,-14 22,6 0,0 Z" fill="#FCFAF6" opacity="0.9" />
          <path d="M 0,0 C -10,18 -18,8 0,22 C 18,8 10,18 0,0 Z" fill="#F8F4EE" opacity="0.95" />
          <circle cx="0" cy="0" r="4.5" fill="#E2C792" />
          <circle cx="0" cy="0" r="2" fill="#8C6A28" />

          {/* Little floral buds */}
          <circle cx="-35" cy="8" r="3" fill="#FFFFFF" />
          <circle cx="-35" cy="8" r="1.5" fill="#C5A059" />
          <circle cx="35" cy="8" r="3" fill="#FFFFFF" />
          <circle cx="35" cy="8" r="1.5" fill="#C5A059" />
        </g>
      </svg>
    </div>
  );
};

export const BotanicalDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`} aria-hidden="true">
      <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#8C6A28]/40" />
      <span className="text-[#8C6A28] text-xs">🌿</span>
      <span className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#8C6A28]/40" />
    </div>
  );
};
