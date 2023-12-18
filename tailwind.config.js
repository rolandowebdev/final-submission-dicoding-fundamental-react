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
        success: '#009176',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        'bounce-right': {
          '0%, 100%': {
            transform: 'translateX(-15%)',
            opacity: '1',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            opacity: '0.5',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'bounce-right': 'bounce-right 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
