<template>
  <div>
    <v-carousel
      v-model="current"
      :show-arrows="false"
      cycle
      height="400"
      style="width: 1300px"
      hide-delimiters
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        :value="i"
        cover
        class="relative"
      >
        <!-- Content  bottom-left -->
        <div class="absolute inset-0 flex items-end mt-16">
          <div class="pb-8 pl-16 sm:pl-12 md:pl-16 text-left">
            <h2 class="text-3xl font-bold text-white drop-shadow-lg pt-16 mt-16">
              {{ item.title }}
            </h2>
            <p class="text-lg text-white mt-1 pt-4 drop-shadow">
              {{ item.text }}
            </p>
            <v-btn
              color="orange"
              variant="flat"
              class="px-6 py-2 text-white mt-7 shadow-lg hover:scale-105 transition-transform"
            >
              {{ item.button }}
            </v-btn>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>

    <!-- Custom indicators -->
    <div class="relative z-30 flex justify-center -mt-2 space-x-3">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="h-3 rounded-full cursor-pointer transition-all duration-100"
        :class="current === i ? 'bg-orange-500 w-10' : 'bg-gray-300 w-6'"
        @click="current = i"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const current = ref(0);

const items = [
  {
    src: new URL('@/assets/images/categories/pexe.jpg', import.meta.url).href,
    title: "Let your home reflect",
    text: "The beauty hidden inside",
    button: "Shop Now",
  },
  {
    src: new URL('@/assets/images/categories/pex.jpg', import.meta.url).href,
    title: "Let’s Us Help",
    text: "Explore the variety you deserve",
    button: "Shop Now",
  },
  {
    src: new URL('@/assets/images/categories/Nairobi-.avif', import.meta.url).href,
    title: "Best Deals Everyday",
    text: "Save big on top products",
    button: "Shop Now",
  },
];
</script>
