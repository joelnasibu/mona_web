import { a as __nuxt_component_0 } from "./index-vTmo4eGR.js";
import { ref, unref, useSSRContext } from "vue";
import { a as useSeoMeta } from "./index-S1hhTCs3.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./page-header-rZyOPLsZ.js";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "./useHelpers-9BVYUhTt.js";
import "date-fns";
import "date-fns/locale";
import "./index-3E7yy1qS.js";
import "./color-rZjm0Y7u.js";
import "./tag-pIHjuosL.js";
import "./VBtn-yNf12l4D.js";
import "./rounded-jA9LRAgf.js";
import "./position-AkaJaFJy.js";
import "./resizeObserver-k8M9k6Xi.js";
import "./VSpacer-0DxA8eQn.js";
/* empty css               */
import "./VAvatar-agmUyvkw.js";
import "./VImg-_57rVikU.js";
import "./index-q-0zZOOG.js";
import "./VDivider-Ce8J4Sp3.js";
import "./stepper-ipq6mb5U.js";
import "./index-RXRlxYy9.js";
import "./VDialog-acnQ15uX.js";
import "./VCard-MEGoD2_3.js";
import "./VOverlay-bpCAw6Z_.js";
import "./VTextField-8SU2p1Ep.js";
import "./index-d8gkbdU6.js";
import "./delay-5iXTA9KV.js";
import "./lazy-8QocgoLY.js";
import "./VMenu-bZwLMGPK.js";
import "vue-advanced-cropper";
import "./VContainer-jF5qmVp8.js";
import "./VRow-lyrtfIhE.js";
import "./select-sjn27vix.js";
import "./VList-hhjvxiav.js";
import "./ssrBoot-xH9VG8QW.js";
import "./VCheckbox-Omi4Z8sK.js";
import "./VCheckboxBtn-lCSbAwQG.js";
import "./VSelectionControl-t8h0Xxrv.js";
import "./useRules-Lv1tnQPg.js";
import "./categories-JvrMV5cl.js";
import "./subcategories-P-PAKG_4.js";
import "./products-e11RfeWn.js";
import "./VForm-wrdi8IEW.js";
import "./VBadge-xHT1Vb9M.js";
import "./VHover-3XLtHLBt.js";
import "./business-1K3_QQBT.js";
import "./calendar-date-IHPjl74u.js";
import "./VSheet-9iAoR9Ls.js";
import "./sizes-7BdVubsf.js";
import "./VRadioGroup-u0H5_7Mz.js";
import "./editor-JUAoNM3K.js";
import "./VTextarea-W1zqEte6.js";
import "./VWindowItem-BpMO-iOS.js";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=create-cTqLbRqW.js.map
