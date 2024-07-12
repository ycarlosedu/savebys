import type { Config } from "tailwindcss";

import colors from "./src/styles/colors";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  prefix: "",
  theme: {
    data: {
      active: "active~=true",
      disabled: "disabled~=true",
      invalid: "invalid~=true"
    },
    colors,
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      screens: {
        xs: "425px",
        "2xl": "1400px"
      },
      backgroundImage: {
        gradientForms:
          "linear-gradient(to bottom, rgba(96, 97, 97, 0.5), rgba(96, 97, 97, 1)), url('/images/bg-gray.webp')",
        gradientFormsToTop:
          "linear-gradient(to top, rgba(96, 97, 97, 0.5), rgba(96, 97, 97, 1)), url('/images/bg-gray.webp')",
        grayForms: "url('/images/bg-gray.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)", scale: "1" },
          "50%": { transform: "rotate(10deg)", scale: "1.5" }
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        hide: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
        },
        scaleDown: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" }
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" }
        },
        fadeTranslate: {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96) translateY(-200vh)"
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1) translateY(0)"
          }
        },
        hideTranslate: {
          "0%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1) translateY(0)"
          },
          "100%": {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96) translateY(200vh)"
          }
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        loader:
          "spin 1s linear infinite, pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fade: "fade 0.5s ease-in-out",
        hide: "hide 0.5s ease-in-out",
        hideAndScaleDown: "hide 0.5s ease-in-out, scaleDown 0.5s ease-in-out",
        fadeTranslate: "fadeTranslate 0.5s ease-in-out",
        hideTranslate: "hideTranslate 0.5s ease-in-out",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      },
      boxShadow: {
        radio: "0 2px 5px #111218",
        focusRadio: "0 0 0 2px #111218"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
