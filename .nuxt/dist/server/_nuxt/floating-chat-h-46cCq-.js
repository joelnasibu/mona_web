import { j as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useChatStore } from "./chat-JPFHFeEL.js";
const _sfc_main = {
  __name: "floating-chat",
  __ssrInlineRender: true,
  setup(__props) {
    useChatStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/floating-chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=floating-chat-h-46cCq-.js.map
