/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        duo: {
          green: '#58cc02',
          'green-dark': '#46a302',
          blue: '#1cb0f6',
          'blue-dark': '#1899d6',
          purple: '#ce82ff',
          'purple-dark': '#a55eea',
          yellow: '#ffc800',
          'yellow-dark': '#e5a500',
          orange: '#ff9600',
          'orange-dark': '#e07700',
          red: '#ff4b4b',
          'red-dark': '#ea2b2b',
          gray: '#e5e5e5',
          'gray-dark': '#afafaf',
          card: '#ffffff',
          darkcard: '#1e293b',
          darkbg: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Hind Siliguri', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'duo-green': '0 4px 0 #46a302',
        'duo-blue': '0 4px 0 #1899d6',
        'duo-purple': '0 4px 0 #a55eea',
        'duo-yellow': '0 4px 0 #e5a500',
        'duo-red': '0 4px 0 #ea2b2b',
        'duo-gray': '0 4px 0 #afafaf',
        'duo-card': '0 4px 0 #e2e8f0',
        'duo-darkcard': '0 4px 0 #090d16',
      }
    },
  },
  plugins: [],
}
