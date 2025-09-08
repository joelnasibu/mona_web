import { _ as _export_sfc, m as useDevice, h as useAppStore, s as storeToRefs, j as __nuxt_component_0$1, a as useRuntimeConfig, d as __nuxt_component_1 } from "../server.mjs";
import { useSSRContext, withCtx, createVNode } from "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useCartStore } from "./cart-tyxrLAJF.js";
import { _ as __nuxt_component_2 } from "./index-Vs68o-o0.js";
import { u as useHead } from "./index-S1hhTCs3.js";
import { V as VApp, a as VMain } from "./VMain-YTg4QM3S.js";
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
import "./tag-pIHjuosL.js";
import "./resizeObserver-k8M9k6Xi.js";
import "./ssrBoot-xH9VG8QW.js";
const _sfc_main$1 = {
  __name: "app-bar",
  __ssrInlineRender: true,
  setup(__props) {
    useDevice();
    const app = useAppStore();
    storeToRefs(app);
    const cartStore = useCartStore();
    storeToRefs(cartStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/jobs/app-bar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-896644bf"]]);
const _sfc_main = {
  __name: "jobs",
  __ssrInlineRender: true,
  setup(__props) {
    const environmentVariable = useRuntimeConfig();
    useHead({
      titleTemplate: (title) => `${title ?? "AG"} - ${environmentVariable.public.app_name}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientJobsAppBar = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_ClientFooter = __nuxt_component_2;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientJobsAppBar, null, null, _parent2, _scopeId));
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
            _push2(ssrRenderComponent(_component_ClientFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientJobsAppBar),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtPage)
                ]),
                _: 1
              }),
              createVNode(_component_ClientFooter)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=jobs-2AEQSqAx.js.map
