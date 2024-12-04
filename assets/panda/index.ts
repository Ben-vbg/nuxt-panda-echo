import { definePreset } from '@pandacss/dev'
import tokens from '#panda/tokens'
import styles from '#panda/styles'
import recipes from '#panda/recipes'
import pandaPreset from '@pandacss/preset-base'

export default definePreset({
  name: 'preset-core',
  conditions: {
    extend: {
      hoverAction: '&:is(:active, :focus-visible, :hover, [data-hover])',
    },
  },
  theme: {
    extend: {
      breakpoints: { mobile: '640px', tablet: '768px', desktop: '1024px', laptop: '1250px' },
      tokens: tokens.base,
      semanticTokens: tokens.semantic,
      layerStyles: styles.layer,
      textStyles: styles.text,
      recipes: recipes,
    },
  },
  utilities: {
    extend: { ...pandaPreset.utilities },
  },
})
