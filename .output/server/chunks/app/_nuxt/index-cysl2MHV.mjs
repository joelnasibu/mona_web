import { _ as __nuxt_component_0$1 } from './nuxt-link-kpaqSJk0.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, unref, ref, resolveComponent } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import { V as VHover } from './VHover-3XLtHLBt.mjs';
import { V as VImg } from './VImg-_57rVikU.mjs';
import { Heart, ShoppingCart } from 'lucide-vue-next';
import { V as VCarousel, a as VCarouselItem } from './VCarouselItem-KQpsENmj.mjs';
import { V as VIcon } from './index-3E7yy1qS.mjs';
import { V as VBtn } from './VBtn-yNf12l4D.mjs';
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
import './tag-pIHjuosL.mjs';
import './delay-5iXTA9KV.mjs';
import './color-rZjm0Y7u.mjs';
import './rounded-jA9LRAgf.mjs';
import './index-q-0zZOOG.mjs';
import './VWindowItem-BpMO-iOS.mjs';
import './lazy-8QocgoLY.mjs';
import './ssrBoot-xH9VG8QW.mjs';
import './position-AkaJaFJy.mjs';
import './resizeObserver-k8M9k6Xi.mjs';

const _sfc_main$8 = {
  __name: "Latest-Products",
  __ssrInlineRender: true,
  setup(__props) {
    const sections = [
      {
        title: "New Arrivals",
        products: [
          { img: "/images/categories/women-fashion.jpeg", price: 25 },
          { img: "/images/categories/movies.jpeg", price: 18 },
          { img: "/images/categories/home.jpeg", price: 20 }
        ]
      },
      {
        title: "Top Ranking",
        products: [
          { img: "/images/categories/computers.jpeg", price: 50, unitsLeft: 10 },
          { img: "/images/categories/industrial.jpeg", price: 30, unitsLeft: 5 },
          { img: "/images/categories/health.jpeg", price: 45, unitsLeft: 8 }
        ]
      },
      {
        title: "Personal Protective Equipment",
        products: [
          { img: "/images/categories/boys-fashion.jpeg", price: 12 },
          { img: "/images/categories/baby-clothes.jpeg", price: 18 },
          { img: "/images/categories/art.jpeg", price: 22 }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "pa-6"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex flex-column mb-6" data-v-077eb676${_scopeId}><h2 class="text-h5 font-weight-bold mb-2" data-v-077eb676${_scopeId}>Latest Products</h2><div class="bg-grey-lighten-2" style="${ssrRenderStyle({ "height": "2px", "width": "120px" })}" data-v-077eb676${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(VRow, {
              dense: "",
              class: "justify-space-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(sections, (section, sIndex) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: sIndex,
                      cols: "12",
                      md: "4",
                      class: "pa-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VContainer, {
                            fluid: "",
                            class: "pa-3 section-container"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-h6 font-weight-bold mb-3" data-v-077eb676${_scopeId4}>${ssrInterpolate(section.title)}</div><div class="d-flex justify-center nested-row" data-v-077eb676${_scopeId4}><!--[-->`);
                                ssrRenderList(section.products, (product, pIndex) => {
                                  _push5(`<div class="d-flex flex-column align-center nested-product" data-v-077eb676${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VHover, null, {
                                    default: withCtx(({ isHovering, props }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(VImg, mergeProps({ ref_for: true }, props, {
                                          src: product.img,
                                          height: "80",
                                          width: "80",
                                          cover: "",
                                          class: "rounded-lg mb-1 transition-ease-in-out cursor-pointer",
                                          elevation: isHovering ? 6 : 0
                                        }), null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(VImg, mergeProps({ ref_for: true }, props, {
                                            src: product.img,
                                            height: "80",
                                            width: "80",
                                            cover: "",
                                            class: "rounded-lg mb-1 transition-ease-in-out cursor-pointer",
                                            elevation: isHovering ? 6 : 0
                                          }), null, 16, ["src", "elevation"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`<div class="text-center text-caption mb-1" data-v-077eb676${_scopeId4}>$ ${ssrInterpolate(product.price)}</div>`);
                                  if (section.title === "New Arrivals") {
                                    _push5(`<div class="text-orange-darken-2 text-body-2" data-v-077eb676${_scopeId4}> Trending </div>`);
                                  } else if (section.title === "Top Ranking") {
                                    _push5(`<div class="text-grey-darken-2 text-body-2" data-v-077eb676${_scopeId4}>${ssrInterpolate(product.unitsLeft)} left </div>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(section.title), 1),
                                  createVNode("div", { class: "d-flex justify-center nested-row" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(section.products, (product, pIndex) => {
                                      return openBlock(), createBlock("div", {
                                        key: pIndex,
                                        class: "d-flex flex-column align-center nested-product"
                                      }, [
                                        createVNode(VHover, null, {
                                          default: withCtx(({ isHovering, props }) => [
                                            createVNode(VImg, mergeProps({ ref_for: true }, props, {
                                              src: product.img,
                                              height: "80",
                                              width: "80",
                                              cover: "",
                                              class: "rounded-lg mb-1 transition-ease-in-out cursor-pointer",
                                              elevation: isHovering ? 6 : 0
                                            }), null, 16, ["src", "elevation"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("div", { class: "text-center text-caption mb-1" }, "$ " + toDisplayString(product.price), 1),
                                        section.title === "New Arrivals" ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "text-orange-darken-2 text-body-2"
                                        }, " Trending ")) : section.title === "Top Ranking" ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "text-grey-darken-2 text-body-2"
                                        }, toDisplayString(product.unitsLeft) + " left ", 1)) : createCommentVNode("", true)
                                      ]);
                                    }), 128))
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VContainer, {
                              fluid: "",
                              class: "pa-3 section-container"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(section.title), 1),
                                createVNode("div", { class: "d-flex justify-center nested-row" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(section.products, (product, pIndex) => {
                                    return openBlock(), createBlock("div", {
                                      key: pIndex,
                                      class: "d-flex flex-column align-center nested-product"
                                    }, [
                                      createVNode(VHover, null, {
                                        default: withCtx(({ isHovering, props }) => [
                                          createVNode(VImg, mergeProps({ ref_for: true }, props, {
                                            src: product.img,
                                            height: "80",
                                            width: "80",
                                            cover: "",
                                            class: "rounded-lg mb-1 transition-ease-in-out cursor-pointer",
                                            elevation: isHovering ? 6 : 0
                                          }), null, 16, ["src", "elevation"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("div", { class: "text-center text-caption mb-1" }, "$ " + toDisplayString(product.price), 1),
                                      section.title === "New Arrivals" ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "text-orange-darken-2 text-body-2"
                                      }, " Trending ")) : section.title === "Top Ranking" ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "text-grey-darken-2 text-body-2"
                                      }, toDisplayString(product.unitsLeft) + " left ", 1)) : createCommentVNode("", true)
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(sections, (section, sIndex) => {
                      return createVNode(VCol, {
                        key: sIndex,
                        cols: "12",
                        md: "4",
                        class: "pa-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VContainer, {
                            fluid: "",
                            class: "pa-3 section-container"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(section.title), 1),
                              createVNode("div", { class: "d-flex justify-center nested-row" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(section.products, (product, pIndex) => {
                                  return openBlock(), createBlock("div", {
                                    key: pIndex,
                                    class: "d-flex flex-column align-center nested-product"
                                  }, [
                                    createVNode(VHover, null, {
                                      default: withCtx(({ isHovering, props }) => [
                                        createVNode(VImg, mergeProps({ ref_for: true }, props, {
                                          src: product.img,
                                          height: "80",
                                          width: "80",
                                          cover: "",
                                          class: "rounded-lg mb-1 transition-ease-in-out cursor-pointer",
                                          elevation: isHovering ? 6 : 0
                                        }), null, 16, ["src", "elevation"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "text-center text-caption mb-1" }, "$ " + toDisplayString(product.price), 1),
                                    section.title === "New Arrivals" ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "text-orange-darken-2 text-body-2"
                                    }, " Trending ")) : section.title === "Top Ranking" ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "text-grey-darken-2 text-body-2"
                                    }, toDisplayString(product.unitsLeft) + " left ", 1)) : createCommentVNode("", true)
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 pl-4" data-v-077eb676${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/products",
              class: "text-orange-darken-2 font-weight-medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` see more.. `);
                } else {
                  return [
                    createTextVNode(" see more.. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex flex-column mb-6" }, [
                createVNode("h2", { class: "text-h5 font-weight-bold mb-2" }, "Latest Products"),
                createVNode("div", {
                  class: "bg-grey-lighten-2",
                  style: { "height": "2px", "width": "120px" }
                })
              ]),
              createVNode(VRow, {
                dense: "",
                class: "justify-space-between"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(sections, (section, sIndex) => {
                    return createVNode(VCol, {
                      key: sIndex,
                      cols: "12",
                      md: "4",
                      class: "pa-2"
                    }, {
                      default: withCtx(() => [
                        createVNode(VContainer, {
                          fluid: "",
                          class: "pa-3 section-container"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-h6 font-weight-bold mb-3" }, toDisplayString(section.title), 1),
                            createVNode("div", { class: "d-flex justify-center nested-row" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(section.products, (product, pIndex) => {
                                return openBlock(), createBlock("div", {
                                  key: pIndex,
                                  class: "d-flex flex-column align-center nested-product"
                                }, [
                                  createVNode(VHover, null, {
                                    default: withCtx(({ isHovering, props }) => [
                                      createVNode(VImg, mergeProps({ ref_for: true }, props, {
                                        src: product.img,
                                        height: "80",
                                        width: "80",
                                        cover: "",
                                        class: "rounded-lg mb-1 transition-ease-in-out cursor-pointer",
                                        elevation: isHovering ? 6 : 0
                                      }), null, 16, ["src", "elevation"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "text-center text-caption mb-1" }, "$ " + toDisplayString(product.price), 1),
                                  section.title === "New Arrivals" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-orange-darken-2 text-body-2"
                                  }, " Trending ")) : section.title === "Top Ranking" ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "text-grey-darken-2 text-body-2"
                                  }, toDisplayString(product.unitsLeft) + " left ", 1)) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode("div", { class: "mt-6 pl-4" }, [
                createVNode(_component_NuxtLink, {
                  to: "/products",
                  class: "text-orange-darken-2 font-weight-medium"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" see more.. ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Latest-Products.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-077eb676"]]);
const _sfc_main$7 = {
  __name: "Exclusive",
  __ssrInlineRender: true,
  setup(__props) {
    const products = [
      { name: "Electronics", price: 10, img: "/images/categories/electronics.jpeg" },
      { name: "Automotive", price: 20, img: "/images/categories/automotive.jpeg" },
      { name: "Beauty", price: 30, img: "/images/categories/beauty.jpeg" },
      { name: "Computers", price: 40, img: "/images/categories/computers.jpeg" },
      { name: "Art", price: 50, img: "/images/categories/art.jpeg" },
      { name: "Home Decor", price: 60, img: "/images/categories/home-decor.jpeg" },
      { name: "Fashion", price: 70, img: "/images/categories/fashion.jpeg" },
      { name: "Toys", price: 80, img: "/images/categories/toys.jpeg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "pa-6"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-5b978d8f${_scopeId}><div class="d-flex flex-column mb-6" data-v-5b978d8f${_scopeId}><h2 class="text-h5 font-weight-bold mb-2" data-v-5b978d8f${_scopeId}>Exclusive Offers/Deals</h2><div class="bg-grey-lighten-2" style="${ssrRenderStyle({ "height": "2px", "width": "100%", "max-width": "600px" })}" data-v-5b978d8f${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(VRow, {
              dense: "",
              class: "px-4 justify-space-between",
              style: { "row-gap": "24px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(products, (product, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: index,
                      cols: "12",
                      sm: "6",
                      md: "6",
                      lg: "3",
                      class: "d-flex flex-column align-center px-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VImg, {
                            src: product.img,
                            "lazy-src": product.img,
                            height: "200",
                            width: "100%",
                            cover: "",
                            class: "rounded-lg hoverable mb-3"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="d-flex justify-space-between align-center w-100" data-v-5b978d8f${_scopeId3}><div data-v-5b978d8f${_scopeId3}><div class="text-caption text-grey-darken-1" data-v-5b978d8f${_scopeId3}>$ ${ssrInterpolate(product.price)}</div><div class="text-body-2 font-weight-medium" data-v-5b978d8f${_scopeId3}>${ssrInterpolate(product.name)}</div></div><div class="d-flex gap-2" data-v-5b978d8f${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Heart), {
                            size: "18",
                            class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(ShoppingCart), {
                            size: "18",
                            class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode(VImg, {
                              src: product.img,
                              "lazy-src": product.img,
                              height: "200",
                              width: "100%",
                              cover: "",
                              class: "rounded-lg hoverable mb-3"
                            }, null, 8, ["src", "lazy-src"]),
                            createVNode("div", { class: "d-flex justify-space-between align-center w-100" }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "text-caption text-grey-darken-1" }, "$ " + toDisplayString(product.price), 1),
                                createVNode("div", { class: "text-body-2 font-weight-medium" }, toDisplayString(product.name), 1)
                              ]),
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode(unref(Heart), {
                                  size: "18",
                                  class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                                }),
                                createVNode(unref(ShoppingCart), {
                                  size: "18",
                                  class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(products, (product, index) => {
                      return createVNode(VCol, {
                        key: index,
                        cols: "12",
                        sm: "6",
                        md: "6",
                        lg: "3",
                        class: "d-flex flex-column align-center px-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: product.img,
                            "lazy-src": product.img,
                            height: "200",
                            width: "100%",
                            cover: "",
                            class: "rounded-lg hoverable mb-3"
                          }, null, 8, ["src", "lazy-src"]),
                          createVNode("div", { class: "d-flex justify-space-between align-center w-100" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-caption text-grey-darken-1" }, "$ " + toDisplayString(product.price), 1),
                              createVNode("div", { class: "text-body-2 font-weight-medium" }, toDisplayString(product.name), 1)
                            ]),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(unref(Heart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                              }),
                              createVNode(unref(ShoppingCart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                              })
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 pl-4" data-v-5b978d8f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/products",
              class: "text-orange-darken-2 font-weight-medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` see more.. `);
                } else {
                  return [
                    createTextVNode(" see more.. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "d-flex flex-column mb-6" }, [
                  createVNode("h2", { class: "text-h5 font-weight-bold mb-2" }, "Exclusive Offers/Deals"),
                  createVNode("div", {
                    class: "bg-grey-lighten-2",
                    style: { "height": "2px", "width": "100%", "max-width": "600px" }
                  })
                ]),
                createVNode(VRow, {
                  dense: "",
                  class: "px-4 justify-space-between",
                  style: { "row-gap": "24px" }
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(products, (product, index) => {
                      return createVNode(VCol, {
                        key: index,
                        cols: "12",
                        sm: "6",
                        md: "6",
                        lg: "3",
                        class: "d-flex flex-column align-center px-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: product.img,
                            "lazy-src": product.img,
                            height: "200",
                            width: "100%",
                            cover: "",
                            class: "rounded-lg hoverable mb-3"
                          }, null, 8, ["src", "lazy-src"]),
                          createVNode("div", { class: "d-flex justify-space-between align-center w-100" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-caption text-grey-darken-1" }, "$ " + toDisplayString(product.price), 1),
                              createVNode("div", { class: "text-body-2 font-weight-medium" }, toDisplayString(product.name), 1)
                            ]),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(unref(Heart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                              }),
                              createVNode(unref(ShoppingCart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                              })
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mt-6 pl-4" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/products",
                    class: "text-orange-darken-2 font-weight-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" see more.. ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Exclusive.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-5b978d8f"]]);
const _sfc_main$6 = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const banners = [
      "/images/banners/1.jpg",
      "/images/banners/2.jpg",
      "/images/banners/3.jpg",
      "/images/banners/1.jpg"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "pa-6"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCarousel, {
              "show-arrows": false,
              "hide-delimiters": "",
              cycle: "",
              height: "300",
              interval: "3000"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(banners, (banner, index) => {
                    _push3(ssrRenderComponent(VCarouselItem, { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VImg, {
                            src: banner,
                            cover: "",
                            height: "300",
                            class: "rounded-lg"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VImg, {
                              src: banner,
                              cover: "",
                              height: "300",
                              class: "rounded-lg"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(banners, (banner, index) => {
                      return createVNode(VCarouselItem, { key: index }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: banner,
                            cover: "",
                            height: "300",
                            class: "rounded-lg"
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCarousel, {
                "show-arrows": false,
                "hide-delimiters": "",
                cycle: "",
                height: "300",
                interval: "3000"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(banners, (banner, index) => {
                    return createVNode(VCarouselItem, { key: index }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          src: banner,
                          cover: "",
                          height: "300",
                          class: "rounded-lg"
                        }, null, 8, ["src"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f47a532e"]]);
const _sfc_main$5 = {
  __name: "Deals",
  __ssrInlineRender: true,
  setup(__props) {
    const products = [
      { name: "Electronics", price: 10, img: "/images/categories/electronics.jpeg" },
      { name: "Automotive", price: 20, img: "/images/categories/automotive.jpeg" },
      { name: "Beauty", price: 30, img: "/images/categories/beauty.jpeg" },
      { name: "Computers", price: 40, img: "/images/categories/computers.jpeg" },
      { name: "Art", price: 50, img: "/images/categories/art.jpeg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "pa-6"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-81eb10b0${_scopeId}><div class="d-flex flex-column mb-6" data-v-81eb10b0${_scopeId}><h2 class="text-h5 font-weight-bold mb-2" data-v-81eb10b0${_scopeId}>Deals of the week</h2><div class="bg-grey-lighten-2" style="${ssrRenderStyle({ "height": "2px", "width": "100%", "max-width": "600px" })}" data-v-81eb10b0${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(VRow, {
              dense: "",
              class: "px-4 justify-space-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(products, (product, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: index,
                      cols: "12",
                      sm: "6",
                      md: "2",
                      class: "d-flex flex-column align-center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VImg, {
                            src: product.img,
                            "lazy-src": product.img,
                            height: "200",
                            width: "100%",
                            cover: "",
                            class: "rounded-lg hoverable mb-3"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="d-flex justify-space-between align-center w-100" data-v-81eb10b0${_scopeId3}><div data-v-81eb10b0${_scopeId3}><div class="text-caption text-grey-darken-1" data-v-81eb10b0${_scopeId3}>$ ${ssrInterpolate(product.price)}</div><div class="text-body-2 font-weight-medium" data-v-81eb10b0${_scopeId3}>${ssrInterpolate(product.name)}</div></div><div class="d-flex gap-2" data-v-81eb10b0${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Heart), {
                            size: "18",
                            class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(ShoppingCart), {
                            size: "18",
                            class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode(VImg, {
                              src: product.img,
                              "lazy-src": product.img,
                              height: "200",
                              width: "100%",
                              cover: "",
                              class: "rounded-lg hoverable mb-3"
                            }, null, 8, ["src", "lazy-src"]),
                            createVNode("div", { class: "d-flex justify-space-between align-center w-100" }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "text-caption text-grey-darken-1" }, "$ " + toDisplayString(product.price), 1),
                                createVNode("div", { class: "text-body-2 font-weight-medium" }, toDisplayString(product.name), 1)
                              ]),
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode(unref(Heart), {
                                  size: "18",
                                  class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                                }),
                                createVNode(unref(ShoppingCart), {
                                  size: "18",
                                  class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(products, (product, index) => {
                      return createVNode(VCol, {
                        key: index,
                        cols: "12",
                        sm: "6",
                        md: "2",
                        class: "d-flex flex-column align-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: product.img,
                            "lazy-src": product.img,
                            height: "200",
                            width: "100%",
                            cover: "",
                            class: "rounded-lg hoverable mb-3"
                          }, null, 8, ["src", "lazy-src"]),
                          createVNode("div", { class: "d-flex justify-space-between align-center w-100" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-caption text-grey-darken-1" }, "$ " + toDisplayString(product.price), 1),
                              createVNode("div", { class: "text-body-2 font-weight-medium" }, toDisplayString(product.name), 1)
                            ]),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(unref(Heart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                              }),
                              createVNode(unref(ShoppingCart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                              })
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 pl-4" data-v-81eb10b0${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/products",
              class: "text-orange-darken-2 font-weight-medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` see more.. `);
                } else {
                  return [
                    createTextVNode(" see more.. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "d-flex flex-column mb-6" }, [
                  createVNode("h2", { class: "text-h5 font-weight-bold mb-2" }, "Deals of the week"),
                  createVNode("div", {
                    class: "bg-grey-lighten-2",
                    style: { "height": "2px", "width": "100%", "max-width": "600px" }
                  })
                ]),
                createVNode(VRow, {
                  dense: "",
                  class: "px-4 justify-space-between"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(products, (product, index) => {
                      return createVNode(VCol, {
                        key: index,
                        cols: "12",
                        sm: "6",
                        md: "2",
                        class: "d-flex flex-column align-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: product.img,
                            "lazy-src": product.img,
                            height: "200",
                            width: "100%",
                            cover: "",
                            class: "rounded-lg hoverable mb-3"
                          }, null, 8, ["src", "lazy-src"]),
                          createVNode("div", { class: "d-flex justify-space-between align-center w-100" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-caption text-grey-darken-1" }, "$ " + toDisplayString(product.price), 1),
                              createVNode("div", { class: "text-body-2 font-weight-medium" }, toDisplayString(product.name), 1)
                            ]),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(unref(Heart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                              }),
                              createVNode(unref(ShoppingCart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                              })
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mt-6 pl-4" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/products",
                    class: "text-orange-darken-2 font-weight-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" see more.. ")
                    ]),
                    _: 1
                  })
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Deals.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-81eb10b0"]]);
const _sfc_main$4 = {
  __name: "Just-Foryou",
  __ssrInlineRender: true,
  setup(__props) {
    const products = [
      { name: "Electronics", price: 10, img: "/images/categories/electronics.jpeg", rating: 5 },
      { name: "Automotive", price: 20, img: "/images/categories/automotive.jpeg", rating: 4 },
      { name: "Beauty", price: 30, img: "/images/categories/beauty.jpeg", rating: 5 },
      { name: "Computers", price: 40, img: "/images/categories/computers.jpeg", rating: 4 },
      { name: "Art", price: 50, img: "/images/categories/art.jpeg", rating: 5 },
      { name: "Home Decor", price: 60, img: "/images/categories/home-decor.jpeg", rating: 4 },
      { name: "Fashion", price: 70, img: "/images/categories/fashion.jpeg", rating: 5 },
      { name: "Toys", price: 80, img: "/images/categories/toys.jpeg", rating: 4 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "pa-6"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-1f271fe1${_scopeId}><div class="d-flex flex-column mb-6" data-v-1f271fe1${_scopeId}><h2 class="text-h5 font-weight-bold mb-2" data-v-1f271fe1${_scopeId}>Deals Just for You</h2><div class="bg-grey-lighten-2" style="${ssrRenderStyle({ "height": "2px", "width": "100%", "max-width": "600px" })}" data-v-1f271fe1${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(VRow, {
              dense: "",
              class: "px-4 justify-space-between",
              style: { "row-gap": "24px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(products, (product, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: index,
                      cols: "12",
                      sm: "6",
                      md: "6",
                      lg: "3",
                      class: "d-flex flex-column align-center px-6"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VImg, {
                            src: product.img,
                            "lazy-src": product.img,
                            height: "200",
                            width: "100%",
                            cover: "",
                            class: "rounded-lg hoverable mb-3"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="d-flex justify-space-between align-center w-100" data-v-1f271fe1${_scopeId3}><div data-v-1f271fe1${_scopeId3}><div class="text-caption text-grey-darken-1" data-v-1f271fe1${_scopeId3}>$ ${ssrInterpolate(product.price)}</div><div class="text-body-2 font-weight-medium" data-v-1f271fe1${_scopeId3}>${ssrInterpolate(product.name)}</div></div><div class="d-flex gap-2" data-v-1f271fe1${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Heart), {
                            size: "18",
                            class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(ShoppingCart), {
                            size: "18",
                            class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></div><div class="d-flex mt-2" data-v-1f271fe1${_scopeId3}><!--[-->`);
                          ssrRenderList(5, (n) => {
                            _push4(ssrRenderComponent(VIcon, {
                              key: n,
                              small: "",
                              color: n <= product.rating ? "yellow darken-3" : "grey lighten-1"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` mdi-star `);
                                } else {
                                  return [
                                    createTextVNode(" mdi-star ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode(VImg, {
                              src: product.img,
                              "lazy-src": product.img,
                              height: "200",
                              width: "100%",
                              cover: "",
                              class: "rounded-lg hoverable mb-3"
                            }, null, 8, ["src", "lazy-src"]),
                            createVNode("div", { class: "d-flex justify-space-between align-center w-100" }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "text-caption text-grey-darken-1" }, "$ " + toDisplayString(product.price), 1),
                                createVNode("div", { class: "text-body-2 font-weight-medium" }, toDisplayString(product.name), 1)
                              ]),
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode(unref(Heart), {
                                  size: "18",
                                  class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                                }),
                                createVNode(unref(ShoppingCart), {
                                  size: "18",
                                  class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                                })
                              ])
                            ]),
                            createVNode("div", { class: "d-flex mt-2" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                                return createVNode(VIcon, {
                                  key: n,
                                  small: "",
                                  color: n <= product.rating ? "yellow darken-3" : "grey lighten-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" mdi-star ")
                                  ]),
                                  _: 2
                                }, 1032, ["color"]);
                              }), 64))
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(products, (product, index) => {
                      return createVNode(VCol, {
                        key: index,
                        cols: "12",
                        sm: "6",
                        md: "6",
                        lg: "3",
                        class: "d-flex flex-column align-center px-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: product.img,
                            "lazy-src": product.img,
                            height: "200",
                            width: "100%",
                            cover: "",
                            class: "rounded-lg hoverable mb-3"
                          }, null, 8, ["src", "lazy-src"]),
                          createVNode("div", { class: "d-flex justify-space-between align-center w-100" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-caption text-grey-darken-1" }, "$ " + toDisplayString(product.price), 1),
                              createVNode("div", { class: "text-body-2 font-weight-medium" }, toDisplayString(product.name), 1)
                            ]),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(unref(Heart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                              }),
                              createVNode(unref(ShoppingCart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                              })
                            ])
                          ]),
                          createVNode("div", { class: "d-flex mt-2" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                              return createVNode(VIcon, {
                                key: n,
                                small: "",
                                color: n <= product.rating ? "yellow darken-3" : "grey lighten-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-star ")
                                ]),
                                _: 2
                              }, 1032, ["color"]);
                            }), 64))
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 pl-4" data-v-1f271fe1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/deals",
              class: "text-orange-darken-2 font-weight-medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` see more.. `);
                } else {
                  return [
                    createTextVNode(" see more.. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "d-flex flex-column mb-6" }, [
                  createVNode("h2", { class: "text-h5 font-weight-bold mb-2" }, "Deals Just for You"),
                  createVNode("div", {
                    class: "bg-grey-lighten-2",
                    style: { "height": "2px", "width": "100%", "max-width": "600px" }
                  })
                ]),
                createVNode(VRow, {
                  dense: "",
                  class: "px-4 justify-space-between",
                  style: { "row-gap": "24px" }
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(products, (product, index) => {
                      return createVNode(VCol, {
                        key: index,
                        cols: "12",
                        sm: "6",
                        md: "6",
                        lg: "3",
                        class: "d-flex flex-column align-center px-6"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: product.img,
                            "lazy-src": product.img,
                            height: "200",
                            width: "100%",
                            cover: "",
                            class: "rounded-lg hoverable mb-3"
                          }, null, 8, ["src", "lazy-src"]),
                          createVNode("div", { class: "d-flex justify-space-between align-center w-100" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-caption text-grey-darken-1" }, "$ " + toDisplayString(product.price), 1),
                              createVNode("div", { class: "text-body-2 font-weight-medium" }, toDisplayString(product.name), 1)
                            ]),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(unref(Heart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                              }),
                              createVNode(unref(ShoppingCart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                              })
                            ])
                          ]),
                          createVNode("div", { class: "d-flex mt-2" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                              return createVNode(VIcon, {
                                key: n,
                                small: "",
                                color: n <= product.rating ? "yellow darken-3" : "grey lighten-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-star ")
                                ]),
                                _: 2
                              }, 1032, ["color"]);
                            }), 64))
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mt-6 pl-4" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/deals",
                    class: "text-orange-darken-2 font-weight-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" see more.. ")
                    ]),
                    _: 1
                  })
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Just-Foryou.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1f271fe1"]]);
const _sfc_main$3 = {
  __name: "HeroSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const current = ref(0);
    const items = [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        title: "Let your home reflect",
        text: "The beauty hidden inside",
        button: "Shop Now"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        title: "Let\u2019s Us Help",
        text: "Explore the variety you deserve",
        button: "Shop Now"
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        title: "Best Deals Everyday",
        text: "Save big on top products",
        button: "Shop Now"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(VCarousel, {
        modelValue: current.value,
        "onUpdate:modelValue": ($event) => current.value = $event,
        "show-arrows": false,
        cycle: "",
        height: "500",
        "hide-delimiters": "",
        "hide-delimiter-background": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(items, (item, i) => {
              _push2(ssrRenderComponent(VCarouselItem, {
                key: i,
                src: item.src,
                value: i,
                cover: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="absolute inset-0 bg-black/40 z-10" data-v-fa3ce523${_scopeId2}></div><div class="absolute bottom-0 left-0 z-20 pl-6 sm:pl-16 md:pl-24 w-full md:w-2/3 lg:w-1/2 flex flex-col items-start pb-6" data-v-fa3ce523${_scopeId2}><h2 class="text-3xl font-bold text-white mb-2" data-v-fa3ce523${_scopeId2}>${ssrInterpolate(item.title)}</h2><p class="text-lg text-white mb-4" data-v-fa3ce523${_scopeId2}>${ssrInterpolate(item.text)}</p>`);
                    _push3(ssrRenderComponent(VBtn, {
                      color: "orange",
                      variant: "flat",
                      class: "px-6 py-2 text-white rounded-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.button)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.button), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "absolute inset-0 bg-black/40 z-10" }),
                      createVNode("div", { class: "absolute bottom-0 left-0 z-20 pl-6 sm:pl-16 md:pl-24 w-full md:w-2/3 lg:w-1/2 flex flex-col items-start pb-6" }, [
                        createVNode("h2", { class: "text-3xl font-bold text-white mb-2" }, toDisplayString(item.title), 1),
                        createVNode("p", { class: "text-lg text-white mb-4" }, toDisplayString(item.text), 1),
                        createVNode(VBtn, {
                          color: "orange",
                          variant: "flat",
                          class: "px-6 py-2 text-white rounded-full"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.button), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(items, (item, i) => {
                return createVNode(VCarouselItem, {
                  key: i,
                  src: item.src,
                  value: i,
                  cover: ""
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "absolute inset-0 bg-black/40 z-10" }),
                    createVNode("div", { class: "absolute bottom-0 left-0 z-20 pl-6 sm:pl-16 md:pl-24 w-full md:w-2/3 lg:w-1/2 flex flex-col items-start pb-6" }, [
                      createVNode("h2", { class: "text-3xl font-bold text-white mb-2" }, toDisplayString(item.title), 1),
                      createVNode("p", { class: "text-lg text-white mb-4" }, toDisplayString(item.text), 1),
                      createVNode(VBtn, {
                        color: "orange",
                        variant: "flat",
                        class: "px-6 py-2 text-white rounded-full"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.button), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  _: 2
                }, 1032, ["src", "value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative z-30 flex justify-center -mt-6 space-x-3" data-v-fa3ce523><!--[-->`);
      ssrRenderList(items, (item, i) => {
        _push(`<div class="${ssrRenderClass([current.value === i ? "bg-orange-500 w-10" : "bg-gray-300 w-6", "h-3 rounded-full cursor-pointer transition-all duration-300"])}" data-v-fa3ce523></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSlider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HeroSlider = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-fa3ce523"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(ssrRenderComponent(VContainer, mergeProps({
    fluid: "",
    class: "pa-6"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                md: "3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="d-flex flex-column" style="${ssrRenderStyle({ "height": "340px" })}"${_scopeId3}><div class="text-h6 mb-2"${_scopeId3}>Deals and Promotions</div>`);
                    _push4(ssrRenderComponent(VHover, null, {
                      default: withCtx(({ isHovering, props }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_router_link, {
                            to: "/shop/grid1",
                            class: "flex-grow-1"
                          }, {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VImg, mergeProps({
                                  src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                                  cover: "",
                                  class: "flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                                }, props, {
                                  elevation: isHovering ? 6 : 0
                                }), null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VImg, mergeProps({
                                    src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                                    cover: "",
                                    class: "flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                                  }, props, {
                                    elevation: isHovering ? 6 : 0
                                  }), null, 16, ["elevation"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_router_link, {
                              to: "/shop/grid1",
                              class: "flex-grow-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, mergeProps({
                                  src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                                  cover: "",
                                  class: "flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                                }, props, {
                                  elevation: isHovering ? 6 : 0
                                }), null, 16, ["elevation"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_router_link, {
                      to: "/shop/grid1",
                      class: "mt-2 text-orange-darken-2 font-weight-bold cursor-pointer"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` shop now... `);
                        } else {
                          return [
                            createTextVNode(" shop now... ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "d-flex flex-column",
                        style: { "height": "340px" }
                      }, [
                        createVNode("div", { class: "text-h6 mb-2" }, "Deals and Promotions"),
                        createVNode(VHover, null, {
                          default: withCtx(({ isHovering, props }) => [
                            createVNode(_component_router_link, {
                              to: "/shop/grid1",
                              class: "flex-grow-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, mergeProps({
                                  src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                                  cover: "",
                                  class: "flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                                }, props, {
                                  elevation: isHovering ? 6 : 0
                                }), null, 16, ["elevation"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_router_link, {
                          to: "/shop/grid1",
                          class: "mt-2 text-orange-darken-2 font-weight-bold cursor-pointer"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" shop now... ")
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
                md: "3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="d-flex flex-column" style="${ssrRenderStyle({ "height": "340px" })}"${_scopeId3}><div class="text-h6 mb-2"${_scopeId3}>Shop Home &amp; Office</div>`);
                    _push4(ssrRenderComponent(VRow, {
                      "no-gutters": "",
                      class: "w-100"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCol, {
                            cols: "12",
                            class: "pa-0"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VHover, null, {
                                  default: withCtx(({ isHovering, props }, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_router_link, {
                                        to: "/shop/grid2/top",
                                        class: "w-100 d-block"
                                      }, {
                                        default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(VImg, mergeProps({
                                              src: "",
                                              cover: "",
                                              class: "rounded-lg transition-ease-in-out cursor-pointer",
                                              height: "40"
                                            }, props, {
                                              elevation: isHovering ? 6 : 0
                                            }), null, _parent8, _scopeId7));
                                            _push8(`<div class="text-center mt-1 text-body-2 font-weight-medium"${_scopeId7}> Top </div>`);
                                          } else {
                                            return [
                                              createVNode(VImg, mergeProps({
                                                src: "",
                                                cover: "",
                                                class: "rounded-lg transition-ease-in-out cursor-pointer",
                                                height: "40"
                                              }, props, {
                                                elevation: isHovering ? 6 : 0
                                              }), null, 16, ["elevation"]),
                                              createVNode("div", { class: "text-center mt-1 text-body-2 font-weight-medium" }, " Top ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_router_link, {
                                          to: "/shop/grid2/top",
                                          class: "w-100 d-block"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, mergeProps({
                                              src: "",
                                              cover: "",
                                              class: "rounded-lg transition-ease-in-out cursor-pointer",
                                              height: "40"
                                            }, props, {
                                              elevation: isHovering ? 6 : 0
                                            }), null, 16, ["elevation"]),
                                            createVNode("div", { class: "text-center mt-1 text-body-2 font-weight-medium" }, " Top ")
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VHover, null, {
                                    default: withCtx(({ isHovering, props }) => [
                                      createVNode(_component_router_link, {
                                        to: "/shop/grid2/top",
                                        class: "w-100 d-block"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, mergeProps({
                                            src: "",
                                            cover: "",
                                            class: "rounded-lg transition-ease-in-out cursor-pointer",
                                            height: "40"
                                          }, props, {
                                            elevation: isHovering ? 6 : 0
                                          }), null, 16, ["elevation"]),
                                          createVNode("div", { class: "text-center mt-1 text-body-2 font-weight-medium" }, " Top ")
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<!--[-->`);
                          ssrRenderList(3, (n) => {
                            _push5(ssrRenderComponent(VCol, {
                              cols: "4",
                              key: "grid2-" + n,
                              class: "pa-1"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VHover, null, {
                                    default: withCtx(({ isHovering, props }, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_router_link, {
                                          to: `/shop/grid2/small${n}`,
                                          class: "d-block"
                                        }, {
                                          default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(ssrRenderComponent(VImg, mergeProps({
                                                src: `https://picsum.photos/200/150?random=${30 + n}`,
                                                cover: "",
                                                class: "rounded-lg transition-ease-in-out cursor-pointer",
                                                height: "50"
                                              }, { ref_for: true }, props, {
                                                elevation: isHovering ? 6 : 0
                                              }), null, _parent8, _scopeId7));
                                              _push8(`<div class="text-center mt-1 text-body-2"${_scopeId7}> Small ${ssrInterpolate(n)}</div>`);
                                            } else {
                                              return [
                                                createVNode(VImg, mergeProps({
                                                  src: `https://picsum.photos/200/150?random=${30 + n}`,
                                                  cover: "",
                                                  class: "rounded-lg transition-ease-in-out cursor-pointer",
                                                  height: "50"
                                                }, { ref_for: true }, props, {
                                                  elevation: isHovering ? 6 : 0
                                                }), null, 16, ["src", "elevation"]),
                                                createVNode("div", { class: "text-center mt-1 text-body-2" }, " Small " + toDisplayString(n), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_router_link, {
                                            to: `/shop/grid2/small${n}`,
                                            class: "d-block"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, mergeProps({
                                                src: `https://picsum.photos/200/150?random=${30 + n}`,
                                                cover: "",
                                                class: "rounded-lg transition-ease-in-out cursor-pointer",
                                                height: "50"
                                              }, { ref_for: true }, props, {
                                                elevation: isHovering ? 6 : 0
                                              }), null, 16, ["src", "elevation"]),
                                              createVNode("div", { class: "text-center mt-1 text-body-2" }, " Small " + toDisplayString(n), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(VHover, null, {
                                      default: withCtx(({ isHovering, props }) => [
                                        createVNode(_component_router_link, {
                                          to: `/shop/grid2/small${n}`,
                                          class: "d-block"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, mergeProps({
                                              src: `https://picsum.photos/200/150?random=${30 + n}`,
                                              cover: "",
                                              class: "rounded-lg transition-ease-in-out cursor-pointer",
                                              height: "50"
                                            }, { ref_for: true }, props, {
                                              elevation: isHovering ? 6 : 0
                                            }), null, 16, ["src", "elevation"]),
                                            createVNode("div", { class: "text-center mt-1 text-body-2" }, " Small " + toDisplayString(n), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            createVNode(VCol, {
                              cols: "12",
                              class: "pa-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VHover, null, {
                                  default: withCtx(({ isHovering, props }) => [
                                    createVNode(_component_router_link, {
                                      to: "/shop/grid2/top",
                                      class: "w-100 d-block"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, mergeProps({
                                          src: "",
                                          cover: "",
                                          class: "rounded-lg transition-ease-in-out cursor-pointer",
                                          height: "40"
                                        }, props, {
                                          elevation: isHovering ? 6 : 0
                                        }), null, 16, ["elevation"]),
                                        createVNode("div", { class: "text-center mt-1 text-body-2 font-weight-medium" }, " Top ")
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            (openBlock(), createBlock(Fragment, null, renderList(3, (n) => {
                              return createVNode(VCol, {
                                cols: "4",
                                key: "grid2-" + n,
                                class: "pa-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VHover, null, {
                                    default: withCtx(({ isHovering, props }) => [
                                      createVNode(_component_router_link, {
                                        to: `/shop/grid2/small${n}`,
                                        class: "d-block"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, mergeProps({
                                            src: `https://picsum.photos/200/150?random=${30 + n}`,
                                            cover: "",
                                            class: "rounded-lg transition-ease-in-out cursor-pointer",
                                            height: "50"
                                          }, { ref_for: true }, props, {
                                            elevation: isHovering ? 6 : 0
                                          }), null, 16, ["src", "elevation"]),
                                          createVNode("div", { class: "text-center mt-1 text-body-2" }, " Small " + toDisplayString(n), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "d-flex flex-column",
                        style: { "height": "340px" }
                      }, [
                        createVNode("div", { class: "text-h6 mb-2" }, "Shop Home & Office"),
                        createVNode(VRow, {
                          "no-gutters": "",
                          class: "w-100"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "pa-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(VHover, null, {
                                  default: withCtx(({ isHovering, props }) => [
                                    createVNode(_component_router_link, {
                                      to: "/shop/grid2/top",
                                      class: "w-100 d-block"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, mergeProps({
                                          src: "",
                                          cover: "",
                                          class: "rounded-lg transition-ease-in-out cursor-pointer",
                                          height: "40"
                                        }, props, {
                                          elevation: isHovering ? 6 : 0
                                        }), null, 16, ["elevation"]),
                                        createVNode("div", { class: "text-center mt-1 text-body-2 font-weight-medium" }, " Top ")
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            (openBlock(), createBlock(Fragment, null, renderList(3, (n) => {
                              return createVNode(VCol, {
                                cols: "4",
                                key: "grid2-" + n,
                                class: "pa-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VHover, null, {
                                    default: withCtx(({ isHovering, props }) => [
                                      createVNode(_component_router_link, {
                                        to: `/shop/grid2/small${n}`,
                                        class: "d-block"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, mergeProps({
                                            src: `https://picsum.photos/200/150?random=${30 + n}`,
                                            cover: "",
                                            class: "rounded-lg transition-ease-in-out cursor-pointer",
                                            height: "50"
                                          }, { ref_for: true }, props, {
                                            elevation: isHovering ? 6 : 0
                                          }), null, 16, ["src", "elevation"]),
                                          createVNode("div", { class: "text-center mt-1 text-body-2" }, " Small " + toDisplayString(n), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
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
                md: "3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="d-flex flex-column" style="${ssrRenderStyle({ "height": "340px" })}"${_scopeId3}><div class="text-h6 mb-2"${_scopeId3}>Electronics</div>`);
                    _push4(ssrRenderComponent(VRow, {
                      "no-gutters": "",
                      class: "flex-grow-1 pa-1"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList(4, (n) => {
                            _push5(ssrRenderComponent(VCol, {
                              cols: "6",
                              key: "grid3-" + n,
                              class: "pa-1"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VHover, null, {
                                    default: withCtx(({ isHovering, props }, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_router_link, {
                                          to: `/shop/grid3/item${n}`,
                                          class: "d-block"
                                        }, {
                                          default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(ssrRenderComponent(VImg, mergeProps({
                                                src: `https://picsum.photos/200/150?random=${40 + n}`,
                                                cover: "",
                                                class: "rounded-lg transition-ease-in-out cursor-pointer",
                                                height: "40"
                                              }, { ref_for: true }, props, {
                                                elevation: isHovering ? 6 : 0
                                              }), null, _parent8, _scopeId7));
                                              _push8(`<div class="text-center mt-1 text-body-2"${_scopeId7}> Sub ${ssrInterpolate(n)}</div>`);
                                            } else {
                                              return [
                                                createVNode(VImg, mergeProps({
                                                  src: `https://picsum.photos/200/150?random=${40 + n}`,
                                                  cover: "",
                                                  class: "rounded-lg transition-ease-in-out cursor-pointer",
                                                  height: "40"
                                                }, { ref_for: true }, props, {
                                                  elevation: isHovering ? 6 : 0
                                                }), null, 16, ["src", "elevation"]),
                                                createVNode("div", { class: "text-center mt-1 text-body-2" }, " Sub " + toDisplayString(n), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_router_link, {
                                            to: `/shop/grid3/item${n}`,
                                            class: "d-block"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, mergeProps({
                                                src: `https://picsum.photos/200/150?random=${40 + n}`,
                                                cover: "",
                                                class: "rounded-lg transition-ease-in-out cursor-pointer",
                                                height: "40"
                                              }, { ref_for: true }, props, {
                                                elevation: isHovering ? 6 : 0
                                              }), null, 16, ["src", "elevation"]),
                                              createVNode("div", { class: "text-center mt-1 text-body-2" }, " Sub " + toDisplayString(n), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["to"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(VHover, null, {
                                      default: withCtx(({ isHovering, props }) => [
                                        createVNode(_component_router_link, {
                                          to: `/shop/grid3/item${n}`,
                                          class: "d-block"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, mergeProps({
                                              src: `https://picsum.photos/200/150?random=${40 + n}`,
                                              cover: "",
                                              class: "rounded-lg transition-ease-in-out cursor-pointer",
                                              height: "40"
                                            }, { ref_for: true }, props, {
                                              elevation: isHovering ? 6 : 0
                                            }), null, 16, ["src", "elevation"]),
                                            createVNode("div", { class: "text-center mt-1 text-body-2" }, " Sub " + toDisplayString(n), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(4, (n) => {
                              return createVNode(VCol, {
                                cols: "6",
                                key: "grid3-" + n,
                                class: "pa-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VHover, null, {
                                    default: withCtx(({ isHovering, props }) => [
                                      createVNode(_component_router_link, {
                                        to: `/shop/grid3/item${n}`,
                                        class: "d-block"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, mergeProps({
                                            src: `https://picsum.photos/200/150?random=${40 + n}`,
                                            cover: "",
                                            class: "rounded-lg transition-ease-in-out cursor-pointer",
                                            height: "40"
                                          }, { ref_for: true }, props, {
                                            elevation: isHovering ? 6 : 0
                                          }), null, 16, ["src", "elevation"]),
                                          createVNode("div", { class: "text-center mt-1 text-body-2" }, " Sub " + toDisplayString(n), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "d-flex flex-column",
                        style: { "height": "340px" }
                      }, [
                        createVNode("div", { class: "text-h6 mb-2" }, "Electronics"),
                        createVNode(VRow, {
                          "no-gutters": "",
                          class: "flex-grow-1 pa-1"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(4, (n) => {
                              return createVNode(VCol, {
                                cols: "6",
                                key: "grid3-" + n,
                                class: "pa-1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VHover, null, {
                                    default: withCtx(({ isHovering, props }) => [
                                      createVNode(_component_router_link, {
                                        to: `/shop/grid3/item${n}`,
                                        class: "d-block"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, mergeProps({
                                            src: `https://picsum.photos/200/150?random=${40 + n}`,
                                            cover: "",
                                            class: "rounded-lg transition-ease-in-out cursor-pointer",
                                            height: "40"
                                          }, { ref_for: true }, props, {
                                            elevation: isHovering ? 6 : 0
                                          }), null, 16, ["src", "elevation"]),
                                          createVNode("div", { class: "text-center mt-1 text-body-2" }, " Sub " + toDisplayString(n), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
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
                md: "3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="d-flex flex-column" style="${ssrRenderStyle({ "height": "340px" })}"${_scopeId3}><div class="text-h6 mb-2"${_scopeId3}>Health &amp; Personal Care</div>`);
                    _push4(ssrRenderComponent(VHover, null, {
                      default: withCtx(({ isHovering, props }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_router_link, {
                            to: "/shop/grid4",
                            class: "flex-grow-1"
                          }, {
                            default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VImg, mergeProps({
                                  src: "https://cdn.vuetifyjs.com/images/cards/forest.jpg",
                                  cover: "",
                                  class: "flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                                }, props, {
                                  elevation: isHovering ? 6 : 0
                                }), null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VImg, mergeProps({
                                    src: "https://cdn.vuetifyjs.com/images/cards/forest.jpg",
                                    cover: "",
                                    class: "flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                                  }, props, {
                                    elevation: isHovering ? 6 : 0
                                  }), null, 16, ["elevation"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_router_link, {
                              to: "/shop/grid4",
                              class: "flex-grow-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, mergeProps({
                                  src: "https://cdn.vuetifyjs.com/images/cards/forest.jpg",
                                  cover: "",
                                  class: "flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                                }, props, {
                                  elevation: isHovering ? 6 : 0
                                }), null, 16, ["elevation"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_router_link, {
                      to: "/shop/grid4",
                      class: "mt-2 text-orange-darken-2 font-weight-bold cursor-pointer"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` shop now... `);
                        } else {
                          return [
                            createTextVNode(" shop now... ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "d-flex flex-column",
                        style: { "height": "340px" }
                      }, [
                        createVNode("div", { class: "text-h6 mb-2" }, "Health & Personal Care"),
                        createVNode(VHover, null, {
                          default: withCtx(({ isHovering, props }) => [
                            createVNode(_component_router_link, {
                              to: "/shop/grid4",
                              class: "flex-grow-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, mergeProps({
                                  src: "https://cdn.vuetifyjs.com/images/cards/forest.jpg",
                                  cover: "",
                                  class: "flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                                }, props, {
                                  elevation: isHovering ? 6 : 0
                                }), null, 16, ["elevation"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_router_link, {
                          to: "/shop/grid4",
                          class: "mt-2 text-orange-darken-2 font-weight-bold cursor-pointer"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" shop now... ")
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
                  md: "3"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "d-flex flex-column",
                      style: { "height": "340px" }
                    }, [
                      createVNode("div", { class: "text-h6 mb-2" }, "Deals and Promotions"),
                      createVNode(VHover, null, {
                        default: withCtx(({ isHovering, props }) => [
                          createVNode(_component_router_link, {
                            to: "/shop/grid1",
                            class: "flex-grow-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, mergeProps({
                                src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                                cover: "",
                                class: "flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                              }, props, {
                                elevation: isHovering ? 6 : 0
                              }), null, 16, ["elevation"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_router_link, {
                        to: "/shop/grid1",
                        class: "mt-2 text-orange-darken-2 font-weight-bold cursor-pointer"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" shop now... ")
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
                    createVNode("div", {
                      class: "d-flex flex-column",
                      style: { "height": "340px" }
                    }, [
                      createVNode("div", { class: "text-h6 mb-2" }, "Shop Home & Office"),
                      createVNode(VRow, {
                        "no-gutters": "",
                        class: "w-100"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            class: "pa-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VHover, null, {
                                default: withCtx(({ isHovering, props }) => [
                                  createVNode(_component_router_link, {
                                    to: "/shop/grid2/top",
                                    class: "w-100 d-block"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, mergeProps({
                                        src: "",
                                        cover: "",
                                        class: "rounded-lg transition-ease-in-out cursor-pointer",
                                        height: "40"
                                      }, props, {
                                        elevation: isHovering ? 6 : 0
                                      }), null, 16, ["elevation"]),
                                      createVNode("div", { class: "text-center mt-1 text-body-2 font-weight-medium" }, " Top ")
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(3, (n) => {
                            return createVNode(VCol, {
                              cols: "4",
                              key: "grid2-" + n,
                              class: "pa-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(VHover, null, {
                                  default: withCtx(({ isHovering, props }) => [
                                    createVNode(_component_router_link, {
                                      to: `/shop/grid2/small${n}`,
                                      class: "d-block"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, mergeProps({
                                          src: `https://picsum.photos/200/150?random=${30 + n}`,
                                          cover: "",
                                          class: "rounded-lg transition-ease-in-out cursor-pointer",
                                          height: "50"
                                        }, { ref_for: true }, props, {
                                          elevation: isHovering ? 6 : 0
                                        }), null, 16, ["src", "elevation"]),
                                        createVNode("div", { class: "text-center mt-1 text-body-2" }, " Small " + toDisplayString(n), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
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
                    createVNode("div", {
                      class: "d-flex flex-column",
                      style: { "height": "340px" }
                    }, [
                      createVNode("div", { class: "text-h6 mb-2" }, "Electronics"),
                      createVNode(VRow, {
                        "no-gutters": "",
                        class: "flex-grow-1 pa-1"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(4, (n) => {
                            return createVNode(VCol, {
                              cols: "6",
                              key: "grid3-" + n,
                              class: "pa-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(VHover, null, {
                                  default: withCtx(({ isHovering, props }) => [
                                    createVNode(_component_router_link, {
                                      to: `/shop/grid3/item${n}`,
                                      class: "d-block"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VImg, mergeProps({
                                          src: `https://picsum.photos/200/150?random=${40 + n}`,
                                          cover: "",
                                          class: "rounded-lg transition-ease-in-out cursor-pointer",
                                          height: "40"
                                        }, { ref_for: true }, props, {
                                          elevation: isHovering ? 6 : 0
                                        }), null, 16, ["src", "elevation"]),
                                        createVNode("div", { class: "text-center mt-1 text-body-2" }, " Sub " + toDisplayString(n), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
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
                    createVNode("div", {
                      class: "d-flex flex-column",
                      style: { "height": "340px" }
                    }, [
                      createVNode("div", { class: "text-h6 mb-2" }, "Health & Personal Care"),
                      createVNode(VHover, null, {
                        default: withCtx(({ isHovering, props }) => [
                          createVNode(_component_router_link, {
                            to: "/shop/grid4",
                            class: "flex-grow-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, mergeProps({
                                src: "https://cdn.vuetifyjs.com/images/cards/forest.jpg",
                                cover: "",
                                class: "flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                              }, props, {
                                elevation: isHovering ? 6 : 0
                              }), null, 16, ["elevation"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_router_link, {
                        to: "/shop/grid4",
                        class: "mt-2 text-orange-darken-2 font-weight-bold cursor-pointer"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" shop now... ")
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
                md: "3"
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "d-flex flex-column",
                    style: { "height": "340px" }
                  }, [
                    createVNode("div", { class: "text-h6 mb-2" }, "Deals and Promotions"),
                    createVNode(VHover, null, {
                      default: withCtx(({ isHovering, props }) => [
                        createVNode(_component_router_link, {
                          to: "/shop/grid1",
                          class: "flex-grow-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, mergeProps({
                              src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                              cover: "",
                              class: "flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                            }, props, {
                              elevation: isHovering ? 6 : 0
                            }), null, 16, ["elevation"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_router_link, {
                      to: "/shop/grid1",
                      class: "mt-2 text-orange-darken-2 font-weight-bold cursor-pointer"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" shop now... ")
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
                  createVNode("div", {
                    class: "d-flex flex-column",
                    style: { "height": "340px" }
                  }, [
                    createVNode("div", { class: "text-h6 mb-2" }, "Shop Home & Office"),
                    createVNode(VRow, {
                      "no-gutters": "",
                      class: "w-100"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          class: "pa-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VHover, null, {
                              default: withCtx(({ isHovering, props }) => [
                                createVNode(_component_router_link, {
                                  to: "/shop/grid2/top",
                                  class: "w-100 d-block"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, mergeProps({
                                      src: "",
                                      cover: "",
                                      class: "rounded-lg transition-ease-in-out cursor-pointer",
                                      height: "40"
                                    }, props, {
                                      elevation: isHovering ? 6 : 0
                                    }), null, 16, ["elevation"]),
                                    createVNode("div", { class: "text-center mt-1 text-body-2 font-weight-medium" }, " Top ")
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(3, (n) => {
                          return createVNode(VCol, {
                            cols: "4",
                            key: "grid2-" + n,
                            class: "pa-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VHover, null, {
                                default: withCtx(({ isHovering, props }) => [
                                  createVNode(_component_router_link, {
                                    to: `/shop/grid2/small${n}`,
                                    class: "d-block"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, mergeProps({
                                        src: `https://picsum.photos/200/150?random=${30 + n}`,
                                        cover: "",
                                        class: "rounded-lg transition-ease-in-out cursor-pointer",
                                        height: "50"
                                      }, { ref_for: true }, props, {
                                        elevation: isHovering ? 6 : 0
                                      }), null, 16, ["src", "elevation"]),
                                      createVNode("div", { class: "text-center mt-1 text-body-2" }, " Small " + toDisplayString(n), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
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
                  createVNode("div", {
                    class: "d-flex flex-column",
                    style: { "height": "340px" }
                  }, [
                    createVNode("div", { class: "text-h6 mb-2" }, "Electronics"),
                    createVNode(VRow, {
                      "no-gutters": "",
                      class: "flex-grow-1 pa-1"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(4, (n) => {
                          return createVNode(VCol, {
                            cols: "6",
                            key: "grid3-" + n,
                            class: "pa-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VHover, null, {
                                default: withCtx(({ isHovering, props }) => [
                                  createVNode(_component_router_link, {
                                    to: `/shop/grid3/item${n}`,
                                    class: "d-block"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, mergeProps({
                                        src: `https://picsum.photos/200/150?random=${40 + n}`,
                                        cover: "",
                                        class: "rounded-lg transition-ease-in-out cursor-pointer",
                                        height: "40"
                                      }, { ref_for: true }, props, {
                                        elevation: isHovering ? 6 : 0
                                      }), null, 16, ["src", "elevation"]),
                                      createVNode("div", { class: "text-center mt-1 text-body-2" }, " Sub " + toDisplayString(n), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
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
                  createVNode("div", {
                    class: "d-flex flex-column",
                    style: { "height": "340px" }
                  }, [
                    createVNode("div", { class: "text-h6 mb-2" }, "Health & Personal Care"),
                    createVNode(VHover, null, {
                      default: withCtx(({ isHovering, props }) => [
                        createVNode(_component_router_link, {
                          to: "/shop/grid4",
                          class: "flex-grow-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, mergeProps({
                              src: "https://cdn.vuetifyjs.com/images/cards/forest.jpg",
                              cover: "",
                              class: "flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                            }, props, {
                              elevation: isHovering ? 6 : 0
                            }), null, 16, ["elevation"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_router_link, {
                      to: "/shop/grid4",
                      class: "mt-2 text-orange-darken-2 font-weight-bold cursor-pointer"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" shop now... ")
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
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CategoriesSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CategoriesSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "FeaturedProducts",
  __ssrInlineRender: true,
  setup(__props) {
    const products = [
      { name: "Electronics", price: 10, img: "/images/categories/electronics.jpeg" },
      { name: "Automotive", price: 20, img: "/images/categories/automotive.jpeg" },
      { name: "Beauty", price: 30, img: "/images/categories/beauty.jpeg" },
      { name: "Computers", price: 40, img: "/images/categories/computers.jpeg" },
      { name: "Art", price: 50, img: "/images/categories/art.jpeg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "pa-6"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-c097125c${_scopeId}><div class="d-flex flex-column mb-6" data-v-c097125c${_scopeId}><h2 class="text-h5 font-weight-bold mb-2" data-v-c097125c${_scopeId}>Featured Product</h2><div class="bg-grey-lighten-2" style="${ssrRenderStyle({ "height": "2px", "width": "100%", "max-width": "600px" })}" data-v-c097125c${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(VRow, {
              dense: "",
              class: "px-4 justify-space-between"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(products, (product, index) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: index,
                      cols: "12",
                      sm: "6",
                      md: "2",
                      class: "d-flex flex-column align-center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VImg, {
                            src: product.img,
                            "lazy-src": product.img,
                            height: "200",
                            width: "100%",
                            cover: "",
                            class: "rounded-lg hoverable mb-3"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="d-flex justify-space-between align-center w-100" data-v-c097125c${_scopeId3}><div data-v-c097125c${_scopeId3}><div class="text-caption text-grey-darken-1" data-v-c097125c${_scopeId3}>$ ${ssrInterpolate(product.price)}</div><div class="text-body-2 font-weight-medium" data-v-c097125c${_scopeId3}>${ssrInterpolate(product.name)}</div></div><div class="d-flex gap-2" data-v-c097125c${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(Heart), {
                            size: "18",
                            class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(ShoppingCart), {
                            size: "18",
                            class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            createVNode(VImg, {
                              src: product.img,
                              "lazy-src": product.img,
                              height: "200",
                              width: "100%",
                              cover: "",
                              class: "rounded-lg hoverable mb-3"
                            }, null, 8, ["src", "lazy-src"]),
                            createVNode("div", { class: "d-flex justify-space-between align-center w-100" }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "text-caption text-grey-darken-1" }, "$ " + toDisplayString(product.price), 1),
                                createVNode("div", { class: "text-body-2 font-weight-medium" }, toDisplayString(product.name), 1)
                              ]),
                              createVNode("div", { class: "d-flex gap-2" }, [
                                createVNode(unref(Heart), {
                                  size: "18",
                                  class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                                }),
                                createVNode(unref(ShoppingCart), {
                                  size: "18",
                                  class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(products, (product, index) => {
                      return createVNode(VCol, {
                        key: index,
                        cols: "12",
                        sm: "6",
                        md: "2",
                        class: "d-flex flex-column align-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: product.img,
                            "lazy-src": product.img,
                            height: "200",
                            width: "100%",
                            cover: "",
                            class: "rounded-lg hoverable mb-3"
                          }, null, 8, ["src", "lazy-src"]),
                          createVNode("div", { class: "d-flex justify-space-between align-center w-100" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-caption text-grey-darken-1" }, "$ " + toDisplayString(product.price), 1),
                              createVNode("div", { class: "text-body-2 font-weight-medium" }, toDisplayString(product.name), 1)
                            ]),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(unref(Heart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                              }),
                              createVNode(unref(ShoppingCart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                              })
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 pl-4" data-v-c097125c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/products",
              class: "text-orange-darken-2 font-weight-medium"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` see more.. `);
                } else {
                  return [
                    createTextVNode(" see more.. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "d-flex flex-column mb-6" }, [
                  createVNode("h2", { class: "text-h5 font-weight-bold mb-2" }, "Featured Product"),
                  createVNode("div", {
                    class: "bg-grey-lighten-2",
                    style: { "height": "2px", "width": "100%", "max-width": "600px" }
                  })
                ]),
                createVNode(VRow, {
                  dense: "",
                  class: "px-4 justify-space-between"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(products, (product, index) => {
                      return createVNode(VCol, {
                        key: index,
                        cols: "12",
                        sm: "6",
                        md: "2",
                        class: "d-flex flex-column align-center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            src: product.img,
                            "lazy-src": product.img,
                            height: "200",
                            width: "100%",
                            cover: "",
                            class: "rounded-lg hoverable mb-3"
                          }, null, 8, ["src", "lazy-src"]),
                          createVNode("div", { class: "d-flex justify-space-between align-center w-100" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-caption text-grey-darken-1" }, "$ " + toDisplayString(product.price), 1),
                              createVNode("div", { class: "text-body-2 font-weight-medium" }, toDisplayString(product.name), 1)
                            ]),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(unref(Heart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-red-500"
                              }),
                              createVNode(unref(ShoppingCart), {
                                size: "18",
                                class: "cursor-pointer text-grey-darken-2 hover:text-orange-darken-2"
                              })
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mt-6 pl-4" }, [
                  createVNode(_component_NuxtLink, {
                    to: "/products",
                    class: "text-orange-darken-2 font-weight-medium"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" see more.. ")
                    ]),
                    _: 1
                  })
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturedProducts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FeaturedProducts = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c097125c"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LatestProducts = __nuxt_component_0;
      const _component_Exclusive = __nuxt_component_1;
      const _component_Banner = __nuxt_component_2;
      const _component_Deals = __nuxt_component_3;
      const _component_JustForyou = __nuxt_component_4;
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "pa-0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeroSlider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(CategoriesSection, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FeaturedProducts, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_LatestProducts, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Exclusive, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Banner, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Deals, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_JustForyou, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeroSlider),
              createVNode(CategoriesSection),
              createVNode(FeaturedProducts),
              createVNode(_component_LatestProducts),
              createVNode(_component_Exclusive),
              createVNode(_component_Banner),
              createVNode(_component_Deals),
              createVNode(_component_JustForyou)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-cysl2MHV.mjs.map
