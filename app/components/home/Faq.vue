<script setup lang="ts">
import type { Faq } from '~/types/Faq'

const { locale } = useI18n()

const { data: faq } = await useAsyncData('faq', () => queryContent('/faq').locale(locale.value).findOne(), {
  watch: [locale],
})

const items = computed(() => {
  return faq.value?.faqQuestions.map((faq: Faq) => {
    return {
      label: faq.title,
      key: faq.title.toLowerCase(),
      questions: faq.questions,
    }
  })
})

const ui = {
  list: {
    base: 'gap-4',
    background: 'bg-transparent dark:bg-transparent', // Light: white, Dark: dark gray
    rounded: 'rounded-full',
    marker: {
      wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
      base: 'w-full h-full',
      background: 'bg-slate-500 dark:bg-slate-400', // Light: blue, Dark: lighter blue
      rounded: 'rounded-full',
      shadow: 'shadow-lg dark:shadow-none', // Shadow for light mode, none for dark mode
    },
    tab: {
      base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full focus:outline-none transition-colors duration-200 ease-out border-gray-300 dark:border-gray-600', // Light: gray border, Dark: darker gray border
      background: 'hover:bg-gray-100 dark:hover:bg-gray-700', // Light: light gray hover, Dark: darker gray hover
      active: 'text-gray-900 dark:text-gray-100', // Active: dark gray for light mode, light gray for dark mode
      inactive: 'text-gray-500 dark:text-gray-400', // Inactive: gray tones for both themes
      height: '',
      padding: 'px-3 py-2',
      size: '',
      font: 'font-medium',
      rounded: 'rounded-full',
      shadow: 'shadow-lg dark:shadow-md', // Subtle shadow for light mode, none for dark mode
    },
  },
}
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-8">
    <div class="flex flex-col items-center justify-center gap-2">
      <!-- Updated for light/dark text color -->
      <h3 class="font-newsreader italic text-white-shadow dark:text-white text-4xl">
        {{ faq!.title }}
      </h3>
      <!-- Updated for light/dark text color -->
      <p class="text-center text-sm font-medium text-muted dark:text-gray-300">
        {{ faq!.subtitle }}
      </p>
    </div>
    <div>
      <UTabs
        :items
        orientation="horizontal"
        :ui
      >
        <template #item="{ item }">
          <FAQ
            :questions="item.questions"
            class="mt-8 max-w-lg"
          />
        </template>
      </UTabs>
    </div>
  </div>
</template>
