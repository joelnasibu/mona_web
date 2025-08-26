<template>
  <div class="d-flex flex-column align-start">
    <b :class="{
      'text-decoration-line-through text-disabled': payload.discount && payload.discount > 0
    }">{{ product_price }}</b>
    <b v-if="payload.discount && payload.discount > 0" class="">{{ discountedPrice }}</b>
  </div>
</template>

<script setup>
const props = defineProps({
  small: {
    type: Boolean,
    default: true,
  },
  payload: Object,
  price: [String, Number],
  discount: [String, Number],
});

const { priceAfterDiscount, pricesAfterDiscount, currencyFormat, roundDiscountPercentage } =
  useHelpers();

const stockPricesList = computed(() => props.payload.stock.map(i => i.price))

const maxPrice = computed(() => {
  return Math.max(...stockPricesList.value)
})

const minPrice = computed(() => {
  return Math.min(...stockPricesList.value)
})


const product_price = computed(() => {
  return props.payload.stock.length > 1 && minPrice.value < maxPrice.value
    ? `${currencyFormat(minPrice.value)} - ${currencyFormat(maxPrice.value)}`
    : currencyFormat(props.payload.price)
})

const discountedPrice = computed(() => {
  return props.payload.stock.length > 1 && minPrice.value < maxPrice.value
    ? pricesAfterDiscount(stockPricesList.value, props.payload.discount)
    : currencyFormat(priceAfterDiscount(props.payload.price, props.payload.discount))
})

</script>

<style lang="scss" scoped></style>
