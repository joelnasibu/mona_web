import { _ as __nuxt_component_0 } from './search-Y5nxNpAP.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './details-btn-3atv59-I.mjs';
import { V as VDialog, _ as __nuxt_component_2$1 } from './VDialog-acnQ15uX.mjs';
import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { ref, computed, unref, withCtx, createVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { V as VSpacer } from './VSpacer-0DxA8eQn.mjs';
import { V as VBtn } from './VBtn-yNf12l4D.mjs';
import { V as VDivider } from './VDivider-Ce8J4Sp3.mjs';
import { V as VDataTable } from './VDataTable-D0frQ-KQ.mjs';
import { V as VCard } from './VCard-MEGoD2_3.mjs';
import { V as VForm } from './VForm-wrdi8IEW.mjs';
import { V as VTextField } from './VTextField-8SU2p1Ep.mjs';
import { V as VTextarea } from './VTextarea-W1zqEte6.mjs';
import './index-3E7yy1qS.mjs';
import '../server.mjs';
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
import './color-rZjm0Y7u.mjs';
import './tag-pIHjuosL.mjs';
import './VOverlay-bpCAw6Z_.mjs';
import './position-AkaJaFJy.mjs';
import './rounded-jA9LRAgf.mjs';
import './delay-5iXTA9KV.mjs';
import './lazy-8QocgoLY.mjs';
import './index-q-0zZOOG.mjs';
import './VMenu-bZwLMGPK.mjs';
import 'date-fns';
import 'date-fns/locale';
import './VAvatar-agmUyvkw.mjs';
import './VImg-_57rVikU.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import './VList-hhjvxiav.mjs';
import './index-d8gkbdU6.mjs';
import './ssrBoot-xH9VG8QW.mjs';
import './VCheckboxBtn-lCSbAwQG.mjs';
import './VSelectionControl-t8h0Xxrv.mjs';

const _sfc_main = {
  __name: "product-grades",
  __ssrInlineRender: true,
  setup(__props) {
    const { filterDataPerField } = useHelpers();
    const search = ref("");
    ref(true);
    const headers = [
      { title: "#", value: "index" },
      { title: "Name", value: "name" },
      { title: "Description", value: "description" },
      { title: "Actions", value: "actions" }
    ];
    const paymentGradeInit = {
      name: "",
      description: "",
      status: true
    }, payload = ref({}), dialog = ref(false), handleOpen = (paymentGradeData) => {
      payload.value = paymentGradeData || { ...paymentGradeInit };
      dialog.value = true;
    }, handleClose = () => {
      dialog.value = false;
      action.value = null;
      payload.value = {};
    };
    const gradeList = [
      {
        id: 1,
        name: "Grade 1",
        description: "Description for Grade 1"
      },
      {
        id: 2,
        name: "Grade 2",
        description: "Description for Grade 2"
      },
      {
        id: 3,
        name: "Grade 3",
        description: "Description for Grade 3"
      },
      {
        id: 4,
        name: "Grade 4",
        description: "Description for Grade 4"
      },
      {
        id: 5,
        name: "Grade 5",
        description: "Description for Grade 5"
      }
    ], computedGrades = computed(() => {
      return filterDataPerField(gradeList, search.value, {});
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_admin_core_search = __nuxt_component_0;
      const _component_admin_btn_status = __nuxt_component_1;
      const _component_AdminBtnDetailsBtn = __nuxt_component_2;
      const _component_admin_core_dialog_header = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="d-flex align-center ga-4 px-3"><div class="text-subtitle-2"><span>Product Grades</span></div>`);
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        icon: "mdi-plus",
        size: "x-small",
        flat: "",
        color: "primary-dark",
        title: "Add business",
        onClick: ($event) => handleOpen()
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent));
      _push(`<div class="d-flex align-center px-3">`);
      _push(ssrRenderComponent(_component_admin_core_search, {
        search: unref(search),
        onSearch: ($event) => search.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      _push(`</div><div class="mt-3">`);
      _push(ssrRenderComponent(VDataTable, {
        headers,
        items: unref(computedGrades),
        density: "compact"
      }, {
        "item.index": withCtx(({ index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(index + 1)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(index + 1), 1)
            ];
          }
        }),
        "item.status": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_admin_btn_status, {
              status: item.status,
              titles: { isNot: "Inactive", isAlready: "Active" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_admin_btn_status, {
                status: item.status,
                titles: { isNot: "Inactive", isAlready: "Active" }
              }, null, 8, ["status"])
            ];
          }
        }),
        "item.actions": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AdminBtnDetailsBtn, {
              onDetails: ($event) => handleOpen(item)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AdminBtnDetailsBtn, {
                onDetails: ($event) => handleOpen(item)
              }, null, 8, ["onDetails"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
        width: "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, {
                    ref: "marketForm",
                    onSubmit: () => {
                    }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_admin_core_dialog_header, {
                          title: "Product Grade",
                          onClose: handleClose
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                class: "text-caption mr-3",
                                size: "small",
                                color: "secondary",
                                flat: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span${_scopeId5}>Save</span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, "Save")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, {
                                  class: "text-caption mr-3",
                                  size: "small",
                                  color: "secondary",
                                  flat: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, "Save")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="pa-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VTextField, {
                          label: "Name",
                          modelValue: unref(payload).name,
                          "onUpdate:modelValue": ($event) => unref(payload).name = $event
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextarea, {
                          label: "Description",
                          rows: "2",
                          modelValue: unref(payload).description,
                          "onUpdate:modelValue": ($event) => unref(payload).description = $event
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_admin_core_dialog_header, {
                            title: "Product Grade",
                            onClose: handleClose
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                class: "text-caption mr-3",
                                size: "small",
                                color: "secondary",
                                flat: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Save")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "pa-3" }, [
                            createVNode(VTextField, {
                              label: "Name",
                              modelValue: unref(payload).name,
                              "onUpdate:modelValue": ($event) => unref(payload).name = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(VTextarea, {
                              label: "Description",
                              rows: "2",
                              modelValue: unref(payload).description,
                              "onUpdate:modelValue": ($event) => unref(payload).description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VForm, {
                      ref: "marketForm",
                      onSubmit: () => {
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_admin_core_dialog_header, {
                          title: "Product Grade",
                          onClose: handleClose
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              class: "text-caption mr-3",
                              size: "small",
                              color: "secondary",
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Save")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "pa-3" }, [
                          createVNode(VTextField, {
                            label: "Name",
                            modelValue: unref(payload).name,
                            "onUpdate:modelValue": ($event) => unref(payload).name = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(VTextarea, {
                            label: "Description",
                            rows: "2",
                            modelValue: unref(payload).description,
                            "onUpdate:modelValue": ($event) => unref(payload).description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    ref: "marketForm",
                    onSubmit: () => {
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_admin_core_dialog_header, {
                        title: "Product Grade",
                        onClose: handleClose
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            class: "text-caption mr-3",
                            size: "small",
                            color: "secondary",
                            flat: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Save")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "pa-3" }, [
                        createVNode(VTextField, {
                          label: "Name",
                          modelValue: unref(payload).name,
                          "onUpdate:modelValue": ($event) => unref(payload).name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(VTextarea, {
                          label: "Description",
                          rows: "2",
                          modelValue: unref(payload).description,
                          "onUpdate:modelValue": ($event) => unref(payload).description = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/config/product-grades.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=product-grades-BatpIV5h.mjs.map
