<template>
  <ClientOnly>
    <v-navigation-drawer
      color="card"
      location="end"
      class="hide-scrollbar"
      temporary
      width="300"
      v-model="cartDrawerState"
    >
      <v-list density="compact" class="pa-2 hide-scrollbar">
        <div v-for="product in cart" :key="product.id">
          <v-list-item class="px-0">
            <!-- Product Image -->
            <template v-slot:prepend>
              <v-card
                flat
                class="rounded-0 bg-transparent"
                width="71"
                height="70"
              >
                <v-img
                  :src="product.thumbnail ?? product.image"
                  :lazy-src="product.thumbnail ?? product.image"
                />
              </v-card>
            </template>

            <!-- Product Details -->
            <div class="text-caption pl-2">
              <p class="break-word">{{ product.productName }}</p>
              <p>
                <b>{{ currencyFormat(product.price) }}</b>
              </p>

              <!-- Quantity + Remove -->
              <div class="d-flex justify-space-between align-center">
                <ClientShopProductQuantity
                  :quantity="product.quantity"
                  :small="true"
                  @change="(delta) => cartStore.increaseQuantity(product, delta > 0)"
                />

                <v-btn
                  size="x-small"
                  variant="text"
                  title="Remove"
                  icon="mdi-close"
                  @click="cartStore.toggleProductInCart(product)"
                />
              </div>
            </div>
          </v-list-item>

          <v-divider class="my-1"></v-divider>
        </div>
      </v-list>

      <!-- Footer -->
      <template v-slot:append>
        <div class="pa-2">
          <div
            class="d-flex justify-space-between align-center py-3 text-body-2"
          >
            <b>Subtotal</b>
            <div class="text-h6 text-secondary-accent">
              <strong>{{ currencyFormat(cartStore.subTotal) }}</strong>
            </div>
          </div>
          <v-btn
            block
            color="primary-accent"
            class="text-uppercase text-caption"
            :to="{ path: '/shop/checkout' }"
          >
            <span>Checkout</span>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </ClientOnly>
</template>

<script setup>
const emits = defineEmits(["close"]);

const { currencyFormat } = useHelpers();

import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();
const { opened, cart } = storeToRefs(cartStore);

const cartDrawerState = computed({
  get() {
    return opened.value;
  },
  set() {
    cartStore.toggleCartStatus();
  },
});
</script>

<style lang="css" scoped></style>
