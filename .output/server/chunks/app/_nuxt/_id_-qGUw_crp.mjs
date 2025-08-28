import { _ as __nuxt_component_0, a as __nuxt_component_3 } from './delete-confirmation-j8Kot4NH.mjs';
import { _ as __nuxt_component_7, a as __nuxt_component_2$1, b as __nuxt_component_3$1, c as __nuxt_component_4, d as __nuxt_component_6 } from './others-MJNGAYZp.mjs';
import { _ as __nuxt_component_0$1 } from './stepper-ipq6mb5U.mjs';
import { _ as __nuxt_component_0$2 } from './mid-screen-layout-b8tbDczG.mjs';
import { ref, withAsyncContext, watchEffect, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, useSSRContext, mergeProps, isRef } from 'vue';
import { a as useSeoMeta } from './index-S1hhTCs3.mjs';
import { l as useRoute, s as storeToRefs, h as useAppStore, b as navigateTo } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useBusinessStore } from './business-xWrgr4rc.mjs';
import { V as VWindow, a as VWindowItem } from './VWindowItem-49fT4O5I.mjs';
import { u as useBusinessTypeStore } from './business-types-RUyLDwre.mjs';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VSpacer } from './VSpacer-ohAsXIBy.mjs';
import './page-header-zc_xglZV.mjs';
import './useHelpers-kUuDaVs4.mjs';
import 'date-fns';
import 'date-fns/locale';
import './index-jw0wqd8u.mjs';
import './color-52hqu1To.mjs';
import './tag-pIHjuosL.mjs';
import './VBtn-HIzP-EnY.mjs';
import './position-WfCzcf5A.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import './VDivider-JUM-rhUg.mjs';
import './VDialog-JcAH9Fxa.mjs';
import './VCard-M6VezhhA.mjs';
import './VAvatar-Tkx6eOqd.mjs';
import './VOverlay-NMZIuW_y.mjs';
import './VTextField-Q67PbqhP.mjs';
import './VMenu-Xf_H0UU6.mjs';
import './index-CbyoTlMq.mjs';
import 'vue-advanced-cropper';
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

