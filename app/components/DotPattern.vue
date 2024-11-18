<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

defineProps({
  size: {
    type: Number,
    default: 16,
  },
  radius: {
    type: Number,
    default: 1,
  },
  offsetX: {
    type: Number,
    default: 0,
  },
  offsetY: {
    type: Number,
    default: 0,
  },
})

const colorMode = useColorMode()
const patternFill = computed(() =>
  colorMode.value === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
)
</script>

<template>
  <svg
    class="w-full h-full absolute inset-0"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin slice"
  >
    <defs>
      <pattern
        id="dot-pattern"
        :width="size"
        :height="size"
        patternUnits="userSpaceOnUse"
      >
        <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="radius"
          :fill="patternFill"
        />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      fill="url(#dot-pattern)"
    />
  </svg>
</template>
