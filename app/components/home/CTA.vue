<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 sm:gap-2">
    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2">
      <UTooltip
        :text="$t('global.email')"
        :shortcuts="['⌘', 'O']"
      >
        <SpotlightButton>
          <NuxtLink
            class="font-mona relative flex items-center justify-center gap-2
            bg-gradient-to-b from-gray-800/25 to-gray-800 text-gray-100 bg-clip-text text-lg
            font-medium text-transparent transition-all duration-200
             dark:from-gray-200/25 dark:to-gray-200"
            to="/contact"
          >
            {{ $t("global.contact") }}
            <UIcon
              name="heroicons-envelope"
              class="size-5 text-white/80 dark:text-white/60 transition-all duration-300"
              aria-hidden="true"
            />
          </NuxtLink>
        </SpotlightButton>
      </UTooltip>
      <MeetingButton />
    </div>
  </div>
</template>

<style scoped></style>
