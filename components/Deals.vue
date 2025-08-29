<template>
  <v-container fluid class="pa-6">
  
    <div>
      <!-- Section Title -->
      <div class="d-flex flex-column mb-6">
        <h2 class="text-h5 font-weight-bold mb-2">Deals of the week</h2>
        <div class="bg-grey-lighten-2" style="height: 2px; width: 100%; max-width: 600px;"></div>
      </div>

      <!-- Products Grid -->
      <v-row dense class="px-4 justify-space-between">
        <v-col
          v-for="(product, index) in products"
          :key="index"
          cols="12"
          sm="6"
          md="2"
          class="d-flex flex-column align-center"
        >
          <!-- Product Image -->
          <v-img
            :src="product.img"
            :lazy-src="product.img"
            height="200"
            width="100%"
            cover
            class="rounded-lg hoverable mb-3"
          ></v-img>

          <!-- Text + Icons below image -->
          <div class="d-flex justify-space-between align-center w-100">
            <!-- Left: Price + Product Name -->
            <div>
              <div class="text-caption text-grey-darken-1">$ {{ product.price }}</div>
              <div class="text-body-2 font-weight-medium">{{ product.name }}</div>
            </div>

            <div class="d-flex gap-2">
              <Heart size="18" class="cursor-pointer text-grey-darken-2 hover:text-red-500" />
              <ShoppingCart size="18" class="cursor-pointer text-grey-darken-2 hover:text-orange-darken-2" />
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="mt-6 pl-4">
        <NuxtLink to="/products" class="text-orange-darken-2 font-weight-medium">
          see more..
        </NuxtLink>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { Heart, ShoppingCart } from "lucide-vue-next";

const products = [
  { name: "Electronics", price: 10, img: "/images/categories/electronics.jpeg" },
  { name: "Automotive", price: 20, img: "/images/categories/automotive.jpeg" },
  { name: "Beauty", price: 30, img: "/images/categories/beauty.jpeg" },
  { name: "Computers", price: 40, img: "/images/categories/computers.jpeg" },
  { name: "Art", price: 50, img: "/images/categories/art.jpeg" }
];
</script>

<style scoped>
.gap-2 {
  gap: 8px;
}
</style>
