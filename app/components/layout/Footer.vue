<script setup lang="ts">
const { footerName } = useAppConfig()
</script>

<template>
  <div class="mt-6 pb-20">
    <Divider />
    <footer class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6">
      <Logo :size="8" />
      <span class="text-center text-sm text-muted dark:text-white">
        © {{ new Date().getFullYear() }}, {{ footerName }} - {{ $t("global.all_rights_reserved") }}.
      </span>

      <!-- social -->
      <HomeSocial
        style="--stagger: 3"
        data-animate
      />
    </footer>
  </div>
</template>
