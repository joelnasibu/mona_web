import { _ as __nuxt_component_0 } from './nuxt-link-kpaqSJk0.mjs';
import { ref, mergeProps, withCtx, unref, isRef, createVNode, withKeys, withModifiers, useSSRContext } from 'vue';
import { u as useRules } from './useRules-Lv1tnQPg.mjs';
import { _ as _export_sfc, s as storeToRefs, h as useAppStore, b as navigateTo } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as useAuthStore } from './useHelpers-9BVYUhTt.mjs';
import { V as VCard } from './VCard-MEGoD2_3.mjs';
import { V as VForm } from './VForm-wrdi8IEW.mjs';
import { V as VTextField } from './VTextField-8SU2p1Ep.mjs';
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
import 'date-fns';
import 'date-fns/locale';
import './tag-pIHjuosL.mjs';
import './VAvatar-agmUyvkw.mjs';
import './index-3E7yy1qS.mjs';
import './color-rZjm0Y7u.mjs';
import './rounded-jA9LRAgf.mjs';
import './VImg-_57rVikU.mjs';
import './index-q-0zZOOG.mjs';
import './position-AkaJaFJy.mjs';
import './index-d8gkbdU6.mjs';
import './resizeObserver-k8M9k6Xi.mjs';

const _sfc_main = {
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    const { email } = useRules();
    const { loading, error } = storeToRefs(useAppStore());
    const { forgotPassword: forgotPassword2 } = useAuthStore();
    const emailAddress = ref("");
    const formData = ref(null);
    const handleForgot = async () => {
      const { valid } = await formData.value.validate();
      if (valid) {
        await forgotPassword2({ email: emailAddress.value });
        if (!error.value) {
          emailAddress.value = "";
          navigateTo({
            name: "auth"
          });
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-100" }, _attrs))} data-v-f5409376><div class="py-2 text-center" data-v-f5409376><b data-v-f5409376>Forgot Password</b></div><div class="d-flex align-center justify-center w-100" data-v-f5409376>`);
      _push(ssrRenderComponent(VCard, {
        class: "mx-auto mt-4 pa-4 auth-card rounded-lg bg-transparent",
        flat: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VForm, {
              ref_key: "formData",
              ref: formData
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTextField, {
                    label: "Adresse email",
                    "prepend-inner-icon": "mdi-email-outline",
                    modelValue: unref(emailAddress),
                    "onUpdate:modelValue": ($event) => isRef(emailAddress) ? emailAddress.value = $event : null,
                    rules: unref(email)(),
                    onKeypress: handleForgot
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    class: "rounded-lg text-none text-caption",
                    color: "primary-accent",
                    block: "",
                    flat: "",
                    size: "small",
                    loading: unref(loading),
                    onClick: handleForgot
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-f5409376${_scopeId3}>Submit</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Submit")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTextField, {
                      label: "Adresse email",
                      "prepend-inner-icon": "mdi-email-outline",
                      modelValue: unref(emailAddress),
                      "onUpdate:modelValue": ($event) => isRef(emailAddress) ? emailAddress.value = $event : null,
                      rules: unref(email)(),
                      onKeypress: withKeys(withModifiers(handleForgot, ["prevent"]), ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onKeypress"]),
                    createVNode(VBtn, {
                      class: "rounded-lg text-none text-caption",
                      color: "primary-accent",
                      block: "",
                      flat: "",
                      size: "small",
                      loading: unref(loading),
                      onClick: handleForgot
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Submit")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="w-100 text-caption mt-4" data-v-f5409376${_scopeId}><div class="d-flex align-center w-100" data-v-f5409376${_scopeId}><span data-v-f5409376${_scopeId}>Already have account?</span>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: { name: "auth" },
              class: "px-2 text-primary-accent"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-f5409376${_scopeId2}>Sign in instead</span>`);
                } else {
                  return [
                    createVNode("span", null, "Sign in instead")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(VForm, {
                ref_key: "formData",
                ref: formData
              }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    label: "Adresse email",
                    "prepend-inner-icon": "mdi-email-outline",
                    modelValue: unref(emailAddress),
                    "onUpdate:modelValue": ($event) => isRef(emailAddress) ? emailAddress.value = $event : null,
                    rules: unref(email)(),
                    onKeypress: withKeys(withModifiers(handleForgot, ["prevent"]), ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "onKeypress"]),
                  createVNode(VBtn, {
                    class: "rounded-lg text-none text-caption",
                    color: "primary-accent",
                    block: "",
                    flat: "",
                    size: "small",
                    loading: unref(loading),
                    onClick: handleForgot
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Submit")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 512),
              createVNode("div", { class: "w-100 text-caption mt-4" }, [
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
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5409376"]]);

export { forgotPassword as default };
//# sourceMappingURL=forgot-password-UPvTd8pT.mjs.map
