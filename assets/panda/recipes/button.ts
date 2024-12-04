import { defineRecipe } from '@pandacss/dev'

export default defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    display: 'flex',
    cursor: 'pointer',
  },
  variants: {
    visual: {
      funky: { background: 'red', color: 'white' },
      edgy: { border: '1px solid {colors.red.500}' },
    },
    size: {
      sm: { padding: 'large', fontSize: '12px' },
      lg: { padding: '8', fontSize: '40px' },
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
  // compoundVariants: [
  //   {
  //     size: 'sm',
  //     // isChecked: true,
  //     css: {
  //       control: { borderColor: 'green.500' },
  //     },
  //   },
  // ],
  defaultVariants: {
    visual: 'edgy',
    size: 'sm',
    shape: 'circle',
  },
})
