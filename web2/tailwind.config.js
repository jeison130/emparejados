const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)'
      }
    },
    
  },
  variants: {},
  plugins: [],
}
