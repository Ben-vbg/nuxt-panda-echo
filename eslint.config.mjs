import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import stylistic from '@stylistic/eslint-plugin'
import panda from '@pandacss/eslint-plugin'

export default createConfigForNuxt()
  .append({
    plugins: { '@pandacss': panda },
    rules: { ...panda.configs.recommended.rules },
  })
  .append(stylistic.configs['recommended-flat'])
