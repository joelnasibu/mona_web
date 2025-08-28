<template>
  <div>
    <div class="">
      <div class="my-10" v-for="prod in productsPerCategory" :key="prod.id">
        <core-title2 :title="`Popular in ${String(prod.category.category).toLowerCase()} `" />
        <div class="mt-5">
          <v-container class="mt-2">
            <v-row v-if="!prod && prod?.produts.length == 0">
              <v-col cols="6" xs="6" sm="6" md="2" lg="2" v-for="i in listing" :key="i">
                <CoreSkeleton></CoreSkeleton>
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col cols="6" xs="6" sm="6" md="2" lg="2" class="px-1" v-for="product in prod.products.slice(0, 6)" :key="product.id">
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
      </div>
    </div>
    <div class="">
      <core-title2 title="Featured categories" />
      <div class="overflow-auto hide-scrollbar" style="white-space: nowrap">
        <div class="mt-5">
          <v-card v-for="({ category, image }, i) in categories" :key="i" flat
            class="bg-transparent h-100 rounded-lg card-content mx-3 py-1" style="display: inline-block" :to="{
              name: 'shop-name',
              params: { name: sanitizeTitleForRoute(category) },
            }">
            <div class="d-flex flex-column align-center w-100 h-100">
              <v-card class="w-100 h-100 overflow-hidden rounded-0" flat style="inset: 0">
                <v-img class="mx-auto" :src="image" :lazy-src="image" height="100%" width="60%" contain></v-img>
              </v-card>
              <div class="mt-5 text-subtitle-2 text-capitalize" style="word-break: break-all !important">
                <b>{{ category.toLowerCase() }}</b>
              </div>
            </div>
          </v-card>
          <!-- <v-card
            v-for="({ category, image }, i) in categories"
            flat
            class="bg-transparent h-100 position-relative rounded-lg card-content mx-3"
            style="display: inline-block"
          >
            <v-card
              class="position-absolute w-100 h-100 overflow-hidden rounded-0"
              flat
              style="inset: 0"
            >
              <v-img
                :src="image"
                :lazy-src="image"
                height="100%"
                contain
                style="opacity: 0.7"
              ></v-img>
            </v-card>
            <v-card
              flat
              class="d-flex flex-column pa-3 overlay text-white h-100"
              rounded="0"
            >
              <div
                class="text-subtitle-2 text-capitalize"
                style="max-width: 15ch"
              >
                <b>{{ String(category).toLowerCase() }}</b>
              </div>
              <div class="mt-auto">
                <v-btn
                  class="text-caption text-nonne"
                  color="primary"
                  flat
                  rounded
                  :to="{
                    name: 'shop-name',
                    params: { name: sanitizeTitleForRoute(category) },
                  }"
                >
                  <span>View all</span>
                </v-btn>
              </div>
            </v-card>
          </v-card> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();
const { isMobile } = useDevice();
const { sanitizeTitleForRoute } = useHelpers();

//  provided from shop page
const categoriesList = inject("categoriesList");
const productsList = inject("productsList");

const categories = computed(() => {
  return categoriesList.value;
  // .filter((c) => c.image.length > 0)
  // .slice(0, 10)
});

const listing = computed(() => {
  return isMobile || smAndDown ? 2 : 6;
})


const productsPerCategory = computed(() => {
  let prodsPerCategories = [];
  categoriesList.value.forEach((cat) => {
    let products = productsList.value.filter(
      (p) => cat.category === p.category.name
    );
    prodsPerCategories.push({
      category: cat,
      products,
    });
  });

  return prodsPerCategories
    .sort((a, b) => (a.products.length > b.products.length ? -1 : 1))
    .slice(0, 3);
});

// const catImages = [
//   "https://www.dein-inspirations-trio.de/wp-content/uploads/2022/12/Pflegeprodukte_nadianb.jpg",
//   "https://cdn.thomasnet.com/insights-images/embedded-images/a70d646f-c0a8-4a68-83bb-07548aca9ed3/283f8c9e-b4a7-447c-b394-7ec0f2a2724e/FullHD/shutterstock_286796789-min.jpg",
// ];

import ProductModel from "~/models/product";
const goTo = (product) => {
  let productModel = new ProductModel(product);
  productModel.navigateToProductDetails();
};
</script>

<style lang="css" scoped>
.card-content {
  width: 150px;
  aspect-ratio: 1/1;
}
</style>
