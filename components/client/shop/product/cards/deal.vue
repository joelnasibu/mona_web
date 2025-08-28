<template>
  <div class="position-relative pa-4" v-if="product">
    <div class="position-absolute" style="top: 5px; right: 5px; z-index: 2">
      <client-shop-product-deal :payload="product" :discount="product.discount" />
    </div>
    <v-card class="bg-transparent product-card" flat>
      <v-card flat height="200" class="d-flex align-center bg-transparent">
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
