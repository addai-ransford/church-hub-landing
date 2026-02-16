/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#c026d3",   // fuchsia-600
          dark: "#701a75"
        }
      }
    },
  },
  plugins: [],
}
