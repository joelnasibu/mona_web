import { _ as __nuxt_component_1 } from "./telephone-Dluk3I-7.js";
import { _ as __nuxt_component_0 } from "./password-JVbmTpyJ.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-kpaqSJk0.js";
import { u as useRules } from "./useRules-Lv1tnQPg.js";
import { ref, mergeProps, withCtx, unref, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import "hookable";
import { u as useHead } from "./index-S1hhTCs3.js";
import { _ as _export_sfc, s as storeToRefs, h as useAppStore, b as navigateTo } from "../server.mjs";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { b as useAuthStore } from "./useHelpers-9BVYUhTt.js";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { V as VCard } from "./VCard-MEGoD2_3.js";
import { V as VForm } from "./VForm-wrdi8IEW.js";
import { V as VTextField } from "./VTextField-8SU2p1Ep.js";
import { V as VBtn } from "./VBtn-yNf12l4D.js";
import "./index-3E7yy1qS.js";
import "./color-rZjm0Y7u.js";
import "./tag-pIHjuosL.js";
import "./VMenu-bZwLMGPK.js";
import "./VOverlay-bpCAw6Z_.js";
import "./position-AkaJaFJy.js";
import "./rounded-jA9LRAgf.js";
import "./delay-5iXTA9KV.js";
import "./lazy-8QocgoLY.js";
import "./index-q-0zZOOG.js";
import "./VList-hhjvxiav.js";
import "./index-d8gkbdU6.js";
import "./ssrBoot-xH9VG8QW.js";
import "./VAvatar-agmUyvkw.js";
import "./VImg-_57rVikU.js";
import "./VDivider-Ce8J4Sp3.js";
import "ufo";
import "@unhead/shared";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "@vue/devtools-api";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "date-fns";
import "date-fns/locale";
/* empty css               */
import "./resizeObserver-k8M9k6Xi.js";
const _sfc_main = {
  __name: "create-account",
  __ssrInlineRender: true,
  setup(__props) {
    const { required, name, email, confirmPassword } = useRules();
    const { loading, error } = storeToRefs(useAppStore());
    const { createAccount: createAccount2 } = useAuthStore();
    const payload = ref({
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      password: "",
      confirmPassword: "",
      picture: "",
      gender: "",
      username: ""
    });
    const setPhone = (val) => {
      payload.value.phone = val;
    };
    const showPassword = ref(false);
    const showConfirm = ref(false);
    const isPasswordWeak = ref(false);
    const checkPassword = (val) => {
      isPasswordWeak.value = val;
    };
    const setPassword = (val) => {
      payload.value.password = val;
    };
    const formRef = ref("");
    const handleContinue = async () => {
      const { valid } = await formRef.value.validate();
      if (valid) {
        await createAccount2(payload.value);
        if (!error.value)
          setTimeout(() => {
            navigateTo({
              name: "auth"
            });
          }, 2e3);
      }
    };
    useHead({
      title: "Create a new account"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Telephone = __nuxt_component_1;
      const _component_CorePassword = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-100" }, _attrs))} data-v-4c80dff3><div class="py-2 text-center" data-v-4c80dff3><b data-v-4c80dff3>Create a free account</b></div>`);
      _push(ssrRenderComponent(VContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    sm: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, {
                          class: "mx-auto mt-4 pa-5 auth-card rounded-lg bg-transparent",
                          flat: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, {
                                ref_key: "formRef",
                                ref: formRef,
                                class: "form-data",
                                onSubmit: () => {
                                }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex ga-2" data-v-4c80dff3${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      placeholder: "First name",
                                      modelValue: unref(payload).firstname,
                                      "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                      "bg-color": "white",
                                      rules: unref(name)(),
                                      "prepend-inner-icon": "mdi-account-outline"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      placeholder: "Last name",
                                      modelValue: unref(payload).lastname,
                                      "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                      "bg-color": "white",
                                      rules: unref(name)(),
                                      "prepend-inner-icon": "mdi-account-outline"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      placeholder: "Email address",
                                      modelValue: unref(payload).email,
                                      "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                      "bg-color": "white",
                                      rules: unref(email)(),
                                      "prepend-inner-icon": "mdi-email-outline"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_Telephone, {
                                      number: unref(payload).phone,
                                      onSetPhone: setPhone
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_CorePassword, {
                                      password: unref(payload).password,
                                      "show-password": unref(showPassword),
                                      onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                      onWeakPassword: checkPassword,
                                      onSetPassword: setPassword
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      placeholder: "Re-enter Password",
                                      "prepend-inner-icon": "mdi-lock-outline",
                                      "append-inner-icon": `${unref(showConfirm) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                      "onClick:appendInner": ($event) => showConfirm.value = !unref(showConfirm),
                                      class: "mt-1",
                                      type: `${unref(showConfirm) ? "text" : "password"}`,
                                      rules: unref(confirmPassword)(unref(payload).password),
                                      "bg-color": "white",
                                      modelValue: unref(payload).confirmPassword,
                                      "onUpdate:modelValue": ($event) => unref(payload).confirmPassword = $event,
                                      autocomplete: "off"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      class: "my-1 text-none text-caption",
                                      flat: "",
                                      density: "comfortable",
                                      color: "primary-accent",
                                      block: "",
                                      onClick: ($event) => handleContinue(),
                                      loading: unref(loading)
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span data-v-4c80dff3${_scopeId6}>Continue</span>`);
                                        } else {
                                          return [
                                            createVNode("span", null, "Continue")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="text-start my-5 text-caption-2" data-v-4c80dff3${_scopeId5}><span data-v-4c80dff3${_scopeId5}> By conitnuing, I consent to Smartsell&#39;s <a href="#" data-v-4c80dff3${_scopeId5}> Conditions of use</a> and <a href="#" data-v-4c80dff3${_scopeId5}> Private Policy</a>.</span></div><div class="w-100 text-caption" data-v-4c80dff3${_scopeId5}><div class="d-flex align-center w-100" data-v-4c80dff3${_scopeId5}><span data-v-4c80dff3${_scopeId5}>Already have account?</span>`);
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      to: { name: "auth" },
                                      class: "px-2 text-primary-accent"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span data-v-4c80dff3${_scopeId6}>Sign in instead</span>`);
                                        } else {
                                          return [
                                            createVNode("span", null, "Sign in instead")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex ga-2" }, [
                                        createVNode(VTextField, {
                                          placeholder: "First name",
                                          modelValue: unref(payload).firstname,
                                          "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                          "bg-color": "white",
                                          rules: unref(name)(),
                                          "prepend-inner-icon": "mdi-account-outline"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(VTextField, {
                                          placeholder: "Last name",
                                          modelValue: unref(payload).lastname,
                                          "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                          "bg-color": "white",
                                          rules: unref(name)(),
                                          "prepend-inner-icon": "mdi-account-outline"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      createVNode(VTextField, {
                                        placeholder: "Email address",
                                        modelValue: unref(payload).email,
                                        "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                        "bg-color": "white",
                                        rules: unref(email)(),
                                        "prepend-inner-icon": "mdi-email-outline"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(_component_Telephone, {
                                        number: unref(payload).phone,
                                        onSetPhone: setPhone
                                      }, null, 8, ["number"]),
                                      createVNode(_component_CorePassword, {
                                        password: unref(payload).password,
                                        "show-password": unref(showPassword),
                                        onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                        onWeakPassword: checkPassword,
                                        onSetPassword: setPassword
                                      }, null, 8, ["password", "show-password", "onToggleShowPassword"]),
                                      createVNode(VTextField, {
                                        placeholder: "Re-enter Password",
                                        "prepend-inner-icon": "mdi-lock-outline",
                                        "append-inner-icon": `${unref(showConfirm) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                        "onClick:appendInner": ($event) => showConfirm.value = !unref(showConfirm),
                                        class: "mt-1",
                                        type: `${unref(showConfirm) ? "text" : "password"}`,
                                        rules: unref(confirmPassword)(unref(payload).password),
                                        "bg-color": "white",
                                        modelValue: unref(payload).confirmPassword,
                                        "onUpdate:modelValue": ($event) => unref(payload).confirmPassword = $event,
                                        autocomplete: "off"
                                      }, null, 8, ["append-inner-icon", "onClick:appendInner", "type", "rules", "modelValue", "onUpdate:modelValue"]),
                                      createVNode(VBtn, {
                                        class: "my-1 text-none text-caption",
                                        flat: "",
                                        density: "comfortable",
                                        color: "primary-accent",
                                        block: "",
                                        onClick: ($event) => handleContinue(),
                                        loading: unref(loading)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Continue")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick", "loading"]),
                                      createVNode("div", { class: "text-start my-5 text-caption-2" }, [
                                        createVNode("span", null, [
                                          createTextVNode(" By conitnuing, I consent to Smartsell's "),
                                          createVNode("a", { href: "#" }, " Conditions of use"),
                                          createTextVNode(" and "),
                                          createVNode("a", { href: "#" }, " Private Policy"),
                                          createTextVNode(".")
                                        ])
                                      ]),
                                      createVNode("div", { class: "w-100 text-caption" }, [
                                        createVNode("div", { class: "d-flex align-center w-100" }, [
                                          createVNode("span", null, "Already have account?"),
                                          createVNode(_component_NuxtLink, {
                                            to: { name: "auth" },
                                            class: "px-2 text-primary-accent"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, "Sign in instead")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, {
                                  ref_key: "formRef",
                                  ref: formRef,
                                  class: "form-data",
                                  onSubmit: withModifiers(() => {
                                  }, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex ga-2" }, [
                                      createVNode(VTextField, {
                                        placeholder: "First name",
                                        modelValue: unref(payload).firstname,
                                        "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                        "bg-color": "white",
                                        rules: unref(name)(),
                                        "prepend-inner-icon": "mdi-account-outline"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(VTextField, {
                                        placeholder: "Last name",
                                        modelValue: unref(payload).lastname,
                                        "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                        "bg-color": "white",
                                        rules: unref(name)(),
                                        "prepend-inner-icon": "mdi-account-outline"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    createVNode(VTextField, {
                                      placeholder: "Email address",
                                      modelValue: unref(payload).email,
                                      "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                      "bg-color": "white",
                                      rules: unref(email)(),
                                      "prepend-inner-icon": "mdi-email-outline"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(_component_Telephone, {
                                      number: unref(payload).phone,
                                      onSetPhone: setPhone
                                    }, null, 8, ["number"]),
                                    createVNode(_component_CorePassword, {
                                      password: unref(payload).password,
                                      "show-password": unref(showPassword),
                                      onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                      onWeakPassword: checkPassword,
                                      onSetPassword: setPassword
                                    }, null, 8, ["password", "show-password", "onToggleShowPassword"]),
                                    createVNode(VTextField, {
                                      placeholder: "Re-enter Password",
                                      "prepend-inner-icon": "mdi-lock-outline",
                                      "append-inner-icon": `${unref(showConfirm) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                      "onClick:appendInner": ($event) => showConfirm.value = !unref(showConfirm),
                                      class: "mt-1",
                                      type: `${unref(showConfirm) ? "text" : "password"}`,
                                      rules: unref(confirmPassword)(unref(payload).password),
                                      "bg-color": "white",
                                      modelValue: unref(payload).confirmPassword,
                                      "onUpdate:modelValue": ($event) => unref(payload).confirmPassword = $event,
                                      autocomplete: "off"
                                    }, null, 8, ["append-inner-icon", "onClick:appendInner", "type", "rules", "modelValue", "onUpdate:modelValue"]),
                                    createVNode(VBtn, {
                                      class: "my-1 text-none text-caption",
                                      flat: "",
                                      density: "comfortable",
                                      color: "primary-accent",
                                      block: "",
                                      onClick: ($event) => handleContinue(),
                                      loading: unref(loading)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "Continue")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick", "loading"]),
                                    createVNode("div", { class: "text-start my-5 text-caption-2" }, [
                                      createVNode("span", null, [
                                        createTextVNode(" By conitnuing, I consent to Smartsell's "),
                                        createVNode("a", { href: "#" }, " Conditions of use"),
                                        createTextVNode(" and "),
                                        createVNode("a", { href: "#" }, " Private Policy"),
                                        createTextVNode(".")
                                      ])
                                    ]),
                                    createVNode("div", { class: "w-100 text-caption" }, [
                                      createVNode("div", { class: "d-flex align-center w-100" }, [
                                        createVNode("span", null, "Already have account?"),
                                        createVNode(_component_NuxtLink, {
                                          to: { name: "auth" },
                                          class: "px-2 text-primary-accent"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "Sign in instead")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["onSubmit"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, {
                            class: "mx-auto mt-4 pa-5 auth-card rounded-lg bg-transparent",
                            flat: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                ref_key: "formRef",
                                ref: formRef,
                                class: "form-data",
                                onSubmit: withModifiers(() => {
                                }, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex ga-2" }, [
                                    createVNode(VTextField, {
                                      placeholder: "First name",
                                      modelValue: unref(payload).firstname,
                                      "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                      "bg-color": "white",
                                      rules: unref(name)(),
                                      "prepend-inner-icon": "mdi-account-outline"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(VTextField, {
                                      placeholder: "Last name",
                                      modelValue: unref(payload).lastname,
                                      "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                      "bg-color": "white",
                                      rules: unref(name)(),
                                      "prepend-inner-icon": "mdi-account-outline"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                  ]),
                                  createVNode(VTextField, {
                                    placeholder: "Email address",
                                    modelValue: unref(payload).email,
                                    "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                    "bg-color": "white",
                                    rules: unref(email)(),
                                    "prepend-inner-icon": "mdi-email-outline"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(_component_Telephone, {
                                    number: unref(payload).phone,
                                    onSetPhone: setPhone
                                  }, null, 8, ["number"]),
                                  createVNode(_component_CorePassword, {
                                    password: unref(payload).password,
                                    "show-password": unref(showPassword),
                                    onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                    onWeakPassword: checkPassword,
                                    onSetPassword: setPassword
                                  }, null, 8, ["password", "show-password", "onToggleShowPassword"]),
                                  createVNode(VTextField, {
                                    placeholder: "Re-enter Password",
                                    "prepend-inner-icon": "mdi-lock-outline",
                                    "append-inner-icon": `${unref(showConfirm) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                    "onClick:appendInner": ($event) => showConfirm.value = !unref(showConfirm),
                                    class: "mt-1",
                                    type: `${unref(showConfirm) ? "text" : "password"}`,
                                    rules: unref(confirmPassword)(unref(payload).password),
                                    "bg-color": "white",
                                    modelValue: unref(payload).confirmPassword,
                                    "onUpdate:modelValue": ($event) => unref(payload).confirmPassword = $event,
                                    autocomplete: "off"
                                  }, null, 8, ["append-inner-icon", "onClick:appendInner", "type", "rules", "modelValue", "onUpdate:modelValue"]),
                                  createVNode(VBtn, {
                                    class: "my-1 text-none text-caption",
                                    flat: "",
                                    density: "comfortable",
                                    color: "primary-accent",
                                    block: "",
                                    onClick: ($event) => handleContinue(),
                                    loading: unref(loading)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Continue")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "loading"]),
                                  createVNode("div", { class: "text-start my-5 text-caption-2" }, [
                                    createVNode("span", null, [
                                      createTextVNode(" By conitnuing, I consent to Smartsell's "),
                                      createVNode("a", { href: "#" }, " Conditions of use"),
                                      createTextVNode(" and "),
                                      createVNode("a", { href: "#" }, " Private Policy"),
                                      createTextVNode(".")
                                    ])
                                  ]),
                                  createVNode("div", { class: "w-100 text-caption" }, [
                                    createVNode("div", { class: "d-flex align-center w-100" }, [
                                      createVNode("span", null, "Already have account?"),
                                      createVNode(_component_NuxtLink, {
                                        to: { name: "auth" },
                                        class: "px-2 text-primary-accent"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Sign in instead")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["onSubmit"])
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
                      sm: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          class: "mx-auto mt-4 pa-5 auth-card rounded-lg bg-transparent",
                          flat: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              ref_key: "formRef",
                              ref: formRef,
                              class: "form-data",
                              onSubmit: withModifiers(() => {
                              }, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex ga-2" }, [
                                  createVNode(VTextField, {
                                    placeholder: "First name",
                                    modelValue: unref(payload).firstname,
                                    "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                    "bg-color": "white",
                                    rules: unref(name)(),
                                    "prepend-inner-icon": "mdi-account-outline"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                  createVNode(VTextField, {
                                    placeholder: "Last name",
                                    modelValue: unref(payload).lastname,
                                    "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                    "bg-color": "white",
                                    rules: unref(name)(),
                                    "prepend-inner-icon": "mdi-account-outline"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                ]),
                                createVNode(VTextField, {
                                  placeholder: "Email address",
                                  modelValue: unref(payload).email,
                                  "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                  "bg-color": "white",
                                  rules: unref(email)(),
                                  "prepend-inner-icon": "mdi-email-outline"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_Telephone, {
                                  number: unref(payload).phone,
                                  onSetPhone: setPhone
                                }, null, 8, ["number"]),
                                createVNode(_component_CorePassword, {
                                  password: unref(payload).password,
                                  "show-password": unref(showPassword),
                                  onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                  onWeakPassword: checkPassword,
                                  onSetPassword: setPassword
                                }, null, 8, ["password", "show-password", "onToggleShowPassword"]),
                                createVNode(VTextField, {
                                  placeholder: "Re-enter Password",
                                  "prepend-inner-icon": "mdi-lock-outline",
                                  "append-inner-icon": `${unref(showConfirm) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                  "onClick:appendInner": ($event) => showConfirm.value = !unref(showConfirm),
                                  class: "mt-1",
                                  type: `${unref(showConfirm) ? "text" : "password"}`,
                                  rules: unref(confirmPassword)(unref(payload).password),
                                  "bg-color": "white",
                                  modelValue: unref(payload).confirmPassword,
                                  "onUpdate:modelValue": ($event) => unref(payload).confirmPassword = $event,
                                  autocomplete: "off"
                                }, null, 8, ["append-inner-icon", "onClick:appendInner", "type", "rules", "modelValue", "onUpdate:modelValue"]),
                                createVNode(VBtn, {
                                  class: "my-1 text-none text-caption",
                                  flat: "",
                                  density: "comfortable",
                                  color: "primary-accent",
                                  block: "",
                                  onClick: ($event) => handleContinue(),
                                  loading: unref(loading)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Continue")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "loading"]),
                                createVNode("div", { class: "text-start my-5 text-caption-2" }, [
                                  createVNode("span", null, [
                                    createTextVNode(" By conitnuing, I consent to Smartsell's "),
                                    createVNode("a", { href: "#" }, " Conditions of use"),
                                    createTextVNode(" and "),
                                    createVNode("a", { href: "#" }, " Private Policy"),
                                    createTextVNode(".")
                                  ])
                                ]),
                                createVNode("div", { class: "w-100 text-caption" }, [
                                  createVNode("div", { class: "d-flex align-center w-100" }, [
                                    createVNode("span", null, "Already have account?"),
                                    createVNode(_component_NuxtLink, {
                                      to: { name: "auth" },
                                      class: "px-2 text-primary-accent"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "Sign in instead")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
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
                    sm: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, {
                        class: "mx-auto mt-4 pa-5 auth-card rounded-lg bg-transparent",
                        flat: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            ref_key: "formRef",
                            ref: formRef,
                            class: "form-data",
                            onSubmit: withModifiers(() => {
                            }, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex ga-2" }, [
                                createVNode(VTextField, {
                                  placeholder: "First name",
                                  modelValue: unref(payload).firstname,
                                  "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                  "bg-color": "white",
                                  rules: unref(name)(),
                                  "prepend-inner-icon": "mdi-account-outline"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(VTextField, {
                                  placeholder: "Last name",
                                  modelValue: unref(payload).lastname,
                                  "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                  "bg-color": "white",
                                  rules: unref(name)(),
                                  "prepend-inner-icon": "mdi-account-outline"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                              ]),
                              createVNode(VTextField, {
                                placeholder: "Email address",
                                modelValue: unref(payload).email,
                                "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                "bg-color": "white",
                                rules: unref(email)(),
                                "prepend-inner-icon": "mdi-email-outline"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_Telephone, {
                                number: unref(payload).phone,
                                onSetPhone: setPhone
                              }, null, 8, ["number"]),
                              createVNode(_component_CorePassword, {
                                password: unref(payload).password,
                                "show-password": unref(showPassword),
                                onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                onWeakPassword: checkPassword,
                                onSetPassword: setPassword
                              }, null, 8, ["password", "show-password", "onToggleShowPassword"]),
                              createVNode(VTextField, {
                                placeholder: "Re-enter Password",
                                "prepend-inner-icon": "mdi-lock-outline",
                                "append-inner-icon": `${unref(showConfirm) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                "onClick:appendInner": ($event) => showConfirm.value = !unref(showConfirm),
                                class: "mt-1",
                                type: `${unref(showConfirm) ? "text" : "password"}`,
                                rules: unref(confirmPassword)(unref(payload).password),
                                "bg-color": "white",
                                modelValue: unref(payload).confirmPassword,
                                "onUpdate:modelValue": ($event) => unref(payload).confirmPassword = $event,
                                autocomplete: "off"
                              }, null, 8, ["append-inner-icon", "onClick:appendInner", "type", "rules", "modelValue", "onUpdate:modelValue"]),
                              createVNode(VBtn, {
                                class: "my-1 text-none text-caption",
                                flat: "",
                                density: "comfortable",
                                color: "primary-accent",
                                block: "",
                                onClick: ($event) => handleContinue(),
                                loading: unref(loading)
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Continue")
                                ]),
                                _: 1
                              }, 8, ["onClick", "loading"]),
                              createVNode("div", { class: "text-start my-5 text-caption-2" }, [
                                createVNode("span", null, [
                                  createTextVNode(" By conitnuing, I consent to Smartsell's "),
                                  createVNode("a", { href: "#" }, " Conditions of use"),
                                  createTextVNode(" and "),
                                  createVNode("a", { href: "#" }, " Private Policy"),
                                  createTextVNode(".")
                                ])
                              ]),
                              createVNode("div", { class: "w-100 text-caption" }, [
                                createVNode("div", { class: "d-flex align-center w-100" }, [
                                  createVNode("span", null, "Already have account?"),
                                  createVNode(_component_NuxtLink, {
                                    to: { name: "auth" },
                                    class: "px-2 text-primary-accent"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Sign in instead")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/create-account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createAccount = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4c80dff3"]]);
export {
  createAccount as default
};
//# sourceMappingURL=create-account-GAVyUxEN.js.map
