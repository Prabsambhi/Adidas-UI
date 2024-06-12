/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom1: '#282C31',
        custom2: '#EDE734',
        custom3: '#F5F5E5',
      },
    },
  },
  plugins: [],
}

