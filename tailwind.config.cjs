/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#47b465",

          "secondary": "#0c0f18",

          "accent": "#07070f",

          "neutral": "#1D2125",

          "base-100": "#fff",

          "info": "#6987C9",

          "success": "#606d5d",

          "warning": "#FBD309",

          "error": "#E34D45",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
