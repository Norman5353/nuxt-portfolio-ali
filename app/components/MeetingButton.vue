<!-- eslint-disable @stylistic/quotes -->
<script setup lang="ts">
const meetingLink = useRuntimeConfig().public.meetingLink
console.log("🚀 ~ meetingLink:", meetingLink)
</script>

<template>
  <div class="flex gap-4 sm:gap-2">
    <SpotlightButton>
      <NuxtLink
        class="font-mona relative flex items-center justify-center gap-2
        bg-gradient-to-b from-gray-800/25 to-gray-800 text-gray-100 bg-clip-text
        text-lg font-medium text-transparent transition-all duration-200
         dark:from-gray-200/25 dark:to-gray-200"
        :to="meetingLink"
      >
        {{ $t("global.meeting") }}
        <UIcon
          name="heroicons:calendar-days"
          class="size-5 text-white/80 dark:text-white/60 transition-all duration-300"
        />
      </NuxtLink>
    </SpotlightButton>
  </div>
</template>

<style scoped></style>
