import { m as useDevice, j as __nuxt_component_0 } from "../server.mjs";
import { ref, provide, useSSRContext } from "vue";
import { u as useHead } from "./index-S1hhTCs3.js";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useProductStore } from "./products-e11RfeWn.js";
import { u as useCategoryStore } from "./categories-JvrMV5cl.js";
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
import "./useHelpers-9BVYUhTt.js";
import "date-fns";
import "date-fns/locale";
const _sfc_main = {
  __name: "index-old",
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
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index-old.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-old-4Ld5y6ts.js.map
