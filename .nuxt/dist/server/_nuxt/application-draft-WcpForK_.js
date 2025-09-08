import __nuxt_component_1 from "./Icon-RLEWMyEr.js";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { ref, watchEffect, computed, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { s as storeToRefs, h as useAppStore } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { u as useJobStore } from "./jobs-uJv1lqGQ.js";
import { c as VExpandTransition } from "./index-d8gkbdU6.js";
import { V as VCard } from "./VCard-MEGoD2_3.js";
import { V as VAvatar } from "./VAvatar-agmUyvkw.js";
import { V as VSpacer } from "./VSpacer-0DxA8eQn.js";
import { V as VIcon } from "./index-3E7yy1qS.js";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { V as VDivider } from "./VDivider-Ce8J4Sp3.js";
import "./index-1uTyX8RQ.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
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
import "date-fns";
import "date-fns/locale";
import "./tag-pIHjuosL.js";
import "./rounded-jA9LRAgf.js";
import "./position-AkaJaFJy.js";
import "./color-rZjm0Y7u.js";
import "./VImg-_57rVikU.js";
import "./index-q-0zZOOG.js";
/* empty css               */
const _sfc_main = {
  __name: "application-draft",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      currencyFormat,
      capitalizeFirstLetter,
      filterDataPerField,
      dateFormat_Month,
      numberFormat
    } = useHelpers();
    const { loading } = storeToRefs(useAppStore());
    const { getJobApplicants } = useJobStore();
    const data = ref([]);
    const getData = async () => {
      data.value = await getJobApplicants();
    };
    watchEffect(() => {
      getData();
    });
    const filteredApplications = computed(() => {
      return filterDataPerField(data.value, "", {
        applicationStatus: "INCOMPLETE"
      });
    });
    const setApplicationStatus = (applicationStatus) => {
      return applicationStatus.toLowerCase() === "accepted" ? { icon: "mdi:check-circle-outline", color: "green" } : applicationStatus.toLowerCase() === "submitted" ? { icon: "line-md:uploading-loop", color: "orange" } : { icon: "mdi:close-circle-outline", color: "red" };
    };
    const applicationToExpand = ref(null);
    const expandApplication = (applicationId) => {
      applicationToExpand.value === applicationId ? applicationToExpand.value = null : applicationToExpand.value = applicationId;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-h5 pt-8 pb-4"><b>My Applications draft</b></div><div class="d-flex flex-column ga-3 px-0 px-md-4"><!--[-->`);
      ssrRenderList(unref(filteredApplications), (application, i) => {
        _push(`<div class="">`);
        _push(ssrRenderComponent(VCard, {
          flat: "",
          class: "d-flex ga-3 pa-2",
          onClick: ($event) => expandApplication(application.applicationId)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VAvatar, {
                size: "60",
                color: "card",
                rounded: "lg",
                image: application.job.business.logo
              }, null, _parent2, _scopeId));
              _push2(`<div class="text-caption d-flex flex-column"${_scopeId}><span${_scopeId}>${ssrInterpolate(application.job.jobName)}</span><span class="text-disabled"${_scopeId}>${ssrInterpolate(unref(capitalizeFirstLetter)(application.job.business.businessName))}</span><span class="mt-1"${_scopeId}>${ssrInterpolate(unref(capitalizeFirstLetter)(application.job.jobtype))}</span></div>`);
              _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
              _push2(`<div class="my-auto"${ssrRenderAttr("title", application.applicationStatus)}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: setApplicationStatus(application.applicationStatus).icon,
                color: setApplicationStatus(application.applicationStatus).color,
                size: "1.5rem"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(VIcon, {
                class: ["my-auto icon", {
                  "transform-180deg": unref(applicationToExpand) === application.applicationId
                }],
                icon: "mdi-chevron-down"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VAvatar, {
                  size: "60",
                  color: "card",
                  rounded: "lg",
                  image: application.job.business.logo
                }, null, 8, ["image"]),
                createVNode("div", { class: "text-caption d-flex flex-column" }, [
                  createVNode("span", null, toDisplayString(application.job.jobName), 1),
                  createVNode("span", { class: "text-disabled" }, toDisplayString(unref(capitalizeFirstLetter)(application.job.business.businessName)), 1),
                  createVNode("span", { class: "mt-1" }, toDisplayString(unref(capitalizeFirstLetter)(application.job.jobtype)), 1)
                ]),
                createVNode(VSpacer),
                createVNode("div", {
                  class: "my-auto",
                  title: application.applicationStatus
                }, [
                  createVNode(_component_Icon, {
                    name: setApplicationStatus(application.applicationStatus).icon,
                    color: setApplicationStatus(application.applicationStatus).color,
                    size: "1.5rem"
                  }, null, 8, ["name", "color"])
                ], 8, ["title"]),
                createVNode(VIcon, {
                  class: ["my-auto icon", {
                    "transform-180deg": unref(applicationToExpand) === application.applicationId
                  }],
                  icon: "mdi-chevron-down"
                }, null, 8, ["class"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(VExpandTransition, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(applicationToExpand) === application.applicationId) {
                _push2(`<div class=""${_scopeId}>`);
                _push2(ssrRenderComponent(VContainer, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VRow, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VCol, {
                              cols: "12",
                              sm: "4",
                              class: "text-grey text-caption d-flex flex-column ga-2"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="d-flex"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "mdi-map-marker-outline",
                                    color: "grey",
                                    start: ""
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span${_scopeId4}>${ssrInterpolate(application.job.location)}</span></div><div class="d-flex"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "mdi-chevron-right",
                                    color: "grey",
                                    start: ""
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span${_scopeId4}>${ssrInterpolate(application.job.industry)}</span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "d-flex" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-map-marker-outline",
                                        color: "grey",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(application.job.location), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-chevron-right",
                                        color: "grey",
                                        start: ""
                                      }),
                                      createVNode("span", null, toDisplayString(application.job.industry), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VCol, {
                              cols: "12",
                              sm: "8"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4",
                                class: "text-grey text-caption d-flex flex-column ga-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode(VIcon, {
                                      icon: "mdi-map-marker-outline",
                                      color: "grey",
                                      start: ""
                                    }),
                                    createVNode("span", null, toDisplayString(application.job.location), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode(VIcon, {
                                      icon: "mdi-chevron-right",
                                      color: "grey",
                                      start: ""
                                    }),
                                    createVNode("span", null, toDisplayString(application.job.industry), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "8"
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4",
                              class: "text-grey text-caption d-flex flex-column ga-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-map-marker-outline",
                                    color: "grey",
                                    start: ""
                                  }),
                                  createVNode("span", null, toDisplayString(application.job.location), 1)
                                ]),
                                createVNode("div", { class: "d-flex" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-chevron-right",
                                    color: "grey",
                                    start: ""
                                  }),
                                  createVNode("span", null, toDisplayString(application.job.industry), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "8"
                            })
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(applicationToExpand) === application.applicationId ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ""
                }, [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4",
                            class: "text-grey text-caption d-flex flex-column ga-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex" }, [
                                createVNode(VIcon, {
                                  icon: "mdi-map-marker-outline",
                                  color: "grey",
                                  start: ""
                                }),
                                createVNode("span", null, toDisplayString(application.job.location), 1)
                              ]),
                              createVNode("div", { class: "d-flex" }, [
                                createVNode(VIcon, {
                                  icon: "mdi-chevron-right",
                                  color: "grey",
                                  start: ""
                                }),
                                createVNode("span", null, toDisplayString(application.job.industry), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "8"
                          })
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(VDivider, null, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (!unref(filteredApplications).length || unref(loading)) {
        _push(`<div class="py-10 my-10 py-md-15 my-md-15 text-disabled text-center">`);
        if (unref(loading)) {
          _push(`<span>Loading drafts...</span>`);
        } else {
          _push(`<span>No application draft found</span>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/application-draft.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=application-draft-WcpForK_.js.map
