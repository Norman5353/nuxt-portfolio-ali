<script setup lang="ts">
const isScrolling = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolling.value = window.scrollY > 0
  })
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="fixed bottom-36 right-3 z-50 sm:bottom-20">
    <SpotlightButton
      aria-label="scroll to top button"
      class="flex size-10 items-center justify-center p-1 transition-all duration-200
        text-gray-500 dark:text-gray-400
        hover:text-gray-900 dark:hover:text-gray-100
        bg-gray-100 dark:bg-gray-800
        hover:bg-gray-200 dark:hover:bg-gray-700
        shadow-md dark:shadow-none"
      rounded
      :class="{ 'opacity-100': isScrolling, 'opacity-0': !isScrolling }"
      @click="scrollToTop"
    >
      <UIcon
        name="heroicons-arrow-up"
        class="z-20 size-6 text-gray-500 dark:text-gray-400"
      />
    </SpotlightButton>
  </div>
</template>


<style scoped></style>
