import { _ as _export_sfc, s as storeToRefs, h as useAppStore, j as __nuxt_component_0$1 } from '../server.mjs';
import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { computed, ref, useSSRContext } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "details-info",
  __ssrInlineRender: true,
  setup(__props) {
    useHelpers();
    const { token, currentUser, profileImage } = storeToRefs(useAppStore());
    computed(() => {
      return currentUser.value.applicant;
    });
    ref([]);
    ref([]);
    ref(64);
    computed(() => {
    });
    useSeoMeta({
      title: "Jobs",
      ogTitle: "Jobs",
      twitterTitle: "Jobs"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobs/details-info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detailsInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e1fe6cf"]]);

export { detailsInfo as default };
//# sourceMappingURL=details-info-cjGTTs4Z.mjs.map
