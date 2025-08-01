/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff0080',
        'neon-purple': '#6b21a8',
        'neon-teal': '#06b6d4',
        'neon-cyan': '#00ffff',
        'dark-bg': '#0a0a0f',
        'dark-card': '#1a1a2e',
      },
      fontFamily: {
        'retro': ['Orbitron', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      animation: {
        'neon-flicker': 'neon-flicker 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'neon-flicker': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.9'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}