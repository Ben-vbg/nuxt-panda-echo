import { defineRecipe } from '@pandacss/dev'

export default defineRecipe({
  className: 'gallery',
  description: 'Gallery component',
  base: {
    position: 'relative',
    background: '{colors.black.800}',
    width: '100%',
    fontFamily: '{fonts.body}',
  },
  variants: {
    sizer: {
      7: {
        value: {
          maxWidth: 'calc(100%/7 - ({spacing.gutter.1}*2))',
          height: 'calc(100vw/7 - ({spacing.gutter.1}*2))',
          margin: '{spacing.gutter.1}',
        },
      },
    },
    cursor: {
      pointer: {
        cursor: 'pointer',
      },
    },
  },
})
