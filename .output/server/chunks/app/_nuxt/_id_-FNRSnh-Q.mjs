import { _ as _export_sfc, l as useRoute, m as useDevice, h as useAppStore, s as storeToRefs, j as __nuxt_component_0$1 } from '../server.mjs';
import { u as useHelpers } from './useHelpers-kUuDaVs4.mjs';
import { ref, withAsyncContext, useSSRContext } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useSavedItemStore } from './saved-items--Oxkq1rq.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const route = useRoute(), id = route.params.id, { dateFormat_Month, capitalizeFirstLetter, dateDifference } = useHelpers();
    useDevice();
    const appStore = useAppStore();
    storeToRefs(appStore);
    useSavedItemStore();
    const { getJob } = useJobStore(), data = ref(([__temp, __restore] = withAsyncContext(() => getJob(id)), __temp = await __temp, __restore(), __temp));
    ref(0);
    ref(false);
    ref(null);
    ref(false);
    ref(64);
    [
      { title: "Home", route: "/jobs" },
      { title: String(data.value.jobName).toLowerCase() }
    ];
    useSeoMeta({
      title: (_a = `${capitalizeFirstLetter(data.value.jobName)} | ${data.value.business.businessName}`) != null ? _a : "Job details",
      description: data.value.description,
      ogTitle: (_b = `${capitalizeFirstLetter(data.value.jobName)} | ${data.value.business.businessName}`) != null ? _b : "Job details",
      ogDescription: data.value.description,
      ogImage: data.value.business.logo,
      twitterTitle: (_c = `${capitalizeFirstLetter(data.value.jobName)} | ${data.value.business.businessName}`) != null ? _c : "Job details",
      twitterDescription: data.value.description,
      twitterImage: data.value.business.logo
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobs/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9fb3ac19"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-FNRSnh-Q.mjs.map
