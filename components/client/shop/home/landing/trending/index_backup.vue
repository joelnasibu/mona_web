<template>
  <div class="">
    <CoreHorizontalScroller title="Trending Now">
      <ClientShopHomeLandingTrendingCard
        v-for="(trendingProduct, i) in trendingProducts"
        :product="trendingProduct"
      />
    </CoreHorizontalScroller>
  </div>
</template>

<script setup>
// products initialisation
import { useProductStore } from "~/store/products";
const { dummyProd, publishedProducts } = useProductStore();
const list = ref(await dummyProd(15, 15));
const data = ref(await publishedProducts());
const loadDetails = async () => {};
const trendingProducts = computed(() => {
  list.value.forEach((val) => {
    if ([3, 10, 21, 4, 9, 30, 23, 15, 1].includes(val.id)) {
      val.popular = true;
    }
    if ([3, 10, 21, 5, 9, 20, 13, 5, 6, 11].includes(val.id)) {
      delete val.discountPercentage;
    }
  });
  return data.value;
});
watchEffect(() => {
  loadDetails();
});
</script>

<style lang="css" scoped></style>
