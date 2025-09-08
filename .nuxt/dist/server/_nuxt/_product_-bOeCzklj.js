import { l as useRoute, u as useRouter, j as __nuxt_component_0 } from "../server.mjs";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { ref, withAsyncContext, computed, watch, useSSRContext } from "vue";
import { u as useHead } from "./index-S1hhTCs3.js";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useCategoryStore } from "./categories-JvrMV5cl.js";
import { u as useProductStore } from "./products-e11RfeWn.js";
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
import "date-fns";
import "date-fns/locale";
const _sfc_main = {
  __name: "[product]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { destructureSanitizedTitle, capitalizeFirstLetter, filterDataPerField } = useHelpers();
    const route = useRoute();
    const router = useRouter();
    const productParam = route.params.product;
    if (!route.query.view)
      router.push({ query: { view: "list" } });
    const { getCategoriesByType } = useCategoryStore();
    ref(([__temp, __restore] = withAsyncContext(() => getCategoriesByType(false, "SHOP")), __temp = await __temp, __restore(), __temp));
    const { publishedProducts } = useProductStore();
    const products = ref(([__temp, __restore] = withAsyncContext(() => publishedProducts()), __temp = await __temp, __restore(), __temp));
    computed(() => {
      let filtered = filterDataPerField(products.value, productParam);
      return {
        all: filtered,
        deals: filtered.filter((item) => item.discount > 0)
      };
    });
    const listView = ref(route.query.view === "list");
    watch(
      () => listView.value,
      (val) => {
        router.push({
          query: { view: val ? "list" : "grid" }
        });
      }
    );
    useHead({
      title: `Product matching ${productParam}`
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/[product].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_product_-bOeCzklj.js.map
