import { _ as __nuxt_component_0 } from "./page-header-rZyOPLsZ.js";
import { _ as __nuxt_component_0$1 } from "./index-RXRlxYy9.js";
import { _ as __nuxt_component_1 } from "./telephone-Dluk3I-7.js";
import { _ as __nuxt_component_1$1 } from "./select-sjn27vix.js";
import { _ as __nuxt_component_0$2 } from "./password-JVbmTpyJ.js";
import { u as useRules } from "./useRules-Lv1tnQPg.js";
import { u as useHelpers, b as useAuthStore } from "./useHelpers-9BVYUhTt.js";
import { ref, computed, withCtx, unref, createVNode, isRef, useSSRContext } from "vue";
import "hookable";
import { a as useSeoMeta } from "./index-S1hhTCs3.js";
import { s as storeToRefs, h as useAppStore, b as navigateTo } from "../server.mjs";
import "destr";
import "klona";
import "devalue";
import "defu";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useRoleStore } from "./roles-K2HnqOoq.js";
import { V as VBtn } from "./VBtn-yNf12l4D.js";
import { V as VForm } from "./VForm-wrdi8IEW.js";
import { V as VContainer } from "./VContainer-jF5qmVp8.js";
import { V as VRow, a as VCol } from "./VRow-lyrtfIhE.js";
import { V as VTextField } from "./VTextField-8SU2p1Ep.js";
import "./index-3E7yy1qS.js";
import "./color-rZjm0Y7u.js";
import "./tag-pIHjuosL.js";
import "./VSpacer-0DxA8eQn.js";
/* empty css               */
import "./VAvatar-agmUyvkw.js";
import "./rounded-jA9LRAgf.js";
import "./VImg-_57rVikU.js";
import "./index-q-0zZOOG.js";
import "./VDivider-Ce8J4Sp3.js";
import "./VDialog-acnQ15uX.js";
import "./VCard-MEGoD2_3.js";
import "./position-AkaJaFJy.js";
import "./VOverlay-bpCAw6Z_.js";
import "./delay-5iXTA9KV.js";
import "./lazy-8QocgoLY.js";
import "./VMenu-bZwLMGPK.js";
import "vue-advanced-cropper";
import "./VList-hhjvxiav.js";
import "./index-d8gkbdU6.js";
import "./ssrBoot-xH9VG8QW.js";
import "./VCheckbox-Omi4Z8sK.js";
import "./VCheckboxBtn-lCSbAwQG.js";
import "./VSelectionControl-t8h0Xxrv.js";
import "date-fns";
import "date-fns/locale";
import "@unhead/shared";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
import "@vue/devtools-api";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "./resizeObserver-k8M9k6Xi.js";
const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const { required, name, number, emailOnly, confirmPassword } = useRules();
    const { digitsOnly, randPassword } = useHelpers();
    const { loading, error, currentUser } = storeToRefs(useAppStore());
    const { createUser } = useAuthStore();
    useRoleStore();
    const roles = ref([]);
    ref(false);
    const listRoles = computed(() => {
      return roles.value.filter(
        (r) => currentUser.value.accessLevel === 1 ? r : r.level === currentUser.value.accessLevel && r.role !== currentUser.value.role
      ).map((r) => r.role);
    }), role = ref(""), setRole = (val) => {
      var _a;
      role.value = val;
      payload.value.roleId = (_a = roles.value.find((r) => r.role == val)) == null ? void 0 : _a.id;
    };
    const payload = ref({
      email: "",
      phone: "",
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      cpassword: "",
      roleId: 0,
      picture: null,
      gender: ""
    });
    const showPassword = ref(false);
    const formData = ref(null);
    const submit = async () => {
      const { valid } = await formData.value.validate();
      if (valid) {
        await createUser(payload.value);
        if (!error.value)
          setTimeout(() => {
            navigateTo({
              name: "admin-users"
            });
          }, 2e3);
      }
    };
    const setImage = (val) => {
      payload.value.picture = val;
    };
    const isPasswordWeak = ref(false);
    const checkPassword = (val) => {
      isPasswordWeak.value = val;
    };
    const setPassword = (val) => {
      payload.value.password = val;
    };
    const setGender = (val) => {
      payload.value.gender = val;
    };
    const setPhone = (val) => {
      payload.value.phone = val;
    };
    useSeoMeta({
      title: "Add user"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCorePageHeader = __nuxt_component_0;
      const _component_AdminCoreImage = __nuxt_component_0$1;
      const _component_Telephone = __nuxt_component_1;
      const _component_AdminCoreSelect = __nuxt_component_1$1;
      const _component_CorePassword = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminCorePageHeader, { route: "admin-users" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              class: "text-capitalize ml-2 text-caption",
              "prepend-icon": "mdi-content-save",
              size: "small",
              flat: "",
              color: "primary-dark",
              onClick: submit,
              loading: unref(loading),
              rounded: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Save</span>`);
                } else {
                  return [
                    createVNode("span", null, "Save")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode(VBtn, {
                  class: "text-capitalize ml-2 text-caption",
                  "prepend-icon": "mdi-content-save",
                  size: "small",
                  flat: "",
                  color: "primary-dark",
                  onClick: submit,
                  loading: unref(loading),
                  rounded: ""
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Save")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VForm, {
        ref_key: "formData",
        ref: formData,
        class: "mt-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VContainer, {
              class: "pa-0",
              fluid: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AdminCoreImage, {
                                profile: true,
                                image: unref(payload).picture,
                                onSetImage: setImage
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AdminCoreImage, {
                                  profile: true,
                                  image: unref(payload).picture,
                                  onSetImage: setImage
                                }, null, 8, ["image"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VContainer, {
                                class: "pa-0 row-form-data",
                                fluid: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "First name",
                                                  modelValue: unref(payload).firstname,
                                                  "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                                  rules: unref(name)()
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "First name",
                                                    modelValue: unref(payload).firstname,
                                                    "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                                    rules: unref(name)()
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Last name",
                                                  modelValue: unref(payload).lastname,
                                                  "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                                  rules: unref(name)()
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Last name",
                                                    modelValue: unref(payload).lastname,
                                                    "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                                    rules: unref(name)()
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "First name",
                                                  modelValue: unref(payload).firstname,
                                                  "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                                  rules: unref(name)()
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Last name",
                                                  modelValue: unref(payload).lastname,
                                                  "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                                  rules: unref(name)()
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Email address",
                                                  modelValue: unref(payload).email,
                                                  "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                                  rules: unref(emailOnly)()
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Email address",
                                                    modelValue: unref(payload).email,
                                                    "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                                    rules: unref(emailOnly)()
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_Telephone, {
                                                  number: unref(payload).phone,
                                                  onSetPhone: setPhone
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_Telephone, {
                                                    number: unref(payload).phone,
                                                    onSetPhone: setPhone
                                                  }, null, 8, ["number"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Email address",
                                                  modelValue: unref(payload).email,
                                                  "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                                  rules: unref(emailOnly)()
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Telephone, {
                                                  number: unref(payload).phone,
                                                  onSetPhone: setPhone
                                                }, null, 8, ["number"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Gender",
                                                  modelValue: unref(payload).gender,
                                                  "onUpdate:modelValue": ($event) => unref(payload).gender = $event,
                                                  id: "selectGender",
                                                  readonly: ""
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#selectGender",
                                                  list: ["MALE", "FEMALE"],
                                                  listValue: unref(payload).gender,
                                                  onSetItem: setGender
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Gender",
                                                    modelValue: unref(payload).gender,
                                                    "onUpdate:modelValue": ($event) => unref(payload).gender = $event,
                                                    id: "selectGender",
                                                    readonly: ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#selectGender",
                                                    list: ["MALE", "FEMALE"],
                                                    listValue: unref(payload).gender,
                                                    onSetItem: setGender
                                                  }, null, 8, ["listValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Role",
                                                  modelValue: unref(role),
                                                  "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                  rules: unref(required)(),
                                                  id: "selectRole",
                                                  readonly: "",
                                                  "append-inner-icon": "mdi-chevron-down"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_AdminCoreSelect, {
                                                  activator: "#selectRole",
                                                  list: unref(listRoles),
                                                  listValue: unref(role),
                                                  onSetItem: setRole
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Role",
                                                    modelValue: unref(role),
                                                    "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                    rules: unref(required)(),
                                                    id: "selectRole",
                                                    readonly: "",
                                                    "append-inner-icon": "mdi-chevron-down"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_AdminCoreSelect, {
                                                    activator: "#selectRole",
                                                    list: unref(listRoles),
                                                    listValue: unref(role),
                                                    onSetItem: setRole
                                                  }, null, 8, ["list", "listValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Gender",
                                                  modelValue: unref(payload).gender,
                                                  "onUpdate:modelValue": ($event) => unref(payload).gender = $event,
                                                  id: "selectGender",
                                                  readonly: ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#selectGender",
                                                  list: ["MALE", "FEMALE"],
                                                  listValue: unref(payload).gender,
                                                  onSetItem: setGender
                                                }, null, 8, ["listValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Role",
                                                  modelValue: unref(role),
                                                  "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                  rules: unref(required)(),
                                                  id: "selectRole",
                                                  readonly: "",
                                                  "append-inner-icon": "mdi-chevron-down"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(_component_AdminCoreSelect, {
                                                  activator: "#selectRole",
                                                  list: unref(listRoles),
                                                  listValue: unref(role),
                                                  onSetItem: setRole
                                                }, null, 8, ["list", "listValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="text-right text-caption"${_scopeId7}><span class="text-decoration-underline cursor-pointer"${_scopeId7}>Generate password</span></div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "text-right text-caption" }, [
                                                    createVNode("span", {
                                                      class: "text-decoration-underline cursor-pointer",
                                                      onClick: ($event) => {
                                                        unref(payload).password = unref(payload).cpassword = unref(randPassword)();
                                                        showPassword.value = true;
                                                      }
                                                    }, "Generate password", 8, ["onClick"])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "text-right text-caption" }, [
                                                  createVNode("span", {
                                                    class: "text-decoration-underline cursor-pointer",
                                                    onClick: ($event) => {
                                                      unref(payload).password = unref(payload).cpassword = unref(randPassword)();
                                                      showPassword.value = true;
                                                    }
                                                  }, "Generate password", 8, ["onClick"])
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_CorePassword, {
                                                  password: unref(payload).password,
                                                  "show-password": unref(showPassword),
                                                  onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                                  onWeakPassword: checkPassword,
                                                  onSetPassword: setPassword
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_CorePassword, {
                                                    password: unref(payload).password,
                                                    "show-password": unref(showPassword),
                                                    onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                                    onWeakPassword: checkPassword,
                                                    onSetPassword: setPassword
                                                  }, null, 8, ["password", "show-password", "onToggleShowPassword"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  label: "Confirm password",
                                                  modelValue: unref(payload).cpassword,
                                                  "onUpdate:modelValue": ($event) => unref(payload).cpassword = $event,
                                                  rules: unref(confirmPassword)(unref(payload).password),
                                                  "prepend-inner-icon": "mdi-lock-outline",
                                                  type: `${unref(showPassword) ? "text" : "password"}`,
                                                  "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                                  "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    label: "Confirm password",
                                                    modelValue: unref(payload).cpassword,
                                                    "onUpdate:modelValue": ($event) => unref(payload).cpassword = $event,
                                                    rules: unref(confirmPassword)(unref(payload).password),
                                                    "prepend-inner-icon": "mdi-lock-outline",
                                                    type: `${unref(showPassword) ? "text" : "password"}`,
                                                    "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                                    "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_CorePassword, {
                                                  password: unref(payload).password,
                                                  "show-password": unref(showPassword),
                                                  onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                                  onWeakPassword: checkPassword,
                                                  onSetPassword: setPassword
                                                }, null, 8, ["password", "show-password", "onToggleShowPassword"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              sm: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  label: "Confirm password",
                                                  modelValue: unref(payload).cpassword,
                                                  "onUpdate:modelValue": ($event) => unref(payload).cpassword = $event,
                                                  rules: unref(confirmPassword)(unref(payload).password),
                                                  "prepend-inner-icon": "mdi-lock-outline",
                                                  type: `${unref(showPassword) ? "text" : "password"}`,
                                                  "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                                  "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "First name",
                                                modelValue: unref(payload).firstname,
                                                "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                                rules: unref(name)()
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Last name",
                                                modelValue: unref(payload).lastname,
                                                "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                                rules: unref(name)()
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Email address",
                                                modelValue: unref(payload).email,
                                                "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                                rules: unref(emailOnly)()
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Telephone, {
                                                number: unref(payload).phone,
                                                onSetPhone: setPhone
                                              }, null, 8, ["number"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Gender",
                                                modelValue: unref(payload).gender,
                                                "onUpdate:modelValue": ($event) => unref(payload).gender = $event,
                                                id: "selectGender",
                                                readonly: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#selectGender",
                                                list: ["MALE", "FEMALE"],
                                                listValue: unref(payload).gender,
                                                onSetItem: setGender
                                              }, null, 8, ["listValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Role",
                                                modelValue: unref(role),
                                                "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                                rules: unref(required)(),
                                                id: "selectRole",
                                                readonly: "",
                                                "append-inner-icon": "mdi-chevron-down"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(_component_AdminCoreSelect, {
                                                activator: "#selectRole",
                                                list: unref(listRoles),
                                                listValue: unref(role),
                                                onSetItem: setRole
                                              }, null, 8, ["list", "listValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "text-right text-caption" }, [
                                                createVNode("span", {
                                                  class: "text-decoration-underline cursor-pointer",
                                                  onClick: ($event) => {
                                                    unref(payload).password = unref(payload).cpassword = unref(randPassword)();
                                                    showPassword.value = true;
                                                  }
                                                }, "Generate password", 8, ["onClick"])
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_CorePassword, {
                                                password: unref(payload).password,
                                                "show-password": unref(showPassword),
                                                onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                                onWeakPassword: checkPassword,
                                                onSetPassword: setPassword
                                              }, null, 8, ["password", "show-password", "onToggleShowPassword"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            sm: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                label: "Confirm password",
                                                modelValue: unref(payload).cpassword,
                                                "onUpdate:modelValue": ($event) => unref(payload).cpassword = $event,
                                                rules: unref(confirmPassword)(unref(payload).password),
                                                "prepend-inner-icon": "mdi-lock-outline",
                                                type: `${unref(showPassword) ? "text" : "password"}`,
                                                "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                                "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VContainer, {
                                  class: "pa-0 row-form-data",
                                  fluid: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "First name",
                                              modelValue: unref(payload).firstname,
                                              "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                              rules: unref(name)()
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Last name",
                                              modelValue: unref(payload).lastname,
                                              "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                              rules: unref(name)()
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Email address",
                                              modelValue: unref(payload).email,
                                              "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                              rules: unref(emailOnly)()
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Telephone, {
                                              number: unref(payload).phone,
                                              onSetPhone: setPhone
                                            }, null, 8, ["number"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Gender",
                                              modelValue: unref(payload).gender,
                                              "onUpdate:modelValue": ($event) => unref(payload).gender = $event,
                                              id: "selectGender",
                                              readonly: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#selectGender",
                                              list: ["MALE", "FEMALE"],
                                              listValue: unref(payload).gender,
                                              onSetItem: setGender
                                            }, null, 8, ["listValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Role",
                                              modelValue: unref(role),
                                              "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                              rules: unref(required)(),
                                              id: "selectRole",
                                              readonly: "",
                                              "append-inner-icon": "mdi-chevron-down"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode(_component_AdminCoreSelect, {
                                              activator: "#selectRole",
                                              list: unref(listRoles),
                                              listValue: unref(role),
                                              onSetItem: setRole
                                            }, null, 8, ["list", "listValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "text-right text-caption" }, [
                                              createVNode("span", {
                                                class: "text-decoration-underline cursor-pointer",
                                                onClick: ($event) => {
                                                  unref(payload).password = unref(payload).cpassword = unref(randPassword)();
                                                  showPassword.value = true;
                                                }
                                              }, "Generate password", 8, ["onClick"])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_CorePassword, {
                                              password: unref(payload).password,
                                              "show-password": unref(showPassword),
                                              onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                              onWeakPassword: checkPassword,
                                              onSetPassword: setPassword
                                            }, null, 8, ["password", "show-password", "onToggleShowPassword"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          sm: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              label: "Confirm password",
                                              modelValue: unref(payload).cpassword,
                                              "onUpdate:modelValue": ($event) => unref(payload).cpassword = $event,
                                              rules: unref(confirmPassword)(unref(payload).password),
                                              "prepend-inner-icon": "mdi-lock-outline",
                                              type: `${unref(showPassword) ? "text" : "password"}`,
                                              "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                              "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_AdminCoreImage, {
                                profile: true,
                                image: unref(payload).picture,
                                onSetImage: setImage
                              }, null, 8, ["image"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "9"
                          }, {
                            default: withCtx(() => [
                              createVNode(VContainer, {
                                class: "pa-0 row-form-data",
                                fluid: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "First name",
                                            modelValue: unref(payload).firstname,
                                            "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                            rules: unref(name)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Last name",
                                            modelValue: unref(payload).lastname,
                                            "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                            rules: unref(name)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Email address",
                                            modelValue: unref(payload).email,
                                            "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                            rules: unref(emailOnly)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Telephone, {
                                            number: unref(payload).phone,
                                            onSetPhone: setPhone
                                          }, null, 8, ["number"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Gender",
                                            modelValue: unref(payload).gender,
                                            "onUpdate:modelValue": ($event) => unref(payload).gender = $event,
                                            id: "selectGender",
                                            readonly: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#selectGender",
                                            list: ["MALE", "FEMALE"],
                                            listValue: unref(payload).gender,
                                            onSetItem: setGender
                                          }, null, 8, ["listValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Role",
                                            modelValue: unref(role),
                                            "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                            rules: unref(required)(),
                                            id: "selectRole",
                                            readonly: "",
                                            "append-inner-icon": "mdi-chevron-down"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(_component_AdminCoreSelect, {
                                            activator: "#selectRole",
                                            list: unref(listRoles),
                                            listValue: unref(role),
                                            onSetItem: setRole
                                          }, null, 8, ["list", "listValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-right text-caption" }, [
                                            createVNode("span", {
                                              class: "text-decoration-underline cursor-pointer",
                                              onClick: ($event) => {
                                                unref(payload).password = unref(payload).cpassword = unref(randPassword)();
                                                showPassword.value = true;
                                              }
                                            }, "Generate password", 8, ["onClick"])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_CorePassword, {
                                            password: unref(payload).password,
                                            "show-password": unref(showPassword),
                                            onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                            onWeakPassword: checkPassword,
                                            onSetPassword: setPassword
                                          }, null, 8, ["password", "show-password", "onToggleShowPassword"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            label: "Confirm password",
                                            modelValue: unref(payload).cpassword,
                                            "onUpdate:modelValue": ($event) => unref(payload).cpassword = $event,
                                            rules: unref(confirmPassword)(unref(payload).password),
                                            "prepend-inner-icon": "mdi-lock-outline",
                                            type: `${unref(showPassword) ? "text" : "password"}`,
                                            "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                            "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, null, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_AdminCoreImage, {
                              profile: true,
                              image: unref(payload).picture,
                              onSetImage: setImage
                            }, null, 8, ["image"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          sm: "9"
                        }, {
                          default: withCtx(() => [
                            createVNode(VContainer, {
                              class: "pa-0 row-form-data",
                              fluid: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "First name",
                                          modelValue: unref(payload).firstname,
                                          "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                          rules: unref(name)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Last name",
                                          modelValue: unref(payload).lastname,
                                          "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                          rules: unref(name)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Email address",
                                          modelValue: unref(payload).email,
                                          "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                          rules: unref(emailOnly)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Telephone, {
                                          number: unref(payload).phone,
                                          onSetPhone: setPhone
                                        }, null, 8, ["number"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Gender",
                                          modelValue: unref(payload).gender,
                                          "onUpdate:modelValue": ($event) => unref(payload).gender = $event,
                                          id: "selectGender",
                                          readonly: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#selectGender",
                                          list: ["MALE", "FEMALE"],
                                          listValue: unref(payload).gender,
                                          onSetItem: setGender
                                        }, null, 8, ["listValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Role",
                                          modelValue: unref(role),
                                          "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                          rules: unref(required)(),
                                          id: "selectRole",
                                          readonly: "",
                                          "append-inner-icon": "mdi-chevron-down"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(_component_AdminCoreSelect, {
                                          activator: "#selectRole",
                                          list: unref(listRoles),
                                          listValue: unref(role),
                                          onSetItem: setRole
                                        }, null, 8, ["list", "listValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-right text-caption" }, [
                                          createVNode("span", {
                                            class: "text-decoration-underline cursor-pointer",
                                            onClick: ($event) => {
                                              unref(payload).password = unref(payload).cpassword = unref(randPassword)();
                                              showPassword.value = true;
                                            }
                                          }, "Generate password", 8, ["onClick"])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_CorePassword, {
                                          password: unref(payload).password,
                                          "show-password": unref(showPassword),
                                          onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                          onWeakPassword: checkPassword,
                                          onSetPassword: setPassword
                                        }, null, 8, ["password", "show-password", "onToggleShowPassword"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          label: "Confirm password",
                                          modelValue: unref(payload).cpassword,
                                          "onUpdate:modelValue": ($event) => unref(payload).cpassword = $event,
                                          rules: unref(confirmPassword)(unref(payload).password),
                                          "prepend-inner-icon": "mdi-lock-outline",
                                          type: `${unref(showPassword) ? "text" : "password"}`,
                                          "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                          "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
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
                class: "pa-0",
                fluid: ""
              }, {
                default: withCtx(() => [
                  createVNode(VRow, null, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_AdminCoreImage, {
                            profile: true,
                            image: unref(payload).picture,
                            onSetImage: setImage
                          }, null, 8, ["image"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        sm: "9"
                      }, {
                        default: withCtx(() => [
                          createVNode(VContainer, {
                            class: "pa-0 row-form-data",
                            fluid: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "First name",
                                        modelValue: unref(payload).firstname,
                                        "onUpdate:modelValue": ($event) => unref(payload).firstname = $event,
                                        rules: unref(name)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Last name",
                                        modelValue: unref(payload).lastname,
                                        "onUpdate:modelValue": ($event) => unref(payload).lastname = $event,
                                        rules: unref(name)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Email address",
                                        modelValue: unref(payload).email,
                                        "onUpdate:modelValue": ($event) => unref(payload).email = $event,
                                        rules: unref(emailOnly)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Telephone, {
                                        number: unref(payload).phone,
                                        onSetPhone: setPhone
                                      }, null, 8, ["number"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Gender",
                                        modelValue: unref(payload).gender,
                                        "onUpdate:modelValue": ($event) => unref(payload).gender = $event,
                                        id: "selectGender",
                                        readonly: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_AdminCoreSelect, {
                                        activator: "#selectGender",
                                        list: ["MALE", "FEMALE"],
                                        listValue: unref(payload).gender,
                                        onSetItem: setGender
                                      }, null, 8, ["listValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Role",
                                        modelValue: unref(role),
                                        "onUpdate:modelValue": ($event) => isRef(role) ? role.value = $event : null,
                                        rules: unref(required)(),
                                        id: "selectRole",
                                        readonly: "",
                                        "append-inner-icon": "mdi-chevron-down"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(_component_AdminCoreSelect, {
                                        activator: "#selectRole",
                                        list: unref(listRoles),
                                        listValue: unref(role),
                                        onSetItem: setRole
                                      }, null, 8, ["list", "listValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-right text-caption" }, [
                                        createVNode("span", {
                                          class: "text-decoration-underline cursor-pointer",
                                          onClick: ($event) => {
                                            unref(payload).password = unref(payload).cpassword = unref(randPassword)();
                                            showPassword.value = true;
                                          }
                                        }, "Generate password", 8, ["onClick"])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_CorePassword, {
                                        password: unref(payload).password,
                                        "show-password": unref(showPassword),
                                        onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                                        onWeakPassword: checkPassword,
                                        onSetPassword: setPassword
                                      }, null, 8, ["password", "show-password", "onToggleShowPassword"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        label: "Confirm password",
                                        modelValue: unref(payload).cpassword,
                                        "onUpdate:modelValue": ($event) => unref(payload).cpassword = $event,
                                        rules: unref(confirmPassword)(unref(payload).password),
                                        "prepend-inner-icon": "mdi-lock-outline",
                                        type: `${unref(showPassword) ? "text" : "password"}`,
                                        "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                                        "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=create-x7E8jF_w.js.map
