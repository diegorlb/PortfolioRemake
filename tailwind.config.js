const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#15171d',
        secondary: '#252833',
      },
      fontFamily: {
        hack: ['Hack', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        xxs: ['0.6rem', '0.8rem']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
