import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './stepper-ipq6mb5U.mjs';
import { _ as __nuxt_component_1$1 } from './select-_AXsm2yX.mjs';
import { u as useRules } from './useRules-YQBIqClL.mjs';
import { p as propsFactory, I as IconValue, g as genericComponent, w as useProxiedModel, E as useLocale, B as convertToUnit, s as storeToRefs, h as useAppStore, b as navigateTo, m as useDevice } from '../server.mjs';
import { useSSRContext, ref, watch, createVNode, mergeProps, Fragment, unref, isRef, withCtx, computed, createTextVNode, toDisplayString, withModifiers, withKeys } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import { V as VDefaultsProvider, b as VIcon } from './index-jw0wqd8u.mjs';
import { V as VForm } from './VForm-tbklh6Vg.mjs';
import { V as VTextField } from './VTextField-Q67PbqhP.mjs';
import { V as VBtn } from './VBtn-HIzP-EnY.mjs';
import { _ as __nuxt_component_1$2 } from './telephone-COnNGYLF.mjs';
import { V as VDialog, _ as __nuxt_component_2$1 } from './VDialog-JcAH9Fxa.mjs';
import { a as useAuthStore, u as useHelpers } from './useHelpers-kUuDaVs4.mjs';
import { V as VCard, b as VCardText } from './VCard-M6VezhhA.mjs';
import { m as makeVWindowProps, V as VWindow, b as makeVWindowItemProps, a as VWindowItem } from './VWindowItem-49fT4O5I.mjs';
import { _ as __nuxt_component_0$2 } from './password-yXu4dRVk.mjs';
import { V as VSpacer } from './VSpacer-ohAsXIBy.mjs';
import { V as VProgressLinear } from './position-WfCzcf5A.mjs';
import { u as useRender } from './tag-pIHjuosL.mjs';
import { m as makeVImgProps, V as VImg } from './VAvatar-Tkx6eOqd.mjs';

