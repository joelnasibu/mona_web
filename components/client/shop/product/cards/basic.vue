<template>
  <div class="position-relative card-outlined rounded-lg overflow-hidden">
    <div class="position-absolute" style="top: 0; right: 0; z-index: 2" v-if="product.discount > 0">
      <client-shop-product-deal :payload="product" :discount="product.discount" />
    </div>
    <v-card class="bg-transparent pa-2 product-card" flat>
      <v-card flat height="150" class="d-flex align-center">
        <v-img :src="product.thumbnail" :lazy-src="product.thumbnail"></v-img>
      </v-card>
      <div class="text-caption d-flex flex-column mt-2">
        <div class="one-line">
          <span>{{ product.productName }}</span>
        </div>
        <div class="">
          <client-shop-product-prices :small="true" :payload="product" :discount="product.discount" />
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>

<style lang="css" scoped></style>
