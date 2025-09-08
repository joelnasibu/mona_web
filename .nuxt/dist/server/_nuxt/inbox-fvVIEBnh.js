import { _ as __nuxt_component_0 } from "./mid-screen-layout-b8tbDczG.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from "./discussion-BR0DqQPD.js";
import __nuxt_component_1$1 from "./Icon-RLEWMyEr.js";
import { ref, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, isRef, useSSRContext } from "vue";
import { m as useDevice, ae as useDisplay } from "../server.mjs";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-BpMO-iOS.js";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "./useHelpers-9BVYUhTt.js";
import "date-fns";
import "date-fns/locale";
import "./chat-JPFHFeEL.js";
import "@supabase/supabase-js";
import "./VImg-_57rVikU.js";
import "./tag-pIHjuosL.js";
import "./index-3E7yy1qS.js";
import "./color-rZjm0Y7u.js";
import "./rounded-jA9LRAgf.js";
import "./index-q-0zZOOG.js";
import "./VSpacer-0DxA8eQn.js";
/* empty css               */
import "./VAvatar-agmUyvkw.js";
import "./VDivider-Ce8J4Sp3.js";
import "./VTextField-8SU2p1Ep.js";
import "./index-d8gkbdU6.js";
import "./position-AkaJaFJy.js";
import "./VList-hhjvxiav.js";
import "./ssrBoot-xH9VG8QW.js";
import "./VBtn-yNf12l4D.js";
import "./resizeObserver-k8M9k6Xi.js";
import "./VMenu-bZwLMGPK.js";
import "./VOverlay-bpCAw6Z_.js";
import "./delay-5iXTA9KV.js";
import "./lazy-8QocgoLY.js";
import "./VCard-MEGoD2_3.js";
import "./VTextarea-W1zqEte6.js";
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
const _sfc_main = {
  __name: "inbox",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMobileOrTablet } = useDevice();
    const { mdAndUp } = useDisplay();
    const showDiscussion = ref(false), toggleRoom = (val) => {
      showDiscussion.value = val ? val : !showDiscussion.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMidScreenLayout = __nuxt_component_0;
      const _component_ChatRooms = __nuxt_component_1;
      const _component_ChatDiscussion = __nuxt_component_2;
      const _component_Icon = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_CoreMidScreenLayout, mergeProps({
        lg: 10,
        xl: 9
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              style: { height: "92vh", width: "100vw" },
              class: "d-flex align-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(mdAndUp) && !unref(isMobileOrTablet)) {
                    _push3(ssrRenderComponent(VRow, {
                      style: { height: `${unref(isMobileOrTablet) ? 100 : 90}%` },
                      class: "rounded-lg card-outlined bg-off-white-1",
                      "justify-center": "center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCol, {
                            xs: "12",
                            sm: "12",
                            md: "5",
                            lg: "5",
                            class: "px-0 h-100 pb-0",
                            style: { borderRight: "1px solid rgba(var(--v-theme-border)" }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_ChatRooms, {
                                  onToggleChat: toggleRoom,
                                  provider: "client"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_ChatRooms, {
                                    onToggleChat: toggleRoom,
                                    provider: "client"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VCol, {
                            xs: "12",
                            sm: "12",
                            md: "7",
                            lg: "7",
                            class: "px-0 h-100 pb-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (unref(showDiscussion)) {
                                  _push5(ssrRenderComponent(_component_ChatDiscussion, {
                                    onCloseChat: ($event) => showDiscussion.value = false
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<div class="h-100 w-100 d-none d-md-flex flex-column align-center justify-center text-subtitle-2 text-center mx-auto" style="${ssrRenderStyle({ maxWidth: "20ch" })}"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "line-md:chat",
                                    size: "4rem",
                                    class: "mb-3"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span${_scopeId4}>Select a chat to start a discussion </span></div>`);
                                }
                              } else {
                                return [
                                  unref(showDiscussion) ? (openBlock(), createBlock(_component_ChatDiscussion, {
                                    key: 0,
                                    onCloseChat: ($event) => showDiscussion.value = false
                                  }, null, 8, ["onCloseChat"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "h-100 w-100 d-none d-md-flex flex-column align-center justify-center text-subtitle-2 text-center mx-auto",
                                    style: { maxWidth: "20ch" }
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "line-md:chat",
                                      size: "4rem",
                                      class: "mb-3"
                                    }),
                                    createVNode("span", null, "Select a chat to start a discussion ")
                                  ]))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCol, {
                              xs: "12",
                              sm: "12",
                              md: "5",
                              lg: "5",
                              class: "px-0 h-100 pb-0",
                              style: { borderRight: "1px solid rgba(var(--v-theme-border)" }
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_ChatRooms, {
                                  onToggleChat: toggleRoom,
                                  provider: "client"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              xs: "12",
                              sm: "12",
                              md: "7",
                              lg: "7",
                              class: "px-0 h-100 pb-0"
                            }, {
                              default: withCtx(() => [
                                unref(showDiscussion) ? (openBlock(), createBlock(_component_ChatDiscussion, {
                                  key: 0,
                                  onCloseChat: ($event) => showDiscussion.value = false
                                }, null, 8, ["onCloseChat"])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "h-100 w-100 d-none d-md-flex flex-column align-center justify-center text-subtitle-2 text-center mx-auto",
                                  style: { maxWidth: "20ch" }
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "line-md:chat",
                                    size: "4rem",
                                    class: "mb-3"
                                  }),
                                  createVNode("span", null, "Select a chat to start a discussion ")
                                ]))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(VWindow, {
                      modelValue: unref(showDiscussion),
                      "onUpdate:modelValue": ($event) => isRef(showDiscussion) ? showDiscussion.value = $event : null,
                      class: "h-100 w-100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VWindowItem, { value: false }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="px-0 h-100 w-100 pb-0" style="${ssrRenderStyle({ border: "1px solid rgba(var(--v-theme-border)" })}"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_ChatRooms, {
                                  onToggleChat: toggleRoom,
                                  provider: "client"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "px-0 h-100 w-100 pb-0",
                                    style: { border: "1px solid rgba(var(--v-theme-border)" }
                                  }, [
                                    createVNode(_component_ChatRooms, {
                                      onToggleChat: toggleRoom,
                                      provider: "client"
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VWindowItem, { value: true }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="px-0 pb-0 border"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_ChatDiscussion, {
                                  onCloseChat: ($event) => showDiscussion.value = false
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "px-0 pb-0 border" }, [
                                    createVNode(_component_ChatDiscussion, {
                                      onCloseChat: ($event) => showDiscussion.value = false
                                    }, null, 8, ["onCloseChat"])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VWindowItem, { value: false }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "px-0 h-100 w-100 pb-0",
                                  style: { border: "1px solid rgba(var(--v-theme-border)" }
                                }, [
                                  createVNode(_component_ChatRooms, {
                                    onToggleChat: toggleRoom,
                                    provider: "client"
                                  })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VWindowItem, { value: true }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "px-0 pb-0 border" }, [
                                  createVNode(_component_ChatDiscussion, {
                                    onCloseChat: ($event) => showDiscussion.value = false
                                  }, null, 8, ["onCloseChat"])
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(mdAndUp) && !unref(isMobileOrTablet) ? (openBlock(), createBlock(VRow, {
                      key: 0,
                      style: { height: `${unref(isMobileOrTablet) ? 100 : 90}%` },
                      class: "rounded-lg card-outlined bg-off-white-1",
                      "justify-center": "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          xs: "12",
                          sm: "12",
                          md: "5",
                          lg: "5",
                          class: "px-0 h-100 pb-0",
                          style: { borderRight: "1px solid rgba(var(--v-theme-border)" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_ChatRooms, {
                              onToggleChat: toggleRoom,
                              provider: "client"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          xs: "12",
                          sm: "12",
                          md: "7",
                          lg: "7",
                          class: "px-0 h-100 pb-0"
                        }, {
                          default: withCtx(() => [
                            unref(showDiscussion) ? (openBlock(), createBlock(_component_ChatDiscussion, {
                              key: 0,
                              onCloseChat: ($event) => showDiscussion.value = false
                            }, null, 8, ["onCloseChat"])) : (openBlock(), createBlock("div", {
                              key: 1,
                              class: "h-100 w-100 d-none d-md-flex flex-column align-center justify-center text-subtitle-2 text-center mx-auto",
                              style: { maxWidth: "20ch" }
                            }, [
                              createVNode(_component_Icon, {
                                name: "line-md:chat",
                                size: "4rem",
                                class: "mb-3"
                              }),
                              createVNode("span", null, "Select a chat to start a discussion ")
                            ]))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["style"])) : (openBlock(), createBlock(VWindow, {
                      key: 1,
                      modelValue: unref(showDiscussion),
                      "onUpdate:modelValue": ($event) => isRef(showDiscussion) ? showDiscussion.value = $event : null,
                      class: "h-100 w-100"
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, { value: false }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "px-0 h-100 w-100 pb-0",
                              style: { border: "1px solid rgba(var(--v-theme-border)" }
                            }, [
                              createVNode(_component_ChatRooms, {
                                onToggleChat: toggleRoom,
                                provider: "client"
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, { value: true }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "px-0 pb-0 border" }, [
                              createVNode(_component_ChatDiscussion, {
                                onCloseChat: ($event) => showDiscussion.value = false
                              }, null, 8, ["onCloseChat"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, {
                style: { height: "92vh", width: "100vw" },
                class: "d-flex align-center"
              }, {
                default: withCtx(() => [
                  unref(mdAndUp) && !unref(isMobileOrTablet) ? (openBlock(), createBlock(VRow, {
                    key: 0,
                    style: { height: `${unref(isMobileOrTablet) ? 100 : 90}%` },
                    class: "rounded-lg card-outlined bg-off-white-1",
                    "justify-center": "center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        xs: "12",
                        sm: "12",
                        md: "5",
                        lg: "5",
                        class: "px-0 h-100 pb-0",
                        style: { borderRight: "1px solid rgba(var(--v-theme-border)" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ChatRooms, {
                            onToggleChat: toggleRoom,
                            provider: "client"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        xs: "12",
                        sm: "12",
                        md: "7",
                        lg: "7",
                        class: "px-0 h-100 pb-0"
                      }, {
                        default: withCtx(() => [
                          unref(showDiscussion) ? (openBlock(), createBlock(_component_ChatDiscussion, {
                            key: 0,
                            onCloseChat: ($event) => showDiscussion.value = false
                          }, null, 8, ["onCloseChat"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "h-100 w-100 d-none d-md-flex flex-column align-center justify-center text-subtitle-2 text-center mx-auto",
                            style: { maxWidth: "20ch" }
                          }, [
                            createVNode(_component_Icon, {
                              name: "line-md:chat",
                              size: "4rem",
                              class: "mb-3"
                            }),
                            createVNode("span", null, "Select a chat to start a discussion ")
                          ]))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["style"])) : (openBlock(), createBlock(VWindow, {
                    key: 1,
                    modelValue: unref(showDiscussion),
                    "onUpdate:modelValue": ($event) => isRef(showDiscussion) ? showDiscussion.value = $event : null,
                    class: "h-100 w-100"
                  }, {
                    default: withCtx(() => [
                      createVNode(VWindowItem, { value: false }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "px-0 h-100 w-100 pb-0",
                            style: { border: "1px solid rgba(var(--v-theme-border)" }
                          }, [
                            createVNode(_component_ChatRooms, {
                              onToggleChat: toggleRoom,
                              provider: "client"
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, { value: true }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "px-0 pb-0 border" }, [
                            createVNode(_component_ChatDiscussion, {
                              onCloseChat: ($event) => showDiscussion.value = false
                            }, null, 8, ["onCloseChat"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/inbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=inbox-fvVIEBnh.js.map
