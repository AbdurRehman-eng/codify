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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#0E0C15',
        logo: '#AC6AFF',
        lightGray: "#87839B",
        border: "#231F30",
        button: "#AB80E0",
        secondary: '#E8DEF8',
        stroke: '#67666C',
        paymentcardtext: '#FFC876'
      },
      fontFamily: {
        sortsMillGoudy: ['Sorts Mill Goudy', 'serif'], 
        tourney: ['Tourney', 'sans-serif'],  
        sourceCodePro: ['Source Code Pro', 'monospace'],
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
