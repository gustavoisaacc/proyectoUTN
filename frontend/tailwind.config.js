/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      
        colors: {
        primary: "#053F5C",
        primaryLigth: "#429EBD",
        black: "#333333",
        white: "#FFFFFF",
        secundary: "#E3891D",
        secundaryLigth: "#429EBD",
        secundaryDark: "#E3891D",
        information: "#007CFF",
        warning: "#D4AF37",
        error: "#E63E33",
        success: "#7BA05B",
      },

      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        letters: ["Six Caps", "Barlow Condensed"],
      },

    },
  },
  plugins: [],
  
};


