<template>
  <ClientOnly>
    <CoreMidScreenLayout>
      <v-container>
        <v-row>
          <v-col cols="12" class="">
            <CoreLinks :links="links" />
          </v-col>
        </v-row>
        <v-row v-if="productsMatchingSearch.deals.length">
          <v-col cols="12">
            <core-title2 :title="`Top deals`" />
            <CoreHorizontalScroller>
              <div class="d-flex">

                <div class="align-center py-4 pr-4" v-for="product in productsMatchingSearch.deals.slice(0, 10)"
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
            <!-- <v-divider class="mb-4"></v-divider> -->
            <FiltersCategoriesFilter :categories="listCategories" :products="productsMatchingSearch.all" />
          </v-col>
          <v-col xs="12" sm="12" md="8" lg="10" xl="11">
            <div class="d-flex align-center pa-2 pa-md-3 card-outlined rounded-lg text-caption ga-2 ga-md-4">
              <span>{{ `${productsMatchingSearch.all.length} items matching` }}
                <b>{{ productParam }}</b></span>
              <v-spacer></v-spacer>
              <div class="d-flex align-center">
                <!-- <div class="d-flex align-center ga-2">
                  <input type="checkbox" class="cursor-pointer" />
                  <span>Verified only</span>
                </div> -->
              </div>
              <div class="">
                <FiltersSortProd />
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
                <div class="card-outlined rounded-lg" v-for="product in productsMatchingSearch.all" :key="product.id">
                  <ClientShopProductCardsFullList :product="product" />
                </div>
              </div>
              <v-container v-else>
                <v-row>
                  <v-col xs="12" sm="12" md="4" lg="3" xl="2" xxl="1" v-for="product in productsMatchingSearch.all"
                    :key="product.id">
                    <v-card class="card-outlined rounded-lg bg-transparent pa-0 h-100" flat>
                      <ClientShopProductCardsFull :product="product" />
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
              <div class="py-15 my-15 text-center" v-if="!productsMatchingSearch.all.length">
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
const { destructureSanitizedTitle, capitalizeFirstLetter, filterDataPerField } =
  useHelpers();
const route = useRoute();
const router = useRouter();
const productParam = route.params.product;
if (!route.query.view) router.push({ query: { view: "list" } });

import { useCategoryStore } from "~/store/categories";
const { getCategoriesByType } = useCategoryStore();
const listCategories = ref(await getCategoriesByType(false, "SHOP"));

import { useProductStore } from "~/store/products";
const { publishedProducts } = useProductStore();
const products = ref(await publishedProducts());
const productsMatchingSearch = computed(() => {
  let filtered = filterDataPerField(products.value, productParam);
  return {
    all: filtered,
    deals: filtered.filter((item) => item.discount > 0),
  };
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

import ProductModel from "~/models/product";
const goTo = (product) => {
  let productModel = new ProductModel(product);
  productModel.navigateToProductDetails();
};

const links = [{ title: "Home", route: "/shop" }, { title: `${productParam}` }];

useHead({
  title: `Product matching ${productParam}`,
});
</script>

<style lang="css" scoped></style>
