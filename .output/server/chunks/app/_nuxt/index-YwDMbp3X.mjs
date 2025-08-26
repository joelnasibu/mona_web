import { m as useDevice, j as __nuxt_component_0$1 } from '../server.mjs';
import { ref, provide, useSSRContext } from 'vue';
import { u as useHead } from './index-S1hhTCs3.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useProductStore } from './products-ShlXA7WH.mjs';
import { u as useCategoryStore } from './categories-OjbYYiNy.mjs';
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
import './useHelpers-kUuDaVs4.mjs';
import 'date-fns';
import 'date-fns/locale';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useDevice();
    useProductStore();
    const data = ref([]);
    const featuredProductsList = ref([]);
    const popularProductsList = ref([]);
    const recommendedProductsList = ref([]);
    useCategoryStore();
    const listCategories = ref([]);
    provide("categoriesList", listCategories);
    provide("productsList", data);
    provide("featuredProductsList", featuredProductsList);
    provide("popularProductsList", popularProductsList);
    provide("recommendedProductsList", recommendedProductsList);
    useHead({
      title: "Home"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-YwDMbp3X.mjs.map
