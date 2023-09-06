/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat'],
      'lato': ['Lato'],
      'opensans':['"Open Sans"'],
      'figtree':['Figtree']
    },
    extend: {
      backgroundImage: {
        'blue-bg': 'linear-gradient(180deg, #4285F4 0%, #3C83F9 100%)',
        'mobile':`url('/src/assets/mobile.png')`
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}



