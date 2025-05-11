// File: tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'gray': {
            200: '#e5d8d8',
            800: '#2d3748',
          },
          'orange': {
            500: '#f97316',
            600: '#ea580c',
          },
        },
        zIndex: {
          '-10': '-10',
        },
      },
    },
    plugins: [],
  }