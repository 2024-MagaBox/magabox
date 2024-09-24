// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Pretendard: ["Pretendard-Regular"],
      Gmarket: ["GmarketSansMedium"],
    },
    fontSize: {
      sm: "13px",
      base: "16px",
      lg: "20px",
      xl: "30px",
    },
    colors: {
      white: "#ffffff",
      darkgray: "#777777",
      gray: "#cac4ce",
      primaryColor: "#242038",
      subColor: "#2E294E",
    },
  },
  plugins: [],
};
