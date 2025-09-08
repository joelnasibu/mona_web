import { aC as defineNuxtRouteMiddleware, aD as executeAsync, b as navigateTo } from "../server.mjs";
import { ref } from "vue";
import { u as useBusinessStore } from "./business-1K3_QQBT.js";
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
import "./useHelpers-9BVYUhTt.js";
import "date-fns";
import "date-fns/locale";
const businessCreate = defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  const { getVendorBusinesses } = useBusinessStore();
  let hasBusiness = ref([]);
  hasBusiness.value = ([__temp, __restore] = executeAsync(() => getVendorBusinesses()), __temp = await __temp, __restore(), __temp);
  if (!hasBusiness.value)
    return;
  if (hasBusiness.value.length == 0 && to.name !== "admin-businesses-create") {
    return navigateTo({ name: "admin-businesses-create" });
  }
});
export {
  businessCreate as default
};
//# sourceMappingURL=businessCreate-wlJ1aOS7.js.map
