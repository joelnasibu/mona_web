import { _ as _imports_0$1, a as __nuxt_component_0 } from "./access-light-no-tag-0cAQbU7k.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-kpaqSJk0.js";
import { computed, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { _ as _export_sfc, m as useDevice, s as storeToRefs, h as useAppStore } from "../server.mjs";
import "hookable";
import { a as useSeoMeta } from "./index-S1hhTCs3.js";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { V as VCard } from "./VCard-MEGoD2_3.js";
import { V as VCarousel, a as VCarouselItem } from "./VCarouselItem-KQpsENmj.js";
import { V as VImg } from "./VImg-_57rVikU.js";
import { V as VDivider } from "./VDivider-Ce8J4Sp3.js";
import "./stepper-ipq6mb5U.js";
import "./select-sjn27vix.js";
import "./VMenu-bZwLMGPK.js";
import "./VOverlay-bpCAw6Z_.js";
import "./VTextField-8SU2p1Ep.js";
import "./index-d8gkbdU6.js";
import "./tag-pIHjuosL.js";
import "./index-q-0zZOOG.js";
import "./index-3E7yy1qS.js";
import "./color-rZjm0Y7u.js";
import "./position-AkaJaFJy.js";
import "./rounded-jA9LRAgf.js";
import "./delay-5iXTA9KV.js";
import "./lazy-8QocgoLY.js";
import "./VList-hhjvxiav.js";
import "./ssrBoot-xH9VG8QW.js";
import "./VAvatar-agmUyvkw.js";
import "./VCheckbox-Omi4Z8sK.js";
import "./VCheckboxBtn-lCSbAwQG.js";
import "./VSelectionControl-t8h0Xxrv.js";
import "./useRules-Lv1tnQPg.js";
import "./VForm-wrdi8IEW.js";
import "./VBtn-yNf12l4D.js";
import "./resizeObserver-k8M9k6Xi.js";
import "./telephone-Dluk3I-7.js";
import "./useHelpers-9BVYUhTt.js";
import "date-fns";
import "date-fns/locale";
import "./VDialog-acnQ15uX.js";
import "./VSpacer-0DxA8eQn.js";
/* empty css               */
import "./VWindowItem-BpMO-iOS.js";
import "./password-JVbmTpyJ.js";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "@vue/devtools-api";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
const _imports_0 = "" + __publicAssetsURL("full.png");
const _sfc_main = {
  __name: "create-business-account",
  __ssrInlineRender: true,
  setup(__props) {
    useDevice();
    const images = [
      "https://www.abetterinterview.com/wp-content/uploads/2013/02/Job-Search.jpg",
      "https://shiptheory.com/blog/content/images/2020/06/ecommercestock.jpeg",
      "https://images.theconversation.com/files/239168/original/file-20181003-52688-17cspsx.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      "https://www.abrjobs.com/wp-content/uploads/2021/06/searching-for-a-new-job-picjumbo-com-scaled.jpg",
      "https://blog.hubspot.com/hubfs/ecommerce-10.jpg",
      "https://www.inspiringinterns.com/blog/wp-content/uploads/2015/02/hire-me.jpg",
      "https://futurewithtech.com/wp-content/uploads/2021/06/eCommerce-Images-1024x768.jpg",
      "https://wallpaperaccess.com/full/2593068.jpg",
      "https://www.allbusiness.com/media-library/online-shopping-concept.jpg?id=32093196"
    ], shuffledImages = computed(() => {
      return images.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    });
    const { redirect } = storeToRefs(useAppStore()), links = [
      { title: "Home", route: "/" },
      { title: "Shop", route: "/shop" },
      { title: "Jobs", route: "/jobs" }
    ];
    const seo = {
      title: "Create a business account",
      description: "Business account description"
    };
    useSeoMeta({
      title: seo.title,
      description: seo.description,
      ogTitle: seo.title,
      ogDescription: seo.description,
      twitterTitle: seo.title,
      twitterDescription: seo.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientShopBusinessCreate = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VContainer, mergeProps({
        class: "pa-0 system-bg",
        fluid: "",
        style: { "height": "100vh" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              "no-gutters": "",
              class: "h-100"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "4",
                    class: "d-none d-md-flex position-relative"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          height: "100%",
                          class: "position-sticky bg-transparent w-100 pa-0",
                          style: { "top": "0" },
                          flat: "",
                          rounded: "0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCarousel, {
                                "hide-delimiters": "",
                                continuous: "",
                                cycle: "",
                                interval: "10000",
                                height: "100%",
                                touch: false,
                                "show-arrows": false
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(shuffledImages), (img) => {
                                      _push6(ssrRenderComponent(VCarouselItem, {
                                        height: "100%",
                                        key: img
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="w-100 h-100" data-v-bb505a9c${_scopeId6}>`);
                                            _push7(ssrRenderComponent(VImg, {
                                              src: img,
                                              "lazy-src": img,
                                              height: "100%",
                                              cover: ""
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "w-100 h-100" }, [
                                                createVNode(VImg, {
                                                  src: img,
                                                  "lazy-src": img,
                                                  height: "100%",
                                                  cover: ""
                                                }, null, 8, ["src", "lazy-src"])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(shuffledImages), (img) => {
                                        return openBlock(), createBlock(VCarouselItem, {
                                          height: "100%",
                                          key: img
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "w-100 h-100" }, [
                                              createVNode(VImg, {
                                                src: img,
                                                "lazy-src": img,
                                                height: "100%",
                                                cover: ""
                                              }, null, 8, ["src", "lazy-src"])
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="w-100 h-100 overlay position-absolute d-flex flex-column" data-v-bb505a9c${_scopeId4}><div class="mt-auto pa-3" data-v-bb505a9c${_scopeId4}>`);
                              _push5(ssrRenderComponent(VImg, {
                                src: _imports_0,
                                "lazy-src": _imports_0$1,
                                width: "140"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="text-caption mt-4 text-white" data-v-bb505a9c${_scopeId4}><span data-v-bb505a9c${_scopeId4}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, aperiam repellat quisquam repellendus, molestiae culpa veritatis ex esse blanditiis necessitatibus libero nam omnis deserunt magni ipsum facere. Recusandae, eum! Est!</span></div></div></div>`);
                            } else {
                              return [
                                createVNode(VCarousel, {
                                  "hide-delimiters": "",
                                  continuous: "",
                                  cycle: "",
                                  interval: "10000",
                                  height: "100%",
                                  touch: false,
                                  "show-arrows": false
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(shuffledImages), (img) => {
                                      return openBlock(), createBlock(VCarouselItem, {
                                        height: "100%",
                                        key: img
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "w-100 h-100" }, [
                                            createVNode(VImg, {
                                              src: img,
                                              "lazy-src": img,
                                              height: "100%",
                                              cover: ""
                                            }, null, 8, ["src", "lazy-src"])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "w-100 h-100 overlay position-absolute d-flex flex-column" }, [
                                  createVNode("div", { class: "mt-auto pa-3" }, [
                                    createVNode(VImg, {
                                      src: _imports_0,
                                      "lazy-src": _imports_0$1,
                                      width: "140"
                                    }),
                                    createVNode("div", { class: "text-caption mt-4 text-white" }, [
                                      createVNode("span", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, aperiam repellat quisquam repellendus, molestiae culpa veritatis ex esse blanditiis necessitatibus libero nam omnis deserunt magni ipsum facere. Recusandae, eum! Est!")
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, {
                            height: "100%",
                            class: "position-sticky bg-transparent w-100 pa-0",
                            style: { "top": "0" },
                            flat: "",
                            rounded: "0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCarousel, {
                                "hide-delimiters": "",
                                continuous: "",
                                cycle: "",
                                interval: "10000",
                                height: "100%",
                                touch: false,
                                "show-arrows": false
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(shuffledImages), (img) => {
                                    return openBlock(), createBlock(VCarouselItem, {
                                      height: "100%",
                                      key: img
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "w-100 h-100" }, [
                                          createVNode(VImg, {
                                            src: img,
                                            "lazy-src": img,
                                            height: "100%",
                                            cover: ""
                                          }, null, 8, ["src", "lazy-src"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "w-100 h-100 overlay position-absolute d-flex flex-column" }, [
                                createVNode("div", { class: "mt-auto pa-3" }, [
                                  createVNode(VImg, {
                                    src: _imports_0,
                                    "lazy-src": _imports_0$1,
                                    width: "140"
                                  }),
                                  createVNode("div", { class: "text-caption mt-4 text-white" }, [
                                    createVNode("span", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, aperiam repellat quisquam repellendus, molestiae culpa veritatis ex esse blanditiis necessitatibus libero nam omnis deserunt magni ipsum facere. Recusandae, eum! Est!")
                                  ])
                                ])
                              ])
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
                    sm: "8",
                    class: "h-100"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="w-100 h-100 d-flex flex-column justify-center pa-1 pa-md-5" data-v-bb505a9c${_scopeId3}><div class="mt-auto" data-v-bb505a9c${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_ClientShopBusinessCreate, null, null, _parent4, _scopeId3));
                        _push4(`</div><div class="mt-auto" data-v-bb505a9c${_scopeId3}>`);
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, { class: "justify-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, { cols: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        var _a, _b;
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VDivider, { class: "mb-4" }, null, _parent7, _scopeId6));
                                          _push7(`<div class="d-flex justify-center ga-3 ga-md-10 text-caption" data-v-bb505a9c${_scopeId6}>`);
                                          if (unref(redirect)) {
                                            _push7(ssrRenderComponent(_component_NuxtLink, {
                                              to: { name: (_a = unref(redirect)) == null ? void 0 : _a.name, params: unref(redirect).params },
                                              class: "text-black"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span data-v-bb505a9c${_scopeId7}>Return</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", null, "Return")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`<!--[-->`);
                                          ssrRenderList(links, ({ title, route }) => {
                                            _push7(`<div class="" data-v-bb505a9c${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_NuxtLink, {
                                              to: route,
                                              class: "text-black"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<span data-v-bb505a9c${_scopeId7}>${ssrInterpolate(title)}</span>`);
                                                } else {
                                                  return [
                                                    createVNode("span", null, toDisplayString(title), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`</div>`);
                                          });
                                          _push7(`<!--]--></div>`);
                                        } else {
                                          return [
                                            createVNode(VDivider, { class: "mb-4" }),
                                            createVNode("div", { class: "d-flex justify-center ga-3 ga-md-10 text-caption" }, [
                                              unref(redirect) ? (openBlock(), createBlock(_component_NuxtLink, {
                                                key: 0,
                                                to: { name: (_b = unref(redirect)) == null ? void 0 : _b.name, params: unref(redirect).params },
                                                class: "text-black"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, "Return")
                                                ]),
                                                _: 1
                                              }, 8, ["to"])) : createCommentVNode("", true),
                                              (openBlock(), createBlock(Fragment, null, renderList(links, ({ title, route }) => {
                                                return createVNode("div", {
                                                  class: "",
                                                  key: route
                                                }, [
                                                  createVNode(_component_NuxtLink, {
                                                    to: route,
                                                    class: "text-black"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", null, toDisplayString(title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["to"])
                                                ]);
                                              }), 64))
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => {
                                          var _a;
                                          return [
                                            createVNode(VDivider, { class: "mb-4" }),
                                            createVNode("div", { class: "d-flex justify-center ga-3 ga-md-10 text-caption" }, [
                                              unref(redirect) ? (openBlock(), createBlock(_component_NuxtLink, {
                                                key: 0,
                                                to: { name: (_a = unref(redirect)) == null ? void 0 : _a.name, params: unref(redirect).params },
                                                class: "text-black"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, "Return")
                                                ]),
                                                _: 1
                                              }, 8, ["to"])) : createCommentVNode("", true),
                                              (openBlock(), createBlock(Fragment, null, renderList(links, ({ title, route }) => {
                                                return createVNode("div", {
                                                  class: "",
                                                  key: route
                                                }, [
                                                  createVNode(_component_NuxtLink, {
                                                    to: route,
                                                    class: "text-black"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", null, toDisplayString(title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["to"])
                                                ]);
                                              }), 64))
                                            ])
                                          ];
                                        }),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, { class: "justify-center" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createVNode(VDivider, { class: "mb-4" }),
                                          createVNode("div", { class: "d-flex justify-center ga-3 ga-md-10 text-caption" }, [
                                            unref(redirect) ? (openBlock(), createBlock(_component_NuxtLink, {
                                              key: 0,
                                              to: { name: (_a = unref(redirect)) == null ? void 0 : _a.name, params: unref(redirect).params },
                                              class: "text-black"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, "Return")
                                              ]),
                                              _: 1
                                            }, 8, ["to"])) : createCommentVNode("", true),
                                            (openBlock(), createBlock(Fragment, null, renderList(links, ({ title, route }) => {
                                              return createVNode("div", {
                                                class: "",
                                                key: route
                                              }, [
                                                createVNode(_component_NuxtLink, {
                                                  to: route,
                                                  class: "text-black"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", null, toDisplayString(title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to"])
                                              ]);
                                            }), 64))
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
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "w-100 h-100 d-flex flex-column justify-center pa-1 pa-md-5" }, [
                            createVNode("div", { class: "mt-auto" }, [
                              createVNode(_component_ClientShopBusinessCreate)
                            ]),
                            createVNode("div", { class: "mt-auto" }, [
                              createVNode(VContainer, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, { class: "justify-center" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => {
                                          var _a;
                                          return [
                                            createVNode(VDivider, { class: "mb-4" }),
                                            createVNode("div", { class: "d-flex justify-center ga-3 ga-md-10 text-caption" }, [
                                              unref(redirect) ? (openBlock(), createBlock(_component_NuxtLink, {
                                                key: 0,
                                                to: { name: (_a = unref(redirect)) == null ? void 0 : _a.name, params: unref(redirect).params },
                                                class: "text-black"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, "Return")
                                                ]),
                                                _: 1
                                              }, 8, ["to"])) : createCommentVNode("", true),
                                              (openBlock(), createBlock(Fragment, null, renderList(links, ({ title, route }) => {
                                                return createVNode("div", {
                                                  class: "",
                                                  key: route
                                                }, [
                                                  createVNode(_component_NuxtLink, {
                                                    to: route,
                                                    class: "text-black"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", null, toDisplayString(title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["to"])
                                                ]);
                                              }), 64))
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
                      sm: "4",
                      class: "d-none d-md-flex position-relative"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          height: "100%",
                          class: "position-sticky bg-transparent w-100 pa-0",
                          style: { "top": "0" },
                          flat: "",
                          rounded: "0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCarousel, {
                              "hide-delimiters": "",
                              continuous: "",
                              cycle: "",
                              interval: "10000",
                              height: "100%",
                              touch: false,
                              "show-arrows": false
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(shuffledImages), (img) => {
                                  return openBlock(), createBlock(VCarouselItem, {
                                    height: "100%",
                                    key: img
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "w-100 h-100" }, [
                                        createVNode(VImg, {
                                          src: img,
                                          "lazy-src": img,
                                          height: "100%",
                                          cover: ""
                                        }, null, 8, ["src", "lazy-src"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "w-100 h-100 overlay position-absolute d-flex flex-column" }, [
                              createVNode("div", { class: "mt-auto pa-3" }, [
                                createVNode(VImg, {
                                  src: _imports_0,
                                  "lazy-src": _imports_0$1,
                                  width: "140"
                                }),
                                createVNode("div", { class: "text-caption mt-4 text-white" }, [
                                  createVNode("span", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, aperiam repellat quisquam repellendus, molestiae culpa veritatis ex esse blanditiis necessitatibus libero nam omnis deserunt magni ipsum facere. Recusandae, eum! Est!")
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      sm: "8",
                      class: "h-100"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "w-100 h-100 d-flex flex-column justify-center pa-1 pa-md-5" }, [
                          createVNode("div", { class: "mt-auto" }, [
                            createVNode(_component_ClientShopBusinessCreate)
                          ]),
                          createVNode("div", { class: "mt-auto" }, [
                            createVNode(VContainer, null, {
                              default: withCtx(() => [
                                createVNode(VRow, { class: "justify-center" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createVNode(VDivider, { class: "mb-4" }),
                                          createVNode("div", { class: "d-flex justify-center ga-3 ga-md-10 text-caption" }, [
                                            unref(redirect) ? (openBlock(), createBlock(_component_NuxtLink, {
                                              key: 0,
                                              to: { name: (_a = unref(redirect)) == null ? void 0 : _a.name, params: unref(redirect).params },
                                              class: "text-black"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, "Return")
                                              ]),
                                              _: 1
                                            }, 8, ["to"])) : createCommentVNode("", true),
                                            (openBlock(), createBlock(Fragment, null, renderList(links, ({ title, route }) => {
                                              return createVNode("div", {
                                                class: "",
                                                key: route
                                              }, [
                                                createVNode(_component_NuxtLink, {
                                                  to: route,
                                                  class: "text-black"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", null, toDisplayString(title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to"])
                                              ]);
                                            }), 64))
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
          } else {
            return [
              createVNode(VRow, {
                "no-gutters": "",
                class: "h-100"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "4",
                    class: "d-none d-md-flex position-relative"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        height: "100%",
                        class: "position-sticky bg-transparent w-100 pa-0",
                        style: { "top": "0" },
                        flat: "",
                        rounded: "0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCarousel, {
                            "hide-delimiters": "",
                            continuous: "",
                            cycle: "",
                            interval: "10000",
                            height: "100%",
                            touch: false,
                            "show-arrows": false
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(shuffledImages), (img) => {
                                return openBlock(), createBlock(VCarouselItem, {
                                  height: "100%",
                                  key: img
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "w-100 h-100" }, [
                                      createVNode(VImg, {
                                        src: img,
                                        "lazy-src": img,
                                        height: "100%",
                                        cover: ""
                                      }, null, 8, ["src", "lazy-src"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "w-100 h-100 overlay position-absolute d-flex flex-column" }, [
                            createVNode("div", { class: "mt-auto pa-3" }, [
                              createVNode(VImg, {
                                src: _imports_0,
                                "lazy-src": _imports_0$1,
                                width: "140"
                              }),
                              createVNode("div", { class: "text-caption mt-4 text-white" }, [
                                createVNode("span", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, aperiam repellat quisquam repellendus, molestiae culpa veritatis ex esse blanditiis necessitatibus libero nam omnis deserunt magni ipsum facere. Recusandae, eum! Est!")
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    sm: "8",
                    class: "h-100"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "w-100 h-100 d-flex flex-column justify-center pa-1 pa-md-5" }, [
                        createVNode("div", { class: "mt-auto" }, [
                          createVNode(_component_ClientShopBusinessCreate)
                        ]),
                        createVNode("div", { class: "mt-auto" }, [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, { class: "justify-center" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createVNode(VDivider, { class: "mb-4" }),
                                        createVNode("div", { class: "d-flex justify-center ga-3 ga-md-10 text-caption" }, [
                                          unref(redirect) ? (openBlock(), createBlock(_component_NuxtLink, {
                                            key: 0,
                                            to: { name: (_a = unref(redirect)) == null ? void 0 : _a.name, params: unref(redirect).params },
                                            class: "text-black"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, "Return")
                                            ]),
                                            _: 1
                                          }, 8, ["to"])) : createCommentVNode("", true),
                                          (openBlock(), createBlock(Fragment, null, renderList(links, ({ title, route }) => {
                                            return createVNode("div", {
                                              class: "",
                                              key: route
                                            }, [
                                              createVNode(_component_NuxtLink, {
                                                to: route,
                                                class: "text-black"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, toDisplayString(title), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["to"])
                                            ]);
                                          }), 64))
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
                        ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create-business-account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createBusinessAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb505a9c"]]);
export {
  createBusinessAccount as default
};
//# sourceMappingURL=create-business-account-bVblAuPF.js.map
