import { _ as __nuxt_component_0 } from './search-Y5nxNpAP.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './details-btn-3atv59-I.mjs';
import { V as VDialog, _ as __nuxt_component_2$1 } from './VDialog-acnQ15uX.mjs';
import { _ as __nuxt_component_0$1 } from './index-RXRlxYy9.mjs';
import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { ref, computed, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { V as VSpacer } from './VSpacer-0DxA8eQn.mjs';
import { V as VBtn, a as VBtnToggle } from './VBtn-yNf12l4D.mjs';
import { V as VDivider } from './VDivider-Ce8J4Sp3.mjs';
import { V as VDataTable } from './VDataTable-D0frQ-KQ.mjs';
import { V as VCard } from './VCard-MEGoD2_3.mjs';
import { V as VForm } from './VForm-wrdi8IEW.mjs';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
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
import 'vue-advanced-cropper';
import './VImg-_57rVikU.mjs';
import './VAvatar-agmUyvkw.mjs';
import 'date-fns';
import 'date-fns/locale';
import './resizeObserver-k8M9k6Xi.mjs';
import './VList-hhjvxiav.mjs';
import './index-d8gkbdU6.mjs';
import './ssrBoot-xH9VG8QW.mjs';
import './VCheckboxBtn-lCSbAwQG.mjs';
import './VSelectionControl-t8h0Xxrv.mjs';

const _sfc_main = {
  __name: "markets",
  __ssrInlineRender: true,
  setup(__props) {
    const { filterDataPerField } = useHelpers();
    const search = ref("");
    const statuses = [
      { name: "Active", value: true },
      { name: "Inactive", value: false }
    ], selectedStatus = ref(true);
    const headers = [
      { title: "#", value: "index" },
      { title: "Name", value: "name" },
      { title: "Location", value: "location" },
      { title: "Status", value: "status" },
      { title: "Actions", value: "actions", sortable: false }
    ];
    const marketFields = {
      name: "",
      banner: null,
      lat: "-1.28498913184757",
      long: "36.83612188891618",
      description: ""
    }, market = ref({}), dialog = ref(false), action = ref(null), handleOpen = (newAction, marketData) => {
      action.value = newAction;
      market.value = marketData || { ...marketFields };
      dialog.value = true;
    }, handleClose = () => {
      dialog.value = false;
      action.value = null;
      market.value = {};
      showMap.value = false;
    };
    const setImage = (val) => {
      market.value.banner = val;
    };
    const showMap = ref(false);
    const marketList = [
      {
        id: 1,
        name: "Adams",
        lat: "-1.28498913184757",
        long: "36.83612188891618",
        description: "A vibrant market located in the heart of the city.",
        banner: "",
        status: true
      },
      {
        id: 2,
        name: "Eastleigh",
        lat: "-1.28333",
        long: "36.83333",
        description: "A bustling market known for its textiles and clothing.",
        banner: "",
        status: true
      },
      {
        id: 3,
        name: "Westlands",
        lat: "-1.2921",
        long: "36.8219",
        description: "A trendy market with a variety of shops and eateries.",
        banner: "",
        status: true
      },
      {
        id: 4,
        name: "Nairobi CBD",
        lat: "-1.286389",
        long: "36.817223",
        description: "The central business district of Nairobi.",
        banner: "",
        status: false
      }
    ], computedMarkets = computed(() => {
      return filterDataPerField(marketList, search.value, {
        status: selectedStatus.value
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_admin_core_search = __nuxt_component_0;
      const _component_admin_btn_status = __nuxt_component_1;
      const _component_AdminBtnDetailsBtn = __nuxt_component_2;
      const _component_admin_core_dialog_header = __nuxt_component_2$1;
      const _component_AdminCoreImage = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="d-flex align-center ga-4 px-3"><div class="text-subtitle-2"><span>Markets</span></div>`);
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
      _push(ssrRenderComponent(VBtnToggle, {
        mandatory: "",
        color: "black",
        divided: "",
        border: "",
        density: "compact",
        class: "rounded-lg",
        modelValue: unref(selectedStatus),
        "onUpdate:modelValue": ($event) => isRef(selectedStatus) ? selectedStatus.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(statuses, ({ name, value }, i) => {
              _push2(ssrRenderComponent(VBtn, {
                variant: "text",
                class: "text-none text-caption",
                value,
                key: i
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(name)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(statuses, ({ name, value }, i) => {
                return createVNode(VBtn, {
                  variant: "text",
                  class: "text-none text-caption",
                  value,
                  key: i
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(name), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(VDataTable, {
        class: "mt-3",
        headers,
        items: unref(computedMarkets),
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
        "item.location": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(item.lat)}, ${ssrInterpolate(item.long)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(item.lat) + ", " + toDisplayString(item.long), 1)
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
              onDetails: ($event) => handleOpen("details", item)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AdminBtnDetailsBtn, {
                onDetails: ($event) => handleOpen("details", item)
              }, null, 8, ["onDetails"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
        fullscreen: unref(showMap),
        width: unref(showMap) ? "100%" : 500
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
                          title: "Market Details",
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
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, { justify: "center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: unref(showMap) ? 5 : 12
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="pa-3"${_scopeId6}><div class="d-flex align-center text-caption"${_scopeId6}><div class="mx-auto text-center"${_scopeId6}><span${_scopeId6}>Market Banner</span>`);
                                          _push7(ssrRenderComponent(_component_AdminCoreImage, {
                                            onSetImage: setImage,
                                            image: unref(market).banner,
                                            profile: false,
                                            class: "mt-1"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div></div>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "Name",
                                            class: "mt-2",
                                            modelValue: unref(market).name,
                                            "onUpdate:modelValue": ($event) => unref(market).name = $event
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<div class="d-flex flex-column flex-md-row ga-0 ga-md-4"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "Longitude",
                                            modelValue: unref(market).long,
                                            "onUpdate:modelValue": ($event) => unref(market).long = $event
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VTextField, {
                                            label: "Latitude",
                                            modelValue: unref(market).lat,
                                            "onUpdate:modelValue": ($event) => unref(market).lat = $event
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VBtn, {
                                            variant: "text",
                                            icon: unref(showMap) ? "mdi-eye-off" : "mdi-eye",
                                            size: "x-small",
                                            onClick: ($event) => showMap.value = !unref(showMap)
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                          _push7(ssrRenderComponent(VTextarea, {
                                            label: "Description",
                                            rows: "2",
                                            modelValue: unref(market).description,
                                            "onUpdate:modelValue": ($event) => unref(market).description = $event
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "pa-3" }, [
                                              createVNode("div", { class: "d-flex align-center text-caption" }, [
                                                createVNode("div", { class: "mx-auto text-center" }, [
                                                  createVNode("span", null, "Market Banner"),
                                                  createVNode(_component_AdminCoreImage, {
                                                    onSetImage: setImage,
                                                    image: unref(market).banner,
                                                    profile: false,
                                                    class: "mt-1"
                                                  }, null, 8, ["image"])
                                                ])
                                              ]),
                                              createVNode(VTextField, {
                                                label: "Name",
                                                class: "mt-2",
                                                modelValue: unref(market).name,
                                                "onUpdate:modelValue": ($event) => unref(market).name = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode("div", { class: "d-flex flex-column flex-md-row ga-0 ga-md-4" }, [
                                                createVNode(VTextField, {
                                                  label: "Longitude",
                                                  modelValue: unref(market).long,
                                                  "onUpdate:modelValue": ($event) => unref(market).long = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VTextField, {
                                                  label: "Latitude",
                                                  modelValue: unref(market).lat,
                                                  "onUpdate:modelValue": ($event) => unref(market).lat = $event
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                                createVNode(VBtn, {
                                                  variant: "text",
                                                  icon: unref(showMap) ? "mdi-eye-off" : "mdi-eye",
                                                  size: "x-small",
                                                  onClick: ($event) => showMap.value = !unref(showMap)
                                                }, null, 8, ["icon", "onClick"])
                                              ]),
                                              createVNode(VTextarea, {
                                                label: "Description",
                                                rows: "2",
                                                modelValue: unref(market).description,
                                                "onUpdate:modelValue": ($event) => unref(market).description = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    if (unref(showMap)) {
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "12",
                                        sm: "7",
                                        style: { "border-left": "1px solid #ddd" },
                                        class: "pa-0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske" width="100%" height="100%" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"${_scopeId6}></iframe>`);
                                          } else {
                                            return [
                                              createVNode("iframe", {
                                                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske",
                                                width: "100%",
                                                height: "100%",
                                                style: { "border": "0" },
                                                allowfullscreen: "",
                                                loading: "lazy",
                                                referrerpolicy: "no-referrer-when-downgrade"
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: unref(showMap) ? 5 : 12
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "pa-3" }, [
                                            createVNode("div", { class: "d-flex align-center text-caption" }, [
                                              createVNode("div", { class: "mx-auto text-center" }, [
                                                createVNode("span", null, "Market Banner"),
                                                createVNode(_component_AdminCoreImage, {
                                                  onSetImage: setImage,
                                                  image: unref(market).banner,
                                                  profile: false,
                                                  class: "mt-1"
                                                }, null, 8, ["image"])
                                              ])
                                            ]),
                                            createVNode(VTextField, {
                                              label: "Name",
                                              class: "mt-2",
                                              modelValue: unref(market).name,
                                              "onUpdate:modelValue": ($event) => unref(market).name = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", { class: "d-flex flex-column flex-md-row ga-0 ga-md-4" }, [
                                              createVNode(VTextField, {
                                                label: "Longitude",
                                                modelValue: unref(market).long,
                                                "onUpdate:modelValue": ($event) => unref(market).long = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VTextField, {
                                                label: "Latitude",
                                                modelValue: unref(market).lat,
                                                "onUpdate:modelValue": ($event) => unref(market).lat = $event
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(VBtn, {
                                                variant: "text",
                                                icon: unref(showMap) ? "mdi-eye-off" : "mdi-eye",
                                                size: "x-small",
                                                onClick: ($event) => showMap.value = !unref(showMap)
                                              }, null, 8, ["icon", "onClick"])
                                            ]),
                                            createVNode(VTextarea, {
                                              label: "Description",
                                              rows: "2",
                                              modelValue: unref(market).description,
                                              "onUpdate:modelValue": ($event) => unref(market).description = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["sm"]),
                                      unref(showMap) ? (openBlock(), createBlock(VCol, {
                                        key: 0,
                                        cols: "12",
                                        sm: "7",
                                        style: { "border-left": "1px solid #ddd" },
                                        class: "pa-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("iframe", {
                                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske",
                                            width: "100%",
                                            height: "100%",
                                            style: { "border": "0" },
                                            allowfullscreen: "",
                                            loading: "lazy",
                                            referrerpolicy: "no-referrer-when-downgrade"
                                          })
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, { justify: "center" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: unref(showMap) ? 5 : 12
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "pa-3" }, [
                                          createVNode("div", { class: "d-flex align-center text-caption" }, [
                                            createVNode("div", { class: "mx-auto text-center" }, [
                                              createVNode("span", null, "Market Banner"),
                                              createVNode(_component_AdminCoreImage, {
                                                onSetImage: setImage,
                                                image: unref(market).banner,
                                                profile: false,
                                                class: "mt-1"
                                              }, null, 8, ["image"])
                                            ])
                                          ]),
                                          createVNode(VTextField, {
                                            label: "Name",
                                            class: "mt-2",
                                            modelValue: unref(market).name,
                                            "onUpdate:modelValue": ($event) => unref(market).name = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", { class: "d-flex flex-column flex-md-row ga-0 ga-md-4" }, [
                                            createVNode(VTextField, {
                                              label: "Longitude",
                                              modelValue: unref(market).long,
                                              "onUpdate:modelValue": ($event) => unref(market).long = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VTextField, {
                                              label: "Latitude",
                                              modelValue: unref(market).lat,
                                              "onUpdate:modelValue": ($event) => unref(market).lat = $event
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(VBtn, {
                                              variant: "text",
                                              icon: unref(showMap) ? "mdi-eye-off" : "mdi-eye",
                                              size: "x-small",
                                              onClick: ($event) => showMap.value = !unref(showMap)
                                            }, null, 8, ["icon", "onClick"])
                                          ]),
                                          createVNode(VTextarea, {
                                            label: "Description",
                                            rows: "2",
                                            modelValue: unref(market).description,
                                            "onUpdate:modelValue": ($event) => unref(market).description = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      _: 1
                                    }, 8, ["sm"]),
                                    unref(showMap) ? (openBlock(), createBlock(VCol, {
                                      key: 0,
                                      cols: "12",
                                      sm: "7",
                                      style: { "border-left": "1px solid #ddd" },
                                      class: "pa-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("iframe", {
                                          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske",
                                          width: "100%",
                                          height: "100%",
                                          style: { "border": "0" },
                                          allowfullscreen: "",
                                          loading: "lazy",
                                          referrerpolicy: "no-referrer-when-downgrade"
                                        })
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
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
                          createVNode(_component_admin_core_dialog_header, {
                            title: "Market Details",
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
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, { justify: "center" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: unref(showMap) ? 5 : 12
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "pa-3" }, [
                                        createVNode("div", { class: "d-flex align-center text-caption" }, [
                                          createVNode("div", { class: "mx-auto text-center" }, [
                                            createVNode("span", null, "Market Banner"),
                                            createVNode(_component_AdminCoreImage, {
                                              onSetImage: setImage,
                                              image: unref(market).banner,
                                              profile: false,
                                              class: "mt-1"
                                            }, null, 8, ["image"])
                                          ])
                                        ]),
                                        createVNode(VTextField, {
                                          label: "Name",
                                          class: "mt-2",
                                          modelValue: unref(market).name,
                                          "onUpdate:modelValue": ($event) => unref(market).name = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "d-flex flex-column flex-md-row ga-0 ga-md-4" }, [
                                          createVNode(VTextField, {
                                            label: "Longitude",
                                            modelValue: unref(market).long,
                                            "onUpdate:modelValue": ($event) => unref(market).long = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VTextField, {
                                            label: "Latitude",
                                            modelValue: unref(market).lat,
                                            "onUpdate:modelValue": ($event) => unref(market).lat = $event
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(VBtn, {
                                            variant: "text",
                                            icon: unref(showMap) ? "mdi-eye-off" : "mdi-eye",
                                            size: "x-small",
                                            onClick: ($event) => showMap.value = !unref(showMap)
                                          }, null, 8, ["icon", "onClick"])
                                        ]),
                                        createVNode(VTextarea, {
                                          label: "Description",
                                          rows: "2",
                                          modelValue: unref(market).description,
                                          "onUpdate:modelValue": ($event) => unref(market).description = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["sm"]),
                                  unref(showMap) ? (openBlock(), createBlock(VCol, {
                                    key: 0,
                                    cols: "12",
                                    sm: "7",
                                    style: { "border-left": "1px solid #ddd" },
                                    class: "pa-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("iframe", {
                                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske",
                                        width: "100%",
                                        height: "100%",
                                        style: { "border": "0" },
                                        allowfullscreen: "",
                                        loading: "lazy",
                                        referrerpolicy: "no-referrer-when-downgrade"
                                      })
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
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
                    createVNode(VForm, {
                      ref: "marketForm",
                      onSubmit: () => {
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_admin_core_dialog_header, {
                          title: "Market Details",
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
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VRow, { justify: "center" }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: unref(showMap) ? 5 : 12
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "pa-3" }, [
                                      createVNode("div", { class: "d-flex align-center text-caption" }, [
                                        createVNode("div", { class: "mx-auto text-center" }, [
                                          createVNode("span", null, "Market Banner"),
                                          createVNode(_component_AdminCoreImage, {
                                            onSetImage: setImage,
                                            image: unref(market).banner,
                                            profile: false,
                                            class: "mt-1"
                                          }, null, 8, ["image"])
                                        ])
                                      ]),
                                      createVNode(VTextField, {
                                        label: "Name",
                                        class: "mt-2",
                                        modelValue: unref(market).name,
                                        "onUpdate:modelValue": ($event) => unref(market).name = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "d-flex flex-column flex-md-row ga-0 ga-md-4" }, [
                                        createVNode(VTextField, {
                                          label: "Longitude",
                                          modelValue: unref(market).long,
                                          "onUpdate:modelValue": ($event) => unref(market).long = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VTextField, {
                                          label: "Latitude",
                                          modelValue: unref(market).lat,
                                          "onUpdate:modelValue": ($event) => unref(market).lat = $event
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(VBtn, {
                                          variant: "text",
                                          icon: unref(showMap) ? "mdi-eye-off" : "mdi-eye",
                                          size: "x-small",
                                          onClick: ($event) => showMap.value = !unref(showMap)
                                        }, null, 8, ["icon", "onClick"])
                                      ]),
                                      createVNode(VTextarea, {
                                        label: "Description",
                                        rows: "2",
                                        modelValue: unref(market).description,
                                        "onUpdate:modelValue": ($event) => unref(market).description = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["sm"]),
                                unref(showMap) ? (openBlock(), createBlock(VCol, {
                                  key: 0,
                                  cols: "12",
                                  sm: "7",
                                  style: { "border-left": "1px solid #ddd" },
                                  class: "pa-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("iframe", {
                                      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske",
                                      width: "100%",
                                      height: "100%",
                                      style: { "border": "0" },
                                      allowfullscreen: "",
                                      loading: "lazy",
                                      referrerpolicy: "no-referrer-when-downgrade"
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
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
                        title: "Market Details",
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
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: unref(showMap) ? 5 : 12
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "pa-3" }, [
                                    createVNode("div", { class: "d-flex align-center text-caption" }, [
                                      createVNode("div", { class: "mx-auto text-center" }, [
                                        createVNode("span", null, "Market Banner"),
                                        createVNode(_component_AdminCoreImage, {
                                          onSetImage: setImage,
                                          image: unref(market).banner,
                                          profile: false,
                                          class: "mt-1"
                                        }, null, 8, ["image"])
                                      ])
                                    ]),
                                    createVNode(VTextField, {
                                      label: "Name",
                                      class: "mt-2",
                                      modelValue: unref(market).name,
                                      "onUpdate:modelValue": ($event) => unref(market).name = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "d-flex flex-column flex-md-row ga-0 ga-md-4" }, [
                                      createVNode(VTextField, {
                                        label: "Longitude",
                                        modelValue: unref(market).long,
                                        "onUpdate:modelValue": ($event) => unref(market).long = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VTextField, {
                                        label: "Latitude",
                                        modelValue: unref(market).lat,
                                        "onUpdate:modelValue": ($event) => unref(market).lat = $event
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(VBtn, {
                                        variant: "text",
                                        icon: unref(showMap) ? "mdi-eye-off" : "mdi-eye",
                                        size: "x-small",
                                        onClick: ($event) => showMap.value = !unref(showMap)
                                      }, null, 8, ["icon", "onClick"])
                                    ]),
                                    createVNode(VTextarea, {
                                      label: "Description",
                                      rows: "2",
                                      modelValue: unref(market).description,
                                      "onUpdate:modelValue": ($event) => unref(market).description = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["sm"]),
                              unref(showMap) ? (openBlock(), createBlock(VCol, {
                                key: 0,
                                cols: "12",
                                sm: "7",
                                style: { "border-left": "1px solid #ddd" },
                                class: "pa-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("iframe", {
                                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske",
                                    width: "100%",
                                    height: "100%",
                                    style: { "border": "0" },
                                    allowfullscreen: "",
                                    loading: "lazy",
                                    referrerpolicy: "no-referrer-when-downgrade"
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/config/markets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=markets-Gtl719iY.mjs.map
