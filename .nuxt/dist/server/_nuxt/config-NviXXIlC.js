import { defineComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, ref, mergeProps, unref, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { V as VList, a as VListItem } from "./VList-hhjvxiav.js";
import { V as VIcon } from "./index-3E7yy1qS.js";
import { d as __nuxt_component_1, _ as _export_sfc } from "../server.mjs";
import { V as VBtn } from "./VBtn-yNf12l4D.js";
import { V as VCard } from "./VCard-MEGoD2_3.js";
import "./index-d8gkbdU6.js";
import "./tag-pIHjuosL.js";
import "./ssrBoot-xH9VG8QW.js";
import "./index-q-0zZOOG.js";
import "./VAvatar-agmUyvkw.js";
import "./rounded-jA9LRAgf.js";
import "./VImg-_57rVikU.js";
import "./color-rZjm0Y7u.js";
import "./VDivider-Ce8J4Sp3.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "./position-AkaJaFJy.js";
import "./resizeObserver-k8M9k6Xi.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "links",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        title: "Markets",
        link: "admin-config-markets",
        icon: "mdi-storefront-outline"
      },
      {
        title: "Payment Methods",
        link: "admin-config-payment-methods",
        icon: "mdi-credit-card-outline"
      },
      {
        title: "Product Grades",
        link: "admin-config-product-grades",
        icon: "mdi-tag-outline"
      },
      {
        title: "Roles",
        link: "admin-config-roles",
        icon: "mdi-key-outline"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(VList, {
        density: "compact",
        class: "hide-scrollbar rounded-lg py-0 mt-1",
        nav: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(links, ({ title, link, icon }, index) => {
              _push2(`<div class="text-caption"${ssrRenderAttr("title", title)}${_scopeId}>`);
              _push2(ssrRenderComponent(VListItem, {
                to: { name: link },
                value: link,
                active: _ctx.$route.name === link,
                color: "primary",
                class: "rounded-lg py-0 mt-1",
                density: "compact"
              }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VIcon, {
                      icon,
                      title
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VIcon, {
                        icon,
                        title
                      }, null, 8, ["icon", "title"])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(title)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(links, ({ title, link, icon }, index) => {
                return createVNode("div", {
                  class: "text-caption",
                  title,
                  key: index
                }, [
                  createVNode(VListItem, {
                    to: { name: link },
                    value: link,
                    active: _ctx.$route.name === link,
                    color: "primary",
                    class: "rounded-lg py-0 mt-1",
                    density: "compact"
                  }, {
                    prepend: withCtx(() => [
                      createVNode(VIcon, {
                        icon,
                        title
                      }, null, 8, ["icon", "title"])
                    ]),
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(title), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "value", "active"])
                ], 8, ["title"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/config/links.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "config",
  __ssrInlineRender: true,
  setup(__props) {
    const full = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ConfigLinks = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "pa-0 d-flex ga-4",
        style: { "height": "calc(100vh - 100px)" }
      }, _attrs))} data-v-3566152a><div flat class="card-outlined h-100 rounded-lg position-relative bg-white transition-width" style="${ssrRenderStyle({ width: unref(full) ? "20%" : "55px" })}" data-v-3566152a>`);
      _push(ssrRenderComponent(_component_ConfigLinks, null, null, _parent));
      _push(`<div class="position-absolute d-flex align-center" style="${ssrRenderStyle({ "top": "0", "bottom": "0", "right": "-15px" })}" data-v-3566152a>`);
      _push(ssrRenderComponent(VBtn, {
        icon: "",
        size: "25",
        color: "primary",
        onClick: ($event) => full.value = !unref(full)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VIcon, {
              class: { "transform-180": unref(full) }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-chevron-left`);
                } else {
                  return [
                    createTextVNode("mdi-chevron-left")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VIcon, {
                class: { "transform-180": unref(full) }
              }, {
                default: withCtx(() => [
                  createTextVNode("mdi-chevron-left")
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(VCard, {
        flat: "",
        class: "card-outlined py-3 h-100 overflow-auto rounded-lg hide-scrollbar",
        style: { width: unref(full) ? "80%" : "95%" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/config.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const config = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3566152a"]]);
export {
  config as default
};
//# sourceMappingURL=config-NviXXIlC.js.map
