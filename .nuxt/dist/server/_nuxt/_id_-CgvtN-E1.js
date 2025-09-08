import { _ as __nuxt_component_0$2 } from "./page-details-header-qIUvG5F0.js";
import { _ as __nuxt_component_2$1, a as __nuxt_component_3$1, b as __nuxt_component_7 } from "./contact-CdUCYIRq.js";
import { _ as __nuxt_component_0 } from "./stepper-ipq6mb5U.js";
import { u as useRules } from "./useRules-Lv1tnQPg.js";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { ref, watch, mergeProps, withCtx, createVNode, unref, useSSRContext, isRef, withAsyncContext, watchEffect, toDisplayString, openBlock, createBlock } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { V as VForm } from "./VForm-wrdi8IEW.js";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { V as VTextField } from "./VTextField-8SU2p1Ep.js";
import { _ as __nuxt_component_0$1 } from "./mid-screen-layout-b8tbDczG.js";
import { _ as __nuxt_component_4 } from "./editor-JUAoNM3K.js";
import { h as useAppStore, s as storeToRefs, b as navigateTo, l as useRoute } from "../server.mjs";
import "hookable";
import { a as useSeoMeta } from "./index-S1hhTCs3.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { u as useBusinessStore } from "./business-1K3_QQBT.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-BpMO-iOS.js";
import { _ as __nuxt_component_3$2 } from "./delete-confirmation-8DYwAm4D.js";
import { u as useBusinessTypeStore } from "./business-types-8YqDhEuJ.js";
import { V as VSpacer } from "./VSpacer-0DxA8eQn.js";
import "./page-header-rZyOPLsZ.js";
import "./index-3E7yy1qS.js";
import "./color-rZjm0Y7u.js";
import "./tag-pIHjuosL.js";
import "./VBtn-yNf12l4D.js";
import "./rounded-jA9LRAgf.js";
import "./position-AkaJaFJy.js";
import "./resizeObserver-k8M9k6Xi.js";
import "./VDivider-Ce8J4Sp3.js";
import "./index-RXRlxYy9.js";
import "./VDialog-acnQ15uX.js";
import "./VCard-MEGoD2_3.js";
import "./VAvatar-agmUyvkw.js";
import "./VImg-_57rVikU.js";
import "./index-q-0zZOOG.js";
import "./VOverlay-bpCAw6Z_.js";
import "./delay-5iXTA9KV.js";
import "./lazy-8QocgoLY.js";
import "./VMenu-bZwLMGPK.js";
import "vue-advanced-cropper";
import "./select-sjn27vix.js";
import "./VList-hhjvxiav.js";
import "./index-d8gkbdU6.js";
import "./ssrBoot-xH9VG8QW.js";
import "./VCheckbox-Omi4Z8sK.js";
import "./VCheckboxBtn-lCSbAwQG.js";
import "./VSelectionControl-t8h0Xxrv.js";
import "./calendar-date-IHPjl74u.js";
import "./VSheet-9iAoR9Ls.js";
import "./telephone-Dluk3I-7.js";
import "date-fns";
import "date-fns/locale";
/* empty css               */
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "@vue/devtools-api";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
const _sfc_main$3 = {
  __name: "address-inputs",
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
    const { digitsOnly } = useHelpers();
    const formData = ref(null);
    watch(
      () => props.trigger,
      () => {
        moveNext();
      }
    );
    const moveNext = async () => {
      let tab = 2;
      const { valid } = await formData.value.validate();
      if (valid)
        tab = 3;
      emits("step", tab);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({
        ref_key: "formData",
        ref: formData
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, { class: "pa-0 row-form-data" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Country",
                                modelValue: __props.payload.address.country,
                                "onUpdate:modelValue": ($event) => __props.payload.address.country = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Country",
                                  modelValue: __props.payload.address.country,
                                  "onUpdate:modelValue": ($event) => __props.payload.address.country = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Province",
                                modelValue: __props.payload.address.province,
                                "onUpdate:modelValue": ($event) => __props.payload.address.province = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Province",
                                  modelValue: __props.payload.address.province,
                                  "onUpdate:modelValue": ($event) => __props.payload.address.province = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Town",
                                modelValue: __props.payload.address.town,
                                "onUpdate:modelValue": ($event) => __props.payload.address.town = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Town",
                                  modelValue: __props.payload.address.town,
                                  "onUpdate:modelValue": ($event) => __props.payload.address.town = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Commune",
                                modelValue: __props.payload.address.commune,
                                "onUpdate:modelValue": ($event) => __props.payload.address.commune = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Commune",
                                  modelValue: __props.payload.address.commune,
                                  "onUpdate:modelValue": ($event) => __props.payload.address.commune = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Quartier",
                                modelValue: __props.payload.address.quartier,
                                "onUpdate:modelValue": ($event) => __props.payload.address.quartier = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Quartier",
                                  modelValue: __props.payload.address.quartier,
                                  "onUpdate:modelValue": ($event) => __props.payload.address.quartier = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Avenue",
                                modelValue: __props.payload.address.avenue,
                                "onUpdate:modelValue": ($event) => __props.payload.address.avenue = $event,
                                rules: unref(required)()
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Avenue",
                                  modelValue: __props.payload.address.avenue,
                                  "onUpdate:modelValue": ($event) => __props.payload.address.avenue = $event,
                                  rules: unref(required)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "No",
                                modelValue: __props.payload.address.no,
                                "onUpdate:modelValue": ($event) => __props.payload.address.no = $event,
                                rules: unref(required)(),
                                onKeypress: unref(digitsOnly)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "No",
                                  modelValue: __props.payload.address.no,
                                  "onUpdate:modelValue": ($event) => __props.payload.address.no = $event,
                                  rules: unref(required)(),
                                  onKeypress: unref(digitsOnly)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onKeypress"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Country",
                                modelValue: __props.payload.address.country,
                                "onUpdate:modelValue": ($event) => __props.payload.address.country = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Province",
                                modelValue: __props.payload.address.province,
                                "onUpdate:modelValue": ($event) => __props.payload.address.province = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Town",
                                modelValue: __props.payload.address.town,
                                "onUpdate:modelValue": ($event) => __props.payload.address.town = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Commune",
                                modelValue: __props.payload.address.commune,
                                "onUpdate:modelValue": ($event) => __props.payload.address.commune = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Quartier",
                                modelValue: __props.payload.address.quartier,
                                "onUpdate:modelValue": ($event) => __props.payload.address.quartier = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Avenue",
                                modelValue: __props.payload.address.avenue,
                                "onUpdate:modelValue": ($event) => __props.payload.address.avenue = $event,
                                rules: unref(required)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "No",
                                modelValue: __props.payload.address.no,
                                "onUpdate:modelValue": ($event) => __props.payload.address.no = $event,
                                rules: unref(required)(),
                                onKeypress: unref(digitsOnly)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onKeypress"])
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
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Country",
                              modelValue: __props.payload.address.country,
                              "onUpdate:modelValue": ($event) => __props.payload.address.country = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Province",
                              modelValue: __props.payload.address.province,
                              "onUpdate:modelValue": ($event) => __props.payload.address.province = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Town",
                              modelValue: __props.payload.address.town,
                              "onUpdate:modelValue": ($event) => __props.payload.address.town = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Commune",
                              modelValue: __props.payload.address.commune,
                              "onUpdate:modelValue": ($event) => __props.payload.address.commune = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Quartier",
                              modelValue: __props.payload.address.quartier,
                              "onUpdate:modelValue": ($event) => __props.payload.address.quartier = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Avenue",
                              modelValue: __props.payload.address.avenue,
                              "onUpdate:modelValue": ($event) => __props.payload.address.avenue = $event,
                              rules: unref(required)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "6"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "No",
                              modelValue: __props.payload.address.no,
                              "onUpdate:modelValue": ($event) => __props.payload.address.no = $event,
                              rules: unref(required)(),
                              onKeypress: unref(digitsOnly)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onKeypress"])
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
              createVNode(VContainer, { class: "pa-0 row-form-data" }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Country",
                            modelValue: __props.payload.address.country,
                            "onUpdate:modelValue": ($event) => __props.payload.address.country = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Province",
                            modelValue: __props.payload.address.province,
                            "onUpdate:modelValue": ($event) => __props.payload.address.province = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Town",
                            modelValue: __props.payload.address.town,
                            "onUpdate:modelValue": ($event) => __props.payload.address.town = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Commune",
                            modelValue: __props.payload.address.commune,
                            "onUpdate:modelValue": ($event) => __props.payload.address.commune = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Quartier",
                            modelValue: __props.payload.address.quartier,
                            "onUpdate:modelValue": ($event) => __props.payload.address.quartier = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Avenue",
                            modelValue: __props.payload.address.avenue,
                            "onUpdate:modelValue": ($event) => __props.payload.address.avenue = $event,
                            rules: unref(required)()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "No",
                            modelValue: __props.payload.address.no,
                            "onUpdate:modelValue": ($event) => __props.payload.address.no = $event,
                            rules: unref(required)(),
                            onKeypress: unref(digitsOnly)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onKeypress"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/address-inputs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "others",
  __ssrInlineRender: true,
  props: {
    payload: Object,
    trigger: Boolean
  },
  emits: ["step"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    useAppStore();
    const formData = ref(null);
    watch(
      () => props.trigger,
      () => {
        moveNext();
      }
    );
    const moveNext = async () => {
      let tab = 4;
      emits("step", tab);
    };
    const setSummary = (val) => {
      props.payload.summary = val;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Editor = __nuxt_component_4;
      _push(ssrRenderComponent(VForm, mergeProps({
        ref_key: "formData",
        ref: formData,
        class: "py-1"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTextField, {
              label: "Website",
              modelValue: __props.payload.website,
              "onUpdate:modelValue": ($event) => __props.payload.website = $event
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-caption mt-1"${_scopeId}><span${_scopeId}>Business summary</span>`);
            _push2(ssrRenderComponent(_component_Editor, {
              text: __props.payload.summary,
              onSetText: setSummary
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(VTextField, {
                label: "Website",
                modelValue: __props.payload.website,
                "onUpdate:modelValue": ($event) => __props.payload.website = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "text-caption mt-1" }, [
                createVNode("span", null, "Business summary"),
                createVNode(_component_Editor, {
                  text: __props.payload.summary,
                  onSetText: setSummary
                }, null, 8, ["text"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/business/create/others.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    payload: Object,
    update: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { error } = storeToRefs(useAppStore());
    const { createBusiness, updateBusiness } = useBusinessStore();
    const tab = ref(0);
    const sections = [
      { title: "Basic Info", icon: "mdi-folder-information-outline" },
      { title: "Contact", icon: "mdi-phone-outline" },
      { title: "Address", icon: "mdi-map-marker-outline" },
      { title: "Other details", icon: "mdi-menu" },
      { title: "Preview", icon: "mdi-file-outline" }
    ];
    const triggers = ref({
      stepOne: false,
      stepTwo: false,
      stepThree: false,
      stepFour: false
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
      }
    };
    const submit = async () => {
      props.update ? await updateBusiness(props.payload) : await createBusiness(props.payload);
      if (!error.value)
        setTimeout(() => {
          navigateTo({
            name: "admin-businesses"
          });
        }, 2e3);
    };
    useSeoMeta({
      title: "Business details"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreStepper = __nuxt_component_0;
      const _component_AdminBusinessCreateBasic = __nuxt_component_2$1;
      const _component_AdminBusinessCreateContact = __nuxt_component_3$1;
      const _component_AdminAddressInputs = __nuxt_component_3;
      const _component_CoreMidScreenLayout = __nuxt_component_0$1;
      const _component_AdminBusinessCreateOthers = __nuxt_component_5;
      const _component_AdminBusinessPreview = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AdminCoreStepper, {
        step: unref(tab),
        sections,
        action: true,
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
                  _push3(ssrRenderComponent(_component_AdminBusinessCreateBasic, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepOne,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminBusinessCreateBasic, {
                      payload: __props.payload,
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
                  _push3(ssrRenderComponent(_component_AdminBusinessCreateContact, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepTwo,
                    update: __props.update,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminBusinessCreateContact, {
                      payload: __props.payload,
                      trigger: unref(triggers).stepTwo,
                      update: __props.update,
                      onStep: navigate
                    }, null, 8, ["payload", "trigger", "update"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: 2 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AdminAddressInputs, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepThree,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminAddressInputs, {
                      payload: __props.payload,
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
                  _push3(ssrRenderComponent(_component_CoreMidScreenLayout, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mt-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_AdminBusinessCreateOthers, {
                          payload: __props.payload,
                          trigger: unref(triggers).stepFour,
                          onStep: navigate
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mt-3" }, [
                            createVNode(_component_AdminBusinessCreateOthers, {
                              payload: __props.payload,
                              trigger: unref(triggers).stepFour,
                              onStep: navigate
                            }, null, 8, ["payload", "trigger"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CoreMidScreenLayout, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mt-3" }, [
                          createVNode(_component_AdminBusinessCreateOthers, {
                            payload: __props.payload,
                            trigger: unref(triggers).stepFour,
                            onStep: navigate
                          }, null, 8, ["payload", "trigger"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: 4 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CoreMidScreenLayout, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AdminBusinessPreview, { payload: __props.payload }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AdminBusinessPreview, { payload: __props.payload }, null, 8, ["payload"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CoreMidScreenLayout, null, {
                      default: withCtx(() => [
                        createVNode(_component_AdminBusinessPreview, { payload: __props.payload }, null, 8, ["payload"])
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
              createVNode(VWindowItem, { value: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminBusinessCreateBasic, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepOne,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminBusinessCreateContact, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepTwo,
                    update: __props.update,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger", "update"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 2 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminAddressInputs, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepThree,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 3 }, {
                default: withCtx(() => [
                  createVNode(_component_CoreMidScreenLayout, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mt-3" }, [
                        createVNode(_component_AdminBusinessCreateOthers, {
                          payload: __props.payload,
                          trigger: unref(triggers).stepFour,
                          onStep: navigate
                        }, null, 8, ["payload", "trigger"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 4 }, {
                default: withCtx(() => [
                  createVNode(_component_CoreMidScreenLayout, null, {
                    default: withCtx(() => [
                      createVNode(_component_AdminBusinessPreview, { payload: __props.payload }, null, 8, ["payload"])
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/business/create/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { loading, error, isAdmin } = storeToRefs(useAppStore());
    const { getBusiness, deleteBusiness } = useBusinessStore();
    const data = ref(([__temp, __restore] = withAsyncContext(() => getBusiness(id)), __temp = await __temp, __restore(), __temp));
    const deleteDialog = ref(false);
    const confirmDelete = async () => {
      await deleteBusiness(data.value.id);
      if (!error.value) {
        deleteDialog.value = false;
        setTimeout(() => {
          navigateTo({ name: "admin-businesses" });
        }, 3e3);
      }
    };
    const { getBusinessTypes } = useBusinessTypeStore();
    const businessTypes = ref([]);
    const getData = async () => {
      var _a;
      businessTypes.value = await getBusinessTypes(false);
      data.value.businessType = (_a = businessTypes.value.find(
        (b) => b.id == data.value.businessTypeId
      )) == null ? void 0 : _a.businessType;
    };
    watchEffect(() => {
      getData();
    });
    const view = ref(true);
    useSeoMeta({
      title: "Business Details"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCorePageDetailsHeader = __nuxt_component_0$2;
      const _component_AdminBusinessPreview = __nuxt_component_7;
      const _component_AdminBusinessCreate = __nuxt_component_2;
      const _component_AdminDeleteConfirmation = __nuxt_component_3$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminCorePageDetailsHeader, {
        view: "",
        route: "admin-businesses",
        onToggleView: ($event) => view.value = !unref(view),
        onDelete: ($event) => deleteDialog.value = true
      }, null, _parent));
      _push(ssrRenderComponent(VContainer, {
        class: "pa-0 mt-4",
        fluid: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-card pa-3 d-flex text-caption align-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(data).businessName + " : " + unref(data).code)}</span>`);
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(`</div><div class=""${_scopeId}>`);
            if (unref(view)) {
              _push2(ssrRenderComponent(_component_AdminBusinessPreview, { payload: unref(data) }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_AdminBusinessCreate, {
                payload: unref(data),
                update: true
              }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-card pa-3 d-flex text-caption align-center" }, [
                createVNode("span", null, toDisplayString(unref(data).businessName + " : " + unref(data).code), 1),
                createVNode(VSpacer)
              ]),
              createVNode("div", { class: "" }, [
                unref(view) ? (openBlock(), createBlock(_component_AdminBusinessPreview, {
                  key: 0,
                  payload: unref(data)
                }, null, 8, ["payload"])) : (openBlock(), createBlock(_component_AdminBusinessCreate, {
                  key: 1,
                  payload: unref(data),
                  update: true
                }, null, 8, ["payload"]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AdminDeleteConfirmation, {
        dialog: unref(deleteDialog),
        data: {
          name: "Business",
          itemTitle: unref(data).businessName,
          id: unref(data).id
        },
        onCancel: ($event) => deleteDialog.value = false,
        onDelete: confirmDelete
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/businesses/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-CgvtN-E1.js.map
