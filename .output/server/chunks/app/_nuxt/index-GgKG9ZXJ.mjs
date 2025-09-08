import { m as useDevice, h as useAppStore, s as storeToRefs, d as __nuxt_component_1 } from '../server.mjs';
import { u as useHelpers, a as useAuthStore } from './useHelpers-9BVYUhTt.mjs';
import { computed, ref, withCtx, createVNode, toDisplayString, mergeProps, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useHead } from './index-S1hhTCs3.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import { V as VList, a as VListItem, b as VListGroup } from './VList-hhjvxiav.mjs';
import { V as VIcon } from './index-3E7yy1qS.mjs';
import '../../nitro/firebase-gen-2.mjs';
import 'firebase-functions/v2/https';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@algolia/cache-in-memory';
import 'pinia-plugin-persistedstate';
import 'date-fns';
import 'date-fns/locale';
import './tag-pIHjuosL.mjs';
import './index-d8gkbdU6.mjs';
import './ssrBoot-xH9VG8QW.mjs';
import './index-q-0zZOOG.mjs';
import './VAvatar-agmUyvkw.mjs';
import './rounded-jA9LRAgf.mjs';
import './VImg-_57rVikU.mjs';
import './color-rZjm0Y7u.mjs';
import './VDivider-Ce8J4Sp3.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useDevice();
    useHelpers();
    const appStore = useAppStore();
    const { error, loading, token, currentUser, profileImage } = storeToRefs(appStore);
    useAuthStore();
    computed(() => {
      return currentUser.value.account && currentUser.value.applicant;
    });
    ref(0);
    ref(0);
    ref(true);
    const menus = [
      {
        title: "Main Profile",
        icon: "mdi-account-circle-outline",
        route: "profile-index-main"
        // children: [
        //   { title: "Main profile", route: "profile-index-main" },
        //   { title: "My Addresses", route: "" },
        // ],
      },
      {
        title: "Accounts",
        icon: "mdi-account-cog-outline",
        children: [
          { title: "My shop profile", route: "profile-index-shop" },
          { title: "My job profile", route: "profile-index-job" },
          { title: "Account status", route: "profile-index-status" }
        ]
      },
      {
        title: "Privacy & Security",
        route: "profile-index-security",
        icon: "mdi-lock-outline"
      }
    ];
    useHead({
      title: "My profile"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_1;
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              justify: "space-between",
              class: "py-8 pb-10 mb-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h5 px-2"${_scopeId3}><b${_scopeId3}>Profile Settings</b></div>`);
                        _push4(ssrRenderComponent(VList, {
                          class: "rounded-lg pa-0 mt-5",
                          density: "compact"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(menus, ({ title, icon, children, route }) => {
                                _push5(`<div class="text-subtitle-2"${_scopeId4}>`);
                                if (!children) {
                                  _push5(ssrRenderComponent(VListItem, {
                                    to: { name: route },
                                    active: _ctx.$route.name === route,
                                    color: "primary"
                                  }, {
                                    prepend: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VIcon, { icon }, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VIcon, { icon }, null, 8, ["icon"])
                                        ];
                                      }
                                    }),
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate(title)}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", null, toDisplayString(title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(ssrRenderComponent(VListGroup, {
                                    value: title,
                                    color: "primary-accent"
                                  }, {
                                    activator: withCtx(({ props }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VListItem, mergeProps({ ref_for: true }, props), {
                                          prepend: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VIcon, { icon }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VIcon, { icon }, null, 8, ["icon"])
                                              ];
                                            }
                                          }),
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(title)}</span>`);
                                            } else {
                                              return [
                                                createVNode("span", null, toDisplayString(title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VListItem, mergeProps({ ref_for: true }, props), {
                                            prepend: withCtx(() => [
                                              createVNode(VIcon, { icon }, null, 8, ["icon"])
                                            ]),
                                            default: withCtx(() => [
                                              createVNode("span", null, toDisplayString(title), 1)
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ];
                                      }
                                    }),
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<!--[-->`);
                                        ssrRenderList(children, ({ title: title2, route: route2 }, i) => {
                                          _push6(ssrRenderComponent(VListItem, {
                                            value: title2,
                                            class: "text-caption",
                                            style: { "font-size": "0.78rem !important" },
                                            color: "primary",
                                            to: { name: route2 },
                                            active: _ctx.$route.name === route2
                                          }, {
                                            default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`<span${_scopeId6}>${ssrInterpolate(title2)}</span>`);
                                              } else {
                                                return [
                                                  createVNode("span", null, toDisplayString(title2), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        });
                                        _push6(`<!--]-->`);
                                      } else {
                                        return [
                                          (openBlock(true), createBlock(Fragment, null, renderList(children, ({ title: title2, route: route2 }, i) => {
                                            return openBlock(), createBlock(VListItem, {
                                              value: title2,
                                              class: "text-caption",
                                              style: { "font-size": "0.78rem !important" },
                                              color: "primary",
                                              to: { name: route2 },
                                              active: _ctx.$route.name === route2
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, toDisplayString(title2), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value", "to", "active"]);
                                          }), 256))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                }
                                _push5(`</div>`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(menus, ({ title, icon, children, route }) => {
                                  return createVNode("div", { class: "text-subtitle-2" }, [
                                    !children ? (openBlock(), createBlock(VListItem, {
                                      key: 0,
                                      to: { name: route },
                                      active: _ctx.$route.name === route,
                                      color: "primary"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon }, null, 8, ["icon"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to", "active"])) : (openBlock(), createBlock(VListGroup, {
                                      key: 1,
                                      value: title,
                                      color: "primary-accent"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(VListItem, mergeProps({ ref_for: true }, props), {
                                          prepend: withCtx(() => [
                                            createVNode(VIcon, { icon }, null, 8, ["icon"])
                                          ]),
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(title), 1)
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ]),
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(children, ({ title: title2, route: route2 }, i) => {
                                          return openBlock(), createBlock(VListItem, {
                                            value: title2,
                                            class: "text-caption",
                                            style: { "font-size": "0.78rem !important" },
                                            color: "primary",
                                            to: { name: route2 },
                                            active: _ctx.$route.name === route2
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, toDisplayString(title2), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "to", "active"]);
                                        }), 256))
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]))
                                  ]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "text-h5 px-2" }, [
                            createVNode("b", null, "Profile Settings")
                          ]),
                          createVNode(VList, {
                            class: "rounded-lg pa-0 mt-5",
                            density: "compact"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(menus, ({ title, icon, children, route }) => {
                                return createVNode("div", { class: "text-subtitle-2" }, [
                                  !children ? (openBlock(), createBlock(VListItem, {
                                    key: 0,
                                    to: { name: route },
                                    active: _ctx.$route.name === route,
                                    color: "primary"
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon }, null, 8, ["icon"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to", "active"])) : (openBlock(), createBlock(VListGroup, {
                                    key: 1,
                                    value: title,
                                    color: "primary-accent"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(VListItem, mergeProps({ ref_for: true }, props), {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon }, null, 8, ["icon"])
                                        ]),
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(title), 1)
                                        ]),
                                        _: 2
                                      }, 1040)
                                    ]),
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(children, ({ title: title2, route: route2 }, i) => {
                                        return openBlock(), createBlock(VListItem, {
                                          value: title2,
                                          class: "text-caption",
                                          style: { "font-size": "0.78rem !important" },
                                          color: "primary",
                                          to: { name: route2 },
                                          active: _ctx.$route.name === route2
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(title2), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "to", "active"]);
                                      }), 256))
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]))
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
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtPage, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtPage)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "3"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-h5 px-2" }, [
                          createVNode("b", null, "Profile Settings")
                        ]),
                        createVNode(VList, {
                          class: "rounded-lg pa-0 mt-5",
                          density: "compact"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(menus, ({ title, icon, children, route }) => {
                              return createVNode("div", { class: "text-subtitle-2" }, [
                                !children ? (openBlock(), createBlock(VListItem, {
                                  key: 0,
                                  to: { name: route },
                                  active: _ctx.$route.name === route,
                                  color: "primary"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon }, null, 8, ["icon"])
                                  ]),
                                  default: withCtx(() => [
                                    createVNode("span", null, toDisplayString(title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "active"])) : (openBlock(), createBlock(VListGroup, {
                                  key: 1,
                                  value: title,
                                  color: "primary-accent"
                                }, {
                                  activator: withCtx(({ props }) => [
                                    createVNode(VListItem, mergeProps({ ref_for: true }, props), {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon }, null, 8, ["icon"])
                                      ]),
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(title), 1)
                                      ]),
                                      _: 2
                                    }, 1040)
                                  ]),
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(children, ({ title: title2, route: route2 }, i) => {
                                      return openBlock(), createBlock(VListItem, {
                                        value: title2,
                                        class: "text-caption",
                                        style: { "font-size": "0.78rem !important" },
                                        color: "primary",
                                        to: { name: route2 },
                                        active: _ctx.$route.name === route2
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(title2), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "to", "active"]);
                                    }), 256))
                                  ]),
                                  _: 2
                                }, 1032, ["value"]))
                              ]);
                            }), 64))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtPage)
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
              createVNode(VRow, {
                justify: "space-between",
                class: "py-8 pb-10 mb-8"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "3"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-h5 px-2" }, [
                        createVNode("b", null, "Profile Settings")
                      ]),
                      createVNode(VList, {
                        class: "rounded-lg pa-0 mt-5",
                        density: "compact"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(menus, ({ title, icon, children, route }) => {
                            return createVNode("div", { class: "text-subtitle-2" }, [
                              !children ? (openBlock(), createBlock(VListItem, {
                                key: 0,
                                to: { name: route },
                                active: _ctx.$route.name === route,
                                color: "primary"
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(VIcon, { icon }, null, 8, ["icon"])
                                ]),
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(title), 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "active"])) : (openBlock(), createBlock(VListGroup, {
                                key: 1,
                                value: title,
                                color: "primary-accent"
                              }, {
                                activator: withCtx(({ props }) => [
                                  createVNode(VListItem, mergeProps({ ref_for: true }, props), {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon }, null, 8, ["icon"])
                                    ]),
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(title), 1)
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(children, ({ title: title2, route: route2 }, i) => {
                                    return openBlock(), createBlock(VListItem, {
                                      value: title2,
                                      class: "text-caption",
                                      style: { "font-size": "0.78rem !important" },
                                      color: "primary",
                                      to: { name: route2 },
                                      active: _ctx.$route.name === route2
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(title2), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "to", "active"]);
                                  }), 256))
                                ]),
                                _: 2
                              }, 1032, ["value"]))
                            ]);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtPage)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-GgKG9ZXJ.mjs.map
