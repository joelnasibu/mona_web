import __nuxt_component_1 from './Icon-c2IgCBiv.mjs';
import { u as useHelpers } from './useHelpers-kUuDaVs4.mjs';
import { ref, watchEffect, computed, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { s as storeToRefs, h as useAppStore } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useJobStore } from './jobs-XJs56wMu.mjs';
import { b as VIcon, e as VExpandTransition } from './index-jw0wqd8u.mjs';
import { d as VBtnToggle, V as VBtn } from './VBtn-HIzP-EnY.mjs';
import { V as VCard } from './VCard-M6VezhhA.mjs';
import { a as VAvatar } from './VAvatar-Tkx6eOqd.mjs';
import { V as VSpacer } from './VSpacer-ohAsXIBy.mjs';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import { V as VDivider } from './VDivider-JUM-rhUg.mjs';
import './index-aD-iXixa.mjs';
import '../../nitro/firebase-gen-2.mjs';
import 'firebase-functions/v2/https';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@algolia/cache-in-memory';
import 'pinia-plugin-persistedstate';
import 'date-fns';
import 'date-fns/locale';
import './color-52hqu1To.mjs';
import './tag-pIHjuosL.mjs';
import './position-WfCzcf5A.mjs';
import './resizeObserver-k8M9k6Xi.mjs';

const _sfc_main = {
  __name: "applied-jobs",
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
    const toggle = ref(0);
    const applicationsFilter = ["All", "Submitted", "Accepted", "Rejected"];
    const filteredApplications = computed(() => {
      return toggle.value === 0 ? filterDataPerField(data.value, "") : filterDataPerField(data.value, "", {
        applicationStatus: toggle.value === 1 ? "SUBMITTED" : toggle.value === 2 ? "ACCEPTED" : "REJECTED"
      });
    });
    const setApplicationStatus = (applicationStatus) => {
      return applicationStatus.toLowerCase() === "accepted" ? { icon: "mdi:check-circle-outline", color: "green" } : applicationStatus.toLowerCase() === "submitted" ? { icon: "line-md:uploading-loop", color: "orange" } : { icon: "mdi:close-circle-outline", color: "red" };
    };
    const applicationToExpand = ref(null);
    const expandApplication = (applicationId) => {
      applicationToExpand.value === applicationId ? applicationToExpand.value = null : applicationToExpand.value = applicationId;
    };
    const openFile = (file) => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-5" }, _attrs))}><div class="px-2 px-md-4"><div class="text-h5 pt-8 pb-4"><b>My Job applications</b></div>`);
      _push(ssrRenderComponent(VBtnToggle, {
        modelValue: unref(toggle),
        "onUpdate:modelValue": ($event) => isRef(toggle) ? toggle.value = $event : null,
        color: "primary-accent",
        border: "",
        divided: "",
        variant: "text",
        density: "compact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(applicationsFilter, (item, i) => {
              _push2(ssrRenderComponent(VBtn, {
                class: "text-caption",
                value: i
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(item)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(item), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(applicationsFilter, (item, i) => {
                return createVNode(VBtn, {
                  class: "text-caption",
                  value: i
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(item), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="d-flex flex-column ga-3 px-0 px-md-4 mt-8"><!--[-->`);
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
                      _push3(`<div class="text-caption"${_scopeId2}><span${_scopeId2}>Documents</span></div>`);
                      _push3(ssrRenderComponent(VRow, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(application.applicant.documents, ({ name, file }) => {
                              _push4(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: application.applicant.documents.length == 1 ? 12 : 6,
                                class: "pa-1 text-caption",
                                title: "Open file in new window"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(VCard, {
                                      class: "d-flex align-center ga-3 pa-2 bg-card card-outlined rounded-lg",
                                      flat: "",
                                      onClick: ($event) => openFile()
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(_component_Icon, {
                                            name: "mdi:file-pdf-outline",
                                            size: "1.4rem"
                                          }, null, _parent6, _scopeId5));
                                          _push6(`<span${_scopeId5}>${ssrInterpolate(name)}</span>`);
                                        } else {
                                          return [
                                            createVNode(_component_Icon, {
                                              name: "mdi:file-pdf-outline",
                                              size: "1.4rem"
                                            }),
                                            createVNode("span", null, toDisplayString(name), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(VCard, {
                                        class: "d-flex align-center ga-3 pa-2 bg-card card-outlined rounded-lg",
                                        flat: "",
                                        onClick: ($event) => openFile()
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "mdi:file-pdf-outline",
                                            size: "1.4rem"
                                          }),
                                          createVNode("span", null, toDisplayString(name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(application.applicant.documents, ({ name, file }) => {
                                return openBlock(), createBlock(VCol, {
                                  cols: "12",
                                  sm: application.applicant.documents.length == 1 ? 12 : 6,
                                  class: "pa-1 text-caption",
                                  title: "Open file in new window"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, {
                                      class: "d-flex align-center ga-3 pa-2 bg-card card-outlined rounded-lg",
                                      flat: "",
                                      onClick: ($event) => openFile()
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "mdi:file-pdf-outline",
                                          size: "1.4rem"
                                        }),
                                        createVNode("span", null, toDisplayString(name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1032, ["sm"]);
                              }), 256))
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
                        }, 1024),
                        createVNode("div", { class: "text-caption" }, [
                          createVNode("span", null, "Documents")
                        ]),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(application.applicant.documents, ({ name, file }) => {
                              return openBlock(), createBlock(VCol, {
                                cols: "12",
                                sm: application.applicant.documents.length == 1 ? 12 : 6,
                                class: "pa-1 text-caption",
                                title: "Open file in new window"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    class: "d-flex align-center ga-3 pa-2 bg-card card-outlined rounded-lg",
                                    flat: "",
                                    onClick: ($event) => openFile()
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mdi:file-pdf-outline",
                                        size: "1.4rem"
                                      }),
                                      createVNode("span", null, toDisplayString(name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1032, ["sm"]);
                            }), 256))
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
                      }, 1024),
                      createVNode("div", { class: "text-caption" }, [
                        createVNode("span", null, "Documents")
                      ]),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(application.applicant.documents, ({ name, file }) => {
                            return openBlock(), createBlock(VCol, {
                              cols: "12",
                              sm: application.applicant.documents.length == 1 ? 12 : 6,
                              class: "pa-1 text-caption",
                              title: "Open file in new window"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  class: "d-flex align-center ga-3 pa-2 bg-card card-outlined rounded-lg",
                                  flat: "",
                                  onClick: ($event) => openFile()
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mdi:file-pdf-outline",
                                      size: "1.4rem"
                                    }),
                                    createVNode("span", null, toDisplayString(name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1032, ["sm"]);
                          }), 256))
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
          _push(`<span>Loading applications...</span>`);
        } else {
          _push(`<span>No applications found</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/applied-jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=applied-jobs-B32OEO1G.mjs.map
