/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'light-red': 'hsl(356, 100%, 66%)',
      'very-light-red': 'hsl(355, 100%, 74%)',
      'very-dark-blue': 'hsl(208, 49%, 24%)',
      'white': 'hsl(0, 0%, 100%)',
      'grayish-blue': 'hsl(240, 2%, 79%)',
      'very-dark-grayish-blue': 'hsl(207, 13%, 34%)',
      'very-dark-black-blue': 'hsl(240, 10%, 16%)',
      'very-dark-gray-blue': 'hsl(237, 17%, 21%)',
      'very-dark-desaturated-blue': 'hsl(237, 23%, 32%)',
    },
    backgroundImage: {
      'intro-cta-mobile': 'linear-gradient(90deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))',
      'body': 'linear-gradient(90deg, hsl(237, 17%, 21%), hsl(237, 23%, 32%))',
    },
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      fontWeight: {
        'overpass-light': 300,
        'overpass-semibold': 600,
        'ubuntu-regular': 400,
        'ubuntu-medium': 500,
        'ubuntu-bold': 700,
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
