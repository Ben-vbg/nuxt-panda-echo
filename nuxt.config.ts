import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2024-11-21',
  devtools: { enabled: true },
  alias: {
    '#panda': resolve('./assets/panda'),
    '#styled-system': resolve('./styled-system'),
  },
  typescript: { strict: true },
  css: [
    '@/assets/css/global.css',
    '@/assets/css/reset.css',
    '@/assets/css/fonts/ars.css',
  ],
  postcss: { plugins: { '@pandacss/dev/postcss': {} } },
})
