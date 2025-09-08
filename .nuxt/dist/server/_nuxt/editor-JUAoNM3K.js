import { j as __nuxt_component_0 } from "../server.mjs";
import { computed, ref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "editor",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  emits: ["setText"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    computed({
      get() {
        return props.text;
      },
      set(val) {
        emits("setText", val);
      }
    });
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/editor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main;
export {
  __nuxt_component_4 as _
};
//# sourceMappingURL=editor-JUAoNM3K.js.map
