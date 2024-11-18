<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="path"
    :aria-label="title"
    class="flex cursor-pointer flex-col gap-2"
  >
    <!-- Image Wrapper -->
    <div
      class="overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 shadow-md transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-600"
    >
      <NuxtImg
        width="1536"
        :alt="`${title} article image`"
        class="h-64 w-full object-cover transition-transform duration-200 hover:scale-105"
        :src="image"
        :aria-label="`${title} article image`"
      />
    </div>

    <!-- Article Details -->
    <div class="flex flex-col">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {{ title }}
      </h3>
      <span class="text-xs text-gray-600 dark:text-gray-400">{{ date }}</span>
    </div>
  </NuxtLink>
</template>
