import { defineTokens, defineSemanticTokens } from '@pandacss/dev'

export default {
  base: defineTokens.fontSizes({
    extraSmall: { value: '.5rem' },
    small: { value: '.75rem' },
    medium: { value: '1rem' },
    large: { value: '1.75rem' },
    extralarge: { value: '2.25rem' },
  }),
  semantic: defineSemanticTokens.fontSizes({
    extraSmall: { value: '.5rem' },
    small: { value: '.75rem' },
    medium: { value: '1rem' },
    large: { value: '1.75rem' },
    extralarge: { value: '2.25rem' },
  }),
}
