import { defineRecipe } from '@pandacss/dev'

export default defineRecipe({
  className: 'link',
  description: 'The styles for the Link component',
  base: {
    color: '{colors.link}',
    textDecoration: 'underline',
  },
  variants: {
    heading: {
      logo: {
        display: 'block',
        position: 'relative',
        top: '0',
        width: '80px',
        height: '80px',
      },
      text: { color: '{colors.text}' },
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
  // visual: 'edgy',
  //   size: 'sm',
  // shape: 'circle',
  // },
})
