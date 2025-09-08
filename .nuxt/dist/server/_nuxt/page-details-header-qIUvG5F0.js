import { _ as __nuxt_component_0$1 } from "./page-header-rZyOPLsZ.js";
import { withCtx, createVNode, toDisplayString, renderSlot, useSSRContext } from "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { s as storeToRefs, h as useAppStore } from "../server.mjs";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { V as VBtn } from "./VBtn-yNf12l4D.js";
import { V as VDivider } from "./VDivider-Ce8J4Sp3.js";
const _sfc_main = {
  __name: "page-details-header",
  __ssrInlineRender: true,
  props: {
    view: Boolean,
    route: String
  },
  emits: ["delete", "toggleView"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    storeToRefs(useAppStore());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCorePageHeader = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AdminCorePageHeader, { route: __props.route }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center ga-4 text-caption"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(VBtn, {
              size: "small",
              color: "primary-dark",
              class: "text-caption",
              "prepend-icon": `mdi-${__props.view ? "pencil" : "eye"}-outline`,
              rounded: "",
              variant: "text",
              active: "",
              onClick: ($event) => emits("toggleView")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(__props.view ? "Edit" : "Preview")}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(__props.view ? "Edit" : "Preview"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              size: "x-small",
              color: "red-darken-4",
              icon: "mdi-delete",
              title: "Delete",
              flat: "",
              onClick: ($event) => emits("delete")
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center ga-4 text-caption" }, [
                renderSlot(_ctx.$slots, "default"),
                createVNode(VBtn, {
                  size: "small",
                  color: "primary-dark",
                  class: "text-caption",
                  "prepend-icon": `mdi-${__props.view ? "pencil" : "eye"}-outline`,
                  rounded: "",
                  variant: "text",
                  active: "",
                  onClick: ($event) => emits("toggleView")
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(__props.view ? "Edit" : "Preview"), 1)
                  ]),
                  _: 1
                }, 8, ["prepend-icon", "onClick"]),
                createVNode(VBtn, {
                  size: "x-small",
                  color: "red-darken-4",
                  icon: "mdi-delete",
                  title: "Delete",
                  flat: "",
                  onClick: ($event) => emits("delete")
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/core/page-details-header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=page-details-header-qIUvG5F0.js.map
