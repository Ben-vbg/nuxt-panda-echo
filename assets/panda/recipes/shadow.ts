import { defineRecipe } from '@pandacss/dev'

export default defineRecipe({
  className: 'shadow',
  description: 'Container component',
  base: {
    boxShadow: '{shadows.ui}',
  },
  variants: {},
})
