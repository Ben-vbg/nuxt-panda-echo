import { defineConfig } from '@pandacss/dev'
import presetCore from '#panda'

export default defineConfig({
  outdir: 'styled-system',
  include: ['./app.vue', './components/**/*.vue', './pages/**/*.vue'],
  presets: [presetCore],
  eject: true,
  preflight: false,
  strictTokens: true,
})
