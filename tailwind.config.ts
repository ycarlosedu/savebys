import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    data: {
      active: 'active~=true',
      disabled: 'disabled~=true',
      invalid: 'invalid~=true',
    },
    extend: {
      screens: {
        xs: '425px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        hide: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeTranslate: {
          '0%': {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96) translateY(-200vh)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1) translateY(0)',
          },
        },
        hideTranslate: {
          '0%': {
            opacity: '1',
            transform: 'translate(-50%, -50%) scale(1) translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96) translateY(200vh)',
          },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fade: 'fade 0.5s ease-in-out',
        hide: 'hide 0.5s ease-in-out',
        fadeTranslate: 'fadeTranslate 0.5s ease-in-out',
        hideTranslate: 'hideTranslate 0.5s ease-in-out',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        radio: '0 2px 5px #111218',
        focusRadio: '0 0 0 2px #111218',
      },
    },
  },
  plugins: [],
};
export default config;
