import { u as useRules } from './useRules-Lv1tnQPg.mjs';
import { u as useHelpers, a as useAuthStore } from './useHelpers-9BVYUhTt.mjs';
import { m as useDevice, h as useAppStore, s as storeToRefs } from '../server.mjs';
import { computed, ref, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as VExpandTransition } from './index-d8gkbdU6.mjs';
import { V as VCard } from './VCard-MEGoD2_3.mjs';
import { V as VIcon } from './index-3E7yy1qS.mjs';
import { V as VForm } from './VForm-wrdi8IEW.mjs';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import { V as VTextField } from './VTextField-8SU2p1Ep.mjs';
import { V as VBtn } from './VBtn-yNf12l4D.mjs';
import 'date-fns';
import 'date-fns/locale';
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
import './VAvatar-agmUyvkw.mjs';
import './rounded-jA9LRAgf.mjs';
import './VImg-_57rVikU.mjs';
import './color-rZjm0Y7u.mjs';
import './index-q-0zZOOG.mjs';
import './position-AkaJaFJy.mjs';
import './resizeObserver-k8M9k6Xi.mjs';

const _sfc_main = {
  __name: "shop",
  __ssrInlineRender: true,
  setup(__props) {
    var _a2, _b;
    var _a;
    const { required } = useRules();
    const { digitsOnly } = useHelpers();
    const { isMobile } = useDevice();
    const appStore = useAppStore();
    const { error, loading, currentUser } = storeToRefs(appStore);
    const { shopAccount, updateAccount } = useAuthStore();
    const hasAccount = computed(() => {
      return currentUser.value.account;
    });
    const preview = ref(hasAccount.value);
    const formData = ref(null);
    const account = ref({
      userId: currentUser.value.userId,
      id: (_a = currentUser.value.account) == null ? void 0 : _a.accountId,
      qrt: "",
      avenue: "",
      location: (_a2 = currentUser.value.account.location) != null ? _a2 : "",
      cardDetails: (_b = currentUser.value.account.cardDetails) != null ? _b : {
        accountNumber: "",
        accountName: "",
        exp: "",
        cvc: ""
      }
    });
    const handleSave = async () => {
      const { valid } = await formData.value.validate();
      if (valid) {
        hasAccount.value ? await updateAccount(account.value, "accounts") : await shopAccount(account.value, "accounts");
        if (!error.value)
          setTimeout(() => {
            appStore.setUser({
              ...currentUser.value,
              account: account.value
            });
            preview.value = !preview.value;
          }, 2e3);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(hasAccount)) {
        _push(`<div class="d-flex align-center ga-3 w-100"><div class="d-flex w-100 ga-2">`);
        _push(ssrRenderComponent(VCard, {
          width: "60",
          class: "bg-card pa-1 card-outlined rounded",
          flat: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VIcon, {
                size: "45",
                color: "primary-dark",
                icon: "mdi-truck"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VIcon, {
                  size: "45",
                  color: "primary-dark",
                  icon: "mdi-truck"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="text-caption d-flex flex-column"><b>Delivery address</b><div class="text-disabled"><p>${ssrInterpolate(unref(currentUser).account.location)}</p></div><div class="">`);
        if (unref(isMobile)) {
          _push(ssrRenderComponent(VIcon, {
            size: "small",
            end: "",
            icon: `mdi-${unref(preview) ? "pencil" : "eye"}-outline`,
            color: "secondary",
            onClick: ($event) => preview.value = !unref(preview)
          }, null, _parent));
        } else {
          _push(`<div class="text-caption text-none cursor-pointer text-secondary"><span>${ssrInterpolate(unref(preview) ? "Change" : "Hide")}</span></div>`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(VExpandTransition, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(preview)) {
              _push2(`<div class=""${_scopeId}>`);
              _push2(ssrRenderComponent(VForm, {
                ref_key: "formData",
                ref: formData,
                class: "mt-3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VContainer, { class: "mt-2" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VTextField, {
                                        label: "Quartier",
                                        modelValue: unref(account).location,
                                        "onUpdate:modelValue": ($event) => unref(account).location = $event,
                                        modelModifiers: { trim: true },
                                        rules: unref(required)()
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VTextField, {
                                          label: "Quartier",
                                          modelValue: unref(account).location,
                                          "onUpdate:modelValue": ($event) => unref(account).location = $event,
                                          modelModifiers: { trim: true },
                                          rules: unref(required)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VTextField, {
                                        label: "Avenue",
                                        modelValue: unref(account).avenue,
                                        "onUpdate:modelValue": ($event) => unref(account).avenue = $event,
                                        modelModifiers: { trim: true },
                                        rules: unref(required)()
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VTextField, {
                                          label: "Avenue",
                                          modelValue: unref(account).avenue,
                                          "onUpdate:modelValue": ($event) => unref(account).avenue = $event,
                                          modelModifiers: { trim: true },
                                          rules: unref(required)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VTextField, {
                                        label: "Numero",
                                        modelValue: unref(account).qrt,
                                        "onUpdate:modelValue": ($event) => unref(account).qrt = $event,
                                        modelModifiers: { number: true, trim: true },
                                        rules: unref(required)(),
                                        onKeypress: unref(digitsOnly)
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VTextField, {
                                          label: "Numero",
                                          modelValue: unref(account).qrt,
                                          "onUpdate:modelValue": ($event) => unref(account).qrt = $event,
                                          modelModifiers: { number: true, trim: true },
                                          rules: unref(required)(),
                                          onKeypress: unref(digitsOnly)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onKeypress"])
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
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Quartier",
                                        modelValue: unref(account).location,
                                        "onUpdate:modelValue": ($event) => unref(account).location = $event,
                                        modelModifiers: { trim: true },
                                        rules: unref(required)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Avenue",
                                        modelValue: unref(account).avenue,
                                        "onUpdate:modelValue": ($event) => unref(account).avenue = $event,
                                        modelModifiers: { trim: true },
                                        rules: unref(required)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "4"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Numero",
                                        modelValue: unref(account).qrt,
                                        "onUpdate:modelValue": ($event) => unref(account).qrt = $event,
                                        modelModifiers: { number: true, trim: true },
                                        rules: unref(required)(),
                                        onKeypress: unref(digitsOnly)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onKeypress"])
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
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      label: "Quartier",
                                      modelValue: unref(account).location,
                                      "onUpdate:modelValue": ($event) => unref(account).location = $event,
                                      modelModifiers: { trim: true },
                                      rules: unref(required)()
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      label: "Avenue",
                                      modelValue: unref(account).avenue,
                                      "onUpdate:modelValue": ($event) => unref(account).avenue = $event,
                                      modelModifiers: { trim: true },
                                      rules: unref(required)()
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      label: "Numero",
                                      modelValue: unref(account).qrt,
                                      "onUpdate:modelValue": ($event) => unref(account).qrt = $event,
                                      modelModifiers: { number: true, trim: true },
                                      rules: unref(required)(),
                                      onKeypress: unref(digitsOnly)
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onKeypress"])
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
                    _push3(ssrRenderComponent(VBtn, {
                      color: "primary-accent",
                      class: "rounded-lg text-caption",
                      block: "",
                      flat: "",
                      loading: unref(loading),
                      onClick: handleSave
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>Save</span>`);
                        } else {
                          return [
                            createVNode("span", null, "Save")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VContainer, { class: "mt-2" }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    label: "Quartier",
                                    modelValue: unref(account).location,
                                    "onUpdate:modelValue": ($event) => unref(account).location = $event,
                                    modelModifiers: { trim: true },
                                    rules: unref(required)()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    label: "Avenue",
                                    modelValue: unref(account).avenue,
                                    "onUpdate:modelValue": ($event) => unref(account).avenue = $event,
                                    modelModifiers: { trim: true },
                                    rules: unref(required)()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    label: "Numero",
                                    modelValue: unref(account).qrt,
                                    "onUpdate:modelValue": ($event) => unref(account).qrt = $event,
                                    modelModifiers: { number: true, trim: true },
                                    rules: unref(required)(),
                                    onKeypress: unref(digitsOnly)
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onKeypress"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        color: "primary-accent",
                        class: "rounded-lg text-caption",
                        block: "",
                        flat: "",
                        loading: unref(loading),
                        onClick: handleSave
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Save")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !unref(preview) ? (openBlock(), createBlock("div", {
                key: 0,
                class: ""
              }, [
                createVNode(VForm, {
                  ref_key: "formData",
                  ref: formData,
                  class: "mt-3"
                }, {
                  default: withCtx(() => [
                    createVNode(VContainer, { class: "mt-2" }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  label: "Quartier",
                                  modelValue: unref(account).location,
                                  "onUpdate:modelValue": ($event) => unref(account).location = $event,
                                  modelModifiers: { trim: true },
                                  rules: unref(required)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  label: "Avenue",
                                  modelValue: unref(account).avenue,
                                  "onUpdate:modelValue": ($event) => unref(account).avenue = $event,
                                  modelModifiers: { trim: true },
                                  rules: unref(required)()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VTextField, {
                                  label: "Numero",
                                  modelValue: unref(account).qrt,
                                  "onUpdate:modelValue": ($event) => unref(account).qrt = $event,
                                  modelModifiers: { number: true, trim: true },
                                  rules: unref(required)(),
                                  onKeypress: unref(digitsOnly)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onKeypress"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      color: "primary-accent",
                      class: "rounded-lg text-caption",
                      block: "",
                      flat: "",
                      loading: unref(loading),
                      onClick: handleSave
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Save")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                }, 512)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index/shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=shop-uLSXkH5L.mjs.map
