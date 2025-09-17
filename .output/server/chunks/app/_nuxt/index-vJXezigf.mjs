import { _ as _export_sfc, ae as useDisplay, l as useRoute, m as useDevice, h as useAppStore, s as storeToRefs, j as __nuxt_component_0$1 } from '../server.mjs';
import { computed, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useCategoryStore } from './categories-JvrMV5cl.mjs';
import { u as useCartStore } from './cart-tyxrLAJF.mjs';

const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/app-bar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-86dfa142"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=index-vJXezigf.mjs.map
