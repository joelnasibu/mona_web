<template>
<<<<<<< HEAD
  <CoreInputWithContent :placeholder="`Search ${keyword === 'SHOP'
    ? 'products, brand, model'
    : 'jobs, job types, keywords'
    }...`" :keyword="keyword" @setSearchValue="searchValue" @validateSearch="validateSearch">
=======
  <CoreInputWithContent
    :placeholder="`Search ${
      keyword === 'SHOP'
        ? 'products, brand, model'
        : 'jobs, job types, keywords'
    }...`"
    :keyword="keyword"
    @setSearchValue="searchValue"
    @validateSearch="validateSearch"
  >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
    <!-- <template #action>
      <div class="bg">
        <v-btn
          class="text-caption rounded-ts rounded-bs text-grey-darken-4"
          variant="plain"
          :rounded="0"
          title="Categories"
        >
          <span>{{ selectedFilter }}</span>
          <v-icon end size="small" icon="mdi-chevron-down"></v-icon>
          <v-menu activator="parent">
            <v-list
              density="compact"
              lines="false"
              class="card-outlined mt-1 pa-0 rounded-lg"
              min-width="150px"
              max-height="200"
            >
              <div class="" v-for="({ category }, i) in categories" :key="i">
                <v-hover v-slot="{ isHovering, props }">
                  <v-list-item
                    v-bind="props"
                    class="text-caption text-capitalize cursor-pointer"
                    :class="
                      category === selectedFilter || isHovering
                        ? 'text-black'
                        : 'text-grey-darken-2'
                    "
                    @click="selectedFilter = category"
                  >
                    <span>{{ String(category).toLowerCase() }}</span>
                    <template v-slot:append>
                      <v-icon
                        end
                        icon="mdi-check"
                        v-if="category === selectedFilter"
                      ></v-icon>
                    </template>
</v-list-item>
</v-hover>
</div>
</v-list>
</v-menu>
</v-btn>
</div>
</template> -->
    <template #mainAction>
<<<<<<< HEAD
      <v-btn icon="mdi-magnify" size="small" title="Search" :rounded="0" class="bg-primary px-5"
        :disabled="!search.length" @click="goTo"></v-btn>
=======
      <v-btn
        icon="mdi-magnify"
        size="small"
        title="Search"
        :rounded="0"
        class="bg-primary-dark px-5"
        :disabled="!search.length"
        @click="goTo"
      ></v-btn>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
    </template>
  </CoreInputWithContent>
</template>

<script setup>
const props = defineProps({
  keyword: {
    type: String,
    default: "SHOP",
  },
});

const route = useRoute();

// import { useCategoryStore } from "~/store/categories";
// const { getCategoriesByType } = useCategoryStore();
// const listCategories = ref(await getCategoriesByType(false, props.keyword));

// const categories = computed(() => {
//   return [{ category: "All", id: 0, image: null }, ...listCategories.value];
// });

// const selectedFilter = ref("All");

const search = ref(""),
  searchValue = (val) => {
    search.value = val;
  },
  validateSearch = () => {
    if (search.value.length) goTo();
  },
  goTo = () => {
    let routeValue = {
      name: route.fullPath.includes("/jobs") ? "jobs-search" : "shop-product",
      params: route.fullPath.includes("/jobs")
        ? route.params
        : { product: search.value },
      query: route.fullPath.includes("/jobs")
        ? { keyword: search.value }
        : route.query,
    };

    navigateTo(routeValue);
  };
</script>

<style lang="scss" scoped></style>
