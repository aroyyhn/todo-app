// tailwind.config.js (ESM Style)
import scrollbar from 'tailwind-scrollbar';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbar(),       // ini benar, scrollbar dipanggil sebagai fungsi
    animate            // ❗ JANGAN pakai () di sini
  ],
};
