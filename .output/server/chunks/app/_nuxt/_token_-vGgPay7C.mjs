import { _ as __nuxt_component_0 } from './password-JVbmTpyJ.mjs';
import { _ as _export_sfc, l as useRoute, s as storeToRefs, h as useAppStore, b as navigateTo } from '../server.mjs';
import { ref, watchEffect, mergeProps, withCtx, unref, createVNode, withKeys, withModifiers, toDisplayString, useSSRContext } from 'vue';
import { u as useRules } from './useRules-Lv1tnQPg.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useAuthStore } from './useHelpers-9BVYUhTt.mjs';
import { V as VCard } from './VCard-MEGoD2_3.mjs';
import { V as VForm } from './VForm-wrdi8IEW.mjs';
import { V as VTextField } from './VTextField-8SU2p1Ep.mjs';
import { V as VBtn } from './VBtn-yNf12l4D.mjs';
import { V as VAlert } from './VAlert-2pkv9BF_.mjs';
import './position-AkaJaFJy.mjs';
import './color-rZjm0Y7u.mjs';
import './tag-pIHjuosL.mjs';
import './rounded-jA9LRAgf.mjs';
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
import 'date-fns';
import 'date-fns/locale';
import './VAvatar-agmUyvkw.mjs';
import './index-3E7yy1qS.mjs';
import './VImg-_57rVikU.mjs';
import './index-q-0zZOOG.mjs';
import './index-d8gkbdU6.mjs';
import './resizeObserver-k8M9k6Xi.mjs';

const _sfc_main = {
  __name: "[token]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const token = route.params.token;
    const { decodeToken, resetPassword } = useAuthStore();
    const { loading } = storeToRefs(useAppStore());
    const { passwordRule, confirmPassword } = useRules();
    const showPassword = ref(false);
    const showConfirm = ref(false);
    const isPasswordWeak = ref(false);
    const checkPassword = (val) => {
      isPasswordWeak.value = val;
    };
    const payload = ref({
      password: "",
      confirmPassword: ""
    });
    const formRef = ref("");
    const data = ref("");
    const setPassword = (val) => {
      payload.value.password = val;
    };
    const getData = async () => {
      data.value = await decodeToken(token);
    };
    const handleSubmit = async () => {
      const { valid } = await formRef.value.validate();
      if (valid) {
        payload.value.userId = data.value.userId;
        const res = await resetPassword(payload.value);
        if (res)
          navigateTo({ name: "auth" });
      }
    };
    watchEffect(() => getData());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CorePassword = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-100" }, _attrs))} data-v-d7248ee4><div class="py-2 text-center" data-v-d7248ee4><b data-v-d7248ee4>Reset Password</b></div><div class="d-flex align-center justify-center w-100" data-v-d7248ee4>`);
      _push(ssrRenderComponent(VCard, {
        class: "mx-auto mt-4 pa-4 auth-card rounded-lg bg-transparent",
        flat: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VForm, {
              ref_key: "formRef",
              ref: formRef,
              class: "form-data",
              onSubmit: () => {
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CorePassword, {
                    password: unref(payload).password,
                    "show-password": unref(showPassword),
                    onToggleShowPassword: ($event) => showPassword.value = !unref(showPassword),
                    onWeakPassword: checkPassword,
                    onSetPassword: setPassword
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTextField, {
                    placeholder: "Re-enter Password",
                    "prepend-inner-icon": "mdi-lock-outline",
                    "append-inner-icon": `${unref(showConfirm) ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
                    "onClick:appendInner": ($event) => showConfirm.value = !unref(showConfirm),
                    class: "mt-1",
                    type: `${unref(showConfirm) ? "text" : "password"}`,
                    onKeypress: handleSubmit,
                    rules: unref(confirmPassword)(unref(payload).password),
                    "bg-color": "white",
                    modelValue: unref(payload).confirmPassword,
                    "onUpdate:modelValue": ($event) => unref(payload).confirmPassword = $event,
                    autocomplete: "off"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    class: "my-1 text-none text-caption",
                    flat: "",
                    density: "comfortable",
                    color: "primary-accent",
                    block: "",
                    onClick: ($event) => handleSubmit(),
                    loading: unref(loading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-d7248ee4${_scopeId3}>Reset Passord</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Reset Passord")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
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
                      onKeypress: withKeys(handleSubmit, ["enter"]),
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
                      onClick: ($event) => handleSubmit(),
                      loading: unref(loading)
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Reset Passord")
                      ]),
                      _: 1
                    }, 8, ["onClick", "loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
                    onKeypress: withKeys(handleSubmit, ["enter"]),
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
                    onClick: ($event) => handleSubmit(),
                    loading: unref(loading)
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Reset Passord")
                    ]),
                    _: 1
                  }, 8, ["onClick", "loading"])
                ]),
                _: 1
              }, 8, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(data).message) {
        _push(ssrRenderComponent(VAlert, {
          color: "success",
          variant: "tonal",
          class: "w-100 text-h5 d-flex align-center justify-center",
          width: "100",
          closable: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-d7248ee4${_scopeId}>${ssrInterpolate(unref(data).message)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(unref(data).message), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/reset-password/[token].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _token_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d7248ee4"]]);

export { _token_ as default };
//# sourceMappingURL=_token_-vGgPay7C.mjs.map
