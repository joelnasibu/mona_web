import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { computed, toRef, inject, provide, useSSRContext, createVNode, withDirectives, vShow, resolveDirective, ref, mergeProps, withCtx, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, resolveDynamicComponent, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { p as propsFactory, o as makeThemeProps, g as genericComponent, q as provideTheme, t as provideDefaults, I as IconValue, _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$2 } from './mid-screen-layout-b8tbDczG.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-kpaqSJk0.mjs';
import { ShoppingBag, Clock, Shield, Gift, Map, DollarSign, Users, Info, Camera, Utensils, Footprints, Trees, MapPin, Check } from 'lucide-vue-next';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import { m as makeComponentProps, a as makeTagProps, u as useRender } from './tag-pIHjuosL.mjs';
import { d as makeGroupProps, u as useGroup, m as makeGroupItemProps, c as useGroupItem, V as VBtn } from './VBtn-yNf12l4D.mjs';
import { a as VExpandTransition } from './index-d8gkbdU6.mjs';
import { m as makeLazyProps, u as useLazy } from './lazy-8QocgoLY.mjs';
import { a as useBackgroundColor } from './color-rZjm0Y7u.mjs';
import { R as Ripple, V as VIcon } from './index-3E7yy1qS.mjs';
import { a as makeElevationProps, m as makeRoundedProps, u as useElevation, b as useRounded } from './rounded-jA9LRAgf.mjs';
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

const _sfc_main$6 = {
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))} data-v-3e87a40c><div class="map-container" data-v-3e87a40c></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-3e87a40c"]]);
const bgImage = "" + buildAssetsURL("white.t4d_yH_Z.png");
const _sfc_main$5 = {
  __name: "MarketCard",
  __ssrInlineRender: true,
  setup(__props) {
    const markets = [
      { name: "Adams Market", description: "Fresh produce", link: "#" },
      { name: "Gikomba Market", description: "Second-hand goods", link: "#" },
      { name: "Toi Market", description: "Local crafts", link: "#" },
      { name: "City Market", description: "Tourist crafts", link: "#" },
      { name: "Kariokor Market", description: "Traditional items", link: "#" },
      { name: "Maasai Market", description: "Art & jewelry", link: "#" },
      { name: "Village Market", description: "Modern shopping", link: "#" },
      { name: "Nairobi Farmers Market", description: "Organic produce", link: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_core_mid_screen_layout = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 px-md-0" }, _attrs))} data-v-dc0e5e13>`);
      _push(ssrRenderComponent(_component_core_mid_screen_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="market-grid-section py-10" style="${ssrRenderStyle({
              backgroundImage: `url(${unref(bgImage)})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            })}" data-v-dc0e5e13${_scopeId}><div class="market-grid" data-v-dc0e5e13${_scopeId}><!--[-->`);
            ssrRenderList(markets, (market, index) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: index,
                to: { name: `shop` },
                class: "market-card group",
                style: { backgroundImage: `url('/Smartsell Logo.jpeg')` }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="overlay" data-v-dc0e5e13${_scopeId2}></div><div class="content" data-v-dc0e5e13${_scopeId2}><div class="text-subtitle-2" data-v-dc0e5e13${_scopeId2}><span data-v-dc0e5e13${_scopeId2}>${ssrInterpolate(market.name)}</span></div><div class="text-caption text-grey-lighten-1" data-v-dc0e5e13${_scopeId2}><span data-v-dc0e5e13${_scopeId2}>${ssrInterpolate(market.description)}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "overlay" }),
                      createVNode("div", { class: "content" }, [
                        createVNode("div", { class: "text-subtitle-2" }, [
                          createVNode("span", null, toDisplayString(market.name), 1)
                        ]),
                        createVNode("div", { class: "text-caption text-grey-lighten-1" }, [
                          createVNode("span", null, toDisplayString(market.description), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></section>`);
          } else {
            return [
              createVNode("section", {
                class: "market-grid-section py-10",
                style: {
                  backgroundImage: `url(${unref(bgImage)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }
              }, [
                createVNode("div", { class: "market-grid" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(markets, (market, index) => {
                    return createVNode(_component_NuxtLink, {
                      key: index,
                      to: { name: `shop` },
                      class: "market-card group",
                      style: { backgroundImage: `url('/Smartsell Logo.jpeg')` }
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "overlay" }),
                        createVNode("div", { class: "content" }, [
                          createVNode("div", { class: "text-subtitle-2" }, [
                            createVNode("span", null, toDisplayString(market.name), 1)
                          ]),
                          createVNode("div", { class: "text-caption text-grey-lighten-1" }, [
                            createVNode("span", null, toDisplayString(market.description), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ])
              ], 4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MarketCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-dc0e5e13"]]);
const _sfc_main$4 = {
  __name: "title",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container bg-white text-center py-10 text-h5 d-flex justify-center" }, _attrs))} data-v-b872dd19><b class="title-text position-relative mt-n6" data-v-b872dd19>${ssrInterpolate(__props.title)}</b></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/title.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b872dd19"]]);
const VExpansionPanelSymbol = Symbol.for("vuetify:v-expansion-panel");
const allowedVariants = ["default", "accordion", "inset", "popout"];
const makeVExpansionPanelsProps = propsFactory({
  color: String,
  static: Boolean,
  variant: {
    type: String,
    default: "default",
    validator: (v) => allowedVariants.includes(v)
  },
  readonly: Boolean,
  ...makeComponentProps(),
  ...makeGroupProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VExpansionPanels");
const VExpansionPanels = genericComponent()({
  name: "VExpansionPanels",
  props: makeVExpansionPanelsProps(),
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useGroup(props, VExpansionPanelSymbol);
    const {
      themeClasses
    } = provideTheme(props);
    const variantClass = computed(() => props.variant && `v-expansion-panels--variant-${props.variant}`);
    provideDefaults({
      VExpansionPanel: {
        color: toRef(props, "color"),
        readonly: toRef(props, "readonly"),
        static: toRef(props, "static")
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": ["v-expansion-panels", themeClasses.value, variantClass.value, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});
const makeVExpansionPanelTextProps = propsFactory({
  ...makeComponentProps(),
  ...makeLazyProps()
}, "VExpansionPanelText");
const VExpansionPanelText = genericComponent()({
  name: "VExpansionPanelText",
  props: makeVExpansionPanelTextProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel)
      throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, expansionPanel.isSelected);
    useRender(() => createVNode(VExpandTransition, {
      "onAfterLeave": onAfterLeave
    }, {
      default: () => {
        var _a;
        return [withDirectives(createVNode("div", {
          "class": ["v-expansion-panel-text", props.class],
          "style": props.style
        }, [slots.default && hasContent.value && createVNode("div", {
          "class": "v-expansion-panel-text__wrapper"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]), [[vShow, expansionPanel.isSelected.value]])];
      }
    }));
    return {};
  }
});
const makeVExpansionPanelTitleProps = propsFactory({
  color: String,
  expandIcon: {
    type: IconValue,
    default: "$expand"
  },
  collapseIcon: {
    type: IconValue,
    default: "$collapse"
  },
  hideActions: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: false
  },
  readonly: Boolean,
  ...makeComponentProps()
}, "VExpansionPanelTitle");
const VExpansionPanelTitle = genericComponent()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple
  },
  props: makeVExpansionPanelTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const expansionPanel = inject(VExpansionPanelSymbol);
    if (!expansionPanel)
      throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "color");
    const slotProps = computed(() => ({
      collapseIcon: props.collapseIcon,
      disabled: expansionPanel.disabled.value,
      expanded: expansionPanel.isSelected.value,
      expandIcon: props.expandIcon,
      readonly: props.readonly
    }));
    useRender(() => {
      var _a;
      return withDirectives(createVNode("button", {
        "class": ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": expansionPanel.isSelected.value,
          "v-expansion-panel-title--static": props.static
        }, backgroundColorClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style],
        "type": "button",
        "tabindex": expansionPanel.disabled.value ? -1 : void 0,
        "disabled": expansionPanel.disabled.value,
        "aria-expanded": expansionPanel.isSelected.value,
        "onClick": !props.readonly ? expansionPanel.toggle : void 0
      }, [createVNode("span", {
        "class": "v-expansion-panel-title__overlay"
      }, null), (_a = slots.default) == null ? void 0 : _a.call(slots, slotProps.value), !props.hideActions && createVNode("span", {
        "class": "v-expansion-panel-title__icon"
      }, [slots.actions ? slots.actions(slotProps.value) : createVNode(VIcon, {
        "icon": expansionPanel.isSelected.value ? props.collapseIcon : props.expandIcon
      }, null)])]), [[resolveDirective("ripple"), props.ripple]]);
    });
    return {};
  }
});
const makeVExpansionPanelProps = propsFactory({
  title: String,
  text: String,
  bgColor: String,
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeVExpansionPanelTitleProps()
}, "VExpansionPanel");
const VExpansionPanel = genericComponent()({
  name: "VExpansionPanel",
  props: makeVExpansionPanelProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const groupItem = useGroupItem(props, VExpansionPanelSymbol);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "bgColor");
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const isDisabled = computed(() => (groupItem == null ? void 0 : groupItem.disabled.value) || props.disabled);
    const selectedIndices = computed(() => groupItem.group.items.value.reduce((arr, item, index) => {
      if (groupItem.group.selected.value.includes(item.id))
        arr.push(index);
      return arr;
    }, []));
    const isBeforeSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === 1);
    });
    const isAfterSelected = computed(() => {
      const index = groupItem.group.items.value.findIndex((item) => item.id === groupItem.id);
      return !groupItem.isSelected.value && selectedIndices.value.some((selectedIndex) => selectedIndex - index === -1);
    });
    provide(VExpansionPanelSymbol, groupItem);
    provideDefaults({
      VExpansionPanelText: {
        eager: toRef(props, "eager")
      },
      VExpansionPanelTitle: {
        readonly: toRef(props, "readonly")
      }
    });
    useRender(() => {
      const hasText = !!(slots.text || props.text);
      const hasTitle = !!(slots.title || props.title);
      return createVNode(props.tag, {
        "class": ["v-expansion-panel", {
          "v-expansion-panel--active": groupItem.isSelected.value,
          "v-expansion-panel--before-active": isBeforeSelected.value,
          "v-expansion-panel--after-active": isAfterSelected.value,
          "v-expansion-panel--disabled": isDisabled.value
        }, roundedClasses.value, backgroundColorClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => {
          var _a;
          return [createVNode("div", {
            "class": ["v-expansion-panel__shadow", ...elevationClasses.value]
          }, null), hasTitle && createVNode(VExpansionPanelTitle, {
            "key": "title",
            "collapseIcon": props.collapseIcon,
            "color": props.color,
            "expandIcon": props.expandIcon,
            "hideActions": props.hideActions,
            "ripple": props.ripple
          }, {
            default: () => [slots.title ? slots.title() : props.title]
          }), hasText && createVNode(VExpansionPanelText, {
            "key": "text"
          }, {
            default: () => [slots.text ? slots.text() : props.text]
          }), (_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    });
    return {};
  }
});
const _sfc_main$3 = {
  __name: "TipsGuide",
  __ssrInlineRender: true,
  setup(__props) {
    const tips = ref([
      {
        title: "How to bargain at Nairobi markets?",
        content: "Start lower than the asking price, keep a smile, and stay polite. Bargaining is part of the culture.",
        icon: ShoppingBag
      },
      {
        title: "What\u2019s the best time to shop?",
        content: "Morning hours are best ,vendors are fresh, and prices are often lower at the start of the day.",
        icon: Clock
      },
      {
        title: "How do I stay safe?",
        content: "Keep valuables secure, avoid carrying large amounts of cash, and always stay aware of your surroundings.",
        icon: Shield
      },
      {
        title: "Which market is best for souvenirs?",
        content: "The Maasai Market is famous for beadwork, jewelry, and authentic African crafts perfect for gifts.",
        icon: Gift
      },
      {
        title: "How do I get around the markets?",
        content: "Walking is easiest inside markets. For larger areas, consider boda bodas (motorbikes) or matatus (minibuses).",
        icon: Map
      },
      {
        title: "How much should I budget?",
        content: "It depends on what you\u2019re buying. Small souvenirs start at Kes200\u2013Kes500, while fabrics and art may cost more.",
        icon: DollarSign
      },
      {
        title: "Are markets crowded?",
        content: "Yes, especially weekends. Visit weekdays if you prefer fewer crowds and a calmer shopping experience.",
        icon: Users
      },
      {
        title: "Do vendors speak English?",
        content: "Most vendors speak English and Swahili. A few words of Swahili will make your shopping experience warmer.",
        icon: Info
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_landing_title = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "w-full py-12",
        style: {
          backgroundImage: `url(${unref(bgImage)})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_landing_title, { title: "Tips & Visitor Guide" }, null, _parent));
      _push(ssrRenderComponent(VContainer, {
        class: "mx-auto",
        style: { "max-width": "1300px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "10",
                    md: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VExpansionPanels, {
                          multiple: "",
                          "bg-color": "transparent",
                          flat: "",
                          class: "rounded-lg"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(tips.value, (item, index) => {
                                _push5(ssrRenderComponent(VExpansionPanel, {
                                  key: index,
                                  class: "rounded-lg",
                                  elevation: 0
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VExpansionPanelTitle, { class: "" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            ssrRenderVNode(_push7, createVNode(resolveDynamicComponent(item.icon), {
                                              class: "text-secondary",
                                              style: { "opacity": "0.7" },
                                              size: "15"
                                            }, null), _parent7, _scopeId6);
                                            _push7(`<b class="font-medium text-body-2 ml-3"${_scopeId6}>${ssrInterpolate(item.title)}</b>`);
                                          } else {
                                            return [
                                              (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                                class: "text-secondary",
                                                style: { "opacity": "0.7" },
                                                size: "15"
                                              })),
                                              createVNode("b", { class: "font-medium text-body-2 ml-3" }, toDisplayString(item.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VExpansionPanelText, { class: "text-caption" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(item.content)}</span>`);
                                          } else {
                                            return [
                                              createVNode("span", null, toDisplayString(item.content), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VExpansionPanelTitle, { class: "" }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                              class: "text-secondary",
                                              style: { "opacity": "0.7" },
                                              size: "15"
                                            })),
                                            createVNode("b", { class: "font-medium text-body-2 ml-3" }, toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VExpansionPanelText, { class: "text-caption" }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(item.content), 1)
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
                                (openBlock(true), createBlock(Fragment, null, renderList(tips.value, (item, index) => {
                                  return openBlock(), createBlock(VExpansionPanel, {
                                    key: index,
                                    class: "rounded-lg",
                                    elevation: 0
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VExpansionPanelTitle, { class: "" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                            class: "text-secondary",
                                            style: { "opacity": "0.7" },
                                            size: "15"
                                          })),
                                          createVNode("b", { class: "font-medium text-body-2 ml-3" }, toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VExpansionPanelText, { class: "text-caption" }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, toDisplayString(item.content), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VExpansionPanels, {
                            multiple: "",
                            "bg-color": "transparent",
                            flat: "",
                            class: "rounded-lg"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(tips.value, (item, index) => {
                                return openBlock(), createBlock(VExpansionPanel, {
                                  key: index,
                                  class: "rounded-lg",
                                  elevation: 0
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VExpansionPanelTitle, { class: "" }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                          class: "text-secondary",
                                          style: { "opacity": "0.7" },
                                          size: "15"
                                        })),
                                        createVNode("b", { class: "font-medium text-body-2 ml-3" }, toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VExpansionPanelText, { class: "text-caption" }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(item.content), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      sm: "10",
                      md: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(VExpansionPanels, {
                          multiple: "",
                          "bg-color": "transparent",
                          flat: "",
                          class: "rounded-lg"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(tips.value, (item, index) => {
                              return openBlock(), createBlock(VExpansionPanel, {
                                key: index,
                                class: "rounded-lg",
                                elevation: 0
                              }, {
                                default: withCtx(() => [
                                  createVNode(VExpansionPanelTitle, { class: "" }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                        class: "text-secondary",
                                        style: { "opacity": "0.7" },
                                        size: "15"
                                      })),
                                      createVNode("b", { class: "font-medium text-body-2 ml-3" }, toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VExpansionPanelText, { class: "text-caption" }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(item.content), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    sm: "10",
                    md: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(VExpansionPanels, {
                        multiple: "",
                        "bg-color": "transparent",
                        flat: "",
                        class: "rounded-lg"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(tips.value, (item, index) => {
                            return openBlock(), createBlock(VExpansionPanel, {
                              key: index,
                              class: "rounded-lg",
                              elevation: 0
                            }, {
                              default: withCtx(() => [
                                createVNode(VExpansionPanelTitle, { class: "" }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                                      class: "text-secondary",
                                      style: { "opacity": "0.7" },
                                      size: "15"
                                    })),
                                    createVNode("b", { class: "font-medium text-body-2 ml-3" }, toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VExpansionPanelText, { class: "text-caption" }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, toDisplayString(item.content), 1)
                                  ]),
                                  _: 2
                                }, 1024)
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
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TipsGuide.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "vendor-signup",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingTitle = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<section${ssrRenderAttrs(mergeProps({
        style: {
          backgroundImage: `url(${unref(bgImage)})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }
      }, _attrs))} data-v-4a813077><div class="bg-gray-50 py-16 px-6 text-center rounded-2xl shadow-md text-body-1" data-v-4a813077>`);
      _push(ssrRenderComponent(_component_LandingTitle, { title: "Join Nairobi Markets" }, null, _parent));
      _push(`<p class="mt-4 mx-auto" data-v-4a813077> Create your business account and start showcasing your products today. </p><div class="mt-8 flex justify-center" data-v-4a813077>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/create-business-account" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              color: "primary",
              size: "large",
              flat: "",
              class: "rounded-xl px-10 text-lg font-semibold text-capitalize text-subtitle-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Become a vendor `);
                } else {
                  return [
                    createTextVNode(" Become a vendor ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                color: "primary",
                size: "large",
                flat: "",
                class: "rounded-xl px-10 text-lg font-semibold text-capitalize text-subtitle-1"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Become a vendor ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vendor-signup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4a813077"]]);
const _sfc_main$1 = {
  __name: "Trails",
  __ssrInlineRender: true,
  setup(__props) {
    const trails = ref([
      {
        title: "Cultural Shopping Trail",
        icon: ShoppingBag,
        description: "Explore Nairobi's famous local markets including Gikomba, Maasai Market, and Toi Market.",
        duration: "Half-day",
        highlights: ["Handicrafts", "Textiles", "Local souvenirs"]
      },
      {
        title: "Historical & City Landmarks",
        icon: Camera,
        description: "A walking trail covering City Market, Kenyatta Avenue, and key Nairobi landmarks.",
        duration: "2-3 hours",
        highlights: ["Architecture", "Street food", "Photo spots"]
      },
      {
        title: "Food & Flavors Experience",
        icon: Utensils,
        description: "Discover Nairobi Farmers Market and try out authentic Kenyan cuisine.",
        duration: "Half-day",
        highlights: ["Local delicacies", "Fresh produce", "Street vendors"]
      },
      {
        title: "Hidden Gems Trail",
        icon: Footprints,
        description: "Visit lesser-known local spots around Kariokor and Adams Market for unique finds.",
        duration: "Half-day",
        highlights: ["Community vibe", "Handmade goods", "Affordable shopping"]
      },
      {
        title: "Green Escape Trail",
        icon: Trees,
        description: "Balance your market visits with a relaxing walk in Nairobi\u2019s green spaces like Uhuru Park and Karura Forest.",
        duration: "3-4 hours",
        highlights: ["Nature walks", "Picnic spots", "Bird watching"]
      },
      {
        title: "Night Market Adventure",
        icon: MapPin,
        description: "Experience the vibrant Nairobi nightlife at bustling evening markets and street food stalls.",
        duration: "Evening",
        highlights: ["Street food", "Night shopping", "Music & vibe"]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingTitle = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "py-12 position-relative",
        style: { "isolation": "isolate" }
      }, _attrs))} data-v-24294866><div class="position-absolute w-100 h-100" style="${ssrRenderStyle({
        backgroundImage: "url(/images/cover-image.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
        opacity: 0.2
      })}" data-v-24294866></div><div class="w-full bg-transparent" data-v-24294866><div class="max-w-6xl mx-auto px-6 text-center" data-v-24294866>`);
      _push(ssrRenderComponent(_component_LandingTitle, { title: "Suggested Trails & Visits" }, null, _parent));
      _push(`<p class="text-body-1" data-v-24294866> Discover curated trails and visit recommendations to explore Nairobi\u2019s vibrant markets and culture. </p><div class="trails-grid mt-8" data-v-24294866><!--[-->`);
      ssrRenderList(trails.value, (trail, index) => {
        _push(`<div class="trail-card" data-v-24294866>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(trail.icon), { class: "trail-icon" }, null), _parent);
        _push(`<h2 class="trail-title" data-v-24294866>${ssrInterpolate(trail.title)}</h2><p class="trail-description" data-v-24294866>${ssrInterpolate(trail.description)}</p><div class="trail-meta" data-v-24294866><span class="duration" data-v-24294866>\u23F1 ${ssrInterpolate(trail.duration)}</span><ul class="highlights" data-v-24294866><!--[-->`);
        ssrRenderList(trail.highlights, (highlight, i) => {
          _push(`<li class="highlight-item" data-v-24294866>`);
          _push(ssrRenderComponent(unref(Check), {
            size: "18",
            color: "#032F46"
          }, null, _parent));
          _push(` ${ssrInterpolate(highlight)}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Trails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-24294866"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_hero = __nuxt_component_0$1;
      const _component_market_card = __nuxt_component_1;
      const _component_tips_guide = __nuxt_component_2;
      const _component_vendor_signup = __nuxt_component_3;
      const _component_trails = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_hero, null, null, _parent));
      _push(ssrRenderComponent(_component_market_card, null, null, _parent));
      _push(ssrRenderComponent(_component_tips_guide, null, null, _parent));
      _push(ssrRenderComponent(_component_vendor_signup, null, null, _parent));
      _push(ssrRenderComponent(_component_trails, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-JwFY49ER.mjs.map
