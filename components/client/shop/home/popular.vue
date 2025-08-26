<template>
  <div>
    <core-title2 title="Featured products" />
    <v-container class="mt-2">
      <v-row v-if="products.length == 0">
        <v-col cols="6" xs="6" sm="4" md="2" lg="2" v-for="i in 6" :key="i">
          <CoreSkeleton></CoreSkeleton>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="6" xs="6" sm="4" md="2" lg="2" class="px-1" v-for="product in products" :key="product.id">
          <v-hover v-slot="{ isHovering, props }">
            <v-card v-bind="props" :elevation="isHovering ? 5 : 0" class="bg-transparent pa-0 rounded-lg" flat
              @click="goTo(product)">
              <ClientShopProductCardsBasic :product="product" />
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();

const { shuffleArray } = useHelpers();
//  provided from shop page
const productsList = inject("featuredProductsList");

const products = computed(() => {
  return shuffleArray(productsList.value).slice(0, 6);
});

import ProductModel from "~/models/product";
const goTo = (product) => {
  let productModel = new ProductModel(product);
  productModel.navigateToProductDetails();
};
</script>

<style lang="scss" scoped></style>
