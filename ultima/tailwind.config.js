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
          '0%': {height: '100vh',
                width: '100vw'},
          '100%': {height: `calc(100vh - 6rem)`,
          width: '100vw'}
        },
        'drive': {
          '0%': { transform: 'translateX(1000px)',
                  opacity: '100%', 
                  display: 'inline-block'},
          '50%': { transform: 'translateX(0px)',
                  opacity: '100%',
                  display: 'inline-block' },
          '100%': { display: 'none'}
        },
          'disappear': {
            '0%': {opacity: '50%'},
          '100%': {opacity: '0%'}
          },
          'reveal': {
            '0%': {opacity: '0%'},
            '50%': {opacity: '0%'},
            '100%': {opacity: '100%'}
          },
          'comeup': {
            '0%': { transform: 'translateY(100px)',
            opacity: '0%' },
            '100%': { transform: 'translateY(0px)',
            opacity: '100%' }
          },
          'comedown': {
            '0%': { 
            transform: 'translate(-50%, -50%) translateY(-200px)',
            opacity: '0%' },
            '100%': { transform: 'translateY(0px)',
            transform: 'translate(-50%, -50%) translateY(0px)',
            opacity: '100%' }
          },
      },
      animation: {
        headerdown: 'headerdown 2s ease-out',
        bodyshrink: 'bodyshrink 2s ease-out',
        hide: 'hide 3s ease-out',
        reveal: 'reveal 5s ease-out', // added 3s delay
        drive: 'drive 5s ease-out',
        comeup: 'comeup 4s ease-out',
        comedown: 'comedown 4s ease-out'
      }
    },
  },
  plugins: [],
}
