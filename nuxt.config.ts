// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  runtimeConfig: {
    database: {
      url: process.env.NUXT_DATABASE_URL
    },
    session: {
      secret: process.env.NUXT_SESSION_SECRET
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'radix-vue/nuxt'],
  components: [
    {
      path: "~/components/ui",
      extensions: [".vue"],
      prefix: "",
    }
  ],
})
