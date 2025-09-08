import { _ as __nuxt_component_0 } from './search-Y5nxNpAP.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './details-btn-3atv59-I.mjs';
import { V as VDialog, _ as __nuxt_component_2$1 } from './VDialog-acnQ15uX.mjs';
import { _ as __nuxt_component_3 } from './delete-confirmation-8DYwAm4D.mjs';
import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { ref, withAsyncContext, computed, unref, withCtx, createVNode, toDisplayString, isRef, useSSRContext } from 'vue';
import { s as storeToRefs, h as useAppStore } from '../server.mjs';
import { u as useRules } from './useRules-Lv1tnQPg.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useRoleStore } from './roles-K2HnqOoq.mjs';
import { V as VSpacer } from './VSpacer-0DxA8eQn.mjs';
import { V as VBtn } from './VBtn-yNf12l4D.mjs';
import { V as VDivider } from './VDivider-Ce8J4Sp3.mjs';
import { V as VDataTable } from './VDataTable-D0frQ-KQ.mjs';
import { V as VCard } from './VCard-MEGoD2_3.mjs';
import { V as VForm } from './VForm-wrdi8IEW.mjs';
import { V as VTextField } from './VTextField-8SU2p1Ep.mjs';
import { V as VTextarea } from './VTextarea-W1zqEte6.mjs';
import './index-3E7yy1qS.mjs';
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
import './VAvatar-agmUyvkw.mjs';
import './VImg-_57rVikU.mjs';
import './resizeObserver-k8M9k6Xi.mjs';
import './VList-hhjvxiav.mjs';
import './index-d8gkbdU6.mjs';
import './ssrBoot-xH9VG8QW.mjs';
import './VCheckboxBtn-lCSbAwQG.mjs';
import './VSelectionControl-t8h0Xxrv.mjs';

