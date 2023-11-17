/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme-bg': "#070303",
        'theme-text': "#F6F1DF",
        'theme-accent': "#B94341",
        'theme-primary': "#761614",
        'theme-secondary': "#220C0C",
      },
      animation:{
        "slider": "slide 20s linear infinite"
      },
      keyframes:{
        slide: {
          "from": {transform: "translateX(0)" },
          "to": {transform: "translateX(-100%)"}
        }
      },
      boxShadow:{
        "3xl": "5px 5px 20px 5px rgba(50,50,50,0.5)"
      }
    },
  },
  plugins: [],
}

