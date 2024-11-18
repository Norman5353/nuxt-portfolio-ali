<script setup lang="ts">
import type { Article } from "~/types/Article";

const { locale } = useI18n();

const searchedTags = ref<string[]>([]);
const searchedTitle = ref("");
const showSearch = ref(false);

const { data } = await useAsyncData(
  "articles",
  () =>
    queryContent("/articles").locale(locale.value).sort({ date: -1 }).find(),
  { watch: [locale] }
);

const articles = computed(() => data.value as Article[]);
const tags = computed(() =>
  Array.from(new Set(articles.value.flatMap((article) => article.tags)))
);

const filteredArticles = computed(() =>
  articles.value.filter(
    (article) =>
      (searchedTags.value.length === 0 ||
        searchedTags.value.some((tag) => article.tags.includes(tag))) &&
      (searchedTitle.value === "" ||
        article
          .title!.toLowerCase()
          .includes(searchedTitle.value.toLowerCase()))
  )
);

const toggleTag = (tag: string) => {
  searchedTags.value = searchedTags.value.includes(tag)
    ? searchedTags.value.filter((t) => t !== tag)
    : [...searchedTags.value, tag];
};
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <!-- Section Title -->
    <h1
      class="font-newsreader italic text-center text-4xl text-gray-900 dark:text-gray-100"
    >
      <ContentSlot :use="$slots.title" />
    </h1>

    <!-- Section Subtitle -->
    <h2
      class="text-center text-lg font-extralight italic text-gray-600 dark:text-gray-400"
    >
      <ContentSlot :use="$slots.subtitle" />
    </h2>

    <Divider class="mb-8 mt-2" />

    <!-- Search Toggle -->
    <div :class="showSearch ? '' : 'mb-3'">
      <span
        class="font-newsreader italic cursor-pointer select-none text-lg text-gray-900 dark:text-gray-100"
        @click="showSearch = !showSearch"
      >
        {{ showSearch ? $t("writing.hide_search") : $t("writing.show_search") }}
      </span>
    </div>

    <!-- Search Inputs -->
    <div v-if="showSearch" class="mb-4 flex flex-col gap-2">
      <div class="my-4">
        <UInput
          v-model="searchedTitle"
          variant="none"
          class="w-full sm:w-96"
          :placeholder="$t('writing.search_article')"
        />
      </div>
      <div v-if="tags.length > 0" class="mb-4 flex flex-wrap gap-2">
        <div
          v-for="tag of tags"
          :key="tag"
          class="hover:text-shadow-md flex cursor-pointer select-none items-center rounded-md px-2 py-1 text-xs text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 transition-colors duration-100 text-shadow-sm hover:bg-gray-300 dark:hover:bg-gray-600 sm:text-sm"
          :class="{
            'bg-gray-300 dark:bg-gray-600': searchedTags.includes(tag),
          }"
          @click="toggleTag(tag)"
        >
          <div class="font-extralight">{{ tag }}</div>
        </div>
      </div>
    </div>

    <!-- Articles -->
    <TransitionGroup
      v-if="filteredArticles.length"
      name="list"
      tag="ul"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <li v-for="article of filteredArticles" :key="article._path">
        <ArticleCard
          :title="article.title!"
          :date="article.date"
          :image="article.image"
          :path="article._path!"
        />
      </li>
    </TransitionGroup>

    <!-- No Articles Found -->
    <div v-else class="flex h-64 flex-col items-center justify-center gap-2">
      <span class="text-2xl text-gray-900 dark:text-gray-100">
        {{ $t("writing.not_found") }}
      </span>
      <span class="text-sm text-gray-600 dark:text-gray-400">
        {{ $t("writing.not_found_description") }}
      </span>
    </div>
  </section>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
