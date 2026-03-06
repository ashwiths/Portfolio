/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['Caveat', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        pastel: {
          lavender: '#E8E0FF',
          peach: '#FFE8D9',
          mint: '#D4F5E9',
          sky: '#D9EEFF',
          cream: '#FFF9F0',
          pink: '#FFD6E8',
          yellow: '#FFF3C4',
          lilac: '#F0D9FF',
        },
        dark: {
          bg: '#1A1625',
          card: '#241F35',
          surface: '#2D2844',
          border: '#3D3660',
          muted: '#6B6585',
        },
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'pop': 'pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--rot, 0deg))' },
          '50%': { transform: 'translateY(-12px) rotate(var(--rot, 0deg))' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'sticker': '3px 4px 0px rgba(0,0,0,0.2)',
        'sticker-lg': '5px 7px 0px rgba(0,0,0,0.15)',
        'card': '0 8px 32px rgba(0,0,0,0.08)',
        'card-dark': '0 8px 32px rgba(0,0,0,0.4)',
        'tape': '2px 2px 8px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'paper': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
