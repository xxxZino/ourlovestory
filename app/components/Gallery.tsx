"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Mood = "soft" | "warm" | "bright";

const memories = [
  {
    src: "/cute.jpg",
    title: "You laughing at something that wasn’t even funny.",
    note: "Aku pura pura ngga ketawa, padahal mah... beneran garing cuak",
    mood: "soft" as Mood,
    tag: "everyday us",
  },
  {
    src: "/kaki.jpg",
    title: "That walk where we didn’t rush.",
    note: "Bingung milih makanan, akhirnya cuma beli jasuke:(",
    mood: "warm" as Mood,
    tag: "hunting in maguwo",
  },
  {
    src: "/sunset.jpg",
    title: "Sunset hits different with you.",
    note: "Kadang aku bingung, kok bisa kamu lebih cantik dari sunset",
    mood: "bright" as Mood,
    tag: "sunset with you",
  },
  {
    src: "/gr.jpg",
    title: "She came. She stayed. She supported.",
    note: "Aku ga sendirian... Kamu dateng itu udah cukup bagi aku.",
    mood: "soft" as Mood,
    tag: "ega's graduation",
  },
  {
    src: "/cry.jpg",
    title: "When her tears chose my shoulder.",
    note: "Ada hari dimana kamu cape sama kegiatanmu dan istirahat di bahu aku",
    mood: "warm" as Mood,
    tag: "crying",
  },
  {
    src: "/pantai.jpg",
    title: "Where the ocean meets us.",
    note: "Duduk di tebing pantai sambil liat laut sama kamu",
    mood: "soft" as Mood,
    tag: "beach trip",
  },
  {
    src: "/kamar.jpg",
    title: "Room pics, real us.",
    note: "Ga perlu background yg bagus, yang penting kamu ada di frame",
    mood: "bright" as Mood,
    tag: "room moments",
  },
  {
    src: "/riding.jpg",
    title: "Laughing louder than the engine.",
    note: "Jalan jalan malem sama kamu itu seru, walaupun motor problematic",
    mood: "warm" as Mood,
    tag: "riding",
  },
];

const ribbonVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
};



