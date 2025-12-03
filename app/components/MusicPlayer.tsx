"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // setup audio di client
  useEffect(() => {
    const audio = new Audio("/music.mp3"); // ganti sesuai nama file
    audio.loop = true;
    audioRef.current = audio;
    setIsReady(true);

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current || !isReady) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Audio error:", err);
    }
  };

  return (
    <motion.button
      onClick={togglePlay}
      disabled={!isReady}
      className="fixed bottom-5 right-4 z-30 flex items-center gap-3 rounded-full border border-pink-200/30 bg-black/60 px-4 py-2 text-[0.78rem] text-pink-50 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-md hover:border-pink-200/70 hover:bg-black/75 transition-all"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.2 }}
    >
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-pink-400 to-amber-300">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/70">
          {isPlaying ? (
            <span className="flex gap-[3px]">
              <span className="h-3 w-[2px] animate-[music_0.8s_ease-in-out_infinite] bg-pink-200" />
              <span className="h-4 w-[2px] animate-[music_0.8s_ease-in-out_infinite_0.15s] bg-pink-200" />
              <span className="h-3 w-[2px] animate-[music_0.8s_ease-in-out_infinite_0.3s] bg-pink-200" />
            </span>
          ) : (
            <span className="ml-[2px]">
              ▶
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col text-left leading-tight">
        <span className="text-[0.7rem] uppercase tracking-[0.18em] text-pink-200/80">
          {isPlaying ? "now playing" : "tap to play"}
        </span>
        <span className="text-[0.8rem] text-pink-50">
          our little music 
        </span>
      </div>
    </motion.button>
  );
}
