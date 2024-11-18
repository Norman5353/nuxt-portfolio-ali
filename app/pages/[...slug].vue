<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import { useColorMode } from '@vueuse/core'

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useContentHead(page.value)

const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const { appName, email } = useAppConfig()
const { t, locale } = useI18n()

useHead({
  titleTemplate: `%s - ${appName}`,
})

useSeoMeta({
  description: () => t('global.app_description'),
  author: 'Ali Arghyani',
  ogImage: 'https://aliarghyani/social-preview.png',
  ogType: 'website',
  ogTitle: appConfig.appName,
  ogDescription: () => t('global.app_description'),
  ogUrl: () => runtimeConfig.public.siteUrl,
  ogLocale: () => locale.value,
})

const { copy } = useClipboard({
  source: email,
})

defineShortcuts({
  meta_o: {
    usingInput: true,
    handler: () => {
      copy()
      toast.success(t('global.email_copied'))
    },
  },
})

// Manage dark/light theme
const colorMode = useColorMode()
</script>

<template>
  <div>
    <Html
      :lang="$i18n.locale"
      class="transition-colors duration-300"
      :class="{
        'bg-zinc-950 text-main': colorMode === 'dark',
        'bg-white text-zinc-800': colorMode === 'light',
      }"
    >
      <Body>
        <LayoutScrollToTop />
        <NuxtLayout>
          <ContentQuery
            v-slot="{ data }"
            :path="$route.path"
            :locale="locale"
            find="one"
          >
            <ContentRenderer :value="data" />
          </ContentQuery>
        </NuxtLayout>
        <Toaster close-button />
        <DotPattern
          class="absolute inset-0 -z-10 size-full"
          :fill="colorMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'"
        />
      </Body>
    </Html>
  </div>
</template>
