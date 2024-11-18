<script setup lang="ts">
const { locale } = useI18n()

const { data: projects } = await useAsyncData('projects', () => queryContent('/projects').locale(locale.value).sort({ release: -1 }).find(), {
  watch: [locale],
})
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <!-- Updated for light/dark text color -->
    <h3 class="font-newsreader italic text-white-shadow dark:text-white text-xl">
      {{ $t("navigation.works") }}
    </h3>
    <div class="flex w-full flex-col gap-4">
      <NuxtLink
        v-for="project in projects?.filter((work) => work.featured)"
        :key="project.name"
        role="link"
        class="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 hover:bg-secondary hover:text-main"
        :to="project.release === 'soon' ? '/' : project.link"
        :aria-label="'go to ' + project.name + ' project website'"
        :target="project.release === 'soon' ? '_self' : '_blank'"
      >
        <span class="whitespace-nowrap text-muted dark:text-gray-300">
          {{ project.name }}
        </span>
        <div class="mx-2 h-[0.1px] w-full bg-slate-700 dark:bg-gray-700" />
        <span class="whitespace-nowrap text-muted dark:text-gray-400">
          {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
        </span>
      </NuxtLink>
    </div>
    <div @click="useRouter().push('/works')">
      <span class="font-newsreader italic text-white-shadow dark:text-white cursor-pointer text-sm">
        {{ $t("global.see_more") }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
