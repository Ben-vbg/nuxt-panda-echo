import { defineRecipe } from '@pandacss/dev'

export default defineRecipe({
  className: 'small',
  description: 'The styles for the Small component',
  base: {
    display: 'block',
    fontFamily: 'ars, sans-serif',
    fontWeight: 300,
  },
  variants: {
    heading: { text: { color: '{colors.text}' } },
    size: {
      sm: { fontSize: 'extraSmall' },
      lg: { fontSize: 'large' },
      xlg: { fontSize: '{extralarge}' },
    },
    shape: {
      square: { borderRadius: '0' },
      circle: {
        borderTopRadius: '3rem', width: '{breakpoints.laptop}',
        mobileOnly: { color: 'blue' },
        tabletToDesktop: { color: 'purple' },
        desktopOnly: { color: 'red' },
      },
    },
  },
})
