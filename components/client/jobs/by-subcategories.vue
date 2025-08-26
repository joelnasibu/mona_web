<template>
  <div>
    <div class="w-100 text-center">
      <CoreTitle2 title="Explore jobs by job function" />
      <div class="d-flex justify-center flex-wrap ga-2 ga-md-3 mt-4">
        <v-card flat class="card-outlined py-2 px-5 text-body-2 rounded-xl bg-card" v-for="cat in subcategories"
          :key="cat.id" :to="{
            name: 'jobs-search',
            query: {
              jobFunction: capitalizeFirstLetter(cat.subcategory),
            },
          }">
          <span>{{ capitalizeFirstLetter(cat.subcategory) }}</span>
          <!-- <span class="text-grey-darken-1 ml-1"
                >({{ jobsPerCategory(cat.category) }} jobs)</span
              > -->
        </v-card>
      </div>
      <div class="d-flex justify-center align-center text-primary-accent text-subtitle-2 mt-10 mb-5">
        <span class="cursor-pointer" @click="setVisibleItems">View
          {{ visible >= data.length ? "less" : "more" }}
          functions</span>
        <v-icon end :icon="`mdi-chevron-${visible >= data.length ? 'up' : 'down'}`" size="small"></v-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
const { capitalizeFirstLetter, currencyFormat } = useHelpers();

import { useSubcategoryStore } from "~/store/subcategories";
const { getSubcategories, getSubcategoriesByType } = useSubcategoryStore(),
  data = ref(await getSubcategoriesByType(false, "job")),
  visible = ref(30),
  subcategories = computed(() => {
    return data.value
      .sort((a, b) => (a.subcategory < b.subcategory ? -1 : 1))
      .slice(0, visible.value);
  }),
  setVisibleItems = () => {
    visible.value >= data.value.length
      ? (visible.value = 30)
      : (visible.value += 30);
  };

//
</script>

<style lang="css" scoped></style>
