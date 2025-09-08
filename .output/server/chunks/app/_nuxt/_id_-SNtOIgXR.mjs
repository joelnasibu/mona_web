import { defineComponent, ref, withAsyncContext, computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useHead } from './index-S1hhTCs3.mjs';
import { _ as _export_sfc, h as useAppStore, s as storeToRefs, l as useRoute, j as __nuxt_component_0$1 } from '../server.mjs';
import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useSavedItemStore } from './saved-items-T1rPLQyP.mjs';
import { u as useProductStore } from './products-e11RfeWn.mjs';
import { u as useCartStore } from './cart-tyxrLAJF.mjs';
import { u as useChatStore } from './chat-JPFHFeEL.mjs';
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
import 'date-fns';
import 'date-fns/locale';
import '@supabase/supabase-js';

const removeUndefinedProps = (props) => {
  const filteredProps = /* @__PURE__ */ Object.create(null);
  for (const key in props) {
    const value = props[key];
    if (value !== void 0) {
      filteredProps[key] = value;
    }
  }
  return filteredProps;
};
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
const Meta = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const appStore = useAppStore();
    storeToRefs(appStore);
    useSavedItemStore();
    const { getProduct } = useProductStore();
    const cartStore = useCartStore();
    const route = useRoute();
    const { cart } = storeToRefs(cartStore);
    const {
      priceAfterDiscount,
      currencyFormat,
      discountPercentage,
      capitalizeFirstLetter,
      getFullnames,
      getAddress
    } = useHelpers();
    const productId = route.params.id;
    const product = ref(([__temp, __restore] = withAsyncContext(() => getProduct(productId)), __temp = await __temp, __restore(), __temp));
    ref(0);
    ref(
      priceAfterDiscount(product.value.price, product.value.discount)
    );
    ref(product.value.thumbnail);
    ref("");
    ref("");
    ref(0);
    ref((_a = product.value.totalStock) != null ? _a : 0);
    ref(0);
    const quantity = ref(1);
    computed(() => {
      return [product.value.thumbnail, ...product.value.images];
    });
    computed(() => {
      return cart.value.find(
        (i) => i.productId === product.value.productId && i.quantity === quantity.value
      );
    });
    computed(() => {
      return quantity.value * priceAfterDiscount(product.value.price, product.value.discount);
    });
    computed(() => {
      return getAddress(product.value.business.address);
    });
    computed(() => {
      return product.value.stock.map((s) => s.size).filter((v) => v !== "");
    });
    computed(() => {
      return product.value.stock.map((s) => s.color).filter((v) => v !== "");
    });
    [
      { title: "Home", route: "/shop" },
      { title: String(product.value.productName).toLowerCase() }
    ];
    ref(false);
    useChatStore();
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-a89299ef><div class="" data-v-a89299ef>`);
      _push(ssrRenderComponent(_component_Title, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(product).productName)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(product).productName), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Meta, {
        name: "og:title",
        content: unref(product).productName
      }, null, _parent));
      _push(ssrRenderComponent(_component_Meta, {
        name: "og:image",
        content: unref(product).image
      }, null, _parent));
      _push(ssrRenderComponent(_component_Meta, {
        name: "og:description",
        content: unref(product).description
      }, null, _parent));
      _push(ssrRenderComponent(_component_Meta, {
        name: "twitter:title",
        content: unref(product).productName
      }, null, _parent));
      _push(ssrRenderComponent(_component_Meta, {
        name: "twitter:image",
        content: unref(product).image
      }, null, _parent));
      _push(ssrRenderComponent(_component_Meta, {
        name: "twitter:description",
        content: unref(product).description
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/product/[name]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a89299ef"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-SNtOIgXR.mjs.map
