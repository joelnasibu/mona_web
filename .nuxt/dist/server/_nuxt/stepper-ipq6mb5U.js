import { s as storeToRefs, h as useAppStore, j as __nuxt_component_0$1 } from "../server.mjs";
import { computed, useSSRContext } from "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "stepper",
  __ssrInlineRender: true,
  props: {
    step: [Number, String],
    sections: Array,
    action: {
      type: Boolean,
      default: false
    }
  },
  emits: ["navigate", "validation", "save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    storeToRefs(useAppStore());
    computed({
      get() {
        return props.step;
      },
      set(val) {
        if (val > props.step)
          emits("validation", props.step);
        else
          emits("navigate", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/core/stepper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=stepper-ipq6mb5U.js.map
