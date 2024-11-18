<script setup lang="ts">
const { locale } = useI18n();

const { data: projects } = await useAsyncData(
  'projects',
  () => queryContent('/projects').locale(locale.value).sort({ release: -1 }).find(),
  { watch: [locale] }
);
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <!-- Section Title -->
    <h1 class="font-newsreader italic text-center text-4xl text-gray-900 dark:text-gray-100">
      <ContentSlot :use="$slots.title" />
    </h1>

    <!-- Section Subtitle -->
    <h2 class="text-center text-lg font-extralight italic text-gray-600 dark:text-gray-400">
      <ContentSlot :use="$slots.subtitle" />
    </h2>

    <!-- Divider -->
    <Divider class="mb-8 mt-2" />

    <!-- Project Cards -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project
      />
    </div>
  </section>
</template>
