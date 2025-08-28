import { _ as __nuxt_component_0 } from './page-header-zc_xglZV.mjs';
import { _ as __nuxt_component_0$1 } from './stepper-ipq6mb5U.mjs';
import { a as __nuxt_component_2, b as __nuxt_component_3, c as __nuxt_component_4, d as __nuxt_component_6, _ as __nuxt_component_7 } from './others-MJNGAYZp.mjs';
import { _ as __nuxt_component_0$2 } from './mid-screen-layout-b8tbDczG.mjs';
import { ref, withCtx, unref, createVNode, openBlock, createBlock, isRef, useSSRContext } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { s as storeToRefs, h as useAppStore, b as navigateTo } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useBusinessStore } from './business-xWrgr4rc.mjs';
import { V as VBtn } from './VBtn-HIzP-EnY.mjs';
import { V as VWindow, a as VWindowItem } from './VWindowItem-49fT4O5I.mjs';
import './useHelpers-kUuDaVs4.mjs';
import 'date-fns';
import 'date-fns/locale';
import './index-jw0wqd8u.mjs';
import './color-52hqu1To.mjs';
import './tag-pIHjuosL.mjs';
import './VSpacer-ohAsXIBy.mjs';
import './VAvatar-Tkx6eOqd.mjs';
import './VDivider-JUM-rhUg.mjs';
import './index-CbyoTlMq.mjs';
import './VDialog-JcAH9Fxa.mjs';
import './VCard-M6VezhhA.mjs';
import './position-WfCzcf5A.mjs';
import './VOverlay-NMZIuW_y.mjs';
import './VTextField-Q67PbqhP.mjs';
import './VMenu-Xf_H0UU6.mjs';
import 'vue-advanced-cropper';
import './VContainer-jF5qmVp8.mjs';
import './VRow-lyrtfIhE.mjs';
import './select-_AXsm2yX.mjs';
import './VList-0_bPAEAt.mjs';
import './ssrBoot-xH9VG8QW.mjs';
import './VCheckbox-6aCeGZz9.mjs';
import './VCheckboxBtn-uKZxiDvG.mjs';
import './VSelectionControl-zNSOl8MJ.mjs';
import './calendar-date-Z0smB_LV.mjs';
import './VSheet-SPKhQ0zP.mjs';
import './useRules-YQBIqClL.mjs';
import './business-types-RUyLDwre.mjs';
import './VForm-tbklh6Vg.mjs';
import './telephone-COnNGYLF.mjs';
import './editor-JUAoNM3K.mjs';
import '@unhead/shared';
import '../../nitro/firebase-gen-2.mjs';
import 'firebase-functions/v2/https';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'unhead';
import 'vue-router';
import '@algolia/cache-in-memory';
import 'pinia-plugin-persistedstate';
import './resizeObserver-k8M9k6Xi.mjs';

