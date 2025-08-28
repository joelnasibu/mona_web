<template>
  <v-app>
    <ClientAppBar />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4"></v-col>
          <v-col cols="12" sm="8">
            <NuxtPage />
          </v-col>
        </v-row>
      </v-container>
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
