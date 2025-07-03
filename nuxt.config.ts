// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon"],
  ssr: false,

  app: {
    head: {
      meta: [
        { charset: "UTF-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          property: "og:site_name",
          content: "Foursquare Gospel Church Jebako",
        },
        { property: "og:title", content: "Foursquare Gospel Church Jebako" },
        {
          property: "og:description",
          content:
            "Welcome to The city on The Hill. We are glad to have you join us.",
        },
      ],
      link: [
        { rel: "icon", title: "image/x-icon", href: "./favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans&family=Poppins:wght@400;500;700;800&family=Rubik&family=Source+Sans+Pro&display=swap",
        },
      ],
    },
  },

  css: ["@/assets/css/main.less"],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import './assets/css/theme.less';`,
        },
      },
    },
  },

  nitro: {
    static: true,
    prerender: {
      crawlLinks: true,
    },
  },
  build: {
    transpile: ["nuxt-icon"],
  },
});
