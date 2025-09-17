import { _ as __nuxt_component_0$2 } from './page-header-rZyOPLsZ.mjs';
import { _ as __nuxt_component_0$3 } from './stepper-ipq6mb5U.mjs';
import { _ as __nuxt_component_0$1 } from './index-RXRlxYy9.mjs';
import { _ as __nuxt_component_1$1 } from './select-sjn27vix.mjs';
import { u as useRules } from './useRules-Lv1tnQPg.mjs';
import { useSSRContext, ref, computed, createVNode, mergeProps, Fragment, withCtx, unref, toDisplayString, openBlock, createBlock, renderList, isRef, watchEffect, watch, withKeys, withModifiers, createCommentVNode, mergeModels, useModel } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { m as makeVInputProps, u as useFocus, a as VInput, V as VTextField } from './VTextField-8SU2p1Ep.mjs';
import { _ as __nuxt_component_0$4 } from './calendar-date-IHPjl74u.mjs';
import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { p as propsFactory, g as genericComponent, w as useProxiedModel, v as getUid, $ as filterInputAttrs, s as storeToRefs, h as useAppStore, b as navigateTo } from '../server.mjs';
import { u as useBusinessStore } from './business-1K3_QQBT.mjs';
import { u as useIndustriestore } from './industries-lHfxNRn7.mjs';
import { u as useJobTypeStore } from './job-types-bFYimokk.mjs';
import { u as useCategoryStore } from './categories-JvrMV5cl.mjs';
import { u as useSubcategoryStore } from './subcategories-P-PAKG_4.mjs';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import { V as VForm } from './VForm-wrdi8IEW.mjs';
import { V as VScaleTransition } from './index-d8gkbdU6.mjs';
import { a as VDefaultsProvider, V as VIcon } from './index-3E7yy1qS.mjs';
import { m as makeVSelectionControlProps, V as VSelectionControl } from './VSelectionControl-t8h0Xxrv.mjs';
import { u as useLoader, L as LoaderSlot } from './position-AkaJaFJy.mjs';
import { b as VProgressCircular, V as VBtn } from './VBtn-yNf12l4D.mjs';
import { u as useRender } from './tag-pIHjuosL.mjs';
import { V as VList, a as VListItem } from './VList-hhjvxiav.mjs';
import { V as VSpacer } from './VSpacer-0DxA8eQn.mjs';
import { _ as __nuxt_component_4$1 } from './editor-JUAoNM3K.mjs';
import { V as VTextarea } from './VTextarea-W1zqEte6.mjs';
import { V as VCard } from './VCard-MEGoD2_3.mjs';
import { V as VBadge } from './VBadge-xHT1Vb9M.mjs';
import { u as useJobStore } from './jobs-uJv1lqGQ.mjs';
import { V as VWindow, a as VWindowItem } from './VWindowItem-BpMO-iOS.mjs';

