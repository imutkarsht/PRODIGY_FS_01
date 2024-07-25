/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  safelist: [
    'animate-pulse',
    'text-red-500',
  ],
    darkMode: 'class',
      theme: {
          extend: {
            height: {
              '128': '28rem', // Example custom height
              '144': '36rem',
            },
            fontFamily: {
              custom: ["Poppins", 'sans-serif'], 
            }
          },
      },
  plugins: [],
};