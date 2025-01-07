/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-gray': {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        'my-blue': {
          100: '#4EA8DE',
          200: '#1E6F9F',
        },
        'my-purple': {
          100: '#8284FA',
          200: '#5E60CE',
        },
      },
    },
  },
  plugins: [],
};
