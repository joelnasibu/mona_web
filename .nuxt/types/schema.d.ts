import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["device"]?: typeof import("@nuxtjs/device").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["aos"]?: typeof import("nuxt-aos").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["algolia"]?: typeof import("@nuxtjs/algolia").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/device", Exclude<NuxtConfig["device"], boolean>] | ["@pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPersistedstate"], boolean>] | ["nuxt-aos", Exclude<NuxtConfig["aos"], boolean>] | ["@nuxtjs/algolia", Exclude<NuxtConfig["algolia"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   app_name: string,

   device: {
      enabled: boolean,

      defaultUserAgent: string,

      refreshOnResize: boolean,
   },

   persistedState: {
      storage: string,

      debug: boolean,

      cookieOptions: any,
   },

   aos: {
      once: boolean,
   },

   algolia: {
      apiKey: string,

      applicationId: string,

      lite: boolean,

      cache: boolean,

      instantSearch: boolean,

      docSearch: any,

      recommend: any,

      globalIndex: string,

      useFetch: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }