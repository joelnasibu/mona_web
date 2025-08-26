import { _ as __nuxt_component_0$1 } from './page-header-zc_xglZV.mjs';
import { useSSRContext, withCtx, createVNode, toDisplayString, renderSlot, computed, mergeProps, unref, isRef } from 'vue';
import { s as storeToRefs, h as useAppStore, m as useDevice } from '../server.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { V as VBtn } from './VBtn-HIzP-EnY.mjs';
import { V as VDivider } from './VDivider-JUM-rhUg.mjs';
import { V as VDialog } from './VDialog-JcAH9Fxa.mjs';
import { V as VCard } from './VCard-M6VezhhA.mjs';
import { V as VSpacer } from './VSpacer-ohAsXIBy.mjs';

const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/core/page-details-header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "delete-confirmation",
  __ssrInlineRender: true,
  props: {
    dialog: Boolean,
    data: Object
  },
  emits: ["delete", "cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { isMobile } = useDevice();
    const { loading } = storeToRefs(useAppStore());
    const modal = computed({
      get() {
        return props.dialog;
      },
      set() {
        emits("cancel");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VDialog, mergeProps({
        modelValue: unref(modal),
        "onUpdate:modelValue": ($event) => isRef(modal) ? modal.value = $event : null,
        persistent: "",
        width: unref(isMobile) ? "100%" : 400
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "pa-3 pa-md-5 rounded-xl",
              color: "white",
              loading: unref(loading)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-100 text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    size: "large",
                    color: "red-darken-2",
                    icon: "mdi-alert",
                    variant: "text",
                    active: "",
                    class: "disabled-btn"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="py-2 px-4 text-center"${_scopeId2}><div class="text-h6 my-4"${_scopeId2}><b${_scopeId2}>Delete ${ssrInterpolate(__props.data.name)}</b></div><div class="my-3 text-body-2"${_scopeId2}><span${_scopeId2}>You are going to delete ${ssrInterpolate(__props.data.name)} &quot;${ssrInterpolate(__props.data.itemTitle)}&quot;. Are you sure?</span></div></div><div class="d-flex pt-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    variant: "text",
                    active: "",
                    class: "text-body-2 text-capitalize",
                    onClick: ($event) => emits("cancel"),
                    rounded: "",
                    width: "49%",
                    size: "large"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>No, keep it.</span>`);
                      } else {
                        return [
                          createVNode("span", null, "No, keep it.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    class: "bg-red-darken-2 text-body-2 text-capitalize",
                    onClick: ($event) => emits("delete"),
                    loading: unref(loading),
                    rounded: "",
                    flat: "",
                    width: "49%",
                    size: "large"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Yes, delete!</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Yes, delete!")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-100 text-center" }, [
                      createVNode(VBtn, {
                        size: "large",
                        color: "red-darken-2",
                        icon: "mdi-alert",
                        variant: "text",
                        active: "",
                        class: "disabled-btn"
                      }),
                      createVNode("div", { class: "py-2 px-4 text-center" }, [
                        createVNode("div", { class: "text-h6 my-4" }, [
                          createVNode("b", null, "Delete " + toDisplayString(__props.data.name), 1)
                        ]),
                        createVNode("div", { class: "my-3 text-body-2" }, [
                          createVNode("span", null, "You are going to delete " + toDisplayString(__props.data.name) + ' "' + toDisplayString(__props.data.itemTitle) + '". Are you sure?', 1)
                        ])
                      ]),
                      createVNode("div", { class: "d-flex pt-3" }, [
                        createVNode(VBtn, {
                          variant: "text",
                          active: "",
                          class: "text-body-2 text-capitalize",
                          onClick: ($event) => emits("cancel"),
                          rounded: "",
                          width: "49%",
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "No, keep it.")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          class: "bg-red-darken-2 text-body-2 text-capitalize",
                          onClick: ($event) => emits("delete"),
                          loading: unref(loading),
                          rounded: "",
                          flat: "",
                          width: "49%",
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Yes, delete!")
                          ]),
                          _: 1
                        }, 8, ["onClick", "loading"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, {
                class: "pa-3 pa-md-5 rounded-xl",
                color: "white",
                loading: unref(loading)
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-100 text-center" }, [
                    createVNode(VBtn, {
                      size: "large",
                      color: "red-darken-2",
                      icon: "mdi-alert",
                      variant: "text",
                      active: "",
                      class: "disabled-btn"
                    }),
                    createVNode("div", { class: "py-2 px-4 text-center" }, [
                      createVNode("div", { class: "text-h6 my-4" }, [
                        createVNode("b", null, "Delete " + toDisplayString(__props.data.name), 1)
                      ]),
                      createVNode("div", { class: "my-3 text-body-2" }, [
                        createVNode("span", null, "You are going to delete " + toDisplayString(__props.data.name) + ' "' + toDisplayString(__props.data.itemTitle) + '". Are you sure?', 1)
                      ])
                    ]),
                    createVNode("div", { class: "d-flex pt-3" }, [
                      createVNode(VBtn, {
                        variant: "text",
                        active: "",
                        class: "text-body-2 text-capitalize",
                        onClick: ($event) => emits("cancel"),
                        rounded: "",
                        width: "49%",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "No, keep it.")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        class: "bg-red-darken-2 text-body-2 text-capitalize",
                        onClick: ($event) => emits("delete"),
                        loading: unref(loading),
                        rounded: "",
                        flat: "",
                        width: "49%",
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Yes, delete!")
                        ]),
                        _: 1
                      }, 8, ["onClick", "loading"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/delete-confirmation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;

export { __nuxt_component_0 as _, __nuxt_component_3 as a };
//# sourceMappingURL=delete-confirmation-j8Kot4NH.mjs.map
