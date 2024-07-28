/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  safelist: [
    'animate-ping',
    'text-red-500',
    'absolute',
    ' bottom-2',
    ' left-4',
    ' text-xs',
    'blur-sm'
  ],
    darkMode: 'class',
      theme: {
          extend: {
            colors: {
              primaryLight: '#f4f4f5', 
              secondaryLight: '#e4e4e7',
              primaryDark: '#18181b', 
              secondaryDark: '#27272a', 
              mediumDark: '#3f3f46', 
              primaryText: '#27272a', 
              white: '#ffffff',
              black: '#000000',
            },
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