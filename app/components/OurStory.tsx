"use client";

import { motion } from "framer-motion";

type StorySide = "left" | "right";

const moments: {
  id: number;
  label: string;
  date?: string;
  title: string;
  description: string;
  side: StorySide;
}[] = [
  {
    id: 1,
    label: "the first hello",
    date: "somewhere between chats and scrolling",
    title: "It didn’t feel like meeting a stranger.",
    description:
      "Awalnya cuma sksd reply story instagram doang sih hahaha. Ga terlalu sksd amat, pelan tapi pasti😎",
    side: "left",
  },
  {
    id: 2,
    label: "we chose each other",
    date: "the day we decided to call it ‘us’",
    title: "Jadian deh, tapi kita masih belum terlalu intens.",
    description:
      "Cuma ‘official’ doang, kita belum terlalu serius, ga ada komitmen, dan kaya main main aja rasanya.",
    side: "right",
  },
  {
    id: 3,
    label: "tiny adventures",
    date: "random walks, short trips, long talks",
    title:
      "Ga harus jauh dan kemana kemari, yang penting bareng sama my love aja🥰",
    description:
      "Entah itu cuma muter muter, makan di tempat itu-itu lagi, atau duduk di angkringan... asal sama kamu bagi aku cukup sih.",
    side: "left",
  },
  {
    id: 4,
    label: "our 2019 pause",
    date: "a break, a lesson, a return",
    title: "We broke up... tapi ga bener bener putus.",
    description:
      "Kita sebenernya juga bingung, dulu kenapa bisa putus wkwkwk. jadi ya skip aja hehe",
    side: "right",
  },
  {
    id: 5,
    label: "our unnamed chapter",
    date: "quiet returns, undefined feelings",
    title:
      "We found our way back to each other again!!! tapi tanpa status pacaran:(",
    description:
      "Berawal dari reply status whatsapp, kita mulai bisa saling cerita, berkeluh kesah, dan ketemu lagi yuhu",
    side: "left",
  },
  {
    id: 6,
    label: "the quiet days",
    date: "those soft, silent, but safe moments",
    title: "Not always loud, but it always feels like home.",
    description:
      "Kadang ada hari di mana kita cuma saling diem, scroll HP masing masing, tapi anehnya kita tetep baik baik aja. Mungkin itu bentuk lain dari sayang.",
    side: "right",
  },
  {
    id: 7,
    label: "long distance relationship",
    date: "miles apart, but still connected",
    title: "Distance, but never disconnection.",
    description:
      "Walaupun kita beda kota, kita tetap sama. Kadang cuma saling update kecil, kadang juga cuma ngasih emote doang. Yang penting, kamu tetap ada...",
    side: "left",
  },
  {
    id: 8,
    label: "the chapter we were meant to return to",
    date: "after distance, finally together",
    title:
      "Turns out, coming back to you feels even better than before.",
    description:
      "Setelah ldr yg begitu lama, kita dipertemukan kembali di jogja... tanpa jarak, tanpa jeda. Jujur, ini masa paling bahagia...  ketawanya lebih lepas, peluknya lebih hangat, rasanya kaya dikasih kesempetan kedua wkwkwk",
    side: "right",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


export default function OurStorySection() {
  return (
    <section
      id="story"
      className="relative border-t border-pink-200/10 bg-black/80 px-4 pb-16 pt-14 sm:pt-16"
    >
      {/* soft glow atas */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-28 bg-gradient-to-b from-pink-300/25 via-transparent to-transparent blur-xl" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-3xl space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[0.75rem] uppercase tracking-[0.25em] text-pink-200/70">
            our story so far
          </p>
          <h2 className="font-playfair text-2xl text-pink-50 sm:text-3xl md:text-[2.1rem]">
            We didn&apos;t rush this.
            <br />
            We just kept choosing each other.
          </h2>
          <p className="text-[0.85rem] leading-relaxed text-pink-100/80 sm:text-sm">
            Ga terlalu dramatis sih, tapi ini cerita kita. Kadang happy, kadang
            berantakan, kadang ga jelas mau gimana... tapi sampe hari ini, kita
            masih bareng dan masih saling panggil &quot;sayang&quot;.
          </p>
        </motion.div>

        {/* Daftar momen – full animasi, no garis nutup teks */}
        <motion.div
          className="relative mx-auto w-full max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{
          duration: 0.8,
          when: "beforeChildren",
          staggerChildren: 0.12,
           }}>

          {/* subtle background wave */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-[10%] h-40 w-40 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />
            <div className="absolute right-0 top-1/2 h-44 w-44 translate-x-1/3 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute left-4 bottom-10 h-40 w-40 rounded-full bg-amber-300/10 blur-3xl" />
          </div>

          <div className="relative flex w-full flex-col gap-8 sm:gap-10">
            {moments.map((moment, index) => {
              const isLeft = moment.side === "left";

              return (
                <motion.article
                  key={moment.id}
                  className="relative"
                  variants={itemVariants}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >

                  {/* glow lembut di belakang tiap cerita */}
                  <div
                    className={`pointer-events-none absolute -inset-x-6 -inset-y-3 opacity-70 blur-3xl ${
                      isLeft
                        ? "bg-gradient-to-r from-pink-300/20 via-fuchsia-300/12 to-transparent"
                        : "bg-gradient-to-l from-amber-200/22 via-pink-300/16 to-transparent"
                    }`}
                  />

                  <div
                    className={`relative flex flex-col gap-2 ${
                      isLeft ? "md:pr-[12%]" : "md:pl-[12%]"
                    }`}
                  >
                    {/* label + garis kecil tapi sejajar text (ga nutup apapun) */}
                    <div
                      className={`flex flex-wrap items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-pink-200/80 ${
                        isLeft ? "" : "md:justify-end"
                      }`}
                    >
                      {isLeft && (
                        <span className="hidden h-[1px] w-6 bg-gradient-to-r from-pink-200/40 to-pink-400/90 md:inline-block" />
                      )}
                      <span>{moment.label}</span>
                      {!isLeft && (
                        <span className="hidden h-[1px] w-6 bg-gradient-to-l from-pink-200/40 to-pink-400/90 md:inline-block" />
                      )}
                    </div>

                    {moment.date && (
                      <p
                        className={`text-[0.75rem] text-pink-100/75 ${
                          isLeft ? "" : "md:text-right"
                        }`}
                      >
                        {moment.date}
                      </p>
                    )}

                    {/* Title + description, no boxes */}
                    <div
                      className={`space-y-2 ${
                        isLeft ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <h3 className="font-playfair text-xl text-pink-50 sm:text-[1.35rem]">
                        {moment.title}
                      </h3>
                      <p className="text-[0.85rem] leading-relaxed text-pink-100/85 sm:text-sm">
                        {moment.description}
                      </p>
                    </div>

                    {/* garis tipis super halus di bawah, sejajar teks */}
                    <div
                      className={`mt-3 h-[1px] w-24 bg-gradient-to-r from-pink-200/80 via-pink-400/90 to-transparent ${
                        isLeft ? "" : "ml-auto md:ml-auto md:rotate-180"
                      }`}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* closing kecil */}
        <motion.div
          className="mx-auto max-w-xl text-center text-[0.8rem] text-pink-100/80 sm:text-[0.85rem]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            Sebenernya cerita kita masih banyak yang belum diceritain...
            kalo ceritain disini semua ga akan cukup, ya kaya rasa sayang aku ke
            kamu. my love, my sunshine, my moon, sinta🥰 GA AKAN PERNAH SAMPAI
            MAKSIMAL DAN AKAN TERUS BERTAMBAH.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
