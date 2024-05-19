/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Niramit: ['"Niramit"', 'sans-serif']
      },
      screens: {
        'xss': '375px',
        'xs': '475px',
        'sms': '575px',
        'md': '800px',
        'mdl': '960px'
      },
      colors: {
        'ct-primary': '#0f0f0f',
        'ct-secondary': '#272727',
        'ct-highlight-color': '#ffd233',
        'ct-text-color': '#a3a1be'
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(15,15,15,0.2) 50%, rgba(15,15,15,1) 90%)'
      },
      animation: {
        'fade-show': 'fade 1s ease-in-out'
      },
      keyframes: {
        'fade': {
          to: {
            'opacity': 0
          },
          from: {
            'opacity': 1
          }
        }
      }
    }
  },
  plugins: []
}

