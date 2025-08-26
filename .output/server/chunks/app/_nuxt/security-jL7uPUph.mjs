import { _ as __nuxt_component_0$1 } from './password-yXu4dRVk.mjs';
import { u as useRules } from './useRules-YQBIqClL.mjs';
import { u as useHelpers, a as useAuthStore } from './useHelpers-kUuDaVs4.mjs';
import { withCtx, createVNode, useSSRContext, ref, mergeProps, unref } from 'vue';
import { _ as _export_sfc, s as storeToRefs, h as useAppStore } from '../server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { V as VForm } from './VForm-tbklh6Vg.mjs';
import { V as VTextField } from './VTextField-Q67PbqhP.mjs';
import { V as VBtn } from './VBtn-HIzP-EnY.mjs';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import './position-WfCzcf5A.mjs';
import './color-52hqu1To.mjs';
import './tag-pIHjuosL.mjs';
import './index-jw0wqd8u.mjs';
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
import './resizeObserver-k8M9k6Xi.mjs';

const _sfc_main$1 = {
  __name: "change-password",
  __ssrInlineRender: true,
  props: {
    dialog: Boolean
  },
  emits: ["changed"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const { required, confirmPassword } = useRules();
    const { randPassword } = useHelpers();
    const { error, loading, currentUser } = storeToRefs(useAppStore());
    const { changePassword } = useAuthStore();
    const formData = ref(null);
    const showPassword = ref(false);
    const showCurrentPassword = ref(false);
    const passwords = ref({
      oldPassword: "",
      newPassword: "",
      confirm: ""
    });
    const isPasswordWeak = ref(false);
    const checkPassword = (val) => {
      isPasswordWeak.value = val;
    };
    const setPassword = (val) => {
      passwords.value.newPassword = val;
    };
    const setNewPassword = () => {
      passwords.value.newPassword = passwords.value.confirm = randPassword();
      showPassword.value = true;
    };
    const handleSave = async () => {
      const { valid } = await formData.value.validate();
      if (valid) {
        await changePassword(passwords.value);
        if (!error.value) {
          setTimeout(() => {
            emits("changed");
          }, 2e3);
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CorePassword = __nuxt_component_0$1;
      _push(ssrRenderComponent(VForm, mergeProps({
        ref_key: "formData",
        ref: formData
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTextField, {
              label: "Current password",
              "prepend-inner-icon": "mdi-lock-outline",
              autocomplete: "off",
              name: "newPassword",
              "append-inner-icon": `${unref(showCurrentPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
              "onClick:appendInner": ($event) => showCurrentPassword.value = !unref(showCurrentPassword),
              type: `${unref(showCurrentPassword) ? "text" : "password"}`,
              modelValue: unref(passwords).oldPassword,
              "onUpdate:modelValue": ($event) => unref(passwords).oldPassword = $event,
              rules: unref(required)()
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-decoration-underline text-caption mb-2 cursor-pointer"${_scopeId}><span${_scopeId}>Generate new password</span></div>`);
            _push2(ssrRenderComponent(_component_CorePassword, {
              password: unref(passwords).newPassword,
              "show-password": unref(showPassword),
              onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
              onWeakPassword: checkPassword,
              onSetPassword: setPassword
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTextField, {
              label: "Re-enter new password",
              "prepend-inner-icon": "mdi-lock-outline",
              autocomplete: "off",
              "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
              "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
              type: `${unref(showPassword) ? "text" : "password"}`,
              modelValue: unref(passwords).confirm,
              "onUpdate:modelValue": ($event) => unref(passwords).confirm = $event,
              rules: unref(confirmPassword)(unref(passwords).newPassword),
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`<div class="d-flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              class: "text-caption text-none rounded-lg",
              color: "primary-accent",
              flat: "",
              onClick: handleSave,
              block: "",
              loading: unref(loading)
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
              createVNode(VTextField, {
                label: "Current password",
                "prepend-inner-icon": "mdi-lock-outline",
                autocomplete: "off",
                name: "newPassword",
                "append-inner-icon": `${unref(showCurrentPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                "onClick:appendInner": ($event) => showCurrentPassword.value = !unref(showCurrentPassword),
                type: `${unref(showCurrentPassword) ? "text" : "password"}`,
                modelValue: unref(passwords).oldPassword,
                "onUpdate:modelValue": ($event) => unref(passwords).oldPassword = $event,
                rules: unref(required)()
              }, null, 8, ["append-inner-icon", "onClick:appendInner", "type", "modelValue", "onUpdate:modelValue", "rules"]),
              createVNode("div", {
                class: "text-decoration-underline text-caption mb-2 cursor-pointer",
                onClick: setNewPassword
              }, [
                createVNode("span", null, "Generate new password")
              ]),
              createVNode(_component_CorePassword, {
                password: unref(passwords).newPassword,
                "show-password": unref(showPassword),
                onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                onWeakPassword: checkPassword,
                onSetPassword: setPassword
              }, null, 8, ["password", "show-password", "onToggleShowPassword"]),
              createVNode(VTextField, {
                label: "Re-enter new password",
                "prepend-inner-icon": "mdi-lock-outline",
                autocomplete: "off",
                "append-inner-icon": `${unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                type: `${unref(showPassword) ? "text" : "password"}`,
                modelValue: unref(passwords).confirm,
                "onUpdate:modelValue": ($event) => unref(passwords).confirm = $event,
                rules: unref(confirmPassword)(unref(passwords).newPassword),
                class: "mt-2"
              }, null, 8, ["append-inner-icon", "onClick:appendInner", "type", "modelValue", "onUpdate:modelValue", "rules"]),
              createVNode("div", { class: "d-flex justify-end" }, [
                createVNode(VBtn, {
                  class: "text-caption text-none rounded-lg",
                  color: "primary-accent",
                  flat: "",
                  onClick: handleSave,
                  block: "",
                  loading: unref(loading)
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
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/change-password.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ChangePassword = __nuxt_component_0;
  _push(ssrRenderComponent(VContainer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VRow, { justify: "center" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCol, {
                cols: "12",
                sm: "10"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="text-subtitle-1 pb-4"${_scopeId3}><b${_scopeId3}>Password settings</b></div><div${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_ChangePassword, { dialog: false }, null, _parent4, _scopeId3));
                    _push4(`</div><div class="text-subtitle-1 pt-15 pb-2"${_scopeId3}><b${_scopeId3}>Account settings</b></div>`);
                    _push4(ssrRenderComponent(VBtn, {
                      class: "text-caption rounded-lg",
                      variant: "text",
                      "prepend-icon": "mdi-delete-outline"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<span${_scopeId4}>Deactivate my account</span>`);
                        } else {
                          return [
                            createVNode("span", null, "Deactivate my account")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("div", { class: "text-subtitle-1 pb-4" }, [
                        createVNode("b", null, "Password settings")
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_ChangePassword, { dialog: false })
                      ]),
                      createVNode("div", { class: "text-subtitle-1 pt-15 pb-2" }, [
                        createVNode("b", null, "Account settings")
                      ]),
                      createVNode(VBtn, {
                        class: "text-caption rounded-lg",
                        variant: "text",
                        "prepend-icon": "mdi-delete-outline"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Deactivate my account")
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
                  sm: "10"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-subtitle-1 pb-4" }, [
                      createVNode("b", null, "Password settings")
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_ChangePassword, { dialog: false })
                    ]),
                    createVNode("div", { class: "text-subtitle-1 pt-15 pb-2" }, [
                      createVNode("b", null, "Account settings")
                    ]),
                    createVNode(VBtn, {
                      class: "text-caption rounded-lg",
                      variant: "text",
                      "prepend-icon": "mdi-delete-outline"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Deactivate my account")
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
                sm: "10"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-subtitle-1 pb-4" }, [
                    createVNode("b", null, "Password settings")
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_ChangePassword, { dialog: false })
                  ]),
                  createVNode("div", { class: "text-subtitle-1 pt-15 pb-2" }, [
                    createVNode("b", null, "Account settings")
                  ]),
                  createVNode(VBtn, {
                    class: "text-caption rounded-lg",
                    variant: "text",
                    "prepend-icon": "mdi-delete-outline"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Deactivate my account")
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index/security.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const security = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { security as default };
//# sourceMappingURL=security-jL7uPUph.mjs.map
