import { _ as __nuxt_component_0 } from './password-yXu4dRVk.mjs';
import { p as propsFactory, I as IconValue, o as makeThemeProps, g as genericComponent, w as useProxiedModel, q as provideTheme, E as useLocale, _ as _export_sfc, l as useRoute, s as storeToRefs, h as useAppStore, b as navigateTo } from '../server.mjs';
import { computed, toRef, createVNode, mergeProps, ref, watchEffect, withCtx, unref, withKeys, withModifiers, toDisplayString, useSSRContext } from 'vue';
import { u as useRules } from './useRules-YQBIqClL.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useAuthStore } from './useHelpers-kUuDaVs4.mjs';
import { V as VCard } from './VCard-M6VezhhA.mjs';
import { V as VForm } from './VForm-tbklh6Vg.mjs';
import { V as VTextField } from './VTextField-Q67PbqhP.mjs';
import { V as VBtn } from './VBtn-HIzP-EnY.mjs';
import { c as createSimpleFunctional } from './VAvatar-Tkx6eOqd.mjs';
import { u as useTextColor } from './color-52hqu1To.mjs';
import { m as makeComponentProps, a as makeTagProps } from './tag-pIHjuosL.mjs';
import { n as makeDensityProps, j as makeDimensionProps, c as makeElevationProps, m as makeRoundedProps, o as makeVariantProps, t as useVariant, p as useDensity, l as useDimension, u as useElevation, d as useRounded, w as genOverlays, b as VIcon, V as VDefaultsProvider } from './index-jw0wqd8u.mjs';
import { m as makeLocationProps, b as makePositionProps, a as useLocation, c as usePosition } from './position-WfCzcf5A.mjs';
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
import './resizeObserver-k8M9k6Xi.mjs';

const VAlertTitle = createSimpleFunctional("v-alert-title");
const allowedTypes = ["success", "info", "warning", "error"];
const makeVAlertProps = propsFactory({
  border: {
    type: [Boolean, String],
    validator: (val) => {
      return typeof val === "boolean" || ["top", "end", "bottom", "start"].includes(val);
    }
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (val) => allowedTypes.includes(val)
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAlert");
const VAlert = genericComponent()({
  name: "VAlert",
  props: makeVAlertProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const icon = computed(() => {
      var _a;
      if (props.icon === false)
        return void 0;
      if (!props.type)
        return props.icon;
      return (_a = props.icon) != null ? _a : `$${props.type}`;
    });
    const variantProps = computed(() => {
      var _a;
      return {
        color: (_a = props.color) != null ? _a : props.type,
        variant: props.variant
      };
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "borderColor"));
    const {
      t
    } = useLocale();
    const closeProps = computed(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    return () => {
      const hasPrepend = !!(slots.prepend || icon.value);
      const hasTitle = !!(slots.title || props.title);
      const hasClose = !!(slots.close || props.closable);
      return isActive.value && createVNode(props.tag, {
        "class": ["v-alert", props.border && {
          "v-alert--border": !!props.border,
          [`v-alert--border-${props.border === true ? "start" : props.border}`]: true
        }, {
          "v-alert--prominent": props.prominent
        }, themeClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, locationStyles.value, props.style],
        "role": "alert"
      }, {
        default: () => {
          var _a2;
          var _a, _b;
          return [genOverlays(false, "v-alert"), props.border && createVNode("div", {
            "key": "border",
            "class": ["v-alert__border", textColorClasses.value],
            "style": textColorStyles.value
          }, null), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-alert__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": icon.value,
            "size": props.prominent ? 44 : 28
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !icon.value,
            "defaults": {
              VIcon: {
                density: props.density,
                icon: icon.value,
                size: props.prominent ? 44 : 28
              }
            }
          }, slots.prepend)]), createVNode("div", {
            "class": "v-alert__content"
          }, [hasTitle && createVNode(VAlertTitle, {
            "key": "title"
          }, {
            default: () => {
              var _a3;
              var _a22;
              return [(_a3 = (_a22 = slots.title) == null ? void 0 : _a22.call(slots)) != null ? _a3 : props.title];
            }
          }), (_a2 = (_a = slots.text) == null ? void 0 : _a.call(slots)) != null ? _a2 : props.text, (_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.append && createVNode("div", {
            "key": "append",
            "class": "v-alert__append"
          }, [slots.append()]), hasClose && createVNode("div", {
            "key": "close",
            "class": "v-alert__close"
          }, [!slots.close ? createVNode(VBtn, mergeProps({
            "key": "close-btn",
            "icon": props.closeIcon,
            "size": "x-small",
            "variant": "text"
          }, closeProps.value), null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VBtn: {
                icon: props.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var _a22;
              return [(_a22 = slots.close) == null ? void 0 : _a22.call(slots, {
                props: closeProps.value
              })];
            }
          })])];
        }
      });
    };
  }
});
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
//# sourceMappingURL=_token_-n1tFK1rA.mjs.map
