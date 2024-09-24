import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation:{
        blob: "blob 7s infinite",
      },
      keyframes:{
        blob:{
          "0%":{
            transform: "translate(0px,0px) scale(1)",
          },
          "33%":{
            transform: "translate(30px,-50px) scale(1.1)",
          },
          "66%":{
            transform: "translate(-20px,20px) scale(0.9)",
          },
          "100%":{
            transform: "translate(0px,0px) scale(0.8)",
          }
        }
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
