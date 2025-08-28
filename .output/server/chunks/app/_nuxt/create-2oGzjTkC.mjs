import { a as __nuxt_component_0 } from './index-hxCMlHkH.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './page-header-zc_xglZV.mjs';
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
import './stepper-ipq6mb5U.mjs';
import './index-CbyoTlMq.mjs';
import './VDialog-JcAH9Fxa.mjs';
import './VCard-M6VezhhA.mjs';
import './VOverlay-NMZIuW_y.mjs';
import './VTextField-Q67PbqhP.mjs';
import './VMenu-Xf_H0UU6.mjs';
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
import './products-ShlXA7WH.mjs';
import './VDataTable-hY5l9u_g.mjs';
import './editor-JUAoNM3K.mjs';
import './VTextarea-PqZmnZiL.mjs';
import './VWindowItem-49fT4O5I.mjs';

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
//# sourceMappingURL=create-2oGzjTkC.mjs.map
