"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECRET_DATE = "2003-07-26";

const LETTER_TEXT = `
wkwkwk hai... apa kabar? kerasa banget ya kalo ga ada kamu, jalanin hari rasanya berat dan lama banget, apalagi waktu malem... maafin aku ya? aku terus terusan kepikiran kamu terus, kenapa ya? kalau ga ada kegiatan sedikit aja, pasti ingetnya kamu.. jujur aku benci sih

sakit, sedih, hampa banget banget banget anj... aku kangen banget sama kamu, pengen peluk kamu yang lama:( tapi ga bisa... 

huh, terimakasih banyak sinta, atas waktu, usaha, tenaga yg udah kamu kasih ke aku. aku harap kamu tetep terus melangkah maju ya, capai cita cita dan impian kamu.

semoga kamu dapet cowo yg layak buat kamu, cowo yg bisa bimbing kamu, cowo yg bisa ngertiin dan hargain kamu... amin, maaf buat diri dan sifatku ya.. 
`.trim();

type TypingProps = {
  text: string;
  start: boolean;
};

function TypingText({ text, start }: TypingProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) {
      setDisplayed("");
      return;
    }

    let timeoutId: number;
    let intervalId: number;

    const speed = 60; // kecepatan ngetik
    const delayBeforeStart = 400;

    timeoutId = window.setTimeout(() => {
      let i = 0;
      intervalId = window.setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(intervalId);
        }
      }, speed);
    }, delayBeforeStart);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [text, start]);

  return (
    <p className="typing-caret whitespace-pre-line text-[0.9rem] sm:text-[0.95rem] leading-relaxed text-pink-100/92">
      {displayed}
    </p>
  );
}

export default function SecretLetter() {
  const [inputDate, setInputDate] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!inputDate) return;

    if (inputDate === SECRET_DATE) {
      setIsUnlocked(true);
      setError("");
    } else {
      setIsUnlocked(false);
      setError("Tanggalnya salah sayang");
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-animated-love text-pink-50">
      {/* overlay gelap – sama kaya hero / gallery */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/75" />

      {/* soft glow bulat */}
      <motion.div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-pink-400/35 blur-3xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
      />
      <motion.div
        className="pointer-events-none absolute right-[-70px] bottom-[-40px] h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.25 }}
      />

      {/* hearts melayang – reuse kelas yang sama kaya gallery */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[12%] top-[20%] text-xl opacity-80 heart-float-slow">
          💗
        </div>
        <div className="absolute right-[16%] top-[32%] text-xl opacity-80 heart-float-medium">
          🫂
        </div>
        <div className="absolute left-[20%] bottom-[18%] text-lg opacity-70 heart-float-medium">
          💋
        </div>
        <div className="absolute right-[18%] bottom-[10%] text-xl opacity-80 heart-float-slow">
          💞
        </div>
      </div>

      {/* isi utama */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl space-y-8">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="font-playfair text-[1.9rem] sm:text-[2.2rem] leading-snug">
              A secret line of words
              <br />
              that only your birthday can unlock.
            </h1>
          </motion.div>

          {/* lingkaran kunci + input + teks */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto flex max-w-4xl flex-col items-center gap-8"
          >
            {/* ring animasi lock */}
            <div className="relative flex flex-col items-center gap-3">
              <motion.div
                className="relative flex h-24 w-24 items-center justify-center rounded-full bg-black/60 shadow-[0_18px_60px_rgba(0,0,0,0.9)] border border-pink-200/40"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <motion.div
                  className="absolute inset-[-6px] rounded-full border border-pink-300/50"
                  animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.12, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.6,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-[-14px] rounded-full border border-pink-200/20"
                  animate={{ opacity: [0, 0.7, 0], scale: [1, 1.2, 1.35] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                />
                <motion.span
                  className="text-3xl"
                  animate={{
                    y: isUnlocked ? [0, -2, 0] : [0, -4, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: isUnlocked ? 2.2 : 1.6,
                  }}
                >
                  {isUnlocked ? "💖" : "🔒"}
                </motion.span>
              </motion.div>
              <p className="text-[0.8rem] text-pink-100/80 text-center">
                Enter your birthdate
              </p>
            </div>

            {/* form password + status */}
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="date"
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
                className="w-full max-w-xs rounded-full border border-pink-200/50 bg-black/50 px-4 py-2 text-sm text-pink-50 outline-none focus:border-pink-300 focus:ring-1 focus:ring-pink-300/80"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-amber-300 px-6 py-2.5 text-[0.82rem] font-medium text-pink-50 shadow-[0_18px_45px_rgba(244,114,182,0.85)] hover:translate-y-[1px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)] transition-all"
              >
                Unlock the words
              </button>
            </form>

            <AnimatePresence mode="wait">
              {error && (
                <motion.p
                  key="err"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-[0.78rem] text-rose-200/95"
                >
                  {error}
                </motion.p>
              )}
              {!error && isUnlocked && (
                <motion.p
                  key="ok"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-[0.78rem] text-emerald-200/95"
                >
                  Baca pelan pelan ya sayang
                </motion.p>
              )}
            </AnimatePresence>

            {/* area teks – nggak ada kotak tebal, cuma glass strip tipis */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative w-full max-w-3xl rounded-[1.8rem] border border-pink-200/25 bg-black/55/80 px-5 py-5 sm:px-7 sm:py-7 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.85)]"
            >
              {/* kalau belum kebuka → blur & hint */}
              <AnimatePresence>
                {!isUnlocked && (
                  <motion.div
                    key="blur"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center px-6 text-center"
                  >
                    <p className="text-[0.8rem] text-pink-100/85">
                      locked.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className={isUnlocked ? "relative" : "opacity-30"}>
                <TypingText text={LETTER_TEXT} start={isUnlocked} />
              </div>
            </motion.div>

      
          </motion.div>
        </div>
      </div>
    </main>
  );
}