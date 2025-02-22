// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Convertimg - A simple app to convert image to another image format online for free',
      meta: [
        { name: 'og:title', content: 'Convertimg' },
        { name: 'og:description', content: 'A simple app to convert image to another image format online for free' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
