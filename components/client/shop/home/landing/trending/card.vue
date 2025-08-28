<template>
  <div
    class="horizontal-scroller-card mx-3 cursor-pointer"
    id="product-sm-card"
  >
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="pa-0 h-100 w-100 card-outlined card-white rounded-lg"
        v-bind="props"
        :elevation="isHovering ? 3 : 0"
        @click="goTo()"
      >
        <div class="d-flex w-100 h-100 align-center position-relative">
          <div
            class="position-absolute px-3 bg-secondary-accent text-white text-caption"
            style="top: 0; width: fit-content; height: fit-content; z-index: 1"
            v-if="product.discountPercentage"
          >
            <span
              >-{{ roundDiscountPercentage(product.discountPercentage) }}%</span
            >
          </div>
          <div
            class="position-absolute px-2 py-1"
            style="
              top: 0;
              right: 0;
              width: fit-content;
              height: fit-content;
              z-index: 1;
            "
            v-if="product.popular"
          >
            <ClientShopProductPopular />
          </div>

          <v-card
            flat
            class="bg-transparent pa-0 h-100"
            style="width: 40%"
            rounded="0"
          >
            <v-img
              :src="product.image"
              :lazy-src="product.image"
              height="100"
            ></v-img>
          </v-card>
          <div class="mx-2" style="width: 60%">
            <div class="text-caption">
              <div class="break-word text-wrap prod-title">
                <b>{{ product.productName }}</b>
              </div>
              <div>
                <span>
                  <b
                    :class="{
                      'text-decoration-line-through text-disabled':
                        product.discountPercentage,
                    }"
                    >{{ currencyFormat(product.stock[0].price) }}</b
                  >
                  <b v-if="product.discountPercentage" class="pl-3">{{
                    priceAfterDiscount(
                      product.price,
                      roundDiscountPercentage(product.discountPercentage)
                    )
                  }}</b>
                </span>
              </div>
            </div>
            <div class="d-flex align-center text-caption">
              <ClientShopProductRatings :rating="product.rating" />
              <v-spacer></v-spacer>
              <ClientShopProductAddToWishList />
            </div>
          </div>
        </div>
      </v-card>
    </v-hover>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
});
//

const { roundDiscountPercentage, currencyFormat, priceAfterDiscount } =
  useHelpers();

import ProductModel from "~/models/product";
const goTo = () => {
  let productModel = new ProductModel(props.product);
  productModel.navigateToProductDetails();
};
</script>

<style lang="css" scoped>
.horizontal-scroller-card {
  display: inline-block;
  width: 280px;
}
.prod-title {
  -webkit-line-clamp: 1 !important;
}
</style>
