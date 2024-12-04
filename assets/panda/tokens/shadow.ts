import { defineTokens, defineSemanticTokens } from '@pandacss/dev'

export default {
  base: defineTokens.shadows({
    base: {
      value: '0 0 10px 5px rgba(0, 0, 0, 0.05)',
    },
  }),
  // SEMANTIC -> Utilise des tokens
  semantic: defineSemanticTokens.shadows({
    ui: {
      value: '{shadows.base}',
      description: 'Primary font for headings',
    },
  }),
}
