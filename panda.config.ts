import { defineConfig } from '@pandacss/dev'
import presetCore from '#panda'

export default defineConfig({
  conditions: {
    base: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },
  outdir: 'styled-system',
  include: ['./app.vue', './components/**/*.vue', './pages/**/*.vue'],
  presets: [presetCore],
  eject: true,
  preflight: false,
  strictTokens: true,
})