export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative border-t border-pink-200/10 bg-black/75 px-4 pb-16 pt-14 sm:pt-16"
    >
      {/* soft glow atas */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-pink-300/25 via-transparent to-transparent blur-md" />

      {/* hearts float background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-[18%] text-lg opacity-70 heart-float-slow">
          💗
        </div>
        <div className="absolute right-[10%] top-[32%] text-xl opacity-70 heart-float-medium">
          💕
        </div>
        <div className="absolute left-[20%] bottom-[18%] text-base opacity-60 heart-float-medium">
          🫂
        </div>
        <div className="absolute right-[18%] bottom-[10%] text-xl opacity-70 heart-float-slow">
          💏
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8">
        {/* header */}
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[0.75rem] uppercase tracking-[0.25em] text-pink-200/70">
            our soft gallery
          </p>
          <h2 className="font-playfair text-2xl text-pink-50 sm:text-3xl md:text-[2.1rem]">
            If hugs, little kisses, and inside jokes
            <br />
            could turn into pictures, it would look like this.
          </h2>
          <p className="mx-auto max-w-xl text-[0.85rem] leading-relaxed text-pink-100/80 sm:text-sm">
            Bukan galeri yang bagus si.. Kadang blur, kadang
            pencahayaannya aneh, kadang pose kita juga random. Asal
            ada kamu atau kita di foto, itu udah spesial banget.
          </p>
        </motion.div>

        {/* ribbon kenangan (horizontal scroll) */}
        <motion.div
          className="relative mt-4"
          variants={ribbonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* pita belakang */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-24 -translate-y-1/2 rounded-full bg-gradient-to-r from-pink-300/15 via-fuchsia-400/20 to-amber-200/15 blur-2xl" />

          {/* garis tipis tengah */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2">
            <div className="mx-4 h-[1px] bg-gradient-to-r from-pink-200/40 via-pink-100/80 to-amber-200/40 opacity-70" />
          </div>

          {/* memory cards yang ngambang di atas pita */}
          <div className="no-scrollbar relative flex gap-6 overflow-x-auto pb-5 pt-6 sm:gap-7 sm:pb-6 sm:pt-7">
            <div className="flex w-max items-stretch gap-6 sm:gap-7">
              {memories.map((memory, index) => {
                const isEven = index % 2 === 0;

                let moodClass =
                  "from-pink-200/90 via-pink-100 to-pink-50/95 border-pink-200/80";
                if (memory.mood === "warm") {
                  moodClass =
                    "from-amber-200/95 via-pink-100 to-pink-50/95 border-amber-200/80";
                } else if (memory.mood === "bright") {
                  moodClass =
                    "from-fuchsia-200/95 via-pink-100 to-pink-50/95 border-fuchsia-200/75";
                }

                return (
                  <motion.article
                    key={memory.src}
                    className={`
                      group relative flex min-w-[230px] max-w-[260px] flex-col
                      rounded-[1.9rem] border bg-gradient-to-b ${moodClass}
                      px-3 pb-3 pt-4 shadow-[0_22px_70px_rgba(0,0,0,0.65)]
                      ${isEven ? "-translate-y-4 rotate-[-4deg]" : "translate-y-4 rotate-[3deg]"}
                      sm:min-w-[250px] sm:max-w-[280px]
                    `}
                    initial={{ opacity: 100, y: 30, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                      ease: [0.24, 0.82, 0.22, 0.99],
                    }}
                    whileHover={{
                      rotate: isEven ? -1.5 : 1.5,
                      translateY: isEven ? -10 : -6,
                      scale: 1.02,
                    }}
                  >
                    {/* “tape” di pojok */}
                    <div className="pointer-events-none absolute -left-2 top-3 h-7 w-10 rotate-[-15deg] rounded bg-pink-200/70 opacity-70 shadow-md" />
                    <div className="pointer-events-none absolute -right-1 bottom-4 h-7 w-10 rotate-[18deg] rounded bg-amber-200/80 opacity-70 shadow-md" />

                    {/* foto */}
                    <div className="relative h-40 w-full overflow-hidden rounded-[1.4rem] border border-pink-100/60 bg-pink-100/40 sm:h-44">
                      <Image
                        src={memory.src}
                        alt={memory.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                      />
                      {/* overlay gradient */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                      {/* tag kecil */}
                      <div className="absolute left-3 top-3 flex items-center gap-2 text-[0.7rem] text-pink-50">
                        <span className="rounded-full bg-black/55 px-3 py-1 backdrop-blur">
                          {memory.tag}
                        </span>
                        <span className="rounded-full bg-black/40 px-2 py-1 backdrop-blur">
                          #{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* text di bawah foto */}
                    <div className="mt-3 space-y-1 px-1">
                      <p className="text-[0.8rem] font-semibold text-slate-900 sm:text-[0.85rem]">
                        {memory.title}
                      </p>
                      <p className="text-[0.75rem] leading-relaxed text-slate-800/80 sm:text-[0.78rem]">
                        {memory.note}
                      </p>
                    </div>

                    {/* emoji kecil “peluk/cium” di pojok */}
                    <div className="mt-2 flex items-center justify-between px-1 text-[0.75rem] text-slate-900/80">
                      <span className="rounded-full bg-white/65 px-3 py-1 text-[0.7rem] shadow-sm">
                        💋 soft kiss level: safe & sweet
                      </span>
                      <span className="text-[0.9rem]">
                        {index % 3 === 0 ? "🫂" : index % 3 === 1 ? "💑" : "💞"}
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* strip emoji pelukan / cium di bawah */}
        <motion.div
          className="relative mt-4 overflow-hidden rounded-full border border-pink-200/25 bg-black/55 py-2.5 pl-4 pr-4 sm:mt-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/80 to-transparent" />
          <div className="hug-track flex gap-8 whitespace-nowrap text-[0.82rem] text-pink-100/85">
            <span>🫂 that one hug where we both didn&apos;t wanna let go</span>
            <span>💏 your shy little kiss when no one was looking</span>
            <span>💑 walking side by side, our hands finding each other</span>
            <span>🤍 my favorite place will always be next to you</span>
            <span>🫂 that one hug where we both didn&apos;t wanna let go</span>
            <span>💏 your shy little kiss when no one was looking</span>
            <span>💑 walking side by side, our hands finding each other</span>
            <span>🤍 my favorite place will always be next to you</span>
          </div>
        </motion.div>

        {/* closing text */}
        <motion.div
          className="mx-auto max-w-xl text-center text-[0.8rem] text-pink-100/80 sm:text-[0.85rem]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            Kalo suatu saat kita lagi marahan dan ga mau ketemu, aku harap ini
            bisa jadi small reminder kalo kita pernah selucu ini ya sayang.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
