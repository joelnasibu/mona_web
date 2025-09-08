import { s as storeToRefs, h as useAppStore, j as __nuxt_component_0 } from "../server.mjs";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { ref, provide, computed, watchEffect, useSSRContext } from "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useBusinessStore } from "./business-1K3_QQBT.js";
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
    useHelpers();
    const { isVendor, currentUser } = storeToRefs(useAppStore());
    ref(["Daily", "Weekly", "Monthly", "Annually"]);
    const periodicity = ref("Daily");
    const period = ref(/* @__PURE__ */ new Date());
    provide("periodicity", periodicity);
    provide("period", period);
    const { getBusinesses } = useBusinessStore();
    const businesses = ref([]);
    const business = ref({ name: "ALL BUSINESSES", id: 0 });
    computed(() => {
      let businessMap = businesses.value.map((c) => c.businessName);
      return ["ALL BUSINESSES", ...businessMap];
    });
    provide("business", business);
    const getData = async () => {
      let allBusinesses = await getBusinesses(false);
      businesses.value = allBusinesses.filter(
        (i) => currentUser.value.accessLevel === 3 ? i.userId === currentUser.value.userId : i
      );
    };
    watchEffect(() => {
      getData();
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-8zgD4JI5.js.map
