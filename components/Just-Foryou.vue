<template>
  <v-container fluid class="pa-6 section-wrapper">
    <div>
      <!-- Section Title -->
      <div class="section-header mb-8">
        <h2 class="text-h5 font-weight-bold mb-2">Deals Just for You</h2>
        <div class="section-underline"></div>
      </div>

      <!-- Products Grid -->
      <v-row :gutter="24" class="px-4 justify-space-between">
        <v-col
          v-for="(product, index) in products"
          :key="index"
          cols="12"
          sm="6"
          md="6"
          lg="3"
          class="grid-card d-flex flex-column align-center"
        >
          <!-- Product Image -->
          <v-img
            :src="product.img"
            :lazy-src="product.img"
            height="200"
            width="100%"
            cover
            class="rounded-lg mb-4"
          />

          <!-- Text + Icons below image -->
          <div class="d-flex justify-space-between align-center w-100">
            <div>
              <div class="text-caption text-grey-darken-1">$ {{ product.price }}</div>
              <div class="text-body-2 font-weight-medium">{{ product.name }}</div>
            </div>

            <div class="d-flex gap-2">
              <Heart size="18" class="cursor-pointer text-grey-darken-2 hover:text-red-500" />
              <ShoppingCart size="18" class="cursor-pointer text-grey-darken-2 hover:text-orange-darken-2" />
            </div>
          </div>

          <!-- Rating Stars -->
          <div class="d-flex mt-2">
            <v-icon
              v-for="n in 5"
              :key="n"
              small
              :color="n <= product.rating ? 'yellow darken-3' : 'grey lighten-1'"
            >
              mdi-star
            </v-icon>
          </div>
        </v-col>
      </v-row>

      <!-- See More Link -->
      <div class="mt-8 pl-4">
        <NuxtLink to="/deals" class="text-orange-darken-2 font-weight-medium">
          see more..
        </NuxtLink>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { Heart, ShoppingCart } from "lucide-vue-next";

const products = [
  { name: "Electronics", price: 10, img: "/images/categories/electronics.jpeg", rating: 5 },
  { name: "Automotive", price: 20, img: "/images/categories/automotive.jpeg", rating: 4 },
  { name: "Beauty", price: 30, img: "/images/categories/beauty.jpeg", rating: 5 },
  { name: "Computers", price: 40, img: "/images/categories/computers.jpeg", rating: 4 },
  { name: "Art", price: 50, img: "/images/categories/art.jpeg", rating: 5 },
  { name: "Home Decor", price: 60, img: "/images/categories/home-decor.jpeg", rating: 4 },
  { name: "Fashion", price: 70, img: "/images/categories/fashion.jpeg", rating: 5 },
  { name: "Toys", price: 80, img: "/images/categories/toys.jpeg", rating: 4 }
];
</script>

<style scoped>
.gap-2 {
  gap: 8px;
}

/* wrapper keeps container consistent */
.section-wrapper {
  max-width: 1200px;
  margin: 0 auto 64px auto;
  padding-left: 16px;
  padding-right: 16px;
}

/* interactive card */
.grid-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.grid-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  background-color: #f9fafb;
}

/* section header styling */
.section-header {
  max-width: 1100px;
  margin: 0 auto 32px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 8px;
}

.section-underline {
  height: 2px;
  width: 100%;
  background-color: #e0e0e0;
}
</style>
