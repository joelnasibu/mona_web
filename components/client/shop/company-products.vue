<template>
  <div>
    <div class="d-flex align-center">
      <div class="text-subtitle-1">
        <b>Products</b>
      </div>
      <v-spacer></v-spacer>
      <v-text-field
        append-inner-icon="mdi-chevron-down"
        prepend-inner-icon="mdi-filter-outline"
        rounded
        hide-details
        readonly
        label="Filter by category"
        id="selectCategory"
        v-model="category"
        clearable
      ></v-text-field>
      <AdminCoreSelect
        activator="#selectCategory"
        :list-value="category"
        :list="categories"
        @set-item="setCategory"
      />
    </div>
    <div class="mt-10 d-flex flex-column ga-2 ga-md-6">
      <div class="w-100" v-for="product in products">
        <ClientShopProductCardsFullList :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  business: [String, Number],
});

const { capitalizeFirstLetter } = useHelpers();

import { useProductStore } from "~/store/products";
const { publishedProducts } = useProductStore(),
  data = ref(await publishedProducts(null)),
  products = computed(() => {
    return data.value.filter(
      (j) =>
        j.businessId == props.business &&
        (category.value === "" || !category.value
          ? j
          : String(j.category.name).toLowerCase() ===
            String(category.value).toLowerCase())
    );
  }),
  categories = computed(() => {
    return [
      ...new Set(
        products.value.map((a) => capitalizeFirstLetter(a.category.name))
      ),
    ];
  }),
  category = ref(""),
  setCategory = (val) => {
    category.value = val;
  };
</script>

<style lang="css" scoped></style>
