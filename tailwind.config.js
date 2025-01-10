/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monaSans: ["Mona Sans", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        project_NavyBlue: "rgba(13, 13, 45, 1)",
        project_grey: "#cdcdcd",
        project_black: "#152329",

        gradient_pink: "rgba(191, 56, 255, 1)",
        gradient_purple: "rgba(98, 66, 199, 1)",
        gradient_blue: "rgba(22, 74, 153, 1)",

        // gradient_purple: "rgba(144, 67, 199, 1)",
        // gradient_blue: "rgba(34, 108, 200, 1)",

        // project_pink: "rgba(255, 26, 198, 1)",
        // project_purple: "rgba(64, 0, 142, 1)",
        // project_blue: "rgba(36, 124, 255, 1)",
      },
      backgroundImage: {
        landingPage_bg: "url(./src/assets/Home/bg.webp)",
      },
    },
  },
  plugins: [],
};
