/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        dark: '#0d1117',
        softDark: '#161b22',
        light: '#e6edf3',
        border: '#21262d',
        success: '#38a169',
      },
    },
  },
  plugins: [],
}
