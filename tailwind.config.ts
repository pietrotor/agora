import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["manrope", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#C1285D",
        },
        secondary: {
          DEFAULT: "#19417F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
