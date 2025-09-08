import { s as storeToRefs, h as useAppStore, j as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext } from "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent } from "vue/server-renderer";
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
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    storeToRefs(useAppStore());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=auth-uKawl5cD.js.map
