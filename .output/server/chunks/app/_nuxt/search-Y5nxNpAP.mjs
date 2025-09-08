import { useSSRContext, computed, mergeProps, unref, isRef } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VTextField } from './VTextField-8SU2p1Ep.mjs';

const _sfc_main = {
  __name: "search",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: "Filter..."
    },
    search: String
  },
  emits: ["search"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const searchValue = computed({
      get() {
        return props.search;
      },
      set(val) {
        emits("search", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VTextField, mergeProps({
        style: { "max-width": "clamp(300px, 30%, 350px)" },
        placeholder: __props.label,
        "hide-details": "",
        "prepend-inner-icon": "mdi-magnify",
        modelValue: unref(searchValue),
        "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
        "bg-color": "off-white-1",
        rounded: "",
        type: "search"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/core/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=search-Y5nxNpAP.mjs.map
