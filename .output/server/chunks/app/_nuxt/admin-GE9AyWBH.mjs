import { _ as _export_sfc, s as storeToRefs, h as useAppStore, l as useRoute, m as useDevice, ae as useDisplay, a as useRuntimeConfig, d as __nuxt_component_1, j as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, withCtx, createVNode, ref, computed } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_2 } from './footer-xLOn0DS_.mjs';
import { u as useHead, a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { V as VApp, a as VMain } from './VMain-7JPvOhVt.mjs';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
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
import './tag-pIHjuosL.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import './ssrBoot-xH9VG8QW.mjs';

const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const appStore = useAppStore();
    storeToRefs(appStore);
    const { isMobile } = useDevice();
    const { smAndDown } = useDisplay();
    ref(false);
    computed(() => {
      return isMobile || smAndDown.value;
    });
    ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/app-bar/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f05604c6"]]);
const _sfc_main = {
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const environmentVariable = useRuntimeConfig();
    storeToRefs(useAppStore());
    useHead({
      titleTemplate: (title) => `${title} - Administration`
    });
    useSeoMeta({
      title: environmentVariable.public.app_name,
      ogTitle: "Skill Up",
      description: "Skill up administration description.",
      ogDescription: "Skill up administration description OG.",
      ogImage: "https://preview-skill",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminAppBar = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_AdminFooter = __nuxt_component_2;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AdminAppBar, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, { class: "system-bg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, { class: "px-4 py-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtPage)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, { class: "px-4 py-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtPage)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AdminFooter, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AdminAppBar),
              createVNode(VMain, { class: "system-bg" }, {
                default: withCtx(() => [
                  createVNode(VContainer, { class: "px-4 py-2" }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtPage)
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-480cae49"]]);

export { admin as default };
//# sourceMappingURL=admin-GE9AyWBH.mjs.map
