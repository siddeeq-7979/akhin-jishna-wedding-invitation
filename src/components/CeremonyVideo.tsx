import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Maximize2, Sparkles, Heart } from 'lucide-react';

interface CeremonyVideoProps {
  onVideoPlayStateChange?: (isPlaying: boolean) => void;
}

export const CeremonyVideo: React.FC<CeremonyVideoProps> = ({ onVideoPlayStateChange }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentTimeStr, setCurrentTimeStr] = useState<string>('0:00');
  const [durationStr, setDurationStr] = useState<string>('0:40');

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => console.warn('Video play blocked:', err));
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 40;
    setProgress((current / duration) * 100);
    setCurrentTimeStr(formatTime(current));
    if (videoRef.current.duration) {
      setDurationStr(formatTime(videoRef.current.duration));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleReplay = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const onPlay = () => {
    setIsPlaying(true);
    onVideoPlayStateChange?.(true);
  };

  const onPause = () => {
    setIsPlaying(false);
    onVideoPlayStateChange?.(false);
  };

  return (
    <section id="video" className="py-14 px-4 bg-stone-900 text-[#FAF7F2] relative overflow-hidden">
      {/* Decorative kasavu gold accent header */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#E2C792] text-xs font-medium tracking-widest uppercase mb-3 border border-[#C5A059]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cherished Wedding Moments</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
          The Sacred Thalikettu Ceremony
        </h2>
        <p className="font-serif-wedding text-stone-300 text-base sm:text-lg max-w-xl mx-auto italic">
          "എൻ്റെ താവരയ്ക്കും ഞാൻ താലികെട്ടും..." · A glimpse into the divine union solemnized with Vedic rites and heartfelt prayers.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Ornate Video Card Frame with Kasavu Gold Border */}
        <div className="relative rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-[#C5A059] via-[#8C6A28] to-[#C5A059] shadow-2xl shadow-black/80">
          <div className="relative rounded-[22px] overflow-hidden bg-black aspect-video sm:aspect-[16/9] flex items-center justify-center">
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              poster="/assets/aistudio/test_frame_cw.jpg"
              onPlay={onPlay}
              onPause={onPause}
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            >
              <source src="/assets/aistudio/wedding_video.mp4" type="video/mp4" />
              <source src="/assets/aistudio/5d6e7d81-68ab-4328-aeca-4be732619491_29ec045c.mov" type="video/quicktime" />
              Your browser does not support HTML5 video.
            </video>

            {/* Big center play button when paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-stone-900/80 backdrop-blur-md border border-[#C5A059] flex items-center justify-center text-[#E2C792] hover:scale-110 hover:bg-stone-900 transition-all shadow-2xl cursor-pointer group"
                aria-label="Play ceremony video"
              >
                <Play className="w-8 h-8 fill-[#C5A059] text-[#C5A059] ml-1 group-hover:scale-105 transition-transform" />
              </button>
            )}

            {/* Top Bar Overlay */}
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 via-black/30 to-transparent flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                <span className="text-xs font-semibold tracking-wider uppercase text-stone-200">
                  Akhin & Jishna
                </span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-black/50 border border-white/20 text-[#E2C792]">
                Guruvayur
              </span>
            </div>

            {/* Bottom Controls Bar Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2">
              {/* Progress Bar */}
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#C5A059] to-[#E2C792] h-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-stone-300">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1 hover:text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>

                  <button
                    onClick={handleReplay}
                    className="p-1 hover:text-white transition-colors cursor-pointer"
                    aria-label="Replay video from beginning"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1 hover:text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-[#E2C792]" />}
                  </button>

                  <span className="text-[11px] font-mono text-stone-400">
                    {currentTimeStr} / {durationStr}
                  </span>
                </div>

                <button
                  onClick={handleFullscreen}
                  className="p-1 hover:text-white transition-colors cursor-pointer"
                  aria-label="Fullscreen video"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Blessing note under video */}
        <div className="mt-5 text-center text-xs text-stone-400 flex items-center justify-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>Turn on sound to hear the traditional wedding music · <em>Ente Thaavarekkum</em></span>
        </div>
      </div>
    </section>
  );
};
