// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Convertimg - A free, simple and open source image converter',
      meta: [
        { name: 'og:title', content: 'Convertimg' },
        { name: 'og:description', content: 'A free, simple and open source image converter' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
