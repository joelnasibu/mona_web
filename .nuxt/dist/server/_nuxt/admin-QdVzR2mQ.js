import { aC as defineNuxtRouteMiddleware, h as useAppStore } from "../server.mjs";
import "vue";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "vue/server-renderer";
const admin = defineNuxtRouteMiddleware((to, from) => {
  useAppStore();
});
export {
  admin as default
};
//# sourceMappingURL=admin-QdVzR2mQ.js.map
