import type { Config } from "tailwindcss";

export default {
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
      backgroundColor: {
        beige: "var(--beige)",
        peach: "var(--peach)",
        tan: "var(--tan)",
        brown: "var(--brown)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      borderColor:{
        tan: "var(--tan)",
      },
      backgroundImage: {
        "nav-brown": "linear-gradient(to top, var(--tan), var(--beige))"
      }
    },
  },
  plugins: [],
} satisfies Config;
