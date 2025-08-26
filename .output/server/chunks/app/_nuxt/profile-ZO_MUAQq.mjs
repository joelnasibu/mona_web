import { a as useRuntimeConfig, d as __nuxt_component_1, m as useDevice, s as storeToRefs, h as useAppStore, _ as _export_sfc, j as __nuxt_component_0$1 } from '../server.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useAuthStore } from './useHelpers-kUuDaVs4.mjs';
import { _ as __nuxt_component_2 } from './footer-xLOn0DS_.mjs';
import { u as useHead } from './index-S1hhTCs3.mjs';
import { V as VApp, a as VMain } from './VMain-7JPvOhVt.mjs';
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
import './tag-pIHjuosL.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import './ssrBoot-xH9VG8QW.mjs';

const _sfc_main$1 = {
  __name: "app-bar",
  __ssrInlineRender: true,
  setup(__props) {
    useDevice();
    storeToRefs(useAppStore());
    useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/app-bar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6a8bc000"]]);
const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const environmentVariable = useRuntimeConfig();
    useHead({
      titleTemplate: (title) => `${title != null ? title : "AG"} - ${environmentVariable.public.app_name}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProfileAppBar = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_AdminFooter = __nuxt_component_2;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ProfileAppBar, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, { class: "system-bg" }, {
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
            _push2(ssrRenderComponent(_component_AdminFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ProfileAppBar),
              createVNode(VMain, { class: "system-bg" }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtPage)
                ]),
                _: 1
              }),
              createVNode(_component_AdminFooter)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-ZO_MUAQq.mjs.map
