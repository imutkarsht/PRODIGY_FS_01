/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
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