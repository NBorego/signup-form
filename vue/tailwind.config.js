/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      desktop: '375px',
      desktop2: '1200px'
    },
    colors: {
      white: '#FFF',
      red: 'hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
      blue: 'hsl(248, 32%, 49%)',
      darkBlue: 'hsl(249, 10%, 26%)',
      grayishBlue: 'hsl(246, 25%, 77%)'
    },
    fontFamily: {
      poppins: 'Poppins, sans-serif'
    }
  },
  plugins: []
};
