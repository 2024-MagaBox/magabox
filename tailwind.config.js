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
    },
  },
  plugins: [],
};
