<script setup lang="ts">
const socialMediaRegexMap = [
  { regex: /github\.com/, name: 'GitHub', logo: 'SvgoGithub' },
  { regex: /linkedin\.com/, name: 'LinkedIn', logo: 'SvgoLinkedin' },
  { regex: /instagram\.com/, name: 'Instagram', logo: 'SvgoInstagram' },
  { regex: /spotify\.com/, name: 'Spotify', logo: 'SvgoSpotify' },
  { regex: /t\.me/, name: 'Telegram', logo: 'SvgoTelegram' },
  { regex: /wa\.me/, name: 'Whatsapp', logo: 'SvgoWhatsapp' },
  { regex: /bento\.me/, name: 'Bento', logo: 'SvgoBento' },
]

const { socials } = useAppConfig()
const mappedSocials = Object.values(socials).map((link) => {
  const foundSocial = socialMediaRegexMap.find(social => social.regex.test(link))
  if (!foundSocial) throw new Error(`No social media found for link: ${link}`)
  const { name, logo } = foundSocial
  return { name, link, logo }
})
</script>

<template>
  <div class="my-7 flex items-center justify-center gap-6 sm:gap-10">
    <NuxtLink
      v-for="social in mappedSocials"
      :key="social.name"
      :to="social.link"
      target="_blank"
      class="flex items-center justify-center"
      :aria-label="'Go to ' + social.name + ' profile'"
    >
      <component
        :is="social.logo"
        class="social-item size-6 sm:size-8 text-muted dark:text-gray-300 transition-all duration-300 hover:text-main dark:hover:text-white hover:scale-110 "
        :font-controlled="false"
        :alt="social.name + ' logo'"
        :aria-label="social.name + ' logo'"
      />
    </NuxtLink>
  </div>
</template>
