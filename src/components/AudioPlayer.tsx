import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

export interface AudioPlayerHandle {
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  isPlaying: boolean;
}

interface AudioPlayerProps {
  envelopeOpened?: boolean;
  onPlayStateChange?: (isPlaying: boolean) => void;
}

export const AudioPlayer = forwardRef<AudioPlayerHandle, AudioPlayerProps>(
  ({ envelopeOpened, onPlayStateChange }, ref) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playMusic = () => {
      if (!audioRef.current) return;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          onPlayStateChange?.(true);
        })
        .catch((err) => {
          console.warn('Audio play prevented:', err);
        });
    };

    const pauseMusic = () => {
      if (!audioRef.current) return;
      audioRef.current.pause();
      setIsPlaying(false);
      onPlayStateChange?.(false);
    };

    const togglePlay = () => {
      if (isPlaying) {
        pauseMusic();
      } else {
        playMusic();
      }
    };

    useImperativeHandle(ref, () => ({
      play: playMusic,
      pause: pauseMusic,
      togglePlay,
      isPlaying,
    }));

    // When envelope is opened, immediately start playing
    useEffect(() => {
      if (envelopeOpened && !isPlaying) {
        playMusic();
      }
    }, [envelopeOpened]);

    return (
      <>
        {/* Hidden Audio element pointing to traditional wedding music */}
        <audio
          ref={audioRef}
          src="/assets/aistudio/wedding_music.mp3"
          loop
          preload="auto"
          onPlay={() => {
            setIsPlaying(true);
            onPlayStateChange?.(true);
          }}
          onPause={() => {
            setIsPlaying(false);
            onPlayStateChange?.(false);
          }}
          onEnded={() => {
            setIsPlaying(false);
            onPlayStateChange?.(false);
          }}
        />

        {/* Background audio element controlled via top navbar */}
      </>
    );
  }
);
