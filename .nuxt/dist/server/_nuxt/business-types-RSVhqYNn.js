import { s as storeToRefs, h as useAppStore, j as __nuxt_component_0 } from "../server.mjs";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { ref, withAsyncContext, computed, useSSRContext } from "vue";
import "hookable";
import { u as useHead } from "./index-S1hhTCs3.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useBusinessTypeStore } from "./business-types-8YqDhEuJ.js";
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
  __name: "business-types",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { replaceObjectEmptyStrings, filterDataPerField } = useHelpers();
    storeToRefs(useAppStore());
    const { getBusinessTypes, createType, updateType, deleteType } = useBusinessTypeStore();
    const data = ref(([__temp, __restore] = withAsyncContext(() => getBusinessTypes()), __temp = await __temp, __restore(), __temp));
    computed(() => {
      return filterDataPerField(data.value, search.value);
    });
    const search = ref("");
    ref(false);
    ref(false);
    ref(null);
    ref({
      business_type: ""
    });
    ref(false);
    useHead({
      title: "Business types' list"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/business-types.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=business-types-RSVhqYNn.js.map
