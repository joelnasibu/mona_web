import { computed, ref, mergeProps, unref, isRef, withCtx, openBlock, createBlock, createVNode, createCommentVNode, toDisplayString, withDirectives, vModelText, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { a as VMenu } from "./VMenu-bZwLMGPK.js";
import { V as VList, a as VListItem } from "./VList-hhjvxiav.js";
import { V as VDivider } from "./VDivider-Ce8J4Sp3.js";
import { V as VCheckbox } from "./VCheckbox-Omi4Z8sK.js";
const _sfc_main = {
  __name: "select",
  __ssrInlineRender: true,
  props: {
    list: Array,
    listValue: [String, Number, Array],
    activator: String,
    multiple: Boolean
  },
  emits: ["setItem"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const checkboxValue = computed({
      get() {
        return props.listValue;
      },
      set() {
        emits("setItem");
      }
    });
    const menu = ref(false);
    const search = ref("");
    const filteredList = computed(() => {
      return props.list.filter((val) => {
        return val.toLowerCase().includes(search.value.toLowerCase());
      });
    });
    const setItem = (item) => {
      emits("setItem", item, props.activator);
      if (!props.multiple)
        menu.value = false;
      search.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VMenu, mergeProps({
        activator: __props.activator,
        "close-on-content-click": false,
        modelValue: unref(menu),
        "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VList, {
              class: "pa-0 position-relative card-outlined rounded-lg ma-1",
              "max-height": "250",
              density: "compact",
              lines: "false"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (__props.list.length > 6) {
                    _push3(`<div class="position-sticky bg-white text-caption" style="${ssrRenderStyle({ "top": "0", "z-index": "1" })}" data-v-39cf1478${_scopeId2}><input type="search"${ssrRenderAttr("placeholder", `Filter (${__props.list.length}) items...`)} class="px-3 w-100 filter-input bg-card" autofocus${ssrRenderAttr("value", unref(search))} data-v-39cf1478${_scopeId2}>`);
                    _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(filteredList), (item, i) => {
                    _push3(`<div class="text-caption" data-v-39cf1478${_scopeId2}>`);
                    _push3(ssrRenderComponent(VListItem, {
                      onClick: ($event) => setItem(item),
                      active: __props.multiple ? __props.listValue.includes(item) : __props.listValue === item,
                      color: "secondary"
                    }, {
                      prepend: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (__props.multiple) {
                            _push4(`<div class="mr-3" data-v-39cf1478${_scopeId3}>`);
                            _push4(ssrRenderComponent(VCheckbox, {
                              "hide-details": "",
                              density: "compact",
                              color: "secondary",
                              modelValue: unref(checkboxValue),
                              "onUpdate:modelValue": ($event) => isRef(checkboxValue) ? checkboxValue.value = $event : null,
                              value: item
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            __props.multiple ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mr-3"
                            }, [
                              createVNode(VCheckbox, {
                                "hide-details": "",
                                density: "compact",
                                color: "secondary",
                                modelValue: unref(checkboxValue),
                                "onUpdate:modelValue": ($event) => isRef(checkboxValue) ? checkboxValue.value = $event : null,
                                value: item
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                            ])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span data-v-39cf1478${_scopeId3}>${ssrInterpolate(item)}</span>`);
                        } else {
                          return [
                            createVNode("span", null, toDisplayString(item), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                  if (unref(filteredList).length === 0) {
                    _push3(`<div class="py-2 text-caption text-center" data-v-39cf1478${_scopeId2}><span data-v-39cf1478${_scopeId2}>No data</span></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    __props.list.length > 6 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "position-sticky bg-white text-caption",
                      style: { "top": "0", "z-index": "1" }
                    }, [
                      withDirectives(createVNode("input", {
                        type: "search",
                        placeholder: `Filter (${__props.list.length}) items...`,
                        class: "px-3 w-100 filter-input bg-card",
                        autofocus: "",
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null
                      }, null, 8, ["placeholder", "onUpdate:modelValue"]), [
                        [vModelText, unref(search)]
                      ]),
                      createVNode(VDivider)
                    ])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredList), (item, i) => {
                      return openBlock(), createBlock("div", {
                        class: "text-caption",
                        key: i
                      }, [
                        createVNode(VListItem, {
                          onClick: ($event) => setItem(item),
                          active: __props.multiple ? __props.listValue.includes(item) : __props.listValue === item,
                          color: "secondary"
                        }, {
                          prepend: withCtx(() => [
                            __props.multiple ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mr-3"
                            }, [
                              createVNode(VCheckbox, {
                                "hide-details": "",
                                density: "compact",
                                color: "secondary",
                                modelValue: unref(checkboxValue),
                                "onUpdate:modelValue": ($event) => isRef(checkboxValue) ? checkboxValue.value = $event : null,
                                value: item
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                            ])) : createCommentVNode("", true)
                          ]),
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick", "active"]),
                        createVNode(VDivider)
                      ]);
                    }), 128)),
                    unref(filteredList).length === 0 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "py-2 text-caption text-center"
                    }, [
                      createVNode("span", null, "No data")
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VList, {
                class: "pa-0 position-relative card-outlined rounded-lg ma-1",
                "max-height": "250",
                density: "compact",
                lines: "false"
              }, {
                default: withCtx(() => [
                  __props.list.length > 6 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "position-sticky bg-white text-caption",
                    style: { "top": "0", "z-index": "1" }
                  }, [
                    withDirectives(createVNode("input", {
                      type: "search",
                      placeholder: `Filter (${__props.list.length}) items...`,
                      class: "px-3 w-100 filter-input bg-card",
                      autofocus: "",
                      "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null
                    }, null, 8, ["placeholder", "onUpdate:modelValue"]), [
                      [vModelText, unref(search)]
                    ]),
                    createVNode(VDivider)
                  ])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredList), (item, i) => {
                    return openBlock(), createBlock("div", {
                      class: "text-caption",
                      key: i
                    }, [
                      createVNode(VListItem, {
                        onClick: ($event) => setItem(item),
                        active: __props.multiple ? __props.listValue.includes(item) : __props.listValue === item,
                        color: "secondary"
                      }, {
                        prepend: withCtx(() => [
                          __props.multiple ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mr-3"
                          }, [
                            createVNode(VCheckbox, {
                              "hide-details": "",
                              density: "compact",
                              color: "secondary",
                              modelValue: unref(checkboxValue),
                              "onUpdate:modelValue": ($event) => isRef(checkboxValue) ? checkboxValue.value = $event : null,
                              value: item
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                          ])) : createCommentVNode("", true)
                        ]),
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(item), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick", "active"]),
                      createVNode(VDivider)
                    ]);
                  }), 128)),
                  unref(filteredList).length === 0 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "py-2 text-caption text-center"
                  }, [
                    createVNode("span", null, "No data")
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/core/select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-39cf1478"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=select-sjn27vix.js.map
