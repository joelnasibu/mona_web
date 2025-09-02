<template>
  <v-container fluid class="pa-6 section-wrapper">
    <!-- Page Title -->
    <div class="section-header mb-6">
      <h2 class="text-h5 font-weight-bold mb-2">Latest Products</h2>
      <div class="section-underline"></div>
    </div>

    <!-- Sections Row -->
    <v-row dense class="justify-space-between">
      <v-col
        v-for="(section, sIndex) in sections"
        :key="sIndex"
        cols="12"
        md="4"
        class="pa-2"
      >
        <!-- Section container with smoke background and fixed height -->
        <v-container fluid class="pa-3 section-container">
          <div class="text-h6 font-weight-bold mb-3">{{ section.title }}</div>

          <!-- Nested row with 3 images horizontally -->
          <div class="d-flex justify-center nested-row">
            <div
              v-for="(product, pIndex) in section.products"
              :key="pIndex"
              class="d-flex flex-column align-center nested-product"
            >
              <v-hover v-slot="{ isHovering, props }">
                <v-img
                  v-bind="props"
                  :src="product.img"
                  height="80"
                  width="80"
                  cover
                  class="rounded-lg mb-1 product-img"
                  :class="{ 'hover-active': isHovering }"
                ></v-img>
              </v-hover>

              <div class="text-center text-caption mb-1">$ {{ product.price }}</div>

              <div
                v-if="section.title === 'New Arrivals'"
                class="text-orange-darken-2 text-body-2"
              >
                Trending
              </div>
              <div
                v-else-if="section.title === 'Top Ranking'"
                class="text-grey-darken-2 text-body-2"
              >
                {{ product.unitsLeft }} left
              </div>
            </div>
          </div>
        </v-container>
      </v-col>
    </v-row>

    <div class="mt-6 pl-4">
      <NuxtLink to="/products" class="text-orange-darken-2 font-weight-medium">
        see more..
      </NuxtLink>
    </div>
  </v-container>
</template>

<script setup>
const sections = [
  {
    title: "New Arrivals",
    products: [
      { img: "/images/categories/women-fashion.jpeg", price: 25 },
      { img: "/images/categories/movies.jpeg", price: 18 },
      { img: "/images/categories/home.jpeg", price: 20 }
    ]
  },
  {
    title: "Top Ranking",
    products: [
      { img: "/images/categories/computers.jpeg", price: 50, unitsLeft: 10 },
      { img: "/images/categories/industrial.jpeg", price: 30, unitsLeft: 5 },
      { img: "/images/categories/health.jpeg", price: 45, unitsLeft: 8 }
    ]
  },
  {
    title: "Personal Protective Equipment",
    products: [
      { img: "/images/categories/boys-fashion.jpeg", price: 12 },
      { img: "/images/categories/baby-clothes.jpeg", price: 18 },
      { img: "/images/categories/art.jpeg", price: 22 }
    ]
  }
];
</script>

<style scoped>
.section-wrapper {
  max-width: 1200px;
  margin: 0 auto 64px auto;
  padding-left: 16px;
  padding-right: 16px;
}

.section-container {
  background-color: #f5f5f5;
  border-radius: 8px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nested-row {
  display: flex;
  justify-content: space-between;
}

.nested-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 6px;
}

.section-header {
  max-width: 1100px;
  margin: 0 auto;
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

/* Hover effect for product images */
.product-img {
  transition: all 0.3s ease-in-out;
}
.product-img.hover-active {
  transform: scale(1.08) translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
</style>
