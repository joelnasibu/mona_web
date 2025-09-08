import { m as useDevice, s as storeToRefs, h as useAppStore } from '../server.mjs';
import { useSSRContext, computed, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VDialog } from './VDialog-acnQ15uX.mjs';
import { V as VCard } from './VCard-MEGoD2_3.mjs';
import { V as VBtn } from './VBtn-yNf12l4D.mjs';
import { V as VSpacer } from './VSpacer-0DxA8eQn.mjs';

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

export { __nuxt_component_3 as _ };
//# sourceMappingURL=delete-confirmation-8DYwAm4D.mjs.map
