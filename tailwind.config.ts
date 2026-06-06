import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        rhenus: {
          blue: '#003f7f',
          dark: '#0d1b2a',
          navy: '#001a3a',
          light: '#5ba3e0',
          muted: '#e8f0fc',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
