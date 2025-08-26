<template>
  <div class="pa-2 pa-md-5 d-flex flex-column card-white card-outlined rounded-lg">
    <div class="" v-for="(
        {
          image,
          thumbnail,
          productName,
          quantity,
          price,
          model,
          brand,
          business,
        },
          i
      ) in cart" :key="i">
      <div class="d-flex align-center">
        <div class="pa-2 bg-transparent card-outlined rounded" style="height: fit-content">
          <v-card flat width="80" height="60" class="rounded">
            <v-img :src="thumbnail ?? image" :lazy-src="thumbnail ?? image" contain height="100%" width="100%"></v-img>
          </v-card>
        </div>
        <div class="px-3 text-caption w-100">
          <p class="break-word item-title">
            <b>{{ productName }}</b>
          </p>
          <div class="text-caption mt-1 w-100">
            <ClientShopProductRatings :rating="4.1" />
            <p class="text-disabled">Seller: {{ business.businessName }}</p>
            <div class="w-100 d-flex flex-wrap">
              <span class="text-disabled">Model: {{ model }}, Brand: {{ brand }}</span>
              <v-spacer></v-spacer>
              <b>{{ currencyFormat(price) }} each</b>
            </div>
          </div>
        </div>
      </div>
      <v-divider color="grey" class="my-1"></v-divider>
      <div class="d-flex justify-space-between align-center text-caption">
        <ClientShopProductQuantity :quantity="quantity" @increase="cartStore.increaseQuantity(cart[i], true)"
          @decrease="cartStore.increaseQuantity(cart[i], false)" />
        <div class="d-flex align-center ga-2">
          <span class="text-primary-accent cursor-pointer" @click="cartStore.toggleProductInCart(cart[i])">Remove</span>
          <!-- <v-divider vertical></v-divider>
          <span
            class="text-primary-accent cursor-pointer"
            @click="toggleWishlist"
            >Save for later</span
          > -->
        </div>
      </div>
      <v-divider color="black" class="my-4"></v-divider>
    </div>
    <div class="py-2 d-flex align-center justify-space-between">
      <v-btn variant="text" class="text-caption text-none" prepend-icon="mdi-arrow-left" color="primary-dark"
        size="small" :to="{ name: 'shop' }">
        <span>Back to shop</span>
      </v-btn>
      <v-btn variant="text" class="text-caption text-none" prepend-icon="mdi-delete-outline" color="link" size="small"
        @click="cartStore.clearCart()">
        <span>Remove all</span>
      </v-btn>
    </div>
  </div>
</template>

<script setup>
const { currencyFormat } = useHelpers();
const route = useRoute();

import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();
const { opened, cart } = storeToRefs(cartStore);

import { useAppStore } from "~/store/app";
const appStore = useAppStore(),
  { loading, error, currentUser } = storeToRefs(appStore);

import { useSavedItemStore } from "~/store/saved-items";
const { saveItem, deleteSavedItem } = useSavedItemStore();

const toggleWishlist = async () => {
  if (appStore.isLoggeIn) {
    product.value.isSaved
      ? await deleteSavedItem(product.value.id)
      : await saveItem({
        userId: currentUser.value.userId,
        itemId: product.value.id,
        type: "products",
      });

    if (!error.value) product.value = await getProduct(productId);
  } else {
    const routeRedirect = {
      name: "shop-cart",
      params: route.params,
    };
    appStore.setRedirect(routeRedirect);
    navigateTo({
      name: "auth",
    });
  }
};
</script>

<style lang="css" scoped>
.item-title {
  -webkit-line-clamp: 2;
}
</style>
