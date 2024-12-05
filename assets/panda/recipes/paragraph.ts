import { defineRecipe } from '@pandacss/dev'

export default defineRecipe({
  className: 'paragraph',
  description: 'The styles for the Paragraph component',
  base: {
    display: 'block',
    fontFamily: 'ars, serif', // Ensure it's defined correctly
    fontWeight: 300, // Use a number if you're targeting a numeric weight
    lineHeight: 1.6,
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
