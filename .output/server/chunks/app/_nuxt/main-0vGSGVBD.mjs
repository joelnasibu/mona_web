import { _ as __nuxt_component_0 } from './index-CbyoTlMq.mjs';
import { _ as __nuxt_component_1 } from './telephone-COnNGYLF.mjs';
import { p as propsFactory, g as genericComponent, W as omit, I as IconValue, v as getUid, w as useProxiedModel, m as useDevice, h as useAppStore, s as storeToRefs, $ as filterInputAttrs } from '../server.mjs';
import { u as useHelpers, a as useAuthStore } from './useHelpers-kUuDaVs4.mjs';
import { u as useRules } from './useRules-YQBIqClL.mjs';
import { computed, ref, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { V as VCard } from './VCard-M6VezhhA.mjs';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import { V as VBtn } from './VBtn-HIzP-EnY.mjs';
import { b as VIcon } from './index-jw0wqd8u.mjs';
import { V as VForm } from './VForm-tbklh6Vg.mjs';
import { m as makeVInputProps, V as VTextField, a as VInput, c as VLabel } from './VTextField-Q67PbqhP.mjs';
import { V as VDivider } from './VDivider-JUM-rhUg.mjs';
import { V as VSpacer } from './VSpacer-ohAsXIBy.mjs';
import { m as makeVSelectionControlProps, a as makeSelectionControlGroupProps, V as VSelectionControl, b as VSelectionControlGroup } from './VSelectionControl-zNSOl8MJ.mjs';
import { u as useRender } from './tag-pIHjuosL.mjs';
import './VDialog-JcAH9Fxa.mjs';
import './VOverlay-NMZIuW_y.mjs';
import './position-WfCzcf5A.mjs';
import './color-52hqu1To.mjs';
import './VMenu-Xf_H0UU6.mjs';
import 'vue-advanced-cropper';
import './VAvatar-Tkx6eOqd.mjs';
import './VList-0_bPAEAt.mjs';
import './ssrBoot-xH9VG8QW.mjs';
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

const makeVRadioProps = propsFactory({
  ...makeVSelectionControlProps({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio");
const VRadio = genericComponent()({
  name: "VRadio",
  props: makeVRadioProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VSelectionControl, mergeProps(props, {
      "class": ["v-radio", props.class],
      "style": props.style,
      "type": "radio"
    }), slots));
    return {};
  }
});
const makeVRadioGroupProps = propsFactory({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...makeVInputProps(),
  ...omit(makeSelectionControlGroupProps(), ["multiple"]),
  trueIcon: {
    type: IconValue,
    default: "$radioOn"
  },
  falseIcon: {
    type: IconValue,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup");
const VRadioGroup = genericComponent()({
  name: "VRadioGroup",
  inheritAttrs: false,
  props: makeVRadioGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const uid = getUid();
    const id = computed(() => props.id || `radio-group-${uid}`);
    const model = useProxiedModel(props, "modelValue");
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createVNode(VInput, mergeProps({
        "class": ["v-radio-group", props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id: id2,
            messagesId,
            isDisabled,
            isReadonly
          } = _ref2;
          return createVNode(Fragment, null, [label && createVNode(VLabel, {
            "id": id2.value
          }, {
            default: () => [label]
          }), createVNode(VSelectionControlGroup, mergeProps(controlProps, {
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "defaultsTarget": "VRadio",
            "trueIcon": props.trueIcon,
            "falseIcon": props.falseIcon,
            "type": props.type,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "aria-labelledby": label ? id2.value : void 0,
            "multiple": false
          }, controlAttrs, {
            "modelValue": model.value,
            "onUpdate:modelValue": ($event) => model.value = $event
          }), slots)]);
        }
      });
    });
    return {};
  }
});
const _sfc_main = {
  __name: "main",
  __ssrInlineRender: true,
  setup(__props) {
    useDevice();
    const { getFullnames, dateFormat_Month } = useHelpers(), { required, name, email, number } = useRules();
    const appStore = useAppStore();
    const { error, loading, token, currentUser, profileImage } = storeToRefs(appStore);
    const genders = ["Male", "Female"], user = ref(currentUser.value), setPhone = (val) => {
      user.value.phone = val;
    }, setImage = (val) => {
      user.value.picture = val;
    };
    const { updateUser } = useAuthStore(), formData = ref(null), handleSave = async () => {
      const { valid } = await formData.value.validate();
      if (valid)
        await updateUser(user.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreImage = __nuxt_component_0;
      const _component_Telephone = __nuxt_component_1;
      _push(ssrRenderComponent(VCard, mergeProps({
        class: "px-2 px-md-4 rounded-lg",
        flat: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, {
              class: "rounded-lg d-flex px-4 px-md-8 bg-card box-shadow-bottom",
              flat: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          justify: "space-between",
                          align: "center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, { cols: "3" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  var _a, _b;
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_AdminCoreImage, {
                                      profile: true,
                                      avatar: true,
                                      image: (_a = unref(user)) == null ? void 0 : _a.picture,
                                      onSetImage: setImage
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_AdminCoreImage, {
                                        profile: true,
                                        avatar: true,
                                        image: (_b = unref(user)) == null ? void 0 : _b.picture,
                                        onSetImage: setImage
                                      }, null, 8, ["image"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, { cols: "8" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div style="${ssrRenderStyle({ "width": "max-content" })}"${_scopeId5}><div class="text-capitalize" style="${ssrRenderStyle({ "font-size": "1.5rem" })}"${_scopeId5}><b${_scopeId5}>${ssrInterpolate(unref(getFullnames)(unref(currentUser)).toLowerCase())}</b></div>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      class: "text-caption px-10 rounded-lg my-2",
                                      color: "grey-darken-2",
                                      variant: "outlined",
                                      block: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span${_scopeId6}>Get verified</span>`);
                                          _push7(ssrRenderComponent(VIcon, {
                                            icon: "mdi-check-decagram",
                                            end: "",
                                            size: "15",
                                            color: "grey"
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("span", null, "Get verified"),
                                            createVNode(VIcon, {
                                              icon: "mdi-check-decagram",
                                              end: "",
                                              size: "15",
                                              color: "grey"
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div><div class="text-caption text-disabled"${_scopeId5}><span${_scopeId5}>Joined on ${ssrInterpolate(unref(dateFormat_Month)(unref(currentUser).dateCreated))}</span></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { style: { "width": "max-content" } }, [
                                        createVNode("div", {
                                          class: "text-capitalize",
                                          style: { "font-size": "1.5rem" }
                                        }, [
                                          createVNode("b", null, toDisplayString(unref(getFullnames)(unref(currentUser)).toLowerCase()), 1)
                                        ]),
                                        createVNode(VBtn, {
                                          class: "text-caption px-10 rounded-lg my-2",
                                          color: "grey-darken-2",
                                          variant: "outlined",
                                          block: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "Get verified"),
                                            createVNode(VIcon, {
                                              icon: "mdi-check-decagram",
                                              end: "",
                                              size: "15",
                                              color: "grey"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", { class: "text-caption text-disabled" }, [
                                        createVNode("span", null, "Joined on " + toDisplayString(unref(dateFormat_Month)(unref(currentUser).dateCreated)), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, { cols: "3" }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createVNode(_component_AdminCoreImage, {
                                        profile: true,
                                        avatar: true,
                                        image: (_a = unref(user)) == null ? void 0 : _a.picture,
                                        onSetImage: setImage
                                      }, null, 8, ["image"])
                                    ];
                                  }),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "8" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { style: { "width": "max-content" } }, [
                                      createVNode("div", {
                                        class: "text-capitalize",
                                        style: { "font-size": "1.5rem" }
                                      }, [
                                        createVNode("b", null, toDisplayString(unref(getFullnames)(unref(currentUser)).toLowerCase()), 1)
                                      ]),
                                      createVNode(VBtn, {
                                        class: "text-caption px-10 rounded-lg my-2",
                                        color: "grey-darken-2",
                                        variant: "outlined",
                                        block: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Get verified"),
                                          createVNode(VIcon, {
                                            icon: "mdi-check-decagram",
                                            end: "",
                                            size: "15",
                                            color: "grey"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "text-caption text-disabled" }, [
                                      createVNode("span", null, "Joined on " + toDisplayString(unref(dateFormat_Month)(unref(currentUser).dateCreated)), 1)
                                    ])
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
                          createVNode(VRow, {
                            justify: "space-between",
                            align: "center"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "3" }, {
                                default: withCtx(() => {
                                  var _a;
                                  return [
                                    createVNode(_component_AdminCoreImage, {
                                      profile: true,
                                      avatar: true,
                                      image: (_a = unref(user)) == null ? void 0 : _a.picture,
                                      onSetImage: setImage
                                    }, null, 8, ["image"])
                                  ];
                                }),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "8" }, {
                                default: withCtx(() => [
                                  createVNode("div", { style: { "width": "max-content" } }, [
                                    createVNode("div", {
                                      class: "text-capitalize",
                                      style: { "font-size": "1.5rem" }
                                    }, [
                                      createVNode("b", null, toDisplayString(unref(getFullnames)(unref(currentUser)).toLowerCase()), 1)
                                    ]),
                                    createVNode(VBtn, {
                                      class: "text-caption px-10 rounded-lg my-2",
                                      color: "grey-darken-2",
                                      variant: "outlined",
                                      block: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "Get verified"),
                                        createVNode(VIcon, {
                                          icon: "mdi-check-decagram",
                                          end: "",
                                          size: "15",
                                          color: "grey"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "text-caption text-disabled" }, [
                                    createVNode("span", null, "Joined on " + toDisplayString(unref(dateFormat_Month)(unref(currentUser).dateCreated)), 1)
                                  ])
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
                        createVNode(VRow, {
                          justify: "space-between",
                          align: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "3" }, {
                              default: withCtx(() => {
                                var _a;
                                return [
                                  createVNode(_component_AdminCoreImage, {
                                    profile: true,
                                    avatar: true,
                                    image: (_a = unref(user)) == null ? void 0 : _a.picture,
                                    onSetImage: setImage
                                  }, null, 8, ["image"])
                                ];
                              }),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "8" }, {
                              default: withCtx(() => [
                                createVNode("div", { style: { "width": "max-content" } }, [
                                  createVNode("div", {
                                    class: "text-capitalize",
                                    style: { "font-size": "1.5rem" }
                                  }, [
                                    createVNode("b", null, toDisplayString(unref(getFullnames)(unref(currentUser)).toLowerCase()), 1)
                                  ]),
                                  createVNode(VBtn, {
                                    class: "text-caption px-10 rounded-lg my-2",
                                    color: "grey-darken-2",
                                    variant: "outlined",
                                    block: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Get verified"),
                                      createVNode(VIcon, {
                                        icon: "mdi-check-decagram",
                                        end: "",
                                        size: "15",
                                        color: "grey"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "text-caption text-disabled" }, [
                                  createVNode("span", null, "Joined on " + toDisplayString(unref(dateFormat_Month)(unref(currentUser).dateCreated)), 1)
                                ])
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
            _push2(ssrRenderComponent(VContainer, { class: "mt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { justify: "center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          sm: "11"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="d-flex flex-column w-100"${_scopeId4}><div class="text-caption d-flex flex-column ga-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VForm, {
                                ref_key: "formData",
                                ref: formData
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class=""${_scopeId5}><div class="text-subtitle-2 pb-3"${_scopeId5}><b${_scopeId5}>Display names</b><div class="text-caption text-disabled d-flex align-center"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "mdi-information-outline",
                                      start: ""
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span${_scopeId5}>Everyone can see your display names</span></div></div><div class="d-flex flex-wrap ga-2 w-100 mt-1"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      label: "First name",
                                      modelValue: unref(user).firstname,
                                      "onUpdate:modelValue": ($event) => unref(user).firstname = $event,
                                      rules: unref(name)()
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      label: "Last name",
                                      modelValue: unref(user).lastname,
                                      "onUpdate:modelValue": ($event) => unref(user).lastname = $event,
                                      rules: unref(name)()
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                    _push6(ssrRenderComponent(VDivider, { class: "my-2" }, null, _parent6, _scopeId5));
                                    _push6(`<div class="mt-6"${_scopeId5}><div class="text-subtitle-2 pb-3"${_scopeId5}><b${_scopeId5}>Unique Identifier</b></div>`);
                                    _push6(ssrRenderComponent(VTextField, {
                                      label: "Username",
                                      modelValue: unref(user).username,
                                      "onUpdate:modelValue": ($event) => unref(user).username = $event,
                                      rules: unref(required)()
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VTextField, {
                                      label: "Email address",
                                      modelValue: unref(user).email,
                                      "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                      rules: unref(email)()
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_Telephone, {
                                      number: unref(user).phone,
                                      onSetPhone: setPhone
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VDivider, { class: "my-2" }, null, _parent6, _scopeId5));
                                    _push6(`<div class="mt-6"${_scopeId5}><div class="text-subtitle-2 pb-3"${_scopeId5}><b${_scopeId5}>Other account details</b></div><div class="w-100"${_scopeId5}><div class="text-caption d-flex align-center"${_scopeId5}><div class="text-body-2"${_scopeId5}><span${_scopeId5}>Gender</span></div>`);
                                    _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VRadioGroup, {
                                      "hide-details": "",
                                      inline: "",
                                      color: "primary-accent",
                                      modelValue: unref(user).gender,
                                      "onUpdate:modelValue": ($event) => unref(user).gender = $event
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(genders, (gender) => {
                                            _push7(ssrRenderComponent(VRadio, {
                                              value: String(gender).toUpperCase(),
                                              class: ""
                                            }, {
                                              label: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="text-caption"${_scopeId7}><span${_scopeId7}>${ssrInterpolate(gender)}</span></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "text-caption" }, [
                                                      createVNode("span", null, toDisplayString(gender), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(genders, (gender) => {
                                              return createVNode(VRadio, {
                                                value: String(gender).toUpperCase(),
                                                class: ""
                                              }, {
                                                label: withCtx(() => [
                                                  createVNode("div", { class: "text-caption" }, [
                                                    createVNode("span", null, toDisplayString(gender), 1)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div></div></div>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      class: "text-caption mt-5",
                                      color: "primary-accent",
                                      flat: "",
                                      block: "",
                                      onClick: handleSave,
                                      loading: unref(loading)
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<span${_scopeId6}>Save</span>`);
                                        } else {
                                          return [
                                            createVNode("span", null, "Save")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "" }, [
                                        createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                          createVNode("b", null, "Display names"),
                                          createVNode("div", { class: "text-caption text-disabled d-flex align-center" }, [
                                            createVNode(VIcon, {
                                              icon: "mdi-information-outline",
                                              start: ""
                                            }),
                                            createVNode("span", null, "Everyone can see your display names")
                                          ])
                                        ]),
                                        createVNode("div", { class: "d-flex flex-wrap ga-2 w-100 mt-1" }, [
                                          createVNode(VTextField, {
                                            label: "First name",
                                            modelValue: unref(user).firstname,
                                            "onUpdate:modelValue": ($event) => unref(user).firstname = $event,
                                            rules: unref(name)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(VTextField, {
                                            label: "Last name",
                                            modelValue: unref(user).lastname,
                                            "onUpdate:modelValue": ($event) => unref(user).lastname = $event,
                                            rules: unref(name)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ])
                                      ]),
                                      createVNode(VDivider, { class: "my-2" }),
                                      createVNode("div", { class: "mt-6" }, [
                                        createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                          createVNode("b", null, "Unique Identifier")
                                        ]),
                                        createVNode(VTextField, {
                                          label: "Username",
                                          modelValue: unref(user).username,
                                          "onUpdate:modelValue": ($event) => unref(user).username = $event,
                                          rules: unref(required)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(VTextField, {
                                          label: "Email address",
                                          modelValue: unref(user).email,
                                          "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                          rules: unref(email)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(_component_Telephone, {
                                          number: unref(user).phone,
                                          onSetPhone: setPhone
                                        }, null, 8, ["number"])
                                      ]),
                                      createVNode(VDivider, { class: "my-2" }),
                                      createVNode("div", { class: "mt-6" }, [
                                        createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                          createVNode("b", null, "Other account details")
                                        ]),
                                        createVNode("div", { class: "w-100" }, [
                                          createVNode("div", { class: "text-caption d-flex align-center" }, [
                                            createVNode("div", { class: "text-body-2" }, [
                                              createVNode("span", null, "Gender")
                                            ]),
                                            createVNode(VSpacer),
                                            createVNode(VRadioGroup, {
                                              "hide-details": "",
                                              inline: "",
                                              color: "primary-accent",
                                              modelValue: unref(user).gender,
                                              "onUpdate:modelValue": ($event) => unref(user).gender = $event
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(genders, (gender) => {
                                                  return createVNode(VRadio, {
                                                    value: String(gender).toUpperCase(),
                                                    class: ""
                                                  }, {
                                                    label: withCtx(() => [
                                                      createVNode("div", { class: "text-caption" }, [
                                                        createVNode("span", null, toDisplayString(gender), 1)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"]);
                                                }), 64))
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ])
                                      ]),
                                      createVNode(VBtn, {
                                        class: "text-caption mt-5",
                                        color: "primary-accent",
                                        flat: "",
                                        block: "",
                                        onClick: handleSave,
                                        loading: unref(loading)
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
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "d-flex flex-column w-100" }, [
                                  createVNode("div", { class: "text-caption d-flex flex-column ga-2" }, [
                                    createVNode(VForm, {
                                      ref_key: "formData",
                                      ref: formData
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "" }, [
                                          createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                            createVNode("b", null, "Display names"),
                                            createVNode("div", { class: "text-caption text-disabled d-flex align-center" }, [
                                              createVNode(VIcon, {
                                                icon: "mdi-information-outline",
                                                start: ""
                                              }),
                                              createVNode("span", null, "Everyone can see your display names")
                                            ])
                                          ]),
                                          createVNode("div", { class: "d-flex flex-wrap ga-2 w-100 mt-1" }, [
                                            createVNode(VTextField, {
                                              label: "First name",
                                              modelValue: unref(user).firstname,
                                              "onUpdate:modelValue": ($event) => unref(user).firstname = $event,
                                              rules: unref(name)()
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode(VTextField, {
                                              label: "Last name",
                                              modelValue: unref(user).lastname,
                                              "onUpdate:modelValue": ($event) => unref(user).lastname = $event,
                                              rules: unref(name)()
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ])
                                        ]),
                                        createVNode(VDivider, { class: "my-2" }),
                                        createVNode("div", { class: "mt-6" }, [
                                          createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                            createVNode("b", null, "Unique Identifier")
                                          ]),
                                          createVNode(VTextField, {
                                            label: "Username",
                                            modelValue: unref(user).username,
                                            "onUpdate:modelValue": ($event) => unref(user).username = $event,
                                            rules: unref(required)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(VTextField, {
                                            label: "Email address",
                                            modelValue: unref(user).email,
                                            "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                            rules: unref(email)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(_component_Telephone, {
                                            number: unref(user).phone,
                                            onSetPhone: setPhone
                                          }, null, 8, ["number"])
                                        ]),
                                        createVNode(VDivider, { class: "my-2" }),
                                        createVNode("div", { class: "mt-6" }, [
                                          createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                            createVNode("b", null, "Other account details")
                                          ]),
                                          createVNode("div", { class: "w-100" }, [
                                            createVNode("div", { class: "text-caption d-flex align-center" }, [
                                              createVNode("div", { class: "text-body-2" }, [
                                                createVNode("span", null, "Gender")
                                              ]),
                                              createVNode(VSpacer),
                                              createVNode(VRadioGroup, {
                                                "hide-details": "",
                                                inline: "",
                                                color: "primary-accent",
                                                modelValue: unref(user).gender,
                                                "onUpdate:modelValue": ($event) => unref(user).gender = $event
                                              }, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(genders, (gender) => {
                                                    return createVNode(VRadio, {
                                                      value: String(gender).toUpperCase(),
                                                      class: ""
                                                    }, {
                                                      label: withCtx(() => [
                                                        createVNode("div", { class: "text-caption" }, [
                                                          createVNode("span", null, toDisplayString(gender), 1)
                                                        ])
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"]);
                                                  }), 64))
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ])
                                        ]),
                                        createVNode(VBtn, {
                                          class: "text-caption mt-5",
                                          color: "primary-accent",
                                          flat: "",
                                          block: "",
                                          onClick: handleSave,
                                          loading: unref(loading)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "Save")
                                          ]),
                                          _: 1
                                        }, 8, ["loading"])
                                      ]),
                                      _: 1
                                    }, 512)
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "11"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex flex-column w-100" }, [
                                createVNode("div", { class: "text-caption d-flex flex-column ga-2" }, [
                                  createVNode(VForm, {
                                    ref_key: "formData",
                                    ref: formData
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "" }, [
                                        createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                          createVNode("b", null, "Display names"),
                                          createVNode("div", { class: "text-caption text-disabled d-flex align-center" }, [
                                            createVNode(VIcon, {
                                              icon: "mdi-information-outline",
                                              start: ""
                                            }),
                                            createVNode("span", null, "Everyone can see your display names")
                                          ])
                                        ]),
                                        createVNode("div", { class: "d-flex flex-wrap ga-2 w-100 mt-1" }, [
                                          createVNode(VTextField, {
                                            label: "First name",
                                            modelValue: unref(user).firstname,
                                            "onUpdate:modelValue": ($event) => unref(user).firstname = $event,
                                            rules: unref(name)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(VTextField, {
                                            label: "Last name",
                                            modelValue: unref(user).lastname,
                                            "onUpdate:modelValue": ($event) => unref(user).lastname = $event,
                                            rules: unref(name)()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ])
                                      ]),
                                      createVNode(VDivider, { class: "my-2" }),
                                      createVNode("div", { class: "mt-6" }, [
                                        createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                          createVNode("b", null, "Unique Identifier")
                                        ]),
                                        createVNode(VTextField, {
                                          label: "Username",
                                          modelValue: unref(user).username,
                                          "onUpdate:modelValue": ($event) => unref(user).username = $event,
                                          rules: unref(required)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(VTextField, {
                                          label: "Email address",
                                          modelValue: unref(user).email,
                                          "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                          rules: unref(email)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(_component_Telephone, {
                                          number: unref(user).phone,
                                          onSetPhone: setPhone
                                        }, null, 8, ["number"])
                                      ]),
                                      createVNode(VDivider, { class: "my-2" }),
                                      createVNode("div", { class: "mt-6" }, [
                                        createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                          createVNode("b", null, "Other account details")
                                        ]),
                                        createVNode("div", { class: "w-100" }, [
                                          createVNode("div", { class: "text-caption d-flex align-center" }, [
                                            createVNode("div", { class: "text-body-2" }, [
                                              createVNode("span", null, "Gender")
                                            ]),
                                            createVNode(VSpacer),
                                            createVNode(VRadioGroup, {
                                              "hide-details": "",
                                              inline: "",
                                              color: "primary-accent",
                                              modelValue: unref(user).gender,
                                              "onUpdate:modelValue": ($event) => unref(user).gender = $event
                                            }, {
                                              default: withCtx(() => [
                                                (openBlock(), createBlock(Fragment, null, renderList(genders, (gender) => {
                                                  return createVNode(VRadio, {
                                                    value: String(gender).toUpperCase(),
                                                    class: ""
                                                  }, {
                                                    label: withCtx(() => [
                                                      createVNode("div", { class: "text-caption" }, [
                                                        createVNode("span", null, toDisplayString(gender), 1)
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"]);
                                                }), 64))
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ])
                                      ]),
                                      createVNode(VBtn, {
                                        class: "text-caption mt-5",
                                        color: "primary-accent",
                                        flat: "",
                                        block: "",
                                        onClick: handleSave,
                                        loading: unref(loading)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Save")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"])
                                    ]),
                                    _: 1
                                  }, 512)
                                ])
                              ])
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
                    createVNode(VRow, { justify: "center" }, {
                      default: withCtx(() => [
                        createVNode(VCol, {
                          cols: "12",
                          sm: "11"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "d-flex flex-column w-100" }, [
                              createVNode("div", { class: "text-caption d-flex flex-column ga-2" }, [
                                createVNode(VForm, {
                                  ref_key: "formData",
                                  ref: formData
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "" }, [
                                      createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                        createVNode("b", null, "Display names"),
                                        createVNode("div", { class: "text-caption text-disabled d-flex align-center" }, [
                                          createVNode(VIcon, {
                                            icon: "mdi-information-outline",
                                            start: ""
                                          }),
                                          createVNode("span", null, "Everyone can see your display names")
                                        ])
                                      ]),
                                      createVNode("div", { class: "d-flex flex-wrap ga-2 w-100 mt-1" }, [
                                        createVNode(VTextField, {
                                          label: "First name",
                                          modelValue: unref(user).firstname,
                                          "onUpdate:modelValue": ($event) => unref(user).firstname = $event,
                                          rules: unref(name)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(VTextField, {
                                          label: "Last name",
                                          modelValue: unref(user).lastname,
                                          "onUpdate:modelValue": ($event) => unref(user).lastname = $event,
                                          rules: unref(name)()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ])
                                    ]),
                                    createVNode(VDivider, { class: "my-2" }),
                                    createVNode("div", { class: "mt-6" }, [
                                      createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                        createVNode("b", null, "Unique Identifier")
                                      ]),
                                      createVNode(VTextField, {
                                        label: "Username",
                                        modelValue: unref(user).username,
                                        "onUpdate:modelValue": ($event) => unref(user).username = $event,
                                        rules: unref(required)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(VTextField, {
                                        label: "Email address",
                                        modelValue: unref(user).email,
                                        "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                        rules: unref(email)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(_component_Telephone, {
                                        number: unref(user).phone,
                                        onSetPhone: setPhone
                                      }, null, 8, ["number"])
                                    ]),
                                    createVNode(VDivider, { class: "my-2" }),
                                    createVNode("div", { class: "mt-6" }, [
                                      createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                        createVNode("b", null, "Other account details")
                                      ]),
                                      createVNode("div", { class: "w-100" }, [
                                        createVNode("div", { class: "text-caption d-flex align-center" }, [
                                          createVNode("div", { class: "text-body-2" }, [
                                            createVNode("span", null, "Gender")
                                          ]),
                                          createVNode(VSpacer),
                                          createVNode(VRadioGroup, {
                                            "hide-details": "",
                                            inline: "",
                                            color: "primary-accent",
                                            modelValue: unref(user).gender,
                                            "onUpdate:modelValue": ($event) => unref(user).gender = $event
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(genders, (gender) => {
                                                return createVNode(VRadio, {
                                                  value: String(gender).toUpperCase(),
                                                  class: ""
                                                }, {
                                                  label: withCtx(() => [
                                                    createVNode("div", { class: "text-caption" }, [
                                                      createVNode("span", null, toDisplayString(gender), 1)
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 64))
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ])
                                    ]),
                                    createVNode(VBtn, {
                                      class: "text-caption mt-5",
                                      color: "primary-accent",
                                      flat: "",
                                      block: "",
                                      onClick: handleSave,
                                      loading: unref(loading)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "Save")
                                      ]),
                                      _: 1
                                    }, 8, ["loading"])
                                  ]),
                                  _: 1
                                }, 512)
                              ])
                            ])
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
              createVNode(VCard, {
                class: "rounded-lg d-flex px-4 px-md-8 bg-card box-shadow-bottom",
                flat: ""
              }, {
                default: withCtx(() => [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        justify: "space-between",
                        align: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "3" }, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(_component_AdminCoreImage, {
                                  profile: true,
                                  avatar: true,
                                  image: (_a = unref(user)) == null ? void 0 : _a.picture,
                                  onSetImage: setImage
                                }, null, 8, ["image"])
                              ];
                            }),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "8" }, {
                            default: withCtx(() => [
                              createVNode("div", { style: { "width": "max-content" } }, [
                                createVNode("div", {
                                  class: "text-capitalize",
                                  style: { "font-size": "1.5rem" }
                                }, [
                                  createVNode("b", null, toDisplayString(unref(getFullnames)(unref(currentUser)).toLowerCase()), 1)
                                ]),
                                createVNode(VBtn, {
                                  class: "text-caption px-10 rounded-lg my-2",
                                  color: "grey-darken-2",
                                  variant: "outlined",
                                  block: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Get verified"),
                                    createVNode(VIcon, {
                                      icon: "mdi-check-decagram",
                                      end: "",
                                      size: "15",
                                      color: "grey"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "text-caption text-disabled" }, [
                                createVNode("span", null, "Joined on " + toDisplayString(unref(dateFormat_Month)(unref(currentUser).dateCreated)), 1)
                              ])
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
              createVNode(VContainer, { class: "mt-4" }, {
                default: withCtx(() => [
                  createVNode(VRow, { justify: "center" }, {
                    default: withCtx(() => [
                      createVNode(VCol, {
                        cols: "12",
                        sm: "11"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "d-flex flex-column w-100" }, [
                            createVNode("div", { class: "text-caption d-flex flex-column ga-2" }, [
                              createVNode(VForm, {
                                ref_key: "formData",
                                ref: formData
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "" }, [
                                    createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                      createVNode("b", null, "Display names"),
                                      createVNode("div", { class: "text-caption text-disabled d-flex align-center" }, [
                                        createVNode(VIcon, {
                                          icon: "mdi-information-outline",
                                          start: ""
                                        }),
                                        createVNode("span", null, "Everyone can see your display names")
                                      ])
                                    ]),
                                    createVNode("div", { class: "d-flex flex-wrap ga-2 w-100 mt-1" }, [
                                      createVNode(VTextField, {
                                        label: "First name",
                                        modelValue: unref(user).firstname,
                                        "onUpdate:modelValue": ($event) => unref(user).firstname = $event,
                                        rules: unref(name)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                      createVNode(VTextField, {
                                        label: "Last name",
                                        modelValue: unref(user).lastname,
                                        "onUpdate:modelValue": ($event) => unref(user).lastname = $event,
                                        rules: unref(name)()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ])
                                  ]),
                                  createVNode(VDivider, { class: "my-2" }),
                                  createVNode("div", { class: "mt-6" }, [
                                    createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                      createVNode("b", null, "Unique Identifier")
                                    ]),
                                    createVNode(VTextField, {
                                      label: "Username",
                                      modelValue: unref(user).username,
                                      "onUpdate:modelValue": ($event) => unref(user).username = $event,
                                      rules: unref(required)()
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(VTextField, {
                                      label: "Email address",
                                      modelValue: unref(user).email,
                                      "onUpdate:modelValue": ($event) => unref(user).email = $event,
                                      rules: unref(email)()
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                    createVNode(_component_Telephone, {
                                      number: unref(user).phone,
                                      onSetPhone: setPhone
                                    }, null, 8, ["number"])
                                  ]),
                                  createVNode(VDivider, { class: "my-2" }),
                                  createVNode("div", { class: "mt-6" }, [
                                    createVNode("div", { class: "text-subtitle-2 pb-3" }, [
                                      createVNode("b", null, "Other account details")
                                    ]),
                                    createVNode("div", { class: "w-100" }, [
                                      createVNode("div", { class: "text-caption d-flex align-center" }, [
                                        createVNode("div", { class: "text-body-2" }, [
                                          createVNode("span", null, "Gender")
                                        ]),
                                        createVNode(VSpacer),
                                        createVNode(VRadioGroup, {
                                          "hide-details": "",
                                          inline: "",
                                          color: "primary-accent",
                                          modelValue: unref(user).gender,
                                          "onUpdate:modelValue": ($event) => unref(user).gender = $event
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(genders, (gender) => {
                                              return createVNode(VRadio, {
                                                value: String(gender).toUpperCase(),
                                                class: ""
                                              }, {
                                                label: withCtx(() => [
                                                  createVNode("div", { class: "text-caption" }, [
                                                    createVNode("span", null, toDisplayString(gender), 1)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 64))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ])
                                  ]),
                                  createVNode(VBtn, {
                                    class: "text-caption mt-5",
                                    color: "primary-accent",
                                    flat: "",
                                    block: "",
                                    onClick: handleSave,
                                    loading: unref(loading)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Save")
                                    ]),
                                    _: 1
                                  }, 8, ["loading"])
                                ]),
                                _: 1
                              }, 512)
                            ])
                          ])
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index/main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=main-0vGSGVBD.mjs.map
