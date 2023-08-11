/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js, jsx, ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce-slow 3s infinite',
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            'transform': 'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            'transform': 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          }
        },
        'pulse-slow': {
          '50%': {
            'opacity': '.9'
          }
        }
      }
    },
  },
  plugins: [],
  // purge: {
  //   enanbled: true,
  //   content
  // }
}