const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading, error } = storeToRefs(useAppStore());
    const { createBusiness } = useBusinessStore();
    const payload = ref({
      businessName: "",
      userId: 0,
      registrationNumber: "",
      businessTypeId: 0,
      taxIdentificationNumber: "",
      image: null,
      owner: {
        names: "Dummy user",
        phone: "254796577628",
        email: "test@gmail.com"
      },
      contactPerson: {
        names: "",
        phone: "",
        email: ""
      },
      address: {
        country: "",
        province: "",
        town: "",
        commune: "",
        quartier: "",
        avenue: "",
        no: ""
      },
      email: "",
      phone: "",
      dateOfRegistration: /* @__PURE__ */ new Date(),
      bankDetails: {
        accountNo: "",
        accountName: ""
      },
      website: "",
      summary: "",
      businessCategory: "UNFORMAL"
    });
    const tab = ref(0);
    const sections = [
      { title: "Basic Info", icon: "mdi-folder-information-outline" },
      { title: "Contact", icon: "mdi-phone-outline" },
      { title: "Address", icon: "mdi-map-marker-outline" },
      { title: "Other details", icon: "mdi-menu" },
      { title: "Preview", icon: "mdi-file-outline" }
    ];
    const triggers = ref({
      stepOne: false,
      stepTwo: false,
      stepThree: false,
      stepFour: false
    });
    const navigate = (step) => {
      tab.value = step;
    };
    const validation = (index) => {
      switch (index) {
        case 0:
          triggers.value.stepOne = !triggers.value.stepOne;
          break;
        case 1:
          triggers.value.stepTwo = !triggers.value.stepTwo;
          break;
        case 2:
          triggers.value.stepThree = !triggers.value.stepThree;
          break;
        case 3:
          triggers.value.stepFour = !triggers.value.stepFour;
          break;
      }
    };
    const submit = async () => {
      await createBusiness(payload.value);
      if (!error.value)
        setTimeout(() => {
          navigateTo({
            name: "admin-businesses"
          });
        }, 2e3);
    };
    useSeoMeta({
      title: "Create business"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCorePageHeader = __nuxt_component_0;
      const _component_AdminCoreStepper = __nuxt_component_0$1;
      const _component_AdminBusinessCreateBasic = __nuxt_component_2;
      const _component_AdminBusinessCreateContact = __nuxt_component_3;
      const _component_AdminAddressInputs = __nuxt_component_4;
      const _component_CoreMidScreenLayout = __nuxt_component_0$2;
      const _component_AdminBusinessCreateOthers = __nuxt_component_6;
      const _component_AdminBusinessPreview = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminCorePageHeader, { route: "admin-businesses" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex align-center"${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              "prepend-icon": "mdi-chevron-left",
              class: "text-caption text-capitalize mr-2",
              color: unref(tab) > 0 ? "primary-accent" : "",
              size: "small",
              flat: "",
              title: "Previous Step",
              disabled: !unref(tab) > 0,
              onClick: ($event) => navigate(unref(tab) - 1),
              variant: "text",
              rounded: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>Prev</span>`);
                } else {
                  return [
                    createVNode("span", null, "Prev")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(tab) === sections.length - 1) {
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
            } else {
              _push2(ssrRenderComponent(VBtn, {
                "append-icon": "mdi-chevron-right",
                size: "small",
                flat: "",
                class: "ml-2 text-caption text-capitalize",
                title: "Next Step",
                onClick: ($event) => validation(unref(tab)),
                color: "primary-dark",
                rounded: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>Next</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Next")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center" }, [
                createVNode(VBtn, {
                  "prepend-icon": "mdi-chevron-left",
                  class: "text-caption text-capitalize mr-2",
                  color: unref(tab) > 0 ? "primary-accent" : "",
                  size: "small",
                  flat: "",
                  title: "Previous Step",
                  disabled: !unref(tab) > 0,
                  onClick: ($event) => navigate(unref(tab) - 1),
                  variant: "text",
                  rounded: ""
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Prev")
                  ]),
                  _: 1
                }, 8, ["color", "disabled", "onClick"]),
                unref(tab) === sections.length - 1 ? (openBlock(), createBlock(VBtn, {
                  key: 0,
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
                }, 8, ["loading"])) : (openBlock(), createBlock(VBtn, {
                  key: 1,
                  "append-icon": "mdi-chevron-right",
                  size: "small",
                  flat: "",
                  class: "ml-2 text-caption text-capitalize",
                  title: "Next Step",
                  onClick: ($event) => validation(unref(tab)),
                  color: "primary-dark",
                  rounded: ""
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "Next")
                  ]),
                  _: 1
                }, 8, ["onClick"]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-2">`);
      _push(ssrRenderComponent(_component_AdminCoreStepper, {
        step: unref(tab),
        sections,
        onNavigate: navigate,
        onValidation: validation,
        onSave: submit
      }, null, _parent));
      _push(ssrRenderComponent(VWindow, {
        modelValue: unref(tab),
        "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VWindowItem, { value: 0 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AdminBusinessCreateBasic, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepOne,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminBusinessCreateBasic, {
                      payload: unref(payload),
                      trigger: unref(triggers).stepOne,
                      onStep: navigate
                    }, null, 8, ["payload", "trigger"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: 1 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AdminBusinessCreateContact, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepTwo,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminBusinessCreateContact, {
                      payload: unref(payload),
                      trigger: unref(triggers).stepTwo,
                      onStep: navigate
                    }, null, 8, ["payload", "trigger"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: 2 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AdminAddressInputs, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepThree,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminAddressInputs, {
                      payload: unref(payload),
                      trigger: unref(triggers).stepThree,
                      onStep: navigate
                    }, null, 8, ["payload", "trigger"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: 3 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CoreMidScreenLayout, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mt-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_AdminBusinessCreateOthers, {
                          payload: unref(payload),
                          trigger: unref(triggers).stepFour,
                          onStep: navigate
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mt-3" }, [
                            createVNode(_component_AdminBusinessCreateOthers, {
                              payload: unref(payload),
                              trigger: unref(triggers).stepFour,
                              onStep: navigate
                            }, null, 8, ["payload", "trigger"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CoreMidScreenLayout, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mt-3" }, [
                          createVNode(_component_AdminBusinessCreateOthers, {
                            payload: unref(payload),
                            trigger: unref(triggers).stepFour,
                            onStep: navigate
                          }, null, 8, ["payload", "trigger"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: 4 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CoreMidScreenLayout, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AdminBusinessPreview, { payload: unref(payload) }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AdminBusinessPreview, { payload: unref(payload) }, null, 8, ["payload"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CoreMidScreenLayout, null, {
                      default: withCtx(() => [
                        createVNode(_component_AdminBusinessPreview, { payload: unref(payload) }, null, 8, ["payload"])
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
              createVNode(VWindowItem, { value: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminBusinessCreateBasic, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepOne,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminBusinessCreateContact, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepTwo,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 2 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminAddressInputs, {
                    payload: unref(payload),
                    trigger: unref(triggers).stepThree,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 3 }, {
                default: withCtx(() => [
                  createVNode(_component_CoreMidScreenLayout, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mt-3" }, [
                        createVNode(_component_AdminBusinessCreateOthers, {
                          payload: unref(payload),
                          trigger: unref(triggers).stepFour,
                          onStep: navigate
                        }, null, 8, ["payload", "trigger"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 4 }, {
                default: withCtx(() => [
                  createVNode(_component_CoreMidScreenLayout, null, {
                    default: withCtx(() => [
                      createVNode(_component_AdminBusinessPreview, { payload: unref(payload) }, null, 8, ["payload"])
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
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/businesses/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-iTkC8HUg.mjs.map
