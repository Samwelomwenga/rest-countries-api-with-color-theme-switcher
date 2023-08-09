/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    colors:{
      'dark-blue':'hsl(209, 23%, 22%)',
      'very-dark-blue-dm':'hsl(207, 26%, 17%)',
      'dark-grey':'hsl(0, 0%, 52%)',
      'very-light-grey':'hsl(0, 0%, 98%)',
      'very-dark-blue-lm':'hsl(209, 23%, 22%)',
      'white':'hsl(0, 0%, 100%)',
    },
    extend: {},
  },
  plugins: [],
}