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
        'mdl': '960px'
      },
      colors: {
        'ct-primary': '#0f0f0f',
        'ct-secondary': '#272727',
        'ct-highlight-color': '#ffd233',
        'ct-text-color': '#a3a1be'
      }
    }
  },
  plugins: []
}

