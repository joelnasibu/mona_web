import { u as useHelpers } from './useHelpers-9BVYUhTt.mjs';
import { useSSRContext, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "prices",
  __ssrInlineRender: true,
  props: {
    small: {
      type: Boolean,
      default: true
    },
    payload: Object,
    price: [String, Number],
    discount: [String, Number]
  },
  setup(__props) {
    const props = __props;
    const { priceAfterDiscount, pricesAfterDiscount, currencyFormat, roundDiscountPercentage } = useHelpers();
    const stockPricesList = computed(() => props.payload.stock.map((i) => i.price));
    const maxPrice = computed(() => {
      return Math.max(...stockPricesList.value);
    });
    const minPrice = computed(() => {
      return Math.min(...stockPricesList.value);
    });
    const product_price = computed(() => {
      return props.payload.stock.length > 1 && minPrice.value < maxPrice.value ? `${currencyFormat(minPrice.value)} - ${currencyFormat(maxPrice.value)}` : currencyFormat(props.payload.price);
    });
    const discountedPrice = computed(() => {
      return props.payload.stock.length > 1 && minPrice.value < maxPrice.value ? pricesAfterDiscount(stockPricesList.value, props.payload.discount) : currencyFormat(priceAfterDiscount(props.payload.price, props.payload.discount));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column align-start" }, _attrs))}><b class="${ssrRenderClass({
        "text-decoration-line-through text-disabled": __props.payload.discount && __props.payload.discount > 0
      })}">${ssrInterpolate(unref(product_price))}</b>`);
      if (__props.payload.discount && __props.payload.discount > 0) {
        _push(`<b class="">${ssrInterpolate(unref(discountedPrice))}</b>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/client/shop/product/prices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=prices-TYGcr06j.mjs.map
