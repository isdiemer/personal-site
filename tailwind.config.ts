import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#372554",
        secondary: "#5B4EE4",
      },
      fontFamily: {
        electrolize: ["Electrolize"],
      },
    },
  },
  plugins: [],
} satisfies Config;
