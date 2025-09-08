import { _ as __nuxt_component_0$2 } from "./search-Y5nxNpAP.js";
import { _ as __nuxt_component_1$1 } from "./select-sjn27vix.js";
import { _ as __nuxt_component_0$1 } from "./prices-TYGcr06j.js";
import { j as __nuxt_component_0, b as navigateTo, _ as _export_sfc, s as storeToRefs, h as useAppStore } from "../server.mjs";
import { computed, useSSRContext, mergeProps, withCtx, createVNode, unref, toDisplayString, withModifiers, ref, watchEffect } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import { u as useSavedItemStore } from "./saved-items-T1rPLQyP.js";
import { V as VCard } from "./VCard-MEGoD2_3.js";
import { V as VImg } from "./VImg-_57rVikU.js";
import { V as VBtn } from "./VBtn-yNf12l4D.js";
import { u as useHelpers } from "./useHelpers-9BVYUhTt.js";
import { u as useHead } from "./index-S1hhTCs3.js";
import "./VTextField-8SU2p1Ep.js";
import "./index-d8gkbdU6.js";
import "./tag-pIHjuosL.js";
import "./index-q-0zZOOG.js";
import "./index-3E7yy1qS.js";
import "./color-rZjm0Y7u.js";
import "./position-AkaJaFJy.js";
import "./rounded-jA9LRAgf.js";
import "./VMenu-bZwLMGPK.js";
import "./VOverlay-bpCAw6Z_.js";
import "./delay-5iXTA9KV.js";
import "./lazy-8QocgoLY.js";
import "./VList-hhjvxiav.js";
import "./ssrBoot-xH9VG8QW.js";
import "./VAvatar-agmUyvkw.js";
import "./VDivider-Ce8J4Sp3.js";
import "./VCheckbox-Omi4Z8sK.js";
import "./VCheckboxBtn-lCSbAwQG.js";
import "./VSelectionControl-t8h0Xxrv.js";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "@vue/devtools-api";
import "@algolia/cache-in-memory";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "./resizeObserver-k8M9k6Xi.js";
import "date-fns";
import "date-fns/locale";
const _sfc_main$2 = {
  __name: "full-rating",
  __ssrInlineRender: true,
  props: {
    rating: {
      type: [Number, String],
      default: 3.5
    },
    reviews: {
      type: [Number, String],
      default: 0
    },
    stock: {
      type: [Number, String],
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    computed(() => props.rating);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/shop/product/full-rating.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
class ProductModel {
  constructor(product) {
    this.product = product;
  }
  get formatedProductRouteTitle() {
    return String(this.product.productName).toLowerCase().replaceAll(" ", "-");
  }
  navigateToProductDetails() {
    navigateTo({
      name: "shop-product-name-id",
      params: {
        name: this.formatedProductRouteTitle,
        id: this.product.productId ?? this.product.objectID
      }
    });
  }
}
const _sfc_main$1 = {
  __name: "full-list",
  __ssrInlineRender: true,
  props: {
    product: Object,
    wishlist: Boolean
  },
  emits: ["toggleWishList"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { loading, error, currentUser } = storeToRefs(useAppStore());
    const { saveItem, deleteSavedItem } = useSavedItemStore();
    const goTo = () => {
      let productModel = new ProductModel(props.product);
      productModel.navigateToProductDetails();
    };
    const toggleWishlist = async () => {
      props.wishlist || props.product.isSaved ? await deleteSavedItem(props.product.id) : await saveItem({
        userId: currentUser.value.userId,
        itemId: props.product.id,
        type: "products"
      });
      if (!error.value)
        emits("toggleWishlist");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_shop_product_prices = __nuxt_component_0$1;
      const _component_ClientShopProductFullRating = __nuxt_component_1;
      _push(ssrRenderComponent(VCard, mergeProps({
        class: "bg-transparent pa-2 d-flex ga-3",
        flat: "",
        onClick: goTo
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="" data-v-19230c6d${_scopeId}>`);
            _push2(ssrRenderComponent(VCard, {
              flat: "",
              height: "150",
              width: "120",
              class: "d-flex align-center basic-list"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, {
                    src: __props.product.thumbnail,
                    "lazy-src": __props.product.thumbnail
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, {
                      src: __props.product.thumbnail,
                      "lazy-src": __props.product.thumbnail
                    }, null, 8, ["src", "lazy-src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-caption text-md-body-2 d-flex flex-column mt-2" data-v-19230c6d${_scopeId}><div class="two-lines" data-v-19230c6d${_scopeId}><span data-v-19230c6d${_scopeId}>${ssrInterpolate(__props.product.productName)}</span></div><div class="my-1" data-v-19230c6d${_scopeId}><div class="text-caption text-md-subtitle-1" data-v-19230c6d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_client_shop_product_prices, {
              small: true,
              payload: __props.product,
              discount: __props.product.discount
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ClientShopProductFullRating, {
              rating: __props.product.rating
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-caption text-grey-darken-1 three-lines" data-v-19230c6d${_scopeId}><span data-v-19230c6d${_scopeId}>${`${String(__props.product.description).toLowerCase()}` ?? ""}</span></div></div><div class="ml-auto" data-v-19230c6d${_scopeId}>`);
            _push2(ssrRenderComponent(VBtn, {
              class: "card-outlined rounded-lg",
              icon: `mdi-heart${__props.wishlist || __props.product.isSaved ? "" : "-outline"}`,
              color: "primary-accent",
              variant: "text",
              size: "small",
              title: __props.wishlist || __props.product.isSaved ? "Remove from wishlist" : "Add to wishlist",
              onClick: toggleWishlist,
              loading: unref(loading)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode(VCard, {
                  flat: "",
                  height: "150",
                  width: "120",
                  class: "d-flex align-center basic-list"
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      src: __props.product.thumbnail,
                      "lazy-src": __props.product.thumbnail
                    }, null, 8, ["src", "lazy-src"])
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "text-caption text-md-body-2 d-flex flex-column mt-2" }, [
                createVNode("div", { class: "two-lines" }, [
                  createVNode("span", null, toDisplayString(__props.product.productName), 1)
                ]),
                createVNode("div", { class: "my-1" }, [
                  createVNode("div", { class: "text-caption text-md-subtitle-1" }, [
                    createVNode(_component_client_shop_product_prices, {
                      small: true,
                      payload: __props.product,
                      discount: __props.product.discount
                    }, null, 8, ["payload", "discount"])
                  ]),
                  createVNode(_component_ClientShopProductFullRating, {
                    rating: __props.product.rating
                  }, null, 8, ["rating"])
                ]),
                createVNode("div", { class: "text-caption text-grey-darken-1 three-lines" }, [
                  createVNode("span", {
                    innerHTML: `${String(__props.product.description).toLowerCase()}`
                  }, null, 8, ["innerHTML"])
                ])
              ]),
              createVNode("div", { class: "ml-auto" }, [
                createVNode(VBtn, {
                  class: "card-outlined rounded-lg",
                  icon: `mdi-heart${__props.wishlist || __props.product.isSaved ? "" : "-outline"}`,
                  color: "primary-accent",
                  variant: "text",
                  size: "small",
                  title: __props.wishlist || __props.product.isSaved ? "Remove from wishlist" : "Add to wishlist",
                  onClick: withModifiers(toggleWishlist, ["stop"]),
                  loading: unref(loading)
                }, null, 8, ["icon", "title", "loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/shop/product/cards/full-list.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-19230c6d"]]);
const _sfc_main = {
  __name: "wishlist",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      currencyFormat,
      capitalizeFirstLetter,
      filterDataPerField,
      dateFormat_Month,
      numberFormat
    } = useHelpers();
    const { loading } = storeToRefs(useAppStore());
    const { wishlists } = useSavedItemStore();
    const data = ref([]);
    const getData = async () => {
      data.value = await wishlists();
    };
    watchEffect(() => {
      getData();
    });
    const sort = ref("Newest");
    const setSort = (val) => {
      sort.value = val;
    };
    const search = ref("");
    const setSearch = (val) => {
      search.value = val;
    };
    const filteredProducts = computed(() => {
      const unsortedData = filterDataPerField(data.value, search.value);
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
    useHead({
      title: "My wishlist"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminCoreSearch = __nuxt_component_0$2;
      const _component_AdminCoreSelect = __nuxt_component_1$1;
      const _component_ClientShopProductCardsFullList = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4" }, _attrs))}><div class="text-h5 pt-8 pb-2"><b>My Wishlist</b></div><div class="d-flex align-center ga-2 my-4">`);
      _push(ssrRenderComponent(_component_AdminCoreSearch, {
        search: unref(search),
        onSearch: setSearch
      }, null, _parent));
      _push(`<div class="">`);
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
      _push(`</div></div><div class="d-flex flex-column ga-4 mt-8"><!--[-->`);
      ssrRenderList(unref(filteredProducts), (product) => {
        _push(ssrRenderComponent(VCard, {
          class: "card-outlined",
          flat: "",
          key: product.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ClientShopProductCardsFullList, {
                product,
                wishlist: true,
                onToggleWishList: getData
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ClientShopProductCardsFullList, {
                  product,
                  wishlist: true,
                  onToggleWishList: getData
                }, null, 8, ["product"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--> ${ssrInterpolate(unref(data).value)} `);
      if (!unref(filteredProducts).length || unref(loading)) {
        _push(`<div class="py-10 my-10 py-md-15 my-md-15 text-disabled text-center">`);
        if (unref(loading)) {
          _push(`<span>Loading orders...</span>`);
        } else {
          _push(`<span>No product found</span>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/wishlist.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=wishlist-DNPfXzGZ.js.map
