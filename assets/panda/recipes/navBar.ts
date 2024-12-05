import { defineRecipe } from '@pandacss/dev'

export default defineRecipe({
  className: 'NavBar',
  description: 'NavBar component',
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100vw',
    height: '45px',
  },
  variants: {
    heading: {
      navigation: {
        value: {
          paddingX: '{spacing.gutter.base}',
          maxWidth: '{breakpoints.laptop}',
          margin: '0 auto',
        },
      },
      content: {
        value: {
          maxWidth: '550px',
          flexDirection: 'column',
        },
      },
    },
  },
})
