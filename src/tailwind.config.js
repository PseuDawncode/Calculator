/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        lg: "0.5px 0.5px 1px rgba(55, 244, 197, 1)",
        white: "0.5px 0.5px 1px rgb(255, 255, 255)",
        black: "1px 1px 2px rgb(0, 0, 0)",
      },
      minHeight: {
        quiz: "80vh",
      },
      width: {
        size: "450px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0.5px 0.5px 1px rgba(55, 244, 197, 1)",
        },
        ".text-shadow-white": {
          textShadow: "0.5px 0.5px 1px rgb(255, 255, 255)",
        },
        ".text-shadow-black": {
          textShadow: "1px 1px 2px rgb(0, 0, 0)",
        },
        ".min-height-quiz": {
          minHeight: "80vh",
        },
        ".width-size": {
          width: "450px",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
