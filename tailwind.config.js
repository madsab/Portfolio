/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'BgHomeOfficeRain' : "url(./assets/img/Bg_HomeOfficeRain.gif)",
        'Sifu' : "url(./assets/img/sifuStaff.png)"
      },
      colors:{
        'theme-gray': "#484854",
        'theme-brown': "#4F4944",
        'theme-blue': "#222138",
        'theme-lightgray': "#746768",
        'theme-green': "#434340",
      },
      animation:{
        "slider": "slide 10s linear infinite"
      },
      keyframes:{
        slide: {
          "from": {transform: "translateX(0)" },
          "to": {transform: "translateX(-100%)"}
        }
      }
    },
  },
  plugins: [],
}

