import { useSSRContext, withCtx, createVNode, toDisplayString, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VIcon } from './index-3E7yy1qS.mjs';
import { V as VBtn } from './VBtn-yNf12l4D.mjs';

const _sfc_main$1 = {
  __name: "status",
  __ssrInlineRender: true,
  props: {
    status: Boolean,
    titles: Object
  },
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.status) {
        _push(ssrRenderComponent(VIcon, {
          color: "grey-darken-2",
          size: "small",
          icon: "mdi-check-circle-outline",
          title: __props.titles.isAlready
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(VBtn, {
          variant: "outlined",
          size: "x-small",
          color: "primary",
          class: "text-caption text-none",
          onClick: ($event) => emits("submit"),
          rounded: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(__props.titles.isNot)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(__props.titles.isNot), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/btn/status.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "details-btn",
  __ssrInlineRender: true,
  emits: ["details"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VBtn, mergeProps({
        class: "text-capitalize",
        icon: "mdi-dots-horizontal",
        rounded: "lg",
        size: "28",
        flat: "",
        color: "primary-dark",
        title: "Preview details",
        onClick: ($event) => emits("details")
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/btn/details-btn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_1 as _, __nuxt_component_2 as a };
//# sourceMappingURL=details-btn-3atv59-I.mjs.map
