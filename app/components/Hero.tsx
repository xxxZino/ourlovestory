"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";

const photoCards = [
  {
    src: "/walk.jpg",
    label: "Random walk",
    delay: 0.2,
    className: "top-4 left-2 rotate-[-8deg] float-tilt",
  },
  {
    src: "/night.jpg",
    label: "That night",
    delay: 0.35,
    className: "top-24 right-0 rotate-[6deg] float-soft",
  },
  {
    src: "/eye.jpg",
    label: "Our eyes",
    delay: 0.5,
    className: "bottom-4 left-10 rotate-[4deg] float-soft",
  },
  {
    src: "/justus.jpg",
    label: "Just us.",
    delay: 0.65,
    className: "bottom-10 right-8 rotate-[-5deg] float-tilt",
  },
];

const hearts = [
  { left: 8, delay: 0, duration: 18, size: 20, opacity: 0.6 },
  { left: 18, delay: 4, duration: 22, size: 18, opacity: 0.7 },
  { left: 28, delay: 2, duration: 19, size: 22, opacity: 0.85 },
  { left: 40, delay: 6, duration: 24, size: 16, opacity: 0.5 },
  { left: 52, delay: 1, duration: 20, size: 24, opacity: 0.8 },
  { left: 63, delay: 5, duration: 23, size: 18, opacity: 0.7 },
  { left: 72, delay: 3, duration: 21, size: 20, opacity: 0.75 },
  { left: 84, delay: 7, duration: 26, size: 17, opacity: 0.6 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-animated-love">
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/75" />

      {/* Soft glows */}
      <motion.div
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-pink-400/40 blur-3xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
      />
      <motion.div
        className="pointer-events-none absolute right-[-80px] bottom-[-40px] h-72 w-72 rounded-full bg-fuchsia-500/35 blur-3xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
      />

      {/* Falling hearts overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {hearts.map((heart, idx) => {
          const style: CSSProperties = {
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
            fontSize: `${heart.size}px`,
          };
          return (
            <span
              key={idx}
              className="falling-heart select-none"
              style={style}
            >
              {/* boleh ganti ♥ / 💗 / 💘 */}
              💗
            </span>
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-24 md:flex-row md:items-center md:pt-28">
        {/* LEFT: text */}
        <div className="flex-1 space-y-6 md:space-y-8">
          {/* small intro line, NO box */}
          <motion.div
            className="flex items-center gap-3 text-xs text-pink-100/85"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="h-[1px] w-8 bg-gradient-to-r from-pink-200/40 via-pink-300 to-pink-200/0" />
            <span className="tracking-[0.28em] uppercase text-pink-200/80">
              for someone i&apos;m really thankful for ☹️
            </span>
          </motion.div>

          {/* title + main text */}
          <motion.div
            className="space-y-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            <motion.h1
              className="font-playfair text-4xl leading-tight text-pink-50 sm:text-5xl md:text-[3.3rem]"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Hehehe, this world
              <br />
              is only for{" "}
              <span className="bg-gradient-to-r from-pink-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
                ega &amp; sin.
              </span>
            </motion.h1>

            <motion.p
              className="max-w-xl text-sm leading-relaxed text-pink-100/85 sm:text-[0.95rem]"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I don’t even know what to say… my days used to be so plain, but
              after you came, everything feels kinda meaningful. Semoga tempat
              ini bisa jadi small reminder of all the laughs, jokes, tears, and
              happy moments yang pernah kita jalanin bareng ya sayang.
            </motion.p>

            {/* typing line */}
            <motion.div
              className="mt-2 text-[0.85rem] text-pink-100/80 sm:text-sm"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.1 } },
              }}
            >
              <p className="typing-line">
              A safe place to store every piece of us I never want to lose.
              </p>
            </motion.div>
          </motion.div>

          {/* soft inline details (NO BOXES) */}
          <motion.div
            className="mt-4 space-y-1 text-[0.78rem] text-pink-100/80 sm:text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <p>
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-pink-200/80">
                since
              </span>
              <span className="ml-3 text-pink-50">2019 - forever, hopefully.</span>
            </p>
            <p>
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-pink-200/80">
                what&apos;s inside
              </span>
              <span className="ml-3 text-pink-50/95">
                little stories and tiny reasons why i still choose you.
              </span>
            </p>
          </motion.div>

          {/* scroll hint */}
          <motion.div
            className="mt-6 flex items-center gap-3 text-[0.75rem] text-pink-100/70"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <div className="h-9 w-[2px] rounded-full bg-gradient-to-b from-pink-200/60 to-pink-400/80" />
            <div>
              <p>Scroll pelan pelan sayang</p>
            </div>
          </motion.div>

          {/* quick links
          <motion.div
            className="mt-4 flex flex-wrap gap-3 text-xs text-pink-100/80"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <a
              href="#story"
              className="underline underline-offset-4 decoration-pink-300/60 hover:decoration-pink-200"
            >
              ↓ see our story
            </a>
            <a
              href="#gallery"
              className="underline underline-offset-4 decoration-pink-300/60 hover:decoration-pink-200"
            >
              ↓ open the gallery
            </a>
          </motion.div> */}
        </div>

        {/* RIGHT: animated photo cloud */}
        <div className="relative mt-10 flex-1 md:mt-0 md:pl-10">
          <motion.div
            className="relative mx-auto h-[340px] w-[280px] sm:h-[380px] sm:w-[310px] md:h-[420px] md:w-[340px]"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            {/* glow */}
            <div className="absolute inset-0 rounded-[2.3rem] bg-gradient-to-br from-pink-200/30 via-fuchsia-300/25 to-amber-200/25 blur-xl" />
            {/* inner */}
            <div className="absolute inset-[10%] rounded-[2.2rem] bg-black/70 backdrop-blur-xl border border-pink-200/15 shadow-[0_26px_80px_rgba(0,0,0,0.6)]" />

            {/* main photo */}
            <motion.div
              className="absolute inset-[14%] overflow-hidden rounded-[2rem] border border-pink-100/20 bg-pink-100/5"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <Image
                src="/eyes.jpg"
                alt="Our favorite moment"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[0.7rem] text-pink-50/95">
                <div>
                  <p className="font-medium">A normal day that felt like home.</p>
                  <p className="text-[0.68rem] text-pink-100/80">
                    Just us, laughing about nothing.
                  </p>
                </div>
                <span className="rounded-full bg-black/40 px-3 py-1 text-[0.65rem] backdrop-blur">
                  💾 saved here
                </span>
              </div>
            </motion.div>

            {/* floating small cards */}
            {photoCards.map((card) => (
              <motion.div
                key={card.src}
                className={`absolute w-24 sm:w-28 md:w-32 rounded-2xl border border-pink-100/40 bg-pink-50/95 p-[3px] shadow-[0_18px_50px_rgba(0,0,0,0.55)] ${card.className}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: card.delay }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  translateY: -6,
                }}
              >
                <div className="relative h-20 w-full overflow-hidden rounded-xl">
                  <Image
                    src={card.src}
                    alt={card.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-1 px-1 pb-1 text-[0.63rem] font-medium text-slate-900">
                  {card.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* memories marquee */}
      <div className="pointer-events-none relative z-10 border-t border-pink-200/20 bg-black/50">
        <div className="overflow-hidden">
          <div className="memories-track flex gap-10 whitespace-nowrap px-6 py-3 text-[0.75rem] text-pink-100/75">
            <span>✦ little inside jokes only we understand</span>
            <span>✦ that one voice note you replayed three times</span>
            <span>✦ your &quot;aku udah sampe rumah sayang&quot; text after a long day</span>
            <span>✦ the way we walk slower when we&apos;re together</span>
            <span>✦ screenshots, random photos, and soft moments</span>
            <span>✦ little inside jokes only we understand</span>
            <span>✦ that one voice note you replayed three times</span>
            <span>✦ your &quot;I&apos;m home&quot; text after a long day</span>
            <span>✦ the way we walk slower when we&apos;re together</span>
            <span>✦ screenshots, random photos, and soft moments</span>
          </div>
        </div>
      </div>
    </section>
  );
}
