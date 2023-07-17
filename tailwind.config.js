/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        initialColor: "#FF5733",
        darkInital: "#E05031",
        grayInitial: "#FD866C"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

