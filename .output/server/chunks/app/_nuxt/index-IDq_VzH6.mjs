import { _ as __nuxt_component_0$1 } from './nuxt-link-kpaqSJk0.mjs';
import { p as propsFactory, W as omit, g as genericComponent, w as useProxiedModel, v as getUid, _ as _export_sfc, a as useRuntimeConfig, s as storeToRefs, h as useAppStore, b as navigateTo } from '../server.mjs';
import { computed, ref, mergeProps, useSSRContext, createVNode, unref, withCtx, isRef, openBlock, createBlock, createCommentVNode, withKeys, withModifiers, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { b as VIcon, e as VExpandTransition } from './index-jw0wqd8u.mjs';
import { V as VForm } from './VForm-tbklh6Vg.mjs';
import { f as forwardRefs, V as VTextField } from './VTextField-Q67PbqhP.mjs';
import { V as VBtn } from './VBtn-HIzP-EnY.mjs';
import { u as useHelpers, a as useAuthStore } from './useHelpers-kUuDaVs4.mjs';
import { V as VCheckbox } from './VCheckbox-6aCeGZz9.mjs';
import { V as VSpacer } from './VSpacer-ohAsXIBy.mjs';
import { c as makeVOverlayProps, d as useScopeId, V as VOverlay } from './VOverlay-NMZIuW_y.mjs';
import { u as useRender } from './tag-pIHjuosL.mjs';
import { V as VCard } from './VCard-M6VezhhA.mjs';
import { V as VWindow, a as VWindowItem } from './VWindowItem-49fT4O5I.mjs';
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
import './color-52hqu1To.mjs';
import './position-WfCzcf5A.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import 'date-fns';
import 'date-fns/locale';
import './VCheckboxBtn-uKZxiDvG.mjs';
import './VSelectionControl-zNSOl8MJ.mjs';
import './VAvatar-Tkx6eOqd.mjs';
import './ssrBoot-xH9VG8QW.mjs';

const _sfc_main$2 = {
  __name: "username",
  __ssrInlineRender: true,
  props: {
    payload: Object
  },
  emits: ["continue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const appConfig = useRuntimeConfig();
    const showHelp = ref(false);
    const formRef = ref("");
    const rules = [(v) => !!v || "Required"];
    const handleContinue = async () => {
      const { valid } = await formRef.value.validate();
      if (valid) {
        emit("continue");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VForm, mergeProps({
        ref_key: "formRef",
        ref: formRef,
        class: "form-data",
        onSubmit: () => {
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTextField, {
              placeholder: "Email or username",
              "prepend-inner-icon": "mdi-email-outline",
              modelValue: __props.payload.username,
              "onUpdate:modelValue": ($event) => __props.payload.username = $event,
              modelModifiers: { trim: true },
              autofocus: "",
              rules,
              onKeypress: ($event) => handleContinue(),
              "bg-color": "white"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              class: "my-1 text-none text-caption",
              flat: "",
              density: "comfortable",
              color: "primary-accent",
              block: "",
              onClick: ($event) => handleContinue()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-a8069c1a${_scopeId2}>Continue</span>`);
                } else {
                  return [
                    createVNode("span", null, "Continue")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="my-3 text-caption text-center" data-v-a8069c1a${_scopeId}><div class="text-start my-5 text-caption-2" data-v-a8069c1a${_scopeId}><span class="text-grey-darken-3" data-v-a8069c1a${_scopeId}> By proceeding, I consent to ${ssrInterpolate(unref(appConfig).public.app_name)}&#39;s <a href="#" class="text-decoration-underline" data-v-a8069c1a${_scopeId}> Free Membership Agreement</a> and <a href="#" class="text-decoration-underline" data-v-a8069c1a${_scopeId}> Private Policy</a>.</span></div></div><div class="text-caption my-2" data-v-a8069c1a${_scopeId}><a class="d-flex text-black cursor-pointer" data-v-a8069c1a${_scopeId}>`);
            _push2(ssrRenderComponent(VIcon, {
              icon: "mdi-menu-right",
              start: "",
              class: ["icon", { transform: unref(showHelp) }]
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-caption my-auto" data-v-a8069c1a${_scopeId}><b data-v-a8069c1a${_scopeId}>Help?</b>`);
            _push2(ssrRenderComponent(VExpandTransition, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(showHelp)) {
                    _push3(`<div class="text-caption d-flex flex-column" data-v-a8069c1a${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: { name: "auth-forgot-password" },
                      class: "text-primary-accent mt-1"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span data-v-a8069c1a${_scopeId3}>Forgot your password</span>`);
                        } else {
                          return [
                            createVNode("span", null, "Forgot your password")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<a href="javascript:void(0)" class="text-primary-accent mt-1" data-v-a8069c1a${_scopeId2}>Other issues with Sign in?</a></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(showHelp) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-caption d-flex flex-column"
                    }, [
                      createVNode(_component_NuxtLink, {
                        to: { name: "auth-forgot-password" },
                        class: "text-primary-accent mt-1"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Forgot your password")
                        ]),
                        _: 1
                      }),
                      createVNode("a", {
                        href: "javascript:void(0)",
                        class: "text-primary-accent mt-1"
                      }, "Other issues with Sign in?")
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></a></div><div class="text-caption w-100" data-v-a8069c1a${_scopeId}><div class="d-flex align-center w-100" data-v-a8069c1a${_scopeId}><span data-v-a8069c1a${_scopeId}>New Skill Up account?</span>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: { name: "auth-create-account" },
              class: "px-2 text-primary-accent"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-a8069c1a${_scopeId2}>Sign up</span>`);
                } else {
                  return [
                    createVNode("span", null, "Sign up")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(VTextField, {
                placeholder: "Email or username",
                "prepend-inner-icon": "mdi-email-outline",
                modelValue: __props.payload.username,
                "onUpdate:modelValue": ($event) => __props.payload.username = $event,
                modelModifiers: { trim: true },
                autofocus: "",
                rules,
                onKeypress: withKeys(withModifiers(($event) => handleContinue(), ["prevent"]), ["enter"]),
                "bg-color": "white"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress"]),
              createVNode(VBtn, {
                class: "my-1 text-none text-caption",
                flat: "",
                density: "comfortable",
                color: "primary-accent",
                block: "",
                onClick: withModifiers(($event) => handleContinue(), ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "Continue")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode("div", { class: "my-3 text-caption text-center" }, [
                createVNode("div", { class: "text-start my-5 text-caption-2" }, [
                  createVNode("span", { class: "text-grey-darken-3" }, [
                    createTextVNode(" By proceeding, I consent to " + toDisplayString(unref(appConfig).public.app_name) + "'s ", 1),
                    createVNode("a", {
                      href: "#",
                      class: "text-decoration-underline"
                    }, " Free Membership Agreement"),
                    createTextVNode(" and "),
                    createVNode("a", {
                      href: "#",
                      class: "text-decoration-underline"
                    }, " Private Policy"),
                    createTextVNode(".")
                  ])
                ])
              ]),
              createVNode("div", { class: "text-caption my-2" }, [
                createVNode("a", {
                  onClick: ($event) => showHelp.value = !unref(showHelp),
                  class: "d-flex text-black cursor-pointer"
                }, [
                  createVNode(VIcon, {
                    icon: "mdi-menu-right",
                    start: "",
                    class: ["icon", { transform: unref(showHelp) }]
                  }, null, 8, ["class"]),
                  createVNode("div", { class: "text-caption my-auto" }, [
                    createVNode("b", null, "Help?"),
                    createVNode(VExpandTransition, null, {
                      default: withCtx(() => [
                        unref(showHelp) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-caption d-flex flex-column"
                        }, [
                          createVNode(_component_NuxtLink, {
                            to: { name: "auth-forgot-password" },
                            class: "text-primary-accent mt-1"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Forgot your password")
                            ]),
                            _: 1
                          }),
                          createVNode("a", {
                            href: "javascript:void(0)",
                            class: "text-primary-accent mt-1"
                          }, "Other issues with Sign in?")
                        ])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ])
                ], 8, ["onClick"])
              ]),
              createVNode("div", { class: "text-caption w-100" }, [
                createVNode("div", { class: "d-flex align-center w-100" }, [
                  createVNode("span", null, "New Skill Up account?"),
                  createVNode(_component_NuxtLink, {
                    to: { name: "auth-create-account" },
                    class: "px-2 text-primary-accent"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Sign up")
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
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/auth/username.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a8069c1a"]]);
const makeVTooltipProps = propsFactory({
  id: String,
  text: String,
  ...omit(makeVOverlayProps({
    closeOnBack: false,
    location: "end",
    locationStrategy: "connected",
    eager: true,
    minWidth: 0,
    offset: 10,
    openOnClick: false,
    openOnHover: true,
    origin: "auto",
    scrim: false,
    scrollStrategy: "reposition",
    transition: false
  }), ["absolute", "persistent"])
}, "VTooltip");
const VTooltip = genericComponent()({
  name: "VTooltip",
  props: makeVTooltipProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const uid = getUid();
    const id = computed(() => props.id || `v-tooltip-${uid}`);
    const overlay = ref();
    const location = computed(() => {
      return props.location.split(" ").length > 1 ? props.location : props.location + " center";
    });
    const origin = computed(() => {
      return props.origin === "auto" || props.origin === "overlap" || props.origin.split(" ").length > 1 || props.location.split(" ").length > 1 ? props.origin : props.origin + " center";
    });
    const transition = computed(() => {
      if (props.transition)
        return props.transition;
      return isActive.value ? "scale-transition" : "fade-transition";
    });
    const activatorProps = computed(() => mergeProps({
      "aria-describedby": id.value
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-tooltip", props.class],
        "style": props.style,
        "id": id.value
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "transition": transition.value,
        "absolute": true,
        "location": location.value,
        "origin": origin.value,
        "persistent": true,
        "role": "tooltip",
        "activatorProps": activatorProps.value,
        "_disableGlobalStack": true
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          var _a2;
          var _a;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return (_a2 = (_a = slots.default) == null ? void 0 : _a.call(slots, ...args)) != null ? _a2 : props.text;
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
const _sfc_main$1 = {
  __name: "password",
  __ssrInlineRender: true,
  props: {
    payload: Object
  },
  emits: ["return"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { routeNavigation } = useHelpers();
    const { loading, error, currentUser } = storeToRefs(useAppStore());
    const { login } = useAuthStore();
    const showPassword = ref(false);
    const rules = [
      (v) => !!v || "Password Required",
      (v) => v.length >= 6 || "6 characters minimun"
    ];
    const handleReturn = () => {
      emit("return");
    };
    const formRef = ref("");
    const handleLogin = async () => {
      var _a;
      const { valid } = await formRef.value.validate();
      if (valid) {
        await login(props.payload);
        if (!error.value)
          ((_a = currentUser.value) == null ? void 0 : _a.accessLevel) > 3 ? routeNavigation() : navigateTo({ name: "admin" });
        else
          props.payload.password = "";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(VForm, mergeProps({
        ref_key: "formRef",
        ref: formRef,
        onSubmit: () => {
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pb-2 d-flex justify-space-between text-caption font-weight-bold"${_scopeId}><span${_scopeId}>${ssrInterpolate(__props.payload.username)}</span><a class="cursor-pointer"${_scopeId}>Change?</a></div>`);
            _push2(ssrRenderComponent(VTextField, {
              label: "Password",
              modelValue: __props.payload.password,
              "onUpdate:modelValue": ($event) => __props.payload.password = $event,
              modelModifiers: { trim: true },
              autofocus: "",
              onKeypress: ($event) => handleLogin(),
              type: unref(showPassword) ? "text" : "password",
              "prepend-inner-icon": "mdi-lock-outline",
              "append-inner-icon": unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline",
              rules,
              "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
              "bg-color": "white"
            }, null, _parent2, _scopeId));
            _push2(`<div class="text-left font-weight-bold text-caption"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: { name: "auth-forgot-password" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Forgot your password</span>`);
                } else {
                  return [
                    createVNode("span", null, "Forgot your password")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VBtn, {
              block: "",
              flat: "",
              color: "primary-accent",
              class: "text-body-2 text-capitalize mt-3",
              text: "Log in",
              size: "small",
              onClick: ($event) => handleLogin(),
              loading: unref(loading)
            }, null, _parent2, _scopeId));
            _push2(`<div class="my-3 d-flex align-center"${_scopeId}><div class="d-flex align-center text-caption"${_scopeId}>`);
            _push2(ssrRenderComponent(VCheckbox, {
              "hide-details": "",
              class: "text-caption",
              color: "secondary-accent"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Keep me signed in?</span></div>`);
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(`<div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(VTooltip, {
              location: "right bottom",
              "max-width": "300",
              "open-on-click": "",
              "open-on-hover": ""
            }, {
              activator: withCtx(({ props: props2 }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VIcon, mergeProps(props2, {
                    icon: "mdi-help-circle-outline",
                    size: "x-small",
                    end: ""
                  }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VIcon, mergeProps(props2, {
                      icon: "mdi-help-circle-outline",
                      size: "x-small",
                      end: ""
                    }), null, 16)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex pa-2 text-caption flex-column"${_scopeId2}><span${_scopeId2}> This reduces the number of times you&#39;re asked to sign in on this device.<br${_scopeId2}> For increased account security, use this feature only on your personal devices. </span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex pa-2 text-caption flex-column" }, [
                      createVNode("span", null, [
                        createTextVNode(" This reduces the number of times you're asked to sign in on this device."),
                        createVNode("br"),
                        createTextVNode(" For increased account security, use this feature only on your personal devices. ")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "pb-2 d-flex justify-space-between text-caption font-weight-bold" }, [
                createVNode("span", null, toDisplayString(__props.payload.username), 1),
                createVNode("a", {
                  onClick: handleReturn,
                  class: "cursor-pointer"
                }, "Change?")
              ]),
              createVNode(VTextField, {
                label: "Password",
                modelValue: __props.payload.password,
                "onUpdate:modelValue": ($event) => __props.payload.password = $event,
                modelModifiers: { trim: true },
                autofocus: "",
                onKeypress: withKeys(($event) => handleLogin(), ["enter"]),
                type: unref(showPassword) ? "text" : "password",
                "prepend-inner-icon": "mdi-lock-outline",
                "append-inner-icon": unref(showPassword) ? "mdi-eye-off-outline" : "mdi-eye-outline",
                rules,
                "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                "bg-color": "white"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeypress", "type", "append-inner-icon", "onClick:appendInner"]),
              createVNode("div", { class: "text-left font-weight-bold text-caption" }, [
                createVNode(_component_NuxtLink, { to: { name: "auth-forgot-password" } }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Forgot your password")
                  ]),
                  _: 1
                })
              ]),
              createVNode(VBtn, {
                block: "",
                flat: "",
                color: "primary-accent",
                class: "text-body-2 text-capitalize mt-3",
                text: "Log in",
                size: "small",
                onClick: ($event) => handleLogin(),
                loading: unref(loading)
              }, null, 8, ["onClick", "loading"]),
              createVNode("div", { class: "my-3 d-flex align-center" }, [
                createVNode("div", { class: "d-flex align-center text-caption" }, [
                  createVNode(VCheckbox, {
                    "hide-details": "",
                    class: "text-caption",
                    color: "secondary-accent"
                  }),
                  createVNode("span", null, "Keep me signed in?")
                ]),
                createVNode(VSpacer),
                createVNode("div", { class: "" }, [
                  createVNode(VTooltip, {
                    location: "right bottom",
                    "max-width": "300",
                    "open-on-click": "",
                    "open-on-hover": ""
                  }, {
                    activator: withCtx(({ props: props2 }) => [
                      createVNode(VIcon, mergeProps(props2, {
                        icon: "mdi-help-circle-outline",
                        size: "x-small",
                        end: ""
                      }), null, 16)
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex pa-2 text-caption flex-column" }, [
                        createVNode("span", null, [
                          createTextVNode(" This reduces the number of times you're asked to sign in on this device."),
                          createVNode("br"),
                          createTextVNode(" For increased account security, use this feature only on your personal devices. ")
                        ])
                      ])
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
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/auth/password.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const environmentVariable = useRuntimeConfig();
    const payload = ref({
      username: "",
      password: ""
    });
    const username = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientAuthUsername = __nuxt_component_0;
      const _component_ClientAuthPassword = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-100" }, _attrs))} data-v-3be9042a><div class="py-2 text-center" data-v-3be9042a><b data-v-3be9042a>Welcome to ${ssrInterpolate(unref(environmentVariable).public.app_name)}</b></div><div class="d-flex align-center justify-center w-100" data-v-3be9042a>`);
      _push(ssrRenderComponent(VCard, {
        class: "mx-auto mt-4 pa-4 auth-card rounded-lg bg-transparent",
        flat: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VWindow, {
              modelValue: unref(username),
              "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VWindowItem, {
                    value: true,
                    class: "mt-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(username)) {
                          _push4(ssrRenderComponent(_component_ClientAuthUsername, {
                            onContinue: ($event) => username.value = false,
                            payload: unref(payload)
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(username) ? (openBlock(), createBlock(_component_ClientAuthUsername, {
                            key: 0,
                            onContinue: ($event) => username.value = false,
                            payload: unref(payload)
                          }, null, 8, ["onContinue", "payload"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VWindowItem, { value: false }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!unref(username)) {
                          _push4(ssrRenderComponent(_component_ClientAuthPassword, {
                            onReturn: ($event) => username.value = true,
                            payload: unref(payload)
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          !unref(username) ? (openBlock(), createBlock(_component_ClientAuthPassword, {
                            key: 0,
                            onReturn: ($event) => username.value = true,
                            payload: unref(payload)
                          }, null, 8, ["onReturn", "payload"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VWindowItem, {
                      value: true,
                      class: "mt-1"
                    }, {
                      default: withCtx(() => [
                        unref(username) ? (openBlock(), createBlock(_component_ClientAuthUsername, {
                          key: 0,
                          onContinue: ($event) => username.value = false,
                          payload: unref(payload)
                        }, null, 8, ["onContinue", "payload"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(VWindowItem, { value: false }, {
                      default: withCtx(() => [
                        !unref(username) ? (openBlock(), createBlock(_component_ClientAuthPassword, {
                          key: 0,
                          onReturn: ($event) => username.value = true,
                          payload: unref(payload)
                        }, null, 8, ["onReturn", "payload"])) : createCommentVNode("", true)
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
              createVNode(VWindow, {
                modelValue: unref(username),
                "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null
              }, {
                default: withCtx(() => [
                  createVNode(VWindowItem, {
                    value: true,
                    class: "mt-1"
                  }, {
                    default: withCtx(() => [
                      unref(username) ? (openBlock(), createBlock(_component_ClientAuthUsername, {
                        key: 0,
                        onContinue: ($event) => username.value = false,
                        payload: unref(payload)
                      }, null, 8, ["onContinue", "payload"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(VWindowItem, { value: false }, {
                    default: withCtx(() => [
                      !unref(username) ? (openBlock(), createBlock(_component_ClientAuthPassword, {
                        key: 0,
                        onReturn: ($event) => username.value = true,
                        payload: unref(payload)
                      }, null, 8, ["onReturn", "payload"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3be9042a"]]);

export { index as default };
//# sourceMappingURL=index-IDq_VzH6.mjs.map
