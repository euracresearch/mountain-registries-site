import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,astro}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        itar: "#b91c1c",
        iavar: "#0369a1",
        ihr: "#0f766e",
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-in-out forwards",
        ekg: "ekg 10s linear forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { transform: "translateX(-2rem)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        ekg: {
          to: { "stroke-dashoffset": "0", opacity: "0.2" },
        },
      },
    },
  },
  safelist: ["text-purple-900", "text-itar", "text-iavar", "text-ihr"],
  plugins: [],
} satisfies Config;
