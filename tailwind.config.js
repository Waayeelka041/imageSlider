/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#38BDF8"
      },
      fontFamily:{
        robot:"Roboto"
      }
    },
  },
  plugins: [],
}

