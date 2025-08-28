<template>
  <v-carousel
    v-model="current"
    :show-arrows="false"
    cycle
    height="500"
    hide-delimiters
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      :value="i"
      cover
    >
      <div class="absolute inset-0 bg-black/40 z-10"></div>

      <!-- Text container pinned bottom-left -->
      <div
        class="absolute bottom-0 left-0 z-20 pl-6 sm:pl-16 md:pl-24 w-full md:w-2/3 lg:w-1/2 flex flex-col items-start pb-6"
      >
        <h2 class="text-3xl font-bold text-white mb-2">
          {{ item.title }}
        </h2>
        <p class="text-lg text-white mb-4">
          {{ item.text }}
        </p>
        <v-btn color="orange" variant="flat" class="px-6 py-2 text-white rounded-full">
          {{ item.button }}
        </v-btn>
      </div>
    </v-carousel-item>
  </v-carousel>

  <!-- Custom pill indicators -->
  <div class="relative z-30 flex justify-center -mt-6 space-x-3">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="h-3 rounded-full cursor-pointer transition-all duration-300"
      :class="current === i ? 'bg-orange-500 w-10' : 'bg-gray-300 w-6'"
      @click="current = i"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const current = ref(0);

const items = [
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
    title: "Let your home reflect",
    text: "The beauty hidden inside",
    button: "Shop Now",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
    title: "Let’s Us Help",
    text: "Explore the variety you deserve",
    button: "Shop Now",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
    title: "Best Deals Everyday",
    text: "Save big on top products",
    button: "Shop Now",
  },
];
</script>

<style scoped>
.v-carousel-item {
  position: relative;
}
.transition-all {
  transition: all 0.3s ease;
}
</style>
