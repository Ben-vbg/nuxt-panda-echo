import { defineTokens, defineSemanticTokens } from '@pandacss/dev'

export default {
  base: defineTokens.spacing({
    0: { value: '0rem' },
    0.5: { value: '.5rem' },
    1: { value: '1rem' },
    1.5: { value: '1.5rem' },
    2: { value: '2rem' },
    2.5: { value: '2.5rem' },
  }),
  semantic: defineSemanticTokens.spacing({
    gutter: {
      DEFAULT: {
        value: '{spacing.0}',
        description: 'Base heading space',
      },
      base: {
        value: '{spacing.1}',
        description: 'Article\'s space',
      },
    },
  }),
}
