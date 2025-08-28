<template>
  <v-carousel
    class="position-relative py-0 overflow-hidden rounded-lg"
    continuous
    cycle
    interval="10000"
    :touch="false"
    :show-arrows="false"
    :height="isMobile ? '100%' : 300"
  >
    <v-carousel-item :height="isMobile ? '100%' : 300" v-for="i in 3" :key="i">
      <v-card
        flat
        class="bg-transparent position-relative overflow-hidden rounded-sm d-flex align-center justify-center"
        height="100%"
        width="100%"
      >
        <v-img
          :src="`/images/banners/${i}.jpg`"
          :lazy-src="`/images/banners/${i}.jpg`"
          contain
        ></v-img>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const { shuffleArray } = useHelpers(),
  { isMobile } = useDevice();

//  provided from shop page
const productsList = inject("productsList");
const products = computed(() => {
  let prods = productsList.sort((a, b) =>
    a.dateCreated > b.dateCreated ? 1 : -1
  );
  return shuffleArray(prods).slice(0, 5);
});

const banners = [3, 4, 5];
</script>

<style lang="css" scoped></style>
