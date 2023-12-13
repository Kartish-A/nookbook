/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors:{
        paleLeaf: "#BBD5BA",
        pickledBluewood: "#2F3F58",
        burningOrange: "#FF683B",
        black: {
          100: "#d5d9de",
          200: "#acb2bc",
          300: "#828c9b",
          400: "#596579",
          500: "#2f3f58",
          600: "#263246",
          700: "#1c2635",
          800: "#131923",
          900: "#090d12"
        },
      },
    },
  },
  plugins: [],
}