const _sfc_main = {
  __name: "roles",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { filterDataPerField } = useHelpers(), roleStore = useRoleStore(), { loading, error } = storeToRefs(useAppStore()), { required, name } = useRules();
    const search = ref("");
    ref(true);
    const headers = [
      { title: "#", value: "index" },
      { title: "Name", value: "role" },
      { title: "Description", value: "description" },
      { title: "Actions", value: "actions" }
    ];
    const paymentRoleInit = {
      role: "",
      description: "",
      status: true
    }, roleForm = ref(null), payload = ref({}), dialog = ref(false), action = ref(null), handleOpen = (newAction, paymentRoleData) => {
      payload.value = paymentRoleData || { ...paymentRoleInit };
      dialog.value = newAction !== "delete";
      deleteDialog.value = newAction === "delete";
      action.value = newAction;
    }, handleClose = () => {
      dialog.value = false;
      payload.value = {};
    };
    const roleList = ([__temp, __restore] = withAsyncContext(() => roleStore.getRoles(true)), __temp = await __temp, __restore(), __temp), computedRoles = computed(() => {
      let sortedList = roleList.sort((a, b) => a.role.localeCompare(b.role));
      return filterDataPerField(sortedList, search.value, {});
    });
    const handleSubmit = async () => {
      var _a;
      let { valid } = await ((_a = roleForm.value) == null ? void 0 : _a.validate());
      if (!valid)
        return;
      if (action.value === "create") {
        await roleStore.createRole(payload.value);
      } else if (action.value === "update") {
        await roleStore.updateRole(payload.value);
      }
      if (!error.value)
        handleClose();
    };
    const deleteDialog = ref(false), confirmDelete = async () => {
      await roleStore.deleteRole(payload.value.id);
      if (!error.value)
        handleClose();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_admin_core_search = __nuxt_component_0;
      const _component_admin_btn_status = __nuxt_component_1;
      const _component_AdminBtnDetailsBtn = __nuxt_component_2;
      const _component_admin_core_dialog_header = __nuxt_component_2$1;
      const _component_AdminDeleteConfirmation = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="d-flex align-center ga-4 px-3"><div class="text-subtitle-2"><span>Roles</span></div>`);
      _push(ssrRenderComponent(VSpacer, null, null, _parent));
      _push(ssrRenderComponent(VBtn, {
        icon: "mdi-plus",
        size: "x-small",
        flat: "",
        color: "primary-dark",
        title: "Add business",
        onClick: ($event) => handleOpen("create")
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
        items: unref(computedRoles),
        density: "compact",
        loading: unref(loading)
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
            _push2(`<div class="d-flex align-center ga-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AdminBtnDetailsBtn, {
              onDetails: ($event) => handleOpen("update", item)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              color: "red",
              icon: "mdi-delete-outline",
              size: "x-small",
              variant: "text",
              class: "rounded-lg",
              onClick: ($event) => handleOpen("delete", item)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex align-center ga-2" }, [
                createVNode(_component_AdminBtnDetailsBtn, {
                  onDetails: ($event) => handleOpen("update", item)
                }, null, 8, ["onDetails"]),
                createVNode(VBtn, {
                  color: "red",
                  icon: "mdi-delete-outline",
                  size: "x-small",
                  variant: "text",
                  class: "rounded-lg",
                  onClick: ($event) => handleOpen("delete", item)
                }, null, 8, ["onClick"])
              ])
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
            _push2(ssrRenderComponent(VCard, { loading: unref(loading) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, {
                    ref_key: "roleForm",
                    ref: roleForm,
                    onSubmit: handleSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_admin_core_dialog_header, {
                          title: " Role",
                          onClose: handleClose
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, {
                                class: "text-caption mr-3",
                                size: "small",
                                color: "secondary",
                                flat: "",
                                onClick: handleSubmit,
                                loading: unref(loading)
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
                                  flat: "",
                                  onClick: handleSubmit,
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
                        }, _parent4, _scopeId3));
                        _push4(`<div class="pa-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VTextField, {
                          label: "Name",
                          modelValue: unref(payload).role,
                          "onUpdate:modelValue": ($event) => unref(payload).role = $event,
                          rules: unref(name)()
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VTextarea, {
                          label: "Description",
                          rows: "2",
                          modelValue: unref(payload).description,
                          "onUpdate:modelValue": ($event) => unref(payload).description = $event,
                          rules: unref(required)()
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_admin_core_dialog_header, {
                            title: " Role",
                            onClose: handleClose
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                class: "text-caption mr-3",
                                size: "small",
                                color: "secondary",
                                flat: "",
                                onClick: handleSubmit,
                                loading: unref(loading)
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, "Save")
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "pa-3" }, [
                            createVNode(VTextField, {
                              label: "Name",
                              modelValue: unref(payload).role,
                              "onUpdate:modelValue": ($event) => unref(payload).role = $event,
                              rules: unref(name)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(VTextarea, {
                              label: "Description",
                              rows: "2",
                              modelValue: unref(payload).description,
                              "onUpdate:modelValue": ($event) => unref(payload).description = $event,
                              rules: unref(required)()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VForm, {
                      ref_key: "roleForm",
                      ref: roleForm,
                      onSubmit: handleSubmit
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_admin_core_dialog_header, {
                          title: " Role",
                          onClose: handleClose
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              class: "text-caption mr-3",
                              size: "small",
                              color: "secondary",
                              flat: "",
                              onClick: handleSubmit,
                              loading: unref(loading)
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, "Save")
                              ]),
                              _: 1
                            }, 8, ["loading"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "pa-3" }, [
                          createVNode(VTextField, {
                            label: "Name",
                            modelValue: unref(payload).role,
                            "onUpdate:modelValue": ($event) => unref(payload).role = $event,
                            rules: unref(name)()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(VTextarea, {
                            label: "Description",
                            rows: "2",
                            modelValue: unref(payload).description,
                            "onUpdate:modelValue": ($event) => unref(payload).description = $event,
                            rules: unref(required)()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                        ])
                      ]),
                      _: 1
                    }, 512)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { loading: unref(loading) }, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    ref_key: "roleForm",
                    ref: roleForm,
                    onSubmit: handleSubmit
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_admin_core_dialog_header, {
                        title: " Role",
                        onClose: handleClose
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            class: "text-caption mr-3",
                            size: "small",
                            color: "secondary",
                            flat: "",
                            onClick: handleSubmit,
                            loading: unref(loading)
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Save")
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "pa-3" }, [
                        createVNode(VTextField, {
                          label: "Name",
                          modelValue: unref(payload).role,
                          "onUpdate:modelValue": ($event) => unref(payload).role = $event,
                          rules: unref(name)()
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode(VTextarea, {
                          label: "Description",
                          rows: "2",
                          modelValue: unref(payload).description,
                          "onUpdate:modelValue": ($event) => unref(payload).description = $event,
                          rules: unref(required)()
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                      ])
                    ]),
                    _: 1
                  }, 512)
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AdminDeleteConfirmation, {
        dialog: unref(deleteDialog),
        data: {
          name: "Role",
          itemTitle: unref(payload).role,
          id: unref(payload).id
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/config/roles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=roles-4d7oDkUa.mjs.map
