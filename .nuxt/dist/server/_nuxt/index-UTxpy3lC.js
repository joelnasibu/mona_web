import { s as storeToRefs, h as useAppStore, j as __nuxt_component_0 } from "../server.mjs";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { ref, computed, useSSRContext } from "vue";
import "hookable";
import { a as useSeoMeta } from "./index-S1hhTCs3.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useBusinessStore } from "./business-1K3_QQBT.js";
import { u as useProductStore } from "./products-e11RfeWn.js";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { replaceObjectEmptyStrings, filterDataPerField } = useHelpers();
    storeToRefs(useAppStore());
    useBusinessStore();
    const businesses = ref([]);
    const business = ref({ name: "ALL BUSINESSES", id: 0 });
    computed(() => {
      let businessMap = businesses.value.map((c) => c.businessName);
      return ["ALL BUSINESSES", ...businessMap];
    });
    useProductStore();
    const data = ref([]);
    computed(() => {
      return business.value.name !== "ALL BUSINESSES" ? filterDataPerField(data.value, search.value, {
        isPublished: status.value,
        businessId: business.value.code ?? ""
      }) : filterDataPerField(data.value, search.value, {
        isPublished: status.value
      });
    });
    const search = ref("");
    const status = ref(true);
    ref(false);
    ref({});
    useSeoMeta({
      title: "Products"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-UTxpy3lC.js.map
