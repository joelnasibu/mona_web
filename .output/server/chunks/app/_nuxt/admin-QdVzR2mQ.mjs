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

const admin = defineNuxtRouteMiddleware((to, from) => {
  useAppStore();
});

export { admin as default };
//# sourceMappingURL=admin-QdVzR2mQ.mjs.map
