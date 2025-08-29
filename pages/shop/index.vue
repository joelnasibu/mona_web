<template>
  <v-container fluid class="pa-0">
   
    <HeroSlider />
     <CategoriesSection/>
     <FeaturedProducts />
     <LatestProducts />
     <Exclusive />
     <Banner />
     <Deals />
     <JustForyou />
     
  </v-container>
</template>

<script setup>
import HeroSlider from '~/components/HeroSlider.vue'
import CategoriesSection from '~/components/CategoriesSection.vue'
import FeaturedProducts from '~/components/FeaturedProducts.vue'
</script>
