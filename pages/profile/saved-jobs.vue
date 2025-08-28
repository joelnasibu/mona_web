<template>
  <div class="px-4">
    <div class="text-h5 pt-8">
      <b>My Saved Jobs</b>
    </div>
    <div class="d-flex align-center ga-2 my-4">
      <AdminCoreSearch :search="search" @search="setSearch" />

      <div class="">
        <v-btn
          class="text-caption card-outlined rounded-lg"
          variant="text"
          size="small"
          id="sortBy"
          prepend-icon="mdi-sort"
        >
          <span>Sort by {{ String(sort).toLowerCase() }}</span>
        </v-btn>
        <AdminCoreSelect
          activator="#sortBy"
          :list="['Newest', 'Oldest', 'High salary', 'Lower salary']"
          :list-value="sort"
          @set-item="setSort"
        />
      </div>
    </div>
    <div class="d-flex flex-column ga-4 mt-8">
      <div v-for="job in filteredJobs">
        <ClientJobsJobCard :job="job" :saved="true" />
      </div>
      <div
        class="py-10 my-10 py-md-15 my-md-15 text-disabled text-center"
        v-if="!filteredJobs.length || loading"
      >
        <span v-if="loading">Loading jobs...</span>
        <span v-else>No job found</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  currencyFormat,
  capitalizeFirstLetter,
  filterDataPerField,
  dateFormat_Month,
  numberFormat,
} = useHelpers();

import { useAppStore } from "~/store/app";
const { loading } = storeToRefs(useAppStore());

import { useSavedItemStore } from "~/store/saved-items";
const { savedItems } = useSavedItemStore();
const data = ref([]);
const getData = async () => {
  data.value = await savedItems("jobs");
  //
};
watchEffect(() => {
  getData();
});

const sort = ref("Newest");
const setSort = (val) => {
  sort.value = val;
};
const search = ref("");
const setSearch = (val) => {
  search.value = val;
};
const filteredJobs = computed(() => {
  const unsortedData = filterDataPerField(data.value, search.value);
  if (sort.value === "Newest" || sort.value === "Oldest")
    return unsortedData.sort((a, b) => {
      if (a.dateCreated > b.dateCreated)
        if (sort.value === "Newest") return -1;
        else return 1;
    });
  if (sort.value === "High salary" || sort.value === "Lower salary")
    return unsortedData.sort((a, b) => {
      if (
        a.salaryRange.reduce((a, b) => a + b, 0) >
        b.salaryRange.reduce((a, b) => a + b, 0)
      ) {
        if (sort.value === "High salary") return -1;
        else return 1;
      }
    });
});
</script>

<style lang="css" scoped></style>
