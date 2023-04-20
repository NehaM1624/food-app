/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        80: "80px",
        150: "150px",
        370: "370px",
        300: "300px",
        225: "225px",
        340: "340px",
        420: "420px",
        510: "510px",
        650: "650px",
        685: "685px",
        600: "600px",
        800: "800px",
        "90vh": "90vh",
      },

      width: {
        190: "190px",
        225: "225px",
        275: "275px",
        340: "340px",
        300: "300px",
        460: "460px",
        350: "350px",
        375: "375px",
        150: "150px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      colors: {
        cartNumBg: "#e80013",
        headingColor: "#2e2e2e",
        primary: "#f5f3f3",
        cardOverlay: "rgba(256,256,256,0.4)",
        textColor: "#515151",
        lighttextGray: "#9ca0ab",
        card: "rgba(256,256,256,0.8)",
        cartTotal: "#343739",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
      },
      screens: {
        md: "768px",
        sm: "640px",
        xl: "1280px",
        lg: "1024px",
        xmd: "952px",
        "2xl": "1536px",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};