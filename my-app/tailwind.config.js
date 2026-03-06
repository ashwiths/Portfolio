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
          /* "Violet Dusk" light palette */
          lavender: '#ECE6FF',   /* soft violet */
          peach: '#FFE2EF',   /* blush rose  */
          mint: '#E3F5F1',   /* sage tint   */
          sky: '#E5E9FF',   /* periwinkle  */
          cream: '#FAF8FF',   /* violet-white */
          pink: '#FFD6F0',   /* hot-pink tint */
          yellow: '#FFF1D6',   /* amber tint   */
          lilac: '#F3E8FF',   /* deep lilac   */
        },
        dark: {
          bg: '#0C0914',   /* deepest midnight violet */
          card: '#16102A',   /* dark plum              */
          surface: '#211639',   /* purple surface          */
          border: '#392B5C',   /* violet border           */
          muted: '#7C6EA8',   /* muted lavender          */
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
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        pop: { '0%': { transform: 'scale(0.8)' }, '100%': { transform: 'scale(1)' } },
      },
      boxShadow: {
        'sticker': '3px 4px 0px rgba(0,0,0,0.18)',
        'sticker-lg': '5px 7px 0px rgba(0,0,0,0.14)',
        'card': '0 8px 32px rgba(120, 80, 200, 0.10)',
        'card-dark': '0 8px 40px rgba(0,0,0,0.55)',
        'tape': '2px 2px 8px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
