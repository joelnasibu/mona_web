import { _ as _export_sfc, l as useRoute, m as useDevice, h as useAppStore, s as storeToRefs, j as __nuxt_component_0 } from "../server.mjs";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { ref, withAsyncContext, useSSRContext } from "vue";
import "hookable";
import { a as useSeoMeta } from "./index-S1hhTCs3.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useSavedItemStore } from "./saved-items-T1rPLQyP.js";
import { u as useJobStore } from "./jobs-uJv1lqGQ.js";
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
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
      title: `${capitalizeFirstLetter(data.value.jobName)} | ${data.value.business.businessName}` ?? "Job details",
      description: data.value.description,
      ogTitle: `${capitalizeFirstLetter(data.value.jobName)} | ${data.value.business.businessName}` ?? "Job details",
      ogDescription: data.value.description,
      ogImage: data.value.business.logo,
      twitterTitle: `${capitalizeFirstLetter(data.value.jobName)} | ${data.value.business.businessName}` ?? "Job details",
      twitterDescription: data.value.description,
      twitterImage: data.value.business.logo
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobs/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9fb3ac19"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-xw95MZjS.js.map
