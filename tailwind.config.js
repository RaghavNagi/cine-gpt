/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'md': '0 2px 4px rgba(0, 0, 0, 0.5)',
        
        // Defining different sizes for the white shadow
        'white-sm': '0 1px 2px rgba(255, 255, 255, 1)', // Small & sharp
      }
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}