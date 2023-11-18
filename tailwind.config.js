/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'authentication': "url('/src/assets/others/authentication.png')",
        
      }
    },
  },
  plugins: [require("daisyui")],
}

