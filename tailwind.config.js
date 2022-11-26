/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        automoveR: {
          '0%': {transform: 'translate(0%)'},
          '50%': {transform: 'translate(80%)'},
          '100%': {transform: 'translate(80%)'},
        },
        automoveL: {
          '0%': {transform: 'translate(0%)'},
          '50%': {transform: 'translate(-100%)'},
          '100%': {transform: 'translate(-100%)'},
        },
        bounceY:{
          '0%': {transform: 'translateY(0%)'},
          '50%':{transform: 'translateY(5%)'},
          '100%': {transform: 'translateY(0%)'},
        },
        Cloud: {
          '0%': {transform: 'translate(0%)'},
          '50%': {transform: 'translate(-3%)'},
          '100%': {transform: 'translate(0%)'}
      },
    },
      animation: {
        'automove-R': 'automoveR 2s ease-in-out 1s normal forwards',
        'automove-L': 'automoveL 2s ease-in-out 1s normal forwards',
        'bounce-Y': 'bounceY 7s ease-in-out 1s infinite normal forwards',
        'CloudSlide': 'Cloud 10s linear 1s infinite normal forwards',
      },
    },
  },
  plugins: [],
};

