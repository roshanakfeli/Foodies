import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial": "radial-gradient(#282c34, #282c34)",
        "custom-gradient": "linear-gradient(90deg, #f9572a, #ffc905)",
        custom: "linear-gradient(90deg, #2c1e19, #25200f)",
        "gradient-custom": "linear-gradient(90deg, #f9572a, #ff9b05)",
      },
      colors: {
        "custom-orange-1": "#f9572a",
        "custom-orange-2": "#ff9b05",
        "custom-color": "#cfa69b",
        customGray: "#262626",
      },
      boxShadow: {
        "custom-sm": "0 0 0.5rem rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        loading: {
          "0%": { color: "#e9e9e9" },
          "50%": { color: "#b89b84" },
          "100%": { color: "#e9e9e9" },
        },
        "fade-slide-in-from-left": {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-slide-in-from-right": {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-slide-in-from-bottom": {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        loading: "loading 1.2s ease-in-out infinite",
        "fade-slide-in-from-left":
          "fade-slide-in-from-left 1s ease-out forwards",
        "fade-slide-in-from-right":
          "fade-slide-in-from-right 1s ease-out forwards",
        "fade-slide-in-from-bottom":
          "fade-slide-in-from-bottom 1s ease-out forwards",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".text-gradient": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".hover-gradient": {
          "@apply hover:bg-gradient-to-r": {},
          background: "linear-gradient(90deg, #fd4715, #f9b241)",
        },
        ".active-gradient": {
          "@apply active:bg-gradient-to-r": {},
          background: "linear-gradient(90deg, #fd4715, #f9b241)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover", "active"]);
    },
  ],
};
export default config;
