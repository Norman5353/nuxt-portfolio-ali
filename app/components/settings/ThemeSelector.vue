<script setup>
import { computed } from 'vue'
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

const themes = [
  { code: 'dark', name: 'Dark' },
  { code: 'light', name: 'Light' },
]

const currentTheme = computed(() => {
  return themes.find(theme => theme.code === colorMode.value)
})

const switchTheme = (theme) => {
  if (theme === colorMode.value) return
  colorMode.value = theme
  colorMode.preference = theme

  // Persist the theme in localStorage
  localStorage.setItem('theme', theme)

  // Add the corresponding class to the html element
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }
}

function startViewTransition(theme) {
  if (!document.startViewTransition || window.innerWidth < 768) {
    switchTheme(theme)
    return
  }
  document.startViewTransition(() => switchTheme(theme))
}
</script>

<template>
  <div
    class="z-99 flex items-center gap-3 rounded-lg border border-white/10 bg-zinc-900/90 px-3 py-1 backdrop-blur-xl"
  >
    <ClientOnly>
      <div
        v-for="theme in themes"
        :key="theme.code"
        class="cursor-pointer select-none"
        @click="startViewTransition(theme.code)"
      >
        <span
          class="font-semibold"
          :class="theme.code === currentTheme.code ? 'text-white' : 'text-gray-500'"
        >
          {{ theme.name }}
        </span>
      </div>
      <template #fallback>
        <div class="h-2 w-5" />
      </template>
    </ClientOnly>
  </div>
</template>

<style>
/* Dark/Light reveal effect */
::view-transition-group(root) {
  animation-duration: 1.5s;
}
::view-transition-new(root),
::view-transition-old(root) {
  mix-blend-mode: normal;
}

::view-transition-new(root) {
  animation-name: reveal-light;
}

::view-transition-old(root),
.dark::view-transition-old(root) {
  animation: none;
}
.dark::view-transition-new(root) {
  animation-name: reveal-dark;
}

@keyframes reveal-dark {
  from {
    clip-path: polygon(-30% 0, -30% 0, -15% 100%, -10% 115%);
  }
  to {
    clip-path: polygon(-30% 0, 130% 0, 115% 100%, -10% 115%);
  }
}

@keyframes reveal-light {
  from {
    clip-path: polygon(130% 0, 130% 0, 115% 100%, 110% 115%);
  }
  to {
    clip-path: polygon(130% 0, -30% 0, -15% 100%, 110% 115%);
  }
}
</style>
