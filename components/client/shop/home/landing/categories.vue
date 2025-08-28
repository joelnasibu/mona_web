<template>
  <v-list class="pa-0 w-100 bg-transparent" density="compact" lines="false">
    <div class="py-2" style="font-size: 1.2rem">
      <b>Popular Categories</b>
    </div>
    <div
      class="text-caption"
      v-for="({ category, subcategories }, i) in categories"
    >
      <NuxtLink
        v-slot="{ navigate }"
        :to="{
          name: 'shop-name',
          params: { name: sanitizeTitleForRoute(category) },
        }"
      >
        <v-list-item
          color="link"
          class="text-capitalize rounded-lg"
          @click="navigate"
        >
          <div class="d-flex align-center one-line">
            <v-icon icon="mdi-chevron-right" start></v-icon>
            <span>{{
              String(category).toLowerCase().replace("and", "&")
            }}</span>
          </div>
        </v-list-item>
      </NuxtLink>
    </div>
  </v-list>
</template>

<script setup>
const { shuffleArray, sanitizeTitleForRoute } = useHelpers();

//  provided from shop page
const categoriesList = inject("categoriesList");
const categories = computed(() => {
  let list = categoriesList.value
    .slice(0, 10)
    .sort((a, b) => (a.category > b.category ? 1 : -1));
  return list;
});
</script>

<style lang="css" scoped>
a {
  color: currentColor;
}
</style>
