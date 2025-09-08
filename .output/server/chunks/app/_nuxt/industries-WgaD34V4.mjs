import { s as storeToRefs, h as useAppStore, j as __nuxt_component_0$1 } from '../server.mjs';
import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { ref, withAsyncContext, computed, watchEffect, useSSRContext } from 'vue';
import { u as useHead } from './index-S1hhTCs3.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useIndustriestore } from './industries-lHfxNRn7.mjs';
import { u as useCategoryStore } from './categories-JvrMV5cl.mjs';
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
  __name: "industries",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { replaceObjectEmptyStrings, filterDataPerField, getDetails } = useHelpers();
    storeToRefs(useAppStore());
    const { getIndustries, createIndustry, updateIndustry, deleteIndustry } = useIndustriestore();
    const data = ref(([__temp, __restore] = withAsyncContext(() => getIndustries(true)), __temp = await __temp, __restore(), __temp));
    computed(() => {
      return filterDataPerField(data.value, search.value);
    });
    const { getCategories } = useCategoryStore();
    const categories = ref([]);
    const loadData = ref(false);
    const getData = async () => {
      loadData.value = true;
      categories.value = await getCategories(false);
      loadData.value = false;
    };
    watchEffect(() => {
      getData();
    });
    computed(() => {
      return categories.value.map((c) => c.category);
    });
    ref("");
    computed(() => {
      return [
        "ALL",
        ...new Set(
          data.value.map(
            (c) => {
              var _a;
              return (_a = getDetails(categories.value, c.categoryId)) == null ? void 0 : _a.category;
            }
          )
        )
      ];
    });
    ref("ALL");
    const search = ref("");
    ref(false);
    ref(false);
    ref(null);
    ref({
      industry: ""
      //   categoryId: 0,
    });
    ref(false);
    useHead({
      title: "Industries' list"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/industries.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=industries-WgaD34V4.mjs.map
