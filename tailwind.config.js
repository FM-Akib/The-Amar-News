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
        popins:  "'Poppins', sans-serif"
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
      require("daisyui")
  ],
}

