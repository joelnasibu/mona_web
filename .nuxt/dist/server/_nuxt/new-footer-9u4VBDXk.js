import { _ as __nuxt_component_0 } from "./mid-screen-layout-b8tbDczG.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-kpaqSJk0.js";
import { mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { LucideMail, LucidePhone, LucideMapPin, LucideInstagram, LucideTwitter, LucideFacebook } from "lucide-vue-next";
import { _ as _export_sfc } from "../server.mjs";
import { V as VFooter } from "./VFooter-bKQd-Fpc.js";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { V as VDivider } from "./VDivider-Ce8J4Sp3.js";
const _sfc_main = {
  __name: "new-footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMidScreenLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VFooter, mergeProps({
        class: "py-4",
        color: "primary-dark"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CoreMidScreenLayout, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, {
                    class: "pa-0",
                    fluid: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          class: "footer-row",
                          "no-gutters": ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3 class="footer-title" data-v-4953f20c${_scopeId5}>contact</h3><p class="footer-text" data-v-4953f20c${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(LucideMail), {
                                      class: "footer-icon",
                                      size: "15"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` info@nairobi-markets.com </p><p class="footer-text" data-v-4953f20c${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(LucidePhone), {
                                      class: "footer-icon",
                                      size: "15"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` +254 10 7836370 </p><p class="footer-text" data-v-4953f20c${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(LucideMapPin), {
                                      class: "footer-icon",
                                      size: "15"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` The Nextgen Mall <br data-v-4953f20c${_scopeId5}> Mombasa Rd, Nairobi <br data-v-4953f20c${_scopeId5}> Suite 17 &amp; 18 </p>`);
                                  } else {
                                    return [
                                      createVNode("h3", { class: "footer-title" }, "contact"),
                                      createVNode("p", { class: "footer-text" }, [
                                        createVNode(unref(LucideMail), {
                                          class: "footer-icon",
                                          size: "15"
                                        }),
                                        createTextVNode(" info@nairobi-markets.com ")
                                      ]),
                                      createVNode("p", { class: "footer-text" }, [
                                        createVNode(unref(LucidePhone), {
                                          class: "footer-icon",
                                          size: "15"
                                        }),
                                        createTextVNode(" +254 10 7836370 ")
                                      ]),
                                      createVNode("p", { class: "footer-text" }, [
                                        createVNode(unref(LucideMapPin), {
                                          class: "footer-icon",
                                          size: "15"
                                        }),
                                        createTextVNode(" The Nextgen Mall "),
                                        createVNode("br"),
                                        createTextVNode(" Mombasa Rd, Nairobi "),
                                        createVNode("br"),
                                        createTextVNode(" Suite 17 & 18 ")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3 class="footer-title" data-v-4953f20c${_scopeId5}>about us</h3><div class="privacy-links" data-v-4953f20c${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      to: "/About",
                                      class: "privacy-link"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`About Nairobi Market`);
                                        } else {
                                          return [
                                            createTextVNode("About Nairobi Market")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      to: "/relations",
                                      class: "privacy-link"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Vendors Relations`);
                                        } else {
                                          return [
                                            createTextVNode("Vendors Relations")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("h3", { class: "footer-title" }, "about us"),
                                      createVNode("div", { class: "privacy-links" }, [
                                        createVNode(_component_NuxtLink, {
                                          to: "/About",
                                          class: "privacy-link"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("About Nairobi Market")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_NuxtLink, {
                                          to: "/relations",
                                          class: "privacy-link"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Vendors Relations")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3 class="footer-title" data-v-4953f20c${_scopeId5}>privacy</h3><div class="privacy-links" data-v-4953f20c${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      to: "/privacy-policy",
                                      class: "privacy-link"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Privacy Policy`);
                                        } else {
                                          return [
                                            createTextVNode("Privacy Policy")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      to: "/terms",
                                      class: "privacy-link"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Terms of Service`);
                                        } else {
                                          return [
                                            createTextVNode("Terms of Service")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("h3", { class: "footer-title" }, "privacy"),
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3 class="footer-title" data-v-4953f20c${_scopeId5}>follow us on</h3><div class="social-links mt-2" data-v-4953f20c${_scopeId5}><a href="https://www.instagram.com/mijinitech/" target="_blank" class="social-link" data-v-4953f20c${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(LucideInstagram), { size: "20" }, null, _parent6, _scopeId5));
                                    _push6(`</a><a href="https://x.com/mijinitech" target="_blank" class="social-link" data-v-4953f20c${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(LucideTwitter), { size: "20" }, null, _parent6, _scopeId5));
                                    _push6(`</a><a href="https://www.facebook.com/mijinitech/" target="_blank" class="social-link" data-v-4953f20c${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(LucideFacebook), { size: "20" }, null, _parent6, _scopeId5));
                                    _push6(`</a></div>`);
                                  } else {
                                    return [
                                      createVNode("h3", { class: "footer-title" }, "follow us on"),
                                      createVNode("div", { class: "social-links mt-2" }, [
                                        createVNode("a", {
                                          href: "https://www.instagram.com/mijinitech/",
                                          target: "_blank",
                                          class: "social-link"
                                        }, [
                                          createVNode(unref(LucideInstagram), { size: "20" })
                                        ]),
                                        createVNode("a", {
                                          href: "https://x.com/mijinitech",
                                          target: "_blank",
                                          class: "social-link"
                                        }, [
                                          createVNode(unref(LucideTwitter), { size: "20" })
                                        ]),
                                        createVNode("a", {
                                          href: "https://www.facebook.com/mijinitech/",
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "footer-title" }, "contact"),
                                    createVNode("p", { class: "footer-text" }, [
                                      createVNode(unref(LucideMail), {
                                        class: "footer-icon",
                                        size: "15"
                                      }),
                                      createTextVNode(" info@nairobi-markets.com ")
                                    ]),
                                    createVNode("p", { class: "footer-text" }, [
                                      createVNode(unref(LucidePhone), {
                                        class: "footer-icon",
                                        size: "15"
                                      }),
                                      createTextVNode(" +254 10 7836370 ")
                                    ]),
                                    createVNode("p", { class: "footer-text" }, [
                                      createVNode(unref(LucideMapPin), {
                                        class: "footer-icon",
                                        size: "15"
                                      }),
                                      createTextVNode(" The Nextgen Mall "),
                                      createVNode("br"),
                                      createTextVNode(" Mombasa Rd, Nairobi "),
                                      createVNode("br"),
                                      createTextVNode(" Suite 17 & 18 ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "footer-title" }, "about us"),
                                    createVNode("div", { class: "privacy-links" }, [
                                      createVNode(_component_NuxtLink, {
                                        to: "/About",
                                        class: "privacy-link"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("About Nairobi Market")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_NuxtLink, {
                                        to: "/relations",
                                        class: "privacy-link"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Vendors Relations")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "footer-title" }, "privacy"),
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
                                  sm: "6",
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "footer-title" }, "follow us on"),
                                    createVNode("div", { class: "social-links mt-2" }, [
                                      createVNode("a", {
                                        href: "https://www.instagram.com/mijinitech/",
                                        target: "_blank",
                                        class: "social-link"
                                      }, [
                                        createVNode(unref(LucideInstagram), { size: "20" })
                                      ]),
                                      createVNode("a", {
                                        href: "https://x.com/mijinitech",
                                        target: "_blank",
                                        class: "social-link"
                                      }, [
                                        createVNode(unref(LucideTwitter), { size: "20" })
                                      ]),
                                      createVNode("a", {
                                        href: "https://www.facebook.com/mijinitech/",
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, {
                          justify: "center",
                          class: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "text-center pa-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p class="footer-bottom-text text-caption" data-v-4953f20c${_scopeId5}> © 2025 Nairobi Markets. All rights reserved.<br data-v-4953f20c${_scopeId5}> Powered by <a href="https://mijinitech.com" target="_blank" class="footer-link" data-v-4953f20c${_scopeId5}>MijiniTech</a></p>`);
                                  } else {
                                    return [
                                      createVNode("p", { class: "footer-bottom-text text-caption" }, [
                                        createTextVNode(" © 2025 Nairobi Markets. All rights reserved."),
                                        createVNode("br"),
                                        createTextVNode(" Powered by "),
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "text-center pa-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "footer-bottom-text text-caption" }, [
                                      createTextVNode(" © 2025 Nairobi Markets. All rights reserved."),
                                      createVNode("br"),
                                      createTextVNode(" Powered by "),
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, {
                            class: "footer-row",
                            "no-gutters": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "footer-title" }, "contact"),
                                  createVNode("p", { class: "footer-text" }, [
                                    createVNode(unref(LucideMail), {
                                      class: "footer-icon",
                                      size: "15"
                                    }),
                                    createTextVNode(" info@nairobi-markets.com ")
                                  ]),
                                  createVNode("p", { class: "footer-text" }, [
                                    createVNode(unref(LucidePhone), {
                                      class: "footer-icon",
                                      size: "15"
                                    }),
                                    createTextVNode(" +254 10 7836370 ")
                                  ]),
                                  createVNode("p", { class: "footer-text" }, [
                                    createVNode(unref(LucideMapPin), {
                                      class: "footer-icon",
                                      size: "15"
                                    }),
                                    createTextVNode(" The Nextgen Mall "),
                                    createVNode("br"),
                                    createTextVNode(" Mombasa Rd, Nairobi "),
                                    createVNode("br"),
                                    createTextVNode(" Suite 17 & 18 ")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "footer-title" }, "about us"),
                                  createVNode("div", { class: "privacy-links" }, [
                                    createVNode(_component_NuxtLink, {
                                      to: "/About",
                                      class: "privacy-link"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("About Nairobi Market")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_NuxtLink, {
                                      to: "/relations",
                                      class: "privacy-link"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Vendors Relations")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "footer-title" }, "privacy"),
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
                                sm: "6",
                                md: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "footer-title" }, "follow us on"),
                                  createVNode("div", { class: "social-links mt-2" }, [
                                    createVNode("a", {
                                      href: "https://www.instagram.com/mijinitech/",
                                      target: "_blank",
                                      class: "social-link"
                                    }, [
                                      createVNode(unref(LucideInstagram), { size: "20" })
                                    ]),
                                    createVNode("a", {
                                      href: "https://x.com/mijinitech",
                                      target: "_blank",
                                      class: "social-link"
                                    }, [
                                      createVNode(unref(LucideTwitter), { size: "20" })
                                    ]),
                                    createVNode("a", {
                                      href: "https://www.facebook.com/mijinitech/",
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
                          createVNode(VDivider, { class: "my-4" }),
                          createVNode(VRow, {
                            justify: "center",
                            class: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                class: "text-center pa-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "footer-bottom-text text-caption" }, [
                                    createTextVNode(" © 2025 Nairobi Markets. All rights reserved."),
                                    createVNode("br"),
                                    createTextVNode(" Powered by "),
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, {
                      class: "pa-0",
                      fluid: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          class: "footer-row",
                          "no-gutters": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "footer-title" }, "contact"),
                                createVNode("p", { class: "footer-text" }, [
                                  createVNode(unref(LucideMail), {
                                    class: "footer-icon",
                                    size: "15"
                                  }),
                                  createTextVNode(" info@nairobi-markets.com ")
                                ]),
                                createVNode("p", { class: "footer-text" }, [
                                  createVNode(unref(LucidePhone), {
                                    class: "footer-icon",
                                    size: "15"
                                  }),
                                  createTextVNode(" +254 10 7836370 ")
                                ]),
                                createVNode("p", { class: "footer-text" }, [
                                  createVNode(unref(LucideMapPin), {
                                    class: "footer-icon",
                                    size: "15"
                                  }),
                                  createTextVNode(" The Nextgen Mall "),
                                  createVNode("br"),
                                  createTextVNode(" Mombasa Rd, Nairobi "),
                                  createVNode("br"),
                                  createTextVNode(" Suite 17 & 18 ")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "footer-title" }, "about us"),
                                createVNode("div", { class: "privacy-links" }, [
                                  createVNode(_component_NuxtLink, {
                                    to: "/About",
                                    class: "privacy-link"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("About Nairobi Market")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_NuxtLink, {
                                    to: "/relations",
                                    class: "privacy-link"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Vendors Relations")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "footer-title" }, "privacy"),
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
                              sm: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "footer-title" }, "follow us on"),
                                createVNode("div", { class: "social-links mt-2" }, [
                                  createVNode("a", {
                                    href: "https://www.instagram.com/mijinitech/",
                                    target: "_blank",
                                    class: "social-link"
                                  }, [
                                    createVNode(unref(LucideInstagram), { size: "20" })
                                  ]),
                                  createVNode("a", {
                                    href: "https://x.com/mijinitech",
                                    target: "_blank",
                                    class: "social-link"
                                  }, [
                                    createVNode(unref(LucideTwitter), { size: "20" })
                                  ]),
                                  createVNode("a", {
                                    href: "https://www.facebook.com/mijinitech/",
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
                        createVNode(VDivider, { class: "my-4" }),
                        createVNode(VRow, {
                          justify: "center",
                          class: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "text-center pa-0"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "footer-bottom-text text-caption" }, [
                                  createTextVNode(" © 2025 Nairobi Markets. All rights reserved."),
                                  createVNode("br"),
                                  createTextVNode(" Powered by "),
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CoreMidScreenLayout, null, {
                default: withCtx(() => [
                  createVNode(VContainer, {
                    class: "pa-0",
                    fluid: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        class: "footer-row",
                        "no-gutters": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "footer-title" }, "contact"),
                              createVNode("p", { class: "footer-text" }, [
                                createVNode(unref(LucideMail), {
                                  class: "footer-icon",
                                  size: "15"
                                }),
                                createTextVNode(" info@nairobi-markets.com ")
                              ]),
                              createVNode("p", { class: "footer-text" }, [
                                createVNode(unref(LucidePhone), {
                                  class: "footer-icon",
                                  size: "15"
                                }),
                                createTextVNode(" +254 10 7836370 ")
                              ]),
                              createVNode("p", { class: "footer-text" }, [
                                createVNode(unref(LucideMapPin), {
                                  class: "footer-icon",
                                  size: "15"
                                }),
                                createTextVNode(" The Nextgen Mall "),
                                createVNode("br"),
                                createTextVNode(" Mombasa Rd, Nairobi "),
                                createVNode("br"),
                                createTextVNode(" Suite 17 & 18 ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "footer-title" }, "about us"),
                              createVNode("div", { class: "privacy-links" }, [
                                createVNode(_component_NuxtLink, {
                                  to: "/About",
                                  class: "privacy-link"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("About Nairobi Market")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_NuxtLink, {
                                  to: "/relations",
                                  class: "privacy-link"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Vendors Relations")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "footer-title" }, "privacy"),
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
                            sm: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "footer-title" }, "follow us on"),
                              createVNode("div", { class: "social-links mt-2" }, [
                                createVNode("a", {
                                  href: "https://www.instagram.com/mijinitech/",
                                  target: "_blank",
                                  class: "social-link"
                                }, [
                                  createVNode(unref(LucideInstagram), { size: "20" })
                                ]),
                                createVNode("a", {
                                  href: "https://x.com/mijinitech",
                                  target: "_blank",
                                  class: "social-link"
                                }, [
                                  createVNode(unref(LucideTwitter), { size: "20" })
                                ]),
                                createVNode("a", {
                                  href: "https://www.facebook.com/mijinitech/",
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
                      createVNode(VDivider, { class: "my-4" }),
                      createVNode(VRow, {
                        justify: "center",
                        class: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            class: "text-center pa-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "footer-bottom-text text-caption" }, [
                                createTextVNode(" © 2025 Nairobi Markets. All rights reserved."),
                                createVNode("br"),
                                createTextVNode(" Powered by "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/shop/new-footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4953f20c"]]);
export {
  __nuxt_component_2 as _
};
//# sourceMappingURL=new-footer-9u4VBDXk.js.map
