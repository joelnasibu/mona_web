<template>
  <ClientOnly>
    <CoreMidScreenLayout>
      <div class="pb-2">
        <div
          class="position-sticky bg-white pt-3"
          :style="`top: 0; z-index: 2`"
        >
          <ClientJobsSearchFilters
            :filters="filtersToShow"
            @set-filters="setFilters"
            @reset-filters="resetFilters"
          />
        </div>
        <v-container>
          <v-row>
            <v-col cols="12" sm="8">
              <ClientJobsFeatured :filters="filters" :data="data" />
            </v-col>
            <v-col cols="12" sm="4">
              <ClientJobsFilters :filters="filters" @set-filters="setFilters" />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </CoreMidScreenLayout>
  </ClientOnly>
</template>

<script setup>
const route = useRoute(),
  queries = route.query,
  { capitalizeFirstLetter } = useHelpers();

import { useJobStore } from "~/store/jobs";
const { publishedJobs } = useJobStore(),
  data = ref(await publishedJobs());

// const appBarHeight = ref(64);
// onMounted(() => {
//   appBarHeight.value = document.getElementById("appBar").clientHeight;
// });

const filters = ref([
    { title: "Keyword", value: "", input: true, show: true },
    {
      title: "Job type",
      value: "",
      list: [
        "Any",
        ...new Set(data.value.map((j) => capitalizeFirstLetter(j.jobtype))),
      ],
      show: true,
    },
    {
      title: "Industry",
      value: "",
      list: [
        "Any",
        ...new Set(data.value.map((j) => capitalizeFirstLetter(j.industry))),
      ],
      show: true,
    },
    {
      title: "Location",
      value: "",
      list: [
        "Any",
        ...new Set(data.value.map((j) => capitalizeFirstLetter(j.location))),
      ],
      show: true,
    },
    {
      title: "Salary",
      value: "",
      content: [
        "Negotiable",
        [0, 1999],
        [2000, 3999],
        [4000, 8999],
        [9000, 19999],
        [20000, 39999],
        [40000, 79999],
        [80000, 99999],
        100000,
      ],
      type: "$",
      show: true,
    },
    {
      title: "Experience",
      value: "",
      content: [[0, 1], [1, 2], [2, 5], [5, 10], [10, 15], 15],
      type: "Years",
      show: true,
    },
    {
      title: "Category",
      value: [],
      show: false,
      array: true,
    },
    {
      title: "Job Function",
      value: [],
      show: false,
      array: true,
    },
  ]),
  filtersToShow = computed(() => {
    return filters.value.filter((f) => f.show);
  }),
  setFilters = (item) => {
    let f = filters.value.find((v) => v.title === item.title);
    if (f.array) {
      let filter = filters.value.find((f) => f.title === item.title);
      filter.value.includes(item.val)
        ? filter.value.splice(filter.value.indexOf(item.val), 1)
        : filter.value.push(item.val);
    } else f.value = item.val;
  },
  resetFilters = () => {
    filters.value.forEach((f) => {
      f.array ? (f.value = []) : (f.value = "");
    });
  };

const isInQueries = () => {
  let queriesKey = Object.keys(queries);
  filters.value.forEach((filter) => {
    let title = filter.title.toLowerCase().replaceAll(" ", "");
    // filter.show = !queriesKey.includes(title);
    queriesKey.forEach((key) => {
      if (key.toLowerCase() === title.toLowerCase())
        filter.array
          ? filter.value.push(queries[key])
          : (filter.value = queries[key]);
    });
  });

  // console.log(queriesKey);
};
onMounted(() => {
  isInQueries();
});
</script>

<style lang="css" scoped></style>
