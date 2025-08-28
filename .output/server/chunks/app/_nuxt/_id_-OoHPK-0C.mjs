import { _ as __nuxt_component_0, a as __nuxt_component_3 } from './delete-confirmation-j8Kot4NH.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_0$1 } from './index-hxCMlHkH.mjs';
import { l as useRoute, s as storeToRefs, h as useAppStore, b as navigateTo } from '../server.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useProductStore } from './products-ShlXA7WH.mjs';
import './page-header-zc_xglZV.mjs';
import './useHelpers-kUuDaVs4.mjs';
import 'date-fns';
import 'date-fns/locale';
import './index-jw0wqd8u.mjs';
import './color-52hqu1To.mjs';
import './tag-pIHjuosL.mjs';
import './VBtn-HIzP-EnY.mjs';
import './position-WfCzcf5A.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import './VSpacer-ohAsXIBy.mjs';
import './VAvatar-Tkx6eOqd.mjs';
import './VDivider-JUM-rhUg.mjs';
import './VDialog-JcAH9Fxa.mjs';
import './VCard-M6VezhhA.mjs';
import './VOverlay-NMZIuW_y.mjs';
import './VTextField-Q67PbqhP.mjs';
import './VMenu-Xf_H0UU6.mjs';
import './stepper-ipq6mb5U.mjs';
import './index-CbyoTlMq.mjs';
import 'vue-advanced-cropper';
import './VContainer-jF5qmVp8.mjs';
import './VRow-lyrtfIhE.mjs';
import './select-_AXsm2yX.mjs';
import './VList-0_bPAEAt.mjs';
import './ssrBoot-xH9VG8QW.mjs';
import './VCheckbox-6aCeGZz9.mjs';
import './VCheckboxBtn-uKZxiDvG.mjs';
import './VSelectionControl-zNSOl8MJ.mjs';
import './useRules-YQBIqClL.mjs';
import './categories-OjbYYiNy.mjs';
import './subcategories-bX2ZHLNb.mjs';
import './VForm-tbklh6Vg.mjs';
import './VBadge-rQ5h9Gnj.mjs';
import './business-xWrgr4rc.mjs';
import './calendar-date-Z0smB_LV.mjs';
import './VSheet-SPKhQ0zP.mjs';
import './sizes-7RVjSyx-.mjs';
import './VDataTable-hY5l9u_g.mjs';
import './editor-JUAoNM3K.mjs';
import './VTextarea-PqZmnZiL.mjs';
import './VWindowItem-49fT4O5I.mjs';
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

export { _sfc_main as default };
//# sourceMappingURL=_id_-OoHPK-0C.mjs.map
