/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        popins:  "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif;"
      }
    },
  },
  daisyui: {
    themes: [],
 },
  plugins: [
    // require('@tailwindcss/forms'),
      require("daisyui")
  ],
}

