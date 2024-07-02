/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", 'sans-serif'],
        cinzel: ["Cinzel", "serif"],
        sriracha:["Sriracha", "cursive"]
      }
    },
  },
  plugins: [],
}

