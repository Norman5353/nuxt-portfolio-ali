<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  experiences: {
    type: Object as PropType<{ title: string, date: string, company: string }[]>,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <!-- Section Title -->
    <h3 class="text-lg text-gray-700 dark:text-gray-300">
      {{ $t("global.experiences") }}
    </h3>

    <!-- Experiences Container -->
    <div class="flex flex-col gap-4">
      <div
        v-for="experience in experiences"
        :key="experience.title"
      >
        <!-- Experience Title -->
        <h4 class="font-semibold text-gray-900 dark:text-gray-100">
          {{ experience.title }}
        </h4>

        <!-- Experience Details -->
        <div class="flex gap-1 text-gray-600 dark:text-gray-400">
          <p>
            {{ experience.date }}
          </p>
          <span class="mx-1"> / </span>
          <p>
            {{ experience.company }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
