const { transform } = require("typescript");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      textPrimary: "#111827",
      primary: "#4C1D95",
      secondary: "#7C3AED",
      tertiary: "#C4B5FD",
      "pastel-purple":"#EDE9FE",
      red: "red",
      black: "black",
      white: "white",
      blue: "blue",
      "semi-white": "#f3f3f3",
      body: "#D1D5DB",
      "semi-black": "#0000009e",
    },
    extend: {
      scale: {
        "-1": "-1",
      }
    },
    keyframes: {
      "down-bounce": {
        "0%": {
         "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
        },
        "30%": { transform: "translateY(0)",
        "z-index":"0",
       },
       "50%":{
        transform: "translateY(-20%)",
       },
       "75%":{
        transform: "translateY(0)",
        "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
       },
       "85%":{
        transform: "rotate(0deg)",
       },
      "100%": { 
        transform: "rotate(-12deg)",
        "z-index":"0",  
        },
      },
      "intermittent-ping": {
        "0%": {
          transform: "translateX(50%) translateY(-30%) scale(0.2)",
          opacity: "0",
        },
        "100%": {
          transform:  "translateX(0) scale(1)",
          "z-index":"0",
          opacity: "1"
        }
      },
      "intermittent-move":{
        "0%": {
          transform: "translateY(-0.5rem)",
        },
        "50%":{
          transform: "translateY(0rem)"
        },
        "100%": {
          transform:  "translateY(-0.5rem)"
        }
      }
    },
    animation: {
      "down-bounce": "down-bounce 2s forwards",
      "intermittent-ping":"intermittent-ping .8s forwards",
      "intermittent-move":"intermittent-move 1.8s infinite forwards",
    },
  plugins: [],
  }
}

