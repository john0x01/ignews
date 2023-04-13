/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-100': '#e1e1e6',
        'gray-300': '#a8a8b3',
        'gray-800': '#29292e',
        'gray-900': '#121214',

        'cyan-500': '#61DAFB',
        'yellow-500': '#EBA417',
      }
    },
  },
  plugins: [],
}
