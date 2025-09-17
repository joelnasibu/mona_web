import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { toRef, shallowRef, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, ref, watch } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs } from 'vue/server-renderer';
import { p as propsFactory, g as genericComponent, o as makeThemeProps, q as provideTheme, e as useRtl, t as provideDefaults, _ as _export_sfc, B as convertToUnit } from '../server.mjs';
import { V as VBtn } from './VBtn-yNf12l4D.mjs';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { m as makeComponentProps, a as makeTagProps, u as useRender } from './tag-pIHjuosL.mjs';
import { a as VExpandTransition } from './index-d8gkbdU6.mjs';
import { c as makeBorderProps, a as makeElevationProps, m as makeRoundedProps, d as useBorder, u as useElevation, b as useRounded } from './rounded-jA9LRAgf.mjs';
import { a as useBackgroundColor } from './color-rZjm0Y7u.mjs';
import { V as VImg } from './VImg-_57rVikU.mjs';
import { a as VDefaultsProvider } from './index-3E7yy1qS.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import { V as VCarousel, a as VCarouselItem } from './VCarouselItem-KQpsENmj.mjs';
import { V as VSheet } from './VSheet-9iAoR9Ls.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/firebase-gen-2.mjs';
import 'firebase-functions/v2/https';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@algolia/cache-in-memory';
import 'pinia-plugin-persistedstate';
import './position-AkaJaFJy.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import './index-q-0zZOOG.mjs';
import './VWindowItem-BpMO-iOS.mjs';
import './lazy-8QocgoLY.mjs';
import './ssrBoot-xH9VG8QW.mjs';

