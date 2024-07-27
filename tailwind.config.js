/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  safelist: [
    'animate-ping',
    'text-red-500',
    'absolute',
    ' bottom-2',
    ' left-4',
    ' text-xs'
  ],
    darkMode: 'class',
      theme: {
          extend: {
            height: {
              '128': '28rem', 
              '144': '36rem',
            },
            fontFamily: {
              custom: ["Poppins", 'sans-serif'], 
            }
          },
      },
  plugins: [],
};