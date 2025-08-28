<template>
  <ClientOnly>
    <CoreMidScreenLayout class="py-2 position-relative pb-10" :lg="10" :xl="9">
      <v-container class="pa-0" fluid>
        <v-row class="ma-auto" v-if="cart.length > 0">
          <v-col cols="12" class="pt-5">
            <div class="text-subtitle-1" style="font-size: 18px">
              <b>My cart ({{ cart.length }})</b>
            </div>
          </v-col>
        </v-row>
        <v-row
          class="ma-auto checkout"
          justify="space-between"
          v-if="cart.length > 0"
        >
          <v-col cols="12" sm="8">
            <ClientCart />
          </v-col>
          <v-col cols="12" sm="4" class="">
            <ClientCartSideSection />
          </v-col>
        </v-row>
        <ClientCartEmpty v-else />
        <!-- <div class="py-10">
          <ClientCartOthers />
        </div> -->
        <!-- <ClientCartDiscountBanner /> -->
      </v-container>
    </CoreMidScreenLayout>
  </ClientOnly>
</template>

<script setup>
import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

useSeoMeta({
  title: "My cart",
});
</script>

<style lang="css" scoped></style>
