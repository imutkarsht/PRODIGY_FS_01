/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
      theme: {
          extend: {
            fontFamily: {
              custom: ["Poppins", 'sans-serif'], 
            }
          },
      },
  plugins: [],
};