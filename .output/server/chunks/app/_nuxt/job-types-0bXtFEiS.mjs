import { s as storeToRefs, h as useAppStore, j as __nuxt_component_0$1 } from '../server.mjs';
import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { ref, withAsyncContext, computed, useSSRContext } from 'vue';
import { u as useHead } from './index-S1hhTCs3.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useJobTypeStore } from './job-types-bFYimokk.mjs';
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
  __name: "job-types",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { replaceObjectEmptyStrings, filterDataPerField } = useHelpers();
    storeToRefs(useAppStore());
    const { getJobTypes, createType, updateType, deleteType } = useJobTypeStore();
    const data = ref(([__temp, __restore] = withAsyncContext(() => getJobTypes()), __temp = await __temp, __restore(), __temp));
    computed(() => {
      return filterDataPerField(data.value, search.value);
    });
    const search = ref("");
    ref(false);
    ref(false);
    ref(null);
    ref({
      job_type: ""
    });
    ref(false);
    useHead({
      title: "Job types' list"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/job-types.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=job-types-0bXtFEiS.mjs.map
