import { a as __nuxt_component_0 } from './index-CetkiDKE.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './page-header-rZyOPLsZ.mjs';
import '../server.mjs';
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
import './useHelpers-9BVYUhTt.mjs';
import 'date-fns';
import 'date-fns/locale';
import './index-3E7yy1qS.mjs';
import './color-rZjm0Y7u.mjs';
import './tag-pIHjuosL.mjs';
import './VBtn-yNf12l4D.mjs';
import './rounded-jA9LRAgf.mjs';
import './position-AkaJaFJy.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import './VSpacer-0DxA8eQn.mjs';
import './VAvatar-agmUyvkw.mjs';
import './VImg-_57rVikU.mjs';
import './index-q-0zZOOG.mjs';
import './VDivider-Ce8J4Sp3.mjs';
import './stepper-ipq6mb5U.mjs';
import './index-RXRlxYy9.mjs';
import './VDialog-acnQ15uX.mjs';
import './VCard-MEGoD2_3.mjs';
import './VOverlay-bpCAw6Z_.mjs';
import './VTextField-8SU2p1Ep.mjs';
import './index-d8gkbdU6.mjs';
import './delay-5iXTA9KV.mjs';
import './lazy-8QocgoLY.mjs';
import './VMenu-bZwLMGPK.mjs';
import 'vue-advanced-cropper';
import './VContainer-jF5qmVp8.mjs';
import './VRow-lyrtfIhE.mjs';
import './select-sjn27vix.mjs';
import './VList-hhjvxiav.mjs';
import './ssrBoot-xH9VG8QW.mjs';
import './VCheckbox-Omi4Z8sK.mjs';
import './VCheckboxBtn-lCSbAwQG.mjs';
import './VSelectionControl-t8h0Xxrv.mjs';
import './useRules-Lv1tnQPg.mjs';
import './calendar-date-IHPjl74u.mjs';
import './VSheet-9iAoR9Ls.mjs';
import './business-1K3_QQBT.mjs';
import './industries-lHfxNRn7.mjs';
import './job-types-bFYimokk.mjs';
import './categories-JvrMV5cl.mjs';
import './subcategories-P-PAKG_4.mjs';
import './VForm-wrdi8IEW.mjs';
import './editor-JUAoNM3K.mjs';
import './VTextarea-W1zqEte6.mjs';
import './VBadge-xHT1Vb9M.mjs';
import './jobs-uJv1lqGQ.mjs';
import './VWindowItem-BpMO-iOS.mjs';

const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const payload = ref({
      banner: null,
      jobName: "",
      jobType: "",
      jobtypeId: 0,
      business: "",
      businessId: 0,
      category: "",
      subcategory: "",
      subcategoryId: 0,
      industry: "",
      industryId: 0,
      requirements: [],
      skills: [],
      responsibilities: [],
      requiredDocuments: [],
      salaryRange: [0, 0],
      isConfidential: true,
      currency: "USD",
      experienceLevel: "ANY",
      experience: 0,
      location: "",
      applicationsLimit: 0,
      deadline: null,
      summary: "",
      description: ""
    });
    useSeoMeta({
      title: "Create job"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminJobInputs = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminJobInputs, {
        payload: unref(payload),
        route: "admin-jobs"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/jobs/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-IelVTWB_.mjs.map
