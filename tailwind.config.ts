import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      clipPath: {
        polygon:
          "polygon(2% 1%, 36% 6%, 82% 2%, 97% 19%, 75% 65%, 81% 75%, 64% 88%, 9% 68%, 0% 25%)",
        circle: "circle(50% at 50% 50%)",
        ellipse: "ellipse(50% 25% at 50% 50%)",
        inset: "inset(10% 20% 30% 40%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".clip-polygon": {
          "clip-path":
            "polygon(2% 1%, 36% 6%, 82% 2%, 97% 19%, 75% 65%, 81% 75%, 64% 88%, 9% 68%, 0% 25%)",
        },
        ".clip-polygon1": { "clip-path": "polygon(9% 0%, 46% 10%, 85% 6%, 98% 20%, 82% 83%, 31% 67%, 4% 19%)" },
        ".clip-polygon2": { "clip-path": "polygon(2% 1%,36% 6%,82% 2%,97% 19%,75% 65%,81% 75%,64% 88%,9% 68%,0% 25%)" },
        ".clip-polygon3": { "clip-path": "polygon(0% 15%,28% 0%,99% 15%,96% 55%,42% 82%,26% 55%,0% 46%)" },
        ".clip-polygon4": { "clip-path": "polygon(9% 0%, 46% 10%, 85% 6%, 98% 20%, 82% 83%, 31% 67%, 4% 19%)" },
        ".clip-polygon5": { "clip-path": "polygon(2% 1%,36% 6%,82% 2%,97% 19%,75% 65%,81% 75%,64% 88%,9% 68%,0% 25%)" },
        ".clip-polygon6": { "clip-path": "polygon(0% 15%,28% 0%,99% 15%,96% 55%,42% 82%,26% 55%,0% 46%)" },
        ".clip-circle": { "clip-path": "circle(50% at 50% 50%)" },
        ".clip-ellipse": { "clip-path": "ellipse(50% 25% at 50% 50%)" },
        ".clip-inset": { "clip-path": "inset(10% 20% 30% 40%)" },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
