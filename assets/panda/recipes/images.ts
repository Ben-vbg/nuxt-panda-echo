import { defineRecipe } from '@pandacss/dev'

export default defineRecipe({
  className: 'images',
  description: 'Images component',
  base: {
    display: 'block',
    width: '100%',
  },
  variants: {
    fit: {
      cover: {
        value: {
          minHeight: '100%',
          minWidth: '100%',
          objectFit: 'cover',
        },
      },
    },
  },
})
