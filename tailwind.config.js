/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable import/extensions */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "4-5xl": "2.625rem",
      "5xl": "3rem",
      "5-5xl": "3.875rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        "light-theme-blue": "#E3F2FD",
        "theme-blue": "#2196F3",
        "dark-theme-blue": "#1976D2",
        "accent-blue": "#152C5B",
        dark: {
          bg: "#1a1a1a",
          text: "#ffffff",
          "text-secondary": "#a0aec0",
          border: "#2d3748",
          card: "#2d3748",
        },
      },
      margin: {
        "-112": "-28rem",
        "-120": "-30rem",
        "-128": "-32rem",
        "-144": "-36rem",
      },
      animation: {
        "bounce-x": "bouncex 1s infinite",
        float: "float 3s ease-in-out infinite", // ✅ NEW
      },
      keyframes: {
        bouncex: {
          "0%, 100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
          },
          "50%": {
            transform: "translateY(-10px) scale(1.1)",
          },
        }, // ✅ NEW
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
