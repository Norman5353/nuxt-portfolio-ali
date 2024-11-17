<template>
  <div>
    <div>
      <SettingsThemeSelector class="fixed top-30 right-3 z-50 sm:bottom-4" />
      <SettingsLanguageToggle class="fixed top-1 right-1 z-50 sm:top-4" />
      <LayoutNavbar class="fixed bottom-0 z-50 flex sm:bottom-auto sm:top-0" />
      <div class="sm:mt-[50px]">
        <slot />
      </div>
      <LayoutFooter />
    </div>
  </div>
</template>
