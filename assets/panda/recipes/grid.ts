import { defineRecipe } from '@pandacss/dev'

export default defineRecipe({
  className: 'grid',
  description: 'Grid component',
  base: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
  },
  variants: {},
})
