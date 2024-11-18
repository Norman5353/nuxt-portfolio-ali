<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const { locale } = useI18n()

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'canonical',
      href: runtimeConfig.public.siteUrl,
    },
  ],
})

useSeoMeta({
  title: `${appConfig.appName} | Frontend Developer Portfolio`,
  description: 'Discover the portfolio of Ali Arghyani (علی ارغیانی), a frontend web developer specializing in Vue.js, Nuxt.js, and responsive web design.',
  author: 'Ali Arghyani, علی ارغیانی',
  keywords: 'Ali Arghyani, علی ارغیانی, frontend developer, Vue.js, Nuxt.js, web development, portfolio, responsive design, JavaScript',
  ogType: 'website',
  ogTitle: `${appConfig.appName} | Ali Arghyani | علی ارغیانی`,
  ogDescription: 'Explore the portfolio of Ali Arghyani (علی ارغیانی), showcasing modern and responsive web applications built with the latest web technologies.',
  ogSiteName: 'Ali Arghyani Portfolio | علی ارغیانی',
  ogUrl: () => runtimeConfig.public.siteUrl,
  ogImage: `${runtimeConfig.public.siteUrl}/images/portfolio-preview.png`,
  ogLocale: () => locale.value,
  robots: 'index, follow',
  canonical: () => runtimeConfig.public.siteUrl,
  alternateLangs: [
    { hreflang: 'fa', href: `${runtimeConfig.public.siteUrl}/fa` }, // Persian version link
    { hreflang: 'en', href: `${runtimeConfig.public.siteUrl}` }, // English version link
  ],
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style scoped>

</style>
