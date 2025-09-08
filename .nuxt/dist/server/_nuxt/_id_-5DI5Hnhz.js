import { _ as __nuxt_component_0 } from "./page-details-header-qIUvG5F0.js";
import { _ as __nuxt_component_1, a as __nuxt_component_0$1 } from "./index-vTmo4eGR.js";
import { _ as __nuxt_component_3 } from "./delete-confirmation-8DYwAm4D.js";
import { l as useRoute, s as storeToRefs, h as useAppStore, b as navigateTo } from "../server.mjs";
import { ref, withAsyncContext, unref, useSSRContext } from "vue";
import "hookable";
import { a as useSeoMeta } from "./index-S1hhTCs3.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useProductStore } from "./products-e11RfeWn.js";
import "./page-header-rZyOPLsZ.js";
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
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { error } = storeToRefs(useAppStore());
    const { getProduct, deleteProduct } = useProductStore();
    const data = ref(([__temp, __restore] = withAsyncContext(() => getProduct(id)), __temp = await __temp, __restore(), __temp));
    const view = ref(true);
    const deleteDialog = ref(false);
    const confirmDelete = async () => {
      await deleteProduct(data.value.id);
      if (!error.value)
        navigateTo({ name: "admin-products" });
    };
    useSeoMeta({
      title: "Product Details"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCorePageDetailsHeader = __nuxt_component_0;
      const _component_AdminProductPreview = __nuxt_component_1;
      const _component_AdminProductInputs = __nuxt_component_0$1;
      const _component_AdminDeleteConfirmation = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminCorePageDetailsHeader, {
        view: unref(view),
        route: "admin-products",
        onToggleView: ($event) => view.value = !unref(view),
        onDelete: ($event) => deleteDialog.value = true
      }, null, _parent));
      _push(`<div class="mt-4"><div class="bg-card pa-3 d-flex text-caption align-center"><span>${ssrInterpolate(unref(data).productName + " : " + unref(data).productId)}</span></div><div class="">`);
      if (unref(view)) {
        _push(ssrRenderComponent(_component_AdminProductPreview, { payload: unref(data) }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_AdminProductInputs, {
          payload: unref(data),
          edit: true
        }, null, _parent));
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_AdminDeleteConfirmation, {
        dialog: unref(deleteDialog),
        data: {
          name: "Product",
          itemTitle: unref(data).productName,
          id: unref(data).productId
        },
        onCancel: ($event) => deleteDialog.value = false,
        onDelete: confirmDelete
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-5DI5Hnhz.js.map
