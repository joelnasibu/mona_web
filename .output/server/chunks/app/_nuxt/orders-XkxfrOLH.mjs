import { _ as __nuxt_component_1 } from './select-sjn27vix.mjs';
import __nuxt_component_1$1 from './Icon-RLEWMyEr.mjs';
import { V as VDialog, _ as __nuxt_component_2 } from './VDialog-acnQ15uX.mjs';
import { _ as __nuxt_component_0 } from './prices-TYGcr06j.mjs';
import { _ as __nuxt_component_4 } from './editor-JUAoNM3K.mjs';
import { u as useHelpers, b as useHttp } from './useHelpers-9BVYUhTt.mjs';
import { k as defineStore, p as propsFactory, I as IconValue, o as makeThemeProps, g as genericComponent, E as useLocale, q as provideTheme, w as useProxiedModel, a3 as clamp, V as createRange, v as getUid, m as useDevice, s as storeToRefs, h as useAppStore } from '../server.mjs';
import { computed, shallowRef, ref, watchEffect, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext, mergeProps, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useOrderStore } from './order-DPjXLXeY.mjs';
import { a as VExpandTransition } from './index-d8gkbdU6.mjs';
import { a as VBtnToggle, V as VBtn, b as VProgressCircular } from './VBtn-yNf12l4D.mjs';
import { V as VCard, a as VCardText } from './VCard-MEGoD2_3.mjs';
import { V as VAvatar } from './VAvatar-agmUyvkw.mjs';
import { V as VSpacer } from './VSpacer-0DxA8eQn.mjs';
import { m as makeDensityProps, c as makeSizeProps, V as VIcon } from './index-3E7yy1qS.mjs';
import { V as VContainer } from './VContainer-jF5qmVp8.mjs';
import { V as VRow, a as VCol } from './VRow-lyrtfIhE.mjs';
import { V as VDataTable } from './VDataTable-D0frQ-KQ.mjs';
import { V as VImg } from './VImg-_57rVikU.mjs';
import { V as VDivider } from './VDivider-Ce8J4Sp3.mjs';
import { m as makeComponentProps, a as makeTagProps, u as useRender } from './tag-pIHjuosL.mjs';
import './VMenu-bZwLMGPK.mjs';
import './VOverlay-bpCAw6Z_.mjs';
import './VTextField-8SU2p1Ep.mjs';
import './index-q-0zZOOG.mjs';
import './color-rZjm0Y7u.mjs';
import './position-AkaJaFJy.mjs';
import './rounded-jA9LRAgf.mjs';
import './delay-5iXTA9KV.mjs';
import './lazy-8QocgoLY.mjs';
import './VList-hhjvxiav.mjs';
import './ssrBoot-xH9VG8QW.mjs';
import './VCheckbox-Omi4Z8sK.mjs';
import './VCheckboxBtn-lCSbAwQG.mjs';
import './VSelectionControl-t8h0Xxrv.mjs';
import './index-1uTyX8RQ.mjs';
import '../../nitro/firebase-gen-2.mjs';
import 'firebase-functions/v2/https';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@algolia/cache-in-memory';
import 'pinia-plugin-persistedstate';
import 'date-fns';
import 'date-fns/locale';
import './resizeObserver-k8M9k6Xi.mjs';

