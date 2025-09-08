import { _ as __nuxt_component_0 } from "./page-header-rZyOPLsZ.js";
import { _ as __nuxt_component_0$1 } from "./stepper-ipq6mb5U.js";
import { _ as __nuxt_component_2, a as __nuxt_component_3, b as __nuxt_component_7 } from "./contact-CdUCYIRq.js";
import { u as useHelpers, b as useAuthStore } from "./useHelpers-9BVYUhTt.js";
import { u as useRules } from "./useRules-Lv1tnQPg.js";
import { ref, watch, mergeProps, withCtx, unref, createVNode, useSSRContext, openBlock, createBlock, Fragment, renderList, isRef } from "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { s as storeToRefs, h as useAppStore, b as navigateTo } from "../server.mjs";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { V as VForm } from "./VForm-wrdi8IEW.js";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { V as VTextField } from "./VTextField-8SU2p1Ep.js";
import { V as VCard } from "./VCard-MEGoD2_3.js";
import { _ as __nuxt_component_0$2 } from "./mid-screen-layout-b8tbDczG.js";
import { V as VAlert } from "./VAlert-2pkv9BF_.js";
import { V as VImg } from "./VImg-_57rVikU.js";
import { a as useSeoMeta } from "./index-S1hhTCs3.js";
import { u as useBusinessStore } from "./business-1K3_QQBT.js";
import { V as VBtn } from "./VBtn-yNf12l4D.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-BpMO-iOS.js";
import "./index-3E7yy1qS.js";
import "./color-rZjm0Y7u.js";
import "./tag-pIHjuosL.js";
import "./VSpacer-0DxA8eQn.js";
/* empty css               */
import "./VAvatar-agmUyvkw.js";
import "./rounded-jA9LRAgf.js";
import "./VDivider-Ce8J4Sp3.js";
import "./index-RXRlxYy9.js";
import "./VDialog-acnQ15uX.js";
import "./VOverlay-bpCAw6Z_.js";
import "./position-AkaJaFJy.js";
import "./delay-5iXTA9KV.js";
import "./lazy-8QocgoLY.js";
import "./index-q-0zZOOG.js";
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
import "./business-types-8YqDhEuJ.js";
import "./telephone-Dluk3I-7.js";
import "date-fns";
import "date-fns/locale";
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
import "./resizeObserver-k8M9k6Xi.js";
const _sfc_main$2 = {
  __name: "address",
  __ssrInlineRender: true,
  props: {
    payload: Object,
    trigger: Boolean,
    update: Boolean
  },
  emits: ["step"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    useHelpers();
    const { fullName, email, number, required } = useRules();
    storeToRefs(useAppStore());
    useAuthStore();
    const addressForm = ref(null);
    const moveNext = async () => {
      let tab = 2;
      const { valid } = await addressForm.value.validate();
      if (valid)
        tab = 3;
      emits("step", tab);
    };
    watch(
      () => props.trigger,
      () => {
        moveNext();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({
        ref_key: "addressForm",
        ref: addressForm
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              class: "pa-0",
              fluid: ""
            }, {
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
                                label: "Longitude",
                                modelValue: __props.payload.long,
                                "onUpdate:modelValue": ($event) => __props.payload.long = $event,
                                rules: unref(required)()
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Longitude",
                                  modelValue: __props.payload.long,
                                  "onUpdate:modelValue": ($event) => __props.payload.long = $event,
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
                                label: "Longitude",
                                modelValue: __props.payload.lat,
                                "onUpdate:modelValue": ($event) => __props.payload.lat = $event,
                                rules: unref(required)()
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Longitude",
                                  modelValue: __props.payload.lat,
                                  "onUpdate:modelValue": ($event) => __props.payload.lat = $event,
                                  rules: unref(required)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                label: "Longitude",
                                modelValue: __props.payload.long,
                                "onUpdate:modelValue": ($event) => __props.payload.long = $event,
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
                                label: "Longitude",
                                modelValue: __props.payload.lat,
                                "onUpdate:modelValue": ($event) => __props.payload.lat = $event,
                                rules: unref(required)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "py-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCard, { flat: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske" width="100%" height="400px" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"${_scopeId5}></iframe>`);
                                  } else {
                                    return [
                                      createVNode("iframe", {
                                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske",
                                        width: "100%",
                                        height: "400px",
                                        style: { "border": "0" },
                                        allowfullscreen: "",
                                        loading: "lazy",
                                        referrerpolicy: "no-referrer-when-downgrade"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCard, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode("iframe", {
                                      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske",
                                      width: "100%",
                                      height: "400px",
                                      style: { "border": "0" },
                                      allowfullscreen: "",
                                      loading: "lazy",
                                      referrerpolicy: "no-referrer-when-downgrade"
                                    })
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
                          createVNode(VCol, {
                            cols: "12",
                            class: "py-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { flat: "" }, {
                                default: withCtx(() => [
                                  createVNode("iframe", {
                                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske",
                                    width: "100%",
                                    height: "400px",
                                    style: { "border": "0" },
                                    allowfullscreen: "",
                                    loading: "lazy",
                                    referrerpolicy: "no-referrer-when-downgrade"
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
                              label: "Longitude",
                              modelValue: __props.payload.long,
                              "onUpdate:modelValue": ($event) => __props.payload.long = $event,
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
                              label: "Longitude",
                              modelValue: __props.payload.lat,
                              "onUpdate:modelValue": ($event) => __props.payload.lat = $event,
                              rules: unref(required)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          class: "py-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode("iframe", {
                                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske",
                                  width: "100%",
                                  height: "400px",
                                  style: { "border": "0" },
                                  allowfullscreen: "",
                                  loading: "lazy",
                                  referrerpolicy: "no-referrer-when-downgrade"
                                })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, {
                class: "pa-0",
                fluid: ""
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Longitude",
                            modelValue: __props.payload.long,
                            "onUpdate:modelValue": ($event) => __props.payload.long = $event,
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
                            label: "Longitude",
                            modelValue: __props.payload.lat,
                            "onUpdate:modelValue": ($event) => __props.payload.lat = $event,
                            rules: unref(required)()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        class: "py-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, { flat: "" }, {
                            default: withCtx(() => [
                              createVNode("iframe", {
                                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske",
                                width: "100%",
                                height: "400px",
                                style: { "border": "0" },
                                allowfullscreen: "",
                                loading: "lazy",
                                referrerpolicy: "no-referrer-when-downgrade"
                              })
                            ]),
                            _: 1
                          })
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/business/create/address.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "payment-method",
  __ssrInlineRender: true,
  props: {
    payload: Object,
    trigger: Boolean,
    update: Boolean
  },
  emits: ["step"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    useHelpers();
    storeToRefs(useAppStore());
    useAuthStore();
    const pMethodForm = ref(null);
    const moveNext = async () => {
      let tab = 3;
      const { valid } = await pMethodForm.value.validate();
      if (valid)
        tab = 4;
      emits("step", tab);
    };
    watch(
      () => props.trigger,
      () => {
        moveNext();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VForm, mergeProps({
        ref_key: "pMethodForm",
        ref: pMethodForm
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              class: "pa-0",
              fluid: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { justify: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Supported Payment Methods",
                                "append-inner-icon": "mdi-chevron-down"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class=""${_scopeId4}>`);
                              _push5(ssrRenderComponent(VAlert, {
                                type: "info",
                                variant: "tonal",
                                density: "compact",
                                class: "text-caption"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam, labore, ut sit explicabo molestias culpa voluptas inventore odio possimus optio cum veniam obcaecati magni veritatis nostrum dolor! Aut, cumque!</span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam, labore, ut sit explicabo molestias culpa voluptas inventore odio possimus optio cum veniam obcaecati magni veritatis nostrum dolor! Aut, cumque!")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(VTextField, {
                                  label: "Supported Payment Methods",
                                  "append-inner-icon": "mdi-chevron-down"
                                }),
                                createVNode("div", { class: "" }, [
                                  createVNode(VAlert, {
                                    type: "info",
                                    variant: "tonal",
                                    density: "compact",
                                    class: "text-caption"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam, labore, ut sit explicabo molestias culpa voluptas inventore odio possimus optio cum veniam obcaecati magni veritatis nostrum dolor! Aut, cumque!")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "4",
                          class: "d-flex flex-column ga-3",
                          style: { "border-left": "1px solid #ddd" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(3, (n) => {
                                _push5(`<div class="d-flex ga-4 align-center"${_scopeId4}><div class=""${_scopeId4}>`);
                                _push5(ssrRenderComponent(VImg, {
                                  src: "https://www.m-pesa.africa/images/mpesa-logo.png",
                                  width: "100"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div><div class="w-100"${_scopeId4}><div class="text-caption"${_scopeId4}><span${_scopeId4}>M-PESA</span></div>`);
                                _push5(ssrRenderComponent(VTextField, { label: "Payment Number" }, null, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(3, (n) => {
                                  return createVNode("div", {
                                    class: "d-flex ga-4 align-center",
                                    key: n
                                  }, [
                                    createVNode("div", { class: "" }, [
                                      createVNode(VImg, {
                                        src: "https://www.m-pesa.africa/images/mpesa-logo.png",
                                        width: "100"
                                      })
                                    ]),
                                    createVNode("div", { class: "w-100" }, [
                                      createVNode("div", { class: "text-caption" }, [
                                        createVNode("span", null, "M-PESA")
                                      ]),
                                      createVNode(VTextField, { label: "Payment Number" })
                                    ])
                                  ]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                label: "Supported Payment Methods",
                                "append-inner-icon": "mdi-chevron-down"
                              }),
                              createVNode("div", { class: "" }, [
                                createVNode(VAlert, {
                                  type: "info",
                                  variant: "tonal",
                                  density: "compact",
                                  class: "text-caption"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam, labore, ut sit explicabo molestias culpa voluptas inventore odio possimus optio cum veniam obcaecati magni veritatis nostrum dolor! Aut, cumque!")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4",
                            class: "d-flex flex-column ga-3",
                            style: { "border-left": "1px solid #ddd" }
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(3, (n) => {
                                return createVNode("div", {
                                  class: "d-flex ga-4 align-center",
                                  key: n
                                }, [
                                  createVNode("div", { class: "" }, [
                                    createVNode(VImg, {
                                      src: "https://www.m-pesa.africa/images/mpesa-logo.png",
                                      width: "100"
                                    })
                                  ]),
                                  createVNode("div", { class: "w-100" }, [
                                    createVNode("div", { class: "text-caption" }, [
                                      createVNode("span", null, "M-PESA")
                                    ]),
                                    createVNode(VTextField, { label: "Payment Number" })
                                  ])
                                ]);
                              }), 64))
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
                    createVNode(VRow, { justify: "center" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              label: "Supported Payment Methods",
                              "append-inner-icon": "mdi-chevron-down"
                            }),
                            createVNode("div", { class: "" }, [
                              createVNode(VAlert, {
                                type: "info",
                                variant: "tonal",
                                density: "compact",
                                class: "text-caption"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam, labore, ut sit explicabo molestias culpa voluptas inventore odio possimus optio cum veniam obcaecati magni veritatis nostrum dolor! Aut, cumque!")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "4",
                          class: "d-flex flex-column ga-3",
                          style: { "border-left": "1px solid #ddd" }
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(3, (n) => {
                              return createVNode("div", {
                                class: "d-flex ga-4 align-center",
                                key: n
                              }, [
                                createVNode("div", { class: "" }, [
                                  createVNode(VImg, {
                                    src: "https://www.m-pesa.africa/images/mpesa-logo.png",
                                    width: "100"
                                  })
                                ]),
                                createVNode("div", { class: "w-100" }, [
                                  createVNode("div", { class: "text-caption" }, [
                                    createVNode("span", null, "M-PESA")
                                  ]),
                                  createVNode(VTextField, { label: "Payment Number" })
                                ])
                              ]);
                            }), 64))
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
              createVNode(VContainer, {
                class: "pa-0",
                fluid: ""
              }, {
                default: withCtx(() => [
                  createVNode(VRow, { justify: "center" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            label: "Supported Payment Methods",
                            "append-inner-icon": "mdi-chevron-down"
                          }),
                          createVNode("div", { class: "" }, [
                            createVNode(VAlert, {
                              type: "info",
                              variant: "tonal",
                              density: "compact",
                              class: "text-caption"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque aliquam, labore, ut sit explicabo molestias culpa voluptas inventore odio possimus optio cum veniam obcaecati magni veritatis nostrum dolor! Aut, cumque!")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "4",
                        class: "d-flex flex-column ga-3",
                        style: { "border-left": "1px solid #ddd" }
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(3, (n) => {
                            return createVNode("div", {
                              class: "d-flex ga-4 align-center",
                              key: n
                            }, [
                              createVNode("div", { class: "" }, [
                                createVNode(VImg, {
                                  src: "https://www.m-pesa.africa/images/mpesa-logo.png",
                                  width: "100"
                                })
                              ]),
                              createVNode("div", { class: "w-100" }, [
                                createVNode("div", { class: "text-caption" }, [
                                  createVNode("span", null, "M-PESA")
                                ]),
                                createVNode(VTextField, { label: "Payment Number" })
                              ])
                            ]);
                          }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/business/create/payment-method.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$1;
const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading, error } = storeToRefs(useAppStore());
    const { createBusiness } = useBusinessStore();
    const payload = ref({
      businessName: "",
      userId: 0,
      registrationNumber: "",
      businessTypeId: 0,
      taxIdentificationNumber: "",
      image: null,
      owner: {
        names: "Dummy user",
        phone: "254796577628",
        email: "test@gmail.com"
      },
      contactPerson: {
        names: "",
        phone: "",
        email: ""
      },
      address: {
        country: "",
        province: "",
        town: "",
        commune: "",
        quartier: "",
        avenue: "",
        no: ""
      },
      email: "",
      phone: "",
      dateOfRegistration: /* @__PURE__ */ new Date(),
      bankDetails: {
        accountNo: "",
        accountName: ""
      },
      website: "",
      summary: "",
      businessCategory: "UNFORMAL"
    });
    const tab = ref(0);
    const sections = [
      { title: "Basic Info", icon: "mdi-folder-information-outline" },
      { title: "Contact", icon: "mdi-phone-outline" },
      { title: "Address", icon: "mdi-map-marker-outline" },
      { title: "Payment Method", icon: "mdi-credit-card-outline" },
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
      await createBusiness(payload.value);
      if (!error.value)
        setTimeout(() => {
          navigateTo({
            name: "admin-businesses"
          });
        }, 2e3);
    };
    useSeoMeta({
      title: "Create business"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCorePageHeader = __nuxt_component_0;
      const _component_AdminCoreStepper = __nuxt_component_0$1;
      const _component_AdminBusinessCreateBasic = __nuxt_component_2;
      const _component_AdminBusinessCreateContact = __nuxt_component_3;
      const _component_AdminBusinessCreateAddress = __nuxt_component_4;
      const _component_CoreMidScreenLayout = __nuxt_component_0$2;
      const _component_AdminBusinessCreatePaymentMethod = __nuxt_component_6;
      const _component_AdminBusinessPreview = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminCorePageHeader, { route: "admin-businesses" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              "prepend-icon": "mdi-chevron-left",
              class: "text-caption text-capitalize mr-2",
              color: unref(tab) > 0 ? "primary-accent" : "",
              size: "small",
              flat: "",
              title: "Previous Step",
              disabled: !unref(tab) > 0,
              onClick: ($event) => navigate(unref(tab) - 1),
              variant: "text",
              rounded: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Prev</span>`);
                } else {
                  return [
                    createVNode("span", null, "Prev")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(tab) === sections.length - 1) {
              _push2(ssrRenderComponent(VBtn, {
                class: "text-capitalize ml-2 text-caption",
                "prepend-icon": "mdi-content-save",
                size: "small",
                flat: "",
                color: "primary-dark",
                onClick: submit,
                loading: unref(loading),
                rounded: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Save</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Save")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(VBtn, {
                "append-icon": "mdi-chevron-right",
                size: "small",
                flat: "",
                class: "ml-2 text-caption text-capitalize",
                title: "Next Step",
                onClick: ($event) => validation(unref(tab)),
                color: "primary-dark",
                rounded: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Next</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Next")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode(VBtn, {
                  "prepend-icon": "mdi-chevron-left",
                  class: "text-caption text-capitalize mr-2",
                  color: unref(tab) > 0 ? "primary-accent" : "",
                  size: "small",
                  flat: "",
                  title: "Previous Step",
                  disabled: !unref(tab) > 0,
                  onClick: ($event) => navigate(unref(tab) - 1),
                  variant: "text",
                  rounded: ""
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Prev")
                  ]),
                  _: 1
                }, 8, ["color", "disabled", "onClick"]),
                unref(tab) === sections.length - 1 ? (openBlock(), createBlock(VBtn, {
                  key: 0,
                  class: "text-capitalize ml-2 text-caption",
                  "prepend-icon": "mdi-content-save",
                  size: "small",
                  flat: "",
                  color: "primary-dark",
                  onClick: submit,
                  loading: unref(loading),
                  rounded: ""
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Save")
                  ]),
                  _: 1
                }, 8, ["loading"])) : (openBlock(), createBlock(VBtn, {
                  key: 1,
                  "append-icon": "mdi-chevron-right",
                  size: "small",
                  flat: "",
                  class: "ml-2 text-caption text-capitalize",
                  title: "Next Step",
                  onClick: ($event) => validation(unref(tab)),
                  color: "primary-dark",
                  rounded: ""
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Next")
                  ]),
                  _: 1
                }, 8, ["onClick"]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-2">`);
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
                  _push3(ssrRenderComponent(_component_AdminBusinessCreateBasic, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepOne,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminBusinessCreateBasic, {
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
                  _push3(ssrRenderComponent(_component_AdminBusinessCreateContact, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepTwo,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminBusinessCreateContact, {
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
                  _push3(ssrRenderComponent(_component_AdminBusinessCreateAddress, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepThree,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminBusinessCreateAddress, {
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
                  _push3(ssrRenderComponent(_component_CoreMidScreenLayout, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mt-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_AdminBusinessCreatePaymentMethod, {
                          payload: unref(payload),
                          trigger: unref(triggers).stepFour,
                          onStep: navigate
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mt-3" }, [
                            createVNode(_component_AdminBusinessCreatePaymentMethod, {
                              payload: unref(payload),
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
                          createVNode(_component_AdminBusinessCreatePaymentMethod, {
                            payload: unref(payload),
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
                        _push4(ssrRenderComponent(_component_AdminBusinessPreview, { payload: unref(payload) }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AdminBusinessPreview, { payload: unref(payload) }, null, 8, ["payload"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CoreMidScreenLayout, null, {
                      default: withCtx(() => [
                        createVNode(_component_AdminBusinessPreview, { payload: unref(payload) }, null, 8, ["payload"])
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
                    payload: unref(payload),
                    trigger: unref(triggers).stepOne,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminBusinessCreateContact, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepTwo,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 2 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminBusinessCreateAddress, {
                    payload: unref(payload),
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
                        createVNode(_component_AdminBusinessCreatePaymentMethod, {
                          payload: unref(payload),
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
                      createVNode(_component_AdminBusinessPreview, { payload: unref(payload) }, null, 8, ["payload"])
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
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/businesses/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=create-FD0eOMNN.js.map
