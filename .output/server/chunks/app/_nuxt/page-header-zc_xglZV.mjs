import { l as useRoute, s as storeToRefs, h as useAppStore } from '../server.mjs';
import { u as useHelpers } from './useHelpers-kUuDaVs4.mjs';
import { useSSRContext, mergeProps, unref, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { b as VIcon } from './index-jw0wqd8u.mjs';
import { V as VBtn } from './VBtn-HIzP-EnY.mjs';
import { V as VSpacer } from './VSpacer-ohAsXIBy.mjs';
import { V as VDivider } from './VDivider-JUM-rhUg.mjs';

const _sfc_main = {
  __name: "page-header",
  __ssrInlineRender: true,
  props: {
    route: String,
    actualPage: Object
  },
  setup(__props) {
    const route = useRoute();
    useHelpers();
    const { adminRedirect } = storeToRefs(useAppStore());
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="d-flex align-center">`);
      if (unref(route).name !== ((_a = unref(adminRedirect)) == null ? void 0 : _a.name)) {
        _push(`<div class="d-flex align-center"><span class="text-body-2 d-flex align-center text-black cursor-pointer">`);
        _push(ssrRenderComponent(VIcon, {
          icon: "mdi-chevron-left",
          start: ""
        }, null, _parent));
        _push(`<b>Back</b></span><span class="ml-3">|</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VBtn, {
        "prepend-icon": `mdi-${(_a2 = (_b = __props.actualPage) == null ? void 0 : _b.icon) != null ? _a2 : "file"}-outline`,
        flat: "",
        rounded: "lg",
        varaint: "text",
        class: "bg-transparent text-body-2",
        style: { "pointer-events": "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b3;
          var _a22, _b2;
          if (_push2) {
            _push2(`<b${_scopeId}>${ssrInterpolate((_a3 = (_a22 = __props.actualPage) == null ? void 0 : _a22.name) != null ? _a3 : "Page title")}</b>`);
          } else {
            return [
              createVNode("b", null, toDisplayString((_b3 = (_b2 = __props.actualPage) == null ? void 0 : _b2.name) != null ? _b3 : "Page title"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(VDivider, { class: "my-2" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/core/page-header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=page-header-zc_xglZV.mjs.map
