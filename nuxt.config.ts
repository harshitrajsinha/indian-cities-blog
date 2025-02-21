// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],
  icon: {
    serverBundle: {
      collections: ["uil", "mdi"],
    },
  },
  image: {
    format: ["webp"],
    densities: [1],
  },
});
