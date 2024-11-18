<script lang="ts" setup>
import type { Navigation } from '~/utils/useNavigation'

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
})

const navigation = getNavigation('home') as Record<string, Navigation>
</script>

<template>
  <div class="mx-auto my-2 flex  items-center justify-center">
    <header class="rounded-full">
      <SpotlightButton
        rounded
        transparent
        :animate="false"
        class="border border-gray-300 dark:border-gray-600"
      >
        <nav
          class="z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4"
        >
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            :class="[item.to === $route.path
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-lg shadow-gray-300/50 dark:shadow-gray-800/50 backdrop-blur-md'
              : 'text-gray-500 dark:text-gray-400',
            ]"
            :to="item.to"
            class="flex items-center rounded-full border px-4 py-1 transition-all duration-300 ease-in-out border-transparent
             hover:border-gray-300 dark:hover:border-gray-600
               dark:hover:bg-gray-800
               hover:text-gray-900 dark:hover:text-gray-100
                hover:backdrop-blur-md sm:px-6"
          >
            <UIcon
              :name="item.icon"
              class="text-gray-500 dark:text-gray-400 size-7 font-light sm:size-6"
            />
          </NuxtLink>
        </nav>
      </SpotlightButton>
    </header>
  </div>
</template>
