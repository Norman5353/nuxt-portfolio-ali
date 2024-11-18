<script setup lang="ts">
import type { PropType } from 'vue';
import type { Question } from '~/types/Faq';

defineProps({
  questions: {
    type: Object as PropType<Question[]>,
    required: true,
  },
});
</script>

<template>
  <FaqGroup class="select-none space-y-5">
    <FaqItem
      v-for="question in questions"
      :key="question.title"
      v-slot="{ isActive, toggle }"
      class="group transform-gpu rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 transition duration-500 will-change-transform hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <!-- Question Header -->
      <div
        class="flex cursor-pointer items-center p-4"
        @click="toggle"
      >
        <div class="text-gray-700 dark:text-gray-300 transition group-hover:text-gray-900 dark:group-hover:text-gray-100">
          {{ question.title }}
        </div>

        <!-- Toggle Icon -->
        <div class="relative ml-auto">
          <span
            class="i-heroicons-x-mark size-6 transform-gpu text-gray-500 dark:text-gray-400 transition-transform duration-500 will-change-transform"
            :class="{ 'rotate-180': isActive, 'rotate-45': !isActive }"
          />
        </div>
      </div>

      <!-- Question Content -->
      <FaqContent class="transform-gpu overflow-hidden px-4 transition-all duration-500 will-change-[height]">
        <p class="pb-4 font-extralight leading-relaxed tracking-wide text-gray-600 dark:text-gray-400">
          {{ question.answer }}
        </p>
      </FaqContent>
    </FaqItem>
  </FaqGroup>
</template>

<style scoped></style>
