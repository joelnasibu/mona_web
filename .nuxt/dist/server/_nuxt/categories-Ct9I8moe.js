import { h as useAppStore, s as storeToRefs, j as __nuxt_component_0 } from "../server.mjs";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { ref, withAsyncContext, computed, useSSRContext } from "vue";
import "hookable";
import { u as useHead } from "./index-S1hhTCs3.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useCategoryStore } from "./categories-JvrMV5cl.js";
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
import "date-fns";
import "date-fns/locale";
const _sfc_main = {
  __name: "categories",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { replaceObjectEmptyStrings, filterDataPerField } = useHelpers();
    const appStore = useAppStore();
    storeToRefs(appStore);
    const { getCategories, createCategory, updateCategory, deleteCategory } = useCategoryStore();
    const data = ref(([__temp, __restore] = withAsyncContext(() => getCategories()), __temp = await __temp, __restore(), __temp));
    computed(() => {
      return type.value !== "ALL" ? filterDataPerField(data.value, search.value, {
        type: type.value
      }).sort((a, b) => a.category > b.category ? 1 : -1) : filterDataPerField(data.value, search.value);
    });
    const type = ref("ALL");
    const search = ref("");
    ref(false);
    ref(false);
    ref(null);
    ref({
      category: "",
      image: null,
      type: "SHOP"
    });
    ref(false);
    useHead({
      title: "Categories' list"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=categories-Ct9I8moe.js.map
