<script setup lang="ts">
import type { PropType } from 'vue'
import type { Stack } from '~/data/stack'
import type { enough } from '~/data/enough'
import type { used } from '~/data/used'

defineProps({
  stack: {
    type: String as PropType<'development' | 'productivity' | 'design'>,
    required: true,
  },
  items: {
    type: Array as PropType<Stack[]>,
    required: true,
  },
  enough: {
    type: String as PropType<'development' | 'productivity' | 'design'>,
    required: true,
  },
  enoughItems: {
    type: Array as PropType<enough[]>,
    required: true,
  },
  used: {
    type: String as PropType<'development' | 'productivity' | 'design'>,
    required: true,
  },
  usedItems: {
    type: Array as PropType<used[]>,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <h4 class="font-newsreader italic text-white-shadow text-2xl font-bold">
      {{ $t(`tags.${stack}`) }}
    </h4>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <AboutStackItem
        v-for="item in items"
        :key="item.name"
        :item
      />
    </div>
  </div>
  <!-- enoughStack -->
  <div class="flex flex-col gap-3">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <AboutStackItem
        v-for="item in enoughItems"
        :key="item.name"
        :item
      />
    </div>
  </div>
  <!-- usedStack -->
  <div class="flex flex-col gap-3">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <AboutStackItem
        v-for="item in usedItems"
        :key="item.name"
        :item
      />
    </div>
  </div>
</template>

<style scoped></style>