const _sfc_main$6 = {
  __name: "preview",
  __ssrInlineRender: true,
  props: {
    payload: Object
  },
  setup(__props) {
    const { currencyFormat, dateFormat_Month } = useHelpers();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreImage = __nuxt_component_0$1;
      _push(ssrRenderComponent(VCard, mergeProps({
        flat: "",
        color: "card pa-0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              class: "text-caption",
              fluid: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "preview-header"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<b${_scopeId4}>Job details</b>`);
                            } else {
                              return [
                                createVNode("b", null, "Job details")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VContainer, {
                                class: "pa-0",
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
                                                _push8(ssrRenderComponent(_component_AdminCoreImage, {
                                                  image: __props.payload.banner,
                                                  view: true,
                                                  profile: false,
                                                  editable: false
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_AdminCoreImage, {
                                                    image: __props.payload.banner,
                                                    view: true,
                                                    profile: false,
                                                    editable: false
                                                  }, null, 8, ["image"])
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
                                              var _a, _b;
                                              if (_push8) {
                                                _push8(`<div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Name</span><b${_scopeId7}>${ssrInterpolate(__props.payload.jobName)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Type</span><b${_scopeId7}>${ssrInterpolate(__props.payload.jobType)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Location</span><b${_scopeId7}>${ssrInterpolate(__props.payload.location === "" ? "-" : __props.payload.location)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Experience</span><b${_scopeId7}>${ssrInterpolate((_a = __props.payload.experience) != null ? _a : "-")} Year(s)</b></div><div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Experience Level</span><b${_scopeId7}>${ssrInterpolate(__props.payload.experienceLevel)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Applications limit</span><b${_scopeId7}>${ssrInterpolate(__props.payload.applicationsLimit <= 0 ? "No limit" : __props.payload.applicationsLimit)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Deadline</span><b${_scopeId7}>${ssrInterpolate(unref(dateFormat_Month)(__props.payload.deadline) || "No Deadline")}</b></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Name"),
                                                    createVNode("b", null, toDisplayString(__props.payload.jobName), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Type"),
                                                    createVNode("b", null, toDisplayString(__props.payload.jobType), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Location"),
                                                    createVNode("b", null, toDisplayString(__props.payload.location === "" ? "-" : __props.payload.location), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Experience"),
                                                    createVNode("b", null, toDisplayString((_b = __props.payload.experience) != null ? _b : "-") + " Year(s)", 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Experience Level"),
                                                    createVNode("b", null, toDisplayString(__props.payload.experienceLevel), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Applications limit"),
                                                    createVNode("b", null, toDisplayString(__props.payload.applicationsLimit <= 0 ? "No limit" : __props.payload.applicationsLimit), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Deadline"),
                                                    createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.deadline) || "No Deadline"), 1)
                                                  ])
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
                                              var _a2, _b2;
                                              var _a, _b, _c, _d, _e, _f;
                                              if (_push8) {
                                                _push8(`<div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Industry</span><b${_scopeId7}>${ssrInterpolate(__props.payload.industry)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Category</span><b${_scopeId7}>${ssrInterpolate(typeof __props.payload.category === "object" ? (_a = __props.payload.category) == null ? void 0 : _a.name : __props.payload.category)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Subcategory</span><b${_scopeId7}>${ssrInterpolate((_a2 = __props.payload.subcategory) != null ? _a2 : (_b = __props.payload.category) == null ? void 0 : _b.subcategory)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Business</span><b${_scopeId7}>${ssrInterpolate(typeof __props.payload.business === "object" ? (_c = __props.payload.business) == null ? void 0 : _c.businessName : __props.payload.business)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Currency</span><b${_scopeId7}>${ssrInterpolate(__props.payload.currency)}</b></div><div class="d-flex ga-2 preview-row"${_scopeId7}><span${_scopeId7}>Salary range</span><b${_scopeId7}>${ssrInterpolate(unref(currencyFormat)(__props.payload.salaryRange[0]))} - ${ssrInterpolate(unref(currencyFormat)(__props.payload.salaryRange[1]))}</b><span class="${ssrRenderClass(__props.payload.isConfidential ? "text-link" : "text-secondary")}"${_scopeId7}> [${ssrInterpolate(__props.payload.isConfidential ? "hide" : "show")} salary]</span></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Industry"),
                                                    createVNode("b", null, toDisplayString(__props.payload.industry), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Category"),
                                                    createVNode("b", null, toDisplayString(typeof __props.payload.category === "object" ? (_d = __props.payload.category) == null ? void 0 : _d.name : __props.payload.category), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Subcategory"),
                                                    createVNode("b", null, toDisplayString((_b2 = __props.payload.subcategory) != null ? _b2 : (_e = __props.payload.category) == null ? void 0 : _e.subcategory), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Business"),
                                                    createVNode("b", null, toDisplayString(typeof __props.payload.business === "object" ? (_f = __props.payload.business) == null ? void 0 : _f.businessName : __props.payload.business), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Currency"),
                                                    createVNode("b", null, toDisplayString(__props.payload.currency), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Salary range"),
                                                    createVNode("b", null, toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[0])) + " - " + toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[1])), 1),
                                                    createVNode("span", {
                                                      class: __props.payload.isConfidential ? "text-link" : "text-secondary"
                                                    }, " [" + toDisplayString(__props.payload.isConfidential ? "hide" : "show") + " salary]", 3)
                                                  ])
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
                                                createVNode(_component_AdminCoreImage, {
                                                  image: __props.payload.banner,
                                                  view: true,
                                                  profile: false,
                                                  editable: false
                                                }, null, 8, ["image"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "4"
                                            }, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Name"),
                                                    createVNode("b", null, toDisplayString(__props.payload.jobName), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Type"),
                                                    createVNode("b", null, toDisplayString(__props.payload.jobType), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Location"),
                                                    createVNode("b", null, toDisplayString(__props.payload.location === "" ? "-" : __props.payload.location), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Experience"),
                                                    createVNode("b", null, toDisplayString((_a = __props.payload.experience) != null ? _a : "-") + " Year(s)", 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Experience Level"),
                                                    createVNode("b", null, toDisplayString(__props.payload.experienceLevel), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Applications limit"),
                                                    createVNode("b", null, toDisplayString(__props.payload.applicationsLimit <= 0 ? "No limit" : __props.payload.applicationsLimit), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Deadline"),
                                                    createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.deadline) || "No Deadline"), 1)
                                                  ])
                                                ];
                                              }),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "4"
                                            }, {
                                              default: withCtx(() => {
                                                var _a2;
                                                var _a, _b, _c;
                                                return [
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Industry"),
                                                    createVNode("b", null, toDisplayString(__props.payload.industry), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Category"),
                                                    createVNode("b", null, toDisplayString(typeof __props.payload.category === "object" ? (_a = __props.payload.category) == null ? void 0 : _a.name : __props.payload.category), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Subcategory"),
                                                    createVNode("b", null, toDisplayString((_a2 = __props.payload.subcategory) != null ? _a2 : (_b = __props.payload.category) == null ? void 0 : _b.subcategory), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Business"),
                                                    createVNode("b", null, toDisplayString(typeof __props.payload.business === "object" ? (_c = __props.payload.business) == null ? void 0 : _c.businessName : __props.payload.business), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Currency"),
                                                    createVNode("b", null, toDisplayString(__props.payload.currency), 1)
                                                  ]),
                                                  createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                    createVNode("span", null, "Salary range"),
                                                    createVNode("b", null, toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[0])) + " - " + toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[1])), 1),
                                                    createVNode("span", {
                                                      class: __props.payload.isConfidential ? "text-link" : "text-secondary"
                                                    }, " [" + toDisplayString(__props.payload.isConfidential ? "hide" : "show") + " salary]", 3)
                                                  ])
                                                ];
                                              }),
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
                                              createVNode(_component_AdminCoreImage, {
                                                image: __props.payload.banner,
                                                view: true,
                                                profile: false,
                                                editable: false
                                              }, null, 8, ["image"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Name"),
                                                  createVNode("b", null, toDisplayString(__props.payload.jobName), 1)
                                                ]),
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Type"),
                                                  createVNode("b", null, toDisplayString(__props.payload.jobType), 1)
                                                ]),
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Location"),
                                                  createVNode("b", null, toDisplayString(__props.payload.location === "" ? "-" : __props.payload.location), 1)
                                                ]),
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Experience"),
                                                  createVNode("b", null, toDisplayString((_a = __props.payload.experience) != null ? _a : "-") + " Year(s)", 1)
                                                ]),
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Experience Level"),
                                                  createVNode("b", null, toDisplayString(__props.payload.experienceLevel), 1)
                                                ]),
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Applications limit"),
                                                  createVNode("b", null, toDisplayString(__props.payload.applicationsLimit <= 0 ? "No limit" : __props.payload.applicationsLimit), 1)
                                                ]),
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Deadline"),
                                                  createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.deadline) || "No Deadline"), 1)
                                                ])
                                              ];
                                            }),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "4"
                                          }, {
                                            default: withCtx(() => {
                                              var _a2;
                                              var _a, _b, _c;
                                              return [
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Industry"),
                                                  createVNode("b", null, toDisplayString(__props.payload.industry), 1)
                                                ]),
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Category"),
                                                  createVNode("b", null, toDisplayString(typeof __props.payload.category === "object" ? (_a = __props.payload.category) == null ? void 0 : _a.name : __props.payload.category), 1)
                                                ]),
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Subcategory"),
                                                  createVNode("b", null, toDisplayString((_a2 = __props.payload.subcategory) != null ? _a2 : (_b = __props.payload.category) == null ? void 0 : _b.subcategory), 1)
                                                ]),
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Business"),
                                                  createVNode("b", null, toDisplayString(typeof __props.payload.business === "object" ? (_c = __props.payload.business) == null ? void 0 : _c.businessName : __props.payload.business), 1)
                                                ]),
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Currency"),
                                                  createVNode("b", null, toDisplayString(__props.payload.currency), 1)
                                                ]),
                                                createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                  createVNode("span", null, "Salary range"),
                                                  createVNode("b", null, toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[0])) + " - " + toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[1])), 1),
                                                  createVNode("span", {
                                                    class: __props.payload.isConfidential ? "text-link" : "text-secondary"
                                                  }, " [" + toDisplayString(__props.payload.isConfidential ? "hide" : "show") + " salary]", 3)
                                                ])
                                              ];
                                            }),
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
                                  class: "pa-0",
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
                                            createVNode(_component_AdminCoreImage, {
                                              image: __props.payload.banner,
                                              view: true,
                                              profile: false,
                                              editable: false
                                            }, null, 8, ["image"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx(() => {
                                            var _a;
                                            return [
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Name"),
                                                createVNode("b", null, toDisplayString(__props.payload.jobName), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Type"),
                                                createVNode("b", null, toDisplayString(__props.payload.jobType), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Location"),
                                                createVNode("b", null, toDisplayString(__props.payload.location === "" ? "-" : __props.payload.location), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Experience"),
                                                createVNode("b", null, toDisplayString((_a = __props.payload.experience) != null ? _a : "-") + " Year(s)", 1)
                                              ]),
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Experience Level"),
                                                createVNode("b", null, toDisplayString(__props.payload.experienceLevel), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Applications limit"),
                                                createVNode("b", null, toDisplayString(__props.payload.applicationsLimit <= 0 ? "No limit" : __props.payload.applicationsLimit), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Deadline"),
                                                createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.deadline) || "No Deadline"), 1)
                                              ])
                                            ];
                                          }),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "4"
                                        }, {
                                          default: withCtx(() => {
                                            var _a2;
                                            var _a, _b, _c;
                                            return [
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Industry"),
                                                createVNode("b", null, toDisplayString(__props.payload.industry), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Category"),
                                                createVNode("b", null, toDisplayString(typeof __props.payload.category === "object" ? (_a = __props.payload.category) == null ? void 0 : _a.name : __props.payload.category), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Subcategory"),
                                                createVNode("b", null, toDisplayString((_a2 = __props.payload.subcategory) != null ? _a2 : (_b = __props.payload.category) == null ? void 0 : _b.subcategory), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Business"),
                                                createVNode("b", null, toDisplayString(typeof __props.payload.business === "object" ? (_c = __props.payload.business) == null ? void 0 : _c.businessName : __props.payload.business), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Currency"),
                                                createVNode("b", null, toDisplayString(__props.payload.currency), 1)
                                              ]),
                                              createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                                createVNode("span", null, "Salary range"),
                                                createVNode("b", null, toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[0])) + " - " + toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[1])), 1),
                                                createVNode("span", {
                                                  class: __props.payload.isConfidential ? "text-link" : "text-secondary"
                                                }, " [" + toDisplayString(__props.payload.isConfidential ? "hide" : "show") + " salary]", 3)
                                              ])
                                            ];
                                          }),
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
                            cols: "12",
                            class: "preview-header"
                          }, {
                            default: withCtx(() => [
                              createVNode("b", null, "Job details")
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
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_AdminCoreImage, {
                                            image: __props.payload.banner,
                                            view: true,
                                            profile: false,
                                            editable: false
                                          }, null, 8, ["image"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => {
                                          var _a;
                                          return [
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Name"),
                                              createVNode("b", null, toDisplayString(__props.payload.jobName), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Type"),
                                              createVNode("b", null, toDisplayString(__props.payload.jobType), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Location"),
                                              createVNode("b", null, toDisplayString(__props.payload.location === "" ? "-" : __props.payload.location), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Experience"),
                                              createVNode("b", null, toDisplayString((_a = __props.payload.experience) != null ? _a : "-") + " Year(s)", 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Experience Level"),
                                              createVNode("b", null, toDisplayString(__props.payload.experienceLevel), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Applications limit"),
                                              createVNode("b", null, toDisplayString(__props.payload.applicationsLimit <= 0 ? "No limit" : __props.payload.applicationsLimit), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Deadline"),
                                              createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.deadline) || "No Deadline"), 1)
                                            ])
                                          ];
                                        }),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "4"
                                      }, {
                                        default: withCtx(() => {
                                          var _a2;
                                          var _a, _b, _c;
                                          return [
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Industry"),
                                              createVNode("b", null, toDisplayString(__props.payload.industry), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Category"),
                                              createVNode("b", null, toDisplayString(typeof __props.payload.category === "object" ? (_a = __props.payload.category) == null ? void 0 : _a.name : __props.payload.category), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Subcategory"),
                                              createVNode("b", null, toDisplayString((_a2 = __props.payload.subcategory) != null ? _a2 : (_b = __props.payload.category) == null ? void 0 : _b.subcategory), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Business"),
                                              createVNode("b", null, toDisplayString(typeof __props.payload.business === "object" ? (_c = __props.payload.business) == null ? void 0 : _c.businessName : __props.payload.business), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Currency"),
                                              createVNode("b", null, toDisplayString(__props.payload.currency), 1)
                                            ]),
                                            createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                              createVNode("span", null, "Salary range"),
                                              createVNode("b", null, toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[0])) + " - " + toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[1])), 1),
                                              createVNode("span", {
                                                class: __props.payload.isConfidential ? "text-link" : "text-secondary"
                                              }, " [" + toDisplayString(__props.payload.isConfidential ? "hide" : "show") + " salary]", 3)
                                            ])
                                          ];
                                        }),
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
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          class: "preview-header"
                        }, {
                          default: withCtx(() => [
                            createVNode("b", null, "Job details")
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
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_AdminCoreImage, {
                                          image: __props.payload.banner,
                                          view: true,
                                          profile: false,
                                          editable: false
                                        }, null, 8, ["image"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Name"),
                                            createVNode("b", null, toDisplayString(__props.payload.jobName), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Type"),
                                            createVNode("b", null, toDisplayString(__props.payload.jobType), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Location"),
                                            createVNode("b", null, toDisplayString(__props.payload.location === "" ? "-" : __props.payload.location), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Experience"),
                                            createVNode("b", null, toDisplayString((_a = __props.payload.experience) != null ? _a : "-") + " Year(s)", 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Experience Level"),
                                            createVNode("b", null, toDisplayString(__props.payload.experienceLevel), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Applications limit"),
                                            createVNode("b", null, toDisplayString(__props.payload.applicationsLimit <= 0 ? "No limit" : __props.payload.applicationsLimit), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Deadline"),
                                            createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.deadline) || "No Deadline"), 1)
                                          ])
                                        ];
                                      }),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "4"
                                    }, {
                                      default: withCtx(() => {
                                        var _a2;
                                        var _a, _b, _c;
                                        return [
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Industry"),
                                            createVNode("b", null, toDisplayString(__props.payload.industry), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Category"),
                                            createVNode("b", null, toDisplayString(typeof __props.payload.category === "object" ? (_a = __props.payload.category) == null ? void 0 : _a.name : __props.payload.category), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Subcategory"),
                                            createVNode("b", null, toDisplayString((_a2 = __props.payload.subcategory) != null ? _a2 : (_b = __props.payload.category) == null ? void 0 : _b.subcategory), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Business"),
                                            createVNode("b", null, toDisplayString(typeof __props.payload.business === "object" ? (_c = __props.payload.business) == null ? void 0 : _c.businessName : __props.payload.business), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Currency"),
                                            createVNode("b", null, toDisplayString(__props.payload.currency), 1)
                                          ]),
                                          createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                            createVNode("span", null, "Salary range"),
                                            createVNode("b", null, toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[0])) + " - " + toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[1])), 1),
                                            createVNode("span", {
                                              class: __props.payload.isConfidential ? "text-link" : "text-secondary"
                                            }, " [" + toDisplayString(__props.payload.isConfidential ? "hide" : "show") + " salary]", 3)
                                          ])
                                        ];
                                      }),
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
            _push2(ssrRenderComponent(VContainer, {
              class: "text-caption",
              fluid: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "preview-header"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(ssrRenderComponent(VBadge, {
                                content: (_a = __props.payload.skills) == null ? void 0 : _a.length,
                                inline: "",
                                color: "link",
                                location: "end"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<b class="mr-5"${_scopeId5}>Skills</b>`);
                                  } else {
                                    return [
                                      createVNode("b", { class: "mr-5" }, "Skills")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBadge, {
                                  content: (_b = __props.payload.skills) == null ? void 0 : _b.length,
                                  inline: "",
                                  color: "link",
                                  location: "end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("b", { class: "mr-5" }, "Skills")
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, {
                                class: "mt-1 bg-transparent pa-0",
                                density: "compact",
                                lines: "false"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(__props.payload.skills, (item, i) => {
                                      _push6(ssrRenderComponent(VListItem, { key: i }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: "mdi-chevron-right",
                                              start: ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(item)}</span>`);
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                icon: "mdi-chevron-right",
                                                start: ""
                                              }),
                                              createVNode("span", null, toDisplayString(item), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.skills, (item, i) => {
                                        return openBlock(), createBlock(VListItem, { key: i }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "mdi-chevron-right",
                                              start: ""
                                            }),
                                            createVNode("span", null, toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, {
                                  class: "mt-1 bg-transparent pa-0",
                                  density: "compact",
                                  lines: "false"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.skills, (item, i) => {
                                      return openBlock(), createBlock(VListItem, { key: i }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "mdi-chevron-right",
                                            start: ""
                                          }),
                                          createVNode("span", null, toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
                            class: "preview-header"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(VBadge, {
                                  content: (_a = __props.payload.skills) == null ? void 0 : _a.length,
                                  inline: "",
                                  color: "link",
                                  location: "end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("b", { class: "mr-5" }, "Skills")
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VList, {
                                class: "mt-1 bg-transparent pa-0",
                                density: "compact",
                                lines: "false"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.skills, (item, i) => {
                                    return openBlock(), createBlock(VListItem, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "mdi-chevron-right",
                                          start: ""
                                        }),
                                        createVNode("span", null, toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                          class: "preview-header"
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode(VBadge, {
                                content: (_a = __props.payload.skills) == null ? void 0 : _a.length,
                                inline: "",
                                color: "link",
                                location: "end"
                              }, {
                                default: withCtx(() => [
                                  createVNode("b", { class: "mr-5" }, "Skills")
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VList, {
                              class: "mt-1 bg-transparent pa-0",
                              density: "compact",
                              lines: "false"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.skills, (item, i) => {
                                  return openBlock(), createBlock(VListItem, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
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
            _push2(ssrRenderComponent(VContainer, {
              class: "text-caption",
              fluid: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "preview-header"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(ssrRenderComponent(VBadge, {
                                content: (_a = __props.payload.requirements) == null ? void 0 : _a.length,
                                inline: "",
                                color: "link",
                                location: "end"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<b class="mr-5"${_scopeId5}>Requirements</b>`);
                                  } else {
                                    return [
                                      createVNode("b", { class: "mr-5" }, "Requirements")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBadge, {
                                  content: (_b = __props.payload.requirements) == null ? void 0 : _b.length,
                                  inline: "",
                                  color: "link",
                                  location: "end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("b", { class: "mr-5" }, "Requirements")
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, {
                                class: "mt-1 bg-transparent pa-0",
                                density: "compact",
                                lines: "false"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(__props.payload.requirements, (item, i) => {
                                      _push6(ssrRenderComponent(VListItem, { key: i }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: "mdi-chevron-right",
                                              start: ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(item)}</span>`);
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                icon: "mdi-chevron-right",
                                                start: ""
                                              }),
                                              createVNode("span", null, toDisplayString(item), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requirements, (item, i) => {
                                        return openBlock(), createBlock(VListItem, { key: i }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "mdi-chevron-right",
                                              start: ""
                                            }),
                                            createVNode("span", null, toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, {
                                  class: "mt-1 bg-transparent pa-0",
                                  density: "compact",
                                  lines: "false"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requirements, (item, i) => {
                                      return openBlock(), createBlock(VListItem, { key: i }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "mdi-chevron-right",
                                            start: ""
                                          }),
                                          createVNode("span", null, toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
                            class: "preview-header"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(VBadge, {
                                  content: (_a = __props.payload.requirements) == null ? void 0 : _a.length,
                                  inline: "",
                                  color: "link",
                                  location: "end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("b", { class: "mr-5" }, "Requirements")
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VList, {
                                class: "mt-1 bg-transparent pa-0",
                                density: "compact",
                                lines: "false"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requirements, (item, i) => {
                                    return openBlock(), createBlock(VListItem, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "mdi-chevron-right",
                                          start: ""
                                        }),
                                        createVNode("span", null, toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                          class: "preview-header"
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode(VBadge, {
                                content: (_a = __props.payload.requirements) == null ? void 0 : _a.length,
                                inline: "",
                                color: "link",
                                location: "end"
                              }, {
                                default: withCtx(() => [
                                  createVNode("b", { class: "mr-5" }, "Requirements")
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VList, {
                              class: "mt-1 bg-transparent pa-0",
                              density: "compact",
                              lines: "false"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requirements, (item, i) => {
                                  return openBlock(), createBlock(VListItem, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
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
            _push2(ssrRenderComponent(VContainer, {
              class: "text-caption",
              fluid: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "preview-header"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(ssrRenderComponent(VBadge, {
                                content: (_a = __props.payload.responsibilities) == null ? void 0 : _a.length,
                                inline: "",
                                color: "link",
                                location: "end"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<b class="mr-5"${_scopeId5}>Responsibilities</b>`);
                                  } else {
                                    return [
                                      createVNode("b", { class: "mr-5" }, "Responsibilities")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBadge, {
                                  content: (_b = __props.payload.responsibilities) == null ? void 0 : _b.length,
                                  inline: "",
                                  color: "link",
                                  location: "end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("b", { class: "mr-5" }, "Responsibilities")
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, {
                                class: "mt-1 bg-transparent pa-0",
                                density: "compact",
                                lines: "false"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(__props.payload.responsibilities, (item, i) => {
                                      _push6(ssrRenderComponent(VListItem, { key: i }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: "mdi-chevron-right",
                                              start: ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(item)}</span>`);
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                icon: "mdi-chevron-right",
                                                start: ""
                                              }),
                                              createVNode("span", null, toDisplayString(item), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.responsibilities, (item, i) => {
                                        return openBlock(), createBlock(VListItem, { key: i }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "mdi-chevron-right",
                                              start: ""
                                            }),
                                            createVNode("span", null, toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, {
                                  class: "mt-1 bg-transparent pa-0",
                                  density: "compact",
                                  lines: "false"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.responsibilities, (item, i) => {
                                      return openBlock(), createBlock(VListItem, { key: i }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "mdi-chevron-right",
                                            start: ""
                                          }),
                                          createVNode("span", null, toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
                            class: "preview-header"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(VBadge, {
                                  content: (_a = __props.payload.responsibilities) == null ? void 0 : _a.length,
                                  inline: "",
                                  color: "link",
                                  location: "end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("b", { class: "mr-5" }, "Responsibilities")
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VList, {
                                class: "mt-1 bg-transparent pa-0",
                                density: "compact",
                                lines: "false"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.responsibilities, (item, i) => {
                                    return openBlock(), createBlock(VListItem, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "mdi-chevron-right",
                                          start: ""
                                        }),
                                        createVNode("span", null, toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                          class: "preview-header"
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode(VBadge, {
                                content: (_a = __props.payload.responsibilities) == null ? void 0 : _a.length,
                                inline: "",
                                color: "link",
                                location: "end"
                              }, {
                                default: withCtx(() => [
                                  createVNode("b", { class: "mr-5" }, "Responsibilities")
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VList, {
                              class: "mt-1 bg-transparent pa-0",
                              density: "compact",
                              lines: "false"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.responsibilities, (item, i) => {
                                  return openBlock(), createBlock(VListItem, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
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
            _push2(ssrRenderComponent(VContainer, {
              class: "text-caption",
              fluid: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "preview-header"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(ssrRenderComponent(VBadge, {
                                content: (_a = __props.payload.requiredDocuments) == null ? void 0 : _a.length,
                                inline: "",
                                color: "link",
                                location: "end"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<b class="mr-5"${_scopeId5}>Documents</b>`);
                                  } else {
                                    return [
                                      createVNode("b", { class: "mr-5" }, "Documents")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBadge, {
                                  content: (_b = __props.payload.requiredDocuments) == null ? void 0 : _b.length,
                                  inline: "",
                                  color: "link",
                                  location: "end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("b", { class: "mr-5" }, "Documents")
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, {
                                class: "mt-1 bg-transparent pa-0",
                                density: "compact",
                                lines: "false"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(__props.payload.requiredDocuments, (item, i) => {
                                      _push6(ssrRenderComponent(VListItem, { key: i }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: "mdi-chevron-right",
                                              start: ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(item)}</span>`);
                                          } else {
                                            return [
                                              createVNode(VIcon, {
                                                icon: "mdi-chevron-right",
                                                start: ""
                                              }),
                                              createVNode("span", null, toDisplayString(item), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requiredDocuments, (item, i) => {
                                        return openBlock(), createBlock(VListItem, { key: i }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "mdi-chevron-right",
                                              start: ""
                                            }),
                                            createVNode("span", null, toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, {
                                  class: "mt-1 bg-transparent pa-0",
                                  density: "compact",
                                  lines: "false"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requiredDocuments, (item, i) => {
                                      return openBlock(), createBlock(VListItem, { key: i }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "mdi-chevron-right",
                                            start: ""
                                          }),
                                          createVNode("span", null, toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
                            class: "preview-header"
                          }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(VBadge, {
                                  content: (_a = __props.payload.requiredDocuments) == null ? void 0 : _a.length,
                                  inline: "",
                                  color: "link",
                                  location: "end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("b", { class: "mr-5" }, "Documents")
                                  ]),
                                  _: 1
                                }, 8, ["content"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VList, {
                                class: "mt-1 bg-transparent pa-0",
                                density: "compact",
                                lines: "false"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requiredDocuments, (item, i) => {
                                    return openBlock(), createBlock(VListItem, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "mdi-chevron-right",
                                          start: ""
                                        }),
                                        createVNode("span", null, toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                          class: "preview-header"
                        }, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createVNode(VBadge, {
                                content: (_a = __props.payload.requiredDocuments) == null ? void 0 : _a.length,
                                inline: "",
                                color: "link",
                                location: "end"
                              }, {
                                default: withCtx(() => [
                                  createVNode("b", { class: "mr-5" }, "Documents")
                                ]),
                                _: 1
                              }, 8, ["content"])
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode(VList, {
                              class: "mt-1 bg-transparent pa-0",
                              density: "compact",
                              lines: "false"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requiredDocuments, (item, i) => {
                                  return openBlock(), createBlock(VListItem, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(item), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
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
            _push2(ssrRenderComponent(VContainer, {
              class: "text-caption",
              fluid: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "preview-header"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<b${_scopeId4}>Summary</b>`);
                            } else {
                              return [
                                createVNode("b", null, "Summary")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>${ssrInterpolate(__props.payload.summary)}</span>`);
                            } else {
                              return [
                                createVNode("span", null, toDisplayString(__props.payload.summary), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            class: "preview-header"
                          }, {
                            default: withCtx(() => [
                              createVNode("b", null, "Summary")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(__props.payload.summary), 1)
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
                          class: "preview-header"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<b${_scopeId4}>Detailed description</b>`);
                            } else {
                              return [
                                createVNode("b", null, "Detailed description")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, { cols: "12" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a;
                            if (_push5) {
                              _push5(`<span${_scopeId4}>${(_a = __props.payload.description) != null ? _a : ""}</span>`);
                            } else {
                              return [
                                createVNode("span", {
                                  innerHTML: __props.payload.description
                                }, null, 8, ["innerHTML"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            class: "preview-header"
                          }, {
                            default: withCtx(() => [
                              createVNode("b", null, "Detailed description")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("span", {
                                innerHTML: __props.payload.description
                              }, null, 8, ["innerHTML"])
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
                          class: "preview-header"
                        }, {
                          default: withCtx(() => [
                            createVNode("b", null, "Summary")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(__props.payload.summary), 1)
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
                            createVNode("b", null, "Detailed description")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode("span", {
                              innerHTML: __props.payload.description
                            }, null, 8, ["innerHTML"])
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
                class: "text-caption",
                fluid: ""
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        class: "preview-header"
                      }, {
                        default: withCtx(() => [
                          createVNode("b", null, "Job details")
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
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_AdminCoreImage, {
                                        image: __props.payload.banner,
                                        view: true,
                                        profile: false,
                                        editable: false
                                      }, null, 8, ["image"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Name"),
                                          createVNode("b", null, toDisplayString(__props.payload.jobName), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Type"),
                                          createVNode("b", null, toDisplayString(__props.payload.jobType), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Location"),
                                          createVNode("b", null, toDisplayString(__props.payload.location === "" ? "-" : __props.payload.location), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Experience"),
                                          createVNode("b", null, toDisplayString((_a = __props.payload.experience) != null ? _a : "-") + " Year(s)", 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Experience Level"),
                                          createVNode("b", null, toDisplayString(__props.payload.experienceLevel), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Applications limit"),
                                          createVNode("b", null, toDisplayString(__props.payload.applicationsLimit <= 0 ? "No limit" : __props.payload.applicationsLimit), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Deadline"),
                                          createVNode("b", null, toDisplayString(unref(dateFormat_Month)(__props.payload.deadline) || "No Deadline"), 1)
                                        ])
                                      ];
                                    }),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => {
                                      var _a2;
                                      var _a, _b, _c;
                                      return [
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Industry"),
                                          createVNode("b", null, toDisplayString(__props.payload.industry), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Category"),
                                          createVNode("b", null, toDisplayString(typeof __props.payload.category === "object" ? (_a = __props.payload.category) == null ? void 0 : _a.name : __props.payload.category), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Subcategory"),
                                          createVNode("b", null, toDisplayString((_a2 = __props.payload.subcategory) != null ? _a2 : (_b = __props.payload.category) == null ? void 0 : _b.subcategory), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Business"),
                                          createVNode("b", null, toDisplayString(typeof __props.payload.business === "object" ? (_c = __props.payload.business) == null ? void 0 : _c.businessName : __props.payload.business), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Currency"),
                                          createVNode("b", null, toDisplayString(__props.payload.currency), 1)
                                        ]),
                                        createVNode("div", { class: "d-flex ga-2 preview-row" }, [
                                          createVNode("span", null, "Salary range"),
                                          createVNode("b", null, toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[0])) + " - " + toDisplayString(unref(currencyFormat)(__props.payload.salaryRange[1])), 1),
                                          createVNode("span", {
                                            class: __props.payload.isConfidential ? "text-link" : "text-secondary"
                                          }, " [" + toDisplayString(__props.payload.isConfidential ? "hide" : "show") + " salary]", 3)
                                        ])
                                      ];
                                    }),
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
              }),
              createVNode(VContainer, {
                class: "text-caption",
                fluid: ""
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        class: "preview-header"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(VBadge, {
                              content: (_a = __props.payload.skills) == null ? void 0 : _a.length,
                              inline: "",
                              color: "link",
                              location: "end"
                            }, {
                              default: withCtx(() => [
                                createVNode("b", { class: "mr-5" }, "Skills")
                              ]),
                              _: 1
                            }, 8, ["content"])
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VList, {
                            class: "mt-1 bg-transparent pa-0",
                            density: "compact",
                            lines: "false"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.skills, (item, i) => {
                                return openBlock(), createBlock(VListItem, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-chevron-right",
                                      start: ""
                                    }),
                                    createVNode("span", null, toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
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
              createVNode(VContainer, {
                class: "text-caption",
                fluid: ""
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        class: "preview-header"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(VBadge, {
                              content: (_a = __props.payload.requirements) == null ? void 0 : _a.length,
                              inline: "",
                              color: "link",
                              location: "end"
                            }, {
                              default: withCtx(() => [
                                createVNode("b", { class: "mr-5" }, "Requirements")
                              ]),
                              _: 1
                            }, 8, ["content"])
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VList, {
                            class: "mt-1 bg-transparent pa-0",
                            density: "compact",
                            lines: "false"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requirements, (item, i) => {
                                return openBlock(), createBlock(VListItem, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-chevron-right",
                                      start: ""
                                    }),
                                    createVNode("span", null, toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
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
              createVNode(VContainer, {
                class: "text-caption",
                fluid: ""
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        class: "preview-header"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(VBadge, {
                              content: (_a = __props.payload.responsibilities) == null ? void 0 : _a.length,
                              inline: "",
                              color: "link",
                              location: "end"
                            }, {
                              default: withCtx(() => [
                                createVNode("b", { class: "mr-5" }, "Responsibilities")
                              ]),
                              _: 1
                            }, 8, ["content"])
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VList, {
                            class: "mt-1 bg-transparent pa-0",
                            density: "compact",
                            lines: "false"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.responsibilities, (item, i) => {
                                return openBlock(), createBlock(VListItem, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-chevron-right",
                                      start: ""
                                    }),
                                    createVNode("span", null, toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
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
              createVNode(VContainer, {
                class: "text-caption",
                fluid: ""
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        class: "preview-header"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(VBadge, {
                              content: (_a = __props.payload.requiredDocuments) == null ? void 0 : _a.length,
                              inline: "",
                              color: "link",
                              location: "end"
                            }, {
                              default: withCtx(() => [
                                createVNode("b", { class: "mr-5" }, "Documents")
                              ]),
                              _: 1
                            }, 8, ["content"])
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode(VList, {
                            class: "mt-1 bg-transparent pa-0",
                            density: "compact",
                            lines: "false"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requiredDocuments, (item, i) => {
                                return openBlock(), createBlock(VListItem, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-chevron-right",
                                      start: ""
                                    }),
                                    createVNode("span", null, toDisplayString(item), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
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
              createVNode(VContainer, {
                class: "text-caption",
                fluid: ""
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        class: "preview-header"
                      }, {
                        default: withCtx(() => [
                          createVNode("b", null, "Summary")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(__props.payload.summary), 1)
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
                          createVNode("b", null, "Detailed description")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, { cols: "12" }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            innerHTML: __props.payload.description
                          }, null, 8, ["innerHTML"])
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/job/preview.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "location",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    disabled: {
      type: Boolean,
      default: false
    },
    isRequired: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: "Location"
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["setLocation"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const { required } = useRules();
    const location = useModel(__props, "modelValue");
    ref([]);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VTextField, {
        label: __props.label,
        modelValue: location.value,
        "onUpdate:modelValue": ($event) => location.value = $event,
        disabled: __props.disabled,
        rules: __props.isRequired ? unref(required)() : [],
        id: "selectLocation"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/location.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2$1 = _sfc_main$5;
const makeVSwitchProps = propsFactory({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: false
  },
  ...makeVInputProps(),
  ...makeVSelectionControlProps()
}, "VSwitch");
const VSwitch = genericComponent()({
  name: "VSwitch",
  inheritAttrs: false,
  props: makeVSwitchProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:indeterminate": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    const {
      loaderClasses
    } = useLoader(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const control = ref();
    const loaderColor = computed(() => {
      return typeof props.loading === "string" && props.loading !== "" ? props.loading : props.color;
    });
    const uid = getUid();
    const id = computed(() => props.id || `switch-${uid}`);
    function onChange() {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    function onTrackClick(e) {
      var _a, _b;
      e.stopPropagation();
      e.preventDefault();
      (_b = (_a = control.value) == null ? void 0 : _a.input) == null ? void 0 : _b.click();
    }
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      return createVNode(VInput, mergeProps({
        "class": ["v-switch", {
          "v-switch--inset": props.inset
        }, {
          "v-switch--indeterminate": indeterminate.value
        }, loaderClasses.value, props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id: id2,
            messagesId,
            isDisabled,
            isReadonly,
            isValid
          } = _ref2;
          const slotProps = {
            model,
            isValid
          };
          return createVNode(VSelectionControl, mergeProps({
            "ref": control
          }, controlProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": [($event) => model.value = $event, onChange],
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "type": "checkbox",
            "aria-checked": indeterminate.value ? "mixed" : void 0,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "onFocus": focus,
            "onBlur": blur
          }, controlAttrs), {
            ...slots,
            default: (_ref3) => {
              let {
                backgroundColorClasses,
                backgroundColorStyles
              } = _ref3;
              return createVNode("div", {
                "class": ["v-switch__track", ...backgroundColorClasses.value],
                "style": backgroundColorStyles.value,
                "onClick": onTrackClick
              }, [slots["track-true"] && createVNode("div", {
                "key": "prepend",
                "class": "v-switch__track-true"
              }, [slots["track-true"](slotProps)]), slots["track-false"] && createVNode("div", {
                "key": "append",
                "class": "v-switch__track-false"
              }, [slots["track-false"](slotProps)])]);
            },
            input: (_ref4) => {
              let {
                inputNode,
                icon,
                backgroundColorClasses,
                backgroundColorStyles
              } = _ref4;
              return createVNode(Fragment, null, [inputNode, createVNode("div", {
                "class": ["v-switch__thumb", {
                  "v-switch__thumb--filled": icon || props.loading
                }, props.inset ? void 0 : backgroundColorClasses.value],
                "style": props.inset ? void 0 : backgroundColorStyles.value
              }, [slots.thumb ? createVNode(VDefaultsProvider, {
                "defaults": {
                  VIcon: {
                    icon,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [slots.thumb({
                  ...slotProps,
                  icon
                })]
              }) : createVNode(VScaleTransition, null, {
                default: () => [!props.loading ? icon && createVNode(VIcon, {
                  "key": String(icon),
                  "icon": icon,
                  "size": "x-small"
                }, null) : createVNode(LoaderSlot, {
                  "name": "v-switch",
                  "active": true,
                  "color": isValid.value === false ? void 0 : loaderColor.value
                }, {
                  default: (slotProps2) => slots.loader ? slots.loader(slotProps2) : createVNode(VProgressCircular, {
                    "active": slotProps2.isActive,
                    "color": slotProps2.color,
                    "indeterminate": true,
                    "size": "16",
                    "width": "2"
                  }, null)
                })]
              })])]);
            }
          });
        }
      });
    });
    return {};
  }
});
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
    const { digitsOnly, dateFormat_short } = useHelpers();
    const appStore = useAppStore();
    const { currentUser } = storeToRefs(appStore);
    const { getBusinesses } = useBusinessStore();
    const businesses = ref([]);
    const businessesList = computed(() => {
      return businesses.value.map((c) => c.businessName);
    });
    const setBusiness = (val) => {
      var _a;
      props.payload.business = val;
      props.payload.businessId = (_a = businesses.value.find(
        (item) => item.businessName === val
      )) == null ? void 0 : _a.code;
    };
    const { getIndustries } = useIndustriestore();
    const industries = ref([]);
    const industriesList = computed(() => {
      return industries.value.map((c) => c.industry);
    });
    const setIndustry = (val) => {
      var _a;
      props.payload.industry = val;
      props.payload.industryId = (_a = industries.value.find(
        (item) => item.industry === val
      )) == null ? void 0 : _a.id;
    };
    const { getJobTypes } = useJobTypeStore();
    const jobTypes = ref([]);
    const jobTypesList = computed(() => {
      return jobTypes.value.map((b) => b.job_type);
    });
    const setJobType = (val) => {
      var _a;
      props.payload.jobType = val;
      props.payload.jobtypeId = (_a = jobTypes.value.find((b) => b.job_type == val)) == null ? void 0 : _a.id;
      if (props.payload.jobType === "REMOTE")
        props.payload.location = "";
    };
    const { getCategoriesByType } = useCategoryStore();
    const { getSubcategories } = useSubcategoryStore();
    const categories = ref([]);
    const subcategories = ref([]);
    const loadData = ref(false);
    const getData = async () => {
      loadData.value = true;
      let [cat, subcat, types, bus, ind] = await Promise.all([
        getCategoriesByType(false, "JOB"),
        getSubcategories(false),
        getJobTypes(false),
        getBusinesses(false),
        getIndustries(false)
      ]);
      categories.value = cat;
      subcategories.value = subcat;
      jobTypes.value = types;
      businesses.value = bus.filter(
        (i) => currentUser.value.accessLevel === 3 ? i.userId === currentUser.value.userId : i
      );
      industries.value = ind;
      loadData.value = false;
    };
    watchEffect(() => {
      getData();
    });
    const categoriesList = computed(() => {
      return categories.value.map((c) => c.category);
    });
    const subcategoriesList = computed(() => {
      return subcategories.value.filter((sub) => sub.categoryId === catId.value).map((sub) => sub.subcategory);
    });
    const catId = ref(0);
    const setCategory = (val) => {
      var _a;
      props.payload.category = val;
      props.payload.subcategory = "";
      catId.value = (_a = categories.value.find((cat) => cat.category === val)) == null ? void 0 : _a.id;
    };
    const setSubcategory = (val) => {
      var _a;
      props.payload.subcategory = val;
      props.payload.subcategoryId = (_a = subcategories.value.find(
        (sub) => sub.subcategory === val
      )) == null ? void 0 : _a.id;
    };
    const minDate = /* @__PURE__ */ new Date();
    const datePicker = ref(false);
    const selectedDate = computed({
      get() {
        return dateFormat_short(props.payload.deadline);
      },
      set(val) {
        props.payload.deadline = val;
      }
    });
    const setDate = (val) => {
      props.payload.deadline = val.date;
      datePicker.value = !val.close;
    };
    const setImage = (val) => {
      props.payload.banner = val;
    };
    const setExperienceLevel = (val) => {
      props.payload.experienceLevel = val;
    };
    const setCurrency = (val) => {
      props.payload.currency = val;
    };
    const controlMaxSalary = (evt) => {
      let min = props.payload.salaryRange[0];
      let max = evt.target.value;
      setTimeout(() => {
        props.payload.salaryRange[1] = max <= min ? Number(min) + 1 : Number(max);
      }, 2e3);
    };
    watch(
      () => props.trigger,
      () => {
        moveNext();
      }
    );
    const formData = ref(null);
    const moveNext = async () => {
      let tab = 0;
      const { valid } = await formData.value.validate();
      if (valid)
        if (props.payload.banner)
          tab = 1;
        else
          appStore.toggleSnackbar({
            status: true,
            message: "Banner is required",
            type: "warning"
          });
      emits("step", tab);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreImage = __nuxt_component_0$1;
      const _component_AdminCoreSelect = __nuxt_component_1$1;
      const _component_Location = __nuxt_component_2$1;
      const _component_AdminCoreCalendarDate = __nuxt_component_0$4;
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "pa-0",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "3",
                    class: "text-caption"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mx-auto d-flex flex-column align-center"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_AdminCoreImage, {
                          onSetImage: setImage,
                          image: __props.payload.banner,
                          profile: false
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mx-auto d-flex flex-column align-center" }, [
                            createVNode(_component_AdminCoreImage, {
                              onSetImage: setImage,
                              image: __props.payload.banner,
                              profile: false
                            }, null, 8, ["image"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "9"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "formData",
                          ref: formData
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VContainer, {
                                class: "pa-0",
                                fluid: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Name",
                                                  modelValue: __props.payload.jobName,
                                                  "onUpdate:modelValue": ($event) => __props.payload.jobName = $event,
                                                  rules: unref(name)()
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Name",
                                                    modelValue: __props.payload.jobName,
                                                    "onUpdate:modelValue": ($event) => __props.payload.jobName = $event,
                                                    rules: unref(name)()
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Type",
                                                  modelValue: __props.payload.jobType,
                                                  "onUpdate:modelValue": ($event) => __props.payload.jobType = $event,
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  loading: unref(loadData),
                                                  id: "selectType"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#selectType",
                                                  list: unref(jobTypesList),
                                                  listValue: __props.payload.jobType,
                                                  onSetItem: setJobType
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Type",
                                                    modelValue: __props.payload.jobType,
                                                    "onUpdate:modelValue": ($event) => __props.payload.jobType = $event,
                                                    "append-inner-icon": "mdi-chevron-down",
                                                    rules: unref(required)(),
                                                    readonly: "",
                                                    loading: unref(loadData),
                                                    id: "selectType"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#selectType",
                                                    list: unref(jobTypesList),
                                                    listValue: __props.payload.jobType,
                                                    onSetItem: setJobType
                                                  }, null, 8, ["list", "listValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_Location, {
                                                  disabled: __props.payload.jobType === "REMOTE",
                                                  modelValue: __props.payload.location,
                                                  "onUpdate:modelValue": ($event) => __props.payload.location = $event,
                                                  "is-required": __props.payload.jobType !== "REMOTE"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_Location, {
                                                    disabled: __props.payload.jobType === "REMOTE",
                                                    modelValue: __props.payload.location,
                                                    "onUpdate:modelValue": ($event) => __props.payload.location = $event,
                                                    "is-required": __props.payload.jobType !== "REMOTE"
                                                  }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "is-required"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex ga-2"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Experience",
                                                  modelValue: __props.payload.experience,
                                                  "onUpdate:modelValue": ($event) => __props.payload.experience = $event,
                                                  onKeypress: unref(digitsOnly),
                                                  suffix: "Year(s)"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Experience Level",
                                                  modelValue: __props.payload.experienceLevel,
                                                  "onUpdate:modelValue": ($event) => __props.payload.experienceLevel = $event,
                                                  readonly: "",
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  id: "selectLevel"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#selectLevel",
                                                  list: [
                                                    "ANY",
                                                    "INTERNSHIP & GRADUATE",
                                                    "ENTRY LEVEL",
                                                    "SENIOR LEVEL",
                                                    "EXECUTIVE LEVEL"
                                                  ],
                                                  listValue: __props.payload.experienceLevel,
                                                  onSetItem: setExperienceLevel
                                                }, null, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex ga-2" }, [
                                                    createVNode(VTextField, {
                                                      label: "Experience",
                                                      modelValue: __props.payload.experience,
                                                      "onUpdate:modelValue": ($event) => __props.payload.experience = $event,
                                                      onKeypress: unref(digitsOnly),
                                                      suffix: "Year(s)"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"]),
                                                    createVNode(VTextField, {
                                                      label: "Experience Level",
                                                      modelValue: __props.payload.experienceLevel,
                                                      "onUpdate:modelValue": ($event) => __props.payload.experienceLevel = $event,
                                                      readonly: "",
                                                      "append-inner-icon": "mdi-chevron-down",
                                                      id: "selectLevel"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                    createVNode(_component_AdminCoreSelect, {
                                                      activator: "#selectLevel",
                                                      list: [
                                                        "ANY",
                                                        "INTERNSHIP & GRADUATE",
                                                        "ENTRY LEVEL",
                                                        "SENIOR LEVEL",
                                                        "EXECUTIVE LEVEL"
                                                      ],
                                                      listValue: __props.payload.experienceLevel,
                                                      onSetItem: setExperienceLevel
                                                    }, null, 8, ["listValue"])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Currency",
                                                  modelValue: __props.payload.currency,
                                                  "onUpdate:modelValue": ($event) => __props.payload.currency = $event,
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  loading: unref(loadData),
                                                  id: "selectCurrency"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#selectCurrency",
                                                  list: ["USD", "FC"],
                                                  listValue: __props.payload.currency,
                                                  onSetItem: setCurrency
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Currency",
                                                    modelValue: __props.payload.currency,
                                                    "onUpdate:modelValue": ($event) => __props.payload.currency = $event,
                                                    "append-inner-icon": "mdi-chevron-down",
                                                    rules: unref(required)(),
                                                    readonly: "",
                                                    loading: unref(loadData),
                                                    id: "selectCurrency"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#selectCurrency",
                                                    list: ["USD", "FC"],
                                                    listValue: __props.payload.currency,
                                                    onSetItem: setCurrency
                                                  }, null, 8, ["listValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex ga-4"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Min Salary",
                                                  modelValue: __props.payload.salaryRange[0],
                                                  "onUpdate:modelValue": ($event) => __props.payload.salaryRange[0] = $event,
                                                  modelModifiers: { number: true },
                                                  onKeypress: unref(digitsOnly),
                                                  prefix: __props.payload.currency
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Max Salary",
                                                  modelValue: __props.payload.salaryRange[1],
                                                  "onUpdate:modelValue": ($event) => __props.payload.salaryRange[1] = $event,
                                                  modelModifiers: { number: true },
                                                  onKeypress: unref(digitsOnly),
                                                  onInput: controlMaxSalary,
                                                  prefix: __props.payload.currency
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VSwitch, {
                                                  modelValue: __props.payload.isConfidential,
                                                  "onUpdate:modelValue": ($event) => __props.payload.isConfidential = $event,
                                                  color: "link",
                                                  density: "compact",
                                                  label: "salary confidential",
                                                  class: "text-caption"
                                                }, null, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex ga-4" }, [
                                                    createVNode(VTextField, {
                                                      label: "Min Salary",
                                                      modelValue: __props.payload.salaryRange[0],
                                                      "onUpdate:modelValue": ($event) => __props.payload.salaryRange[0] = $event,
                                                      modelModifiers: { number: true },
                                                      onKeypress: unref(digitsOnly),
                                                      prefix: __props.payload.currency
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                                    createVNode(VTextField, {
                                                      label: "Max Salary",
                                                      modelValue: __props.payload.salaryRange[1],
                                                      "onUpdate:modelValue": ($event) => __props.payload.salaryRange[1] = $event,
                                                      modelModifiers: { number: true },
                                                      onKeypress: unref(digitsOnly),
                                                      onInput: controlMaxSalary,
                                                      prefix: __props.payload.currency
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                                    createVNode(VSwitch, {
                                                      modelValue: __props.payload.isConfidential,
                                                      "onUpdate:modelValue": ($event) => __props.payload.isConfidential = $event,
                                                      color: "link",
                                                      density: "compact",
                                                      label: "salary confidential",
                                                      class: "text-caption"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Applications limit",
                                                  modelValue: __props.payload.applicationsLimit,
                                                  "onUpdate:modelValue": ($event) => __props.payload.applicationsLimit = $event,
                                                  onKeypress: unref(digitsOnly)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Applications limit",
                                                    modelValue: __props.payload.applicationsLimit,
                                                    "onUpdate:modelValue": ($event) => __props.payload.applicationsLimit = $event,
                                                    onKeypress: unref(digitsOnly)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Deadline",
                                                  modelValue: unref(selectedDate),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  onClick: ($event) => datePicker.value = true
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Deadline",
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
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Category",
                                                  modelValue: __props.payload.category,
                                                  "onUpdate:modelValue": ($event) => __props.payload.category = $event,
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  loading: unref(loadData),
                                                  id: "selectCategory"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#selectCategory",
                                                  list: unref(categoriesList),
                                                  listValue: __props.payload.category,
                                                  onSetItem: setCategory
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Category",
                                                    modelValue: __props.payload.category,
                                                    "onUpdate:modelValue": ($event) => __props.payload.category = $event,
                                                    "append-inner-icon": "mdi-chevron-down",
                                                    rules: unref(required)(),
                                                    readonly: "",
                                                    loading: unref(loadData),
                                                    id: "selectCategory"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#selectCategory",
                                                    list: unref(categoriesList),
                                                    listValue: __props.payload.category,
                                                    onSetItem: setCategory
                                                  }, null, 8, ["list", "listValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Subcategory",
                                                  modelValue: __props.payload.subcategory,
                                                  "onUpdate:modelValue": ($event) => __props.payload.subcategory = $event,
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  loading: unref(loadData),
                                                  id: "selectSubcategory",
                                                  disabled: __props.payload.category === ""
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#selectSubcategory",
                                                  list: unref(subcategoriesList),
                                                  listValue: __props.payload.subcategory,
                                                  onSetItem: setSubcategory
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Subcategory",
                                                    modelValue: __props.payload.subcategory,
                                                    "onUpdate:modelValue": ($event) => __props.payload.subcategory = $event,
                                                    "append-inner-icon": "mdi-chevron-down",
                                                    rules: unref(required)(),
                                                    readonly: "",
                                                    loading: unref(loadData),
                                                    id: "selectSubcategory",
                                                    disabled: __props.payload.category === ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading", "disabled"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#selectSubcategory",
                                                    list: unref(subcategoriesList),
                                                    listValue: __props.payload.subcategory,
                                                    onSetItem: setSubcategory
                                                  }, null, 8, ["list", "listValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Industry",
                                                  modelValue: __props.payload.industry,
                                                  "onUpdate:modelValue": ($event) => __props.payload.industry = $event,
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  loading: unref(loadData),
                                                  id: "setIndustry"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#setIndustry",
                                                  list: unref(industriesList),
                                                  listValue: __props.payload.industry,
                                                  onSetItem: setIndustry
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Industry",
                                                    modelValue: __props.payload.industry,
                                                    "onUpdate:modelValue": ($event) => __props.payload.industry = $event,
                                                    "append-inner-icon": "mdi-chevron-down",
                                                    rules: unref(required)(),
                                                    readonly: "",
                                                    loading: unref(loadData),
                                                    id: "setIndustry"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#setIndustry",
                                                    list: unref(industriesList),
                                                    listValue: __props.payload.industry,
                                                    onSetItem: setIndustry
                                                  }, null, 8, ["list", "listValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Business",
                                                  modelValue: __props.payload.business,
                                                  "onUpdate:modelValue": ($event) => __props.payload.business = $event,
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  loading: unref(loadData),
                                                  id: "setBusiness"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#setBusiness",
                                                  list: unref(businessesList),
                                                  listValue: __props.payload.business,
                                                  onSetItem: setBusiness
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Business",
                                                    modelValue: __props.payload.business,
                                                    "onUpdate:modelValue": ($event) => __props.payload.business = $event,
                                                    "append-inner-icon": "mdi-chevron-down",
                                                    rules: unref(required)(),
                                                    readonly: "",
                                                    loading: unref(loadData),
                                                    id: "setBusiness"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#setBusiness",
                                                    list: unref(businessesList),
                                                    listValue: __props.payload.business,
                                                    onSetItem: setBusiness
                                                  }, null, 8, ["list", "listValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "py-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Name",
                                                  modelValue: __props.payload.jobName,
                                                  "onUpdate:modelValue": ($event) => __props.payload.jobName = $event,
                                                  rules: unref(name)()
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "py-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Type",
                                                  modelValue: __props.payload.jobType,
                                                  "onUpdate:modelValue": ($event) => __props.payload.jobType = $event,
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  loading: unref(loadData),
                                                  id: "selectType"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#selectType",
                                                  list: unref(jobTypesList),
                                                  listValue: __props.payload.jobType,
                                                  onSetItem: setJobType
                                                }, null, 8, ["list", "listValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "py-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Location, {
                                                  disabled: __props.payload.jobType === "REMOTE",
                                                  modelValue: __props.payload.location,
                                                  "onUpdate:modelValue": ($event) => __props.payload.location = $event,
                                                  "is-required": __props.payload.jobType !== "REMOTE"
                                                }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "is-required"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "py-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex ga-2" }, [
                                                  createVNode(VTextField, {
                                                    label: "Experience",
                                                    modelValue: __props.payload.experience,
                                                    "onUpdate:modelValue": ($event) => __props.payload.experience = $event,
                                                    onKeypress: unref(digitsOnly),
                                                    suffix: "Year(s)"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"]),
                                                  createVNode(VTextField, {
                                                    label: "Experience Level",
                                                    modelValue: __props.payload.experienceLevel,
                                                    "onUpdate:modelValue": ($event) => __props.payload.experienceLevel = $event,
                                                    readonly: "",
                                                    "append-inner-icon": "mdi-chevron-down",
                                                    id: "selectLevel"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#selectLevel",
                                                    list: [
                                                      "ANY",
                                                      "INTERNSHIP & GRADUATE",
                                                      "ENTRY LEVEL",
                                                      "SENIOR LEVEL",
                                                      "EXECUTIVE LEVEL"
                                                    ],
                                                    listValue: __props.payload.experienceLevel,
                                                    onSetItem: setExperienceLevel
                                                  }, null, 8, ["listValue"])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "py-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Currency",
                                                  modelValue: __props.payload.currency,
                                                  "onUpdate:modelValue": ($event) => __props.payload.currency = $event,
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  loading: unref(loadData),
                                                  id: "selectCurrency"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#selectCurrency",
                                                  list: ["USD", "FC"],
                                                  listValue: __props.payload.currency,
                                                  onSetItem: setCurrency
                                                }, null, 8, ["listValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "py-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex ga-4" }, [
                                                  createVNode(VTextField, {
                                                    label: "Min Salary",
                                                    modelValue: __props.payload.salaryRange[0],
                                                    "onUpdate:modelValue": ($event) => __props.payload.salaryRange[0] = $event,
                                                    modelModifiers: { number: true },
                                                    onKeypress: unref(digitsOnly),
                                                    prefix: __props.payload.currency
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                                  createVNode(VTextField, {
                                                    label: "Max Salary",
                                                    modelValue: __props.payload.salaryRange[1],
                                                    "onUpdate:modelValue": ($event) => __props.payload.salaryRange[1] = $event,
                                                    modelModifiers: { number: true },
                                                    onKeypress: unref(digitsOnly),
                                                    onInput: controlMaxSalary,
                                                    prefix: __props.payload.currency
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                                  createVNode(VSwitch, {
                                                    modelValue: __props.payload.isConfidential,
                                                    "onUpdate:modelValue": ($event) => __props.payload.isConfidential = $event,
                                                    color: "link",
                                                    density: "compact",
                                                    label: "salary confidential",
                                                    class: "text-caption"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "py-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Applications limit",
                                                  modelValue: __props.payload.applicationsLimit,
                                                  "onUpdate:modelValue": ($event) => __props.payload.applicationsLimit = $event,
                                                  onKeypress: unref(digitsOnly)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "py-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Deadline",
                                                  modelValue: unref(selectedDate),
                                                  "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  onClick: ($event) => datePicker.value = true
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "py-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Category",
                                                  modelValue: __props.payload.category,
                                                  "onUpdate:modelValue": ($event) => __props.payload.category = $event,
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  loading: unref(loadData),
                                                  id: "selectCategory"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#selectCategory",
                                                  list: unref(categoriesList),
                                                  listValue: __props.payload.category,
                                                  onSetItem: setCategory
                                                }, null, 8, ["list", "listValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "py-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Subcategory",
                                                  modelValue: __props.payload.subcategory,
                                                  "onUpdate:modelValue": ($event) => __props.payload.subcategory = $event,
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  loading: unref(loadData),
                                                  id: "selectSubcategory",
                                                  disabled: __props.payload.category === ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading", "disabled"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#selectSubcategory",
                                                  list: unref(subcategoriesList),
                                                  listValue: __props.payload.subcategory,
                                                  onSetItem: setSubcategory
                                                }, null, 8, ["list", "listValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "py-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Industry",
                                                  modelValue: __props.payload.industry,
                                                  "onUpdate:modelValue": ($event) => __props.payload.industry = $event,
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  loading: unref(loadData),
                                                  id: "setIndustry"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#setIndustry",
                                                  list: unref(industriesList),
                                                  listValue: __props.payload.industry,
                                                  onSetItem: setIndustry
                                                }, null, 8, ["list", "listValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6",
                                              class: "py-1"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Business",
                                                  modelValue: __props.payload.business,
                                                  "onUpdate:modelValue": ($event) => __props.payload.business = $event,
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  rules: unref(required)(),
                                                  readonly: "",
                                                  loading: unref(loadData),
                                                  id: "setBusiness"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#setBusiness",
                                                  list: unref(businessesList),
                                                  listValue: __props.payload.business,
                                                  onSetItem: setBusiness
                                                }, null, 8, ["list", "listValue"])
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
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Name",
                                                modelValue: __props.payload.jobName,
                                                "onUpdate:modelValue": ($event) => __props.payload.jobName = $event,
                                                rules: unref(name)()
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Type",
                                                modelValue: __props.payload.jobType,
                                                "onUpdate:modelValue": ($event) => __props.payload.jobType = $event,
                                                "append-inner-icon": "mdi-chevron-down",
                                                rules: unref(required)(),
                                                readonly: "",
                                                loading: unref(loadData),
                                                id: "selectType"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#selectType",
                                                list: unref(jobTypesList),
                                                listValue: __props.payload.jobType,
                                                onSetItem: setJobType
                                              }, null, 8, ["list", "listValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Location, {
                                                disabled: __props.payload.jobType === "REMOTE",
                                                modelValue: __props.payload.location,
                                                "onUpdate:modelValue": ($event) => __props.payload.location = $event,
                                                "is-required": __props.payload.jobType !== "REMOTE"
                                              }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "is-required"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex ga-2" }, [
                                                createVNode(VTextField, {
                                                  label: "Experience",
                                                  modelValue: __props.payload.experience,
                                                  "onUpdate:modelValue": ($event) => __props.payload.experience = $event,
                                                  onKeypress: unref(digitsOnly),
                                                  suffix: "Year(s)"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"]),
                                                createVNode(VTextField, {
                                                  label: "Experience Level",
                                                  modelValue: __props.payload.experienceLevel,
                                                  "onUpdate:modelValue": ($event) => __props.payload.experienceLevel = $event,
                                                  readonly: "",
                                                  "append-inner-icon": "mdi-chevron-down",
                                                  id: "selectLevel"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#selectLevel",
                                                  list: [
                                                    "ANY",
                                                    "INTERNSHIP & GRADUATE",
                                                    "ENTRY LEVEL",
                                                    "SENIOR LEVEL",
                                                    "EXECUTIVE LEVEL"
                                                  ],
                                                  listValue: __props.payload.experienceLevel,
                                                  onSetItem: setExperienceLevel
                                                }, null, 8, ["listValue"])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Currency",
                                                modelValue: __props.payload.currency,
                                                "onUpdate:modelValue": ($event) => __props.payload.currency = $event,
                                                "append-inner-icon": "mdi-chevron-down",
                                                rules: unref(required)(),
                                                readonly: "",
                                                loading: unref(loadData),
                                                id: "selectCurrency"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#selectCurrency",
                                                list: ["USD", "FC"],
                                                listValue: __props.payload.currency,
                                                onSetItem: setCurrency
                                              }, null, 8, ["listValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex ga-4" }, [
                                                createVNode(VTextField, {
                                                  label: "Min Salary",
                                                  modelValue: __props.payload.salaryRange[0],
                                                  "onUpdate:modelValue": ($event) => __props.payload.salaryRange[0] = $event,
                                                  modelModifiers: { number: true },
                                                  onKeypress: unref(digitsOnly),
                                                  prefix: __props.payload.currency
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                                createVNode(VTextField, {
                                                  label: "Max Salary",
                                                  modelValue: __props.payload.salaryRange[1],
                                                  "onUpdate:modelValue": ($event) => __props.payload.salaryRange[1] = $event,
                                                  modelModifiers: { number: true },
                                                  onKeypress: unref(digitsOnly),
                                                  onInput: controlMaxSalary,
                                                  prefix: __props.payload.currency
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                                createVNode(VSwitch, {
                                                  modelValue: __props.payload.isConfidential,
                                                  "onUpdate:modelValue": ($event) => __props.payload.isConfidential = $event,
                                                  color: "link",
                                                  density: "compact",
                                                  label: "salary confidential",
                                                  class: "text-caption"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Applications limit",
                                                modelValue: __props.payload.applicationsLimit,
                                                "onUpdate:modelValue": ($event) => __props.payload.applicationsLimit = $event,
                                                onKeypress: unref(digitsOnly)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Deadline",
                                                modelValue: unref(selectedDate),
                                                "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                                rules: unref(required)(),
                                                readonly: "",
                                                onClick: ($event) => datePicker.value = true
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Category",
                                                modelValue: __props.payload.category,
                                                "onUpdate:modelValue": ($event) => __props.payload.category = $event,
                                                "append-inner-icon": "mdi-chevron-down",
                                                rules: unref(required)(),
                                                readonly: "",
                                                loading: unref(loadData),
                                                id: "selectCategory"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#selectCategory",
                                                list: unref(categoriesList),
                                                listValue: __props.payload.category,
                                                onSetItem: setCategory
                                              }, null, 8, ["list", "listValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Subcategory",
                                                modelValue: __props.payload.subcategory,
                                                "onUpdate:modelValue": ($event) => __props.payload.subcategory = $event,
                                                "append-inner-icon": "mdi-chevron-down",
                                                rules: unref(required)(),
                                                readonly: "",
                                                loading: unref(loadData),
                                                id: "selectSubcategory",
                                                disabled: __props.payload.category === ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading", "disabled"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#selectSubcategory",
                                                list: unref(subcategoriesList),
                                                listValue: __props.payload.subcategory,
                                                onSetItem: setSubcategory
                                              }, null, 8, ["list", "listValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Industry",
                                                modelValue: __props.payload.industry,
                                                "onUpdate:modelValue": ($event) => __props.payload.industry = $event,
                                                "append-inner-icon": "mdi-chevron-down",
                                                rules: unref(required)(),
                                                readonly: "",
                                                loading: unref(loadData),
                                                id: "setIndustry"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#setIndustry",
                                                list: unref(industriesList),
                                                listValue: __props.payload.industry,
                                                onSetItem: setIndustry
                                              }, null, 8, ["list", "listValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6",
                                            class: "py-1"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Business",
                                                modelValue: __props.payload.business,
                                                "onUpdate:modelValue": ($event) => __props.payload.business = $event,
                                                "append-inner-icon": "mdi-chevron-down",
                                                rules: unref(required)(),
                                                readonly: "",
                                                loading: unref(loadData),
                                                id: "setBusiness"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#setBusiness",
                                                list: unref(businessesList),
                                                listValue: __props.payload.business,
                                                onSetItem: setBusiness
                                              }, null, 8, ["list", "listValue"])
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
                              _push5(ssrRenderComponent(_component_AdminCoreCalendarDate, {
                                datePicker: unref(datePicker),
                                date: __props.payload.deadline,
                                min: unref(minDate),
                                onSetDate: setDate,
                                onClose: ($event) => datePicker.value = false
                              }, null, _parent5, _scopeId4));
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
                                          sm: "6",
                                          class: "py-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Name",
                                              modelValue: __props.payload.jobName,
                                              "onUpdate:modelValue": ($event) => __props.payload.jobName = $event,
                                              rules: unref(name)()
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "py-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Type",
                                              modelValue: __props.payload.jobType,
                                              "onUpdate:modelValue": ($event) => __props.payload.jobType = $event,
                                              "append-inner-icon": "mdi-chevron-down",
                                              rules: unref(required)(),
                                              readonly: "",
                                              loading: unref(loadData),
                                              id: "selectType"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#selectType",
                                              list: unref(jobTypesList),
                                              listValue: __props.payload.jobType,
                                              onSetItem: setJobType
                                            }, null, 8, ["list", "listValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "py-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Location, {
                                              disabled: __props.payload.jobType === "REMOTE",
                                              modelValue: __props.payload.location,
                                              "onUpdate:modelValue": ($event) => __props.payload.location = $event,
                                              "is-required": __props.payload.jobType !== "REMOTE"
                                            }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "is-required"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "py-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex ga-2" }, [
                                              createVNode(VTextField, {
                                                label: "Experience",
                                                modelValue: __props.payload.experience,
                                                "onUpdate:modelValue": ($event) => __props.payload.experience = $event,
                                                onKeypress: unref(digitsOnly),
                                                suffix: "Year(s)"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"]),
                                              createVNode(VTextField, {
                                                label: "Experience Level",
                                                modelValue: __props.payload.experienceLevel,
                                                "onUpdate:modelValue": ($event) => __props.payload.experienceLevel = $event,
                                                readonly: "",
                                                "append-inner-icon": "mdi-chevron-down",
                                                id: "selectLevel"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#selectLevel",
                                                list: [
                                                  "ANY",
                                                  "INTERNSHIP & GRADUATE",
                                                  "ENTRY LEVEL",
                                                  "SENIOR LEVEL",
                                                  "EXECUTIVE LEVEL"
                                                ],
                                                listValue: __props.payload.experienceLevel,
                                                onSetItem: setExperienceLevel
                                              }, null, 8, ["listValue"])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "py-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Currency",
                                              modelValue: __props.payload.currency,
                                              "onUpdate:modelValue": ($event) => __props.payload.currency = $event,
                                              "append-inner-icon": "mdi-chevron-down",
                                              rules: unref(required)(),
                                              readonly: "",
                                              loading: unref(loadData),
                                              id: "selectCurrency"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#selectCurrency",
                                              list: ["USD", "FC"],
                                              listValue: __props.payload.currency,
                                              onSetItem: setCurrency
                                            }, null, 8, ["listValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "py-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex ga-4" }, [
                                              createVNode(VTextField, {
                                                label: "Min Salary",
                                                modelValue: __props.payload.salaryRange[0],
                                                "onUpdate:modelValue": ($event) => __props.payload.salaryRange[0] = $event,
                                                modelModifiers: { number: true },
                                                onKeypress: unref(digitsOnly),
                                                prefix: __props.payload.currency
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                              createVNode(VTextField, {
                                                label: "Max Salary",
                                                modelValue: __props.payload.salaryRange[1],
                                                "onUpdate:modelValue": ($event) => __props.payload.salaryRange[1] = $event,
                                                modelModifiers: { number: true },
                                                onKeypress: unref(digitsOnly),
                                                onInput: controlMaxSalary,
                                                prefix: __props.payload.currency
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                              createVNode(VSwitch, {
                                                modelValue: __props.payload.isConfidential,
                                                "onUpdate:modelValue": ($event) => __props.payload.isConfidential = $event,
                                                color: "link",
                                                density: "compact",
                                                label: "salary confidential",
                                                class: "text-caption"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "py-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Applications limit",
                                              modelValue: __props.payload.applicationsLimit,
                                              "onUpdate:modelValue": ($event) => __props.payload.applicationsLimit = $event,
                                              onKeypress: unref(digitsOnly)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "py-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Deadline",
                                              modelValue: unref(selectedDate),
                                              "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                              rules: unref(required)(),
                                              readonly: "",
                                              onClick: ($event) => datePicker.value = true
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "py-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Category",
                                              modelValue: __props.payload.category,
                                              "onUpdate:modelValue": ($event) => __props.payload.category = $event,
                                              "append-inner-icon": "mdi-chevron-down",
                                              rules: unref(required)(),
                                              readonly: "",
                                              loading: unref(loadData),
                                              id: "selectCategory"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#selectCategory",
                                              list: unref(categoriesList),
                                              listValue: __props.payload.category,
                                              onSetItem: setCategory
                                            }, null, 8, ["list", "listValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "py-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Subcategory",
                                              modelValue: __props.payload.subcategory,
                                              "onUpdate:modelValue": ($event) => __props.payload.subcategory = $event,
                                              "append-inner-icon": "mdi-chevron-down",
                                              rules: unref(required)(),
                                              readonly: "",
                                              loading: unref(loadData),
                                              id: "selectSubcategory",
                                              disabled: __props.payload.category === ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading", "disabled"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#selectSubcategory",
                                              list: unref(subcategoriesList),
                                              listValue: __props.payload.subcategory,
                                              onSetItem: setSubcategory
                                            }, null, 8, ["list", "listValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "py-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Industry",
                                              modelValue: __props.payload.industry,
                                              "onUpdate:modelValue": ($event) => __props.payload.industry = $event,
                                              "append-inner-icon": "mdi-chevron-down",
                                              rules: unref(required)(),
                                              readonly: "",
                                              loading: unref(loadData),
                                              id: "setIndustry"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#setIndustry",
                                              list: unref(industriesList),
                                              listValue: __props.payload.industry,
                                              onSetItem: setIndustry
                                            }, null, 8, ["list", "listValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6",
                                          class: "py-1"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Business",
                                              modelValue: __props.payload.business,
                                              "onUpdate:modelValue": ($event) => __props.payload.business = $event,
                                              "append-inner-icon": "mdi-chevron-down",
                                              rules: unref(required)(),
                                              readonly: "",
                                              loading: unref(loadData),
                                              id: "setBusiness"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#setBusiness",
                                              list: unref(businessesList),
                                              listValue: __props.payload.business,
                                              onSetItem: setBusiness
                                            }, null, 8, ["list", "listValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_AdminCoreCalendarDate, {
                                  datePicker: unref(datePicker),
                                  date: __props.payload.deadline,
                                  min: unref(minDate),
                                  onSetDate: setDate,
                                  onClose: ($event) => datePicker.value = false
                                }, null, 8, ["datePicker", "date", "min", "onClose"])
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
                              createVNode(VContainer, {
                                class: "pa-0",
                                fluid: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Name",
                                            modelValue: __props.payload.jobName,
                                            "onUpdate:modelValue": ($event) => __props.payload.jobName = $event,
                                            rules: unref(name)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Type",
                                            modelValue: __props.payload.jobType,
                                            "onUpdate:modelValue": ($event) => __props.payload.jobType = $event,
                                            "append-inner-icon": "mdi-chevron-down",
                                            rules: unref(required)(),
                                            readonly: "",
                                            loading: unref(loadData),
                                            id: "selectType"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#selectType",
                                            list: unref(jobTypesList),
                                            listValue: __props.payload.jobType,
                                            onSetItem: setJobType
                                          }, null, 8, ["list", "listValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Location, {
                                            disabled: __props.payload.jobType === "REMOTE",
                                            modelValue: __props.payload.location,
                                            "onUpdate:modelValue": ($event) => __props.payload.location = $event,
                                            "is-required": __props.payload.jobType !== "REMOTE"
                                          }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "is-required"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex ga-2" }, [
                                            createVNode(VTextField, {
                                              label: "Experience",
                                              modelValue: __props.payload.experience,
                                              "onUpdate:modelValue": ($event) => __props.payload.experience = $event,
                                              onKeypress: unref(digitsOnly),
                                              suffix: "Year(s)"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"]),
                                            createVNode(VTextField, {
                                              label: "Experience Level",
                                              modelValue: __props.payload.experienceLevel,
                                              "onUpdate:modelValue": ($event) => __props.payload.experienceLevel = $event,
                                              readonly: "",
                                              "append-inner-icon": "mdi-chevron-down",
                                              id: "selectLevel"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#selectLevel",
                                              list: [
                                                "ANY",
                                                "INTERNSHIP & GRADUATE",
                                                "ENTRY LEVEL",
                                                "SENIOR LEVEL",
                                                "EXECUTIVE LEVEL"
                                              ],
                                              listValue: __props.payload.experienceLevel,
                                              onSetItem: setExperienceLevel
                                            }, null, 8, ["listValue"])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Currency",
                                            modelValue: __props.payload.currency,
                                            "onUpdate:modelValue": ($event) => __props.payload.currency = $event,
                                            "append-inner-icon": "mdi-chevron-down",
                                            rules: unref(required)(),
                                            readonly: "",
                                            loading: unref(loadData),
                                            id: "selectCurrency"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#selectCurrency",
                                            list: ["USD", "FC"],
                                            listValue: __props.payload.currency,
                                            onSetItem: setCurrency
                                          }, null, 8, ["listValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex ga-4" }, [
                                            createVNode(VTextField, {
                                              label: "Min Salary",
                                              modelValue: __props.payload.salaryRange[0],
                                              "onUpdate:modelValue": ($event) => __props.payload.salaryRange[0] = $event,
                                              modelModifiers: { number: true },
                                              onKeypress: unref(digitsOnly),
                                              prefix: __props.payload.currency
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                            createVNode(VTextField, {
                                              label: "Max Salary",
                                              modelValue: __props.payload.salaryRange[1],
                                              "onUpdate:modelValue": ($event) => __props.payload.salaryRange[1] = $event,
                                              modelModifiers: { number: true },
                                              onKeypress: unref(digitsOnly),
                                              onInput: controlMaxSalary,
                                              prefix: __props.payload.currency
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                            createVNode(VSwitch, {
                                              modelValue: __props.payload.isConfidential,
                                              "onUpdate:modelValue": ($event) => __props.payload.isConfidential = $event,
                                              color: "link",
                                              density: "compact",
                                              label: "salary confidential",
                                              class: "text-caption"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Applications limit",
                                            modelValue: __props.payload.applicationsLimit,
                                            "onUpdate:modelValue": ($event) => __props.payload.applicationsLimit = $event,
                                            onKeypress: unref(digitsOnly)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Deadline",
                                            modelValue: unref(selectedDate),
                                            "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                            rules: unref(required)(),
                                            readonly: "",
                                            onClick: ($event) => datePicker.value = true
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Category",
                                            modelValue: __props.payload.category,
                                            "onUpdate:modelValue": ($event) => __props.payload.category = $event,
                                            "append-inner-icon": "mdi-chevron-down",
                                            rules: unref(required)(),
                                            readonly: "",
                                            loading: unref(loadData),
                                            id: "selectCategory"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#selectCategory",
                                            list: unref(categoriesList),
                                            listValue: __props.payload.category,
                                            onSetItem: setCategory
                                          }, null, 8, ["list", "listValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Subcategory",
                                            modelValue: __props.payload.subcategory,
                                            "onUpdate:modelValue": ($event) => __props.payload.subcategory = $event,
                                            "append-inner-icon": "mdi-chevron-down",
                                            rules: unref(required)(),
                                            readonly: "",
                                            loading: unref(loadData),
                                            id: "selectSubcategory",
                                            disabled: __props.payload.category === ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading", "disabled"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#selectSubcategory",
                                            list: unref(subcategoriesList),
                                            listValue: __props.payload.subcategory,
                                            onSetItem: setSubcategory
                                          }, null, 8, ["list", "listValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Industry",
                                            modelValue: __props.payload.industry,
                                            "onUpdate:modelValue": ($event) => __props.payload.industry = $event,
                                            "append-inner-icon": "mdi-chevron-down",
                                            rules: unref(required)(),
                                            readonly: "",
                                            loading: unref(loadData),
                                            id: "setIndustry"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#setIndustry",
                                            list: unref(industriesList),
                                            listValue: __props.payload.industry,
                                            onSetItem: setIndustry
                                          }, null, 8, ["list", "listValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6",
                                        class: "py-1"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Business",
                                            modelValue: __props.payload.business,
                                            "onUpdate:modelValue": ($event) => __props.payload.business = $event,
                                            "append-inner-icon": "mdi-chevron-down",
                                            rules: unref(required)(),
                                            readonly: "",
                                            loading: unref(loadData),
                                            id: "setBusiness"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#setBusiness",
                                            list: unref(businessesList),
                                            listValue: __props.payload.business,
                                            onSetItem: setBusiness
                                          }, null, 8, ["list", "listValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AdminCoreCalendarDate, {
                                datePicker: unref(datePicker),
                                date: __props.payload.deadline,
                                min: unref(minDate),
                                onSetDate: setDate,
                                onClose: ($event) => datePicker.value = false
                              }, null, 8, ["datePicker", "date", "min", "onClose"])
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
                      sm: "3",
                      class: "text-caption"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mx-auto d-flex flex-column align-center" }, [
                          createVNode(_component_AdminCoreImage, {
                            onSetImage: setImage,
                            image: __props.payload.banner,
                            profile: false
                          }, null, 8, ["image"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "9"
                    }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          ref_key: "formData",
                          ref: formData
                        }, {
                          default: withCtx(() => [
                            createVNode(VContainer, {
                              class: "pa-0",
                              fluid: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Name",
                                          modelValue: __props.payload.jobName,
                                          "onUpdate:modelValue": ($event) => __props.payload.jobName = $event,
                                          rules: unref(name)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Type",
                                          modelValue: __props.payload.jobType,
                                          "onUpdate:modelValue": ($event) => __props.payload.jobType = $event,
                                          "append-inner-icon": "mdi-chevron-down",
                                          rules: unref(required)(),
                                          readonly: "",
                                          loading: unref(loadData),
                                          id: "selectType"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#selectType",
                                          list: unref(jobTypesList),
                                          listValue: __props.payload.jobType,
                                          onSetItem: setJobType
                                        }, null, 8, ["list", "listValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Location, {
                                          disabled: __props.payload.jobType === "REMOTE",
                                          modelValue: __props.payload.location,
                                          "onUpdate:modelValue": ($event) => __props.payload.location = $event,
                                          "is-required": __props.payload.jobType !== "REMOTE"
                                        }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "is-required"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex ga-2" }, [
                                          createVNode(VTextField, {
                                            label: "Experience",
                                            modelValue: __props.payload.experience,
                                            "onUpdate:modelValue": ($event) => __props.payload.experience = $event,
                                            onKeypress: unref(digitsOnly),
                                            suffix: "Year(s)"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"]),
                                          createVNode(VTextField, {
                                            label: "Experience Level",
                                            modelValue: __props.payload.experienceLevel,
                                            "onUpdate:modelValue": ($event) => __props.payload.experienceLevel = $event,
                                            readonly: "",
                                            "append-inner-icon": "mdi-chevron-down",
                                            id: "selectLevel"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#selectLevel",
                                            list: [
                                              "ANY",
                                              "INTERNSHIP & GRADUATE",
                                              "ENTRY LEVEL",
                                              "SENIOR LEVEL",
                                              "EXECUTIVE LEVEL"
                                            ],
                                            listValue: __props.payload.experienceLevel,
                                            onSetItem: setExperienceLevel
                                          }, null, 8, ["listValue"])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Currency",
                                          modelValue: __props.payload.currency,
                                          "onUpdate:modelValue": ($event) => __props.payload.currency = $event,
                                          "append-inner-icon": "mdi-chevron-down",
                                          rules: unref(required)(),
                                          readonly: "",
                                          loading: unref(loadData),
                                          id: "selectCurrency"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#selectCurrency",
                                          list: ["USD", "FC"],
                                          listValue: __props.payload.currency,
                                          onSetItem: setCurrency
                                        }, null, 8, ["listValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex ga-4" }, [
                                          createVNode(VTextField, {
                                            label: "Min Salary",
                                            modelValue: __props.payload.salaryRange[0],
                                            "onUpdate:modelValue": ($event) => __props.payload.salaryRange[0] = $event,
                                            modelModifiers: { number: true },
                                            onKeypress: unref(digitsOnly),
                                            prefix: __props.payload.currency
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                          createVNode(VTextField, {
                                            label: "Max Salary",
                                            modelValue: __props.payload.salaryRange[1],
                                            "onUpdate:modelValue": ($event) => __props.payload.salaryRange[1] = $event,
                                            modelModifiers: { number: true },
                                            onKeypress: unref(digitsOnly),
                                            onInput: controlMaxSalary,
                                            prefix: __props.payload.currency
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                          createVNode(VSwitch, {
                                            modelValue: __props.payload.isConfidential,
                                            "onUpdate:modelValue": ($event) => __props.payload.isConfidential = $event,
                                            color: "link",
                                            density: "compact",
                                            label: "salary confidential",
                                            class: "text-caption"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Applications limit",
                                          modelValue: __props.payload.applicationsLimit,
                                          "onUpdate:modelValue": ($event) => __props.payload.applicationsLimit = $event,
                                          onKeypress: unref(digitsOnly)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Deadline",
                                          modelValue: unref(selectedDate),
                                          "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                          rules: unref(required)(),
                                          readonly: "",
                                          onClick: ($event) => datePicker.value = true
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Category",
                                          modelValue: __props.payload.category,
                                          "onUpdate:modelValue": ($event) => __props.payload.category = $event,
                                          "append-inner-icon": "mdi-chevron-down",
                                          rules: unref(required)(),
                                          readonly: "",
                                          loading: unref(loadData),
                                          id: "selectCategory"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#selectCategory",
                                          list: unref(categoriesList),
                                          listValue: __props.payload.category,
                                          onSetItem: setCategory
                                        }, null, 8, ["list", "listValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Subcategory",
                                          modelValue: __props.payload.subcategory,
                                          "onUpdate:modelValue": ($event) => __props.payload.subcategory = $event,
                                          "append-inner-icon": "mdi-chevron-down",
                                          rules: unref(required)(),
                                          readonly: "",
                                          loading: unref(loadData),
                                          id: "selectSubcategory",
                                          disabled: __props.payload.category === ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading", "disabled"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#selectSubcategory",
                                          list: unref(subcategoriesList),
                                          listValue: __props.payload.subcategory,
                                          onSetItem: setSubcategory
                                        }, null, 8, ["list", "listValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Industry",
                                          modelValue: __props.payload.industry,
                                          "onUpdate:modelValue": ($event) => __props.payload.industry = $event,
                                          "append-inner-icon": "mdi-chevron-down",
                                          rules: unref(required)(),
                                          readonly: "",
                                          loading: unref(loadData),
                                          id: "setIndustry"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#setIndustry",
                                          list: unref(industriesList),
                                          listValue: __props.payload.industry,
                                          onSetItem: setIndustry
                                        }, null, 8, ["list", "listValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6",
                                      class: "py-1"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Business",
                                          modelValue: __props.payload.business,
                                          "onUpdate:modelValue": ($event) => __props.payload.business = $event,
                                          "append-inner-icon": "mdi-chevron-down",
                                          rules: unref(required)(),
                                          readonly: "",
                                          loading: unref(loadData),
                                          id: "setBusiness"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#setBusiness",
                                          list: unref(businessesList),
                                          listValue: __props.payload.business,
                                          onSetItem: setBusiness
                                        }, null, 8, ["list", "listValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_AdminCoreCalendarDate, {
                              datePicker: unref(datePicker),
                              date: __props.payload.deadline,
                              min: unref(minDate),
                              onSetDate: setDate,
                              onClose: ($event) => datePicker.value = false
                            }, null, 8, ["datePicker", "date", "min", "onClose"])
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
                    sm: "3",
                    class: "text-caption"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mx-auto d-flex flex-column align-center" }, [
                        createVNode(_component_AdminCoreImage, {
                          onSetImage: setImage,
                          image: __props.payload.banner,
                          profile: false
                        }, null, 8, ["image"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "9"
                  }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        ref_key: "formData",
                        ref: formData
                      }, {
                        default: withCtx(() => [
                          createVNode(VContainer, {
                            class: "pa-0",
                            fluid: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Name",
                                        modelValue: __props.payload.jobName,
                                        "onUpdate:modelValue": ($event) => __props.payload.jobName = $event,
                                        rules: unref(name)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Type",
                                        modelValue: __props.payload.jobType,
                                        "onUpdate:modelValue": ($event) => __props.payload.jobType = $event,
                                        "append-inner-icon": "mdi-chevron-down",
                                        rules: unref(required)(),
                                        readonly: "",
                                        loading: unref(loadData),
                                        id: "selectType"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                      createVNode(_component_AdminCoreSelect, {
                                        activator: "#selectType",
                                        list: unref(jobTypesList),
                                        listValue: __props.payload.jobType,
                                        onSetItem: setJobType
                                      }, null, 8, ["list", "listValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Location, {
                                        disabled: __props.payload.jobType === "REMOTE",
                                        modelValue: __props.payload.location,
                                        "onUpdate:modelValue": ($event) => __props.payload.location = $event,
                                        "is-required": __props.payload.jobType !== "REMOTE"
                                      }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "is-required"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex ga-2" }, [
                                        createVNode(VTextField, {
                                          label: "Experience",
                                          modelValue: __props.payload.experience,
                                          "onUpdate:modelValue": ($event) => __props.payload.experience = $event,
                                          onKeypress: unref(digitsOnly),
                                          suffix: "Year(s)"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"]),
                                        createVNode(VTextField, {
                                          label: "Experience Level",
                                          modelValue: __props.payload.experienceLevel,
                                          "onUpdate:modelValue": ($event) => __props.payload.experienceLevel = $event,
                                          readonly: "",
                                          "append-inner-icon": "mdi-chevron-down",
                                          id: "selectLevel"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#selectLevel",
                                          list: [
                                            "ANY",
                                            "INTERNSHIP & GRADUATE",
                                            "ENTRY LEVEL",
                                            "SENIOR LEVEL",
                                            "EXECUTIVE LEVEL"
                                          ],
                                          listValue: __props.payload.experienceLevel,
                                          onSetItem: setExperienceLevel
                                        }, null, 8, ["listValue"])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Currency",
                                        modelValue: __props.payload.currency,
                                        "onUpdate:modelValue": ($event) => __props.payload.currency = $event,
                                        "append-inner-icon": "mdi-chevron-down",
                                        rules: unref(required)(),
                                        readonly: "",
                                        loading: unref(loadData),
                                        id: "selectCurrency"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                      createVNode(_component_AdminCoreSelect, {
                                        activator: "#selectCurrency",
                                        list: ["USD", "FC"],
                                        listValue: __props.payload.currency,
                                        onSetItem: setCurrency
                                      }, null, 8, ["listValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex ga-4" }, [
                                        createVNode(VTextField, {
                                          label: "Min Salary",
                                          modelValue: __props.payload.salaryRange[0],
                                          "onUpdate:modelValue": ($event) => __props.payload.salaryRange[0] = $event,
                                          modelModifiers: { number: true },
                                          onKeypress: unref(digitsOnly),
                                          prefix: __props.payload.currency
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                        createVNode(VTextField, {
                                          label: "Max Salary",
                                          modelValue: __props.payload.salaryRange[1],
                                          "onUpdate:modelValue": ($event) => __props.payload.salaryRange[1] = $event,
                                          modelModifiers: { number: true },
                                          onKeypress: unref(digitsOnly),
                                          onInput: controlMaxSalary,
                                          prefix: __props.payload.currency
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "prefix"]),
                                        createVNode(VSwitch, {
                                          modelValue: __props.payload.isConfidential,
                                          "onUpdate:modelValue": ($event) => __props.payload.isConfidential = $event,
                                          color: "link",
                                          density: "compact",
                                          label: "salary confidential",
                                          class: "text-caption"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Applications limit",
                                        modelValue: __props.payload.applicationsLimit,
                                        "onUpdate:modelValue": ($event) => __props.payload.applicationsLimit = $event,
                                        onKeypress: unref(digitsOnly)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Deadline",
                                        modelValue: unref(selectedDate),
                                        "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null,
                                        rules: unref(required)(),
                                        readonly: "",
                                        onClick: ($event) => datePicker.value = true
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Category",
                                        modelValue: __props.payload.category,
                                        "onUpdate:modelValue": ($event) => __props.payload.category = $event,
                                        "append-inner-icon": "mdi-chevron-down",
                                        rules: unref(required)(),
                                        readonly: "",
                                        loading: unref(loadData),
                                        id: "selectCategory"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                      createVNode(_component_AdminCoreSelect, {
                                        activator: "#selectCategory",
                                        list: unref(categoriesList),
                                        listValue: __props.payload.category,
                                        onSetItem: setCategory
                                      }, null, 8, ["list", "listValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Subcategory",
                                        modelValue: __props.payload.subcategory,
                                        "onUpdate:modelValue": ($event) => __props.payload.subcategory = $event,
                                        "append-inner-icon": "mdi-chevron-down",
                                        rules: unref(required)(),
                                        readonly: "",
                                        loading: unref(loadData),
                                        id: "selectSubcategory",
                                        disabled: __props.payload.category === ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading", "disabled"]),
                                      createVNode(_component_AdminCoreSelect, {
                                        activator: "#selectSubcategory",
                                        list: unref(subcategoriesList),
                                        listValue: __props.payload.subcategory,
                                        onSetItem: setSubcategory
                                      }, null, 8, ["list", "listValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Industry",
                                        modelValue: __props.payload.industry,
                                        "onUpdate:modelValue": ($event) => __props.payload.industry = $event,
                                        "append-inner-icon": "mdi-chevron-down",
                                        rules: unref(required)(),
                                        readonly: "",
                                        loading: unref(loadData),
                                        id: "setIndustry"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                      createVNode(_component_AdminCoreSelect, {
                                        activator: "#setIndustry",
                                        list: unref(industriesList),
                                        listValue: __props.payload.industry,
                                        onSetItem: setIndustry
                                      }, null, 8, ["list", "listValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6",
                                    class: "py-1"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Business",
                                        modelValue: __props.payload.business,
                                        "onUpdate:modelValue": ($event) => __props.payload.business = $event,
                                        "append-inner-icon": "mdi-chevron-down",
                                        rules: unref(required)(),
                                        readonly: "",
                                        loading: unref(loadData),
                                        id: "setBusiness"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "loading"]),
                                      createVNode(_component_AdminCoreSelect, {
                                        activator: "#setBusiness",
                                        list: unref(businessesList),
                                        listValue: __props.payload.business,
                                        onSetItem: setBusiness
                                      }, null, 8, ["list", "listValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_AdminCoreCalendarDate, {
                            datePicker: unref(datePicker),
                            date: __props.payload.deadline,
                            min: unref(minDate),
                            onSetDate: setDate,
                            onClose: ($event) => datePicker.value = false
                          }, null, 8, ["datePicker", "date", "min", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/job/inputs/basic.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "skills",
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
    const { toggleSnackbar } = useAppStore();
    const formData = ref(null);
    const skill = ref("");
    const reset = async () => {
      await formData.value.reset();
    };
    const addSkills = async () => {
      const { valid } = await formData.value.validate();
      if (valid) {
        let alreadyAdded = props.payload.skills.find((item) => item == skill.value);
        if (alreadyAdded)
          toggleSnackbar({
            status: true,
            type: "warning",
            message: "Skill already exists"
          });
        else {
          props.payload.skills.push(skill.value);
          reset();
        }
      }
    };
    const removeSkills = (index) => {
      props.payload.skills.splice(index, 1);
    };
    const formDataReq = ref(null);
    const requirement = ref("");
    const resetReq = async () => {
      await formDataReq.value.reset();
    };
    const addRequirements = async () => {
      const { valid } = await formDataReq.value.validate();
      if (valid) {
        let alreadyAdded = props.payload.requirements.find(
          (item) => item == requirement.value
        );
        if (alreadyAdded)
          toggleSnackbar({
            status: true,
            type: "warning",
            message: "Requirement already exists"
          });
        else {
          props.payload.requirements.push(requirement.value);
          resetReq();
        }
      }
    };
    const removeRequirements = (index) => {
      props.payload.requirements.splice(index, 1);
    };
    watch(
      () => props.trigger,
      () => {
        moveNext();
      }
    );
    const moveNext = () => {
      let tab = 1;
      if (props.payload.skills.length > 0 && props.payload.requirements.length > 0)
        tab = 2;
      else {
        const skillsRequired = props.payload.skills.length === 0;
        toggleSnackbar({
          status: true,
          type: "warning",
          message: `${skillsRequired ? "Skills" : "Requirements"} are required`
        });
      }
      emits("step", tab);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "" }, _attrs), {
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
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "formData",
                          ref: formData,
                          onSubmit: () => {
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex ga-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Skill",
                                modelValue: unref(skill),
                                "onUpdate:modelValue": ($event) => isRef(skill) ? skill.value = $event : null,
                                type: "search",
                                onKeypress: addSkills,
                                rules: unref(required)()
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "mdi-plus",
                                flat: "",
                                color: "primary-accent",
                                class: "text-caption text-none",
                                rounded: "",
                                size: "x-small",
                                onClick: addSkills
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex ga-3" }, [
                                  createVNode(VTextField, {
                                    label: "Skill",
                                    modelValue: unref(skill),
                                    "onUpdate:modelValue": ($event) => isRef(skill) ? skill.value = $event : null,
                                    type: "search",
                                    onKeypress: withKeys(withModifiers(addSkills, ["prevent"]), ["enter"]),
                                    rules: unref(required)()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                                  createVNode(VBtn, {
                                    icon: "mdi-plus",
                                    flat: "",
                                    color: "primary-accent",
                                    class: "text-caption text-none",
                                    rounded: "",
                                    size: "x-small",
                                    onClick: addSkills
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="mt-2 text-caption"${_scopeId3}><b${_scopeId3}>Skills</b>`);
                        _push4(ssrRenderComponent(VList, {
                          class: "mt-1 bg-transparent pa-0",
                          density: "compact",
                          lines: "false"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(__props.payload.skills, (item, i) => {
                                _push5(ssrRenderComponent(VListItem, null, {
                                  append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        variant: "text",
                                        icon: "mdi-delete-outline",
                                        size: "x-small",
                                        class: "mx-2",
                                        title: "Remove",
                                        onClick: ($event) => removeSkills(i)
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, {
                                          variant: "text",
                                          icon: "mdi-delete-outline",
                                          size: "x-small",
                                          class: "mx-2",
                                          title: "Remove",
                                          onClick: ($event) => removeSkills(i)
                                        }, null, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>${ssrInterpolate(item)}</span>`);
                                      _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: "mdi-chevron-right",
                                          start: ""
                                        }),
                                        createVNode("span", null, toDisplayString(item), 1),
                                        createVNode(VSpacer)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              if (__props.payload.skills.length === 0) {
                                _push5(ssrRenderComponent(VListItem, { class: "text-grey-darken-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span${_scopeId5}>No skills added</span>`);
                                    } else {
                                      return [
                                        createVNode("span", null, "No skills added")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.skills, (item, i) => {
                                  return openBlock(), createBlock(VListItem, null, {
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        icon: "mdi-delete-outline",
                                        size: "x-small",
                                        class: "mx-2",
                                        title: "Remove",
                                        onClick: ($event) => removeSkills(i)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(item), 1),
                                      createVNode(VSpacer)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256)),
                                __props.payload.skills.length === 0 ? (openBlock(), createBlock(VListItem, {
                                  key: 0,
                                  class: "text-grey-darken-1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "No skills added")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(VForm, {
                            ref_key: "formData",
                            ref: formData,
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex ga-3" }, [
                                createVNode(VTextField, {
                                  label: "Skill",
                                  modelValue: unref(skill),
                                  "onUpdate:modelValue": ($event) => isRef(skill) ? skill.value = $event : null,
                                  type: "search",
                                  onKeypress: withKeys(withModifiers(addSkills, ["prevent"]), ["enter"]),
                                  rules: unref(required)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                                createVNode(VBtn, {
                                  icon: "mdi-plus",
                                  flat: "",
                                  color: "primary-accent",
                                  class: "text-caption text-none",
                                  rounded: "",
                                  size: "x-small",
                                  onClick: addSkills
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"]),
                          createVNode("div", { class: "mt-2 text-caption" }, [
                            createVNode("b", null, "Skills"),
                            createVNode(VList, {
                              class: "mt-1 bg-transparent pa-0",
                              density: "compact",
                              lines: "false"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.skills, (item, i) => {
                                  return openBlock(), createBlock(VListItem, null, {
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        icon: "mdi-delete-outline",
                                        size: "x-small",
                                        class: "mx-2",
                                        title: "Remove",
                                        onClick: ($event) => removeSkills(i)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(item), 1),
                                      createVNode(VSpacer)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256)),
                                __props.payload.skills.length === 0 ? (openBlock(), createBlock(VListItem, {
                                  key: 0,
                                  class: "text-grey-darken-1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "No skills added")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
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
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "formDataReq",
                          ref: formDataReq,
                          onSubmit: () => {
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex ga-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Requirement",
                                modelValue: unref(requirement),
                                "onUpdate:modelValue": ($event) => isRef(requirement) ? requirement.value = $event : null,
                                type: "search",
                                onKeypress: addRequirements,
                                rules: unref(required)()
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "mdi-plus",
                                flat: "",
                                color: "primary-accent",
                                class: "text-caption text-none",
                                rounded: "",
                                size: "x-small",
                                onClick: addRequirements
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex ga-3" }, [
                                  createVNode(VTextField, {
                                    label: "Requirement",
                                    modelValue: unref(requirement),
                                    "onUpdate:modelValue": ($event) => isRef(requirement) ? requirement.value = $event : null,
                                    type: "search",
                                    onKeypress: withKeys(withModifiers(addRequirements, ["prevent"]), ["enter"]),
                                    rules: unref(required)()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                                  createVNode(VBtn, {
                                    icon: "mdi-plus",
                                    flat: "",
                                    color: "primary-accent",
                                    class: "text-caption text-none",
                                    rounded: "",
                                    size: "x-small",
                                    onClick: addRequirements
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="mt-2 text-caption"${_scopeId3}><b${_scopeId3}>Requirements</b>`);
                        _push4(ssrRenderComponent(VList, {
                          class: "mt-1 bg-transparent pa-0",
                          density: "compact",
                          lines: "false"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(__props.payload.requirements, (item, i) => {
                                _push5(ssrRenderComponent(VListItem, null, {
                                  append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        variant: "text",
                                        icon: "mdi-delete-outline",
                                        size: "x-small",
                                        class: "mx-2",
                                        title: "Remove",
                                        onClick: ($event) => removeRequirements(i)
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, {
                                          variant: "text",
                                          icon: "mdi-delete-outline",
                                          size: "x-small",
                                          class: "mx-2",
                                          title: "Remove",
                                          onClick: ($event) => removeRequirements(i)
                                        }, null, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>${ssrInterpolate(item)}</span>`);
                                      _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: "mdi-chevron-right",
                                          start: ""
                                        }),
                                        createVNode("span", null, toDisplayString(item), 1),
                                        createVNode(VSpacer)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              if (__props.payload.requirements.length === 0) {
                                _push5(ssrRenderComponent(VListItem, { class: "text-grey-darken-1 pa-4" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span${_scopeId5}>No requirements added</span>`);
                                    } else {
                                      return [
                                        createVNode("span", null, "No requirements added")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requirements, (item, i) => {
                                  return openBlock(), createBlock(VListItem, null, {
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        icon: "mdi-delete-outline",
                                        size: "x-small",
                                        class: "mx-2",
                                        title: "Remove",
                                        onClick: ($event) => removeRequirements(i)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(item), 1),
                                      createVNode(VSpacer)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256)),
                                __props.payload.requirements.length === 0 ? (openBlock(), createBlock(VListItem, {
                                  key: 0,
                                  class: "text-grey-darken-1 pa-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "No requirements added")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(VForm, {
                            ref_key: "formDataReq",
                            ref: formDataReq,
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex ga-3" }, [
                                createVNode(VTextField, {
                                  label: "Requirement",
                                  modelValue: unref(requirement),
                                  "onUpdate:modelValue": ($event) => isRef(requirement) ? requirement.value = $event : null,
                                  type: "search",
                                  onKeypress: withKeys(withModifiers(addRequirements, ["prevent"]), ["enter"]),
                                  rules: unref(required)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                                createVNode(VBtn, {
                                  icon: "mdi-plus",
                                  flat: "",
                                  color: "primary-accent",
                                  class: "text-caption text-none",
                                  rounded: "",
                                  size: "x-small",
                                  onClick: addRequirements
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"]),
                          createVNode("div", { class: "mt-2 text-caption" }, [
                            createVNode("b", null, "Requirements"),
                            createVNode(VList, {
                              class: "mt-1 bg-transparent pa-0",
                              density: "compact",
                              lines: "false"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requirements, (item, i) => {
                                  return openBlock(), createBlock(VListItem, null, {
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        icon: "mdi-delete-outline",
                                        size: "x-small",
                                        class: "mx-2",
                                        title: "Remove",
                                        onClick: ($event) => removeRequirements(i)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(item), 1),
                                      createVNode(VSpacer)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256)),
                                __props.payload.requirements.length === 0 ? (openBlock(), createBlock(VListItem, {
                                  key: 0,
                                  class: "text-grey-darken-1 pa-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "No requirements added")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
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
                        createVNode(VForm, {
                          ref_key: "formData",
                          ref: formData,
                          onSubmit: withModifiers(() => {
                          }, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex ga-3" }, [
                              createVNode(VTextField, {
                                label: "Skill",
                                modelValue: unref(skill),
                                "onUpdate:modelValue": ($event) => isRef(skill) ? skill.value = $event : null,
                                type: "search",
                                onKeypress: withKeys(withModifiers(addSkills, ["prevent"]), ["enter"]),
                                rules: unref(required)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                              createVNode(VBtn, {
                                icon: "mdi-plus",
                                flat: "",
                                color: "primary-accent",
                                class: "text-caption text-none",
                                rounded: "",
                                size: "x-small",
                                onClick: addSkills
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["onSubmit"]),
                        createVNode("div", { class: "mt-2 text-caption" }, [
                          createVNode("b", null, "Skills"),
                          createVNode(VList, {
                            class: "mt-1 bg-transparent pa-0",
                            density: "compact",
                            lines: "false"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.skills, (item, i) => {
                                return openBlock(), createBlock(VListItem, null, {
                                  append: withCtx(() => [
                                    createVNode(VBtn, {
                                      variant: "text",
                                      icon: "mdi-delete-outline",
                                      size: "x-small",
                                      class: "mx-2",
                                      title: "Remove",
                                      onClick: ($event) => removeSkills(i)
                                    }, null, 8, ["onClick"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-chevron-right",
                                      start: ""
                                    }),
                                    createVNode("span", null, toDisplayString(item), 1),
                                    createVNode(VSpacer)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256)),
                              __props.payload.skills.length === 0 ? (openBlock(), createBlock(VListItem, {
                                key: 0,
                                class: "text-grey-darken-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "No skills added")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          ref_key: "formDataReq",
                          ref: formDataReq,
                          onSubmit: withModifiers(() => {
                          }, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex ga-3" }, [
                              createVNode(VTextField, {
                                label: "Requirement",
                                modelValue: unref(requirement),
                                "onUpdate:modelValue": ($event) => isRef(requirement) ? requirement.value = $event : null,
                                type: "search",
                                onKeypress: withKeys(withModifiers(addRequirements, ["prevent"]), ["enter"]),
                                rules: unref(required)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                              createVNode(VBtn, {
                                icon: "mdi-plus",
                                flat: "",
                                color: "primary-accent",
                                class: "text-caption text-none",
                                rounded: "",
                                size: "x-small",
                                onClick: addRequirements
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["onSubmit"]),
                        createVNode("div", { class: "mt-2 text-caption" }, [
                          createVNode("b", null, "Requirements"),
                          createVNode(VList, {
                            class: "mt-1 bg-transparent pa-0",
                            density: "compact",
                            lines: "false"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requirements, (item, i) => {
                                return openBlock(), createBlock(VListItem, null, {
                                  append: withCtx(() => [
                                    createVNode(VBtn, {
                                      variant: "text",
                                      icon: "mdi-delete-outline",
                                      size: "x-small",
                                      class: "mx-2",
                                      title: "Remove",
                                      onClick: ($event) => removeRequirements(i)
                                    }, null, 8, ["onClick"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-chevron-right",
                                      start: ""
                                    }),
                                    createVNode("span", null, toDisplayString(item), 1),
                                    createVNode(VSpacer)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256)),
                              __props.payload.requirements.length === 0 ? (openBlock(), createBlock(VListItem, {
                                key: 0,
                                class: "text-grey-darken-1 pa-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "No requirements added")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
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
                      createVNode(VForm, {
                        ref_key: "formData",
                        ref: formData,
                        onSubmit: withModifiers(() => {
                        }, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex ga-3" }, [
                            createVNode(VTextField, {
                              label: "Skill",
                              modelValue: unref(skill),
                              "onUpdate:modelValue": ($event) => isRef(skill) ? skill.value = $event : null,
                              type: "search",
                              onKeypress: withKeys(withModifiers(addSkills, ["prevent"]), ["enter"]),
                              rules: unref(required)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                            createVNode(VBtn, {
                              icon: "mdi-plus",
                              flat: "",
                              color: "primary-accent",
                              class: "text-caption text-none",
                              rounded: "",
                              size: "x-small",
                              onClick: addSkills
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["onSubmit"]),
                      createVNode("div", { class: "mt-2 text-caption" }, [
                        createVNode("b", null, "Skills"),
                        createVNode(VList, {
                          class: "mt-1 bg-transparent pa-0",
                          density: "compact",
                          lines: "false"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.skills, (item, i) => {
                              return openBlock(), createBlock(VListItem, null, {
                                append: withCtx(() => [
                                  createVNode(VBtn, {
                                    variant: "text",
                                    icon: "mdi-delete-outline",
                                    size: "x-small",
                                    class: "mx-2",
                                    title: "Remove",
                                    onClick: ($event) => removeSkills(i)
                                  }, null, 8, ["onClick"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-chevron-right",
                                    start: ""
                                  }),
                                  createVNode("span", null, toDisplayString(item), 1),
                                  createVNode(VSpacer)
                                ]),
                                _: 2
                              }, 1024);
                            }), 256)),
                            __props.payload.skills.length === 0 ? (openBlock(), createBlock(VListItem, {
                              key: 0,
                              class: "text-grey-darken-1"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "No skills added")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        ref_key: "formDataReq",
                        ref: formDataReq,
                        onSubmit: withModifiers(() => {
                        }, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex ga-3" }, [
                            createVNode(VTextField, {
                              label: "Requirement",
                              modelValue: unref(requirement),
                              "onUpdate:modelValue": ($event) => isRef(requirement) ? requirement.value = $event : null,
                              type: "search",
                              onKeypress: withKeys(withModifiers(addRequirements, ["prevent"]), ["enter"]),
                              rules: unref(required)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                            createVNode(VBtn, {
                              icon: "mdi-plus",
                              flat: "",
                              color: "primary-accent",
                              class: "text-caption text-none",
                              rounded: "",
                              size: "x-small",
                              onClick: addRequirements
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["onSubmit"]),
                      createVNode("div", { class: "mt-2 text-caption" }, [
                        createVNode("b", null, "Requirements"),
                        createVNode(VList, {
                          class: "mt-1 bg-transparent pa-0",
                          density: "compact",
                          lines: "false"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requirements, (item, i) => {
                              return openBlock(), createBlock(VListItem, null, {
                                append: withCtx(() => [
                                  createVNode(VBtn, {
                                    variant: "text",
                                    icon: "mdi-delete-outline",
                                    size: "x-small",
                                    class: "mx-2",
                                    title: "Remove",
                                    onClick: ($event) => removeRequirements(i)
                                  }, null, 8, ["onClick"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-chevron-right",
                                    start: ""
                                  }),
                                  createVNode("span", null, toDisplayString(item), 1),
                                  createVNode(VSpacer)
                                ]),
                                _: 2
                              }, 1024);
                            }), 256)),
                            __props.payload.requirements.length === 0 ? (openBlock(), createBlock(VListItem, {
                              key: 0,
                              class: "text-grey-darken-1 pa-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "No requirements added")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
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
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/job/inputs/skills.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "responsibilities",
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
    const { toggleSnackbar } = useAppStore();
    const formData = ref(null);
    const responsibility = ref("");
    const reset = async () => {
      await formData.value.reset();
    };
    const addResponsibilities = async () => {
      const { valid } = await formData.value.validate();
      if (valid) {
        let alreadyAdded = props.payload.responsibilities.find(
          (item) => item == responsibility.value
        );
        if (alreadyAdded)
          toggleSnackbar({
            status: true,
            type: "warning",
            message: "Responsibility already exist"
          });
        else {
          props.payload.responsibilities.push(responsibility.value);
          reset();
        }
      }
    };
    const removeResponsibilities = (index) => {
      props.payload.responsibilities.splice(index, 1);
    };
    const formDataDoc = ref(null);
    const requiredDocument = ref("");
    const resetDoc = async () => {
      await formDataDoc.value.reset();
    };
    const addrequiredDocuments = async () => {
      const { valid } = await formDataDoc.value.validate();
      if (valid) {
        let alreadyAdded = props.payload.requiredDocuments.find(
          (item) => item == requiredDocument.value
        );
        if (alreadyAdded)
          toggleSnackbar({
            status: true,
            type: "warning",
            message: "document already added"
          });
        else {
          props.payload.requiredDocuments.push(requiredDocument.value);
          resetDoc();
        }
      }
    };
    const removerequiredDocuments = (index) => {
      props.payload.requiredDocuments.splice(index, 1);
    };
    watch(
      () => props.trigger,
      () => {
        moveNext();
      }
    );
    const moveNext = () => {
      let tab = 2;
      if (props.payload.responsibilities.length > 0 && props.payload.requiredDocuments.length > 0)
        tab = 3;
      else {
        const responsibilitiesRequired = props.payload.responsibilities.length === 0;
        toggleSnackbar({
          status: true,
          type: "warning",
          message: `${responsibilitiesRequired ? "Responsibilities" : "documents"} are required`
        });
      }
      emits("step", tab);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({ class: "" }, _attrs), {
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
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "formData",
                          ref: formData,
                          onSubmit: () => {
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex ga-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTextField, {
                                label: "Responsibility",
                                modelValue: unref(responsibility),
                                "onUpdate:modelValue": ($event) => isRef(responsibility) ? responsibility.value = $event : null,
                                type: "search",
                                onKeypress: addResponsibilities,
                                rules: unref(required)()
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "mdi-plus",
                                flat: "",
                                color: "primary-accent",
                                class: "text-caption text-none",
                                rounded: "",
                                size: "x-small",
                                onClick: addResponsibilities
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex ga-3" }, [
                                  createVNode(VTextField, {
                                    label: "Responsibility",
                                    modelValue: unref(responsibility),
                                    "onUpdate:modelValue": ($event) => isRef(responsibility) ? responsibility.value = $event : null,
                                    type: "search",
                                    onKeypress: withKeys(withModifiers(addResponsibilities, ["prevent"]), ["enter"]),
                                    rules: unref(required)()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                                  createVNode(VBtn, {
                                    icon: "mdi-plus",
                                    flat: "",
                                    color: "primary-accent",
                                    class: "text-caption text-none",
                                    rounded: "",
                                    size: "x-small",
                                    onClick: addResponsibilities
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="mt-2 text-caption"${_scopeId3}><b${_scopeId3}>Responsibilities</b>`);
                        _push4(ssrRenderComponent(VList, {
                          class: "mt-1 bg-transparent pa-0",
                          density: "compact",
                          lines: "false"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(__props.payload.responsibilities, (item, i) => {
                                _push5(ssrRenderComponent(VListItem, null, {
                                  append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        variant: "text",
                                        icon: "mdi-delete-outline",
                                        size: "x-small",
                                        class: "mx-2",
                                        title: "Remove",
                                        onClick: ($event) => removeResponsibilities(i)
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, {
                                          variant: "text",
                                          icon: "mdi-delete-outline",
                                          size: "x-small",
                                          class: "mx-2",
                                          title: "Remove",
                                          onClick: ($event) => removeResponsibilities(i)
                                        }, null, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>${ssrInterpolate(item)}</span>`);
                                      _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: "mdi-chevron-right",
                                          start: ""
                                        }),
                                        createVNode("span", null, toDisplayString(item), 1),
                                        createVNode(VSpacer)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              if (__props.payload.responsibilities.length === 0) {
                                _push5(ssrRenderComponent(VListItem, { class: "text-grey-darken-1 pa-4" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span${_scopeId5}>No responsibilities added</span>`);
                                    } else {
                                      return [
                                        createVNode("span", null, "No responsibilities added")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.responsibilities, (item, i) => {
                                  return openBlock(), createBlock(VListItem, null, {
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        icon: "mdi-delete-outline",
                                        size: "x-small",
                                        class: "mx-2",
                                        title: "Remove",
                                        onClick: ($event) => removeResponsibilities(i)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(item), 1),
                                      createVNode(VSpacer)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256)),
                                __props.payload.responsibilities.length === 0 ? (openBlock(), createBlock(VListItem, {
                                  key: 0,
                                  class: "text-grey-darken-1 pa-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "No responsibilities added")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(VForm, {
                            ref_key: "formData",
                            ref: formData,
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex ga-3" }, [
                                createVNode(VTextField, {
                                  label: "Responsibility",
                                  modelValue: unref(responsibility),
                                  "onUpdate:modelValue": ($event) => isRef(responsibility) ? responsibility.value = $event : null,
                                  type: "search",
                                  onKeypress: withKeys(withModifiers(addResponsibilities, ["prevent"]), ["enter"]),
                                  rules: unref(required)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                                createVNode(VBtn, {
                                  icon: "mdi-plus",
                                  flat: "",
                                  color: "primary-accent",
                                  class: "text-caption text-none",
                                  rounded: "",
                                  size: "x-small",
                                  onClick: addResponsibilities
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"]),
                          createVNode("div", { class: "mt-2 text-caption" }, [
                            createVNode("b", null, "Responsibilities"),
                            createVNode(VList, {
                              class: "mt-1 bg-transparent pa-0",
                              density: "compact",
                              lines: "false"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.responsibilities, (item, i) => {
                                  return openBlock(), createBlock(VListItem, null, {
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        icon: "mdi-delete-outline",
                                        size: "x-small",
                                        class: "mx-2",
                                        title: "Remove",
                                        onClick: ($event) => removeResponsibilities(i)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(item), 1),
                                      createVNode(VSpacer)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256)),
                                __props.payload.responsibilities.length === 0 ? (openBlock(), createBlock(VListItem, {
                                  key: 0,
                                  class: "text-grey-darken-1 pa-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "No responsibilities added")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
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
                        _push4(ssrRenderComponent(VForm, {
                          ref_key: "formDataDoc",
                          ref: formDataDoc,
                          onSubmit: () => {
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex ga-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VTextField, {
                                label: "requiredDocument",
                                modelValue: unref(requiredDocument),
                                "onUpdate:modelValue": ($event) => isRef(requiredDocument) ? requiredDocument.value = $event : null,
                                type: "search",
                                onKeypress: addrequiredDocuments,
                                rules: unref(required)()
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                icon: "mdi-plus",
                                flat: "",
                                color: "primary-accent",
                                class: "text-caption text-none",
                                rounded: "",
                                size: "x-small",
                                onClick: addrequiredDocuments
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex ga-3" }, [
                                  createVNode(VTextField, {
                                    label: "requiredDocument",
                                    modelValue: unref(requiredDocument),
                                    "onUpdate:modelValue": ($event) => isRef(requiredDocument) ? requiredDocument.value = $event : null,
                                    type: "search",
                                    onKeypress: withKeys(withModifiers(addrequiredDocuments, ["prevent"]), ["enter"]),
                                    rules: unref(required)()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                                  createVNode(VBtn, {
                                    icon: "mdi-plus",
                                    flat: "",
                                    color: "primary-accent",
                                    class: "text-caption text-none",
                                    rounded: "",
                                    size: "x-small",
                                    onClick: addrequiredDocuments
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="mt-2 text-caption"${_scopeId3}><b${_scopeId3}>Required documents</b>`);
                        _push4(ssrRenderComponent(VList, {
                          class: "mt-1 bg-transparent pa-0",
                          density: "compact",
                          lines: "false"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(__props.payload.requiredDocuments, (item, i) => {
                                _push5(ssrRenderComponent(VListItem, null, {
                                  append: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        variant: "text",
                                        icon: "mdi-delete-outline",
                                        size: "x-small",
                                        class: "mx-2",
                                        title: "Remove",
                                        onClick: ($event) => removerequiredDocuments(i)
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VBtn, {
                                          variant: "text",
                                          icon: "mdi-delete-outline",
                                          size: "x-small",
                                          class: "mx-2",
                                          title: "Remove",
                                          onClick: ($event) => removerequiredDocuments(i)
                                        }, null, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>${ssrInterpolate(item)}</span>`);
                                      _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VIcon, {
                                          icon: "mdi-chevron-right",
                                          start: ""
                                        }),
                                        createVNode("span", null, toDisplayString(item), 1),
                                        createVNode(VSpacer)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              if (__props.payload.requiredDocuments.length === 0) {
                                _push5(ssrRenderComponent(VListItem, { class: "text-grey-darken-1 pa-4" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span${_scopeId5}>No required documents added</span>`);
                                    } else {
                                      return [
                                        createVNode("span", null, "No required documents added")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requiredDocuments, (item, i) => {
                                  return openBlock(), createBlock(VListItem, null, {
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        icon: "mdi-delete-outline",
                                        size: "x-small",
                                        class: "mx-2",
                                        title: "Remove",
                                        onClick: ($event) => removerequiredDocuments(i)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(item), 1),
                                      createVNode(VSpacer)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256)),
                                __props.payload.requiredDocuments.length === 0 ? (openBlock(), createBlock(VListItem, {
                                  key: 0,
                                  class: "text-grey-darken-1 pa-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "No required documents added")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(VForm, {
                            ref_key: "formDataDoc",
                            ref: formDataDoc,
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex ga-3" }, [
                                createVNode(VTextField, {
                                  label: "requiredDocument",
                                  modelValue: unref(requiredDocument),
                                  "onUpdate:modelValue": ($event) => isRef(requiredDocument) ? requiredDocument.value = $event : null,
                                  type: "search",
                                  onKeypress: withKeys(withModifiers(addrequiredDocuments, ["prevent"]), ["enter"]),
                                  rules: unref(required)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                                createVNode(VBtn, {
                                  icon: "mdi-plus",
                                  flat: "",
                                  color: "primary-accent",
                                  class: "text-caption text-none",
                                  rounded: "",
                                  size: "x-small",
                                  onClick: addrequiredDocuments
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"]),
                          createVNode("div", { class: "mt-2 text-caption" }, [
                            createVNode("b", null, "Required documents"),
                            createVNode(VList, {
                              class: "mt-1 bg-transparent pa-0",
                              density: "compact",
                              lines: "false"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requiredDocuments, (item, i) => {
                                  return openBlock(), createBlock(VListItem, null, {
                                    append: withCtx(() => [
                                      createVNode(VBtn, {
                                        variant: "text",
                                        icon: "mdi-delete-outline",
                                        size: "x-small",
                                        class: "mx-2",
                                        title: "Remove",
                                        onClick: ($event) => removerequiredDocuments(i)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(item), 1),
                                      createVNode(VSpacer)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256)),
                                __props.payload.requiredDocuments.length === 0 ? (openBlock(), createBlock(VListItem, {
                                  key: 0,
                                  class: "text-grey-darken-1 pa-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "No required documents added")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
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
                        createVNode(VForm, {
                          ref_key: "formData",
                          ref: formData,
                          onSubmit: withModifiers(() => {
                          }, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex ga-3" }, [
                              createVNode(VTextField, {
                                label: "Responsibility",
                                modelValue: unref(responsibility),
                                "onUpdate:modelValue": ($event) => isRef(responsibility) ? responsibility.value = $event : null,
                                type: "search",
                                onKeypress: withKeys(withModifiers(addResponsibilities, ["prevent"]), ["enter"]),
                                rules: unref(required)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                              createVNode(VBtn, {
                                icon: "mdi-plus",
                                flat: "",
                                color: "primary-accent",
                                class: "text-caption text-none",
                                rounded: "",
                                size: "x-small",
                                onClick: addResponsibilities
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["onSubmit"]),
                        createVNode("div", { class: "mt-2 text-caption" }, [
                          createVNode("b", null, "Responsibilities"),
                          createVNode(VList, {
                            class: "mt-1 bg-transparent pa-0",
                            density: "compact",
                            lines: "false"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.responsibilities, (item, i) => {
                                return openBlock(), createBlock(VListItem, null, {
                                  append: withCtx(() => [
                                    createVNode(VBtn, {
                                      variant: "text",
                                      icon: "mdi-delete-outline",
                                      size: "x-small",
                                      class: "mx-2",
                                      title: "Remove",
                                      onClick: ($event) => removeResponsibilities(i)
                                    }, null, 8, ["onClick"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-chevron-right",
                                      start: ""
                                    }),
                                    createVNode("span", null, toDisplayString(item), 1),
                                    createVNode(VSpacer)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256)),
                              __props.payload.responsibilities.length === 0 ? (openBlock(), createBlock(VListItem, {
                                key: 0,
                                class: "text-grey-darken-1 pa-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "No responsibilities added")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(VForm, {
                          ref_key: "formDataDoc",
                          ref: formDataDoc,
                          onSubmit: withModifiers(() => {
                          }, ["prevent"])
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex ga-3" }, [
                              createVNode(VTextField, {
                                label: "requiredDocument",
                                modelValue: unref(requiredDocument),
                                "onUpdate:modelValue": ($event) => isRef(requiredDocument) ? requiredDocument.value = $event : null,
                                type: "search",
                                onKeypress: withKeys(withModifiers(addrequiredDocuments, ["prevent"]), ["enter"]),
                                rules: unref(required)()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                              createVNode(VBtn, {
                                icon: "mdi-plus",
                                flat: "",
                                color: "primary-accent",
                                class: "text-caption text-none",
                                rounded: "",
                                size: "x-small",
                                onClick: addrequiredDocuments
                              })
                            ])
                          ]),
                          _: 1
                        }, 8, ["onSubmit"]),
                        createVNode("div", { class: "mt-2 text-caption" }, [
                          createVNode("b", null, "Required documents"),
                          createVNode(VList, {
                            class: "mt-1 bg-transparent pa-0",
                            density: "compact",
                            lines: "false"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requiredDocuments, (item, i) => {
                                return openBlock(), createBlock(VListItem, null, {
                                  append: withCtx(() => [
                                    createVNode(VBtn, {
                                      variant: "text",
                                      icon: "mdi-delete-outline",
                                      size: "x-small",
                                      class: "mx-2",
                                      title: "Remove",
                                      onClick: ($event) => removerequiredDocuments(i)
                                    }, null, 8, ["onClick"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "mdi-chevron-right",
                                      start: ""
                                    }),
                                    createVNode("span", null, toDisplayString(item), 1),
                                    createVNode(VSpacer)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256)),
                              __props.payload.requiredDocuments.length === 0 ? (openBlock(), createBlock(VListItem, {
                                key: 0,
                                class: "text-grey-darken-1 pa-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "No required documents added")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
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
                      createVNode(VForm, {
                        ref_key: "formData",
                        ref: formData,
                        onSubmit: withModifiers(() => {
                        }, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex ga-3" }, [
                            createVNode(VTextField, {
                              label: "Responsibility",
                              modelValue: unref(responsibility),
                              "onUpdate:modelValue": ($event) => isRef(responsibility) ? responsibility.value = $event : null,
                              type: "search",
                              onKeypress: withKeys(withModifiers(addResponsibilities, ["prevent"]), ["enter"]),
                              rules: unref(required)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                            createVNode(VBtn, {
                              icon: "mdi-plus",
                              flat: "",
                              color: "primary-accent",
                              class: "text-caption text-none",
                              rounded: "",
                              size: "x-small",
                              onClick: addResponsibilities
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["onSubmit"]),
                      createVNode("div", { class: "mt-2 text-caption" }, [
                        createVNode("b", null, "Responsibilities"),
                        createVNode(VList, {
                          class: "mt-1 bg-transparent pa-0",
                          density: "compact",
                          lines: "false"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.responsibilities, (item, i) => {
                              return openBlock(), createBlock(VListItem, null, {
                                append: withCtx(() => [
                                  createVNode(VBtn, {
                                    variant: "text",
                                    icon: "mdi-delete-outline",
                                    size: "x-small",
                                    class: "mx-2",
                                    title: "Remove",
                                    onClick: ($event) => removeResponsibilities(i)
                                  }, null, 8, ["onClick"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-chevron-right",
                                    start: ""
                                  }),
                                  createVNode("span", null, toDisplayString(item), 1),
                                  createVNode(VSpacer)
                                ]),
                                _: 2
                              }, 1024);
                            }), 256)),
                            __props.payload.responsibilities.length === 0 ? (openBlock(), createBlock(VListItem, {
                              key: 0,
                              class: "text-grey-darken-1 pa-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "No responsibilities added")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(VForm, {
                        ref_key: "formDataDoc",
                        ref: formDataDoc,
                        onSubmit: withModifiers(() => {
                        }, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex ga-3" }, [
                            createVNode(VTextField, {
                              label: "requiredDocument",
                              modelValue: unref(requiredDocument),
                              "onUpdate:modelValue": ($event) => isRef(requiredDocument) ? requiredDocument.value = $event : null,
                              type: "search",
                              onKeypress: withKeys(withModifiers(addrequiredDocuments, ["prevent"]), ["enter"]),
                              rules: unref(required)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "rules"]),
                            createVNode(VBtn, {
                              icon: "mdi-plus",
                              flat: "",
                              color: "primary-accent",
                              class: "text-caption text-none",
                              rounded: "",
                              size: "x-small",
                              onClick: addrequiredDocuments
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["onSubmit"]),
                      createVNode("div", { class: "mt-2 text-caption" }, [
                        createVNode("b", null, "Required documents"),
                        createVNode(VList, {
                          class: "mt-1 bg-transparent pa-0",
                          density: "compact",
                          lines: "false"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.payload.requiredDocuments, (item, i) => {
                              return openBlock(), createBlock(VListItem, null, {
                                append: withCtx(() => [
                                  createVNode(VBtn, {
                                    variant: "text",
                                    icon: "mdi-delete-outline",
                                    size: "x-small",
                                    class: "mx-2",
                                    title: "Remove",
                                    onClick: ($event) => removerequiredDocuments(i)
                                  }, null, 8, ["onClick"])
                                ]),
                                default: withCtx(() => [
                                  createVNode(VIcon, {
                                    icon: "mdi-chevron-right",
                                    start: ""
                                  }),
                                  createVNode("span", null, toDisplayString(item), 1),
                                  createVNode(VSpacer)
                                ]),
                                _: 2
                              }, 1024);
                            }), 256)),
                            __props.payload.requiredDocuments.length === 0 ? (openBlock(), createBlock(VListItem, {
                              key: 0,
                              class: "text-grey-darken-1 pa-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "No required documents added")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
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
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/job/inputs/responsibilities.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "description",
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
    const { toggleSnackbar } = useAppStore();
    const formData = ref(null);
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
        if (props.payload.description !== "")
          tab = 4;
        else
          toggleSnackbar({
            status: true,
            message: "Job description is required",
            type: "warning"
          });
      emits("step", tab);
    };
    const setSummary = (val) => {
      props.payload.description = val;
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
            _push2(ssrRenderComponent(VTextarea, {
              placeholder: "Summary",
              modelValue: __props.payload.summary,
              "onUpdate:modelValue": ($event) => __props.payload.summary = $event,
              rules: unref(required)()
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-caption mt-1"${_scopeId}><span${_scopeId}>Detailed description</span>`);
            _push2(ssrRenderComponent(_component_Editor, {
              text: __props.payload.description,
              onSetText: setSummary
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(VTextarea, {
                placeholder: "Summary",
                modelValue: __props.payload.summary,
                "onUpdate:modelValue": ($event) => __props.payload.summary = $event,
                rules: unref(required)()
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
              createVNode("div", { class: "text-caption mt-1" }, [
                createVNode("span", null, "Detailed description"),
                createVNode(_component_Editor, {
                  text: __props.payload.description,
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/job/inputs/description.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    payload: Object,
    route: String
  },
  setup(__props) {
    const props = __props;
    const { loading, error } = storeToRefs(useAppStore());
    const { createJob, updateJob } = useJobStore();
    const tab = ref(0);
    const sections = [
      { title: "Basic details", icon: "mdi-content-paste" },
      { title: "Skills & Requirement", icon: "mdi-tag-outline" },
      { title: "Respondibilities & Documents", icon: "mdi-file-key-outline" },
      { title: "Description", icon: "mdi-text" },
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
      props.route ? await createJob(props.payload) : await updateJob(props.payload);
      if (!error.value)
        setTimeout(() => {
          navigateTo({
            name: "admin-jobs"
          });
        }, 2e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCorePageHeader = __nuxt_component_0$2;
      const _component_AdminCoreStepper = __nuxt_component_0$3;
      const _component_AdminJobInputsBasic = __nuxt_component_2;
      const _component_AdminJobInputsSkills = __nuxt_component_3;
      const _component_AdminJobInputsResponsibilities = __nuxt_component_4;
      const _component_AdminJobInputsDescription = __nuxt_component_5;
      const _component_AdminJobPreview = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminCorePageHeader, { route: __props.route }, {
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
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
        class: "py-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VWindowItem, { value: 0 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AdminJobInputsBasic, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepOne,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminJobInputsBasic, {
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
                  _push3(ssrRenderComponent(_component_AdminJobInputsSkills, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepTwo,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminJobInputsSkills, {
                      payload: __props.payload,
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
                  _push3(ssrRenderComponent(_component_AdminJobInputsResponsibilities, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepThree,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminJobInputsResponsibilities, {
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
                  _push3(ssrRenderComponent(_component_AdminJobInputsDescription, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepFour,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminJobInputsDescription, {
                      payload: __props.payload,
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
                  _push3(ssrRenderComponent(_component_AdminJobPreview, { payload: __props.payload }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminJobPreview, { payload: __props.payload }, null, 8, ["payload"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VWindowItem, { value: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminJobInputsBasic, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepOne,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminJobInputsSkills, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepTwo,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 2 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminJobInputsResponsibilities, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepThree,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 3 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminJobInputsDescription, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepFour,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 4 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminJobPreview, { payload: __props.payload }, null, 8, ["payload"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/job/inputs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { VSwitch as V, __nuxt_component_1 as _, __nuxt_component_0 as a };
//# sourceMappingURL=index-CetkiDKE.mjs.map