const _sfc_main$5 = {
  __name: "account-type",
  __ssrInlineRender: true,
  props: {
    payload: Object,
    trigger: Boolean
  },
  emits: ["step"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { required } = useRules();
    useDevice();
    const formData = ref(null), types = [
      { title: "VENDOR", value: 8 },
      { title: "EMPLOYER", value: 6 }
    ], type = ref(""), setType = (val) => {
      type.value = props.payload.role = val;
      props.payload.roleId = types.find((r) => r.title == val).value;
    };
    const categories = [
      { title: "ONG", value: 2 },
      { title: "ENTREPRISE", value: 0 },
      { title: "INDIVIDU", value: 1 }
    ], category = ref(""), setCategory = (val) => {
      category.value = props.payload.category = val;
      props.payload.type = categories.find((i) => i.title == val).value;
    };
    watch(
      () => props.trigger,
      () => {
        moveNext();
      }
    );
    const moveNext = async () => {
      const { valid } = await formData.value.validate();
      emits("step", valid ? 1 : 0);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreSelect = __nuxt_component_1$1;
      _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex ga-3 text-grey-darken-2 text-caption"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "mdi-information-outline",
                          class: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class=""${_scopeId3}><span${_scopeId3}>Select the type of account you need.</span><ul class="mt-4 ml-5"${_scopeId3}><li${_scopeId3}><b${_scopeId3}>Vendor account: </b><span${_scopeId3}>designed for businesses and suppliers to manage their products and services within the platform. </span></li><li class="mt-3"${_scopeId3}><b${_scopeId3}>Employer account: </b><span${_scopeId3}>designed for businesses and organizations to manage their hiring and employment processes.</span></li></ul></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex ga-3 text-grey-darken-2 text-caption" }, [
                            createVNode(VIcon, {
                              start: "",
                              icon: "mdi-information-outline",
                              class: ""
                            }),
                            createVNode("div", { class: "" }, [
                              createVNode("span", null, "Select the type of account you need."),
                              createVNode("ul", { class: "mt-4 ml-5" }, [
                                createVNode("li", null, [
                                  createVNode("b", null, "Vendor account: "),
                                  createVNode("span", null, "designed for businesses and suppliers to manage their products and services within the platform. ")
                                ]),
                                createVNode("li", { class: "mt-3" }, [
                                  createVNode("b", null, "Employer account: "),
                                  createVNode("span", null, "designed for businesses and organizations to manage their hiring and employment processes.")
                                ])
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "formData",
                          ref: formData
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class=""${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Account type",
                                modelValue: unref(type),
                                "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null,
                                id: "selectAccounttype",
                                readonly: "",
                                "append-inner-icon": "mdi-chevron-down",
                                rules: unref(required)()
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_AdminCoreSelect, {
                                activator: "#selectAccounttype",
                                list: types.map((t) => t.title),
                                "list-value": unref(type),
                                onSetItem: setType
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class=""${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Category",
                                modelValue: unref(category),
                                "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : null,
                                id: "selectAccountCategory",
                                readonly: "",
                                "append-inner-icon": "mdi-chevron-down",
                                rules: unref(required)()
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_AdminCoreSelect, {
                                activator: "#selectAccountCategory",
                                list: categories.map((t) => t.title),
                                "list-value": unref(category),
                                onSetItem: setCategory
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(VBtn, {
                                size: "small",
                                flat: "",
                                block: "",
                                color: "primary-dark",
                                rounded: "",
                                class: "text-caption",
                                onClick: moveNext
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>Continue</span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, "Continue")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "" }, [
                                  createVNode(VTextField, {
                                    label: "Account type",
                                    modelValue: unref(type),
                                    "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null,
                                    id: "selectAccounttype",
                                    readonly: "",
                                    "append-inner-icon": "mdi-chevron-down",
                                    rules: unref(required)()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(_component_AdminCoreSelect, {
                                    activator: "#selectAccounttype",
                                    list: types.map((t) => t.title),
                                    "list-value": unref(type),
                                    onSetItem: setType
                                  }, null, 8, ["list", "list-value"])
                                ]),
                                createVNode("div", { class: "" }, [
                                  createVNode(VTextField, {
                                    label: "Category",
                                    modelValue: unref(category),
                                    "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : null,
                                    id: "selectAccountCategory",
                                    readonly: "",
                                    "append-inner-icon": "mdi-chevron-down",
                                    rules: unref(required)()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(_component_AdminCoreSelect, {
                                    activator: "#selectAccountCategory",
                                    list: categories.map((t) => t.title),
                                    "list-value": unref(category),
                                    onSetItem: setCategory
                                  }, null, 8, ["list", "list-value"])
                                ]),
                                createVNode(VBtn, {
                                  size: "small",
                                  flat: "",
                                  block: "",
                                  color: "primary-dark",
                                  rounded: "",
                                  class: "text-caption",
                                  onClick: moveNext
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Continue")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, {
                            ref_key: "formData",
                            ref: formData
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "" }, [
                                createVNode(VTextField, {
                                  label: "Account type",
                                  modelValue: unref(type),
                                  "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null,
                                  id: "selectAccounttype",
                                  readonly: "",
                                  "append-inner-icon": "mdi-chevron-down",
                                  rules: unref(required)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_AdminCoreSelect, {
                                  activator: "#selectAccounttype",
                                  list: types.map((t) => t.title),
                                  "list-value": unref(type),
                                  onSetItem: setType
                                }, null, 8, ["list", "list-value"])
                              ]),
                              createVNode("div", { class: "" }, [
                                createVNode(VTextField, {
                                  label: "Category",
                                  modelValue: unref(category),
                                  "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : null,
                                  id: "selectAccountCategory",
                                  readonly: "",
                                  "append-inner-icon": "mdi-chevron-down",
                                  rules: unref(required)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_AdminCoreSelect, {
                                  activator: "#selectAccountCategory",
                                  list: categories.map((t) => t.title),
                                  "list-value": unref(category),
                                  onSetItem: setCategory
                                }, null, 8, ["list", "list-value"])
                              ]),
                              createVNode(VBtn, {
                                size: "small",
                                flat: "",
                                block: "",
                                color: "primary-dark",
                                rounded: "",
                                class: "text-caption",
                                onClick: moveNext
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Continue")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex ga-3 text-grey-darken-2 text-caption" }, [
                          createVNode(VIcon, {
                            start: "",
                            icon: "mdi-information-outline",
                            class: ""
                          }),
                          createVNode("div", { class: "" }, [
                            createVNode("span", null, "Select the type of account you need."),
                            createVNode("ul", { class: "mt-4 ml-5" }, [
                              createVNode("li", null, [
                                createVNode("b", null, "Vendor account: "),
                                createVNode("span", null, "designed for businesses and suppliers to manage their products and services within the platform. ")
                              ]),
                              createVNode("li", { class: "mt-3" }, [
                                createVNode("b", null, "Employer account: "),
                                createVNode("span", null, "designed for businesses and organizations to manage their hiring and employment processes.")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "7"
                    }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          ref_key: "formData",
                          ref: formData
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "" }, [
                              createVNode(VTextField, {
                                label: "Account type",
                                modelValue: unref(type),
                                "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null,
                                id: "selectAccounttype",
                                readonly: "",
                                "append-inner-icon": "mdi-chevron-down",
                                rules: unref(required)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_AdminCoreSelect, {
                                activator: "#selectAccounttype",
                                list: types.map((t) => t.title),
                                "list-value": unref(type),
                                onSetItem: setType
                              }, null, 8, ["list", "list-value"])
                            ]),
                            createVNode("div", { class: "" }, [
                              createVNode(VTextField, {
                                label: "Category",
                                modelValue: unref(category),
                                "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : null,
                                id: "selectAccountCategory",
                                readonly: "",
                                "append-inner-icon": "mdi-chevron-down",
                                rules: unref(required)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_AdminCoreSelect, {
                                activator: "#selectAccountCategory",
                                list: categories.map((t) => t.title),
                                "list-value": unref(category),
                                onSetItem: setCategory
                              }, null, 8, ["list", "list-value"])
                            ]),
                            createVNode(VBtn, {
                              size: "small",
                              flat: "",
                              block: "",
                              color: "primary-dark",
                              rounded: "",
                              class: "text-caption",
                              onClick: moveNext
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Continue")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 512)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex ga-3 text-grey-darken-2 text-caption" }, [
                        createVNode(VIcon, {
                          start: "",
                          icon: "mdi-information-outline",
                          class: ""
                        }),
                        createVNode("div", { class: "" }, [
                          createVNode("span", null, "Select the type of account you need."),
                          createVNode("ul", { class: "mt-4 ml-5" }, [
                            createVNode("li", null, [
                              createVNode("b", null, "Vendor account: "),
                              createVNode("span", null, "designed for businesses and suppliers to manage their products and services within the platform. ")
                            ]),
                            createVNode("li", { class: "mt-3" }, [
                              createVNode("b", null, "Employer account: "),
                              createVNode("span", null, "designed for businesses and organizations to manage their hiring and employment processes.")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "7"
                  }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        ref_key: "formData",
                        ref: formData
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "" }, [
                            createVNode(VTextField, {
                              label: "Account type",
                              modelValue: unref(type),
                              "onUpdate:modelValue": ($event) => isRef(type) ? type.value = $event : null,
                              id: "selectAccounttype",
                              readonly: "",
                              "append-inner-icon": "mdi-chevron-down",
                              rules: unref(required)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_AdminCoreSelect, {
                              activator: "#selectAccounttype",
                              list: types.map((t) => t.title),
                              "list-value": unref(type),
                              onSetItem: setType
                            }, null, 8, ["list", "list-value"])
                          ]),
                          createVNode("div", { class: "" }, [
                            createVNode(VTextField, {
                              label: "Category",
                              modelValue: unref(category),
                              "onUpdate:modelValue": ($event) => isRef(category) ? category.value = $event : null,
                              id: "selectAccountCategory",
                              readonly: "",
                              "append-inner-icon": "mdi-chevron-down",
                              rules: unref(required)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_AdminCoreSelect, {
                              activator: "#selectAccountCategory",
                              list: categories.map((t) => t.title),
                              "list-value": unref(category),
                              onSetItem: setCategory
                            }, null, 8, ["list", "list-value"])
                          ]),
                          createVNode(VBtn, {
                            size: "small",
                            flat: "",
                            block: "",
                            color: "primary-dark",
                            rounded: "",
                            class: "text-caption",
                            onClick: moveNext
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Continue")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 512)
                    ]),
                    _: 1
                  })
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/shop/business/account-type.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "basic",
  __ssrInlineRender: true,
  props: {
    payload: Object,
    trigger: Boolean
  },
  emits: ["step"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { required, name } = useRules();
    useDevice();
    const formData = ref(null);
    watch(
      () => props.trigger,
      () => {
        moveNext();
      }
    );
    const moveNext = async () => {
      let tab = 1;
      const { valid } = await formData.value.validate();
      if (valid)
        tab = 2;
      emits("step", tab);
    };
    const setGender = (val) => {
      props.payload.gender = val;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreSelect = __nuxt_component_1$1;
      _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-caption d-flex ga-3 text-grey-darken-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "mdi-information-outline",
                          class: "mt-1"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>Enter your basic informations, such as your names, an initial step in tailoring your online presence to reflect your identity accurately.</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-caption d-flex ga-3 text-grey-darken-2" }, [
                            createVNode(VIcon, {
                              start: "",
                              icon: "mdi-information-outline",
                              class: "mt-1"
                            }),
                            createVNode("span", null, "Enter your basic informations, such as your names, an initial step in tailoring your online presence to reflect your identity accurately.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "formData",
                          ref: formData
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "First name",
                                modelValue: __props.payload.firstname,
                                "onUpdate:modelValue": ($event) => __props.payload.firstname = $event,
                                rules: unref(name)()
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Last name",
                                modelValue: __props.payload.lastname,
                                "onUpdate:modelValue": ($event) => __props.payload.lastname = $event,
                                rules: unref(name)()
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Gender",
                                modelValue: __props.payload.gender,
                                "onUpdate:modelValue": ($event) => __props.payload.gender = $event,
                                id: "selectSellerGender",
                                readonly: "",
                                "append-inner-icon": "mdi-chevron-down"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_AdminCoreSelect, {
                                activator: "#selectSellerGender",
                                list: ["MALE", "FEMALE"],
                                "list-value": __props.payload.gender,
                                onSetItem: setGender
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                size: "small",
                                flat: "",
                                block: "",
                                color: "primary-dark",
                                rounded: "",
                                class: "text-caption",
                                onClick: moveNext
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>Continue</span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, "Continue")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "First name",
                                  modelValue: __props.payload.firstname,
                                  "onUpdate:modelValue": ($event) => __props.payload.firstname = $event,
                                  rules: unref(name)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
                                  label: "Last name",
                                  modelValue: __props.payload.lastname,
                                  "onUpdate:modelValue": ($event) => __props.payload.lastname = $event,
                                  rules: unref(name)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
                                  label: "Gender",
                                  modelValue: __props.payload.gender,
                                  "onUpdate:modelValue": ($event) => __props.payload.gender = $event,
                                  id: "selectSellerGender",
                                  readonly: "",
                                  "append-inner-icon": "mdi-chevron-down"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_AdminCoreSelect, {
                                  activator: "#selectSellerGender",
                                  list: ["MALE", "FEMALE"],
                                  "list-value": __props.payload.gender,
                                  onSetItem: setGender
                                }, null, 8, ["list-value"]),
                                createVNode(VBtn, {
                                  size: "small",
                                  flat: "",
                                  block: "",
                                  color: "primary-dark",
                                  rounded: "",
                                  class: "text-caption",
                                  onClick: moveNext
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Continue")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, {
                            ref_key: "formData",
                            ref: formData
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "First name",
                                modelValue: __props.payload.firstname,
                                "onUpdate:modelValue": ($event) => __props.payload.firstname = $event,
                                rules: unref(name)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VTextField, {
                                label: "Last name",
                                modelValue: __props.payload.lastname,
                                "onUpdate:modelValue": ($event) => __props.payload.lastname = $event,
                                rules: unref(name)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VTextField, {
                                label: "Gender",
                                modelValue: __props.payload.gender,
                                "onUpdate:modelValue": ($event) => __props.payload.gender = $event,
                                id: "selectSellerGender",
                                readonly: "",
                                "append-inner-icon": "mdi-chevron-down"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_AdminCoreSelect, {
                                activator: "#selectSellerGender",
                                list: ["MALE", "FEMALE"],
                                "list-value": __props.payload.gender,
                                onSetItem: setGender
                              }, null, 8, ["list-value"]),
                              createVNode(VBtn, {
                                size: "small",
                                flat: "",
                                block: "",
                                color: "primary-dark",
                                rounded: "",
                                class: "text-caption",
                                onClick: moveNext
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Continue")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-caption d-flex ga-3 text-grey-darken-2" }, [
                          createVNode(VIcon, {
                            start: "",
                            icon: "mdi-information-outline",
                            class: "mt-1"
                          }),
                          createVNode("span", null, "Enter your basic informations, such as your names, an initial step in tailoring your online presence to reflect your identity accurately.")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "7"
                    }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          ref_key: "formData",
                          ref: formData
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "First name",
                              modelValue: __props.payload.firstname,
                              "onUpdate:modelValue": ($event) => __props.payload.firstname = $event,
                              rules: unref(name)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(VTextField, {
                              label: "Last name",
                              modelValue: __props.payload.lastname,
                              "onUpdate:modelValue": ($event) => __props.payload.lastname = $event,
                              rules: unref(name)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(VTextField, {
                              label: "Gender",
                              modelValue: __props.payload.gender,
                              "onUpdate:modelValue": ($event) => __props.payload.gender = $event,
                              id: "selectSellerGender",
                              readonly: "",
                              "append-inner-icon": "mdi-chevron-down"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_AdminCoreSelect, {
                              activator: "#selectSellerGender",
                              list: ["MALE", "FEMALE"],
                              "list-value": __props.payload.gender,
                              onSetItem: setGender
                            }, null, 8, ["list-value"]),
                            createVNode(VBtn, {
                              size: "small",
                              flat: "",
                              block: "",
                              color: "primary-dark",
                              rounded: "",
                              class: "text-caption",
                              onClick: moveNext
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Continue")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 512)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-caption d-flex ga-3 text-grey-darken-2" }, [
                        createVNode(VIcon, {
                          start: "",
                          icon: "mdi-information-outline",
                          class: "mt-1"
                        }),
                        createVNode("span", null, "Enter your basic informations, such as your names, an initial step in tailoring your online presence to reflect your identity accurately.")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "7"
                  }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        ref_key: "formData",
                        ref: formData
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "First name",
                            modelValue: __props.payload.firstname,
                            "onUpdate:modelValue": ($event) => __props.payload.firstname = $event,
                            rules: unref(name)()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VTextField, {
                            label: "Last name",
                            modelValue: __props.payload.lastname,
                            "onUpdate:modelValue": ($event) => __props.payload.lastname = $event,
                            rules: unref(name)()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VTextField, {
                            label: "Gender",
                            modelValue: __props.payload.gender,
                            "onUpdate:modelValue": ($event) => __props.payload.gender = $event,
                            id: "selectSellerGender",
                            readonly: "",
                            "append-inner-icon": "mdi-chevron-down"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_AdminCoreSelect, {
                            activator: "#selectSellerGender",
                            list: ["MALE", "FEMALE"],
                            "list-value": __props.payload.gender,
                            onSetItem: setGender
                          }, null, 8, ["list-value"]),
                          createVNode(VBtn, {
                            size: "small",
                            flat: "",
                            block: "",
                            color: "primary-dark",
                            rounded: "",
                            class: "text-caption",
                            onClick: moveNext
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Continue")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 512)
                    ]),
                    _: 1
                  })
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/shop/business/basic.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "account-setup",
  __ssrInlineRender: true,
  props: {
    payload: Object,
    trigger: Boolean
  },
  emits: ["step"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { number, name, email } = useRules();
    const { loading, error } = storeToRefs(useAppStore());
    const { checkUniqueFields, confirmUser } = useAuthStore();
    const formData = ref(null);
    const formDataUpdate = ref(null);
    const dialog = ref(false);
    const isUnique = ref({});
    const types = ref([
      { title: "VENDOR", value: 8 },
      { title: "EMPLOYER", value: 6 }
    ]);
    const page = ref(1);
    const password = ref("");
    const showPassword = ref(false);
    const roles = computed(() => types.value.map((i) => i.title));
    const role = ref("");
    const setRole = (val) => {
      var _a;
      role.value = isUnique.value.role = val;
      isUnique.value.roleId = (_a = types.value.find((r) => r.title == val)) == null ? void 0 : _a.value;
    };
    const moveNext = async () => {
      let tab = 2;
      const { valid } = await formData.value.validate();
      if (valid) {
        isUnique.value = await checkUniqueFields(props.payload);
        if (isUnique.value.change)
          dialog.value = true;
        else {
          props.payload = Object.assign(props.payload, isUnique.value);
          tab = isUnique.value.change ? 2 : 3;
        }
      }
      setTimeout(
        () => {
          emits("step", tab);
        },
        isUnique.value.error ? 10 : 2e3
      );
    };
    const handleUpdate = async () => {
      const { valid } = await formDataUpdate.value.validate();
      if (valid) {
        page.value = 2;
      }
    };
    const verifyOwnership = async () => {
      try {
        const res = await confirmUser({
          username: props.payload.email,
          password: password.value
        });
        if (res) {
          dialog.value = false;
          props.payload = Object.assign(props.payload, isUnique.value);
          page.value = 1;
          setTimeout(() => {
            emits("step", 4);
          }, 2e3);
        }
      } catch (e) {
        props.payload.change = false;
      }
    };
    watch(
      () => props.trigger,
      () => {
        moveNext();
      }
    );
    const setPhone = (val) => {
      props.payload.phone = val;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Telephone = __nuxt_component_1$2;
      const _component_AdminCoreDialogHeader = __nuxt_component_2$1;
      const _component_AdminCoreSelect = __nuxt_component_1$1;
      _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-caption d-flex ga-3 text-grey-darken-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "mdi-information-outline",
                          class: "mt-1"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>This critical step involves associating your account with distinct email, phone number and username entries, ensuring secure authentication and personalized communication tailored to your identity.</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-caption d-flex ga-3 text-grey-darken-2" }, [
                            createVNode(VIcon, {
                              start: "",
                              icon: "mdi-information-outline",
                              class: "mt-1"
                            }),
                            createVNode("span", null, "This critical step involves associating your account with distinct email, phone number and username entries, ensuring secure authentication and personalized communication tailored to your identity.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "formData",
                          ref: formData
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Email",
                                modelValue: __props.payload.email,
                                "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                                rules: unref(email)()
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Username",
                                modelValue: __props.payload.username,
                                "onUpdate:modelValue": ($event) => __props.payload.username = $event,
                                rules: unref(name)()
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Telephone, {
                                number: __props.payload.phone,
                                onSetPhone: setPhone
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                size: "small",
                                flat: "",
                                block: "",
                                color: "primary-dark",
                                rounded: "",
                                class: "text-caption",
                                onClick: moveNext,
                                loading: unref(loading)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>Verify</span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, "Verify")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Email",
                                  modelValue: __props.payload.email,
                                  "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                                  rules: unref(email)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
                                  label: "Username",
                                  modelValue: __props.payload.username,
                                  "onUpdate:modelValue": ($event) => __props.payload.username = $event,
                                  rules: unref(name)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_Telephone, {
                                  number: __props.payload.phone,
                                  onSetPhone: setPhone
                                }, null, 8, ["number"]),
                                createVNode(VBtn, {
                                  size: "small",
                                  flat: "",
                                  block: "",
                                  color: "primary-dark",
                                  rounded: "",
                                  class: "text-caption",
                                  onClick: moveNext,
                                  loading: unref(loading)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Verify")
                                  ]),
                                  _: 1
                                }, 8, ["loading"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, {
                            ref_key: "formData",
                            ref: formData
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Email",
                                modelValue: __props.payload.email,
                                "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                                rules: unref(email)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(VTextField, {
                                label: "Username",
                                modelValue: __props.payload.username,
                                "onUpdate:modelValue": ($event) => __props.payload.username = $event,
                                rules: unref(name)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_Telephone, {
                                number: __props.payload.phone,
                                onSetPhone: setPhone
                              }, null, 8, ["number"]),
                              createVNode(VBtn, {
                                size: "small",
                                flat: "",
                                block: "",
                                color: "primary-dark",
                                rounded: "",
                                class: "text-caption",
                                onClick: moveNext,
                                loading: unref(loading)
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Verify")
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          }, 512)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-caption d-flex ga-3 text-grey-darken-2" }, [
                          createVNode(VIcon, {
                            start: "",
                            icon: "mdi-information-outline",
                            class: "mt-1"
                          }),
                          createVNode("span", null, "This critical step involves associating your account with distinct email, phone number and username entries, ensuring secure authentication and personalized communication tailored to your identity.")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "7"
                    }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          ref_key: "formData",
                          ref: formData
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Email",
                              modelValue: __props.payload.email,
                              "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                              rules: unref(email)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(VTextField, {
                              label: "Username",
                              modelValue: __props.payload.username,
                              "onUpdate:modelValue": ($event) => __props.payload.username = $event,
                              rules: unref(name)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_Telephone, {
                              number: __props.payload.phone,
                              onSetPhone: setPhone
                            }, null, 8, ["number"]),
                            createVNode(VBtn, {
                              size: "small",
                              flat: "",
                              block: "",
                              color: "primary-dark",
                              rounded: "",
                              class: "text-caption",
                              onClick: moveNext,
                              loading: unref(loading)
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Verify")
                              ]),
                              _: 1
                            }, 8, ["loading"])
                          ]),
                          _: 1
                        }, 512)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDialog, {
              modelValue: unref(dialog),
              "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
              persistent: "",
              width: "500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCard, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AdminCoreDialogHeader, {
                          title: "Warning",
                          onClose: ($event) => dialog.value = false
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardText, { class: "pa-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VWindow, {
                                modelValue: unref(page),
                                "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VWindowItem, { value: 1 }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption d-flex ga-3 mb-5 text-grey-darken-2"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VIcon, {
                                            start: "",
                                            icon: "mdi-alert-outline",
                                            size: "x-large",
                                            color: "warning",
                                            class: "mt-1"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<span${_scopeId6}><p${_scopeId6}>Account Email <strong${_scopeId6}>${ssrInterpolate(unref(isUnique).email)}</strong> already exist as a <strong${_scopeId6}>${ssrInterpolate(unref(isUnique).role)}</strong>.</p><p class="mt-3"${_scopeId6}>Would you like to upgrade this account to Vendor or Employee ?</p></span></div>`);
                                          _push7(ssrRenderComponent(VForm, {
                                            ref_key: "formDataUpdate",
                                            ref: formDataUpdate,
                                            onSubmit: () => {
                                            }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class=""${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Account Type",
                                                  modelValue: unref(role),
                                                  "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                  id: "selectAccountRole",
                                                  readonly: "",
                                                  "append-inner-icon": "mdi-chevron-down"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#selectAccountRole",
                                                  list: unref(roles),
                                                  "list-value": unref(role),
                                                  onSetItem: setRole
                                                }, null, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                                _push8(ssrRenderComponent(VBtn, {
                                                  size: "small",
                                                  flat: "",
                                                  block: "",
                                                  color: "primary-dark",
                                                  rounded: "",
                                                  class: "text-caption",
                                                  onClick: handleUpdate
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<span${_scopeId8}>update account</span>`);
                                                    } else {
                                                      return [
                                                        createVNode("span", null, "update account")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode("div", { class: "" }, [
                                                    createVNode(VTextField, {
                                                      label: "Account Type",
                                                      modelValue: unref(role),
                                                      "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                      id: "selectAccountRole",
                                                      readonly: "",
                                                      "append-inner-icon": "mdi-chevron-down"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_AdminCoreSelect, {
                                                      activator: "#selectAccountRole",
                                                      list: unref(roles),
                                                      "list-value": unref(role),
                                                      onSetItem: setRole
                                                    }, null, 8, ["list", "list-value"])
                                                  ]),
                                                  createVNode(VBtn, {
                                                    size: "small",
                                                    flat: "",
                                                    block: "",
                                                    color: "primary-dark",
                                                    rounded: "",
                                                    class: "text-caption",
                                                    onClick: handleUpdate
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", null, "update account")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption d-flex ga-3 mb-5 text-grey-darken-2" }, [
                                              createVNode(VIcon, {
                                                start: "",
                                                icon: "mdi-alert-outline",
                                                size: "x-large",
                                                color: "warning",
                                                class: "mt-1"
                                              }),
                                              createVNode("span", null, [
                                                createVNode("p", null, [
                                                  createTextVNode("Account Email "),
                                                  createVNode("strong", null, toDisplayString(unref(isUnique).email), 1),
                                                  createTextVNode(" already exist as a "),
                                                  createVNode("strong", null, toDisplayString(unref(isUnique).role), 1),
                                                  createTextVNode(".")
                                                ]),
                                                createVNode("p", { class: "mt-3" }, "Would you like to upgrade this account to Vendor or Employee ?")
                                              ])
                                            ]),
                                            createVNode(VForm, {
                                              ref_key: "formDataUpdate",
                                              ref: formDataUpdate,
                                              onSubmit: withModifiers(() => {
                                              }, ["prevent"])
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "" }, [
                                                  createVNode(VTextField, {
                                                    label: "Account Type",
                                                    modelValue: unref(role),
                                                    "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                    id: "selectAccountRole",
                                                    readonly: "",
                                                    "append-inner-icon": "mdi-chevron-down"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#selectAccountRole",
                                                    list: unref(roles),
                                                    "list-value": unref(role),
                                                    onSetItem: setRole
                                                  }, null, 8, ["list", "list-value"])
                                                ]),
                                                createVNode(VBtn, {
                                                  size: "small",
                                                  flat: "",
                                                  block: "",
                                                  color: "primary-dark",
                                                  rounded: "",
                                                  class: "text-caption",
                                                  onClick: handleUpdate
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", null, "update account")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["onSubmit"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VWindowItem, { value: 2 }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-caption d-flex ga-3 mb-5 text-grey-darken-2"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VIcon, {
                                            start: "",
                                            icon: "mdi-alert-outline",
                                            size: "x-large",
                                            color: "warning",
                                            class: "mt-1"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<span${_scopeId6}><p${_scopeId6}>Please Verify Account Ownership!</p></span></div>`);
                                          _push7(ssrRenderComponent(VForm, {
                                            ref_key: "formDataUpdate",
                                            ref: formDataUpdate,
                                            onSubmit: () => {
                                            }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Enter password",
                                                  class: "mt-1",
                                                  modelValue: unref(password),
                                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                  "prepend-inner-icon": "mdi-lock-outline",
                                                  type: `${unref(showPassword) ? "text" : "password"}`,
                                                  "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                                  "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                                                  onKeypress: verifyOwnership
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  size: "small",
                                                  flat: "",
                                                  block: "",
                                                  color: "primary-dark",
                                                  rounded: "",
                                                  loading: unref(loading),
                                                  class: "text-caption",
                                                  onClick: verifyOwnership
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<span${_scopeId8}>verify</span>`);
                                                    } else {
                                                      return [
                                                        createVNode("span", null, "verify")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Enter password",
                                                    class: "mt-1",
                                                    modelValue: unref(password),
                                                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                    "prepend-inner-icon": "mdi-lock-outline",
                                                    type: `${unref(showPassword) ? "text" : "password"}`,
                                                    "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                                    "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                                                    onKeypress: withKeys(verifyOwnership, ["enter"])
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                                  createVNode(VBtn, {
                                                    size: "small",
                                                    flat: "",
                                                    block: "",
                                                    color: "primary-dark",
                                                    rounded: "",
                                                    loading: unref(loading),
                                                    class: "text-caption",
                                                    onClick: verifyOwnership
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", null, "verify")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["loading"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-caption d-flex ga-3 mb-5 text-grey-darken-2" }, [
                                              createVNode(VIcon, {
                                                start: "",
                                                icon: "mdi-alert-outline",
                                                size: "x-large",
                                                color: "warning",
                                                class: "mt-1"
                                              }),
                                              createVNode("span", null, [
                                                createVNode("p", null, "Please Verify Account Ownership!")
                                              ])
                                            ]),
                                            createVNode(VForm, {
                                              ref_key: "formDataUpdate",
                                              ref: formDataUpdate,
                                              onSubmit: withModifiers(() => {
                                              }, ["prevent"])
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Enter password",
                                                  class: "mt-1",
                                                  modelValue: unref(password),
                                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                  "prepend-inner-icon": "mdi-lock-outline",
                                                  type: `${unref(showPassword) ? "text" : "password"}`,
                                                  "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                                  "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                                                  onKeypress: withKeys(verifyOwnership, ["enter"])
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                                createVNode(VBtn, {
                                                  size: "small",
                                                  flat: "",
                                                  block: "",
                                                  color: "primary-dark",
                                                  rounded: "",
                                                  loading: unref(loading),
                                                  class: "text-caption",
                                                  onClick: verifyOwnership
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", null, "verify")
                                                  ]),
                                                  _: 1
                                                }, 8, ["loading"])
                                              ]),
                                              _: 1
                                            }, 8, ["onSubmit"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VWindowItem, { value: 1 }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption d-flex ga-3 mb-5 text-grey-darken-2" }, [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "mdi-alert-outline",
                                              size: "x-large",
                                              color: "warning",
                                              class: "mt-1"
                                            }),
                                            createVNode("span", null, [
                                              createVNode("p", null, [
                                                createTextVNode("Account Email "),
                                                createVNode("strong", null, toDisplayString(unref(isUnique).email), 1),
                                                createTextVNode(" already exist as a "),
                                                createVNode("strong", null, toDisplayString(unref(isUnique).role), 1),
                                                createTextVNode(".")
                                              ]),
                                              createVNode("p", { class: "mt-3" }, "Would you like to upgrade this account to Vendor or Employee ?")
                                            ])
                                          ]),
                                          createVNode(VForm, {
                                            ref_key: "formDataUpdate",
                                            ref: formDataUpdate,
                                            onSubmit: withModifiers(() => {
                                            }, ["prevent"])
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "" }, [
                                                createVNode(VTextField, {
                                                  label: "Account Type",
                                                  modelValue: unref(role),
                                                  "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                  id: "selectAccountRole",
                                                  readonly: "",
                                                  "append-inner-icon": "mdi-chevron-down"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#selectAccountRole",
                                                  list: unref(roles),
                                                  "list-value": unref(role),
                                                  onSetItem: setRole
                                                }, null, 8, ["list", "list-value"])
                                              ]),
                                              createVNode(VBtn, {
                                                size: "small",
                                                flat: "",
                                                block: "",
                                                color: "primary-dark",
                                                rounded: "",
                                                class: "text-caption",
                                                onClick: handleUpdate
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, "update account")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["onSubmit"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, { value: 2 }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-caption d-flex ga-3 mb-5 text-grey-darken-2" }, [
                                            createVNode(VIcon, {
                                              start: "",
                                              icon: "mdi-alert-outline",
                                              size: "x-large",
                                              color: "warning",
                                              class: "mt-1"
                                            }),
                                            createVNode("span", null, [
                                              createVNode("p", null, "Please Verify Account Ownership!")
                                            ])
                                          ]),
                                          createVNode(VForm, {
                                            ref_key: "formDataUpdate",
                                            ref: formDataUpdate,
                                            onSubmit: withModifiers(() => {
                                            }, ["prevent"])
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Enter password",
                                                class: "mt-1",
                                                modelValue: unref(password),
                                                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                "prepend-inner-icon": "mdi-lock-outline",
                                                type: `${unref(showPassword) ? "text" : "password"}`,
                                                "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                                "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                                                onKeypress: withKeys(verifyOwnership, ["enter"])
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                              createVNode(VBtn, {
                                                size: "small",
                                                flat: "",
                                                block: "",
                                                color: "primary-dark",
                                                rounded: "",
                                                loading: unref(loading),
                                                class: "text-caption",
                                                onClick: verifyOwnership
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, "verify")
                                                ]),
                                                _: 1
                                              }, 8, ["loading"])
                                            ]),
                                            _: 1
                                          }, 8, ["onSubmit"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VWindow, {
                                  modelValue: unref(page),
                                  "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VWindowItem, { value: 1 }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption d-flex ga-3 mb-5 text-grey-darken-2" }, [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "mdi-alert-outline",
                                            size: "x-large",
                                            color: "warning",
                                            class: "mt-1"
                                          }),
                                          createVNode("span", null, [
                                            createVNode("p", null, [
                                              createTextVNode("Account Email "),
                                              createVNode("strong", null, toDisplayString(unref(isUnique).email), 1),
                                              createTextVNode(" already exist as a "),
                                              createVNode("strong", null, toDisplayString(unref(isUnique).role), 1),
                                              createTextVNode(".")
                                            ]),
                                            createVNode("p", { class: "mt-3" }, "Would you like to upgrade this account to Vendor or Employee ?")
                                          ])
                                        ]),
                                        createVNode(VForm, {
                                          ref_key: "formDataUpdate",
                                          ref: formDataUpdate,
                                          onSubmit: withModifiers(() => {
                                          }, ["prevent"])
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "" }, [
                                              createVNode(VTextField, {
                                                label: "Account Type",
                                                modelValue: unref(role),
                                                "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                id: "selectAccountRole",
                                                readonly: "",
                                                "append-inner-icon": "mdi-chevron-down"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#selectAccountRole",
                                                list: unref(roles),
                                                "list-value": unref(role),
                                                onSetItem: setRole
                                              }, null, 8, ["list", "list-value"])
                                            ]),
                                            createVNode(VBtn, {
                                              size: "small",
                                              flat: "",
                                              block: "",
                                              color: "primary-dark",
                                              rounded: "",
                                              class: "text-caption",
                                              onClick: handleUpdate
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, "update account")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onSubmit"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, { value: 2 }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-caption d-flex ga-3 mb-5 text-grey-darken-2" }, [
                                          createVNode(VIcon, {
                                            start: "",
                                            icon: "mdi-alert-outline",
                                            size: "x-large",
                                            color: "warning",
                                            class: "mt-1"
                                          }),
                                          createVNode("span", null, [
                                            createVNode("p", null, "Please Verify Account Ownership!")
                                          ])
                                        ]),
                                        createVNode(VForm, {
                                          ref_key: "formDataUpdate",
                                          ref: formDataUpdate,
                                          onSubmit: withModifiers(() => {
                                          }, ["prevent"])
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Enter password",
                                              class: "mt-1",
                                              modelValue: unref(password),
                                              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                              "prepend-inner-icon": "mdi-lock-outline",
                                              type: `${unref(showPassword) ? "text" : "password"}`,
                                              "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                              "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                                              onKeypress: withKeys(verifyOwnership, ["enter"])
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                            createVNode(VBtn, {
                                              size: "small",
                                              flat: "",
                                              block: "",
                                              color: "primary-dark",
                                              rounded: "",
                                              loading: unref(loading),
                                              class: "text-caption",
                                              onClick: verifyOwnership
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, "verify")
                                              ]),
                                              _: 1
                                            }, 8, ["loading"])
                                          ]),
                                          _: 1
                                        }, 8, ["onSubmit"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AdminCoreDialogHeader, {
                            title: "Warning",
                            onClose: ($event) => dialog.value = false
                          }, null, 8, ["onClose"]),
                          createVNode(VCardText, { class: "pa-4" }, {
                            default: withCtx(() => [
                              createVNode(VWindow, {
                                modelValue: unref(page),
                                "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null
                              }, {
                                default: withCtx(() => [
                                  createVNode(VWindowItem, { value: 1 }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption d-flex ga-3 mb-5 text-grey-darken-2" }, [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "mdi-alert-outline",
                                          size: "x-large",
                                          color: "warning",
                                          class: "mt-1"
                                        }),
                                        createVNode("span", null, [
                                          createVNode("p", null, [
                                            createTextVNode("Account Email "),
                                            createVNode("strong", null, toDisplayString(unref(isUnique).email), 1),
                                            createTextVNode(" already exist as a "),
                                            createVNode("strong", null, toDisplayString(unref(isUnique).role), 1),
                                            createTextVNode(".")
                                          ]),
                                          createVNode("p", { class: "mt-3" }, "Would you like to upgrade this account to Vendor or Employee ?")
                                        ])
                                      ]),
                                      createVNode(VForm, {
                                        ref_key: "formDataUpdate",
                                        ref: formDataUpdate,
                                        onSubmit: withModifiers(() => {
                                        }, ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "" }, [
                                            createVNode(VTextField, {
                                              label: "Account Type",
                                              modelValue: unref(role),
                                              "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                              id: "selectAccountRole",
                                              readonly: "",
                                              "append-inner-icon": "mdi-chevron-down"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#selectAccountRole",
                                              list: unref(roles),
                                              "list-value": unref(role),
                                              onSetItem: setRole
                                            }, null, 8, ["list", "list-value"])
                                          ]),
                                          createVNode(VBtn, {
                                            size: "small",
                                            flat: "",
                                            block: "",
                                            color: "primary-dark",
                                            rounded: "",
                                            class: "text-caption",
                                            onClick: handleUpdate
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, "update account")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onSubmit"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, { value: 2 }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-caption d-flex ga-3 mb-5 text-grey-darken-2" }, [
                                        createVNode(VIcon, {
                                          start: "",
                                          icon: "mdi-alert-outline",
                                          size: "x-large",
                                          color: "warning",
                                          class: "mt-1"
                                        }),
                                        createVNode("span", null, [
                                          createVNode("p", null, "Please Verify Account Ownership!")
                                        ])
                                      ]),
                                      createVNode(VForm, {
                                        ref_key: "formDataUpdate",
                                        ref: formDataUpdate,
                                        onSubmit: withModifiers(() => {
                                        }, ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Enter password",
                                            class: "mt-1",
                                            modelValue: unref(password),
                                            "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                            "prepend-inner-icon": "mdi-lock-outline",
                                            type: `${unref(showPassword) ? "text" : "password"}`,
                                            "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                            "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                                            onKeypress: withKeys(verifyOwnership, ["enter"])
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                          createVNode(VBtn, {
                                            size: "small",
                                            flat: "",
                                            block: "",
                                            color: "primary-dark",
                                            rounded: "",
                                            loading: unref(loading),
                                            class: "text-caption",
                                            onClick: verifyOwnership
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, "verify")
                                            ]),
                                            _: 1
                                          }, 8, ["loading"])
                                        ]),
                                        _: 1
                                      }, 8, ["onSubmit"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCard, null, {
                      default: withCtx(() => [
                        createVNode(_component_AdminCoreDialogHeader, {
                          title: "Warning",
                          onClose: ($event) => dialog.value = false
                        }, null, 8, ["onClose"]),
                        createVNode(VCardText, { class: "pa-4" }, {
                          default: withCtx(() => [
                            createVNode(VWindow, {
                              modelValue: unref(page),
                              "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null
                            }, {
                              default: withCtx(() => [
                                createVNode(VWindowItem, { value: 1 }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption d-flex ga-3 mb-5 text-grey-darken-2" }, [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "mdi-alert-outline",
                                        size: "x-large",
                                        color: "warning",
                                        class: "mt-1"
                                      }),
                                      createVNode("span", null, [
                                        createVNode("p", null, [
                                          createTextVNode("Account Email "),
                                          createVNode("strong", null, toDisplayString(unref(isUnique).email), 1),
                                          createTextVNode(" already exist as a "),
                                          createVNode("strong", null, toDisplayString(unref(isUnique).role), 1),
                                          createTextVNode(".")
                                        ]),
                                        createVNode("p", { class: "mt-3" }, "Would you like to upgrade this account to Vendor or Employee ?")
                                      ])
                                    ]),
                                    createVNode(VForm, {
                                      ref_key: "formDataUpdate",
                                      ref: formDataUpdate,
                                      onSubmit: withModifiers(() => {
                                      }, ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "" }, [
                                          createVNode(VTextField, {
                                            label: "Account Type",
                                            modelValue: unref(role),
                                            "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                            id: "selectAccountRole",
                                            readonly: "",
                                            "append-inner-icon": "mdi-chevron-down"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#selectAccountRole",
                                            list: unref(roles),
                                            "list-value": unref(role),
                                            onSetItem: setRole
                                          }, null, 8, ["list", "list-value"])
                                        ]),
                                        createVNode(VBtn, {
                                          size: "small",
                                          flat: "",
                                          block: "",
                                          color: "primary-dark",
                                          rounded: "",
                                          class: "text-caption",
                                          onClick: handleUpdate
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "update account")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onSubmit"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, { value: 2 }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-caption d-flex ga-3 mb-5 text-grey-darken-2" }, [
                                      createVNode(VIcon, {
                                        start: "",
                                        icon: "mdi-alert-outline",
                                        size: "x-large",
                                        color: "warning",
                                        class: "mt-1"
                                      }),
                                      createVNode("span", null, [
                                        createVNode("p", null, "Please Verify Account Ownership!")
                                      ])
                                    ]),
                                    createVNode(VForm, {
                                      ref_key: "formDataUpdate",
                                      ref: formDataUpdate,
                                      onSubmit: withModifiers(() => {
                                      }, ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Enter password",
                                          class: "mt-1",
                                          modelValue: unref(password),
                                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                          "prepend-inner-icon": "mdi-lock-outline",
                                          type: `${unref(showPassword) ? "text" : "password"}`,
                                          "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                          "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                                          onKeypress: withKeys(verifyOwnership, ["enter"])
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                        createVNode(VBtn, {
                                          size: "small",
                                          flat: "",
                                          block: "",
                                          color: "primary-dark",
                                          rounded: "",
                                          loading: unref(loading),
                                          class: "text-caption",
                                          onClick: verifyOwnership
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "verify")
                                          ]),
                                          _: 1
                                        }, 8, ["loading"])
                                      ]),
                                      _: 1
                                    }, 8, ["onSubmit"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-caption d-flex ga-3 text-grey-darken-2" }, [
                        createVNode(VIcon, {
                          start: "",
                          icon: "mdi-information-outline",
                          class: "mt-1"
                        }),
                        createVNode("span", null, "This critical step involves associating your account with distinct email, phone number and username entries, ensuring secure authentication and personalized communication tailored to your identity.")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "7"
                  }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        ref_key: "formData",
                        ref: formData
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Email",
                            modelValue: __props.payload.email,
                            "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                            rules: unref(email)()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VTextField, {
                            label: "Username",
                            modelValue: __props.payload.username,
                            "onUpdate:modelValue": ($event) => __props.payload.username = $event,
                            rules: unref(name)()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_Telephone, {
                            number: __props.payload.phone,
                            onSetPhone: setPhone
                          }, null, 8, ["number"]),
                          createVNode(VBtn, {
                            size: "small",
                            flat: "",
                            block: "",
                            color: "primary-dark",
                            rounded: "",
                            class: "text-caption",
                            onClick: moveNext,
                            loading: unref(loading)
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Verify")
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ]),
                        _: 1
                      }, 512)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VDialog, {
                modelValue: unref(dialog),
                "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
                persistent: "",
                width: "500"
              }, {
                default: withCtx(() => [
                  createVNode(VCard, null, {
                    default: withCtx(() => [
                      createVNode(_component_AdminCoreDialogHeader, {
                        title: "Warning",
                        onClose: ($event) => dialog.value = false
                      }, null, 8, ["onClose"]),
                      createVNode(VCardText, { class: "pa-4" }, {
                        default: withCtx(() => [
                          createVNode(VWindow, {
                            modelValue: unref(page),
                            "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null
                          }, {
                            default: withCtx(() => [
                              createVNode(VWindowItem, { value: 1 }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-caption d-flex ga-3 mb-5 text-grey-darken-2" }, [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "mdi-alert-outline",
                                      size: "x-large",
                                      color: "warning",
                                      class: "mt-1"
                                    }),
                                    createVNode("span", null, [
                                      createVNode("p", null, [
                                        createTextVNode("Account Email "),
                                        createVNode("strong", null, toDisplayString(unref(isUnique).email), 1),
                                        createTextVNode(" already exist as a "),
                                        createVNode("strong", null, toDisplayString(unref(isUnique).role), 1),
                                        createTextVNode(".")
                                      ]),
                                      createVNode("p", { class: "mt-3" }, "Would you like to upgrade this account to Vendor or Employee ?")
                                    ])
                                  ]),
                                  createVNode(VForm, {
                                    ref_key: "formDataUpdate",
                                    ref: formDataUpdate,
                                    onSubmit: withModifiers(() => {
                                    }, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "" }, [
                                        createVNode(VTextField, {
                                          label: "Account Type",
                                          modelValue: unref(role),
                                          "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                          id: "selectAccountRole",
                                          readonly: "",
                                          "append-inner-icon": "mdi-chevron-down"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#selectAccountRole",
                                          list: unref(roles),
                                          "list-value": unref(role),
                                          onSetItem: setRole
                                        }, null, 8, ["list", "list-value"])
                                      ]),
                                      createVNode(VBtn, {
                                        size: "small",
                                        flat: "",
                                        block: "",
                                        color: "primary-dark",
                                        rounded: "",
                                        class: "text-caption",
                                        onClick: handleUpdate
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "update account")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onSubmit"])
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, { value: 2 }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-caption d-flex ga-3 mb-5 text-grey-darken-2" }, [
                                    createVNode(VIcon, {
                                      start: "",
                                      icon: "mdi-alert-outline",
                                      size: "x-large",
                                      color: "warning",
                                      class: "mt-1"
                                    }),
                                    createVNode("span", null, [
                                      createVNode("p", null, "Please Verify Account Ownership!")
                                    ])
                                  ]),
                                  createVNode(VForm, {
                                    ref_key: "formDataUpdate",
                                    ref: formDataUpdate,
                                    onSubmit: withModifiers(() => {
                                    }, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Enter password",
                                        class: "mt-1",
                                        modelValue: unref(password),
                                        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                        "prepend-inner-icon": "mdi-lock-outline",
                                        type: `${unref(showPassword) ? "text" : "password"}`,
                                        "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                        "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                                        onKeypress: withKeys(verifyOwnership, ["enter"])
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"]),
                                      createVNode(VBtn, {
                                        size: "small",
                                        flat: "",
                                        block: "",
                                        color: "primary-dark",
                                        rounded: "",
                                        loading: unref(loading),
                                        class: "text-caption",
                                        onClick: verifyOwnership
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "verify")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"])
                                    ]),
                                    _: 1
                                  }, 8, ["onSubmit"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/shop/business/account-setup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "credentials",
  __ssrInlineRender: true,
  props: {
    payload: Object,
    trigger: Boolean
  },
  emits: ["step"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { confirmPassword } = useRules();
    const { randPassword } = useHelpers();
    useDevice();
    const formData = ref(null);
    const isPasswordWeak = ref(false);
    const showPassword = ref(false);
    const checkPassword = (val) => {
      isPasswordWeak.value = val;
    };
    const setPassword = (val) => {
      props.payload.password = val;
    };
    watch(
      () => props.trigger,
      () => {
        moveNext();
      }
    );
    const moveNext = async () => {
      let tab = 3;
      const { valid } = await formData.value.validate();
      if (valid)
        tab = 4;
      emits("step", tab);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CorePassword = __nuxt_component_0$2;
      _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-caption d-flex ga-3 text-grey-darken-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "mdi-information-outline",
                          class: "mt-1"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>An essential step in safeguarding your account, where you devise a unique combination of characters, ensuring security and access solely to you.</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-caption d-flex ga-3 text-grey-darken-2" }, [
                            createVNode(VIcon, {
                              start: "",
                              icon: "mdi-information-outline",
                              class: "mt-1"
                            }),
                            createVNode("span", null, "An essential step in safeguarding your account, where you devise a unique combination of characters, ensuring security and access solely to you.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "formData",
                          ref: formData
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-start text-caption mb-2"${_scopeId4}><span class="text-decoration-underline cursor-pointer"${_scopeId4}>Generate password</span></div>`);
                              _push5(ssrRenderComponent(_component_CorePassword, {
                                password: __props.payload.password,
                                "show-password": unref(showPassword),
                                onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                onWeakPassword: checkPassword,
                                onSetPassword: setPassword
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Confirm password",
                                class: "mt-1",
                                modelValue: __props.payload.cpassword,
                                "onUpdate:modelValue": ($event) => __props.payload.cpassword = $event,
                                rules: unref(confirmPassword)(__props.payload.password),
                                "prepend-inner-icon": "mdi-lock-outline",
                                type: `${unref(showPassword) ? "text" : "password"}`,
                                "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                                onKeypress: moveNext
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                size: "small",
                                flat: "",
                                block: "",
                                color: "primary-dark",
                                rounded: "",
                                class: "text-caption",
                                onClick: moveNext
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>Continue</span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, "Continue")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "text-start text-caption mb-2" }, [
                                  createVNode("span", {
                                    class: "text-decoration-underline cursor-pointer",
                                    onClick: ($event) => {
                                      __props.payload.password = __props.payload.cpassword = unref(randPassword)();
                                      showPassword.value = true;
                                    }
                                  }, "Generate password", 8, ["onClick"])
                                ]),
                                createVNode(_component_CorePassword, {
                                  password: __props.payload.password,
                                  "show-password": unref(showPassword),
                                  onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                  onWeakPassword: checkPassword,
                                  onSetPassword: setPassword
                                }, null, 8, ["password", "show-password", "onToggleShowPassword"]),
                                createVNode(VTextField, {
                                  label: "Confirm password",
                                  class: "mt-1",
                                  modelValue: __props.payload.cpassword,
                                  "onUpdate:modelValue": ($event) => __props.payload.cpassword = $event,
                                  rules: unref(confirmPassword)(__props.payload.password),
                                  "prepend-inner-icon": "mdi-lock-outline",
                                  type: `${unref(showPassword) ? "text" : "password"}`,
                                  "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                  "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                                  onKeypress: withKeys(moveNext, ["enter"])
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"]),
                                createVNode(VBtn, {
                                  size: "small",
                                  flat: "",
                                  block: "",
                                  color: "primary-dark",
                                  rounded: "",
                                  class: "text-caption",
                                  onClick: moveNext
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Continue")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VForm, {
                            ref_key: "formData",
                            ref: formData
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-start text-caption mb-2" }, [
                                createVNode("span", {
                                  class: "text-decoration-underline cursor-pointer",
                                  onClick: ($event) => {
                                    __props.payload.password = __props.payload.cpassword = unref(randPassword)();
                                    showPassword.value = true;
                                  }
                                }, "Generate password", 8, ["onClick"])
                              ]),
                              createVNode(_component_CorePassword, {
                                password: __props.payload.password,
                                "show-password": unref(showPassword),
                                onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                onWeakPassword: checkPassword,
                                onSetPassword: setPassword
                              }, null, 8, ["password", "show-password", "onToggleShowPassword"]),
                              createVNode(VTextField, {
                                label: "Confirm password",
                                class: "mt-1",
                                modelValue: __props.payload.cpassword,
                                "onUpdate:modelValue": ($event) => __props.payload.cpassword = $event,
                                rules: unref(confirmPassword)(__props.payload.password),
                                "prepend-inner-icon": "mdi-lock-outline",
                                type: `${unref(showPassword) ? "text" : "password"}`,
                                "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                                onKeypress: withKeys(moveNext, ["enter"])
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"]),
                              createVNode(VBtn, {
                                size: "small",
                                flat: "",
                                block: "",
                                color: "primary-dark",
                                rounded: "",
                                class: "text-caption",
                                onClick: moveNext
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Continue")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-caption d-flex ga-3 text-grey-darken-2" }, [
                          createVNode(VIcon, {
                            start: "",
                            icon: "mdi-information-outline",
                            class: "mt-1"
                          }),
                          createVNode("span", null, "An essential step in safeguarding your account, where you devise a unique combination of characters, ensuring security and access solely to you.")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "7"
                    }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          ref_key: "formData",
                          ref: formData
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-start text-caption mb-2" }, [
                              createVNode("span", {
                                class: "text-decoration-underline cursor-pointer",
                                onClick: ($event) => {
                                  __props.payload.password = __props.payload.cpassword = unref(randPassword)();
                                  showPassword.value = true;
                                }
                              }, "Generate password", 8, ["onClick"])
                            ]),
                            createVNode(_component_CorePassword, {
                              password: __props.payload.password,
                              "show-password": unref(showPassword),
                              onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                              onWeakPassword: checkPassword,
                              onSetPassword: setPassword
                            }, null, 8, ["password", "show-password", "onToggleShowPassword"]),
                            createVNode(VTextField, {
                              label: "Confirm password",
                              class: "mt-1",
                              modelValue: __props.payload.cpassword,
                              "onUpdate:modelValue": ($event) => __props.payload.cpassword = $event,
                              rules: unref(confirmPassword)(__props.payload.password),
                              "prepend-inner-icon": "mdi-lock-outline",
                              type: `${unref(showPassword) ? "text" : "password"}`,
                              "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                              "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                              onKeypress: withKeys(moveNext, ["enter"])
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"]),
                            createVNode(VBtn, {
                              size: "small",
                              flat: "",
                              block: "",
                              color: "primary-dark",
                              rounded: "",
                              class: "text-caption",
                              onClick: moveNext
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Continue")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 512)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-caption d-flex ga-3 text-grey-darken-2" }, [
                        createVNode(VIcon, {
                          start: "",
                          icon: "mdi-information-outline",
                          class: "mt-1"
                        }),
                        createVNode("span", null, "An essential step in safeguarding your account, where you devise a unique combination of characters, ensuring security and access solely to you.")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "7"
                  }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        ref_key: "formData",
                        ref: formData
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-start text-caption mb-2" }, [
                            createVNode("span", {
                              class: "text-decoration-underline cursor-pointer",
                              onClick: ($event) => {
                                __props.payload.password = __props.payload.cpassword = unref(randPassword)();
                                showPassword.value = true;
                              }
                            }, "Generate password", 8, ["onClick"])
                          ]),
                          createVNode(_component_CorePassword, {
                            password: __props.payload.password,
                            "show-password": unref(showPassword),
                            onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                            onWeakPassword: checkPassword,
                            onSetPassword: setPassword
                          }, null, 8, ["password", "show-password", "onToggleShowPassword"]),
                          createVNode(VTextField, {
                            label: "Confirm password",
                            class: "mt-1",
                            modelValue: __props.payload.cpassword,
                            "onUpdate:modelValue": ($event) => __props.payload.cpassword = $event,
                            rules: unref(confirmPassword)(__props.payload.password),
                            "prepend-inner-icon": "mdi-lock-outline",
                            type: `${unref(showPassword) ? "text" : "password"}`,
                            "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                            "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                            onKeypress: withKeys(moveNext, ["enter"])
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"]),
                          createVNode(VBtn, {
                            size: "small",
                            flat: "",
                            block: "",
                            color: "primary-dark",
                            rounded: "",
                            class: "text-caption",
                            onClick: moveNext
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Continue")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 512)
                    ]),
                    _: 1
                  })
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/shop/business/credentials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "preview",
  __ssrInlineRender: true,
  props: {
    payload: Object,
    trigger: Boolean
  },
  emits: ["step", "submit"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const { loading } = storeToRefs(useAppStore());
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-caption d-flex ga-3 text-grey-darken-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          start: "",
                          icon: "mdi-information-outline",
                          class: "mt-1"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span${_scopeId3}>Prior to submission, take a moment to thoroughly examine all provided information, ensuring accuracy and completeness before finalizing the process.</span></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-caption d-flex ga-3 text-grey-darken-2" }, [
                            createVNode(VIcon, {
                              start: "",
                              icon: "mdi-information-outline",
                              class: "mt-1"
                            }),
                            createVNode("span", null, "Prior to submission, take a moment to thoroughly examine all provided information, ensuring accuracy and completeness before finalizing the process.")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          class: "bg-white rounded-lg",
                          elevation: "1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-caption"${_scopeId4}><div class="bg-card pa-2 d-flex align-center"${_scopeId4}><span${_scopeId4}>Account details</span>`);
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "mdi-pencil-outline",
                                title: "Edit",
                                end: "",
                                size: "small",
                                color: "link",
                                onClick: ($event) => emits("step", 0)
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="d-flex flex-column ga-2 pa-3"${_scopeId4}><span${_scopeId4}>Account type : <b${_scopeId4}>${ssrInterpolate(__props.payload.role)}</b></span><span${_scopeId4}>Account category : <b${_scopeId4}>${ssrInterpolate(__props.payload.category)}</b></span></div></div><div class="text-caption"${_scopeId4}><div class="bg-card pa-2 d-flex align-center"${_scopeId4}><span${_scopeId4}>User details</span>`);
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "mdi-pencil-outline",
                                title: "Edit",
                                end: "",
                                size: "small",
                                color: "link",
                                onClick: ($event) => emits("step", 1)
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="d-flex flex-column ga-2 pa-3"${_scopeId4}><span${_scopeId4}>First name : <b${_scopeId4}>${ssrInterpolate(__props.payload.firstname)}</b></span><span${_scopeId4}>Last name : <b${_scopeId4}>${ssrInterpolate(__props.payload.lastname)}</b></span><span${_scopeId4}>Gender : <b${_scopeId4}>${ssrInterpolate(__props.payload.gender)}</b></span></div></div><div class="text-caption"${_scopeId4}><div class="bg-card pa-2 d-flex align-center"${_scopeId4}><span${_scopeId4}>User identifiers</span>`);
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "mdi-pencil-outline",
                                title: "Edit",
                                end: "",
                                size: "small",
                                color: "link",
                                onClick: ($event) => emits("step", 1)
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="d-flex flex-column ga-2 pa-3"${_scopeId4}><span${_scopeId4}>Email address : <b${_scopeId4}>${ssrInterpolate(__props.payload.email)}</b></span><span${_scopeId4}>Username: <b${_scopeId4}>${ssrInterpolate(__props.payload.username)}</b></span><span${_scopeId4}>Telephone number : <b${_scopeId4}>${ssrInterpolate(__props.payload.phone)}</b></span></div></div>`);
                              _push5(ssrRenderComponent(VBtn, {
                                block: "",
                                color: "primary-dark",
                                size: "small",
                                flat: "",
                                class: "text-caption mt-2 rounded-t-0 rounded-b-lg",
                                onClick: ($event) => emits("submit"),
                                loading: unref(loading)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>Submit</span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, "Submit")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "text-caption" }, [
                                  createVNode("div", { class: "bg-card pa-2 d-flex align-center" }, [
                                    createVNode("span", null, "Account details"),
                                    createVNode(VSpacer),
                                    createVNode(VIcon, {
                                      icon: "mdi-pencil-outline",
                                      title: "Edit",
                                      end: "",
                                      size: "small",
                                      color: "link",
                                      onClick: ($event) => emits("step", 0)
                                    }, null, 8, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "d-flex flex-column ga-2 pa-3" }, [
                                    createVNode("span", null, [
                                      createTextVNode("Account type : "),
                                      createVNode("b", null, toDisplayString(__props.payload.role), 1)
                                    ]),
                                    createVNode("span", null, [
                                      createTextVNode("Account category : "),
                                      createVNode("b", null, toDisplayString(__props.payload.category), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "text-caption" }, [
                                  createVNode("div", { class: "bg-card pa-2 d-flex align-center" }, [
                                    createVNode("span", null, "User details"),
                                    createVNode(VSpacer),
                                    createVNode(VIcon, {
                                      icon: "mdi-pencil-outline",
                                      title: "Edit",
                                      end: "",
                                      size: "small",
                                      color: "link",
                                      onClick: ($event) => emits("step", 1)
                                    }, null, 8, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "d-flex flex-column ga-2 pa-3" }, [
                                    createVNode("span", null, [
                                      createTextVNode("First name : "),
                                      createVNode("b", null, toDisplayString(__props.payload.firstname), 1)
                                    ]),
                                    createVNode("span", null, [
                                      createTextVNode("Last name : "),
                                      createVNode("b", null, toDisplayString(__props.payload.lastname), 1)
                                    ]),
                                    createVNode("span", null, [
                                      createTextVNode("Gender : "),
                                      createVNode("b", null, toDisplayString(__props.payload.gender), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "text-caption" }, [
                                  createVNode("div", { class: "bg-card pa-2 d-flex align-center" }, [
                                    createVNode("span", null, "User identifiers"),
                                    createVNode(VSpacer),
                                    createVNode(VIcon, {
                                      icon: "mdi-pencil-outline",
                                      title: "Edit",
                                      end: "",
                                      size: "small",
                                      color: "link",
                                      onClick: ($event) => emits("step", 1)
                                    }, null, 8, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "d-flex flex-column ga-2 pa-3" }, [
                                    createVNode("span", null, [
                                      createTextVNode("Email address : "),
                                      createVNode("b", null, toDisplayString(__props.payload.email), 1)
                                    ]),
                                    createVNode("span", null, [
                                      createTextVNode("Username: "),
                                      createVNode("b", null, toDisplayString(__props.payload.username), 1)
                                    ]),
                                    createVNode("span", null, [
                                      createTextVNode("Telephone number : "),
                                      createVNode("b", null, toDisplayString(__props.payload.phone), 1)
                                    ])
                                  ])
                                ]),
                                createVNode(VBtn, {
                                  block: "",
                                  color: "primary-dark",
                                  size: "small",
                                  flat: "",
                                  class: "text-caption mt-2 rounded-t-0 rounded-b-lg",
                                  onClick: ($event) => emits("submit"),
                                  loading: unref(loading)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Submit")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "loading"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, {
                            class: "bg-white rounded-lg",
                            elevation: "1"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-caption" }, [
                                createVNode("div", { class: "bg-card pa-2 d-flex align-center" }, [
                                  createVNode("span", null, "Account details"),
                                  createVNode(VSpacer),
                                  createVNode(VIcon, {
                                    icon: "mdi-pencil-outline",
                                    title: "Edit",
                                    end: "",
                                    size: "small",
                                    color: "link",
                                    onClick: ($event) => emits("step", 0)
                                  }, null, 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "d-flex flex-column ga-2 pa-3" }, [
                                  createVNode("span", null, [
                                    createTextVNode("Account type : "),
                                    createVNode("b", null, toDisplayString(__props.payload.role), 1)
                                  ]),
                                  createVNode("span", null, [
                                    createTextVNode("Account category : "),
                                    createVNode("b", null, toDisplayString(__props.payload.category), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "text-caption" }, [
                                createVNode("div", { class: "bg-card pa-2 d-flex align-center" }, [
                                  createVNode("span", null, "User details"),
                                  createVNode(VSpacer),
                                  createVNode(VIcon, {
                                    icon: "mdi-pencil-outline",
                                    title: "Edit",
                                    end: "",
                                    size: "small",
                                    color: "link",
                                    onClick: ($event) => emits("step", 1)
                                  }, null, 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "d-flex flex-column ga-2 pa-3" }, [
                                  createVNode("span", null, [
                                    createTextVNode("First name : "),
                                    createVNode("b", null, toDisplayString(__props.payload.firstname), 1)
                                  ]),
                                  createVNode("span", null, [
                                    createTextVNode("Last name : "),
                                    createVNode("b", null, toDisplayString(__props.payload.lastname), 1)
                                  ]),
                                  createVNode("span", null, [
                                    createTextVNode("Gender : "),
                                    createVNode("b", null, toDisplayString(__props.payload.gender), 1)
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "text-caption" }, [
                                createVNode("div", { class: "bg-card pa-2 d-flex align-center" }, [
                                  createVNode("span", null, "User identifiers"),
                                  createVNode(VSpacer),
                                  createVNode(VIcon, {
                                    icon: "mdi-pencil-outline",
                                    title: "Edit",
                                    end: "",
                                    size: "small",
                                    color: "link",
                                    onClick: ($event) => emits("step", 1)
                                  }, null, 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "d-flex flex-column ga-2 pa-3" }, [
                                  createVNode("span", null, [
                                    createTextVNode("Email address : "),
                                    createVNode("b", null, toDisplayString(__props.payload.email), 1)
                                  ]),
                                  createVNode("span", null, [
                                    createTextVNode("Username: "),
                                    createVNode("b", null, toDisplayString(__props.payload.username), 1)
                                  ]),
                                  createVNode("span", null, [
                                    createTextVNode("Telephone number : "),
                                    createVNode("b", null, toDisplayString(__props.payload.phone), 1)
                                  ])
                                ])
                              ]),
                              createVNode(VBtn, {
                                block: "",
                                color: "primary-dark",
                                size: "small",
                                flat: "",
                                class: "text-caption mt-2 rounded-t-0 rounded-b-lg",
                                onClick: ($event) => emits("submit"),
                                loading: unref(loading)
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Submit")
                                ]),
                                _: 1
                              }, 8, ["onClick", "loading"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "5"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-caption d-flex ga-3 text-grey-darken-2" }, [
                          createVNode(VIcon, {
                            start: "",
                            icon: "mdi-information-outline",
                            class: "mt-1"
                          }),
                          createVNode("span", null, "Prior to submission, take a moment to thoroughly examine all provided information, ensuring accuracy and completeness before finalizing the process.")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "7"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "bg-white rounded-lg",
                          elevation: "1"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-caption" }, [
                              createVNode("div", { class: "bg-card pa-2 d-flex align-center" }, [
                                createVNode("span", null, "Account details"),
                                createVNode(VSpacer),
                                createVNode(VIcon, {
                                  icon: "mdi-pencil-outline",
                                  title: "Edit",
                                  end: "",
                                  size: "small",
                                  color: "link",
                                  onClick: ($event) => emits("step", 0)
                                }, null, 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "d-flex flex-column ga-2 pa-3" }, [
                                createVNode("span", null, [
                                  createTextVNode("Account type : "),
                                  createVNode("b", null, toDisplayString(__props.payload.role), 1)
                                ]),
                                createVNode("span", null, [
                                  createTextVNode("Account category : "),
                                  createVNode("b", null, toDisplayString(__props.payload.category), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "text-caption" }, [
                              createVNode("div", { class: "bg-card pa-2 d-flex align-center" }, [
                                createVNode("span", null, "User details"),
                                createVNode(VSpacer),
                                createVNode(VIcon, {
                                  icon: "mdi-pencil-outline",
                                  title: "Edit",
                                  end: "",
                                  size: "small",
                                  color: "link",
                                  onClick: ($event) => emits("step", 1)
                                }, null, 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "d-flex flex-column ga-2 pa-3" }, [
                                createVNode("span", null, [
                                  createTextVNode("First name : "),
                                  createVNode("b", null, toDisplayString(__props.payload.firstname), 1)
                                ]),
                                createVNode("span", null, [
                                  createTextVNode("Last name : "),
                                  createVNode("b", null, toDisplayString(__props.payload.lastname), 1)
                                ]),
                                createVNode("span", null, [
                                  createTextVNode("Gender : "),
                                  createVNode("b", null, toDisplayString(__props.payload.gender), 1)
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "text-caption" }, [
                              createVNode("div", { class: "bg-card pa-2 d-flex align-center" }, [
                                createVNode("span", null, "User identifiers"),
                                createVNode(VSpacer),
                                createVNode(VIcon, {
                                  icon: "mdi-pencil-outline",
                                  title: "Edit",
                                  end: "",
                                  size: "small",
                                  color: "link",
                                  onClick: ($event) => emits("step", 1)
                                }, null, 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "d-flex flex-column ga-2 pa-3" }, [
                                createVNode("span", null, [
                                  createTextVNode("Email address : "),
                                  createVNode("b", null, toDisplayString(__props.payload.email), 1)
                                ]),
                                createVNode("span", null, [
                                  createTextVNode("Username: "),
                                  createVNode("b", null, toDisplayString(__props.payload.username), 1)
                                ]),
                                createVNode("span", null, [
                                  createTextVNode("Telephone number : "),
                                  createVNode("b", null, toDisplayString(__props.payload.phone), 1)
                                ])
                              ])
                            ]),
                            createVNode(VBtn, {
                              block: "",
                              color: "primary-dark",
                              size: "small",
                              flat: "",
                              class: "text-caption mt-2 rounded-t-0 rounded-b-lg",
                              onClick: ($event) => emits("submit"),
                              loading: unref(loading)
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Submit")
                              ]),
                              _: 1
                            }, 8, ["onClick", "loading"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "5"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-caption d-flex ga-3 text-grey-darken-2" }, [
                        createVNode(VIcon, {
                          start: "",
                          icon: "mdi-information-outline",
                          class: "mt-1"
                        }),
                        createVNode("span", null, "Prior to submission, take a moment to thoroughly examine all provided information, ensuring accuracy and completeness before finalizing the process.")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "7"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        class: "bg-white rounded-lg",
                        elevation: "1"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-caption" }, [
                            createVNode("div", { class: "bg-card pa-2 d-flex align-center" }, [
                              createVNode("span", null, "Account details"),
                              createVNode(VSpacer),
                              createVNode(VIcon, {
                                icon: "mdi-pencil-outline",
                                title: "Edit",
                                end: "",
                                size: "small",
                                color: "link",
                                onClick: ($event) => emits("step", 0)
                              }, null, 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "d-flex flex-column ga-2 pa-3" }, [
                              createVNode("span", null, [
                                createTextVNode("Account type : "),
                                createVNode("b", null, toDisplayString(__props.payload.role), 1)
                              ]),
                              createVNode("span", null, [
                                createTextVNode("Account category : "),
                                createVNode("b", null, toDisplayString(__props.payload.category), 1)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "text-caption" }, [
                            createVNode("div", { class: "bg-card pa-2 d-flex align-center" }, [
                              createVNode("span", null, "User details"),
                              createVNode(VSpacer),
                              createVNode(VIcon, {
                                icon: "mdi-pencil-outline",
                                title: "Edit",
                                end: "",
                                size: "small",
                                color: "link",
                                onClick: ($event) => emits("step", 1)
                              }, null, 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "d-flex flex-column ga-2 pa-3" }, [
                              createVNode("span", null, [
                                createTextVNode("First name : "),
                                createVNode("b", null, toDisplayString(__props.payload.firstname), 1)
                              ]),
                              createVNode("span", null, [
                                createTextVNode("Last name : "),
                                createVNode("b", null, toDisplayString(__props.payload.lastname), 1)
                              ]),
                              createVNode("span", null, [
                                createTextVNode("Gender : "),
                                createVNode("b", null, toDisplayString(__props.payload.gender), 1)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "text-caption" }, [
                            createVNode("div", { class: "bg-card pa-2 d-flex align-center" }, [
                              createVNode("span", null, "User identifiers"),
                              createVNode(VSpacer),
                              createVNode(VIcon, {
                                icon: "mdi-pencil-outline",
                                title: "Edit",
                                end: "",
                                size: "small",
                                color: "link",
                                onClick: ($event) => emits("step", 1)
                              }, null, 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "d-flex flex-column ga-2 pa-3" }, [
                              createVNode("span", null, [
                                createTextVNode("Email address : "),
                                createVNode("b", null, toDisplayString(__props.payload.email), 1)
                              ]),
                              createVNode("span", null, [
                                createTextVNode("Username: "),
                                createVNode("b", null, toDisplayString(__props.payload.username), 1)
                              ]),
                              createVNode("span", null, [
                                createTextVNode("Telephone number : "),
                                createVNode("b", null, toDisplayString(__props.payload.phone), 1)
                              ])
                            ])
                          ]),
                          createVNode(VBtn, {
                            block: "",
                            color: "primary-dark",
                            size: "small",
                            flat: "",
                            class: "text-caption mt-2 rounded-t-0 rounded-b-lg",
                            onClick: ($event) => emits("submit"),
                            loading: unref(loading)
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Submit")
                            ]),
                            _: 1
                          }, 8, ["onClick", "loading"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/shop/business/preview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const { createUser, upgradeUser } = useAuthStore();
    const { error } = storeToRefs(useAppStore());
    const payload = ref({
      email: "",
      phone: "",
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      cpassword: "",
      roleId: 8,
      picture: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=170667a&w=0&h=zP3l7WJinOFaGb2i1F4g8IS2ylw0FlIaa6x3tP9sebU=",
      gender: "",
      type: "",
      role: "",
      category: ""
    });
    const tab = ref(0);
    const sections = [
      { title: "Account details", icon: "mdi-playlist-check" },
      { title: "User details", icon: "mdi-account-circle-outline" },
      { title: "User identifiers", icon: "mdi-key-outline" },
      { title: "User credentials", icon: "mdi-lock-outline" },
      { title: "Preview", icon: "mdi-file-outline" }
    ];
    const triggers = ref({
      stepOne: false,
      stepTwo: false,
      stepThree: false,
      stepFour: false,
      stepFive: false
    });
    const navigate = (step) => {
      tab.value = step;
    };
    const validation = (index) => {
      switch (index) {
        case 0:
          triggers.value.stepOne = !triggers.value.stepOne;
          break;
        case 1:
          triggers.value.stepTwo = !triggers.value.stepTwo;
          break;
        case 2:
          triggers.value.stepThree = !triggers.value.stepThree;
          break;
        case 3:
          triggers.value.stepFour = !triggers.value.stepFour;
          break;
        case 4:
          triggers.value.stepFive = !triggers.value.stepFive;
          break;
      }
    };
    const submit = async () => {
      if (payload.value.change)
        await upgradeUser(payload.value);
      else
        await createUser(payload.value);
      if (!error.value)
        setTimeout(() => {
          navigateTo({
            name: "auth"
          });
        }, 2e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreStepper = __nuxt_component_0$1;
      const _component_ClientShopBusinessAccountType = __nuxt_component_1;
      const _component_ClientShopBusinessBasic = __nuxt_component_2;
      const _component_ClientShopBusinessAccountSetup = __nuxt_component_3;
      const _component_ClientShopBusinessCredentials = __nuxt_component_4;
      const _component_ClientShopBusinessPreview = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminCoreStepper, {
        step: unref(tab),
        sections,
        onNavigate: navigate,
        onValidation: validation,
        onSave: submit
      }, null, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(tab),
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VWindowItem, { value: 0 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientShopBusinessAccountType, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepOne,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientShopBusinessAccountType, {
                      payload: unref(payload),
                      trigger: unref(triggers).stepOne,
                      onStep: navigate
                    }, null, 8, ["payload", "trigger"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: 1 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientShopBusinessBasic, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepTwo,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientShopBusinessBasic, {
                      payload: unref(payload),
                      trigger: unref(triggers).stepTwo,
                      onStep: navigate
                    }, null, 8, ["payload", "trigger"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: 2 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientShopBusinessAccountSetup, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepThree,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientShopBusinessAccountSetup, {
                      payload: unref(payload),
                      trigger: unref(triggers).stepThree,
                      onStep: navigate
                    }, null, 8, ["payload", "trigger"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: 3 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientShopBusinessCredentials, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepFour,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientShopBusinessCredentials, {
                      payload: unref(payload),
                      trigger: unref(triggers).stepFour,
                      onStep: navigate
                    }, null, 8, ["payload", "trigger"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: 4 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ClientShopBusinessPreview, {
                    payload: unref(payload),
                    onStep: navigate,
                    onSubmit: submit
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ClientShopBusinessPreview, {
                      payload: unref(payload),
                      onStep: navigate,
                      onSubmit: submit
                    }, null, 8, ["payload"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VWindowItem, { value: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_ClientShopBusinessAccountType, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepOne,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_ClientShopBusinessBasic, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepTwo,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 2 }, {
                default: withCtx(() => [
                  createVNode(_component_ClientShopBusinessAccountSetup, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepThree,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 3 }, {
                default: withCtx(() => [
                  createVNode(_component_ClientShopBusinessCredentials, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepFour,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 4 }, {
                default: withCtx(() => [
                  createVNode(_component_ClientShopBusinessPreview, {
                    payload: unref(payload),
                    onStep: navigate,
                    onSubmit: submit
                  }, null, 8, ["payload"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/shop/business/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;
const _imports_0 = "" + publicAssetsURL("logos/access-light-no-tag.png");
const makeVCarouselProps = propsFactory({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: IconValue,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (value) => Number(value) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...makeVWindowProps({
    continuous: true,
    mandatory: "force",
    showArrows: true
  })
}, "VCarousel");
const VCarousel = genericComponent()({
  name: "VCarousel",
  props: makeVCarouselProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      t
    } = useLocale();
    const windowRef = ref();
    let slideTimeout = -1;
    watch(model, restartTimeout);
    watch(() => props.interval, restartTimeout);
    watch(() => props.cycle, (val) => {
      if (val)
        restartTimeout();
      else
        (void 0).clearTimeout(slideTimeout);
    });
    function startTimeout() {
      if (!props.cycle || !windowRef.value)
        return;
      slideTimeout = (void 0).setTimeout(windowRef.value.group.next, +props.interval > 0 ? +props.interval : 6e3);
    }
    function restartTimeout() {
      (void 0).clearTimeout(slideTimeout);
      (void 0).requestAnimationFrame(startTimeout);
    }
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "ref": windowRef
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-carousel", {
          "v-carousel--hide-delimiter-background": props.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": props.verticalDelimiters
        }, props.class],
        "style": [{
          height: convertToUnit(props.height)
        }, props.style]
      }), {
        default: slots.default,
        additional: (_ref2) => {
          let {
            group
          } = _ref2;
          return createVNode(Fragment, null, [!props.hideDelimiters && createVNode("div", {
            "class": "v-carousel__controls",
            "style": {
              left: props.verticalDelimiters === "left" && props.verticalDelimiters ? 0 : "auto",
              right: props.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [group.items.value.length > 0 && createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                color: props.color,
                icon: props.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            "scoped": true
          }, {
            default: () => [group.items.value.map((item, index) => {
              const props2 = {
                id: `carousel-item-${item.id}`,
                "aria-label": t("$vuetify.carousel.ariaLabel.delimiter", index + 1, group.items.value.length),
                class: ["v-carousel__controls__item", group.isSelected(item.id) && "v-btn--active"],
                onClick: () => group.select(item.id, true)
              };
              return slots.item ? slots.item({
                props: props2,
                item
              }) : createVNode(VBtn, mergeProps(item, props2), null);
            })]
          })]), props.progress && createVNode(VProgressLinear, {
            "class": "v-carousel__progress",
            "color": typeof props.progress === "string" ? props.progress : void 0,
            "modelValue": (group.getItemIndex(model.value) + 1) / group.items.value.length * 100
          }, null)]);
        },
        prev: slots.prev,
        next: slots.next
      });
    });
    return {};
  }
});
const makeVCarouselItemProps = propsFactory({
  ...makeVImgProps(),
  ...makeVWindowItemProps()
}, "VCarouselItem");
const VCarouselItem = genericComponent()({
  name: "VCarouselItem",
  inheritAttrs: false,
  props: makeVCarouselItemProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    useRender(() => {
      const imgProps = VImg.filterProps(props);
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "class": "v-carousel-item"
      }, windowItemProps), {
        default: () => [createVNode(VImg, mergeProps(attrs, imgProps), slots)]
      });
    });
  }
});

export { VCarousel as V, _imports_0 as _, VCarouselItem as a, __nuxt_component_0 as b };
//# sourceMappingURL=VCarouselItem-ELKWuvLF.mjs.map
