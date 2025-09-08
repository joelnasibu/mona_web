import { _ as __nuxt_component_0 } from "./index-vJXezigf.js";
import { a as useRuntimeConfig, d as __nuxt_component_1 } from "../server.mjs";
import { _ as __nuxt_component_2 } from "./index-Vs68o-o0.js";
import { _ as __nuxt_component_3 } from "./floating-chat-h-46cCq-.js";
import { u as useHead } from "./index-S1hhTCs3.js";
import { ref, withAsyncContext, provide, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useProductStore } from "./products-e11RfeWn.js";
import { u as useCategoryStore } from "./categories-JvrMV5cl.js";
import { V as VApp, a as VMain } from "./VMain-YTg4QM3S.js";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
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
import "./chat-JPFHFeEL.js";
import "./useHelpers-9BVYUhTt.js";
import "date-fns";
import "date-fns/locale";
import "@supabase/supabase-js";
import "./tag-pIHjuosL.js";
import "./resizeObserver-k8M9k6Xi.js";
import "./ssrBoot-xH9VG8QW.js";
/* empty css               */
const _sfc_main = {
  __name: "config",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const environmentVariable = useRuntimeConfig();
    useHead({
      titleTemplate: (title) => `${title ?? "AG"} - ${environmentVariable.public.app_name}`
    });
    const { publishedProducts } = useProductStore();
    const data = ref(([__temp, __restore] = withAsyncContext(() => publishedProducts()), __temp = await __temp, __restore(), __temp));
    const { getCategoriesByType } = useCategoryStore();
    const listCategories = ref(([__temp, __restore] = withAsyncContext(() => getCategoriesByType(false, "SHOP")), __temp = await __temp, __restore(), __temp));
    provide("categoriesList", listCategories.value);
    provide("productsList", data.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientAppBar = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_ClientFooter = __nuxt_component_2;
      const _component_FloatingChat = __nuxt_component_3;
      _push(ssrRenderComponent(VApp, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientAppBar, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "4"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "8"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_NuxtPage, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_NuxtPage)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
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
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ClientFooter, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FloatingChat, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientAppBar),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4"
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
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_ClientFooter),
              createVNode(_component_FloatingChat)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/config.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=config-3J2c5M8R.js.map
