module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Extended/red/50": "#FAFAFA",
        "Extended/red/900": "#F87171",
        "Extended/true-gray/900": "#171717",
        "pastelbleu": "#879CC9",
        "pastelrose": "#D5B3B2",
        "brun": "#5B3B3B",
      },
      "fontFamily": {
        "space-grotesk": "Space Grotesk",
        "karla": "Karla"
      },
    },
    screens: {

      '3xs': '0px',
      // => @media (min-width: 500px) { ... }

      '2xs': '430px',
      // => @media (min-width: 500px) { ... }

      'xs': '630px',
      // => @media (min-width: 500px) { ... }

      'sm': '900px',
      // => @media (min-width: 900px) { ... }

      'md': '1200px',
      // => @media (min-width: 1200px) { ... }

      'lg': '1495px',
      // => @media (min-width: 1495px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  plugins: [],
}
