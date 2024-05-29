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
        primary: "#FF9800",
        primaryLigth: "#F7AD19",
        primaryDarck: "#E3891D",
        black: "#333333",
        white: "#FFFFFF",
        secundary: "#053F5C",
        secundaryLigth: "#429EBD",

        information: "#007CFF",
        warning: "#D4AF37",
        error: "#E63E33",
        success: "#7BA05B",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
