import { s as storeToRefs, h as useAppStore, j as __nuxt_component_0$1 } from '../server.mjs';
import { u as useHelpers } from './useHelpers-kUuDaVs4.mjs';
import { ref, computed, useSSRContext } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useBusinessStore } from './business-xWrgr4rc.mjs';
import { u as useProductStore } from './products-ShlXA7WH.mjs';
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
import 'date-fns';
import 'date-fns/locale';

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
      var _a;
      return business.value.name !== "ALL BUSINESSES" ? filterDataPerField(data.value, search.value, {
        isPublished: status.value,
        businessId: (_a = business.value.code) != null ? _a : ""
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
      const _component_ClientOnly = __nuxt_component_0$1;
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

export { _sfc_main as default };
//# sourceMappingURL=index-bbZPjsLv.mjs.map
