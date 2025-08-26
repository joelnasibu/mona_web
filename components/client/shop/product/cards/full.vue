<template>
  <div class="position-relative">
    <div class="position-absolute" style="top: 4px; right: 4px; z-index: 2">
      <client-shop-product-deal :payload="product" :discount="product.discount" v-if="product.discount > 0" />
      <ClientShopProductSave :small="true" />
    </div>
    <v-card class="bg-transparent pa-2" flat @click="goTo">
      <v-card flat height="150" class="d-flex align-center">
        <v-img :src="product.thumbnail" :lazy-src="product.thumbnail"></v-img>
      </v-card>
      <div class="text-caption d-flex flex-column mt-2">
        <div class="two-line">
          <span>{{ product.productName }}</span>
        </div>
        <div class="text-caption text-md-subtitle-2">
          <client-shop-product-prices :small="true" :payload="product" :discount="product.discount" />
        </div>
        <div class="my-1">
          <ClientShopProductRatings :rating="4.1" />
        </div>
        <div class="text-caption text-grey-darken-1 two-lines">
          <span v-html="`${String(product.description).toLowerCase()}`"></span>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});

import ProductModel from "~/models/product";
const goTo = () => {
  let productModel = new ProductModel(props.product);
  productModel.navigateToProductDetails();
};
</script>

<style lang="css" scoped></style>
