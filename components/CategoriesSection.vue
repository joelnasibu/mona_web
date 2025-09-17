<template>
  <v-container fluid class="pa-6 section-wrapper">
    <v-row dense>
      <!-- Grid 1 -->
      <v-col cols="12" md="3" class="pa-2">
        <v-container fluid class="pa-3 section-container">
          <div class="section-title">Deals and Promotions</div>
          <div class="d-flex justify-center nested-row">
            <router-link to="/shop/grid1" class="d-flex flex-column align-center nested-product">
              <v-hover v-slot="{ isHovering, props }">
                <div class="relative">
                  <v-img
                    v-bind="props"
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="85"
                    width="85"
                    cover
                    class="rounded-lg mb-2 product-img"
                    :class="{ 'hover-active': isHovering }"
                  />
                  <div class="absolute inset-0 rounded-lg overlay" :class="{ 'overlay-active': isHovering }"></div>
                </div>
              </v-hover>
              <div class="text-orange-darken-2 font-weight-bold hover-text">Shop now...</div>
            </router-link>
          </div>
        </v-container>
      </v-col>

      <!-- Grid 2 -->
      <v-col cols="12" md="3" class="pa-2">
        <v-container fluid class="pa-3 section-container">
          <div class="section-title">Shop Fashion & Lifestyle</div>
          <div class="d-flex justify-center nested-row">
            <div
              v-for="(item, i) in fashionItems"
              :key="'grid2-'+i"
              class="d-flex flex-column align-center nested-product"
            >
              <router-link :to="`/shop/grid2/item${i+1}`">
                <v-hover v-slot="{ isHovering, props }">
                  <div class="relative">
                    <v-img
                      v-bind="props"
                      :src="`https://picsum.photos/200/150?random=${30+i}`"
                      height="65"
                      width="65"
                      cover
                      class="rounded-lg mb-2 mt-4 product-img"
                      :class="{ 'hover-active': isHovering }"
                    />
                    <div class="absolute inset-0 rounded-lg overlay" :class="{ 'overlay-active': isHovering }"></div>
                  </div>
                </v-hover>
              </router-link>
              <div class="text-caption text-orange-darken-2 hover-text">{{ item }}</div>
            </div>
          </div>
        </v-container>
      </v-col>

      <!-- Grid 3 -->
      <v-col cols="12" md="3" class="pa-2">
        <v-container fluid class="pa-3 section-container">
          <div class="section-title">Handmade & Crafts</div>
          <div class="d-flex justify-center nested-row">
            <div
              v-for="(sub, i) in handmadeSubs"
              :key="'grid2-'+i"
              class="d-flex flex-column align-center nested-product"
            >
              <router-link :to="`/shop/grid3/item${i+1}`">
                <v-hover v-slot="{ isHovering, props }">
                  <div class="relative">
                    <v-img
                      v-bind="props"
                      :src="`https://picsum.photos/200/150?random=${40+i}`"
                      height="65"
                      width="65"
                      cover
                      class="rounded-lg mb-4 mt-4 product-img"
                      :class="{ 'hover-active': isHovering }"
                    />
                    <div class="absolute inset-0 rounded-lg overlay" :class="{ 'overlay-active': isHovering }"></div>
                  </div>
                </v-hover>
              </router-link>
              <div class="text-caption  text-orange-darken-2 hover-text">{{ sub }}</div>
            </div>
          </div>
        </v-container>
      </v-col>

      <!-- Grid 4 -->
      <v-col cols="12" md="3" class="pa-2">
        <v-container fluid class="pa-3 section-container">
          <div class="section-title">Premium & Curated</div>
          <div class="d-flex justify-center nested-row">
            <router-link to="/shop/grid4" class="d-flex flex-column align-center nested-product">
              <v-hover v-slot="{ isHovering, props }">
                <div class="relative">
                  <v-img
                    v-bind="props"
                    src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
                    height="85"
                    width="85"
                    cover
                    class="rounded-lg mb-2 product-img"
                    :class="{ 'hover-active': isHovering }"
                  />
                  <div class="absolute inset-0 rounded-lg overlay" :class="{ 'overlay-active': isHovering }"></div>
                </div>
              </v-hover>
              <div class="text-orange-darken-2 font-weight-bold hover-text">Shop now...</div>
            </router-link>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const fashionItems = ["Clothing", "Accessories"];
const handmadeSubs = ["Jewelry", "Artwork"];
</script>

<style scoped>
.section-wrapper {
  max-width: 1150px;   /* same centered width */
  margin: 0 auto;      /* center horizontally */
 
  margin-bottom: 2px; /* reduced bottom space */
}


.section-container {
  background-color: #f5f5f5;
  border-radius: 10px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.nested-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.nested-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 6px;
  position: relative;
}

.product-img {
  transition: all 0.3s ease-in-out;
}
.product-img.hover-active {
  transform: scale(1.08) translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.overlay {
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s ease-in-out;
}
.overlay-active {
  background-color: rgba(0, 0, 0, 0.35);
}

.hover-text {
  
  transition: color 0.3s ease, transform 0.3s ease;
}
.hover-text:hover {
  color: black;
  transform: translateY(-2px);
}

@media (max-width: 960px) {
  .section-container {
    height: auto;
    padding: 16px;
  }
  .nested-row {
    justify-content: center;
  }
  .nested-product {
    margin-bottom: 12px;
  }
}
</style>
