import React, { useState, useRef } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { EnvelopeModal } from './components/EnvelopeModal';
import { AudioPlayer, AudioPlayerHandle } from './components/AudioPlayer';
import { AmbientPetals } from './components/FlowerPetals';
import { Navbar } from './components/Navbar';
import { InvitationCards } from './components/InvitationCards';
import { Footer } from './components/Footer';

export default function App() {
  const [showEnvelope, setShowEnvelope] = useState<boolean>(true);
  const [envelopeOpened, setEnvelopeOpened] = useState<boolean>(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const audioPlayerRef = useRef<AudioPlayerHandle | null>(null);

  const handleOpenEnvelope = () => {
    setEnvelopeOpened(true);
    // Play traditional wedding music immediately on envelope open
    audioPlayerRef.current?.play();
  };

  const handleReopenEnvelope = () => {
    setShowEnvelope(true);
  };

  const handleToggleMusic = () => {
    audioPlayerRef.current?.togglePlay();
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#2C241B] flex flex-col font-sans-clean selection:bg-[#E2C792] selection:text-[#3B2506] relative">
      {/* Scroll Progress Bar at very top */}
      <ProgressBar />

      {/* Interactive Envelope-Opening Animation Modal */}
      <EnvelopeModal
        isOpen={showEnvelope}
        onOpenInvitation={handleOpenEnvelope}
      />

      {/* Confetti Mixed Flower Petals in Background (active after envelope opens) */}
      {envelopeOpened && <AmbientPetals />}

      {/* Background Wedding Music Player */}
      <AudioPlayer
        ref={audioPlayerRef}
        envelopeOpened={envelopeOpened}
        onPlayStateChange={setIsAudioPlaying}
      />

      {/* Top Navbar with Music Controls */}
      <Navbar
        onReopenEnvelope={handleReopenEnvelope}
        isPlaying={isAudioPlaying}
        onToggleMusic={handleToggleMusic}
      />

      {/* Main Single-Column Botanical Invitation Cards (Matching Uploaded Image Reference) */}
      <main className="flex-1 pt-14 pb-12">
        <InvitationCards />
      </main>

      {/* Traditional Blessing Footer with Inquiries Contact */}
      <Footer />
    </div>
  );
}
