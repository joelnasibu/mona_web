<template>
  <v-card flat class="bg-transparent d-flex flex-column align-center pa-4 pt-1 text-body-2 ga-6 rounded-lg">
    <div class="w-100" v-for="(job, i) in jobsList" :key="i">
      <ClientJobsJobCard :job="job" />
    </div>
    <div class="py-15 my-15 text-h6 text-center" v-if="jobsList.length === 0">
      <span>No job found</span>
    </div>
  </v-card>
</template>

<script setup>
const props = defineProps({
  filters: Array,
  data: Array,
});
const emits = defineEmits(["setLocations"]);

const route = useRoute(),
  queries = route.query,
  { dateDifference, filterDataPerField, capitalizeFirstLetter } = useHelpers();

const search = ref(""),
  simpleFilters = computed(() => {
    return filterDataPerField(props.data, props.filters[0].value, {
      jobtype: getFilterValue("jobtype"),
      location: getFilterValue("location"),
      industry: getFilterValue("industry"),
    });
  }),
  otherFilters = computed(() => {
    let salary = props.filters.find((f) => f.title === "Salary")?.value;
    let experience = props.filters.find((f) => f.title === "Experience")?.value;
    return simpleFilters.value.filter((j) => {
      return (
        (salary == ""
          ? j
          : (j.salaryRange[0] >= salary[0] && j.salaryRange[1] <= salary[1]) ||
          (j.salaryRange[1] >= salary[0] && j.salaryRange[0] <= salary[1])) &&
        (experience == ""
          ? j
          : Number(j.experience) >= experience[0] &&
          Number(j.experience) <= experience[1])
      );
    });
  }),
  jobsList = computed(() => {
    let categoryQuery = queries["category"],
      categories = props.filters.find((f) => f.title === "Category")?.value,
      subcategories = props.filters.find(
        (f) => f.title === "Job Function"
      )?.value;

    return otherFilters.value.filter((j) =>
      categoryQuery
        ? j.category.name === String(categoryQuery).toUpperCase() &&
        (subcategories.length
          ? subcategories.includes(j.category.subcategory)
          : j)
        : categories.length
          ? categories.includes(j.category.name)
          : j
    );
  }),
  getFilterValue = (filter) => {
    let f = props.filters.find(
      (item) => String(item.title).toLowerCase().replace(" ", "") === filter
    );
    return f?.value === "Any" ? "" : f?.value;
  };

// onMounted(() => {});
</script>

<style lang="css" scoped></style>
