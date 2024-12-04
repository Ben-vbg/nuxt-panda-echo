import { defineTokens, defineSemanticTokens } from '@pandacss/dev'

export default {
  base: defineTokens.fonts({
    ars: {
      value: ['ars', 'sans-serif'],
      description: 'ARS Maquette Pro Font Family',
    },
    coranto: {
      value: ['coranto', 'serif'],
      description: 'Coranto Font Family',
    },
  }),
  // SEMANTIC -> Utilise des tokens
  semantic: defineSemanticTokens.fonts({
    heading: {
      value: '{fonts.coranto}',
      description: 'Primary font for headings',
    },
    body: {
      value: '{fonts.ars}',
      description: 'Primary font for body text',
    },
  }),
}
