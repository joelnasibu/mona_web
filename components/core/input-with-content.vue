<template>
  <div class="input caption d-flex align-center overflow-hidden rounded-lg">
    <slot name="action"></slot>
    <v-divider vertical></v-divider>
    <input
      type="search"
      :placeholder="placeholder"
      class="rounded text-caption px-4"
      v-model="filter"
      id="mainFilter"
      @input="searchData"
      @keypress.enter="emits('validateSearch')"
    />
    <v-menu activator="#mainFilter">
      <v-list
        density="compact"
        class="card-outlined mt-3 pa-0 rounded-lg"
        min-width="150px"
        v-show="structuredResults?.length > 0"
      >
        <div class="" v-for="(res, i) in structuredResults" :key="i">
          <v-hover v-slot="{ isHovering, props }">
            <v-list-item
              v-bind="props"
              class="text-caption cursor-pointer text-capitalize"
              @click="goTo(res)"
            >
              <v-icon icon="mdi-magnify" color="grey" size="18" start></v-icon>
              <span>{{
                String(res.productName ?? res.jobName).toLowerCase()
              }}</span>
            </v-list-item>
          </v-hover>
        </div>
      </v-list>
    </v-menu>
    <slot name="mainAction"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
    placeholder: String,
    keyword: String,
  }),
  emits = defineEmits(["setSearchValue", "validateSearch"]);

const algoliaIndex = props.keyword === "SHOP" ? "products_index" : "jobs_index";
const { result, search } = useAlgoliaSearch(algoliaIndex);

const filter = ref("");
const structuredResults = computed(() => {
  return filter.value === "" ? [] : result.value?.hits.splice(0, 10);
});

const searchData = async () => {
  emits("setSearchValue", filter.value);
  await search({ query: filter.value });
};

import ProductModel from "~/models/product";
import JobModel from "~/models/job";
const goTo = (value) => {
  if (props.keyword === "SHOP") {
    let productModel = new ProductModel(value);
    productModel.navigateToProductDetails();
  } else {
    let jobModel = new JobModel(value);
    jobModel.navigateToJobDetails();
  }
};
</script>

<style lang="css" scoped>
.input {
  border-radius: 5px;
  border: 1px solid rgba(var(--v-theme-border));
  width: 100%;
}
.input input {
  outline: none;
  border: none;
  padding: 0 7px;
  width: 100%;
  background-color: transparent;
}
.input:focus-within {
  border-color: rgba(var(--v-theme-primary));
}
</style>
