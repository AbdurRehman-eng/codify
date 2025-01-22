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
      },
      fontFamily: {
        sortsMillGoudy: ['Sorts Mill Goudy', 'serif'], 
        tourney: ['Tourney', 'sans-serif'],  
        sourceCodePro: ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
