<template>
  <ClientOnly>
    <CoreMidScreenLayout>
      <v-container>
        <v-row>
          <v-col cols="12" class="">
            <CoreLinks :links="links" />
          </v-col>
        </v-row>
        <v-row v-if="productsMatchingCategory.deals.length">
          <v-col cols="12">
            <core-title2 :title="`Top ${categoryName} deals`" />
            <CoreHorizontalScroller>
              <div class="d-flex ga-3">
                <div class="align-center py-4" v-for="product in productsMatchingCategory.deals.slice(0, 10)"
                  :key="product.id">
                  <v-card class="bg-transparent pa-0" flat @click="goTo(product)" width="200" id="scrollerCard">
                    <ClientShopProductCardsBasic :product="product" />
                  </v-card>
                </div>
              </div>
            </CoreHorizontalScroller>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col xs="12" sm="12" md="4" lg="2" xl="1" class="d-none d-md-flex flex-column rounded-lg pr-0">
            <FiltersCategoriesFilter :subcategories="subcategories" :products="productsMatchingCategory.all"
              @filters="setFilters" />
          </v-col>
          <v-col xs="12" sm="12" md="8" lg="10" xl="11">
            <div class="d-flex align-center pa-2 pa-md-3 card-outlined rounded-lg text-caption ga-2 ga-md-4">
              <span>{{ `${productsMatchingCategory.all.length} items in` }}
                <b>{{ categoryName }}</b></span>
              <v-spacer></v-spacer>
              <div class="d-flex align-center">
                <!-- <div class="d-flex align-center ga-2">
                  <input type="checkbox" class="cursor-pointer" />
                  <span>Verified only</span>
                </div> -->
              </div>
              <div class="">
                <FiltersSortProd @sortBy="sortBy" />
              </div>
              <v-btn-toggle density="compact" divided border class="rounded-lg" color="primary-accent"
                v-model="listView">
                <v-btn icon="mdi-menu" class="text-none text-caption px-4" variant="text" :value="true"
                  title="List view">
                </v-btn>
                <v-btn icon="mdi-view-grid" class="text-none text-caption px-4" variant="text" :value="false"
                  title="Grid view">
                </v-btn>
              </v-btn-toggle>
            </div>
            <div class="py-5">
              <div class="d-flex flex-column ga-4 px-0 px-lg-4" v-if="listView">
                <div class="card-outlined rounded-lg" v-for="product in productsMatchingCategory.all" :key="product.id">
                  <ClientShopProductCardsFullList :product="product" />
                </div>
              </div>
              <v-container v-else>
                <v-row>
                  <v-col xs="12" sm="12" md="4" lg="3" xl="2" xxl="1" v-for="product in productsMatchingCategory.all"
                    :key="product.id">
                    <v-card class="card-outlined rounded-lg bg-transparent pa-0 h-100" flat>
                      <ClientShopProductCardsFull :product="product" />
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
              <div class="py-15 my-15 text-center" v-if="!productsMatchingCategory.all.length">
                <span>No product found</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </CoreMidScreenLayout>
  </ClientOnly>
</template>

<script setup>
const { destructureSanitizedTitle, capitalizeFirstLetter } = useHelpers();
const route = useRoute();
const router = useRouter();
const categoryParam = route.params.name;

if (!route.query.view) router.push({ query: { view: "list" } });
const category = computed(() => {
  return listCategories.value.find(
    (c) =>
      String(c.category).toLowerCase() ===
      destructureSanitizedTitle(categoryParam).toLowerCase()
  );
});
const categoryName = computed(() => {
  return capitalizeFirstLetter(category.value?.category);
});

import { useCategoryStore } from "~/store/categories";
const { getCategoriesByType } = useCategoryStore();
const listCategories = ref(await getCategoriesByType(false, "SHOP"));

import { useSubcategoryStore } from "~/store/subcategories";
const { getSubcategoriesPerCategory } = useSubcategoryStore();
const subcategories = ref(
  await getSubcategoriesPerCategory(false, category.value?.id)
);

import { useProductStore } from "~/store/products";
const { publishedProducts } = useProductStore();
const products = ref(await publishedProducts());
const productsMatchingCategory = computed(() => {
  let filtered = products.value.filter(
    (prod) =>
      String(prod.category.name).toLowerCase() ===
      String(category.value?.category).toLowerCase()
  );
  return {
    all: filtered,
    deals: filtered.filter((item) => item.discount > 0),
  };
});

const productsAfterFiltering = computed(() => {
  return productsMatchingCategory.value.all.filter((item) => {
    return !allFilters.value.length
      ? item
      : allFilters.value.category === 0 > item
        ? allFilters.value.isCategory
          ? item.categoryId === allFilters.value.category
          : item.category.subcategory === allFilters.value.category
        : item.category.subcategory.toLowerCase() ===
        allFilters.value.category.toLowerCase();
  });
});

//
const listView = ref(route.query.view === "list" ?? true);
watch(
  () => listView.value,
  (val) => {
    router.push({
      query: { view: val ? "list" : "grid" },
    });
  }
);

const sort = ref(""),
  sortBy = (val) => {
    sort.value = val;
  };

const links = [
  { title: "Home", route: "/shop" },
  { title: categoryName.value },
];
const allFilters = ref({});
const setFilters = (val) => {
  allFilters.value = val;
  console.log(allFilters.value, Object.keys(allFilters.value).length);
};

import ProductModel from "~/models/product";
const goTo = (product) => {
  let productModel = new ProductModel(product);
  productModel.navigateToProductDetails();
};

useHead({
  title: `Buy ${categoryName.value}`,
});
</script>

<style lang="css" scoped></style>
