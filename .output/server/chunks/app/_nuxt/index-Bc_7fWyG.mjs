import { _ as _export_sfc, m as useDevice, j as __nuxt_component_0$1 } from '../server.mjs';
import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { ref, withAsyncContext, provide, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useJobStore } from './jobs-uJv1lqGQ.mjs';
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
  async setup(__props) {
    let __temp, __restore;
    const { dateDifference, filterDataPerField, capitalizeFirstLetter } = useHelpers();
    useDevice();
    const { publishedJobs } = useJobStore(), data = ref(([__temp, __restore] = withAsyncContext(() => publishedJobs()), __temp = await __temp, __restore(), __temp));
    provide("publishedJobs", data);
    ref([
      {
        name: "Job type",
        value: "Any",
        list: [
          "Any",
          ...new Set(data.value.map((j) => capitalizeFirstLetter(j.jobtype)))
        ]
      },
      {
        name: "Industry",
        value: "Any",
        list: [
          "Any",
          ...new Set(data.value.map((j) => capitalizeFirstLetter(j.industry)))
        ]
      },
      {
        name: "Location",
        value: "Any",
        list: [
          "Any",
          ...new Set(data.value.map((j) => capitalizeFirstLetter(j.location)))
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6549be79"]]);

export { index as default };
//# sourceMappingURL=index-Bc_7fWyG.mjs.map
