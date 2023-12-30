/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#1e40af",
        secondary: "#5b21b6",
        warning: "#ef4444",
      }
    },
  },
  plugins: [],
}

