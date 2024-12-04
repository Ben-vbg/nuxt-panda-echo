<template>
  <div id="app">
    <Hero />
  </div>
</template>

<script setup lang="ts">
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
