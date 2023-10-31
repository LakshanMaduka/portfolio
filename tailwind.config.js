/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        DancingScript: "Dancing Script",
      },
      colors: {
        bgblack: "#1C1C1C",
        bggold: "#FFE002",
        bgwhite: "#FFFFFF",
        bgash: "#3B3B3B",
      },
    },
  },
  plugins: [],
};
