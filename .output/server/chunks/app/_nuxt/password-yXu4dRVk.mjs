import { u as useRules } from './useRules-YQBIqClL.mjs';
import { useSSRContext, computed, mergeProps, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { V as VProgressLinear } from './position-WfCzcf5A.mjs';
import { V as VTextField } from './VTextField-Q67PbqhP.mjs';

const _sfc_main = {
  __name: "password",
  __ssrInlineRender: true,
  props: {
    password: String,
    showPassword: Boolean
  },
  emits: [
    "weakPassword",
    "setPassword",
    "toggleShowPassword"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { passwordRule } = useRules();
    const pwd = computed({
      get() {
        return props.password;
      },
      set(val) {
        emits("setPassword", val);
      }
    });
    const hasUppercase = computed(() => {
      return /[A-Z]/.test(pwd.value);
    });
    const hasLowercase = computed(() => {
      return /[a-z]/.test(pwd.value);
    });
    const hasNumber = computed(() => {
      return /[0-9]/.test(pwd.value);
    });
    const hasSpecialCharacter = computed(() => {
      return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd.value);
    });
    const isLong = computed(() => {
      var _a;
      return ((_a = pwd.value) == null ? void 0 : _a.length) >= 8;
    });
    const progressVal = computed(() => {
      return 0 + isLong.value * 20 + hasLowercase.value * 20 + hasUppercase.value * 20 + hasNumber.value * 20 + hasSpecialCharacter.value * 20;
    });
    const progressColor = computed(() => {
      return progressVal.value <= 40 ? "error" : progressVal.value <= 80 ? "warning" : "success";
    });
    const checkPwd = () => {
      emits(
        "weakPassword",
        !hasUppercase.value || !hasLowercase.value || !hasNumber.value || !hasSpecialCharacter.value || !isLong.value
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "position-relative" }, _attrs))}>`);
      _push(ssrRenderComponent(VProgressLinear, {
        active: true,
        "model-value": unref(progressVal),
        color: unref(progressColor),
        height: "4",
        class: "rounded-t",
        absolute: ""
      }, null, _parent));
      _push(ssrRenderComponent(VTextField, {
        placeholder: "Password",
        "prepend-inner-icon": "mdi-lock-outline",
        class: "text-caption",
        "append-inner-icon": `${__props.showPassword ? "mdi-eye-off-outline" : "mdi-eye-outline"}`,
        "onClick:appendInner": ($event) => emits("toggleShowPassword"),
        type: `${__props.showPassword ? "text" : "password"}`,
        rules: unref(passwordRule)(),
        modelValue: unref(pwd),
        "onUpdate:modelValue": ($event) => isRef(pwd) ? pwd.value = $event : null,
        hint: "Password should contain a capital letter, character and number",
        "persistent-hint": unref(progressVal) < 100,
        onInput: checkPwd,
        autocomplete: "off"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/core/password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=password-yXu4dRVk.mjs.map
