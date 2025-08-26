import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "admin" | "default" | "jobs" | "landing" | "profile"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}