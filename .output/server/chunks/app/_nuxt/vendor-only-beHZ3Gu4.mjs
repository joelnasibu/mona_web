import { aC as defineNuxtRouteMiddleware, h as useAppStore } from '../server.mjs';
import 'vue';
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

const vendorOnly = defineNuxtRouteMiddleware((to, from) => {
  useAppStore();
});

export { vendorOnly as default };
//# sourceMappingURL=vendor-only-beHZ3Gu4.mjs.map
