<template>
  <v-card class="bg-transparent pa-2 d-flex ga-3" flat @click="goTo">
    <div class="">
      <v-card flat height="150" width="120" class="d-flex align-center basic-list">
        <v-img :src="product.thumbnail" :lazy-src="product.thumbnail"></v-img>
      </v-card>
    </div>
    <div class="text-caption text-md-body-2 d-flex flex-column mt-2">
      <div class="two-lines">
        <span>{{ product.productName }}</span>
      </div>
      <div class="my-1">
        <div class="text-caption text-md-subtitle-1">
          <client-shop-product-prices :small="true"  :payload="product" :discount="product.discount" />
        </div>
        <ClientShopProductFullRating :rating="product.rating" />
      </div>
      <div class="text-caption text-grey-darken-1 three-lines">
        <span v-html="`${String(product.description).toLowerCase()}`"></span>
      </div>
    </div>
    <div class="ml-auto">
      <v-btn class="card-outlined rounded-lg" :icon="`mdi-heart${wishlist || product.isSaved ? '' : '-outline'}`"
        color="primary-accent" variant="text" size="small" :title="wishlist || product.isSaved
            ? 'Remove from wishlist'
            : 'Add to wishlist'
          " @click.stop="toggleWishlist" :loading="loading"></v-btn>
    </div>
  </v-card>
</template>

<script setup>
const props = defineProps({
  product: Object,
  wishlist: Boolean,
});
const emits = defineEmits(["toggleWishList"]);

import { useAppStore } from "~/store/app";
const { loading, error, currentUser } = storeToRefs(useAppStore());

import { useSavedItemStore } from "~/store/saved-items";
const { saveItem, deleteSavedItem } = useSavedItemStore();

import ProductModel from "~/models/product";
const goTo = () => {
  let productModel = new ProductModel(props.product);
  productModel.navigateToProductDetails();
};

const toggleWishlist = async () => {
  props.wishlist || props.product.isSaved
    ? await deleteSavedItem(props.product.id)
    : await saveItem({
      userId: currentUser.value.userId,
      itemId: props.product.id,
      type: "products",
    });

  if (!error.value) emits("toggleWishlist");
};
</script>

<style lang="css" scoped>
/* .basic-list {
  width: clamp(130px, 30%, 180px) !important;
} */
</style>
