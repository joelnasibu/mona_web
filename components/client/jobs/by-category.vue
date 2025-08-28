<template>
  <v-container>
    <div class="">
      <CoreTitle2 title="Jobs by category" />
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" v-for="cat in featuredCategories" :key="cat.id">
          <v-card class="rounded-lg card-outlined" flat :to="{
            name: 'jobs-search',
            query: {
              category: capitalizeFirstLetter(cat.category),
            },
          }">
            <div>
              <v-img :src="cat.image" width="100%" height="130px" cover></v-img>
            </div>
            <div class="pa-2 pa-md-4">
              <div class="text-subtitle-2 one-line">
                <span>{{ capitalizeFirstLetter(cat.category) }}</span>
              </div>
              <div class="text-grey mt-1 text-subtitle-2">
                <span>({{ jobsPerCategory(cat.category) }} Jobs)</span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-center align-center text-primary-accent text-subtitle-2">
            <span class="cursor-pointer" @click="expand = !expand">View {{ expand ? "less" : "more" }} categories</span>
            <v-icon end :icon="`mdi-chevron-${expand ? 'up' : 'down'}`" size="small"></v-icon>
          </div>
        </v-col>
      </v-row>
      <v-expand-transition>
        <div class="" v-if="expand">
          <div class="d-flex justify-center flex-wrap ga-2 ga-md-3 mt-4">
            <v-card flat :to="{
              name: 'jobs-search',
              query: {
                category: capitalizeFirstLetter(cat.category),
              },
            }" class="card-outlined py-2 px-5 text-body-2 rounded-xl bg-card" v-for="cat in otherCategories"
              :key="cat.id">
              <span>{{ capitalizeFirstLetter(cat.category) }}</span>
              <span class="text-grey-darken-1 ml-1">({{ jobsPerCategory(cat.category) }} jobs)</span>
            </v-card>
          </div>
        </div>
      </v-expand-transition>
    </v-container>
  </v-container>
</template>

<script setup>
const { capitalizeFirstLetter, currencyFormat } = useHelpers();

import { useCategoryStore } from "~/store/categories";
const { getCategoriesByType } = useCategoryStore();
const allCategories = ref(await getCategoriesByType(false, "JOB")),
  featuredCategories = computed(() => {
    return allCategories.value.slice(0, 4);
  }),
  otherCategories = computed(() => {
    return allCategories.value.slice(4, allCategories.value.length);
  });

const publishedJobs = inject("publishedJobs"),
  featured = computed(() => {
    return publishedJobs.value.slice(0, 4);
  }),
  jobsPerCategory = (categoryName) => {
    let jobs = publishedJobs.value.filter(
      (j) => j.category.name === categoryName
    );
    return jobs.length;
  };

const expand = ref(false);
//
</script>

<style lang="css" scoped></style>
