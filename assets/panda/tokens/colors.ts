import { defineTokens, defineSemanticTokens } from '@pandacss/dev'

export default {
  base: defineTokens.colors({
    white: {
      100: { value: 'rgba(255, 255, 255, 1)' },
      200: { value: 'rgba(255, 255, 255, 0.9)' },
      300: { value: 'rgba(255, 255, 255, 0.8)' },
      400: { value: 'rgba(255, 255, 255, 0.7)' },
      500: { value: 'rgba(255, 255, 255, 0.6)' },
      600: { value: 'rgba(255, 255, 255, 0.5)' },
      700: { value: 'rgba(255, 255, 255, 0.4)' },
      800: { value: 'rgba(255, 255, 255, 0.2)' },
      900: { value: 'rgba(255, 255, 255, 0)' },
    },
    black: {
      100: { value: '#000000' }, // Noir
      200: { value: '#1a1a1a' }, // Très sombre
      300: { value: '#333333' }, // Sombre
      400: { value: '#4d4d4d' }, // Gris foncé
      500: { value: '#666666' }, // Gris moyen
      600: { value: '#808080' }, // Gris clair
      700: { value: '#999999' }, // Très clair
      800: { value: '#b3b3b3' }, // Proche du blanc
      900: { value: '#ffffff' }, // Blanc
    },
    red: {
      100: { value: '#C1272D' },
      200: { value: '#B11F26' },
      300: { value: '#9F1A22' },
      400: { value: '#8D161D' },
      500: { value: '#7A1219' },
      600: { value: '#670E14' },
      700: { value: '#550A10' },
    },
    orange: {
      100: { value: '#FFC336' },
      200: { value: '#E6AE32' },
      300: { value: '#CC9A2D' },
      400: { value: '#B38629' },
      500: { value: '#997225' },
      600: { value: '#805F21' },
      700: { value: '#664C1C' },
    },
    green: {
      100: { value: '#00ADA9' },
      200: { value: '#009C98' },
      300: { value: '#008C88' },
      400: { value: '#007B77' },
      500: { value: '#006B67' },
      600: { value: '#005A56' },
      700: { value: '#004A46' },
    },
  }),
  semantic: defineSemanticTokens.colors({
    text: { value: '{colors.black.200}' },
    link: { value: '{colors.green.100}' },
  }),
}
