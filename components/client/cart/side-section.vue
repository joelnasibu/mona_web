<template>
  <div class="position-sticky" :style="`top: calc(${appBarHeight}px + 1rem)`">
    <!-- <v-card
      class="text-body-2 text-grey-darken-1 card-outlined pa-2 pa-md-4 rounded-lg"
      flat
    >
      <span>Have a coupon?</span>
      <div class="d-flex align-center ga-1 mt-2">
        <v-text-field
          label="Enter coupon"
          single-line
          hide-details
          class="rounded-0"
          variant="outlined"
          density="compact"
          bg-color="transparent"
          prepend-inner-icon="mdi-ticket-outline"
        ></v-text-field>
        <v-btn class="text-none text-caption" color="primary" variant="text">
          <span>Apply</span>
        </v-btn>
      </div>
    </v-card> -->
    <v-card class="bg-transparent pa-2 pa-md-4 text-caption rounded-lg card-outlined" flat>
      <div class="d-flex flex-column ga-3 text-grey-darken-1">
        <div class="d-flex">
          <span class="font-weight-light">Subtotal</span>
          <span class="mx-1 font-weight-light" style="font-size: 0.65rem">({{ subTotalItems }} items)</span>
          <v-spacer></v-spacer>
          <b class="">{{ currencyFormat(cartStore.subTotal) }}</b>
        </div>
        <div class="d-flex">
          <span class="font-weight-light">Shipping</span>

          <v-spacer></v-spacer>
          <b class="text-secondary">{{ currencyFormat(shipping) }}</b>
        </div>
        <div class="d-flex">
          <span class="font-weight-light">Delivery fee</span>

          <v-spacer></v-spacer>
          <b class="text-secondary">{{ currencyFormat(order.deliveryFee) }}</b>
        </div>
        <div class="d-flex">
          <span class="font-weight-light">Discount</span>

          <v-spacer></v-spacer>
          <b class="text-primary">- {{ currencyFormat(discount) }}</b>
        </div>
      </div>
      <v-divider class="my-5"></v-divider>
      <div class="d-flex align-center text-h6">
        <b class="text-subtitle-2">Estimated Total</b>
        <v-spacer></v-spacer>
        <b>{{ currencyFormat(grandTotal) }}</b>
      </div>
      <div class="mt-3">
        <div class="text-grey text-caption">
          <p>*Tax will be calculated at checkout</p>
        </div>
        <v-btn block color="secondary" class="text-uppercase text-subtitle-2 rounded-lg" flat size="large"
          @click="handleCheckout" :loading="loader">
          <span>{{
            !checkoutPage
              ? "Checkout"
              : order.modeOfPayment === "Cash on Delivery"
                ? "Confirm order"
                : "Confirm and pay"
          }}</span>
        </v-btn>
        <div class="d-flex justify-space-between mt-5">
          <v-card class="pa-0 bg-transparent" flat height="50" width="50" v-for="(card, i) in cards" :key="i">
            <v-img :src="`/images/payments/${card}.svg`" :lazy-src="`/images/payments/${card}.svg`"></v-img>
          </v-card>
        </div>
      </div>
    </v-card>
    <v-btn size="large" color="primary-accent" prepend-icon="mdi-arrow-left"
      class="text-none text-body-2 mb-5 rounded-lg mt-2" :to="{ name: 'shop' }" block flat>
      <span>Back to shop</span>
    </v-btn>
  </div>
</template>

<script setup>
const { currencyFormat } = useHelpers();
const route = useRoute();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { currentUser, token, error } = storeToRefs(appStore);

import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
const subTotalItems = computed(() => {
  return cart.value.map((i) => i.quantity).reduce((a, b) => a + b, 0);
});
const discount = ref(0);
const shipping = ref(0);
const grandTotal = computed(() => {
  return cartStore.subTotal + shipping.value - discount.value;
});

import { useOrderStore } from "~/store/order";
const orderStore = useOrderStore();
const { order } = storeToRefs(orderStore);

const cards = [
  "apple-pay",
  "pay-pal",
  "american-express",
  "visa",
  "mastercard",
];

const appBarHeight = ref(64);
onMounted(() => {
  appBarHeight.value = document.getElementById("appBar").clientHeight;
});

const checkoutPage = computed(() => {
  return route.name === "shop-checkout";
});

const loader = ref(false);
const handleCheckout = async () => {
  if (route.name === "shop-cart") {
    if (appStore.isLoggeIn) navigateTo({ name: "shop-checkout" });
    else {
      const routeRedirect = {
        name: "shop-checkout",
        params: route.params,
      };
      appStore.setRedirect(routeRedirect);
      navigateTo({
        name: "auth",
      });
    }
  } else {
    loader.value = true;
    order.value.userId = currentUser.value.userId;
    order.value.orders = cart.value;
    order.value.total = Number(order.value.deliveryFee + grandTotal.value);
    await orderStore.createOrder(order.value);
    loader.value = false;
    if (!error.value) {
      setTimeout(() => {
        navigateTo({
          name: "shop",
        });
        orderStore.resetOrderPayload();
        cartStore.clearCart();
      }, 2000);
    }
  }
};
</script>

<style lang="css" scoped></style>
