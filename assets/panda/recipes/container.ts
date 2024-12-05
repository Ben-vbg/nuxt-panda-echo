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
          padding: '{spacing.gutter.base}',
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
          width: '100%',
          maxWidth: '100vw',
          margin: '0',
          padding: '{spacing.gutter.base}',
          flexDirection: 'column',
        },
      },
    },
    column: {
      auto: {
        value: {
          padding: '{spacing.gutter.base}',
          flexDirection: 'row',
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
      auto: {
        height: '100%',
        maxHeight: 'auto',
      },
    },
  },
})
