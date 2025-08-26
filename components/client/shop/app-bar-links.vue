<template>
  <CoreMidScreenLayout class="py-2 card-white">
    <div class="d-flex align-center ga-4 text-caption px-2">

      <div class="" v-if="!isMobile">
        <v-icon start icon="mdi-menu" color="primary-accent" title="View all categories" size="x-large"
          style="cursor:pointer;" @click="toggleStatus"></v-icon>
      </div>
      <div class="d-flex justify-space-between w-100  text-caption">
        <NuxtLink class="link-cat" v-for="{
          category,
          id,
        } in categoriesWithSubcategories.slice(0, isMobile || smAndDown ? 5 : 10)" :key="id" :to="{
          name: 'shop-name',
          params: { name: sanitizeTitleForRoute(category) },
        }">
          <span>{{ capitalizeFirstLetter(category) }}</span>
        </NuxtLink>
      </div>

    </div>
    <ClientAppBarCategories />
  </CoreMidScreenLayout>
</template>

<script setup>
const { isMobile } = useDevice(),
  { sanitizeTitleForRoute, capitalizeFirstLetter } = useHelpers();
const { smAndDown } = useDisplay()

import { useSubcategoryStore } from "~/store/subcategories";
const { getSubcategories } = useSubcategoryStore(),
  allSubcategories = ref(await getSubcategories());

import { useCategoryStore } from "~/store/categories";
import { useDisplay } from "vuetify";
const { toggleStatus, getCategoriesByType } = useCategoryStore(),
  listCategories = ref(await getCategoriesByType(false, "SHOP")),
  categoriesWithSubcategories = computed(() => {
    const catMap = new Map();
    listCategories.value.forEach((category) => {
      catMap.set(category.id, { ...category, subcategories: [] });
    });

    allSubcategories.value.forEach((subcategory) => {
      const parentCategory = catMap.get(subcategory.categoryId);
      if (!parentCategory) return;
      parentCategory.subcategories.push(subcategory);
    });

    return Array.from(catMap.values());
  });


const drawer = ref(false);

const cardWidth = computed(() => {
  if (process.client) return window.screen.width;
});
</script>

<style lang="css" scoped>
.link-cat {
  color: rgba(var(--v-theme-primary-accent));
  font-weight: 600;
}
</style>
