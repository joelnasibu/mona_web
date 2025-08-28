import { l as useRoute, j as __nuxt_component_0$1 } from '../server.mjs';
import { u as useHelpers } from './useHelpers-kUuDaVs4.mjs';
import { ref, withAsyncContext, computed, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useJobStore } from './jobs-XJs56wMu.mjs';
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
  __name: "search",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    route.query;
    const { capitalizeFirstLetter } = useHelpers();
    const { publishedJobs } = useJobStore(), data = ref(([__temp, __restore] = withAsyncContext(() => publishedJobs()), __temp = await __temp, __restore(), __temp));
    const filters = ref([
      { title: "Keyword", value: "", input: true, show: true },
      {
        title: "Job type",
        value: "",
        list: [
          "Any",
          ...new Set(data.value.map((j) => capitalizeFirstLetter(j.jobtype)))
        ],
        show: true
      },
      {
        title: "Industry",
        value: "",
        list: [
          "Any",
          ...new Set(data.value.map((j) => capitalizeFirstLetter(j.industry)))
        ],
        show: true
      },
      {
        title: "Location",
        value: "",
        list: [
          "Any",
          ...new Set(data.value.map((j) => capitalizeFirstLetter(j.location)))
        ],
        show: true
      },
      {
        title: "Salary",
        value: "",
        content: [
          "Negotiable",
          [0, 1999],
          [2e3, 3999],
          [4e3, 8999],
          [9e3, 19999],
          [2e4, 39999],
          [4e4, 79999],
          [8e4, 99999],
          1e5
        ],
        type: "$",
        show: true
      },
      {
        title: "Experience",
        value: "",
        content: [[0, 1], [1, 2], [2, 5], [5, 10], [10, 15], 15],
        type: "Years",
        show: true
      },
      {
        title: "Category",
        value: [],
        show: false,
        array: true
      },
      {
        title: "Job Function",
        value: [],
        show: false,
        array: true
      }
    ]);
    computed(() => {
      return filters.value.filter((f) => f.show);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobs/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-wyX4A3O_.mjs.map