const baseURL = `/reviews`;
const useReviewStore = defineStore("reviews", {
  state: () => ({
    //
  }),
  getters: {
    app() {
      const app = useAppStore();
      return app;
    },
    helpers() {
      return useHelpers();
    },
    http() {
      return useHttp();
    }
  },
  actions: {
    async getReviews(enableLoader, payload) {
      this.app.setError(false);
      this.app.load(enableLoader != null ? enableLoader : true);
      try {
        const {
          response
        } = await this.http(
          `${baseURL}/${payload.type}/${payload.id}`,
          {
            method: "GET"
          }
        );
        this.app.load(false);
        return Promise.resolve(response);
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    },
    async reviewProduct(body) {
      var _a;
      this.app.setError(false);
      this.app.load(true);
      try {
        const res = await this.http(`${baseURL}`, {
          method: "POST",
          body
        });
        this.app.load(false);
        this.app.toggleSnackbar({
          status: true,
          type: "success",
          message: (_a = res.message) != null ? _a : "Product reviewed"
        });
      } catch (e) {
        this.helpers.errorHandler(e);
      }
    }
  }
});
const makeVRatingProps = propsFactory({
  name: String,
  itemAriaLabel: {
    type: String,
    default: "$vuetify.rating.ariaLabel.item"
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: IconValue,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: IconValue,
    default: "$ratingFull"
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  itemLabels: Array,
  itemLabelPosition: {
    type: String,
    default: "top",
    validator: (v) => ["top", "bottom"].includes(v)
  },
  ripple: Boolean,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VRating");
const VRating = genericComponent()({
  name: "VRating",
  props: makeVRatingProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      themeClasses
    } = provideTheme(props);
    const rating = useProxiedModel(props, "modelValue");
    const normalizedValue = computed(() => clamp(parseFloat(rating.value), 0, +props.length));
    const range = computed(() => createRange(Number(props.length), 1));
    const increments = computed(() => range.value.flatMap((v) => props.halfIncrements ? [v - 0.5, v] : [v]));
    const hoverIndex = shallowRef(-1);
    const itemState = computed(() => increments.value.map((value) => {
      var _a;
      const isHovering = props.hover && hoverIndex.value > -1;
      const isFilled = normalizedValue.value >= value;
      const isHovered = hoverIndex.value >= value;
      const isFullIcon = isHovering ? isHovered : isFilled;
      const icon = isFullIcon ? props.fullIcon : props.emptyIcon;
      const activeColor = (_a = props.activeColor) != null ? _a : props.color;
      const color = isFilled || isHovered ? activeColor : props.color;
      return {
        isFilled,
        isHovered,
        icon,
        color
      };
    }));
    const eventState = computed(() => [0, ...increments.value].map((value) => {
      function onMouseenter() {
        hoverIndex.value = value;
      }
      function onMouseleave() {
        hoverIndex.value = -1;
      }
      function onClick() {
        if (props.disabled || props.readonly)
          return;
        rating.value = normalizedValue.value === value && props.clearable ? 0 : value;
      }
      return {
        onMouseenter: props.hover ? onMouseenter : void 0,
        onMouseleave: props.hover ? onMouseleave : void 0,
        onClick
      };
    }));
    const name = computed(() => {
      var _a;
      return (_a = props.name) != null ? _a : `v-rating-${getUid()}`;
    });
    function VRatingItem(_ref2) {
      var _a, _b;
      let {
        value,
        index,
        showStar = true
      } = _ref2;
      const {
        onMouseenter,
        onMouseleave,
        onClick
      } = eventState.value[index + 1];
      const id = `${name.value}-${String(value).replace(".", "-")}`;
      const btnProps = {
        color: (_a = itemState.value[index]) == null ? void 0 : _a.color,
        density: props.density,
        disabled: props.disabled,
        icon: (_b = itemState.value[index]) == null ? void 0 : _b.icon,
        ripple: props.ripple,
        size: props.size,
        variant: "plain"
      };
      return createVNode(Fragment, null, [createVNode("label", {
        "for": id,
        "class": {
          "v-rating__item--half": props.halfIncrements && value % 1 > 0,
          "v-rating__item--full": props.halfIncrements && value % 1 === 0
        },
        "onMouseenter": onMouseenter,
        "onMouseleave": onMouseleave,
        "onClick": onClick
      }, [createVNode("span", {
        "class": "v-rating__hidden"
      }, [t(props.itemAriaLabel, value, props.length)]), !showStar ? void 0 : slots.item ? slots.item({
        ...itemState.value[index],
        props: btnProps,
        value,
        index,
        rating: normalizedValue.value
      }) : createVNode(VBtn, mergeProps({
        "aria-label": t(props.itemAriaLabel, value, props.length)
      }, btnProps), null)]), createVNode("input", {
        "class": "v-rating__hidden",
        "name": name.value,
        "id": id,
        "type": "radio",
        "value": value,
        "checked": normalizedValue.value === value,
        "tabindex": -1,
        "readonly": props.readonly,
        "disabled": props.disabled
      }, null)]);
    }
    function createLabel(labelProps) {
      if (slots["item-label"])
        return slots["item-label"](labelProps);
      if (labelProps.label)
        return createVNode("span", null, [labelProps.label]);
      return createVNode("span", null, [createTextVNode("\xA0")]);
    }
    useRender(() => {
      var _a;
      const hasLabels = !!((_a = props.itemLabels) == null ? void 0 : _a.length) || slots["item-label"];
      return createVNode(props.tag, {
        "class": ["v-rating", {
          "v-rating--hover": props.hover,
          "v-rating--readonly": props.readonly
        }, themeClasses.value, props.class],
        "style": props.style
      }, {
        default: () => [createVNode(VRatingItem, {
          "value": 0,
          "index": -1,
          "showStar": false
        }, null), range.value.map((value, i) => {
          var _a2, _b;
          return createVNode("div", {
            "class": "v-rating__wrapper"
          }, [hasLabels && props.itemLabelPosition === "top" ? createLabel({
            value,
            index: i,
            label: (_a2 = props.itemLabels) == null ? void 0 : _a2[i]
          }) : void 0, createVNode("div", {
            "class": "v-rating__item"
          }, [props.halfIncrements ? createVNode(Fragment, null, [createVNode(VRatingItem, {
            "value": value - 0.5,
            "index": i * 2
          }, null), createVNode(VRatingItem, {
            "value": value,
            "index": i * 2 + 1
          }, null)]) : createVNode(VRatingItem, {
            "value": value,
            "index": i
          }, null)]), hasLabels && props.itemLabelPosition === "bottom" ? createLabel({
            value,
            index: i,
            label: (_b = props.itemLabels) == null ? void 0 : _b[i]
          }) : void 0]);
        })]
      });
    });
    return {};
  }
});
const _sfc_main = {
  __name: "orders",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      currencyFormat,
      capitalizeFirstLetter,
      filterDataPerField,
      dateFormat_Month,
      numberFormat,
      dateFormat_Time
    } = useHelpers(), { isMobile } = useDevice();
    const { loading, error } = storeToRefs(useAppStore());
    const { customerOrders } = useOrderStore();
    const data = ref([]);
    const getData = async () => {
      data.value = await customerOrders();
    };
    watchEffect(() => {
      getData();
    });
    const toggle = ref(0);
    const ordersFilter = ["All", "Processing", "Delivered", "Cancelled"];
    const sort = ref("Newest");
    const setSort = (val) => {
      sort.value = val;
    };
    const filteredOrders = computed(() => {
      const unsortedData = toggle.value === 0 ? filterDataPerField(data.value, "") : filterDataPerField(data.value, "", {
        orderStatus: toggle.value === 1 ? "Processing" : toggle.value === 2 ? "Delivered" : "Cancelled"
      });
      if (sort.value === "Newest" || sort.value === "Oldest")
        return unsortedData.sort((a, b) => {
          if (a.dateCreated > b.dateCreated)
            if (sort.value === "Newest")
              return -1;
            else
              return 1;
        });
      if (sort.value === "Big expense" || sort.value === "Small expense")
        return unsortedData.sort((a, b) => {
          if (a.total > b.total) {
            if (sort.value === "Big expense")
              return -1;
            else
              return 1;
          }
        });
    });
    const setOrderStatus = (orderStatus) => {
      return orderStatus.toLowerCase() === "placed" ? { icon: "mdi:check-circle-outline", color: "green" } : orderStatus.toLowerCase() === "processing" ? { icon: "line-md:uploading-loop", color: "orange" } : { icon: "mdi:close-circle-outline", color: "red" };
    };
    const orderToExpand = ref(null);
    const expandOrder = (orderId) => {
      orderToExpand.value === orderId ? orderToExpand.value = null : orderToExpand.value = orderId;
    };
    const orderHeaders = [
      { title: "Image", value: "image" },
      { title: "Product", value: "productName" },
      { title: "Qty", value: "quantity" },
      { title: "Unit price", value: "price" },
      // { title: "Discount", value: "discount" },
      { title: "Total", value: "total" },
      { title: "Action", value: "review" }
    ];
    const { reviewProduct } = useReviewStore(), dialog = ref(false), rating = ref({
      rating: 5,
      type: "products",
      comment: "",
      itemId: null,
      item: {}
    }), openDialog = (val) => {
      dialog.value = true;
      rating.value.itemId = val.productId;
      rating.value.item = val;
      console.log(val);
    }, closeDialog = () => {
      dialog.value = false;
      rating.value = {
        rating: 5,
        type: "products",
        comment: "",
        itemId: null,
        item: {}
      };
    }, setComment = (val) => {
      rating.value.comment = val;
    }, submitReview = async () => {
      await reviewProduct(rating.value);
      if (!error.value)
        closeDialog();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreSelect = __nuxt_component_1;
      const _component_Icon = __nuxt_component_1$1;
      const _component_AdminCoreDialogHeader = __nuxt_component_2;
      const _component_client_shop_product_prices = __nuxt_component_0;
      const _component_Editor = __nuxt_component_4;
      _push(`<!--[--><div><div class="px-2 px-md-4"><div class="text-h5 pt-8 pb-4"><b>My Orders</b></div>`);
      _push(ssrRenderComponent(VBtnToggle, {
        modelValue: unref(toggle),
        "onUpdate:modelValue": ($event) => isRef(toggle) ? toggle.value = $event : null,
        color: "primary-accent",
        border: "",
        divided: "",
        variant: "text",
        density: "compact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(ordersFilter, (item, i) => {
              _push2(ssrRenderComponent(VBtn, {
                class: "text-caption",
                value: i,
                key: i
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(item)}</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(item), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(ordersFilter, (item, i) => {
                return createVNode(VBtn, {
                  class: "text-caption",
                  value: i,
                  key: i
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, toDisplayString(item), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="d-flex align-center ga-2 my-4 px-2 px-md-4 py-2"><div class="">`);
      _push(ssrRenderComponent(VBtn, {
        class: "text-caption card-outlined rounded-lg",
        variant: "text",
        size: "small",
        id: "sortBy",
        "prepend-icon": "mdi-sort"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Sort by ${ssrInterpolate(String(unref(sort)).toLowerCase())}</span>`);
          } else {
            return [
              createVNode("span", null, "Sort by " + toDisplayString(String(unref(sort)).toLowerCase()), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AdminCoreSelect, {
        activator: "#sortBy",
        list: ["Newest", "Oldest", "Big expense", "Small expense"],
        "list-value": unref(sort),
        onSetItem: setSort
      }, null, _parent));
      _push(`</div></div><div class="d-flex flex-column ga-3 px-0 px-md-4"><!--[-->`);
      ssrRenderList(unref(filteredOrders), (order, i) => {
        _push(`<div class="">`);
        _push(ssrRenderComponent(VCard, {
          flat: "",
          class: "d-flex ga-3 pa-2",
          onClick: ($event) => expandOrder(order.orderId)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VAvatar, {
                size: "60",
                color: "card",
                rounded: "lg"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: setOrderStatus(order.orderStatus).icon,
                      size: "2rem",
                      color: setOrderStatus(order.orderStatus).color
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: setOrderStatus(order.orderStatus).icon,
                        size: "2rem",
                        color: setOrderStatus(order.orderStatus).color
                      }, null, 8, ["name", "color"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="text-caption d-flex flex-column"${_scopeId}><span${_scopeId}>Order#: ${ssrInterpolate(order.orderId)}</span><span class="text-disabled"${_scopeId}>${ssrInterpolate(order.orders.length)} Product(s)</span><span class="mt-1"${_scopeId}>${ssrInterpolate(unref(currencyFormat)(order.total))}</span></div>`);
              _push2(ssrRenderComponent(VSpacer, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(VIcon, {
                class: ["my-auto icon", { "transform-180deg": unref(orderToExpand) === order.orderId }],
                icon: "mdi-chevron-down"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VAvatar, {
                  size: "60",
                  color: "card",
                  rounded: "lg"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: setOrderStatus(order.orderStatus).icon,
                      size: "2rem",
                      color: setOrderStatus(order.orderStatus).color
                    }, null, 8, ["name", "color"])
                  ]),
                  _: 2
                }, 1024),
                createVNode("div", { class: "text-caption d-flex flex-column" }, [
                  createVNode("span", null, "Order#: " + toDisplayString(order.orderId), 1),
                  createVNode("span", { class: "text-disabled" }, toDisplayString(order.orders.length) + " Product(s)", 1),
                  createVNode("span", { class: "mt-1" }, toDisplayString(unref(currencyFormat)(order.total)), 1)
                ]),
                createVNode(VSpacer),
                createVNode(VIcon, {
                  class: ["my-auto icon", { "transform-180deg": unref(orderToExpand) === order.orderId }],
                  icon: "mdi-chevron-down"
                }, null, 8, ["class"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(VExpandTransition, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(orderToExpand) === order.orderId) {
                _push2(`<div class=""${_scopeId}>`);
                _push2(ssrRenderComponent(VContainer, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VRow, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VCol, {
                              cols: "12",
                              sm: "4",
                              class: "text-grey text-caption d-flex flex-column ga-2"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="d-flex"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "mdi-map-marker-outline",
                                    color: "grey",
                                    start: ""
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span${_scopeId4}>Delivery to ${ssrInterpolate(order.deliveryAddress)}</span></div><div class="d-flex"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "mdi-clock-outline",
                                    color: "grey",
                                    start: ""
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span${_scopeId4}>Order placed on ${ssrInterpolate(unref(dateFormat_Time)(order.dateCreated))}</span></div><div class="d-flex"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "mdi-clock-outline",
                                    color: "grey",
                                    start: ""
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span${_scopeId4}>Delivery on </span></div><div class="d-flex"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "mdi-cash",
                                    color: "grey",
                                    start: ""
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span${_scopeId4}>Paid with ${ssrInterpolate(String(order.modeOfPayment).toLowerCase())}</span></div><div class="d-flex"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: "mdi-cash",
                                    color: "grey",
                                    start: ""
                                  }, null, _parent5, _scopeId4));
                                  _push5(`<span${_scopeId4}>Delivery fee ${ssrInterpolate(unref(currencyFormat)(order.deliveryFee))}</span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "d-flex" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-map-marker-outline",
                                        color: "grey",
                                        start: ""
                                      }),
                                      createVNode("span", null, "Delivery to " + toDisplayString(order.deliveryAddress), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-clock-outline",
                                        color: "grey",
                                        start: ""
                                      }),
                                      createVNode("span", null, "Order placed on " + toDisplayString(unref(dateFormat_Time)(order.dateCreated)), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-clock-outline",
                                        color: "grey",
                                        start: ""
                                      }),
                                      createVNode("span", null, "Delivery on ")
                                    ]),
                                    createVNode("div", { class: "d-flex" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-cash",
                                        color: "grey",
                                        start: ""
                                      }),
                                      createVNode("span", null, "Paid with " + toDisplayString(String(order.modeOfPayment).toLowerCase()), 1)
                                    ]),
                                    createVNode("div", { class: "d-flex" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-cash",
                                        color: "grey",
                                        start: ""
                                      }),
                                      createVNode("span", null, "Delivery fee " + toDisplayString(unref(currencyFormat)(order.deliveryFee)), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VCol, {
                              cols: "12",
                              sm: "8"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VDataTable, {
                                    headers: orderHeaders,
                                    items: order.orders
                                  }, {
                                    [`item.image`]: withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class=""${_scopeId5}>`);
                                        _push6(ssrRenderComponent(VAvatar, {
                                          size: "40",
                                          image: item.image
                                        }, null, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(VDialog, {
                                          activator: "parent",
                                          width: "400"
                                        }, {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(VCard, { class: "card-outlined rounded-lg" }, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(VImg, {
                                                      src: item.image
                                                    }, {
                                                      placeholder: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VProgressCircular, {
                                                            color: "primary-accent",
                                                            indeterminate: ""
                                                          }, null, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VProgressCircular, {
                                                              color: "primary-accent",
                                                              indeterminate: ""
                                                            })
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(VImg, {
                                                        src: item.image
                                                      }, {
                                                        placeholder: withCtx(() => [
                                                          createVNode(VProgressCircular, {
                                                            color: "primary-accent",
                                                            indeterminate: ""
                                                          })
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["src"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(VCard, { class: "card-outlined rounded-lg" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: item.image
                                                    }, {
                                                      placeholder: withCtx(() => [
                                                        createVNode(VProgressCircular, {
                                                          color: "primary-accent",
                                                          indeterminate: ""
                                                        })
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["src"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(`</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "" }, [
                                            createVNode(VAvatar, {
                                              size: "40",
                                              image: item.image
                                            }, null, 8, ["image"]),
                                            createVNode(VDialog, {
                                              activator: "parent",
                                              width: "400"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VCard, { class: "card-outlined rounded-lg" }, {
                                                  default: withCtx(() => [
                                                    createVNode(VImg, {
                                                      src: item.image
                                                    }, {
                                                      placeholder: withCtx(() => [
                                                        createVNode(VProgressCircular, {
                                                          color: "primary-accent",
                                                          indeterminate: ""
                                                        })
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["src"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
                                        ];
                                      }
                                    }),
                                    [`item.productName`]: withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate(unref(capitalizeFirstLetter)(item.productName))}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", null, toDisplayString(unref(capitalizeFirstLetter)(item.productName)), 1)
                                        ];
                                      }
                                    }),
                                    [`item.price`]: withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate(unref(currencyFormat)(item.price))}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", null, toDisplayString(unref(currencyFormat)(item.price)), 1)
                                        ];
                                      }
                                    }),
                                    [`item.total`]: withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate(unref(currencyFormat)(item.total))}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", null, toDisplayString(unref(currencyFormat)(item.total)), 1)
                                        ];
                                      }
                                    }),
                                    [`item.discount`]: withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate(unref(currencyFormat)(item.discount))}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", null, toDisplayString(unref(currencyFormat)(item.discount)), 1)
                                        ];
                                      }
                                    }),
                                    [`item.review`]: withCtx(({ item }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class=""${_scopeId5}>`);
                                        _push6(ssrRenderComponent(VBtn, {
                                          size: "x-small",
                                          class: "text-caption",
                                          variant: "outlined",
                                          color: "primary-accent",
                                          onClick: ($event) => openDialog(item)
                                        }, {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<span${_scopeId6}>Review</span>`);
                                            } else {
                                              return [
                                                createVNode("span", null, "Review")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(`</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "" }, [
                                            createVNode(VBtn, {
                                              size: "x-small",
                                              class: "text-caption",
                                              variant: "outlined",
                                              color: "primary-accent",
                                              onClick: ($event) => openDialog(item)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, "Review")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VDataTable, {
                                      headers: orderHeaders,
                                      items: order.orders
                                    }, {
                                      [`item.image`]: withCtx(({ item }) => [
                                        createVNode("div", { class: "" }, [
                                          createVNode(VAvatar, {
                                            size: "40",
                                            image: item.image
                                          }, null, 8, ["image"]),
                                          createVNode(VDialog, {
                                            activator: "parent",
                                            width: "400"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VCard, { class: "card-outlined rounded-lg" }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    src: item.image
                                                  }, {
                                                    placeholder: withCtx(() => [
                                                      createVNode(VProgressCircular, {
                                                        color: "primary-accent",
                                                        indeterminate: ""
                                                      })
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["src"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ]),
                                      [`item.productName`]: withCtx(({ item }) => [
                                        createVNode("span", null, toDisplayString(unref(capitalizeFirstLetter)(item.productName)), 1)
                                      ]),
                                      [`item.price`]: withCtx(({ item }) => [
                                        createVNode("span", null, toDisplayString(unref(currencyFormat)(item.price)), 1)
                                      ]),
                                      [`item.total`]: withCtx(({ item }) => [
                                        createVNode("span", null, toDisplayString(unref(currencyFormat)(item.total)), 1)
                                      ]),
                                      [`item.discount`]: withCtx(({ item }) => [
                                        createVNode("span", null, toDisplayString(unref(currencyFormat)(item.discount)), 1)
                                      ]),
                                      [`item.review`]: withCtx(({ item }) => [
                                        createVNode("div", { class: "" }, [
                                          createVNode(VBtn, {
                                            size: "x-small",
                                            class: "text-caption",
                                            variant: "outlined",
                                            color: "primary-accent",
                                            onClick: ($event) => openDialog(item)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, "Review")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["items"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "4",
                                class: "text-grey text-caption d-flex flex-column ga-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode(VIcon, {
                                      icon: "mdi-map-marker-outline",
                                      color: "grey",
                                      start: ""
                                    }),
                                    createVNode("span", null, "Delivery to " + toDisplayString(order.deliveryAddress), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode(VIcon, {
                                      icon: "mdi-clock-outline",
                                      color: "grey",
                                      start: ""
                                    }),
                                    createVNode("span", null, "Order placed on " + toDisplayString(unref(dateFormat_Time)(order.dateCreated)), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode(VIcon, {
                                      icon: "mdi-clock-outline",
                                      color: "grey",
                                      start: ""
                                    }),
                                    createVNode("span", null, "Delivery on ")
                                  ]),
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode(VIcon, {
                                      icon: "mdi-cash",
                                      color: "grey",
                                      start: ""
                                    }),
                                    createVNode("span", null, "Paid with " + toDisplayString(String(order.modeOfPayment).toLowerCase()), 1)
                                  ]),
                                  createVNode("div", { class: "d-flex" }, [
                                    createVNode(VIcon, {
                                      icon: "mdi-cash",
                                      color: "grey",
                                      start: ""
                                    }),
                                    createVNode("span", null, "Delivery fee " + toDisplayString(unref(currencyFormat)(order.deliveryFee)), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "8"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VDataTable, {
                                    headers: orderHeaders,
                                    items: order.orders
                                  }, {
                                    [`item.image`]: withCtx(({ item }) => [
                                      createVNode("div", { class: "" }, [
                                        createVNode(VAvatar, {
                                          size: "40",
                                          image: item.image
                                        }, null, 8, ["image"]),
                                        createVNode(VDialog, {
                                          activator: "parent",
                                          width: "400"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VCard, { class: "card-outlined rounded-lg" }, {
                                              default: withCtx(() => [
                                                createVNode(VImg, {
                                                  src: item.image
                                                }, {
                                                  placeholder: withCtx(() => [
                                                    createVNode(VProgressCircular, {
                                                      color: "primary-accent",
                                                      indeterminate: ""
                                                    })
                                                  ]),
                                                  _: 2
                                                }, 1032, ["src"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    [`item.productName`]: withCtx(({ item }) => [
                                      createVNode("span", null, toDisplayString(unref(capitalizeFirstLetter)(item.productName)), 1)
                                    ]),
                                    [`item.price`]: withCtx(({ item }) => [
                                      createVNode("span", null, toDisplayString(unref(currencyFormat)(item.price)), 1)
                                    ]),
                                    [`item.total`]: withCtx(({ item }) => [
                                      createVNode("span", null, toDisplayString(unref(currencyFormat)(item.total)), 1)
                                    ]),
                                    [`item.discount`]: withCtx(({ item }) => [
                                      createVNode("span", null, toDisplayString(unref(currencyFormat)(item.discount)), 1)
                                    ]),
                                    [`item.review`]: withCtx(({ item }) => [
                                      createVNode("div", { class: "" }, [
                                        createVNode(VBtn, {
                                          size: "x-small",
                                          class: "text-caption",
                                          variant: "outlined",
                                          color: "primary-accent",
                                          onClick: ($event) => openDialog(item)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "Review")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["items"])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "4",
                              class: "text-grey text-caption d-flex flex-column ga-2"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-map-marker-outline",
                                    color: "grey",
                                    start: ""
                                  }),
                                  createVNode("span", null, "Delivery to " + toDisplayString(order.deliveryAddress), 1)
                                ]),
                                createVNode("div", { class: "d-flex" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-clock-outline",
                                    color: "grey",
                                    start: ""
                                  }),
                                  createVNode("span", null, "Order placed on " + toDisplayString(unref(dateFormat_Time)(order.dateCreated)), 1)
                                ]),
                                createVNode("div", { class: "d-flex" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-clock-outline",
                                    color: "grey",
                                    start: ""
                                  }),
                                  createVNode("span", null, "Delivery on ")
                                ]),
                                createVNode("div", { class: "d-flex" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-cash",
                                    color: "grey",
                                    start: ""
                                  }),
                                  createVNode("span", null, "Paid with " + toDisplayString(String(order.modeOfPayment).toLowerCase()), 1)
                                ]),
                                createVNode("div", { class: "d-flex" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-cash",
                                    color: "grey",
                                    start: ""
                                  }),
                                  createVNode("span", null, "Delivery fee " + toDisplayString(unref(currencyFormat)(order.deliveryFee)), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCol, {
                              cols: "12",
                              sm: "8"
                            }, {
                              default: withCtx(() => [
                                createVNode(VDataTable, {
                                  headers: orderHeaders,
                                  items: order.orders
                                }, {
                                  [`item.image`]: withCtx(({ item }) => [
                                    createVNode("div", { class: "" }, [
                                      createVNode(VAvatar, {
                                        size: "40",
                                        image: item.image
                                      }, null, 8, ["image"]),
                                      createVNode(VDialog, {
                                        activator: "parent",
                                        width: "400"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, { class: "card-outlined rounded-lg" }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                src: item.image
                                              }, {
                                                placeholder: withCtx(() => [
                                                  createVNode(VProgressCircular, {
                                                    color: "primary-accent",
                                                    indeterminate: ""
                                                  })
                                                ]),
                                                _: 2
                                              }, 1032, ["src"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]),
                                  [`item.productName`]: withCtx(({ item }) => [
                                    createVNode("span", null, toDisplayString(unref(capitalizeFirstLetter)(item.productName)), 1)
                                  ]),
                                  [`item.price`]: withCtx(({ item }) => [
                                    createVNode("span", null, toDisplayString(unref(currencyFormat)(item.price)), 1)
                                  ]),
                                  [`item.total`]: withCtx(({ item }) => [
                                    createVNode("span", null, toDisplayString(unref(currencyFormat)(item.total)), 1)
                                  ]),
                                  [`item.discount`]: withCtx(({ item }) => [
                                    createVNode("span", null, toDisplayString(unref(currencyFormat)(item.discount)), 1)
                                  ]),
                                  [`item.review`]: withCtx(({ item }) => [
                                    createVNode("div", { class: "" }, [
                                      createVNode(VBtn, {
                                        size: "x-small",
                                        class: "text-caption",
                                        variant: "outlined",
                                        color: "primary-accent",
                                        onClick: ($event) => openDialog(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Review")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["items"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(orderToExpand) === order.orderId ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ""
                }, [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "4",
                            class: "text-grey text-caption d-flex flex-column ga-2"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex" }, [
                                createVNode(VIcon, {
                                  icon: "mdi-map-marker-outline",
                                  color: "grey",
                                  start: ""
                                }),
                                createVNode("span", null, "Delivery to " + toDisplayString(order.deliveryAddress), 1)
                              ]),
                              createVNode("div", { class: "d-flex" }, [
                                createVNode(VIcon, {
                                  icon: "mdi-clock-outline",
                                  color: "grey",
                                  start: ""
                                }),
                                createVNode("span", null, "Order placed on " + toDisplayString(unref(dateFormat_Time)(order.dateCreated)), 1)
                              ]),
                              createVNode("div", { class: "d-flex" }, [
                                createVNode(VIcon, {
                                  icon: "mdi-clock-outline",
                                  color: "grey",
                                  start: ""
                                }),
                                createVNode("span", null, "Delivery on ")
                              ]),
                              createVNode("div", { class: "d-flex" }, [
                                createVNode(VIcon, {
                                  icon: "mdi-cash",
                                  color: "grey",
                                  start: ""
                                }),
                                createVNode("span", null, "Paid with " + toDisplayString(String(order.modeOfPayment).toLowerCase()), 1)
                              ]),
                              createVNode("div", { class: "d-flex" }, [
                                createVNode(VIcon, {
                                  icon: "mdi-cash",
                                  color: "grey",
                                  start: ""
                                }),
                                createVNode("span", null, "Delivery fee " + toDisplayString(unref(currencyFormat)(order.deliveryFee)), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCol, {
                            cols: "12",
                            sm: "8"
                          }, {
                            default: withCtx(() => [
                              createVNode(VDataTable, {
                                headers: orderHeaders,
                                items: order.orders
                              }, {
                                [`item.image`]: withCtx(({ item }) => [
                                  createVNode("div", { class: "" }, [
                                    createVNode(VAvatar, {
                                      size: "40",
                                      image: item.image
                                    }, null, 8, ["image"]),
                                    createVNode(VDialog, {
                                      activator: "parent",
                                      width: "400"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, { class: "card-outlined rounded-lg" }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              src: item.image
                                            }, {
                                              placeholder: withCtx(() => [
                                                createVNode(VProgressCircular, {
                                                  color: "primary-accent",
                                                  indeterminate: ""
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                [`item.productName`]: withCtx(({ item }) => [
                                  createVNode("span", null, toDisplayString(unref(capitalizeFirstLetter)(item.productName)), 1)
                                ]),
                                [`item.price`]: withCtx(({ item }) => [
                                  createVNode("span", null, toDisplayString(unref(currencyFormat)(item.price)), 1)
                                ]),
                                [`item.total`]: withCtx(({ item }) => [
                                  createVNode("span", null, toDisplayString(unref(currencyFormat)(item.total)), 1)
                                ]),
                                [`item.discount`]: withCtx(({ item }) => [
                                  createVNode("span", null, toDisplayString(unref(currencyFormat)(item.discount)), 1)
                                ]),
                                [`item.review`]: withCtx(({ item }) => [
                                  createVNode("div", { class: "" }, [
                                    createVNode(VBtn, {
                                      size: "x-small",
                                      class: "text-caption",
                                      variant: "outlined",
                                      color: "primary-accent",
                                      onClick: ($event) => openDialog(item)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "Review")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["items"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(VDivider, null, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (!unref(filteredOrders).length || unref(loading)) {
        _push(`<div class="py-10 my-10 py-md-15 my-md-15 text-disabled text-center">`);
        if (unref(loading)) {
          _push(`<span>Loading orders...</span>`);
        } else {
          _push(`<span>No orders found</span>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(VDialog, {
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
        fullscreen: "",
        transition: "dialog-top-transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "card-outlined" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AdminCoreDialogHeader, {
                    title: "Review product",
                    onClose: closeDialog
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, { justify: "center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="w-100"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VCard, {
                                            class: "bg-transparent pa-2 product-card card-outlined d-flex flex-row flex-md-column",
                                            flat: ""
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              var _a, _b, _c, _d, _e, _f;
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VCard, {
                                                  flat: "",
                                                  class: "d-flex align-center",
                                                  width: unref(isMobile) ? "40px" : "100%",
                                                  height: unref(isMobile) ? "100%" : 150
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    var _a2, _b2, _c2, _d2;
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VImg, {
                                                        src: (_a2 = unref(rating).item) == null ? void 0 : _a2.image,
                                                        "lazy-src": (_b2 = unref(rating).item) == null ? void 0 : _b2.image
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VImg, {
                                                          src: (_c2 = unref(rating).item) == null ? void 0 : _c2.image,
                                                          "lazy-src": (_d2 = unref(rating).item) == null ? void 0 : _d2.image
                                                        }, null, 8, ["src", "lazy-src"])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`<div class="text-caption d-flex flex-column mt-0 mt-md-2"${_scopeId7}><div class="one-line"${_scopeId7}><span${_scopeId7}>${ssrInterpolate((_a = unref(rating).item) == null ? void 0 : _a.productName)}</span></div><div class=""${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_client_shop_product_prices, {
                                                  small: true,
                                                  price: (_b = unref(rating).item) == null ? void 0 : _b.price,
                                                  discount: (_c = unref(rating).item) == null ? void 0 : _c.discount
                                                }, null, _parent8, _scopeId7));
                                                _push8(`</div></div>`);
                                              } else {
                                                return [
                                                  createVNode(VCard, {
                                                    flat: "",
                                                    class: "d-flex align-center",
                                                    width: unref(isMobile) ? "40px" : "100%",
                                                    height: unref(isMobile) ? "100%" : 150
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a2, _b2;
                                                      return [
                                                        createVNode(VImg, {
                                                          src: (_a2 = unref(rating).item) == null ? void 0 : _a2.image,
                                                          "lazy-src": (_b2 = unref(rating).item) == null ? void 0 : _b2.image
                                                        }, null, 8, ["src", "lazy-src"])
                                                      ];
                                                    }),
                                                    _: 1
                                                  }, 8, ["width", "height"]),
                                                  createVNode("div", { class: "text-caption d-flex flex-column mt-0 mt-md-2" }, [
                                                    createVNode("div", { class: "one-line" }, [
                                                      createVNode("span", null, toDisplayString((_d = unref(rating).item) == null ? void 0 : _d.productName), 1)
                                                    ]),
                                                    createVNode("div", { class: "" }, [
                                                      createVNode(_component_client_shop_product_prices, {
                                                        small: true,
                                                        price: (_e = unref(rating).item) == null ? void 0 : _e.price,
                                                        discount: (_f = unref(rating).item) == null ? void 0 : _f.discount
                                                      }, null, 8, ["price", "discount"])
                                                    ])
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "w-100" }, [
                                              createVNode(VCard, {
                                                class: "bg-transparent pa-2 product-card card-outlined d-flex flex-row flex-md-column",
                                                flat: ""
                                              }, {
                                                default: withCtx(() => {
                                                  var _a, _b, _c;
                                                  return [
                                                    createVNode(VCard, {
                                                      flat: "",
                                                      class: "d-flex align-center",
                                                      width: unref(isMobile) ? "40px" : "100%",
                                                      height: unref(isMobile) ? "100%" : 150
                                                    }, {
                                                      default: withCtx(() => {
                                                        var _a2, _b2;
                                                        return [
                                                          createVNode(VImg, {
                                                            src: (_a2 = unref(rating).item) == null ? void 0 : _a2.image,
                                                            "lazy-src": (_b2 = unref(rating).item) == null ? void 0 : _b2.image
                                                          }, null, 8, ["src", "lazy-src"])
                                                        ];
                                                      }),
                                                      _: 1
                                                    }, 8, ["width", "height"]),
                                                    createVNode("div", { class: "text-caption d-flex flex-column mt-0 mt-md-2" }, [
                                                      createVNode("div", { class: "one-line" }, [
                                                        createVNode("span", null, toDisplayString((_a = unref(rating).item) == null ? void 0 : _a.productName), 1)
                                                      ]),
                                                      createVNode("div", { class: "" }, [
                                                        createVNode(_component_client_shop_product_prices, {
                                                          small: true,
                                                          price: (_b = unref(rating).item) == null ? void 0 : _b.price,
                                                          discount: (_c = unref(rating).item) == null ? void 0 : _c.discount
                                                        }, null, 8, ["price", "discount"])
                                                      ])
                                                    ])
                                                  ];
                                                }),
                                                _: 1
                                              })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="text-body-2"${_scopeId6}><span${_scopeId6}>Product rating</span></div><div class="text-caption d-flex align-center"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VRating, {
                                            modelValue: unref(rating).rating,
                                            "onUpdate:modelValue": ($event) => unref(rating).rating = $event,
                                            color: "link",
                                            density: "compact",
                                            size: "small",
                                            hover: "",
                                            "half-increments": "",
                                            class: "mr-3"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<span${_scopeId6}>(${ssrInterpolate(unref(rating).rating)}/5)</span></div><div class="text-disabled d-flex align-center text-caption"${_scopeId6}><span${_scopeId6}>This product have been averagely rated ${ssrInterpolate(4.6)}/5</span></div><div class="text-body-2 mt-4 w-100"${_scopeId6}><span${_scopeId6}>Comment</span>`);
                                          _push7(ssrRenderComponent(_component_Editor, {
                                            text: unref(rating).comment,
                                            onSetText: setComment
                                          }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                          _push7(ssrRenderComponent(VBtn, {
                                            class: "mt-3 text-caption",
                                            color: "primary-accent",
                                            size: "small",
                                            flat: "",
                                            block: "",
                                            loading: unref(loading),
                                            onClick: submitReview
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<span${_scopeId7}>Submit</span>`);
                                              } else {
                                                return [
                                                  createVNode("span", null, "Submit")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-body-2" }, [
                                              createVNode("span", null, "Product rating")
                                            ]),
                                            createVNode("div", { class: "text-caption d-flex align-center" }, [
                                              createVNode(VRating, {
                                                modelValue: unref(rating).rating,
                                                "onUpdate:modelValue": ($event) => unref(rating).rating = $event,
                                                color: "link",
                                                density: "compact",
                                                size: "small",
                                                hover: "",
                                                "half-increments": "",
                                                class: "mr-3"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode("span", null, "(" + toDisplayString(unref(rating).rating) + "/5)", 1)
                                            ]),
                                            createVNode("div", { class: "text-disabled d-flex align-center text-caption" }, [
                                              createVNode("span", null, "This product have been averagely rated " + toDisplayString(4.6) + "/5")
                                            ]),
                                            createVNode("div", { class: "text-body-2 mt-4 w-100" }, [
                                              createVNode("span", null, "Comment"),
                                              createVNode(_component_Editor, {
                                                text: unref(rating).comment,
                                                onSetText: setComment
                                              }, null, 8, ["text"])
                                            ]),
                                            createVNode(VBtn, {
                                              class: "mt-3 text-caption",
                                              color: "primary-accent",
                                              size: "small",
                                              flat: "",
                                              block: "",
                                              loading: unref(loading),
                                              onClick: submitReview
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "w-100" }, [
                                            createVNode(VCard, {
                                              class: "bg-transparent pa-2 product-card card-outlined d-flex flex-row flex-md-column",
                                              flat: ""
                                            }, {
                                              default: withCtx(() => {
                                                var _a, _b, _c;
                                                return [
                                                  createVNode(VCard, {
                                                    flat: "",
                                                    class: "d-flex align-center",
                                                    width: unref(isMobile) ? "40px" : "100%",
                                                    height: unref(isMobile) ? "100%" : 150
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a2, _b2;
                                                      return [
                                                        createVNode(VImg, {
                                                          src: (_a2 = unref(rating).item) == null ? void 0 : _a2.image,
                                                          "lazy-src": (_b2 = unref(rating).item) == null ? void 0 : _b2.image
                                                        }, null, 8, ["src", "lazy-src"])
                                                      ];
                                                    }),
                                                    _: 1
                                                  }, 8, ["width", "height"]),
                                                  createVNode("div", { class: "text-caption d-flex flex-column mt-0 mt-md-2" }, [
                                                    createVNode("div", { class: "one-line" }, [
                                                      createVNode("span", null, toDisplayString((_a = unref(rating).item) == null ? void 0 : _a.productName), 1)
                                                    ]),
                                                    createVNode("div", { class: "" }, [
                                                      createVNode(_component_client_shop_product_prices, {
                                                        small: true,
                                                        price: (_b = unref(rating).item) == null ? void 0 : _b.price,
                                                        discount: (_c = unref(rating).item) == null ? void 0 : _c.discount
                                                      }, null, 8, ["price", "discount"])
                                                    ])
                                                  ])
                                                ];
                                              }),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-body-2" }, [
                                            createVNode("span", null, "Product rating")
                                          ]),
                                          createVNode("div", { class: "text-caption d-flex align-center" }, [
                                            createVNode(VRating, {
                                              modelValue: unref(rating).rating,
                                              "onUpdate:modelValue": ($event) => unref(rating).rating = $event,
                                              color: "link",
                                              density: "compact",
                                              size: "small",
                                              hover: "",
                                              "half-increments": "",
                                              class: "mr-3"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("span", null, "(" + toDisplayString(unref(rating).rating) + "/5)", 1)
                                          ]),
                                          createVNode("div", { class: "text-disabled d-flex align-center text-caption" }, [
                                            createVNode("span", null, "This product have been averagely rated " + toDisplayString(4.6) + "/5")
                                          ]),
                                          createVNode("div", { class: "text-body-2 mt-4 w-100" }, [
                                            createVNode("span", null, "Comment"),
                                            createVNode(_component_Editor, {
                                              text: unref(rating).comment,
                                              onSetText: setComment
                                            }, null, 8, ["text"])
                                          ]),
                                          createVNode(VBtn, {
                                            class: "mt-3 text-caption",
                                            color: "primary-accent",
                                            size: "small",
                                            flat: "",
                                            block: "",
                                            loading: unref(loading),
                                            onClick: submitReview
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, "Submit")
                                            ]),
                                            _: 1
                                          }, 8, ["loading"])
                                        ]),
                                        _: 1
                                      })
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
                                      sm: "2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "w-100" }, [
                                          createVNode(VCard, {
                                            class: "bg-transparent pa-2 product-card card-outlined d-flex flex-row flex-md-column",
                                            flat: ""
                                          }, {
                                            default: withCtx(() => {
                                              var _a, _b, _c;
                                              return [
                                                createVNode(VCard, {
                                                  flat: "",
                                                  class: "d-flex align-center",
                                                  width: unref(isMobile) ? "40px" : "100%",
                                                  height: unref(isMobile) ? "100%" : 150
                                                }, {
                                                  default: withCtx(() => {
                                                    var _a2, _b2;
                                                    return [
                                                      createVNode(VImg, {
                                                        src: (_a2 = unref(rating).item) == null ? void 0 : _a2.image,
                                                        "lazy-src": (_b2 = unref(rating).item) == null ? void 0 : _b2.image
                                                      }, null, 8, ["src", "lazy-src"])
                                                    ];
                                                  }),
                                                  _: 1
                                                }, 8, ["width", "height"]),
                                                createVNode("div", { class: "text-caption d-flex flex-column mt-0 mt-md-2" }, [
                                                  createVNode("div", { class: "one-line" }, [
                                                    createVNode("span", null, toDisplayString((_a = unref(rating).item) == null ? void 0 : _a.productName), 1)
                                                  ]),
                                                  createVNode("div", { class: "" }, [
                                                    createVNode(_component_client_shop_product_prices, {
                                                      small: true,
                                                      price: (_b = unref(rating).item) == null ? void 0 : _b.price,
                                                      discount: (_c = unref(rating).item) == null ? void 0 : _c.discount
                                                    }, null, 8, ["price", "discount"])
                                                  ])
                                                ])
                                              ];
                                            }),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-body-2" }, [
                                          createVNode("span", null, "Product rating")
                                        ]),
                                        createVNode("div", { class: "text-caption d-flex align-center" }, [
                                          createVNode(VRating, {
                                            modelValue: unref(rating).rating,
                                            "onUpdate:modelValue": ($event) => unref(rating).rating = $event,
                                            color: "link",
                                            density: "compact",
                                            size: "small",
                                            hover: "",
                                            "half-increments": "",
                                            class: "mr-3"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("span", null, "(" + toDisplayString(unref(rating).rating) + "/5)", 1)
                                        ]),
                                        createVNode("div", { class: "text-disabled d-flex align-center text-caption" }, [
                                          createVNode("span", null, "This product have been averagely rated " + toDisplayString(4.6) + "/5")
                                        ]),
                                        createVNode("div", { class: "text-body-2 mt-4 w-100" }, [
                                          createVNode("span", null, "Comment"),
                                          createVNode(_component_Editor, {
                                            text: unref(rating).comment,
                                            onSetText: setComment
                                          }, null, 8, ["text"])
                                        ]),
                                        createVNode(VBtn, {
                                          class: "mt-3 text-caption",
                                          color: "primary-accent",
                                          size: "small",
                                          flat: "",
                                          block: "",
                                          loading: unref(loading),
                                          onClick: submitReview
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "Submit")
                                          ]),
                                          _: 1
                                        }, 8, ["loading"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, null, {
                            default: withCtx(() => [
                              createVNode(VRow, { justify: "center" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "w-100" }, [
                                        createVNode(VCard, {
                                          class: "bg-transparent pa-2 product-card card-outlined d-flex flex-row flex-md-column",
                                          flat: ""
                                        }, {
                                          default: withCtx(() => {
                                            var _a, _b, _c;
                                            return [
                                              createVNode(VCard, {
                                                flat: "",
                                                class: "d-flex align-center",
                                                width: unref(isMobile) ? "40px" : "100%",
                                                height: unref(isMobile) ? "100%" : 150
                                              }, {
                                                default: withCtx(() => {
                                                  var _a2, _b2;
                                                  return [
                                                    createVNode(VImg, {
                                                      src: (_a2 = unref(rating).item) == null ? void 0 : _a2.image,
                                                      "lazy-src": (_b2 = unref(rating).item) == null ? void 0 : _b2.image
                                                    }, null, 8, ["src", "lazy-src"])
                                                  ];
                                                }),
                                                _: 1
                                              }, 8, ["width", "height"]),
                                              createVNode("div", { class: "text-caption d-flex flex-column mt-0 mt-md-2" }, [
                                                createVNode("div", { class: "one-line" }, [
                                                  createVNode("span", null, toDisplayString((_a = unref(rating).item) == null ? void 0 : _a.productName), 1)
                                                ]),
                                                createVNode("div", { class: "" }, [
                                                  createVNode(_component_client_shop_product_prices, {
                                                    small: true,
                                                    price: (_b = unref(rating).item) == null ? void 0 : _b.price,
                                                    discount: (_c = unref(rating).item) == null ? void 0 : _c.discount
                                                  }, null, 8, ["price", "discount"])
                                                ])
                                              ])
                                            ];
                                          }),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-body-2" }, [
                                        createVNode("span", null, "Product rating")
                                      ]),
                                      createVNode("div", { class: "text-caption d-flex align-center" }, [
                                        createVNode(VRating, {
                                          modelValue: unref(rating).rating,
                                          "onUpdate:modelValue": ($event) => unref(rating).rating = $event,
                                          color: "link",
                                          density: "compact",
                                          size: "small",
                                          hover: "",
                                          "half-increments": "",
                                          class: "mr-3"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("span", null, "(" + toDisplayString(unref(rating).rating) + "/5)", 1)
                                      ]),
                                      createVNode("div", { class: "text-disabled d-flex align-center text-caption" }, [
                                        createVNode("span", null, "This product have been averagely rated " + toDisplayString(4.6) + "/5")
                                      ]),
                                      createVNode("div", { class: "text-body-2 mt-4 w-100" }, [
                                        createVNode("span", null, "Comment"),
                                        createVNode(_component_Editor, {
                                          text: unref(rating).comment,
                                          onSetText: setComment
                                        }, null, 8, ["text"])
                                      ]),
                                      createVNode(VBtn, {
                                        class: "mt-3 text-caption",
                                        color: "primary-accent",
                                        size: "small",
                                        flat: "",
                                        block: "",
                                        loading: unref(loading),
                                        onClick: submitReview
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", null, "Submit")
                                        ]),
                                        _: 1
                                      }, 8, ["loading"])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AdminCoreDialogHeader, {
                      title: "Review product",
                      onClose: closeDialog
                    }),
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode(VContainer, null, {
                          default: withCtx(() => [
                            createVNode(VRow, { justify: "center" }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "2"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "w-100" }, [
                                      createVNode(VCard, {
                                        class: "bg-transparent pa-2 product-card card-outlined d-flex flex-row flex-md-column",
                                        flat: ""
                                      }, {
                                        default: withCtx(() => {
                                          var _a, _b, _c;
                                          return [
                                            createVNode(VCard, {
                                              flat: "",
                                              class: "d-flex align-center",
                                              width: unref(isMobile) ? "40px" : "100%",
                                              height: unref(isMobile) ? "100%" : 150
                                            }, {
                                              default: withCtx(() => {
                                                var _a2, _b2;
                                                return [
                                                  createVNode(VImg, {
                                                    src: (_a2 = unref(rating).item) == null ? void 0 : _a2.image,
                                                    "lazy-src": (_b2 = unref(rating).item) == null ? void 0 : _b2.image
                                                  }, null, 8, ["src", "lazy-src"])
                                                ];
                                              }),
                                              _: 1
                                            }, 8, ["width", "height"]),
                                            createVNode("div", { class: "text-caption d-flex flex-column mt-0 mt-md-2" }, [
                                              createVNode("div", { class: "one-line" }, [
                                                createVNode("span", null, toDisplayString((_a = unref(rating).item) == null ? void 0 : _a.productName), 1)
                                              ]),
                                              createVNode("div", { class: "" }, [
                                                createVNode(_component_client_shop_product_prices, {
                                                  small: true,
                                                  price: (_b = unref(rating).item) == null ? void 0 : _b.price,
                                                  discount: (_c = unref(rating).item) == null ? void 0 : _c.discount
                                                }, null, 8, ["price", "discount"])
                                              ])
                                            ])
                                          ];
                                        }),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-body-2" }, [
                                      createVNode("span", null, "Product rating")
                                    ]),
                                    createVNode("div", { class: "text-caption d-flex align-center" }, [
                                      createVNode(VRating, {
                                        modelValue: unref(rating).rating,
                                        "onUpdate:modelValue": ($event) => unref(rating).rating = $event,
                                        color: "link",
                                        density: "compact",
                                        size: "small",
                                        hover: "",
                                        "half-increments": "",
                                        class: "mr-3"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("span", null, "(" + toDisplayString(unref(rating).rating) + "/5)", 1)
                                    ]),
                                    createVNode("div", { class: "text-disabled d-flex align-center text-caption" }, [
                                      createVNode("span", null, "This product have been averagely rated " + toDisplayString(4.6) + "/5")
                                    ]),
                                    createVNode("div", { class: "text-body-2 mt-4 w-100" }, [
                                      createVNode("span", null, "Comment"),
                                      createVNode(_component_Editor, {
                                        text: unref(rating).comment,
                                        onSetText: setComment
                                      }, null, 8, ["text"])
                                    ]),
                                    createVNode(VBtn, {
                                      class: "mt-3 text-caption",
                                      color: "primary-accent",
                                      size: "small",
                                      flat: "",
                                      block: "",
                                      loading: unref(loading),
                                      onClick: submitReview
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, "Submit")
                                      ]),
                                      _: 1
                                    }, 8, ["loading"])
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
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "card-outlined" }, {
                default: withCtx(() => [
                  createVNode(_component_AdminCoreDialogHeader, {
                    title: "Review product",
                    onClose: closeDialog
                  }),
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "w-100" }, [
                                    createVNode(VCard, {
                                      class: "bg-transparent pa-2 product-card card-outlined d-flex flex-row flex-md-column",
                                      flat: ""
                                    }, {
                                      default: withCtx(() => {
                                        var _a, _b, _c;
                                        return [
                                          createVNode(VCard, {
                                            flat: "",
                                            class: "d-flex align-center",
                                            width: unref(isMobile) ? "40px" : "100%",
                                            height: unref(isMobile) ? "100%" : 150
                                          }, {
                                            default: withCtx(() => {
                                              var _a2, _b2;
                                              return [
                                                createVNode(VImg, {
                                                  src: (_a2 = unref(rating).item) == null ? void 0 : _a2.image,
                                                  "lazy-src": (_b2 = unref(rating).item) == null ? void 0 : _b2.image
                                                }, null, 8, ["src", "lazy-src"])
                                              ];
                                            }),
                                            _: 1
                                          }, 8, ["width", "height"]),
                                          createVNode("div", { class: "text-caption d-flex flex-column mt-0 mt-md-2" }, [
                                            createVNode("div", { class: "one-line" }, [
                                              createVNode("span", null, toDisplayString((_a = unref(rating).item) == null ? void 0 : _a.productName), 1)
                                            ]),
                                            createVNode("div", { class: "" }, [
                                              createVNode(_component_client_shop_product_prices, {
                                                small: true,
                                                price: (_b = unref(rating).item) == null ? void 0 : _b.price,
                                                discount: (_c = unref(rating).item) == null ? void 0 : _c.discount
                                              }, null, 8, ["price", "discount"])
                                            ])
                                          ])
                                        ];
                                      }),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-body-2" }, [
                                    createVNode("span", null, "Product rating")
                                  ]),
                                  createVNode("div", { class: "text-caption d-flex align-center" }, [
                                    createVNode(VRating, {
                                      modelValue: unref(rating).rating,
                                      "onUpdate:modelValue": ($event) => unref(rating).rating = $event,
                                      color: "link",
                                      density: "compact",
                                      size: "small",
                                      hover: "",
                                      "half-increments": "",
                                      class: "mr-3"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("span", null, "(" + toDisplayString(unref(rating).rating) + "/5)", 1)
                                  ]),
                                  createVNode("div", { class: "text-disabled d-flex align-center text-caption" }, [
                                    createVNode("span", null, "This product have been averagely rated " + toDisplayString(4.6) + "/5")
                                  ]),
                                  createVNode("div", { class: "text-body-2 mt-4 w-100" }, [
                                    createVNode("span", null, "Comment"),
                                    createVNode(_component_Editor, {
                                      text: unref(rating).comment,
                                      onSetText: setComment
                                    }, null, 8, ["text"])
                                  ]),
                                  createVNode(VBtn, {
                                    class: "mt-3 text-caption",
                                    color: "primary-accent",
                                    size: "small",
                                    flat: "",
                                    block: "",
                                    loading: unref(loading),
                                    onClick: submitReview
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, "Submit")
                                    ]),
                                    _: 1
                                  }, 8, ["loading"])
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
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=orders-XkxfrOLH.mjs.map
