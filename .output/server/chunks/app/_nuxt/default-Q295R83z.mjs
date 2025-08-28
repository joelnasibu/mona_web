import { a as useRuntimeConfig, d as __nuxt_component_1, ae as useDisplay, l as useRoute, m as useDevice, h as useAppStore, s as storeToRefs, _ as _export_sfc, j as __nuxt_component_0$1 } from '../server.mjs';
import { ref, withAsyncContext, provide, withCtx, createVNode, useSSRContext, computed } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useCategoryStore } from './categories-OjbYYiNy.mjs';
import { u as useCartStore } from './cart-tyxrLAJF.mjs';
import { _ as __nuxt_component_2 } from './index-Vs68o-o0.mjs';
import { u as useChatStore } from './chat-AG0a5xI_.mjs';
import { u as useHead } from './index-S1hhTCs3.mjs';
import { u as useProductStore } from './products-ShlXA7WH.mjs';
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
import './useHelpers-kUuDaVs4.mjs';
import 'date-fns';
import 'date-fns/locale';
import '@supabase/supabase-js';
import './tag-pIHjuosL.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import './ssrBoot-xH9VG8QW.mjs';

const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { smAndDown } = useDisplay();
    useRoute();
    const { isMobile } = useDevice();
    computed(() => {
      return isMobile || smAndDown;
    });
    const app = useAppStore();
    storeToRefs(app);
    useCategoryStore();
    const cartStore = useCartStore();
    storeToRefs(cartStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/app-bar/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2f119740"]]);
const _sfc_main$1 = {
  __name: "floating-chat",
  __ssrInlineRender: true,
  setup(__props) {
    useChatStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/floating-chat.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const environmentVariable = useRuntimeConfig();
    useHead({
      titleTemplate: (title) => `${title != null ? title : "AG"} - ${environmentVariable.public.app_name}`
    });
    const { publishedProducts } = useProductStore();
    const data = ref(([__temp, __restore] = withAsyncContext(() => publishedProducts()), __temp = await __temp, __restore(), __temp));
    const { getCategoriesByType } = useCategoryStore();
    const listCategories = ref(([__temp, __restore] = withAsyncContext(() => getCategoriesByType(false, "SHOP")), __temp = await __temp, __restore(), __temp));
    provide("categoriesList", listCategories.value);
    provide("productsList", data.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientAppBar = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_ClientFooter = __nuxt_component_2;
      const _component_FloatingChat = __nuxt_component_3;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientAppBar, null, null, _parent2, _scopeId));
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
            _push2(ssrRenderComponent(_component_FloatingChat, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientAppBar),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtPage)
                ]),
                _: 1
              }),
              createVNode(_component_ClientFooter),
              createVNode(_component_FloatingChat)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Q295R83z.mjs.map
