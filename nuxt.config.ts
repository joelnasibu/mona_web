// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/vuetify.css', '~/assets/css/admin.css'],
  site: {
    url: 'https://acces-global.com',
    name: process.env.VITE_APP_NAME,
    description: 'Description',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  app: {
    head: {
      title: process.env.VITE_APP_NAME,
      charset: 'utf-8',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon/favicon.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/favicon/favicon-16x16.png', sizes: '16x16' },
      ],
      meta: [
        { name: 'theme-color', content: '#032f46' },
        { name: 'keywords', content: 'e-commerce, e commerce, job, searching job, ' },
        { name: 'description', content: 'Skill up description' },
        { name: 'author', content: 'MijiniTech' },
        { name: 'copyright', content: process.env.VITE_APP_NAME },
        { name: 'application-name', content: process.env.VITE_APP_NAME },
        { name: 'language', content: 'EN' },
        { name: 'robots', content: 'index' }, //only index the first page 
        { name: 'distribution', content: 'local' },


        //social media sharings
        { property: 'og:site:name', content: process.env.VITE_APP_NAME },
        { property: 'og:title', content: process.env.VITE_APP_NAME },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://preview-skillup.web.app' },
        { property: 'og:image', content: 'https://preview-skillup.web.app/logos/fav-card.png' },
        { property: 'og:description', content: 'Skill up description' },

        { name: 'twitter:title', content: process.env.VITE_APP_NAME },
        { name: 'twitter:description', content: 'Skill up description' },
        { name: 'twitter:image', content: 'https://preview-skillup.web.app/logos/fav-card.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        // {name:'twitter:site', content:'@Jccdigitaltax'},
      ]
    },


  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Nunito: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      }

    }],
    //...
    [
      '@pinia/nuxt', {
        autoImports: [
          'defineStore',
          'acceptHMRUpdate'
        ],
      },
    ],
    'nuxt-icon',
    '@nuxtjs/device',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-aos',
    ['@nuxtjs/algolia', {
      apiKey: 'a5c55e0cbb406f9135471932b642cce4',
      applicationId: 'NHGNJYYIQL'
      //     ALGOLIA_APPLICATION_ID =NHGNJYYIQL
      // ALGOLIA_API_KEY =a5c55e0cbb406f9135471932b642cce4
      // ALGOLIA_INDEX=dev_skillup
    }],
    // 'nuxt-socket.io'
  ],
  // io: {
  //   // module options
  //   sockets: [{
  //     url: process.env.VITE_API_URL,
  //     name: 'chat',
  //   }]
  // },
  plugins: [
    { src: "@/plugins/flag-icon.client", ssr: false, mode: "client" },
    { src: "@/plugins/socket", ssr: false, mode: "client" },
    { src: '~/plugins/apexcharts', mode: 'client' },
  ],
  aos: {
    once: false,
    // mirror: true
  },

  googleFonts: {

    download: false,
    useStylesheet: true,
  },
  imports: {
    dirs: ['stores', 'utils'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  nitro: {
    firebase: {
      gen: 2,
      httpsOptions: {
        region: 'europe-west1',
        maxInstances: 3,
      },
    },
  },
  runtimeConfig: {
    public: {
      app_name: process.env.VITE_APP_NAME ?? 'Smartsell',
    }
  },
  routeRules: {
    '/profile': { redirect: '/profile/main' },
  },
  //   devServer: {
  //     https: false,
  //     port: 8000,
  //     host: 'localhost'
  //   }
})
