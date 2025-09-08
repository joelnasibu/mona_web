import { aC as defineNuxtRouteMiddleware, aD as executeAsync, b as navigateTo } from '../server.mjs';
import { ref } from 'vue';
import { u as useBusinessStore } from './business-1K3_QQBT.mjs';
import '../../nitro/firebase-gen-2.mjs';
import 'firebase-functions/v2/https';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@algolia/cache-in-memory';
import 'pinia-plugin-persistedstate';
import 'vue/server-renderer';
import './useHelpers-9BVYUhTt.mjs';
import 'date-fns';
import 'date-fns/locale';

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

export { businessCreate as default };
//# sourceMappingURL=businessCreate-wlJ1aOS7.mjs.map
