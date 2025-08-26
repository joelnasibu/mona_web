<template>
  <v-app>
    <ClientAppBar />
    <v-main>
      <NuxtPage />
    </v-main>
    <ClientFooter />
    <FloatingChat />
  </v-app>
</template>

<script setup>
const environmentVariable = useRuntimeConfig();
useHead({
  titleTemplate: (title) =>
    `${title ?? "AG"} - ${environmentVariable.public.app_name}`,
});

import { useProductStore } from "~/store/products";
const { publishedProducts } = useProductStore();
const data = ref(await publishedProducts());

import { useCategoryStore } from "~/store/categories";
const { getCategoriesByType } = useCategoryStore();
const listCategories = ref(await getCategoriesByType(false, "SHOP"));

provide("categoriesList", listCategories.value);
provide("productsList", data.value);
</script>

<style lang="css" scoped></style>
