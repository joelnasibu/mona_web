<template>
  <ClientOnly>
    <div class="px-3 px-md-0">
      <CoreMidScreenLayout :xl="9">
        <!-- <ClientShopHomePromo /> 
        <ClientShopHomeLanding /> -->

        <div class="my-5">
          <ClientShopHomeLandingTrending />
        </div>
      </CoreMidScreenLayout>

      <v-container class="system-bg py-5">
        <CoreMidScreenLayout>
          <v-row align="center">
            <v-col cols="12" sm="12" md=12 lg="6">
              <div class="text-h5" style="max-width: 50ch">
                <b>
                  Obtenir la verification du compte
                  <v-icon
                    icon="mdi-check-decagram"
                    color="primary-accent"
                    end
                    size="30"
                  ></v-icon>
                </b>
              </div>
              <div
                class="text-subtitle-2 text-grey-darken-1 mt-4"
                style="font-weight: 500"
              >
                <span
                  >Prêt à passer au niveau supérieur sur notre plateforme ? 🚀
                  Obtenez votre badge de vérification et devenez une véritable
                  Superstar de la sécurité en ligne!
                </span>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <!-- <div class="d-flex ga-2 justify-start justify-md-end">
                <v-btn
                  class="text-caption rounded-lg"
                  variant="text"
                  append-icon="mdi-arrow-right"
                >
                  <span>Learn more</span>
                </v-btn>
                <v-btn
                  class="text-caption rounded-lg"
                  flat
                  color="primary-accent"
                >
                  <span>Get started</span>
                </v-btn>
              </div> -->
            </v-col>
          </v-row>
        </CoreMidScreenLayout>
      </v-container>
      <CoreMidScreenLayout :xl="9">
        <div class="my-4">
          <ClientShopHomeDeals />
        </div>
        <div class="my-4">
          <ClientShopHomePopular />
        </div>
        <div class="my-4">
          <ClientShopHomeFeaturedCategories />
        </div>
        <div class="my-7">
          <ClientShopHomeRecommended />
        </div>
      </CoreMidScreenLayout>
    </div>
  </ClientOnly>
</template>

<script setup>
const { isMobile } = useDevice();

import { useProductStore } from "~/store/products";
const {
  publishedProducts,
  featuredProducts,
  popularProducts,
  recommendedProducts,
} = useProductStore();
const data = ref([]);
const featuredProductsList = ref([]);
const popularProductsList = ref([]);
const recommendedProductsList = ref([]);

import { useCategoryStore } from "~/store/categories";
const { getCategoriesByType } = useCategoryStore();
const listCategories = ref([]);

const loadDetails = async () => {
  [
    data.value,
    featuredProductsList.value,
    popularProductsList.value,
    recommendedProductsList.value,
    listCategories.value,
  ] = await Promise.all([
    await publishedProducts(),
    featuredProducts(false),
    popularProducts(false),
    recommendedProducts(false),
    getCategoriesByType(false, "SHOP"),
  ]);
};

onMounted(() => {
  loadDetails();
});

provide("categoriesList", listCategories);
provide("productsList", data);
provide("featuredProductsList", featuredProductsList);
provide("popularProductsList", popularProductsList);
provide("recommendedProductsList", recommendedProductsList);

useHead({
  title: "Home",
});
</script>

<style lang="css" scoped></style>
