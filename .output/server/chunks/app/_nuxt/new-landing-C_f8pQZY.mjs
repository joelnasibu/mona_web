import { _ as __nuxt_component_0 } from './index-vJXezigf.mjs';
import { _ as _export_sfc, d as __nuxt_component_1 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './new-footer-9u4VBDXk.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VApp, a as VMain } from './VMain-YTg4QM3S.mjs';
import './categories-JvrMV5cl.mjs';
import './useHelpers-9BVYUhTt.mjs';
import 'date-fns';
import 'date-fns/locale';
import './cart-tyxrLAJF.mjs';
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
import './mid-screen-layout-b8tbDczG.mjs';
import './VContainer-jF5qmVp8.mjs';
import './tag-pIHjuosL.mjs';
import './VRow-lyrtfIhE.mjs';
import './nuxt-link-kpaqSJk0.mjs';
import 'lucide-vue-next';
import './VFooter-bKQd-Fpc.mjs';
import './rounded-jA9LRAgf.mjs';
import './color-rZjm0Y7u.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import './VDivider-Ce8J4Sp3.mjs';
import './ssrBoot-xH9VG8QW.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientAppBar = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  const _component_ClientShopNewFooter = __nuxt_component_2;
  _push(ssrRenderComponent(VApp, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ClientAppBar, null, null, _parent2, _scopeId));
        _push2(`<div class=""${_scopeId}></div>`);
        _push2(ssrRenderComponent(VMain, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtPage)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ClientShopNewFooter, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ClientAppBar),
          createVNode("div", { class: "" }),
          createVNode(VMain, null, {
            default: withCtx(() => [
              createVNode(_component_NuxtPage)
            ]),
            _: 1
          }),
          createVNode(_component_ClientShopNewFooter)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/new-landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newLanding = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { newLanding as default };
//# sourceMappingURL=new-landing-C_f8pQZY.mjs.map
