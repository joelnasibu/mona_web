import { _ as __nuxt_component_0 } from './index-CbyoTlMq.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, unref, toDisplayString, ref, computed, watchEffect, watch, isRef, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import { u as useHelpers, a as useAuthStore } from './useHelpers-kUuDaVs4.mjs';
import { _ as __nuxt_component_1$1 } from './select-_AXsm2yX.mjs';
import { _ as __nuxt_component_2$1 } from './calendar-date-Z0smB_LV.mjs';
import { u as useRules } from './useRules-YQBIqClL.mjs';
import { h as useAppStore, s as storeToRefs } from '../server.mjs';
import { u as useBusinessTypeStore } from './business-types-RUyLDwre.mjs';
import { V as VForm } from './VForm-tbklh6Vg.mjs';
import { V as VTextField } from './VTextField-Q67PbqhP.mjs';
import { _ as __nuxt_component_1$2 } from './telephone-COnNGYLF.mjs';
import { V as VCard } from './VCard-M6VezhhA.mjs';
import { V as VImg } from './VAvatar-Tkx6eOqd.mjs';
import { _ as __nuxt_component_4$1 } from './editor-JUAoNM3K.mjs';

const _sfc_main$5 = {
  __name: "address-details",
  __ssrInlineRender: true,
  props: {
    payload: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "pa-0",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Country</span><b${_scopeId3}>${ssrInterpolate(__props.payload.address.country)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Province</span><b${_scopeId3}>${ssrInterpolate(__props.payload.address.province)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Town</span><b${_scopeId3}>${ssrInterpolate(__props.payload.address.town)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Commune</span><b${_scopeId3}>${ssrInterpolate(__props.payload.address.commune)}</b></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Country"),
                            createVNode("b", null, toDisplayString(__props.payload.address.country), 1)
                          ]),
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Province"),
                            createVNode("b", null, toDisplayString(__props.payload.address.province), 1)
                          ]),
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Town"),
                            createVNode("b", null, toDisplayString(__props.payload.address.town), 1)
                          ]),
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Commune"),
                            createVNode("b", null, toDisplayString(__props.payload.address.commune), 1)
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
                        _push4(`<div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Quartier</span><b${_scopeId3}>${ssrInterpolate(__props.payload.address.quartier)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Avenue</span><b${_scopeId3}>${ssrInterpolate(__props.payload.address.avenue)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Number</span><b${_scopeId3}>${ssrInterpolate(__props.payload.address.no)}</b></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Quartier"),
                            createVNode("b", null, toDisplayString(__props.payload.address.quartier), 1)
                          ]),
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Avenue"),
                            createVNode("b", null, toDisplayString(__props.payload.address.avenue), 1)
                          ]),
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Number"),
                            createVNode("b", null, toDisplayString(__props.payload.address.no), 1)
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
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Country"),
                          createVNode("b", null, toDisplayString(__props.payload.address.country), 1)
                        ]),
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Province"),
                          createVNode("b", null, toDisplayString(__props.payload.address.province), 1)
                        ]),
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Town"),
                          createVNode("b", null, toDisplayString(__props.payload.address.town), 1)
                        ]),
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Commune"),
                          createVNode("b", null, toDisplayString(__props.payload.address.commune), 1)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Quartier"),
                          createVNode("b", null, toDisplayString(__props.payload.address.quartier), 1)
                        ]),
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Avenue"),
                          createVNode("b", null, toDisplayString(__props.payload.address.avenue), 1)
                        ]),
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Number"),
                          createVNode("b", null, toDisplayString(__props.payload.address.no), 1)
                        ])
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
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                        createVNode("span", null, "Country"),
                        createVNode("b", null, toDisplayString(__props.payload.address.country), 1)
                      ]),
                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                        createVNode("span", null, "Province"),
                        createVNode("b", null, toDisplayString(__props.payload.address.province), 1)
                      ]),
                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                        createVNode("span", null, "Town"),
                        createVNode("b", null, toDisplayString(__props.payload.address.town), 1)
                      ]),
                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                        createVNode("span", null, "Commune"),
                        createVNode("b", null, toDisplayString(__props.payload.address.commune), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                        createVNode("span", null, "Quartier"),
                        createVNode("b", null, toDisplayString(__props.payload.address.quartier), 1)
                      ]),
                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                        createVNode("span", null, "Avenue"),
                        createVNode("b", null, toDisplayString(__props.payload.address.avenue), 1)
                      ]),
                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                        createVNode("span", null, "Number"),
                        createVNode("b", null, toDisplayString(__props.payload.address.no), 1)
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
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/address-details.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "preview",
  __ssrInlineRender: true,
  props: {
    payload: Object
  },
  setup(__props) {
    const { dateFormat_Month } = useHelpers();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreImage = __nuxt_component_0;
      const _component_AdminAddressDetails = __nuxt_component_1;
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
                                          _push7(`<div class="d-flex ga-2 preview-row"${_scopeId6}><span${_scopeId6}>Name</span><b${_scopeId6}>${ssrInterpolate(__props.payload.businessName)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId6}><span${_scopeId6}>Type</span><b${_scopeId6}>${ssrInterpolate(__props.payload.businessType)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId6}><span${_scopeId6}>Tax identification n\xB0</span><b${_scopeId6}>${ssrInterpolate(__props.payload.taxIdentificationNumber)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId6}><span${_scopeId6}>Registration n\xB0</span><b${_scopeId6}>${ssrInterpolate(__props.payload.registrationNumber)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId6}><span${_scopeId6}>Bank account name</span><b${_scopeId6}>${ssrInterpolate(__props.payload.bankDetails.accountName)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId6}><span${_scopeId6}>Bank account number</span><b${_scopeId6}>${ssrInterpolate(__props.payload.bankDetails.accountNo)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId6}><span${_scopeId6}>Registration date</span><b${_scopeId6}>${ssrInterpolate(unref(dateFormat_Month)(__props.payload.dateOfRegistration))}</b></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Name"),
                                              createVNode("b", null, toDisplayString(__props.payload.businessName), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Type"),
                                              createVNode("b", null, toDisplayString(__props.payload.businessType), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Tax identification n\xB0"),
                                              createVNode("b", null, toDisplayString(__props.payload.taxIdentificationNumber), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Registration n\xB0"),
                                              createVNode("b", null, toDisplayString(__props.payload.registrationNumber), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Bank account name"),
                                              createVNode("b", null, toDisplayString(__props.payload.bankDetails.accountName), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Bank account number"),
                                              createVNode("b", null, toDisplayString(__props.payload.bankDetails.accountNo), 1)
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
                                            createVNode("span", null, "Name"),
                                            createVNode("b", null, toDisplayString(__props.payload.businessName), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Type"),
                                            createVNode("b", null, toDisplayString(__props.payload.businessType), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Tax identification n\xB0"),
                                            createVNode("b", null, toDisplayString(__props.payload.taxIdentificationNumber), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Registration n\xB0"),
                                            createVNode("b", null, toDisplayString(__props.payload.registrationNumber), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Bank account name"),
                                            createVNode("b", null, toDisplayString(__props.payload.bankDetails.accountName), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Bank account number"),
                                            createVNode("b", null, toDisplayString(__props.payload.bankDetails.accountNo), 1)
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
                                          createVNode("span", null, "Name"),
                                          createVNode("b", null, toDisplayString(__props.payload.businessName), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Type"),
                                          createVNode("b", null, toDisplayString(__props.payload.businessType), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Tax identification n\xB0"),
                                          createVNode("b", null, toDisplayString(__props.payload.taxIdentificationNumber), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Registration n\xB0"),
                                          createVNode("b", null, toDisplayString(__props.payload.registrationNumber), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Bank account name"),
                                          createVNode("b", null, toDisplayString(__props.payload.bankDetails.accountName), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Bank account number"),
                                          createVNode("b", null, toDisplayString(__props.payload.bankDetails.accountNo), 1)
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
                                        createVNode("span", null, "Name"),
                                        createVNode("b", null, toDisplayString(__props.payload.businessName), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                        createVNode("span", null, "Type"),
                                        createVNode("b", null, toDisplayString(__props.payload.businessType), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                        createVNode("span", null, "Tax identification n\xB0"),
                                        createVNode("b", null, toDisplayString(__props.payload.taxIdentificationNumber), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                        createVNode("span", null, "Registration n\xB0"),
                                        createVNode("b", null, toDisplayString(__props.payload.registrationNumber), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                        createVNode("span", null, "Bank account name"),
                                        createVNode("b", null, toDisplayString(__props.payload.bankDetails.accountName), 1)
                                      ]),
                                      createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                        createVNode("span", null, "Bank account number"),
                                        createVNode("b", null, toDisplayString(__props.payload.bankDetails.accountNo), 1)
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
                                      createVNode("span", null, "Name"),
                                      createVNode("b", null, toDisplayString(__props.payload.businessName), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                      createVNode("span", null, "Type"),
                                      createVNode("b", null, toDisplayString(__props.payload.businessType), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                      createVNode("span", null, "Tax identification n\xB0"),
                                      createVNode("b", null, toDisplayString(__props.payload.taxIdentificationNumber), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                      createVNode("span", null, "Registration n\xB0"),
                                      createVNode("b", null, toDisplayString(__props.payload.registrationNumber), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                      createVNode("span", null, "Bank account name"),
                                      createVNode("b", null, toDisplayString(__props.payload.bankDetails.accountName), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                      createVNode("span", null, "Bank account number"),
                                      createVNode("b", null, toDisplayString(__props.payload.bankDetails.accountNo), 1)
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
                        _push4(`<div class="preview-header py-3"${_scopeId3}><b${_scopeId3}>Contact</b></div><div class="mt-4"${_scopeId3}><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Business website</span><b${_scopeId3}>${ssrInterpolate(__props.payload.website)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Business email address</span><b${_scopeId3}>${ssrInterpolate(__props.payload.email)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Business phone N\xB0</span><b${_scopeId3}>${ssrInterpolate(__props.payload.phone)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Business contact person</span><b${_scopeId3}>${ssrInterpolate(__props.payload.contactPerson.names)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Contact person email</span><b${_scopeId3}>${ssrInterpolate(__props.payload.contactPerson.email)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId3}><span${_scopeId3}>Contact person phone N\xB0</span><b${_scopeId3}>${ssrInterpolate(__props.payload.contactPerson.phone)}</b></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "preview-header py-3" }, [
                            createVNode("b", null, "Contact")
                          ]),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                              createVNode("span", null, "Business website"),
                              createVNode("b", null, toDisplayString(__props.payload.website), 1)
                            ]),
                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                              createVNode("span", null, "Business email address"),
                              createVNode("b", null, toDisplayString(__props.payload.email), 1)
                            ]),
                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                              createVNode("span", null, "Business phone N\xB0"),
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
                              createVNode("span", null, "Contact person phone N\xB0"),
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
                            createVNode("span", null, "Business website"),
                            createVNode("b", null, toDisplayString(__props.payload.website), 1)
                          ]),
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Business email address"),
                            createVNode("b", null, toDisplayString(__props.payload.email), 1)
                          ]),
                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                            createVNode("span", null, "Business phone N\xB0"),
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
                            createVNode("span", null, "Contact person phone N\xB0"),
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
                  _push3(`<div class="px-3 mt-4 w-100"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_AdminAddressDetails, { payload: __props.payload }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
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
                    createVNode("div", { class: "px-3 mt-4 w-100" }, [
                      createVNode(_component_AdminAddressDetails, { payload: __props.payload }, null, 8, ["payload"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a;
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "preview-header"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<b${_scopeId3}>Business summary</b>`);
                      } else {
                        return [
                          createVNode("b", null, "Business summary")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="px-3 py-4 w-100 text-caption"${_scopeId2}><div${_scopeId2}>${(_a = __props.payload.summary) != null ? _a : ""}</div></div>`);
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      class: "preview-header"
                    }, {
                      default: withCtx(() => [
                        createVNode("b", null, "Business summary")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "px-3 py-4 w-100 text-caption" }, [
                      createVNode("div", {
                        innerHTML: __props.payload.summary
                      }, null, 8, ["innerHTML"])
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
                                    createVNode("span", null, "Name"),
                                    createVNode("b", null, toDisplayString(__props.payload.businessName), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                    createVNode("span", null, "Type"),
                                    createVNode("b", null, toDisplayString(__props.payload.businessType), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                    createVNode("span", null, "Tax identification n\xB0"),
                                    createVNode("b", null, toDisplayString(__props.payload.taxIdentificationNumber), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                    createVNode("span", null, "Registration n\xB0"),
                                    createVNode("b", null, toDisplayString(__props.payload.registrationNumber), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                    createVNode("span", null, "Bank account name"),
                                    createVNode("b", null, toDisplayString(__props.payload.bankDetails.accountName), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                    createVNode("span", null, "Bank account number"),
                                    createVNode("b", null, toDisplayString(__props.payload.bankDetails.accountNo), 1)
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
                          createVNode("span", null, "Business website"),
                          createVNode("b", null, toDisplayString(__props.payload.website), 1)
                        ]),
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Business email address"),
                          createVNode("b", null, toDisplayString(__props.payload.email), 1)
                        ]),
                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                          createVNode("span", null, "Business phone N\xB0"),
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
                          createVNode("span", null, "Contact person phone N\xB0"),
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
                  createVNode("div", { class: "px-3 mt-4 w-100" }, [
                    createVNode(_component_AdminAddressDetails, { payload: __props.payload }, null, 8, ["payload"])
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
                      createVNode("b", null, "Business summary")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "px-3 py-4 w-100 text-caption" }, [
                    createVNode("div", {
                      innerHTML: __props.payload.summary
                    }, null, 8, ["innerHTML"])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/business/preview.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$4;
const _sfc_main$3 = {
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
    const { required } = useRules();
    const { toggleSnackbar } = useAppStore();
    const { getBusinessTypes } = useBusinessTypeStore();
    const businessTypes = ref([]);
    const loadTypes = ref(false);
    const getData = async () => {
      loadTypes.value = true;
      businessTypes.value = await getBusinessTypes();
      loadTypes.value = false;
    };
    const businessTypesList = computed(() => {
      return businessTypes.value.map((b) => b.business_type);
    });
    const formData = ref(null);
    const moveNext = async () => {
      let tab = 0;
      const { valid } = await formData.value.validate();
      if (valid)
        if (props.payload.image)
          tab = 1;
        else
          toggleSnackbar({
            status: true,
            message: "Image is required",
            type: "warning"
          });
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
    const setBusinessType = (val) => {
      var _a;
      props.payload.businessType = val;
      props.payload.businessTypeId = (_a = businessTypes.value.find(
        (b) => b.business_type == val
      )) == null ? void 0 : _a.id;
    };
    const categories = ["FORMAL", "UNFORMAL"], setCategory = (val) => {
      props.payload.businessCategory = val;
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
      const _component_AdminCoreSelect = __nuxt_component_1$1;
      const _component_AdminCoreCalendarDate = __nuxt_component_2$1;
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
                                            sm: "4"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Name",
                                                  modelValue: __props.payload.businessName,
                                                  "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                                  rules: unref(required)()
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Name",
                                                    modelValue: __props.payload.businessName,
                                                    "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                                    rules: unref(required)()
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                                  label: "Type",
                                                  modelValue: __props.payload.businessType,
                                                  "onUpdate:modelValue": ($event) => __props.payload.businessType = $event,
                                                  rules: unref(required)(),
                                                  id: "selectBusinessType",
                                                  loading: unref(loadTypes),
                                                  readonly: ""
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#selectBusinessType",
                                                  list: unref(businessTypesList),
                                                  listValue: __props.payload.businessType,
                                                  onSetItem: setBusinessType
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Type",
                                                    modelValue: __props.payload.businessType,
                                                    "onUpdate:modelValue": ($event) => __props.payload.businessType = $event,
                                                    rules: unref(required)(),
                                                    id: "selectBusinessType",
                                                    loading: unref(loadTypes),
                                                    readonly: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#selectBusinessType",
                                                    list: unref(businessTypesList),
                                                    listValue: __props.payload.businessType,
                                                    onSetItem: setBusinessType
                                                  }, null, 8, ["list", "listValue"])
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
                                                  label: "Category",
                                                  modelValue: __props.payload.businessCategory,
                                                  "onUpdate:modelValue": ($event) => __props.payload.businessCategory = $event,
                                                  rules: unref(required)(),
                                                  id: "selectCategory",
                                                  readonly: ""
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#selectCategory",
                                                  list: categories,
                                                  listValue: __props.payload.businessCategory,
                                                  onSetItem: setCategory
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Category",
                                                    modelValue: __props.payload.businessCategory,
                                                    "onUpdate:modelValue": ($event) => __props.payload.businessCategory = $event,
                                                    rules: unref(required)(),
                                                    id: "selectCategory",
                                                    readonly: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#selectCategory",
                                                    list: categories,
                                                    listValue: __props.payload.businessCategory,
                                                    onSetItem: setCategory
                                                  }, null, 8, ["listValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Name",
                                                  modelValue: __props.payload.businessName,
                                                  "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                                  rules: unref(required)()
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Type",
                                                  modelValue: __props.payload.businessType,
                                                  "onUpdate:modelValue": ($event) => __props.payload.businessType = $event,
                                                  rules: unref(required)(),
                                                  id: "selectBusinessType",
                                                  loading: unref(loadTypes),
                                                  readonly: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#selectBusinessType",
                                                  list: unref(businessTypesList),
                                                  listValue: __props.payload.businessType,
                                                  onSetItem: setBusinessType
                                                }, null, 8, ["list", "listValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "4"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Category",
                                                  modelValue: __props.payload.businessCategory,
                                                  "onUpdate:modelValue": ($event) => __props.payload.businessCategory = $event,
                                                  rules: unref(required)(),
                                                  id: "selectCategory",
                                                  readonly: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#selectCategory",
                                                  list: categories,
                                                  listValue: __props.payload.businessCategory,
                                                  onSetItem: setCategory
                                                }, null, 8, ["listValue"])
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
                                                  label: "TIN",
                                                  modelValue: __props.payload.taxIdentificationNumber,
                                                  "onUpdate:modelValue": ($event) => __props.payload.taxIdentificationNumber = $event,
                                                  rules: __props.payload.category === "FORMAL" ? unref(required)() : []
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "TIN",
                                                    modelValue: __props.payload.taxIdentificationNumber,
                                                    "onUpdate:modelValue": ($event) => __props.payload.taxIdentificationNumber = $event,
                                                    rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                                  label: "RCCM",
                                                  modelValue: __props.payload.registrationNumber,
                                                  "onUpdate:modelValue": ($event) => __props.payload.registrationNumber = $event,
                                                  rules: __props.payload.category === "FORMAL" ? unref(required)() : []
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "RCCM",
                                                    modelValue: __props.payload.registrationNumber,
                                                    "onUpdate:modelValue": ($event) => __props.payload.registrationNumber = $event,
                                                    rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                                  label: "TIN",
                                                  modelValue: __props.payload.taxIdentificationNumber,
                                                  "onUpdate:modelValue": ($event) => __props.payload.taxIdentificationNumber = $event,
                                                  rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                                  label: "RCCM",
                                                  modelValue: __props.payload.registrationNumber,
                                                  "onUpdate:modelValue": ($event) => __props.payload.registrationNumber = $event,
                                                  rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                                  label: "Bank account name",
                                                  modelValue: __props.payload.bankDetails.accountName,
                                                  "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountName = $event,
                                                  rules: __props.payload.category === "FORMAL" ? unref(required)() : []
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Bank account name",
                                                    modelValue: __props.payload.bankDetails.accountName,
                                                    "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountName = $event,
                                                    rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                                  label: "Bank account no",
                                                  modelValue: __props.payload.bankDetails.accountNo,
                                                  "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountNo = $event,
                                                  rules: __props.payload.category === "FORMAL" ? unref(required)() : []
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Bank account no",
                                                    modelValue: __props.payload.bankDetails.accountNo,
                                                    "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountNo = $event,
                                                    rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                                  label: "Bank account name",
                                                  modelValue: __props.payload.bankDetails.accountName,
                                                  "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountName = $event,
                                                  rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                                  label: "Bank account no",
                                                  modelValue: __props.payload.bankDetails.accountNo,
                                                  "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountNo = $event,
                                                  rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Name",
                                                modelValue: __props.payload.businessName,
                                                "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                                rules: unref(required)()
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Type",
                                                modelValue: __props.payload.businessType,
                                                "onUpdate:modelValue": ($event) => __props.payload.businessType = $event,
                                                rules: unref(required)(),
                                                id: "selectBusinessType",
                                                loading: unref(loadTypes),
                                                readonly: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#selectBusinessType",
                                                list: unref(businessTypesList),
                                                listValue: __props.payload.businessType,
                                                onSetItem: setBusinessType
                                              }, null, 8, ["list", "listValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Category",
                                                modelValue: __props.payload.businessCategory,
                                                "onUpdate:modelValue": ($event) => __props.payload.businessCategory = $event,
                                                rules: unref(required)(),
                                                id: "selectCategory",
                                                readonly: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#selectCategory",
                                                list: categories,
                                                listValue: __props.payload.businessCategory,
                                                onSetItem: setCategory
                                              }, null, 8, ["listValue"])
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
                                                label: "TIN",
                                                modelValue: __props.payload.taxIdentificationNumber,
                                                "onUpdate:modelValue": ($event) => __props.payload.taxIdentificationNumber = $event,
                                                rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                                label: "RCCM",
                                                modelValue: __props.payload.registrationNumber,
                                                "onUpdate:modelValue": ($event) => __props.payload.registrationNumber = $event,
                                                rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                                label: "Bank account name",
                                                modelValue: __props.payload.bankDetails.accountName,
                                                "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountName = $event,
                                                rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                                label: "Bank account no",
                                                modelValue: __props.payload.bankDetails.accountNo,
                                                "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountNo = $event,
                                                rules: __props.payload.category === "FORMAL" ? unref(required)() : []
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                          sm: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Name",
                                              modelValue: __props.payload.businessName,
                                              "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                              rules: unref(required)()
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Type",
                                              modelValue: __props.payload.businessType,
                                              "onUpdate:modelValue": ($event) => __props.payload.businessType = $event,
                                              rules: unref(required)(),
                                              id: "selectBusinessType",
                                              loading: unref(loadTypes),
                                              readonly: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#selectBusinessType",
                                              list: unref(businessTypesList),
                                              listValue: __props.payload.businessType,
                                              onSetItem: setBusinessType
                                            }, null, 8, ["list", "listValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Category",
                                              modelValue: __props.payload.businessCategory,
                                              "onUpdate:modelValue": ($event) => __props.payload.businessCategory = $event,
                                              rules: unref(required)(),
                                              id: "selectCategory",
                                              readonly: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#selectCategory",
                                              list: categories,
                                              listValue: __props.payload.businessCategory,
                                              onSetItem: setCategory
                                            }, null, 8, ["listValue"])
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
                                              label: "TIN",
                                              modelValue: __props.payload.taxIdentificationNumber,
                                              "onUpdate:modelValue": ($event) => __props.payload.taxIdentificationNumber = $event,
                                              rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                              label: "RCCM",
                                              modelValue: __props.payload.registrationNumber,
                                              "onUpdate:modelValue": ($event) => __props.payload.registrationNumber = $event,
                                              rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                              label: "Bank account name",
                                              modelValue: __props.payload.bankDetails.accountName,
                                              "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountName = $event,
                                              rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                              label: "Bank account no",
                                              modelValue: __props.payload.bankDetails.accountNo,
                                              "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountNo = $event,
                                              rules: __props.payload.category === "FORMAL" ? unref(required)() : []
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Name",
                                            modelValue: __props.payload.businessName,
                                            "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                            rules: unref(required)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Type",
                                            modelValue: __props.payload.businessType,
                                            "onUpdate:modelValue": ($event) => __props.payload.businessType = $event,
                                            rules: unref(required)(),
                                            id: "selectBusinessType",
                                            loading: unref(loadTypes),
                                            readonly: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#selectBusinessType",
                                            list: unref(businessTypesList),
                                            listValue: __props.payload.businessType,
                                            onSetItem: setBusinessType
                                          }, null, 8, ["list", "listValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Category",
                                            modelValue: __props.payload.businessCategory,
                                            "onUpdate:modelValue": ($event) => __props.payload.businessCategory = $event,
                                            rules: unref(required)(),
                                            id: "selectCategory",
                                            readonly: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#selectCategory",
                                            list: categories,
                                            listValue: __props.payload.businessCategory,
                                            onSetItem: setCategory
                                          }, null, 8, ["listValue"])
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
                                            label: "TIN",
                                            modelValue: __props.payload.taxIdentificationNumber,
                                            "onUpdate:modelValue": ($event) => __props.payload.taxIdentificationNumber = $event,
                                            rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                            label: "RCCM",
                                            modelValue: __props.payload.registrationNumber,
                                            "onUpdate:modelValue": ($event) => __props.payload.registrationNumber = $event,
                                            rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                            label: "Bank account name",
                                            modelValue: __props.payload.bankDetails.accountName,
                                            "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountName = $event,
                                            rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                            label: "Bank account no",
                                            modelValue: __props.payload.bankDetails.accountNo,
                                            "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountNo = $event,
                                            rules: __props.payload.category === "FORMAL" ? unref(required)() : []
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Name",
                                          modelValue: __props.payload.businessName,
                                          "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                          rules: unref(required)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Type",
                                          modelValue: __props.payload.businessType,
                                          "onUpdate:modelValue": ($event) => __props.payload.businessType = $event,
                                          rules: unref(required)(),
                                          id: "selectBusinessType",
                                          loading: unref(loadTypes),
                                          readonly: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#selectBusinessType",
                                          list: unref(businessTypesList),
                                          listValue: __props.payload.businessType,
                                          onSetItem: setBusinessType
                                        }, null, 8, ["list", "listValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Category",
                                          modelValue: __props.payload.businessCategory,
                                          "onUpdate:modelValue": ($event) => __props.payload.businessCategory = $event,
                                          rules: unref(required)(),
                                          id: "selectCategory",
                                          readonly: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#selectCategory",
                                          list: categories,
                                          listValue: __props.payload.businessCategory,
                                          onSetItem: setCategory
                                        }, null, 8, ["listValue"])
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
                                          label: "TIN",
                                          modelValue: __props.payload.taxIdentificationNumber,
                                          "onUpdate:modelValue": ($event) => __props.payload.taxIdentificationNumber = $event,
                                          rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                          label: "RCCM",
                                          modelValue: __props.payload.registrationNumber,
                                          "onUpdate:modelValue": ($event) => __props.payload.registrationNumber = $event,
                                          rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                          label: "Bank account name",
                                          modelValue: __props.payload.bankDetails.accountName,
                                          "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountName = $event,
                                          rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                          label: "Bank account no",
                                          modelValue: __props.payload.bankDetails.accountNo,
                                          "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountNo = $event,
                                          rules: __props.payload.category === "FORMAL" ? unref(required)() : []
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Name",
                                        modelValue: __props.payload.businessName,
                                        "onUpdate:modelValue": ($event) => __props.payload.businessName = $event,
                                        rules: unref(required)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Type",
                                        modelValue: __props.payload.businessType,
                                        "onUpdate:modelValue": ($event) => __props.payload.businessType = $event,
                                        rules: unref(required)(),
                                        id: "selectBusinessType",
                                        loading: unref(loadTypes),
                                        readonly: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                      createVNode(_component_AdminCoreSelect, {
                                        activator: "#selectBusinessType",
                                        list: unref(businessTypesList),
                                        listValue: __props.payload.businessType,
                                        onSetItem: setBusinessType
                                      }, null, 8, ["list", "listValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Category",
                                        modelValue: __props.payload.businessCategory,
                                        "onUpdate:modelValue": ($event) => __props.payload.businessCategory = $event,
                                        rules: unref(required)(),
                                        id: "selectCategory",
                                        readonly: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(_component_AdminCoreSelect, {
                                        activator: "#selectCategory",
                                        list: categories,
                                        listValue: __props.payload.businessCategory,
                                        onSetItem: setCategory
                                      }, null, 8, ["listValue"])
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
                                        label: "TIN",
                                        modelValue: __props.payload.taxIdentificationNumber,
                                        "onUpdate:modelValue": ($event) => __props.payload.taxIdentificationNumber = $event,
                                        rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                        label: "RCCM",
                                        modelValue: __props.payload.registrationNumber,
                                        "onUpdate:modelValue": ($event) => __props.payload.registrationNumber = $event,
                                        rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                        label: "Bank account name",
                                        modelValue: __props.payload.bankDetails.accountName,
                                        "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountName = $event,
                                        rules: __props.payload.category === "FORMAL" ? unref(required)() : []
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
                                        label: "Bank account no",
                                        modelValue: __props.payload.bankDetails.accountNo,
                                        "onUpdate:modelValue": ($event) => __props.payload.bankDetails.accountNo = $event,
                                        rules: __props.payload.category === "FORMAL" ? unref(required)() : []
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/business/create/basic.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {
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
      const _component_Telephone = __nuxt_component_1$2;
      const _component_AdminCoreSelect = __nuxt_component_1$1;
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
                                                  "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                                                  rules: __props.payload.businessType === "FORMAL" ? unref(email)() : []
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Business email address",
                                                    modelValue: __props.payload.email,
                                                    "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                                                    rules: __props.payload.businessType === "FORMAL" ? unref(email)() : []
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
                                                _push8(ssrRenderComponent(_component_Telephone, {
                                                  number: __props.payload.phone,
                                                  onSetPhone: setPhone,
                                                  required: true
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_Telephone, {
                                                    number: __props.payload.phone,
                                                    onSetPhone: setPhone,
                                                    required: true
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
                                                  "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event,
                                                  rules: unref(fullName)()
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Contact person names",
                                                    modelValue: __props.payload.contactPerson.names,
                                                    "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event,
                                                    rules: unref(fullName)()
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                                  "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event,
                                                  rules: unref(email)()
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Contact person email",
                                                    modelValue: __props.payload.contactPerson.email,
                                                    "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event,
                                                    rules: unref(email)()
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                                  onSetPhone: setContactPersonPhone,
                                                  required: true
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_Telephone, {
                                                    label: "Contact person phone",
                                                    number: __props.payload.contactPerson.phone,
                                                    onSetPhone: setContactPersonPhone,
                                                    required: true
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
                                                  "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                                                  rules: __props.payload.businessType === "FORMAL" ? unref(email)() : []
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                                  onSetPhone: setPhone,
                                                  required: true
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
                                                  "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event,
                                                  rules: unref(fullName)()
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                                  "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event,
                                                  rules: unref(email)()
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                                  onSetPhone: setContactPersonPhone,
                                                  required: true
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
                                                "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                                                rules: __props.payload.businessType === "FORMAL" ? unref(email)() : []
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                                onSetPhone: setPhone,
                                                required: true
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
                                                "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event,
                                                rules: unref(fullName)()
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                                "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event,
                                                rules: unref(email)()
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                                onSetPhone: setContactPersonPhone,
                                                required: true
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
                                              "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                                              rules: __props.payload.businessType === "FORMAL" ? unref(email)() : []
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                              onSetPhone: setPhone,
                                              required: true
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
                                              "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event,
                                              rules: unref(fullName)()
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                              "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event,
                                              rules: unref(email)()
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                              onSetPhone: setContactPersonPhone,
                                              required: true
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
                                                      var _a, _b;
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VImg, {
                                                          src: (_a = unref(owner).picture) != null ? _a : unref(profileImage)
                                                        }, null, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VImg, {
                                                            src: (_b = unref(owner).picture) != null ? _b : unref(profileImage)
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
                                                        default: withCtx(() => {
                                                          var _a;
                                                          return [
                                                            createVNode(VImg, {
                                                              src: (_a = unref(owner).picture) != null ? _a : unref(profileImage)
                                                            }, null, 8, ["src"])
                                                          ];
                                                        }),
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
                                                      default: withCtx(() => {
                                                        var _a;
                                                        return [
                                                          createVNode(VImg, {
                                                            src: (_a = unref(owner).picture) != null ? _a : unref(profileImage)
                                                          }, null, 8, ["src"])
                                                        ];
                                                      }),
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
                                                    default: withCtx(() => {
                                                      var _a;
                                                      return [
                                                        createVNode(VImg, {
                                                          src: (_a = unref(owner).picture) != null ? _a : unref(profileImage)
                                                        }, null, 8, ["src"])
                                                      ];
                                                    }),
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
                                                  default: withCtx(() => {
                                                    var _a;
                                                    return [
                                                      createVNode(VImg, {
                                                        src: (_a = unref(owner).picture) != null ? _a : unref(profileImage)
                                                      }, null, 8, ["src"])
                                                    ];
                                                  }),
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
                                            "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                                            rules: __props.payload.businessType === "FORMAL" ? unref(email)() : []
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                            onSetPhone: setPhone,
                                            required: true
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
                                            "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event,
                                            rules: unref(fullName)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                            "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event,
                                            rules: unref(email)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                            onSetPhone: setContactPersonPhone,
                                            required: true
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
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createVNode(VImg, {
                                                    src: (_a = unref(owner).picture) != null ? _a : unref(profileImage)
                                                  }, null, 8, ["src"])
                                                ];
                                              }),
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
                                          "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                                          rules: __props.payload.businessType === "FORMAL" ? unref(email)() : []
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                          onSetPhone: setPhone,
                                          required: true
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
                                          "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event,
                                          rules: unref(fullName)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                          "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event,
                                          rules: unref(email)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                          onSetPhone: setContactPersonPhone,
                                          required: true
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
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createVNode(VImg, {
                                                  src: (_a = unref(owner).picture) != null ? _a : unref(profileImage)
                                                }, null, 8, ["src"])
                                              ];
                                            }),
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
                                        "onUpdate:modelValue": ($event) => __props.payload.email = $event,
                                        rules: __props.payload.businessType === "FORMAL" ? unref(email)() : []
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                        onSetPhone: setPhone,
                                        required: true
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
                                        "onUpdate:modelValue": ($event) => __props.payload.contactPerson.names = $event,
                                        rules: unref(fullName)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                        "onUpdate:modelValue": ($event) => __props.payload.contactPerson.email = $event,
                                        rules: unref(email)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
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
                                        onSetPhone: setContactPersonPhone,
                                        required: true
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
                                          default: withCtx(() => {
                                            var _a;
                                            return [
                                              createVNode(VImg, {
                                                src: (_a = unref(owner).picture) != null ? _a : unref(profileImage)
                                              }, null, 8, ["src"])
                                            ];
                                          }),
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/business/create/contact.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$2;
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/address-inputs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {
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
      const _component_Editor = __nuxt_component_4$1;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/business/create/others.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main;

export { __nuxt_component_7 as _, __nuxt_component_2 as a, __nuxt_component_3 as b, __nuxt_component_4 as c, __nuxt_component_6 as d };
//# sourceMappingURL=others-MJNGAYZp.mjs.map
