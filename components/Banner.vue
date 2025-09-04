<template>
  <v-container fluid class="pa-0">
    <v-carousel
      :show-arrows="false"
      hide-delimiters
      cycle
      height="300"
      interval="3000"
    >
      <v-carousel-item
        v-for="(banner, index) in banners"
        :key="index"
      >
        <v-img
          :src="banner"
          cover
          height="300"
          class="banner-img"
        />
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup>
const banners = [
  "/images/banners/1.jpg",
  "/images/banners/2.jpg",
  "/images/banners/3.jpg",
  "/images/banners/1.jpg",
];
</script>

<style scoped>
.banner-img {
  border-radius: 0; 
}

.v-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
