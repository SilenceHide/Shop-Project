import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xs": "440px",
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        "text-heading": "#253D4E",
        "text-body": "#7E7E7E",
        "text-body-2": "#b6b6b6",
        "border-gray": "#e5e5e5",
        "border-light": "#F2F3F4",
        "border-light-green": "#BCE3C9",
        "brand-color-one": "#3BB77E",
        "brand-color-two": "#FDC040",
        "scale-one": "#81B13D",
        "scale-two": "#3A882B",
        "scale-three": "#227226",
        "scale-four": "#1A5D2C",
        "primary-color": "#46BCF2",
        "success-color": "#16C79A",
        "danger-system-color": "#EF4F4F",
        "danger-color": "#FD6E6E",
        "warning-color": "#F6C065",
        "info-color": "#008891",
        "hero-bg": "rgba(253, 192, 64, 0.20);",
      },
      boxShadow: {
        "main-shadow": "5px 5px 15px 0px rgba(24, 24, 24, 0.05)",
      },
    },
    fontFamily: {
      lato: ["Lato", "Arial", "sans-serif"],
      quicksand: ["Quicksand", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