const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    payload: Object,
    update: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { error } = storeToRefs(useAppStore());
    const { createBusiness, updateBusiness } = useBusinessStore();
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
      props.update ? await updateBusiness(props.payload) : await createBusiness(props.payload);
      if (!error.value)
        setTimeout(() => {
          navigateTo({
            name: "admin-businesses"
          });
        }, 2e3);
    };
    useSeoMeta({
      title: "Business details"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreStepper = __nuxt_component_0$1;
      const _component_AdminBusinessCreateBasic = __nuxt_component_2$1;
      const _component_AdminBusinessCreateContact = __nuxt_component_3$1;
      const _component_AdminAddressInputs = __nuxt_component_4;
      const _component_CoreMidScreenLayout = __nuxt_component_0$2;
      const _component_AdminBusinessCreateOthers = __nuxt_component_6;
      const _component_AdminBusinessPreview = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AdminCoreStepper, {
        step: unref(tab),
        sections,
        action: true,
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
                    payload: __props.payload,
                    trigger: unref(triggers).stepOne,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminBusinessCreateBasic, {
                      payload: __props.payload,
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
                    payload: __props.payload,
                    trigger: unref(triggers).stepTwo,
                    update: __props.update,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminBusinessCreateContact, {
                      payload: __props.payload,
                      trigger: unref(triggers).stepTwo,
                      update: __props.update,
                      onStep: navigate
                    }, null, 8, ["payload", "trigger", "update"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VWindowItem, { value: 2 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AdminAddressInputs, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepThree,
                    onStep: navigate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminAddressInputs, {
                      payload: __props.payload,
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
                          payload: __props.payload,
                          trigger: unref(triggers).stepFour,
                          onStep: navigate
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mt-3" }, [
                            createVNode(_component_AdminBusinessCreateOthers, {
                              payload: __props.payload,
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
                            payload: __props.payload,
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
                        _push4(ssrRenderComponent(_component_AdminBusinessPreview, { payload: __props.payload }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AdminBusinessPreview, { payload: __props.payload }, null, 8, ["payload"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CoreMidScreenLayout, null, {
                      default: withCtx(() => [
                        createVNode(_component_AdminBusinessPreview, { payload: __props.payload }, null, 8, ["payload"])
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
                    payload: __props.payload,
                    trigger: unref(triggers).stepOne,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminBusinessCreateContact, {
                    payload: __props.payload,
                    trigger: unref(triggers).stepTwo,
                    update: __props.update,
                    onStep: navigate
                  }, null, 8, ["payload", "trigger", "update"])
                ]),
                _: 1
              }),
              createVNode(VWindowItem, { value: 2 }, {
                default: withCtx(() => [
                  createVNode(_component_AdminAddressInputs, {
                    payload: __props.payload,
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
                          payload: __props.payload,
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
                      createVNode(_component_AdminBusinessPreview, { payload: __props.payload }, null, 8, ["payload"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/business/create/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const id = route.params.id;
    const { loading, error, isAdmin } = storeToRefs(useAppStore());
    const { getBusiness, deleteBusiness } = useBusinessStore();
    const data = ref(([__temp, __restore] = withAsyncContext(() => getBusiness(id)), __temp = await __temp, __restore(), __temp));
    const deleteDialog = ref(false);
    const confirmDelete = async () => {
      await deleteBusiness(data.value.id);
      if (!error.value) {
        deleteDialog.value = false;
        setTimeout(() => {
          navigateTo({ name: "admin-businesses" });
        }, 3e3);
      }
    };
    const { getBusinessTypes } = useBusinessTypeStore();
    const businessTypes = ref([]);
    const getData = async () => {
      var _a;
      businessTypes.value = await getBusinessTypes(false);
      data.value.businessType = (_a = businessTypes.value.find(
        (b) => b.id == data.value.businessTypeId
      )) == null ? void 0 : _a.businessType;
    };
    watchEffect(() => {
      getData();
    });
    const view = ref(true);
    useSeoMeta({
      title: "Business Details"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCorePageDetailsHeader = __nuxt_component_0;
      const _component_AdminBusinessPreview = __nuxt_component_7;
      const _component_AdminBusinessCreate = __nuxt_component_2;
      const _component_AdminDeleteConfirmation = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AdminCorePageDetailsHeader, {
        view: "",
        route: "admin-businesses",
        onToggleView: ($event) => view.value = !unref(view),
        onDelete: ($event) => deleteDialog.value = true
      }, null, _parent));
      _push(ssrRenderComponent(VContainer, {
        class: "pa-0 mt-4",
        fluid: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-card pa-3 d-flex text-caption align-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(data).businessName + " : " + unref(data).code)}</span>`);
            _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
            _push2(`</div><div class=""${_scopeId}>`);
            if (unref(view)) {
              _push2(ssrRenderComponent(_component_AdminBusinessPreview, { payload: unref(data) }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_AdminBusinessCreate, {
                payload: unref(data),
                update: true
              }, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-card pa-3 d-flex text-caption align-center" }, [
                createVNode("span", null, toDisplayString(unref(data).businessName + " : " + unref(data).code), 1),
                createVNode(VSpacer)
              ]),
              createVNode("div", { class: "" }, [
                unref(view) ? (openBlock(), createBlock(_component_AdminBusinessPreview, {
                  key: 0,
                  payload: unref(data)
                }, null, 8, ["payload"])) : (openBlock(), createBlock(_component_AdminBusinessCreate, {
                  key: 1,
                  payload: unref(data),
                  update: true
                }, null, 8, ["payload"]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AdminDeleteConfirmation, {
        dialog: unref(deleteDialog),
        data: {
          name: "Business",
          itemTitle: unref(data).businessName,
          id: unref(data).id
        },
        onCancel: ($event) => deleteDialog.value = false,
        onDelete: confirmDelete
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/businesses/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-qGUw_crp.mjs.map
