export default defineAppConfig({
  appName: 'Ali Arghyani Portfolio',
  appDescription: 'My portfolio built with Nuxt and Tailwind CSS. Made with ❤️ by AliArghyani',
  profilePicture: '/assets/AliProfile.webp',
  footerName: 'AliArghyani',
  email: 'aliarghyani@gmail.com',
  // twitterUsername: '@AliArghyani__',
  phone: '(+98) 912 322 0694',
  openGraphImage: 'https://canvas.hrcd.fr/social-preview.jpg',
  socials: {
    github: 'https://github.com/Norman5353',
    linkedin: 'https://www.linkedin.com/in/aliarghyani/',
    telegram: 'https://t.me/Ali_Argh',
    whatsapp: 'https://wa.me/00989123220694',
    spotify: 'https://open.spotify.com/user/aliarghyani?si=SwORhzxlQXKsWfA70soPqg',
    bento: 'https://bento.me/arghyani',
    instagram: 'https://www.instagram.com/ali.arghyani/profilecard/?igsh=MTJhdjZzd2R1emMyMg==',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
