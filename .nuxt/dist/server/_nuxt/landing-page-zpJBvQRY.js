import { _ as __nuxt_component_0$1 } from "./index-vJXezigf.js";
import { _ as _export_sfc, d as __nuxt_component_1 } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./nuxt-link-kpaqSJk0.js";
import { mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { LucideMail, LucidePhone, LucideMapPin, LucideInstagram, LucideTwitter, LucideFacebook } from "lucide-vue-next";
import { V as VFooter } from "./VFooter-bKQd-Fpc.js";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { V as VDivider } from "./VDivider-Ce8J4Sp3.js";
import { V as VApp, a as VMain } from "./VMain-YTg4QM3S.js";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "./categories-JvrMV5cl.js";
import "./useHelpers-9BVYUhTt.js";
import "date-fns";
import "date-fns/locale";
import "./cart-tyxrLAJF.js";
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
import "./rounded-jA9LRAgf.js";
import "./color-rZjm0Y7u.js";
import "./tag-pIHjuosL.js";
import "./resizeObserver-k8M9k6Xi.js";
/* empty css               */
import "./ssrBoot-xH9VG8QW.js";
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(VFooter, mergeProps({ class: "footer pt-8 pb-6" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              class: "px-16",
              style: { "max-width": "1200px", "margin": "0 auto" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, {
                    justify: "space-between",
                    align: "start",
                    class: "text-left",
                    style: { "gap": "0.25rem" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h3 class="footer-title" data-v-dc52198c${_scopeId4}>Contact</h3><p class="footer-text" data-v-dc52198c${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(LucideMail), {
                                class: "footer-icon",
                                size: "20"
                              }, null, _parent5, _scopeId4));
                              _push5(` info@nairobi-markets.com </p><p class="footer-text" data-v-dc52198c${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(LucidePhone), {
                                class: "footer-icon",
                                size: "20"
                              }, null, _parent5, _scopeId4));
                              _push5(` +254 10 7836370 </p><p class="footer-text" data-v-dc52198c${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(LucideMapPin), {
                                class: "footer-icon",
                                size: "20"
                              }, null, _parent5, _scopeId4));
                              _push5(` The Nextgen Mall Mombasa Road, Nairobi, <br data-v-dc52198c${_scopeId4}> Suite 17 &amp; 18 </p>`);
                            } else {
                              return [
                                createVNode("h3", { class: "footer-title" }, "Contact"),
                                createVNode("p", { class: "footer-text" }, [
                                  createVNode(unref(LucideMail), {
                                    class: "footer-icon",
                                    size: "20"
                                  }),
                                  createTextVNode(" info@nairobi-markets.com ")
                                ]),
                                createVNode("p", { class: "footer-text" }, [
                                  createVNode(unref(LucidePhone), {
                                    class: "footer-icon",
                                    size: "20"
                                  }),
                                  createTextVNode(" +254 10 7836370 ")
                                ]),
                                createVNode("p", { class: "footer-text" }, [
                                  createVNode(unref(LucideMapPin), {
                                    class: "footer-icon",
                                    size: "20"
                                  }),
                                  createTextVNode(" The Nextgen Mall Mombasa Road, Nairobi, "),
                                  createVNode("br"),
                                  createTextVNode(" Suite 17 & 18 ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h3 class="footer-title" data-v-dc52198c${_scopeId4}>About</h3><p class="footer-text" data-v-dc52198c${_scopeId4}> Nairobi Markets connects you with the city&#39;s vibrant markets, cultural trails, and unique shopping experiences. Explore, shop, and enjoy authentic Kenyan life. </p>`);
                            } else {
                              return [
                                createVNode("h3", { class: "footer-title" }, "About"),
                                createVNode("p", { class: "footer-text" }, " Nairobi Markets connects you with the city's vibrant markets, cultural trails, and unique shopping experiences. Explore, shop, and enjoy authentic Kenyan life. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h3 class="footer-title" data-v-dc52198c${_scopeId4}>Privacy</h3><div class="privacy-links" data-v-dc52198c${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_NuxtLink, {
                                to: "/privacy-policy",
                                class: "privacy-link"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Privacy Policy`);
                                  } else {
                                    return [
                                      createTextVNode("Privacy Policy")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_NuxtLink, {
                                to: "/terms",
                                class: "privacy-link"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Terms of Service`);
                                  } else {
                                    return [
                                      createTextVNode("Terms of Service")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("h3", { class: "footer-title" }, "Privacy"),
                                createVNode("div", { class: "privacy-links" }, [
                                  createVNode(_component_NuxtLink, {
                                    to: "/privacy-policy",
                                    class: "privacy-link"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Privacy Policy")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_NuxtLink, {
                                    to: "/terms",
                                    class: "privacy-link"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Terms of Service")
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
                          md: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="social-links mt-4" data-v-dc52198c${_scopeId4}><a href="#" target="_blank" class="social-link" data-v-dc52198c${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(LucideInstagram), { size: "20" }, null, _parent5, _scopeId4));
                              _push5(`</a><a href="#" target="_blank" class="social-link" data-v-dc52198c${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(LucideTwitter), { size: "20" }, null, _parent5, _scopeId4));
                              _push5(`</a><a href="#" target="_blank" class="social-link" data-v-dc52198c${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(LucideFacebook), { size: "20" }, null, _parent5, _scopeId4));
                              _push5(`</a></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "social-links mt-4" }, [
                                  createVNode("a", {
                                    href: "#",
                                    target: "_blank",
                                    class: "social-link"
                                  }, [
                                    createVNode(unref(LucideInstagram), { size: "20" })
                                  ]),
                                  createVNode("a", {
                                    href: "#",
                                    target: "_blank",
                                    class: "social-link"
                                  }, [
                                    createVNode(unref(LucideTwitter), { size: "20" })
                                  ]),
                                  createVNode("a", {
                                    href: "#",
                                    target: "_blank",
                                    class: "social-link"
                                  }, [
                                    createVNode(unref(LucideFacebook), { size: "20" })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "footer-title" }, "Contact"),
                              createVNode("p", { class: "footer-text" }, [
                                createVNode(unref(LucideMail), {
                                  class: "footer-icon",
                                  size: "20"
                                }),
                                createTextVNode(" info@nairobi-markets.com ")
                              ]),
                              createVNode("p", { class: "footer-text" }, [
                                createVNode(unref(LucidePhone), {
                                  class: "footer-icon",
                                  size: "20"
                                }),
                                createTextVNode(" +254 10 7836370 ")
                              ]),
                              createVNode("p", { class: "footer-text" }, [
                                createVNode(unref(LucideMapPin), {
                                  class: "footer-icon",
                                  size: "20"
                                }),
                                createTextVNode(" The Nextgen Mall Mombasa Road, Nairobi, "),
                                createVNode("br"),
                                createTextVNode(" Suite 17 & 18 ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "footer-title" }, "About"),
                              createVNode("p", { class: "footer-text" }, " Nairobi Markets connects you with the city's vibrant markets, cultural trails, and unique shopping experiences. Explore, shop, and enjoy authentic Kenyan life. ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "footer-title" }, "Privacy"),
                              createVNode("div", { class: "privacy-links" }, [
                                createVNode(_component_NuxtLink, {
                                  to: "/privacy-policy",
                                  class: "privacy-link"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Privacy Policy")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_NuxtLink, {
                                  to: "/terms",
                                  class: "privacy-link"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Terms of Service")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "social-links mt-4" }, [
                                createVNode("a", {
                                  href: "#",
                                  target: "_blank",
                                  class: "social-link"
                                }, [
                                  createVNode(unref(LucideInstagram), { size: "20" })
                                ]),
                                createVNode("a", {
                                  href: "#",
                                  target: "_blank",
                                  class: "social-link"
                                }, [
                                  createVNode(unref(LucideTwitter), { size: "20" })
                                ]),
                                createVNode("a", {
                                  href: "#",
                                  target: "_blank",
                                  class: "social-link"
                                }, [
                                  createVNode(unref(LucideFacebook), { size: "20" })
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
                  _push3(ssrRenderComponent(VDivider, { class: "my-6" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, { justify: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "text-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p class="footer-bottom-text" data-v-dc52198c${_scopeId4}> © 2025 Nairobi Markets. All rights reserved. Designed by <a href="https://mijinitech.com" target="_blank" class="footer-link" data-v-dc52198c${_scopeId4}>MijiniTech</a></p>`);
                            } else {
                              return [
                                createVNode("p", { class: "footer-bottom-text" }, [
                                  createTextVNode(" © 2025 Nairobi Markets. All rights reserved. Designed by "),
                                  createVNode("a", {
                                    href: "https://mijinitech.com",
                                    target: "_blank",
                                    class: "footer-link"
                                  }, "MijiniTech")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "footer-bottom-text" }, [
                                createTextVNode(" © 2025 Nairobi Markets. All rights reserved. Designed by "),
                                createVNode("a", {
                                  href: "https://mijinitech.com",
                                  target: "_blank",
                                  class: "footer-link"
                                }, "MijiniTech")
                              ])
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
                    createVNode(VRow, {
                      justify: "space-between",
                      align: "start",
                      class: "text-left",
                      style: { "gap": "0.25rem" }
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h3", { class: "footer-title" }, "Contact"),
                            createVNode("p", { class: "footer-text" }, [
                              createVNode(unref(LucideMail), {
                                class: "footer-icon",
                                size: "20"
                              }),
                              createTextVNode(" info@nairobi-markets.com ")
                            ]),
                            createVNode("p", { class: "footer-text" }, [
                              createVNode(unref(LucidePhone), {
                                class: "footer-icon",
                                size: "20"
                              }),
                              createTextVNode(" +254 10 7836370 ")
                            ]),
                            createVNode("p", { class: "footer-text" }, [
                              createVNode(unref(LucideMapPin), {
                                class: "footer-icon",
                                size: "20"
                              }),
                              createTextVNode(" The Nextgen Mall Mombasa Road, Nairobi, "),
                              createVNode("br"),
                              createTextVNode(" Suite 17 & 18 ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h3", { class: "footer-title" }, "About"),
                            createVNode("p", { class: "footer-text" }, " Nairobi Markets connects you with the city's vibrant markets, cultural trails, and unique shopping experiences. Explore, shop, and enjoy authentic Kenyan life. ")
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("h3", { class: "footer-title" }, "Privacy"),
                            createVNode("div", { class: "privacy-links" }, [
                              createVNode(_component_NuxtLink, {
                                to: "/privacy-policy",
                                class: "privacy-link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Privacy Policy")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_NuxtLink, {
                                to: "/terms",
                                class: "privacy-link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Terms of Service")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "social-links mt-4" }, [
                              createVNode("a", {
                                href: "#",
                                target: "_blank",
                                class: "social-link"
                              }, [
                                createVNode(unref(LucideInstagram), { size: "20" })
                              ]),
                              createVNode("a", {
                                href: "#",
                                target: "_blank",
                                class: "social-link"
                              }, [
                                createVNode(unref(LucideTwitter), { size: "20" })
                              ]),
                              createVNode("a", {
                                href: "#",
                                target: "_blank",
                                class: "social-link"
                              }, [
                                createVNode(unref(LucideFacebook), { size: "20" })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider, { class: "my-6" }),
                    createVNode(VRow, { justify: "center" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "footer-bottom-text" }, [
                              createTextVNode(" © 2025 Nairobi Markets. All rights reserved. Designed by "),
                              createVNode("a", {
                                href: "https://mijinitech.com",
                                target: "_blank",
                                class: "footer-link"
                              }, "MijiniTech")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VContainer, {
                class: "px-16",
                style: { "max-width": "1200px", "margin": "0 auto" }
              }, {
                default: withCtx(() => [
                  createVNode(VRow, {
                    justify: "space-between",
                    align: "start",
                    class: "text-left",
                    style: { "gap": "0.25rem" }
                  }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "footer-title" }, "Contact"),
                          createVNode("p", { class: "footer-text" }, [
                            createVNode(unref(LucideMail), {
                              class: "footer-icon",
                              size: "20"
                            }),
                            createTextVNode(" info@nairobi-markets.com ")
                          ]),
                          createVNode("p", { class: "footer-text" }, [
                            createVNode(unref(LucidePhone), {
                              class: "footer-icon",
                              size: "20"
                            }),
                            createTextVNode(" +254 10 7836370 ")
                          ]),
                          createVNode("p", { class: "footer-text" }, [
                            createVNode(unref(LucideMapPin), {
                              class: "footer-icon",
                              size: "20"
                            }),
                            createTextVNode(" The Nextgen Mall Mombasa Road, Nairobi, "),
                            createVNode("br"),
                            createTextVNode(" Suite 17 & 18 ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "footer-title" }, "About"),
                          createVNode("p", { class: "footer-text" }, " Nairobi Markets connects you with the city's vibrant markets, cultural trails, and unique shopping experiences. Explore, shop, and enjoy authentic Kenyan life. ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("h3", { class: "footer-title" }, "Privacy"),
                          createVNode("div", { class: "privacy-links" }, [
                            createVNode(_component_NuxtLink, {
                              to: "/privacy-policy",
                              class: "privacy-link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Privacy Policy")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_NuxtLink, {
                              to: "/terms",
                              class: "privacy-link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Terms of Service")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        md: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "social-links mt-4" }, [
                            createVNode("a", {
                              href: "#",
                              target: "_blank",
                              class: "social-link"
                            }, [
                              createVNode(unref(LucideInstagram), { size: "20" })
                            ]),
                            createVNode("a", {
                              href: "#",
                              target: "_blank",
                              class: "social-link"
                            }, [
                              createVNode(unref(LucideTwitter), { size: "20" })
                            ]),
                            createVNode("a", {
                              href: "#",
                              target: "_blank",
                              class: "social-link"
                            }, [
                              createVNode(unref(LucideFacebook), { size: "20" })
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider, { class: "my-6" }),
                  createVNode(VRow, { justify: "center" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "footer-bottom-text" }, [
                            createTextVNode(" © 2025 Nairobi Markets. All rights reserved. Designed by "),
                            createVNode("a", {
                              href: "https://mijinitech.com",
                              target: "_blank",
                              class: "footer-link"
                            }, "MijiniTech")
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
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dc52198c"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientAppBar = __nuxt_component_0$1;
  const _component_NuxtPage = __nuxt_component_1;
  const _component_Footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(VApp, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ClientAppBar, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(VMain, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NuxtPage, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NuxtPage)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Footer, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ClientAppBar),
          createVNode(VDivider),
          createVNode(VMain, null, {
            default: withCtx(() => [
              createVNode(_component_NuxtPage)
            ]),
            _: 1
          }),
          createVNode(_component_Footer)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/landing-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  landingPage as default
};
//# sourceMappingURL=landing-page-zpJBvQRY.js.map
