import { _ as __nuxt_component_0 } from './page-header-rZyOPLsZ.mjs';
import { computed, withCtx, createVNode, unref, useSSRContext, mergeProps, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VBadge } from './VBadge-xHT1Vb9M.mjs';
import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { h as useAppStore, s as storeToRefs } from '../server.mjs';
import { V as VBtn } from './VBtn-yNf12l4D.mjs';
import { V as VSheet } from './VSheet-9iAoR9Ls.mjs';
import { V as VDataTable } from './VDataTable-D0frQ-KQ.mjs';
import './index-3E7yy1qS.mjs';
import './color-rZjm0Y7u.mjs';
import './tag-pIHjuosL.mjs';
import './VSpacer-0DxA8eQn.mjs';
import './VAvatar-agmUyvkw.mjs';
import './rounded-jA9LRAgf.mjs';
import './VImg-_57rVikU.mjs';
import './index-q-0zZOOG.mjs';
import './VDivider-Ce8J4Sp3.mjs';
import './position-AkaJaFJy.mjs';
import 'date-fns';
import 'date-fns/locale';
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
import './resizeObserver-k8M9k6Xi.mjs';
import './VTextField-8SU2p1Ep.mjs';
import './index-d8gkbdU6.mjs';
import './VList-hhjvxiav.mjs';
import './ssrBoot-xH9VG8QW.mjs';
import './VMenu-bZwLMGPK.mjs';
import './VOverlay-bpCAw6Z_.mjs';
import './delay-5iXTA9KV.mjs';
import './lazy-8QocgoLY.mjs';
import './VCheckboxBtn-lCSbAwQG.mjs';
import './VSelectionControl-t8h0Xxrv.mjs';

const _sfc_main$1 = {
  __name: "table-header",
  __ssrInlineRender: true,
  props: {
    text: String,
    number: [String, Number]
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-2 bg-card text-body-2 rounded-ts-lg rounded-te-lg px-3" }, _attrs))}>`);
      _push(ssrRenderComponent(VBadge, {
        content: __props.number,
        inline: "",
        color: "link",
        location: "end"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b class="mr-5"${_scopeId}>${ssrInterpolate(__props.text)}</b>`);
          } else {
            return [
              createVNode("b", { class: "mr-5" }, toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/core/table-header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHelpers();
    const appStore = useAppStore();
    const { loading, currentUser, error, isAdmin, isVendor } = storeToRefs(appStore);
    const filteredHeaders = computed(() => {
      let list = [
        { title: "#", value: "no", show: true },
        { title: "Image", value: "thumbnail", show: true },
        { title: "Product Id", value: "productId", show: true },
        { title: "Product Name", value: "productName", show: true },
        { title: "Business", value: "business.businessName", show: true },
        {
          title: "Days remaining",
          value: "userId",
          show: true
        },
        {
          title: "Renew",
          value: "renew",
          show: true
        }
      ];
      return list.filter((h) => h.show);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCorePageHeader = __nuxt_component_0;
      const _component_AdminCoreTableHeader = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminCorePageHeader, { actualPage: { icon: "tag-plus", name: "Featured Products" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex"${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              icon: "mdi-plus",
              size: "x-small",
              flat: "",
              color: "primary-dark",
              title: "Add business"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex" }, [
                createVNode(VBtn, {
                  icon: "mdi-plus",
                  size: "x-small",
                  flat: "",
                  color: "primary-dark",
                  title: "Add business"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AdminCoreTableHeader, {
        text: "Featured products",
        number: 0
      }, null, _parent));
      _push(ssrRenderComponent(VSheet, {
        width: "100%",
        color: "transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VDataTable, {
              density: "compact",
              headers: unref(filteredHeaders),
              loading: unref(loading),
              class: "bg-background"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VDataTable, {
                density: "compact",
                headers: unref(filteredHeaders),
                loading: unref(loading),
                class: "bg-background"
              }, null, 8, ["headers", "loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/featured-products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-UXEXknIL.mjs.map
