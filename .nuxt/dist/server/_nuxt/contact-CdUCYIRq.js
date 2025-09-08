import { _ as __nuxt_component_0 } from "./index-RXRlxYy9.js";
import { u as useHelpers, b as useAuthStore } from "./useHelpers-9BVYUhTt.js";
import { mergeProps, withCtx, createVNode, unref, toDisplayString, useSSRContext, ref, computed, watchEffect, watch, isRef, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { _ as __nuxt_component_1 } from "./select-sjn27vix.js";
import { _ as __nuxt_component_0$1 } from "./calendar-date-IHPjl74u.js";
import { u as useRules } from "./useRules-Lv1tnQPg.js";
import { h as useAppStore, s as storeToRefs } from "../server.mjs";
import { u as useBusinessTypeStore } from "./business-types-8YqDhEuJ.js";
import { V as VForm } from "./VForm-wrdi8IEW.js";
import { V as VTextField } from "./VTextField-8SU2p1Ep.js";
import { _ as __nuxt_component_1$1 } from "./telephone-Dluk3I-7.js";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { V as VCard } from "./VCard-MEGoD2_3.js";
import { V as VImg } from "./VImg-_57rVikU.js";
const _sfc_main$2 = {
  __name: "preview",
  __ssrInlineRender: true,
  props: {
    payload: Object
  },
  setup(__props) {
    const { dateFormat_Month } = useHelpers();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreImage = __nuxt_component_0;
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "bg-card text-caption",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "preview-header"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<b${_scopeId3}>Basic business information</b>`);
                      } else {
                        return [
                          createVNode("b", null, "Basic business information")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, {
                          class: "pa-0",
                          fluid: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, { align: "center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "text-center"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_AdminCoreImage, {
                                            image: __props.payload.image,
                                            view: true,
                                            profile: false
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_AdminCoreImage, {
                                              image: __props.payload.image,
                                              view: true,
                                              profile: false
                                            }, null, 8, ["image"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-flex ga-2 preview-row"${_scopeId6}><span${_scopeId6}>Market</span><b${_scopeId6}>${ssrInterpolate(__props.payload.market)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId6}><span${_scopeId6}>Name</span><b${_scopeId6}>${ssrInterpolate(__props.payload.businessName)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId6}><span${_scopeId6}>Store Number</span><b${_scopeId6}>${ssrInterpolate(__props.payload.storeNumber)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId6}><span${_scopeId6}>PIN</span><b${_scopeId6}>${ssrInterpolate(__props.payload.pin)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId6}><span${_scopeId6}>Registration date</span><b${_scopeId6}>${ssrInterpolate(unref(dateFormat_Month)(__props.payload.dateOfRegistration))}</b></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Market"),
                                              createVNode("b", null, toDisplayString(__props.payload.market), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Name"),
                                              createVNode("b", null, toDisplayString(__props.payload.businessName), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Store Number"),
                                              createVNode("b", null, toDisplayString(__props.payload.storeNumber), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "PIN"),
                                              createVNode("b", null, toDisplayString(__props.payload.pin), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Registration date"),
                                              createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.dateOfRegistration)), 1)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "text-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AdminCoreImage, {
                                            image: __props.payload.image,
                                            view: true,
                                            profile: false
                                          }, null, 8, ["image"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Market"),
                                            createVNode("b", null, toDisplayString(__props.payload.market), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Name"),
                                            createVNode("b", null, toDisplayString(__props.payload.businessName), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Store Number"),
                                            createVNode("b", null, toDisplayString(__props.payload.storeNumber), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "PIN"),
                                            createVNode("b", null, toDisplayString(__props.payload.pin), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Registration date"),
                                            createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.dateOfRegistration)), 1)
                                          ])
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
                                createVNode(VRow, { align: "center" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AdminCoreImage, {
                                          image: __props.payload.image,
                                          view: true,
                                          profile: false
                                        }, null, 8, ["image"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Market"),
                                          createVNode("b", null, toDisplayString(__props.payload.market), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Name"),
                                          createVNode("b", null, toDisplayString(__props.payload.businessName), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Store Number"),
                                          createVNode("b", null, toDisplayString(__props.payload.storeNumber), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "PIN"),
                                          createVNode("b", null, toDisplayString(__props.payload.pin), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Registration date"),
                                          createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.dateOfRegistration)), 1)
                                        ])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, {
                            class: "pa-0",
                            fluid: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, { align: "center" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AdminCoreImage, {
                                        image: __props.payload.image,
                                        view: true,
                                        profile: false
                                      }, null, 8, ["image"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                        createVNode("span", null, "Market"),
                                        createVNode("b", null, toDisplayString(__props.payload.market), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                        createVNode("span", null, "Name"),
                                        createVNode("b", null, toDisplayString(__props.payload.businessName), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                        createVNode("span", null, "Store Number"),
                                        createVNode("b", null, toDisplayString(__props.payload.storeNumber), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                        createVNode("span", null, "PIN"),
                                        createVNode("b", null, toDisplayString(__props.payload.pin), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                        createVNode("span", null, "Registration date"),
                                        createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.dateOfRegistration)), 1)
                                      ])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      class: "preview-header"
                    }, {
                      default: withCtx(() => [
                        createVNode("b", null, "Basic business information")
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, { cols: "12" }, {
                      default: withCtx(() => [
                        createVNode(VContainer, {
                          class: "pa-0",
                          fluid: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VRow, { align: "center" }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_AdminCoreImage, {
                                      image: __props.payload.image,
                                      view: true,
                                      profile: false
                                    }, null, 8, ["image"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                      createVNode("span", null, "Market"),
                                      createVNode("b", null, toDisplayString(__props.payload.market), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                      createVNode("span", null, "Name"),
                                      createVNode("b", null, toDisplayString(__props.payload.businessName), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                      createVNode("span", null, "Store Number"),
                                      createVNode("b", null, toDisplayString(__props.payload.storeNumber), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                      createVNode("span", null, "PIN"),
                                      createVNode("b", null, toDisplayString(__props.payload.pin), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                      createVNode("span", null, "Registration date"),
                                      createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.dateOfRegistration)), 1)
                                    ])
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="preview-header py-3"${_scopeId3}><b${_scopeId3}>Contact</b></div><div class="mt-4"${_scopeId3}><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Business email address</span><b${_scopeId3}>${ssrInterpolate(__props.payload.email)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Business phone N°</span><b${_scopeId3}>${ssrInterpolate(__props.payload.phone)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Business contact person</span><b${_scopeId3}>${ssrInterpolate(__props.payload.contactPerson.names)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Contact person email</span><b${_scopeId3}>${ssrInterpolate(__props.payload.contactPerson.email)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Contact person phone N°</span><b${_scopeId3}>${ssrInterpolate(__props.payload.contactPerson.phone)}</b></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "preview-header py-3" }, [
                            createVNode("b", null, "Contact")
                          ]),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                              createVNode("span", null, "Business email address"),
                              createVNode("b", null, toDisplayString(__props.payload.email), 1)
                            ]),
                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                              createVNode("span", null, "Business phone N°"),
                              createVNode("b", null, toDisplayString(__props.payload.phone), 1)
                            ]),
                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                              createVNode("span", null, "Business contact person"),
                              createVNode("b", null, toDisplayString(__props.payload.contactPerson.names), 1)
                            ]),
                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                              createVNode("span", null, "Contact person email"),
                              createVNode("b", null, toDisplayString(__props.payload.contactPerson.email), 1)
                            ]),
                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                              createVNode("span", null, "Contact person phone N°"),
                              createVNode("b", null, toDisplayString(__props.payload.contactPerson.phone), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="preview-header py-3"${_scopeId3}><b${_scopeId3}>Owner</b></div><div class="mt-4"${_scopeId3}><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Names</span><b${_scopeId3}>${ssrInterpolate(__props.payload.userId)}</b></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "preview-header py-3" }, [
                            createVNode("b", null, "Owner")
                          ]),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                              createVNode("span", null, "Names"),
                              createVNode("b", null, toDisplayString(__props.payload.userId), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "preview-header py-3" }, [
                          createVNode("b", null, "Contact")
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Business email address"),
                            createVNode("b", null, toDisplayString(__props.payload.email), 1)
                          ]),
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Business phone N°"),
                            createVNode("b", null, toDisplayString(__props.payload.phone), 1)
                          ]),
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Business contact person"),
                            createVNode("b", null, toDisplayString(__props.payload.contactPerson.names), 1)
                          ]),
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Contact person email"),
                            createVNode("b", null, toDisplayString(__props.payload.contactPerson.email), 1)
                          ]),
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Contact person phone N°"),
                            createVNode("b", null, toDisplayString(__props.payload.contactPerson.phone), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "preview-header py-3" }, [
                          createVNode("b", null, "Owner")
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Names"),
                            createVNode("b", null, toDisplayString(__props.payload.userId), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "preview-header"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<b${_scopeId3}>Address</b>`);
                      } else {
                        return [
                          createVNode("b", null, "Address")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="px-3 w-100"${_scopeId2}><div class="d-flex ga-2 preview-row"${_scopeId2}><span${_scopeId2}>Longitude</span><b${_scopeId2}>${ssrInterpolate(__props.payload.longitude)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId2}><span${_scopeId2}>Latitude</span><b${_scopeId2}>${ssrInterpolate(__props.payload.latitude)}</b></div></div>`);
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      class: "preview-header"
                    }, {
                      default: withCtx(() => [
                        createVNode("b", null, "Address")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "px-3 w-100" }, [
                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                        createVNode("span", null, "Longitude"),
                        createVNode("b", null, toDisplayString(__props.payload.longitude), 1)
                      ]),
                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                        createVNode("span", null, "Latitude"),
                        createVNode("b", null, toDisplayString(__props.payload.latitude), 1)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "preview-header"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<b${_scopeId3}>Payment Methods</b>`);
                      } else {
                        return [
                          createVNode("b", null, "Payment Methods")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="px-3 py-4 w-100 text-caption"${_scopeId2}><div class="d-flex ga-2 preview-row"${_scopeId2}><span${_scopeId2}>M-Pesa</span><b${_scopeId2}></b></div><div class="d-flex ga-2 preview-row"${_scopeId2}><span${_scopeId2}>Buy Goods</span><b${_scopeId2}></b></div></div>`);
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      class: "preview-header"
                    }, {
                      default: withCtx(() => [
                        createVNode("b", null, "Payment Methods")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "px-3 py-4 w-100 text-caption" }, [
                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                        createVNode("span", null, "M-Pesa"),
                        createVNode("b")
                      ]),
                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                        createVNode("span", null, "Buy Goods"),
                        createVNode("b")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "preview-header"
                  }, {
                    default: withCtx(() => [
                      createVNode("b", null, "Basic business information")
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VContainer, {
                        class: "pa-0",
                        fluid: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VRow, { align: "center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_AdminCoreImage, {
                                    image: __props.payload.image,
                                    view: true,
                                    profile: false
                                  }, null, 8, ["image"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                    createVNode("span", null, "Market"),
                                    createVNode("b", null, toDisplayString(__props.payload.market), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                    createVNode("span", null, "Name"),
                                    createVNode("b", null, toDisplayString(__props.payload.businessName), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                    createVNode("span", null, "Store Number"),
                                    createVNode("b", null, toDisplayString(__props.payload.storeNumber), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                    createVNode("span", null, "PIN"),
                                    createVNode("b", null, toDisplayString(__props.payload.pin), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                    createVNode("span", null, "Registration date"),
                                    createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.dateOfRegistration)), 1)
                                  ])
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
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "preview-header py-3" }, [
                        createVNode("b", null, "Contact")
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Business email address"),
                          createVNode("b", null, toDisplayString(__props.payload.email), 1)
                        ]),
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Business phone N°"),
                          createVNode("b", null, toDisplayString(__props.payload.phone), 1)
                        ]),
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Business contact person"),
                          createVNode("b", null, toDisplayString(__props.payload.contactPerson.names), 1)
                        ]),
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Contact person email"),
                          createVNode("b", null, toDisplayString(__props.payload.contactPerson.email), 1)
                        ]),
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Contact person phone N°"),
                          createVNode("b", null, toDisplayString(__props.payload.contactPerson.phone), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "preview-header py-3" }, [
                        createVNode("b", null, "Owner")
                      ]),
                      createVNode("div", { class: "mt-4" }, [
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Names"),
                          createVNode("b", null, toDisplayString(__props.payload.userId), 1)
                        ])
                      ])
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
                    class: "preview-header"
                  }, {
                    default: withCtx(() => [
                      createVNode("b", null, "Address")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "px-3 w-100" }, [
                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                      createVNode("span", null, "Longitude"),
                      createVNode("b", null, toDisplayString(__props.payload.longitude), 1)
                    ]),
                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                      createVNode("span", null, "Latitude"),
                      createVNode("b", null, toDisplayString(__props.payload.latitude), 1)
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "preview-header"
                  }, {
                    default: withCtx(() => [
                      createVNode("b", null, "Payment Methods")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "px-3 py-4 w-100 text-caption" }, [
                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                      createVNode("span", null, "M-Pesa"),
                      createVNode("b")
                    ]),
                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                      createVNode("span", null, "Buy Goods"),
                      createVNode("b")
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/business/preview.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$2;
const _sfc_main$1 = {
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
    const { dateFormat_short } = useHelpers();
    const { required, name } = useRules();
    useAppStore();
    const { getBusinessTypes } = useBusinessTypeStore();
    const businessTypes = ref([]);
    const loadTypes = ref(false);
    const getData = async () => {
      loadTypes.value = true;
      businessTypes.value = await getBusinessTypes();
      loadTypes.value = false;
    };
    computed(() => {
      return businessTypes.value.map((b) => b.business_type);
    });
    const formData = ref(null);
    const moveNext = async () => {
      let tab = 0;
      const { valid } = await formData.value.validate();
      if (valid)
        tab = 1;
      emits("step", tab);
    };
    const setImage = (val) => {
      props.payload.image = val;
    };
    const datePicker = ref(false);
    const selectedDate = computed({
      get() {
        return dateFormat_short(props.payload.dateOfRegistration);
      },
      set(val) {
        props.payload.dateOfRegistration = val;
      }
    });
    const setDate = (val) => {
      props.payload.dateOfRegistration = val.date;
      datePicker.value = !val.close;
    };
    const categories = ["FORMAL", "UNFORMAL"], setMarket = (val) => {
      props.payload.market = val;
    };
    watchEffect(() => {
      getData();
    });
    watch(
      () => props.trigger,
      () => {
        moveNext();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreImage = __nuxt_component_0;
      const _component_AdminCoreSelect = __nuxt_component_1;
      const _component_AdminCoreCalendarDate = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VForm, {
        ref_key: "formData",
        ref: formData,
        class: "py-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              class: "pa-0",
              fluid: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { align: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          class: "d-flex flex-column align-center",
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AdminCoreImage, {
                                onSetImage: setImage,
                                image: __props.payload.image,
                                profile: false
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AdminCoreImage, {
                                  onSetImage: setImage,
                                  image: __props.payload.image,
                                  profile: false
                                }, null, 8, ["image"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VContainer, {
                                class: "pa-0 mt-4 row-form-data",
                                fluid: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Market",
                                                  modelValue: __props.payload.market,
                                                  "onUpdate:modelValue": ($event) => __props.payload.market = $event,
                                                  rules: unref(required)(),
                                                  id: "selectCategory",
                                                  readonly: ""
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#selectCategory",
                                                  list: categories,
                                                  listValue: __props.payload.market,
                                                  onSetItem: setMarket
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Market",
                                                    modelValue: __props.payload.market,
                                                    "onUpdate:modelValue": ($event) => __props.payload.market = $event,
                                                    rules: unref(required)(),
                                                    id: "selectCategory",
                                                    readonly: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#selectCategory",
                                                    list: categories,
                                                    listValue: __props.payload.market,
                                                    onSetItem: setMarket
                                                  }, null, 8, ["listValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Name",
                                                  modelValue: __props.payload.businessName,
                                                  "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                                  rules: unref(name)()
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Name",
                                                    modelValue: __props.payload.businessName,
                                                    "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                                    rules: unref(name)()
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Market",
                                                  modelValue: __props.payload.market,
                                                  "onUpdate:modelValue": ($event) => __props.payload.market = $event,
                                                  rules: unref(required)(),
                                                  id: "selectCategory",
                                                  readonly: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#selectCategory",
                                                  list: categories,
                                                  listValue: __props.payload.market,
                                                  onSetItem: setMarket
                                                }, null, 8, ["listValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Name",
                                                  modelValue: __props.payload.businessName,
                                                  "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                                  rules: unref(name)()
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Store Number",
                                                  modelValue: __props.payload.storeNumber,
                                                  "onUpdate:modelValue": ($event) => __props.payload.storeNumber = $event,
                                                  rules: unref(required)()
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Store Number",
                                                    modelValue: __props.payload.storeNumber,
                                                    "onUpdate:modelValue": ($event) => __props.payload.storeNumber = $event,
                                                    rules: unref(required)()
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "PIN",
                                                  modelValue: __props.payload.pin,
                                                  "onUpdate:modelValue": ($event) => __props.payload.pin = $event
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "PIN",
                                                    modelValue: __props.payload.pin,
                                                    "onUpdate:modelValue": ($event) => __props.payload.pin = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Store Number",
                                                  modelValue: __props.payload.storeNumber,
                                                  "onUpdate:modelValue": ($event) => __props.payload.storeNumber = $event,
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
                                                  label: "PIN",
                                                  modelValue: __props.payload.pin,
                                                  "onUpdate:modelValue": ($event) => __props.payload.pin = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Registration date",
                                                  modelValue: unref(selectedDate),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  onClick: ($event) => datePicker.value = true
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Registration date",
                                                    modelValue: unref(selectedDate),
                                                    "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                    rules: unref(required)(),
                                                    readonly: "",
                                                    onClick: ($event) => datePicker.value = true
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, null, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Registration date",
                                                  modelValue: unref(selectedDate),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  onClick: ($event) => datePicker.value = true
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
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
                                                label: "Market",
                                                modelValue: __props.payload.market,
                                                "onUpdate:modelValue": ($event) => __props.payload.market = $event,
                                                rules: unref(required)(),
                                                id: "selectCategory",
                                                readonly: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#selectCategory",
                                                list: categories,
                                                listValue: __props.payload.market,
                                                onSetItem: setMarket
                                              }, null, 8, ["listValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Name",
                                                modelValue: __props.payload.businessName,
                                                "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                                rules: unref(name)()
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
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Store Number",
                                                modelValue: __props.payload.storeNumber,
                                                "onUpdate:modelValue": ($event) => __props.payload.storeNumber = $event,
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
                                                label: "PIN",
                                                modelValue: __props.payload.pin,
                                                "onUpdate:modelValue": ($event) => __props.payload.pin = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, null, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Registration date",
                                                modelValue: unref(selectedDate),
                                                "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                rules: unref(required)(),
                                                readonly: "",
                                                onClick: ($event) => datePicker.value = true
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VContainer, {
                                  class: "pa-0 mt-4 row-form-data",
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
                                              label: "Market",
                                              modelValue: __props.payload.market,
                                              "onUpdate:modelValue": ($event) => __props.payload.market = $event,
                                              rules: unref(required)(),
                                              id: "selectCategory",
                                              readonly: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#selectCategory",
                                              list: categories,
                                              listValue: __props.payload.market,
                                              onSetItem: setMarket
                                            }, null, 8, ["listValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Name",
                                              modelValue: __props.payload.businessName,
                                              "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                              rules: unref(name)()
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
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Store Number",
                                              modelValue: __props.payload.storeNumber,
                                              "onUpdate:modelValue": ($event) => __props.payload.storeNumber = $event,
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
                                              label: "PIN",
                                              modelValue: __props.payload.pin,
                                              "onUpdate:modelValue": ($event) => __props.payload.pin = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, null, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Registration date",
                                              modelValue: unref(selectedDate),
                                              "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                              rules: unref(required)(),
                                              readonly: "",
                                              onClick: ($event) => datePicker.value = true
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            class: "d-flex flex-column align-center",
                            cols: "12",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AdminCoreImage, {
                                onSetImage: setImage,
                                image: __props.payload.image,
                                profile: false
                              }, null, 8, ["image"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VContainer, {
                                class: "pa-0 mt-4 row-form-data",
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
                                            label: "Market",
                                            modelValue: __props.payload.market,
                                            "onUpdate:modelValue": ($event) => __props.payload.market = $event,
                                            rules: unref(required)(),
                                            id: "selectCategory",
                                            readonly: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#selectCategory",
                                            list: categories,
                                            listValue: __props.payload.market,
                                            onSetItem: setMarket
                                          }, null, 8, ["listValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Name",
                                            modelValue: __props.payload.businessName,
                                            "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                            rules: unref(name)()
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
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Store Number",
                                            modelValue: __props.payload.storeNumber,
                                            "onUpdate:modelValue": ($event) => __props.payload.storeNumber = $event,
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
                                            label: "PIN",
                                            modelValue: __props.payload.pin,
                                            "onUpdate:modelValue": ($event) => __props.payload.pin = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, null, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Registration date",
                                            modelValue: unref(selectedDate),
                                            "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                            rules: unref(required)(),
                                            readonly: "",
                                            onClick: ($event) => datePicker.value = true
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, { align: "center" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          class: "d-flex flex-column align-center",
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AdminCoreImage, {
                              onSetImage: setImage,
                              image: __props.payload.image,
                              profile: false
                            }, null, 8, ["image"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(VContainer, {
                              class: "pa-0 mt-4 row-form-data",
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
                                          label: "Market",
                                          modelValue: __props.payload.market,
                                          "onUpdate:modelValue": ($event) => __props.payload.market = $event,
                                          rules: unref(required)(),
                                          id: "selectCategory",
                                          readonly: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#selectCategory",
                                          list: categories,
                                          listValue: __props.payload.market,
                                          onSetItem: setMarket
                                        }, null, 8, ["listValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Name",
                                          modelValue: __props.payload.businessName,
                                          "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                          rules: unref(name)()
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
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Store Number",
                                          modelValue: __props.payload.storeNumber,
                                          "onUpdate:modelValue": ($event) => __props.payload.storeNumber = $event,
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
                                          label: "PIN",
                                          modelValue: __props.payload.pin,
                                          "onUpdate:modelValue": ($event) => __props.payload.pin = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, null, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Registration date",
                                          modelValue: unref(selectedDate),
                                          "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                          rules: unref(required)(),
                                          readonly: "",
                                          onClick: ($event) => datePicker.value = true
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
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
                  createVNode(VRow, { align: "center" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        class: "d-flex flex-column align-center",
                        cols: "12",
                        sm: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AdminCoreImage, {
                            onSetImage: setImage,
                            image: __props.payload.image,
                            profile: false
                          }, null, 8, ["image"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(VContainer, {
                            class: "pa-0 mt-4 row-form-data",
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
                                        label: "Market",
                                        modelValue: __props.payload.market,
                                        "onUpdate:modelValue": ($event) => __props.payload.market = $event,
                                        rules: unref(required)(),
                                        id: "selectCategory",
                                        readonly: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(_component_AdminCoreSelect, {
                                        activator: "#selectCategory",
                                        list: categories,
                                        listValue: __props.payload.market,
                                        onSetItem: setMarket
                                      }, null, 8, ["listValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Name",
                                        modelValue: __props.payload.businessName,
                                        "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                        rules: unref(name)()
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
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Store Number",
                                        modelValue: __props.payload.storeNumber,
                                        "onUpdate:modelValue": ($event) => __props.payload.storeNumber = $event,
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
                                        label: "PIN",
                                        modelValue: __props.payload.pin,
                                        "onUpdate:modelValue": ($event) => __props.payload.pin = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, null, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Registration date",
                                        modelValue: unref(selectedDate),
                                        "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                        rules: unref(required)(),
                                        readonly: "",
                                        onClick: ($event) => datePicker.value = true
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
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
      _push(ssrRenderComponent(_component_AdminCoreCalendarDate, {
        datePicker: unref(datePicker),
        date: __props.payload.dateOfRegistration,
        onSetDate: setDate,
        onClose: ($event) => datePicker.value = false
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/business/create/basic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "contact",
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
    const { profileImage, currentUser } = storeToRefs(useAppStore());
    const { getUsers } = useAuthStore();
    const users = ref([]);
    const getData = async () => {
      if (currentUser.value.accessLevel < 3)
        users.value = await getUsers(false);
      if (props.update) {
        let businessOwner = users.value.find(
          (u) => u.userId === props.payload.userId
        );
        owner.value = {
          names: businessOwner.firstname + " " + businessOwner.lastname,
          picture: businessOwner.picture
        };
      } else {
        if (currentUser.value.accessLevel == 3)
          props.payload.userId = currentUser.value.userId;
      }
    };
    watchEffect(() => {
      getData();
    });
    const user = ref("");
    const userList = computed(() => {
      return users.value.filter((u) => u.roleId == 8).map((b) => b.firstname + " " + b.lastname);
    });
    const owner = ref({
      names: "",
      picture: null
    });
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
    const setUser = (val) => {
      let u = users.value.find((b) => b.firstname + " " + b.lastname == val);
      props.payload.userId = u == null ? void 0 : u.userId;
      owner.value = {
        names: u.firstname + " " + u.lastname,
        picture: u.picture
      };
    };
    const setPhone = (val) => {
      props.payload.phone = val;
    };
    const setContactPersonPhone = (val) => {
      props.payload.contactPerson.phone = val;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Telephone = __nuxt_component_1$1;
      const _component_AdminCoreSelect = __nuxt_component_1;
      _push(ssrRenderComponent(VForm, mergeProps({
        ref_key: "formData",
        ref: formData,
        class: "mt-5",
        "lazy-validation": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              class: "pa-0 row-form-data",
              fluid: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { justify: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "8"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="bg-card pa-2 text-caption"${_scopeId4}><span${_scopeId4}>Business contact</span></div>`);
                              _push5(ssrRenderComponent(VContainer, {
                                class: "px-2 py-4 rounded mt-3",
                                fluid: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Business email address",
                                                  modelValue: __props.payload.email,
                                                  "onUpdate:modelValue": ($event) => __props.payload.email = $event
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Business email address",
                                                    modelValue: __props.payload.email,
                                                    "onUpdate:modelValue": ($event) => __props.payload.email = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_Telephone, {
                                                  number: __props.payload.phone,
                                                  onSetPhone: setPhone
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_Telephone, {
                                                    number: __props.payload.phone,
                                                    onSetPhone: setPhone
                                                  }, null, 8, ["number"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Contact person names",
                                                  modelValue: __props.payload.contactPerson.names,
                                                  "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Contact person names",
                                                    modelValue: __props.payload.contactPerson.names,
                                                    "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Contact person email",
                                                  modelValue: __props.payload.contactPerson.email,
                                                  "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Contact person email",
                                                    modelValue: __props.payload.contactPerson.email,
                                                    "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_Telephone, {
                                                  label: "Contact person phone",
                                                  number: __props.payload.contactPerson.phone,
                                                  onSetPhone: setContactPersonPhone
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_Telephone, {
                                                    label: "Contact person phone",
                                                    number: __props.payload.contactPerson.phone,
                                                    onSetPhone: setContactPersonPhone
                                                  }, null, 8, ["number"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Business email address",
                                                  modelValue: __props.payload.email,
                                                  "onUpdate:modelValue": ($event) => __props.payload.email = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Telephone, {
                                                  number: __props.payload.phone,
                                                  onSetPhone: setPhone
                                                }, null, 8, ["number"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Contact person names",
                                                  modelValue: __props.payload.contactPerson.names,
                                                  "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Contact person email",
                                                  modelValue: __props.payload.contactPerson.email,
                                                  "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Telephone, {
                                                  label: "Contact person phone",
                                                  number: __props.payload.contactPerson.phone,
                                                  onSetPhone: setContactPersonPhone
                                                }, null, 8, ["number"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
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
                                                label: "Business email address",
                                                modelValue: __props.payload.email,
                                                "onUpdate:modelValue": ($event) => __props.payload.email = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Telephone, {
                                                number: __props.payload.phone,
                                                onSetPhone: setPhone
                                              }, null, 8, ["number"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Contact person names",
                                                modelValue: __props.payload.contactPerson.names,
                                                "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Contact person email",
                                                modelValue: __props.payload.contactPerson.email,
                                                "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Telephone, {
                                                label: "Contact person phone",
                                                number: __props.payload.contactPerson.phone,
                                                onSetPhone: setContactPersonPhone
                                              }, null, 8, ["number"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "bg-card pa-2 text-caption" }, [
                                  createVNode("span", null, "Business contact")
                                ]),
                                createVNode(VContainer, {
                                  class: "px-2 py-4 rounded mt-3",
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
                                              label: "Business email address",
                                              modelValue: __props.payload.email,
                                              "onUpdate:modelValue": ($event) => __props.payload.email = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Telephone, {
                                              number: __props.payload.phone,
                                              onSetPhone: setPhone
                                            }, null, 8, ["number"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Contact person names",
                                              modelValue: __props.payload.contactPerson.names,
                                              "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Contact person email",
                                              modelValue: __props.payload.contactPerson.email,
                                              "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Telephone, {
                                              label: "Contact person phone",
                                              number: __props.payload.contactPerson.phone,
                                              onSetPhone: setContactPersonPhone
                                            }, null, 8, ["number"])
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
                        }, _parent4, _scopeId3));
                        if (unref(currentUser).accessLevel < 3) {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="bg-card pa-2 text-caption"${_scopeId4}><span${_scopeId4}>Owner</span></div>`);
                                _push5(ssrRenderComponent(VContainer, {
                                  class: "px-2 py-4 rounded mt-3",
                                  fluid: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VRow, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VTextField, {
                                                    label: "Owner",
                                                    modelValue: unref(owner).names,
                                                    "onUpdate:modelValue": ($event) => unref(owner).names = $event,
                                                    rules: unref(required)(),
                                                    id: "selectOwner",
                                                    "append-inner-icon": "mdi-chevron-down",
                                                    readonly: ""
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                    activator: "#selectOwner",
                                                    list: unref(userList),
                                                    listValue: unref(user),
                                                    onSetItem: setUser
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(`<div class="pb-1"${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(VCard, {
                                                    flat: "",
                                                    width: "250",
                                                    height: "250",
                                                    class: "mx-auto card-outlined rounded-lg"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VImg, {
                                                          src: unref(owner).picture ?? unref(profileImage)
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VImg, {
                                                            src: unref(owner).picture ?? unref(profileImage)
                                                          }, null, 8, ["src"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                  _push8(`</div>`);
                                                } else {
                                                  return [
                                                    createVNode(VTextField, {
                                                      label: "Owner",
                                                      modelValue: unref(owner).names,
                                                      "onUpdate:modelValue": ($event) => unref(owner).names = $event,
                                                      rules: unref(required)(),
                                                      id: "selectOwner",
                                                      "append-inner-icon": "mdi-chevron-down",
                                                      readonly: ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                    createVNode(_component_AdminCoreSelect, {
                                                      activator: "#selectOwner",
                                                      list: unref(userList),
                                                      listValue: unref(user),
                                                      onSetItem: setUser
                                                    }, null, 8, ["list", "listValue"]),
                                                    createVNode("div", { class: "pb-1" }, [
                                                      createVNode(VCard, {
                                                        flat: "",
                                                        width: "250",
                                                        height: "250",
                                                        class: "mx-auto card-outlined rounded-lg"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VImg, {
                                                            src: unref(owner).picture ?? unref(profileImage)
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    label: "Owner",
                                                    modelValue: unref(owner).names,
                                                    "onUpdate:modelValue": ($event) => unref(owner).names = $event,
                                                    rules: unref(required)(),
                                                    id: "selectOwner",
                                                    "append-inner-icon": "mdi-chevron-down",
                                                    readonly: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#selectOwner",
                                                    list: unref(userList),
                                                    listValue: unref(user),
                                                    onSetItem: setUser
                                                  }, null, 8, ["list", "listValue"]),
                                                  createVNode("div", { class: "pb-1" }, [
                                                    createVNode(VCard, {
                                                      flat: "",
                                                      width: "250",
                                                      height: "250",
                                                      class: "mx-auto card-outlined rounded-lg"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VImg, {
                                                          src: unref(owner).picture ?? unref(profileImage)
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Owner",
                                                  modelValue: unref(owner).names,
                                                  "onUpdate:modelValue": ($event) => unref(owner).names = $event,
                                                  rules: unref(required)(),
                                                  id: "selectOwner",
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  readonly: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#selectOwner",
                                                  list: unref(userList),
                                                  listValue: unref(user),
                                                  onSetItem: setUser
                                                }, null, 8, ["list", "listValue"]),
                                                createVNode("div", { class: "pb-1" }, [
                                                  createVNode(VCard, {
                                                    flat: "",
                                                    width: "250",
                                                    height: "250",
                                                    class: "mx-auto card-outlined rounded-lg"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VImg, {
                                                        src: unref(owner).picture ?? unref(profileImage)
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
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
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("div", { class: "bg-card pa-2 text-caption" }, [
                                    createVNode("span", null, "Owner")
                                  ]),
                                  createVNode(VContainer, {
                                    class: "px-2 py-4 rounded mt-3",
                                    fluid: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Owner",
                                                modelValue: unref(owner).names,
                                                "onUpdate:modelValue": ($event) => unref(owner).names = $event,
                                                rules: unref(required)(),
                                                id: "selectOwner",
                                                "append-inner-icon": "mdi-chevron-down",
                                                readonly: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#selectOwner",
                                                list: unref(userList),
                                                listValue: unref(user),
                                                onSetItem: setUser
                                              }, null, 8, ["list", "listValue"]),
                                              createVNode("div", { class: "pb-1" }, [
                                                createVNode(VCard, {
                                                  flat: "",
                                                  width: "250",
                                                  height: "250",
                                                  class: "mx-auto card-outlined rounded-lg"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: unref(owner).picture ?? unref(profileImage)
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  _: 1
                                                })
                                              ])
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
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "bg-card pa-2 text-caption" }, [
                                createVNode("span", null, "Business contact")
                              ]),
                              createVNode(VContainer, {
                                class: "px-2 py-4 rounded mt-3",
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
                                            label: "Business email address",
                                            modelValue: __props.payload.email,
                                            "onUpdate:modelValue": ($event) => __props.payload.email = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Telephone, {
                                            number: __props.payload.phone,
                                            onSetPhone: setPhone
                                          }, null, 8, ["number"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Contact person names",
                                            modelValue: __props.payload.contactPerson.names,
                                            "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Contact person email",
                                            modelValue: __props.payload.contactPerson.email,
                                            "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Telephone, {
                                            label: "Contact person phone",
                                            number: __props.payload.contactPerson.phone,
                                            onSetPhone: setContactPersonPhone
                                          }, null, 8, ["number"])
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
                          }),
                          unref(currentUser).accessLevel < 3 ? (openBlock(), createBlock(VCol, {
                            key: 0,
                            cols: "12",
                            sm: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "bg-card pa-2 text-caption" }, [
                                createVNode("span", null, "Owner")
                              ]),
                              createVNode(VContainer, {
                                class: "px-2 py-4 rounded mt-3",
                                fluid: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Owner",
                                            modelValue: unref(owner).names,
                                            "onUpdate:modelValue": ($event) => unref(owner).names = $event,
                                            rules: unref(required)(),
                                            id: "selectOwner",
                                            "append-inner-icon": "mdi-chevron-down",
                                            readonly: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#selectOwner",
                                            list: unref(userList),
                                            listValue: unref(user),
                                            onSetItem: setUser
                                          }, null, 8, ["list", "listValue"]),
                                          createVNode("div", { class: "pb-1" }, [
                                            createVNode(VCard, {
                                              flat: "",
                                              width: "250",
                                              height: "250",
                                              class: "mx-auto card-outlined rounded-lg"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: unref(owner).picture ?? unref(profileImage)
                                                }, null, 8, ["src"])
                                              ]),
                                              _: 1
                                            })
                                          ])
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
                          })) : createCommentVNode("", true)
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
                          sm: "8"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "bg-card pa-2 text-caption" }, [
                              createVNode("span", null, "Business contact")
                            ]),
                            createVNode(VContainer, {
                              class: "px-2 py-4 rounded mt-3",
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
                                          label: "Business email address",
                                          modelValue: __props.payload.email,
                                          "onUpdate:modelValue": ($event) => __props.payload.email = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Telephone, {
                                          number: __props.payload.phone,
                                          onSetPhone: setPhone
                                        }, null, 8, ["number"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Contact person names",
                                          modelValue: __props.payload.contactPerson.names,
                                          "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Contact person email",
                                          modelValue: __props.payload.contactPerson.email,
                                          "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Telephone, {
                                          label: "Contact person phone",
                                          number: __props.payload.contactPerson.phone,
                                          onSetPhone: setContactPersonPhone
                                        }, null, 8, ["number"])
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
                        }),
                        unref(currentUser).accessLevel < 3 ? (openBlock(), createBlock(VCol, {
                          key: 0,
                          cols: "12",
                          sm: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "bg-card pa-2 text-caption" }, [
                              createVNode("span", null, "Owner")
                            ]),
                            createVNode(VContainer, {
                              class: "px-2 py-4 rounded mt-3",
                              fluid: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Owner",
                                          modelValue: unref(owner).names,
                                          "onUpdate:modelValue": ($event) => unref(owner).names = $event,
                                          rules: unref(required)(),
                                          id: "selectOwner",
                                          "append-inner-icon": "mdi-chevron-down",
                                          readonly: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#selectOwner",
                                          list: unref(userList),
                                          listValue: unref(user),
                                          onSetItem: setUser
                                        }, null, 8, ["list", "listValue"]),
                                        createVNode("div", { class: "pb-1" }, [
                                          createVNode(VCard, {
                                            flat: "",
                                            width: "250",
                                            height: "250",
                                            class: "mx-auto card-outlined rounded-lg"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: unref(owner).picture ?? unref(profileImage)
                                              }, null, 8, ["src"])
                                            ]),
                                            _: 1
                                          })
                                        ])
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
                        })) : createCommentVNode("", true)
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
                class: "pa-0 row-form-data",
                fluid: ""
              }, {
                default: withCtx(() => [
                  createVNode(VRow, { justify: "center" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "8"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "bg-card pa-2 text-caption" }, [
                            createVNode("span", null, "Business contact")
                          ]),
                          createVNode(VContainer, {
                            class: "px-2 py-4 rounded mt-3",
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
                                        label: "Business email address",
                                        modelValue: __props.payload.email,
                                        "onUpdate:modelValue": ($event) => __props.payload.email = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Telephone, {
                                        number: __props.payload.phone,
                                        onSetPhone: setPhone
                                      }, null, 8, ["number"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Contact person names",
                                        modelValue: __props.payload.contactPerson.names,
                                        "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Contact person email",
                                        modelValue: __props.payload.contactPerson.email,
                                        "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Telephone, {
                                        label: "Contact person phone",
                                        number: __props.payload.contactPerson.phone,
                                        onSetPhone: setContactPersonPhone
                                      }, null, 8, ["number"])
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
                      }),
                      unref(currentUser).accessLevel < 3 ? (openBlock(), createBlock(VCol, {
                        key: 0,
                        cols: "12",
                        sm: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "bg-card pa-2 text-caption" }, [
                            createVNode("span", null, "Owner")
                          ]),
                          createVNode(VContainer, {
                            class: "px-2 py-4 rounded mt-3",
                            fluid: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Owner",
                                        modelValue: unref(owner).names,
                                        "onUpdate:modelValue": ($event) => unref(owner).names = $event,
                                        rules: unref(required)(),
                                        id: "selectOwner",
                                        "append-inner-icon": "mdi-chevron-down",
                                        readonly: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(_component_AdminCoreSelect, {
                                        activator: "#selectOwner",
                                        list: unref(userList),
                                        listValue: unref(user),
                                        onSetItem: setUser
                                      }, null, 8, ["list", "listValue"]),
                                      createVNode("div", { class: "pb-1" }, [
                                        createVNode(VCard, {
                                          flat: "",
                                          width: "250",
                                          height: "250",
                                          class: "mx-auto card-outlined rounded-lg"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: unref(owner).picture ?? unref(profileImage)
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 1
                                        })
                                      ])
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
                      })) : createCommentVNode("", true)
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/business/create/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main;
export {
  __nuxt_component_2 as _,
  __nuxt_component_3 as a,
  __nuxt_component_7 as b
};
//# sourceMappingURL=contact-CdUCYIRq.js.map
