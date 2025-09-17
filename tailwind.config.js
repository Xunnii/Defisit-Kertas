import { DEFAULT_EXTENSIONS } from '@babel/core';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14A0B7',
        },
        secondary: {
          DEFAULT: '#15677B'
        }

      }
    },
  },
  plugins: [],
};
