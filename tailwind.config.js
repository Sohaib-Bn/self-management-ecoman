/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ["Tajawal", " sans-serif"],
      },
      colors: {
        colorGreyText: "#454546",
        colorBrand: "#F05D5E",
        colorWhite: "#FFFF",
        colorBrandHover: "#fc5353",
        colorError: "#F44336",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
