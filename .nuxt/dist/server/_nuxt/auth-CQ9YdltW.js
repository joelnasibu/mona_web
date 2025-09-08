import { aC as defineNuxtRouteMiddleware, s as storeToRefs, h as useAppStore } from "../server.mjs";
import "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "@vue/devtools-api";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "vue/server-renderer";
const auth = defineNuxtRouteMiddleware((to, from) => {
  storeToRefs(useAppStore());
});
export {
  auth as default
};
//# sourceMappingURL=auth-CQ9YdltW.js.map
