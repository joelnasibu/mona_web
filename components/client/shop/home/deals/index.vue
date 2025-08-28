<template>
  <div class="">
    <core-title2 title="Deals and Offers" />
    <v-container class="mt-4 pa-0 card-white rounded-lg">
      <v-row class="rounded-lg overflow-hidden" :class="{ 'card-outlined': isMobile }">
        <v-col class="text-center pa-3 pa-md-2" cols="12">
          <div class="text-body-2">
            <span>Time left: </span>
            <b id="timer">-</b>
          </div>
        </v-col>
        <v-container>
          <v-row v-if="deals.length == 0">
            <v-col cols="6" xs="6" sm="6" md="2" lg="2" v-for="i in listing" :key="i">
              <CoreSkeleton></CoreSkeleton>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col cols="6" xs="6" sm="6" md="2" lg="2" v-for="(product, i) in deals" :key="i">
              <v-hover v-slot="{ isHovering, props }">
                <v-card v-bind="props" :elevation="isHovering ? 5 : 0"
                  class="bg-transparent pa-0 rounded-lg card-outlined" @click="goTo(product)">
                  <client-shop-product-cards-deal :product="product" />
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();
const { isMobile } = useDevice();
const { loading } = storeToRefs(useAppStore())
const productsList = inject("productsList");

const listing = computed(() => {
  return isMobile || smAndDown ? 2 : 6;
})

const deals = computed(() => {
  return productsList.value.filter((p) => p.discount > 0).slice(0, 6);
});

const dealTimeCounter = () => {
  if (process.client) {
    var countDownDate = new Date("March 16, 2025 15:37:25").getTime();
    var timerText = document.getElementById("timer");

    var x = setInterval(function () {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerText.innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(x);
        timerText.innerHTML = "EXPIRED";
      }
    }, 1000);
  }
};

onMounted(() => {
  dealTimeCounter();
});

import ProductModel from "~/models/product";
import { useAppStore } from "~/store/app";
const goTo = (product) => {
  let productModel = new ProductModel(product);
  productModel.navigateToProductDetails();
};
</script>

<style lang="css" scoped>
.add-border {
  border-right: 1px solid rgba(var(--v-theme-border)) !important;
}
</style>
