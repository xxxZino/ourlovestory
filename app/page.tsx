"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero";
import OurStorySection from "./components/OurStory";
import GallerySection from "./components/Gallery";
import Letter from "./components/SecretLetter";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audioRef.current = audio;
    setIsReady(true);

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const startWithMusic = async () => {
    if (!audioRef.current || !isReady) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setHasEntered(true);
    } catch (err) {
      console.error("Audio error:", err);
      setHasEntered(true);
    }
  };

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
      console.error("Audio toggle error:", err);
    }
  };

  return (
    <main className="relative min-h-screen bg-animated-love text-pink-50">
      <Hero />
      <OurStorySection />
      <GallerySection />
      <Letter />

      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-2xl"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.8, 0.2, 1] }}
          >
            {/* Glow background halus */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
              <div className="absolute bottom-[-40px] right-[-40px] h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl" />
            </div>

            {/* Card tengah */}
            <motion.div
              className="relative z-10 w-full max-w-md rounded-3xl border border-pink-200/20 bg-black/70 px-6 py-7 shadow-[0_30px_120px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:px-8 sm:py-9"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.98 }}
              transition={{ duration: 0.7, ease: [0.24, 0.82, 0.22, 0.99] }}
            >
              <motion.p
                className="text-[0.7rem] uppercase tracking-[0.28em] text-pink-200/75 mb-3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                before we go in
              </motion.p>

              <motion.h1
                className="font-playfair text-2xl sm:text-[1.7rem] text-pink-50 leading-snug"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
              >
                Can we start this little world
                <br />
                with a song first?
              </motion.h1>

              <motion.p
                className="mt-4 text-[0.84rem] leading-relaxed text-pink-100/85 sm:text-[0.9rem]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.26 }}
              >

              </motion.p>

              <motion.button
                onClick={startWithMusic}
                disabled={!isReady}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-400 to-amber-300 px-5 py-3.5 text-sm font-medium text-pink-50 shadow-[0_20px_60px_rgba(236,72,153,0.7)] transition-all hover:shadow-[0_24px_80px_rgba(236,72,153,0.8)] disabled:cursor-not-allowed disabled:opacity-60"
                whileTap={{ scale: 0.97 }}
              >
                {isReady ? "Go" : "Preparing the song..."}
                <span className="text-base"></span>
              </motion.button>

              <motion.p
                className="mt-3 text-[0.72rem] text-pink-100/65"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasEntered && (
          <motion.button
            onClick={togglePlay}
            className="fixed bottom-5 right-4 z-30 flex items-center gap-3 rounded-full border border-pink-200/30 bg-black/65 px-4 py-2 text-[0.78rem] text-pink-50 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-md hover:border-pink-200/70 hover:bg-black/80 transition-all"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                  <span className="ml-[2px] text-[0.7rem]">▶</span>
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
        )}
      </AnimatePresence>
    </main>
  );
}
