import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        romanticPink: "#FFF0F5",
        romanticRose: "#FF6B81",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        romantic: "0 24px 80px rgba(255, 107, 129, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
