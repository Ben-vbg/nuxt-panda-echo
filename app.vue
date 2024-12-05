<template >
  <div id="app" :class="css({background:'bg'})" data-color-mode="base">
    <Hero />
    <Section />
  </div>
</template>

<script setup lang="ts">
import { css } from './../styled-system/css'
import { } from '../styled-system/recipes'

// META SEO
useHead({
  htmlAttrs: { 'lang': 'fr', 'data-theme': 'default' },
  titleTemplate: (seoMetaTitle) => {
    return seoMetaTitle?.concat(` - L'Echo`) || `Multimédia - L'Echo`
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})
</script>

<!-- <link rel="apple-touch-icon" sizes="180x180" href="/elections-communales-2024/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/elections-communales-2024/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/elections-communales-2024/favicon-16x16.png">
<link rel="mask-icon" href="/elections-communales-2024/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index, follow"></meta> -->