const _imports_0 = "" + buildAssetsURL("banner1.TQIXC0-X.jpg");
const initialCount = 4;
const _sfc_main$1 = {
  __name: "MarketSection",
  __ssrInlineRender: true,
  props: {
    title: String,
    items: Array,
    showButton: { type: Boolean, default: false },
    buttonText: { type: String, default: "View Deal" }
  },
  setup(__props) {
    const props = __props;
    const isExpanded = ref(false);
    const visibleItems = ref(props.items.slice(0, initialCount));
    watch(() => props.items, (newItems) => {
      visibleItems.value = newItems.slice(0, isExpanded.value ? newItems.length : initialCount);
    });
    function toggleItems() {
      isExpanded.value = !isExpanded.value;
      visibleItems.value = isExpanded.value ? props.items : props.items.slice(0, initialCount);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-10" }, _attrs))} data-v-41d91f14><div class="text-center mb-8" data-v-41d91f14><h3 class="text-h5 font-weight-bold mb-2" data-v-41d91f14>${ssrInterpolate(__props.title)}</h3><div class="mx-auto" style="${ssrRenderStyle({ "width": "80px", "height": "3px", "background-color": "#ccc", "border-radius": "2px" })}" data-v-41d91f14></div></div><div class="market-container" data-v-41d91f14><div class="market-grid" data-v-41d91f14><!--[-->`);
      ssrRenderList(visibleItems.value, (item, i) => {
        _push(`<a href="#" class="market-card group" style="${ssrRenderStyle({ backgroundImage: `url(${item.image})` })}" data-v-41d91f14><div class="overlay" data-v-41d91f14></div><div class="content" data-v-41d91f14><h3 class="market-name" data-v-41d91f14>${ssrInterpolate(item.name || item.title)}</h3>`);
        if (__props.showButton) {
          _push(ssrRenderComponent(VBtn, {
            color: "orange-darken-2",
            size: "small",
            class: "rounded-pill mt-2",
            variant: "flat"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.buttonText)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.buttonText), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></a>`);
      });
      _push(`<!--]--></div>`);
      if (__props.items.length > initialCount) {
        _push(`<div class="text-center mt-6" data-v-41d91f14>`);
        _push(ssrRenderComponent(VBtn, {
          color: "orange-darken-2",
          class: "rounded-pill",
          onClick: toggleItems
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(isExpanded.value ? "Show Less" : "See More")}`);
            } else {
              return [
                createTextVNode(toDisplayString(isExpanded.value ? "Show Less" : "See More"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MarketSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MarketSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-41d91f14"]]);
const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VToolbarTitle");
const VToolbarTitle = genericComponent()({
  name: "VToolbarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return createVNode(props.tag, {
        "class": ["v-toolbar-title", props.class],
        "style": props.style
      }, {
        default: () => {
          var _a;
          return [hasText && createVNode("div", {
            "class": "v-toolbar-title__placeholder"
          }, [slots.text ? slots.text() : props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)])];
        }
      });
    });
    return {};
  }
});
const allowedDensities = [null, "prominent", "default", "comfortable", "compact"];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeThemeProps()
}, "VToolbar");
const VToolbar = genericComponent()({
  name: "VToolbar",
  props: makeVToolbarProps(),
  setup(props, _ref) {
    var _a;
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const isExtended = shallowRef(!!(props.extended || ((_a = slots.extension) == null ? void 0 : _a.call(slots))));
    const contentHeight = computed(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
    const extensionHeight = computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a2;
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = (_a2 = slots.extension) == null ? void 0 : _a2.call(slots);
      isExtended.value = !!(props.extended || extension);
      return createVNode(props.tag, {
        "class": ["v-toolbar", {
          "v-toolbar--absolute": props.absolute,
          "v-toolbar--collapse": props.collapse,
          "v-toolbar--flat": props.flat,
          "v-toolbar--floating": props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => [hasImage && createVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => {
            var _a3, _b, _c;
            return [createVNode("div", {
              "class": "v-toolbar__content",
              "style": {
                height: convertToUnit(contentHeight.value)
              }
            }, [slots.prepend && createVNode("div", {
              "class": "v-toolbar__prepend"
            }, [(_a3 = slots.prepend) == null ? void 0 : _a3.call(slots)]), hasTitle && createVNode(VToolbarTitle, {
              "key": "title",
              "text": props.title
            }, {
              text: slots.title
            }), (_b = slots.default) == null ? void 0 : _b.call(slots), slots.append && createVNode("div", {
              "class": "v-toolbar__append"
            }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])])];
          }
        }), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && createVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});
const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = [
      "Apparel",
      "Health & Personal Care",
      "Machinery",
      "Consumer Electronics",
      "Industrial Equipment",
      "Furniture",
      "Other Categories"
    ];
    const heroSlides = [
      { title: "Let your home reflect", subtitle: "Luxury Interior Inside", description: "Discover premium home d\xE9cor and furniture for every style.", image: "/images/banners/landing.jpeg" },
      { title: "Explore the World", subtitle: "Let\u2019s Shop in Style", description: "Browse through our wide collection of fashion, electronics, and more.", image: "/images/landing.jpeg" },
      { title: "Mega Sale", subtitle: "Don\u2019t Miss Out!", description: "Up to 50% OFF on select products \u2014 hurry before it\u2019s gone!", image: "/images/sale.jpeg" }
    ];
    const deals = [
      { title: "Big Sale", image: "/images/categories/beauty.jpeg" },
      { title: "Electronics", image: "/images/categories/electronics.jpeg" },
      { title: "Health Care", image: "/images/categories/luggage.jpeg" },
      { title: "Office & Home", image: "/images/categories/home.jpeg" }
    ];
    const featured = [
      { name: "Headphones", price: 25, image: "/images/product1.jpg" },
      { name: "PS5", price: 500, image: "/images/product2.jpg" },
      { name: "Xbox", price: 450, image: "/images/product3.jpg" },
      { name: "Controller", price: 60, image: "/images/product4.jpg" },
      { name: "Laptop", price: 1100, image: "/images/product5.jpg" },
      { name: "Smartphone", price: 900, image: "/images/product6.jpg" },
      { name: "Tablet", price: 350, image: "/images/product7.jpg" },
      { name: "Wireless Earbuds", price: 80, image: "/images/product8.jpg" }
    ];
    const latest = [
      { name: "Gaming Chair", price: 200, image: "/images/latest1.jpg" },
      { name: "Camera", price: 350, image: "/images/latest2.jpg" },
      { name: "VR Headset", price: 150, image: "/images/latest3.jpg" },
      { name: "Smartwatch", price: 120, image: "/images/latest4.jpg" },
      { name: "Bluetooth Speaker", price: 70, image: "/images/latest5.jpg" },
      { name: "Laptop Bag", price: 45, image: "/images/latest6.jpg" }
    ];
    const exclusive = [
      { name: "Laptop", price: 900, image: "/images/ex1.jpg" },
      { name: "Guitar", price: 300, image: "/images/ex2.jpg" },
      { name: "Violin", price: 400, image: "/images/ex3.jpg" },
      { name: "Keyboard", price: 250, image: "/images/ex4.jpg" },
      { name: "Jewelry", price: 600, image: "/images/ex5.jpg" },
      { name: "Watch", price: 450, image: "/images/ex6.jpg" },
      { name: "Designer Bag", price: 700, image: "/images/ex7.jpg" }
    ];
    const weekDeals = [
      { name: "Monitor", price: 250, image: "/images/week1.jpg" },
      { name: "Shoes", price: 75, image: "/images/week2.jpg" },
      { name: "Speaker", price: 150, image: "/images/week3.jpg" },
      { name: "Bag", price: 90, image: "/images/week4.jpg" },
      { name: "Headphones", price: 50, image: "/images/week5.jpg" }
    ];
    const personalDeals = [
      { brand: "Tamara Bella", name: "Floral Summer Dress", price: 39.99, image: "/images/deal-you1.jpg" },
      { brand: "Tamara Bella", name: "Red Casual Dress", price: 42.5, image: "/images/deal-you2.jpg" },
      { brand: "Tamara Bella", name: "Blue Off-Shoulder Dress", price: 50, image: "/images/deal-you3.jpg" },
      { brand: "Tamara Bella", name: "Evening Pink Dress", price: 65, image: "/images/deal-you4.jpg" },
      { brand: "Tamara Bella", name: "Polka Dot Dress", price: 35, image: "/images/deal-you5.jpg" },
      { brand: "Tamara Bella", name: "Denim Dress", price: 55, image: "/images/deal-you6.jpg" },
      { brand: "Tamara Bella", name: "Casual Pants", price: 29.99, image: "/images/deal-you7.jpg" },
      { brand: "Tamara Bella", name: "Green Romper", price: 48, image: "/images/deal-you8.jpg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, mergeProps({
        fluid: "",
        class: "pa-0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VToolbar, {
              color: "blue-darken-2",
              density: "comfortable",
              class: "text-white"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, {
                    "no-gutters": "",
                    class: "w-100"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(categories, (cat, i) => {
                          _push4(ssrRenderComponent(VCol, {
                            cols: "auto",
                            key: i
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, {
                                  text: "",
                                  class: "text-white"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(cat)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(cat), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    text: "",
                                    class: "text-white"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(cat), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(categories, (cat, i) => {
                            return createVNode(VCol, {
                              cols: "auto",
                              key: i
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  text: "",
                                  class: "text-white"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(cat), 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, {
                      "no-gutters": "",
                      class: "w-100"
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(categories, (cat, i) => {
                          return createVNode(VCol, {
                            cols: "auto",
                            key: i
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                text: "",
                                class: "text-white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(cat), 1)
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
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCarousel, {
              cycle: "",
              interval: "4000",
              "hide-delimiters": "",
              "show-arrows": "false",
              height: "500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(heroSlides, (slide, i) => {
                    _push3(ssrRenderComponent(VCarouselItem, { key: i }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VSheet, {
                            height: "100%",
                            tile: "",
                            class: "position-relative",
                            style: {
                              backgroundImage: `url(${slide.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat"
                            }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="position-absolute" style="${ssrRenderStyle({ "bottom": "15%", "left": "8%", "max-width": "600px", "z-index": "2" })}"${_scopeId4}><h2 class="text-h4 md:text-h3 font-weight-bold text-white mb-3"${_scopeId4}>${ssrInterpolate(slide.title)}</h2><p class="text-h6 text-white mb-3"${_scopeId4}>${ssrInterpolate(slide.subtitle)}</p><p class="text-body-1 text-white mb-6"${_scopeId4}>${ssrInterpolate(slide.description)}</p>`);
                                _push5(ssrRenderComponent(VBtn, {
                                  color: "orange-darken-2",
                                  size: "large",
                                  class: "rounded-pill",
                                  variant: "flat"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Shop Now `);
                                    } else {
                                      return [
                                        createTextVNode(" Shop Now ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "position-absolute",
                                    style: { "bottom": "15%", "left": "8%", "max-width": "600px", "z-index": "2" }
                                  }, [
                                    createVNode("h2", { class: "text-h4 md:text-h3 font-weight-bold text-white mb-3" }, toDisplayString(slide.title), 1),
                                    createVNode("p", { class: "text-h6 text-white mb-3" }, toDisplayString(slide.subtitle), 1),
                                    createVNode("p", { class: "text-body-1 text-white mb-6" }, toDisplayString(slide.description), 1),
                                    createVNode(VBtn, {
                                      color: "orange-darken-2",
                                      size: "large",
                                      class: "rounded-pill",
                                      variant: "flat"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Shop Now ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VSheet, {
                              height: "100%",
                              tile: "",
                              class: "position-relative",
                              style: {
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                              }
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "position-absolute",
                                  style: { "bottom": "15%", "left": "8%", "max-width": "600px", "z-index": "2" }
                                }, [
                                  createVNode("h2", { class: "text-h4 md:text-h3 font-weight-bold text-white mb-3" }, toDisplayString(slide.title), 1),
                                  createVNode("p", { class: "text-h6 text-white mb-3" }, toDisplayString(slide.subtitle), 1),
                                  createVNode("p", { class: "text-body-1 text-white mb-6" }, toDisplayString(slide.description), 1),
                                  createVNode(VBtn, {
                                    color: "orange-darken-2",
                                    size: "large",
                                    class: "rounded-pill",
                                    variant: "flat"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Shop Now ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 2
                            }, 1032, ["style"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(heroSlides, (slide, i) => {
                      return createVNode(VCarouselItem, { key: i }, {
                        default: withCtx(() => [
                          createVNode(VSheet, {
                            height: "100%",
                            tile: "",
                            class: "position-relative",
                            style: {
                              backgroundImage: `url(${slide.image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat"
                            }
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "position-absolute",
                                style: { "bottom": "15%", "left": "8%", "max-width": "600px", "z-index": "2" }
                              }, [
                                createVNode("h2", { class: "text-h4 md:text-h3 font-weight-bold text-white mb-3" }, toDisplayString(slide.title), 1),
                                createVNode("p", { class: "text-h6 text-white mb-3" }, toDisplayString(slide.subtitle), 1),
                                createVNode("p", { class: "text-body-1 text-white mb-6" }, toDisplayString(slide.description), 1),
                                createVNode(VBtn, {
                                  color: "orange-darken-2",
                                  size: "large",
                                  class: "rounded-pill",
                                  variant: "flat"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Shop Now ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 2
                          }, 1032, ["style"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(MarketSection, {
              title: "Deals and Promotions",
              items: deals,
              showButton: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(MarketSection, {
              title: "Featured Products",
              items: featured,
              showButton: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(MarketSection, {
              title: "Latest Products",
              items: latest,
              showButton: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(MarketSection, {
              title: "Exclusive Products",
              items: exclusive,
              showButton: true
            }, null, _parent2, _scopeId));
            _push2(`<section class="my-10"${_scopeId}><a href="#" class="block w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(VImg, {
              src: _imports_0,
              height: "250",
              class: "rounded-lg",
              cover: ""
            }, null, _parent2, _scopeId));
            _push2(`</a></section>`);
            _push2(ssrRenderComponent(MarketSection, {
              title: "Deals of the Week",
              items: weekDeals,
              showButton: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(MarketSection, {
              title: "Just for You",
              items: personalDeals,
              showButton: true
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VToolbar, {
                color: "blue-darken-2",
                density: "comfortable",
                class: "text-white"
              }, {
                default: withCtx(() => [
                  createVNode(VRow, {
                    "no-gutters": "",
                    class: "w-100"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(categories, (cat, i) => {
                        return createVNode(VCol, {
                          cols: "auto",
                          key: i
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              text: "",
                              class: "text-white"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(cat), 1)
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
                ]),
                _: 1
              }),
              createVNode(VCarousel, {
                cycle: "",
                interval: "4000",
                "hide-delimiters": "",
                "show-arrows": "false",
                height: "500"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(heroSlides, (slide, i) => {
                    return createVNode(VCarouselItem, { key: i }, {
                      default: withCtx(() => [
                        createVNode(VSheet, {
                          height: "100%",
                          tile: "",
                          class: "position-relative",
                          style: {
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "position-absolute",
                              style: { "bottom": "15%", "left": "8%", "max-width": "600px", "z-index": "2" }
                            }, [
                              createVNode("h2", { class: "text-h4 md:text-h3 font-weight-bold text-white mb-3" }, toDisplayString(slide.title), 1),
                              createVNode("p", { class: "text-h6 text-white mb-3" }, toDisplayString(slide.subtitle), 1),
                              createVNode("p", { class: "text-body-1 text-white mb-6" }, toDisplayString(slide.description), 1),
                              createVNode(VBtn, {
                                color: "orange-darken-2",
                                size: "large",
                                class: "rounded-pill",
                                variant: "flat"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Shop Now ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 2
                        }, 1032, ["style"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode(MarketSection, {
                title: "Deals and Promotions",
                items: deals,
                showButton: true
              }),
              createVNode(MarketSection, {
                title: "Featured Products",
                items: featured,
                showButton: true
              }),
              createVNode(MarketSection, {
                title: "Latest Products",
                items: latest,
                showButton: true
              }),
              createVNode(MarketSection, {
                title: "Exclusive Products",
                items: exclusive,
                showButton: true
              }),
              createVNode("section", { class: "my-10" }, [
                createVNode("a", {
                  href: "#",
                  class: "block w-full"
                }, [
                  createVNode(VImg, {
                    src: _imports_0,
                    height: "250",
                    class: "rounded-lg",
                    cover: ""
                  })
                ])
              ]),
              createVNode(MarketSection, {
                title: "Deals of the Week",
                items: weekDeals,
                showButton: true
              }),
              createVNode(MarketSection, {
                title: "Just for You",
                items: personalDeals,
                showButton: true
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shops/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-b5cvG34Y.mjs.map
