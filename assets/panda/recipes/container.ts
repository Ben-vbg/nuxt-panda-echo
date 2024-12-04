import { defineRecipe } from '@pandacss/dev'

export default defineRecipe({
  className: 'container',
  description: 'Container component',
  base: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  variants: {
    heading: {
      nav: {
        value: {
          width: '100vw',
          height: '45px',
          flexDirection: 'row',
          justifyContent: 'space-between',
          maxWidth: '{breakpoints.laptop}',
          paddingX: '{spacing.gutter.base}',
          margin: '0 auto',
          boxShadow: '{shadows.ui}',
        },
      },
      content: {
        value: {
          maxWidth: '550px',
          flexDirection: 'column',
        },
      },
    },
    body: {
      content: {
        value: {
          maxWidth: '550px',
          flexDirection: 'column',
        },
      },
      medium: {
        value: {
          maxWidth: '{breakpoints.laptop}',
          padding: '{spacing.gutter.base}',
          flexDirection: 'column',
        },
      },
      large: {
        value: {
          flexDirection: 'row',
          width: '100%',
          maxWidth: '100vw',
          margin: '0',
        },
      },
    },
    align: {
      center: { margin: '0 auto' },
    },
    minv: {
      100: {
        height: '100vh',
        maxHeight: '100vh',
      },
    },
  },
  // compoundVariants: [
  //   {
  //     size: 'sm',
  // isChecked: true,
  //     css: {
  //       control: { borderColor: 'green.500' },
  //     },
  //   },
  // ],
  // defaultVariants: {
  //   heading: 'DEFAULT',
  // },
})
