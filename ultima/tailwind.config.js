/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'headerdown': {
          '0%': { height: '0' },
          '100%': { height: 'full' }
        },
        'bodyshrink': {
          '0%': {height: '100vh'},
          '100%': {height: `calc(100vh - 6rem)`}
        },
        'reveal': {
          '0%': {opacity: '0%'},
          '100%': {opacity: '50%'}
        }
      },
      animation: {
        headerdown: 'headerdown 2s ease-out',
        bodyshrink: 'bodyshrink 2s ease-out',
        reveal: 'reveal 5s ease-out'
      }
    },
  },
  plugins: [],
}
