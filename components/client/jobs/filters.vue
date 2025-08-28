<template>
  <v-card
    flat
    class="bg-card d-flex flex-column align-center pa-3 text-body-2 ga-2 rounded-lg card-outlined"
    :style="`top: calc(${appBarHeight}px + .8rem) !important; position:sticky !important`"
    :max-height="filtersHeight"
  >
    <div class="w-100">
      <div class="d-flex align-center w-100">
        <CoreMainTitle
          :title="`Filter jobs by ${
            showSubcategories ? 'subcategory' : 'category'
          }`"
          :small="true"
        />
      </div>
      <v-divider class="my-2"></v-divider>
    </div>
    <div class="d-flex flex-column overflow-y-auto hide-scrollbar h-100 w-100">
      <v-card
        flat
        class="bg-transparent pa-2 text-caption d-flex align-center ga-3"
        v-for="item in list"
        @click="setFilters(item)"
      >
        <input type="checkbox" :checked="isChecked(item)" />
        <div class="one-line">
          <span>{{
            capitalizeFirstLetter(item.category ?? item.subcategory)
          }}</span>
        </div>
      </v-card>
    </div>
  </v-card>
</template>

<script setup>
const props = defineProps({
    filters: Array,
    locations: Array,
  }),
  emits = defineEmits(["setFilters"]);

const route = useRoute(),
  queries = route.query,
  { capitalizeFirstLetter } = useHelpers();

import { useCategoryStore } from "~/store/categories";
const { getCategoriesByType } = useCategoryStore(),
  listCategories = ref(await getCategoriesByType(false, "JOB"));

import { useSubcategoryStore } from "~/store/subcategories";
const { getSubcategoriesPerCategory } = useSubcategoryStore(),
  queryCategoryId = computed(() => {
    let cat = listCategories.value.find(
      (c) =>
        String(c.category).toLowerCase() ===
        String(queries["category"]).toLocaleLowerCase()
    );
    return cat?.id;
  }),
  data = ref(
    await getSubcategoriesPerCategory(false, queryCategoryId.value ?? 0)
  ),
  showSubcategories = computed(() => {
    return Object.keys(queries).includes("category");
  }),
  list = computed(() => {
    return showSubcategories.value
      ? [...data.value]
      : [...listCategories.value];
  });

const isChecked = (item) => {
    let title = showSubcategories.value ? "Job Function" : "Category",
      filter = props.filters.find((f) => f.title === title);
    return filter?.value.includes(
      showSubcategories.value ? item.subcategory : item.category
    );
  },
  setFilters = (item) => {
    let title = showSubcategories.value ? "Job Function" : "Category",
      val = showSubcategories.value ? item.subcategory : item.category;

    emits("setFilters", {
      title: title,
      val: val,
    });
  };

const appBarHeight = ref(64);
onMounted(() => {
  appBarHeight.value = document.getElementById("appBar").clientHeight;
});
const filtersHeight = computed(() => {
  if (process.client) return window.innerHeight - appBarHeight.value - 20;
});
</script>

<style lang="css" scoped>
.margin-radio:first-child {
  margin-left: 0;
}
.margin-radio:last-child {
  margin-right: 0;
}
</style>
