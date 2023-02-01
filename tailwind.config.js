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

      },
      "fontFamily": {
        "space-grotesk": "Space Grotesk",
        "karla": "Karla"
      },
    },

  },
  plugins: [],
}
