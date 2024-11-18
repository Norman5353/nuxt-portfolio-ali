<template>
  <div class="relative w-full h-full min-h-screen">
    <Html
      :lang="$i18n.locale"
      class="transition-colors duration-300"
      :class="{
        'bg-zinc-950 text-main': colorMode === 'dark',
        'bg-white text-zinc-800': colorMode === 'light',
      }"
    >
      <!-- Background Pattern -->
      <DotPattern
        class="absolute inset-0 -z-10"
        :fill="colorMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'"
      />

      <Body>
        <LayoutScrollToTop />
        <NuxtLayout>
          <ContentQuery
            v-slot="{ data }"
            :path="$route.path"
            :locale="locale"
            find="one"
          >
            <ContentRenderer :value="data" />
          </ContentQuery>
        </NuxtLayout>
        <Toaster close-button />
      </Body>
    </Html>
  </div>
</template>
