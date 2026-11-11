import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

/**
 * Triggers a rich burst of celebration confetti mixed with delicate flower petals
 */
export function triggerEnvelopeFlowerBurst() {
  const duration = 3.5 * 1000;
  const animationEnd = Date.now() + duration;

  // Primary festive burst from center
  confetti({
    particleCount: 70,
    spread: 100,
    origin: { y: 0.5, x: 0.5 },
    colors: ['#FFFFFF', '#FDF8F0', '#E2C792', '#C5A059', '#7E9A82', '#F4A7B9', '#8C6A28'],
    scalar: 1.2,
    ticks: 200,
  });

  // Secondary soft drifting petals from both sides
  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.65 },
      colors: ['#FFFFFF', '#FDF8F0', '#E2C792', '#F4A7B9', '#7E9A82'],
      scalar: 1.1,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.65 },
      colors: ['#FFFFFF', '#FDF8F0', '#C5A059', '#F4A7B9', '#4A6B53'],
      scalar: 1.1,
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };
  frame();
}

/**
 * Ambient floating flower petals drifting in background after envelope opening
 */
interface PetalItem {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: 'jasmine' | 'rose' | 'leaf' | 'gold';
  rotation: number;
}

export const AmbientPetals: React.FC = () => {
  const [petals, setPetals] = useState<PetalItem[]>([]);

  useEffect(() => {
    const types: ('jasmine' | 'rose' | 'leaf' | 'gold')[] = ['jasmine', 'rose', 'leaf', 'gold', 'jasmine'];
    const generated: PetalItem[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 96 + 2,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 10,
      size: 14 + Math.random() * 12,
      type: types[i % types.length],
      rotation: Math.random() * 360,
    }));
    setPetals(generated);
  }, []);

  const getPetalColor = (type: PetalItem['type']) => {
    switch (type) {
      case 'jasmine':
        return 'bg-gradient-to-br from-white to-[#F6EFE6] border border-[#E8DFC8]/50 shadow-sm';
      case 'rose':
        return 'bg-gradient-to-br from-[#FCE4EC] to-[#F8BBD0] opacity-80';
      case 'leaf':
        return 'bg-gradient-to-br from-[#A5D6A7] to-[#81C784] opacity-70';
      case 'gold':
        return 'bg-gradient-to-tr from-[#E2C792] to-[#C5A059] opacity-75 shadow-inner';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={`absolute rounded-[100%_0%_100%_0%] ${getPetalColor(petal.type)}`}
          style={{
            left: `${petal.left}%`,
            top: '-30px',
            width: `${petal.size}px`,
            height: `${petal.size * 0.75}px`,
            animation: `driftPetal ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        />
      ))}
      <style>{`
        @keyframes driftPetal {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.85;
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(30px);
            opacity: 0.85;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(-20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
