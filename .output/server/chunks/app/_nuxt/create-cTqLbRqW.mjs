import { a as __nuxt_component_0 } from './index-vTmo4eGR.mjs';
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
import './categories-JvrMV5cl.mjs';
import './subcategories-P-PAKG_4.mjs';
import './products-e11RfeWn.mjs';
import './VForm-wrdi8IEW.mjs';
import './VBadge-xHT1Vb9M.mjs';
import './VHover-3XLtHLBt.mjs';
import './business-1K3_QQBT.mjs';
import './calendar-date-IHPjl74u.mjs';
import './VSheet-9iAoR9Ls.mjs';
import './sizes-7BdVubsf.mjs';
import './VRadioGroup-u0H5_7Mz.mjs';
import './editor-JUAoNM3K.mjs';
import './VTextarea-W1zqEte6.mjs';
import './VWindowItem-BpMO-iOS.mjs';

const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const payload = ref({
      productName: "",
      brand: "",
      model: "",
      description: "",
      summary: "",
      stock: [],
      businessId: 0,
      business: "",
      categoryId: 0,
      subcategoryId: 0,
      category: "",
      subcategory: "",
      images: [],
      thumbnail: null,
      price: 0,
      discount: 0
    });
    useSeoMeta({
      title: "Create product"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminProductInputs = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminProductInputs, {
        payload: unref(payload),
        route: "admin-products"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-cTqLbRqW.mjs.map
