<template>
  <div title="Sort by">
    <v-btn
      flat
      class="rounded-lg card-outlined text-caption text-none text-grey-darken-3"
      append-icon="mdi-chevron-down"
      density="compact"
      id="sorting"
    >
      <span>{{ activeSort }}</span>
    </v-btn>
    <v-menu activator="#sorting">
      <v-list
        class="rounded-lg pa-0 card-outlined mt-1"
        lines="false"
        density="compact"
      >
        <div class="text-caption" v-for="sort in sorting">
          <v-list-item
            :value="sort"
            color="link"
            :active="sort === activeSort"
            @click="
              activeSort = sort;
              emits('sortBy', sort);
            "
          >
            <span>{{ sort }}</span>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
const emits = defineEmits(["sortBy"]);

const sorting = [
  "Popularity",
  "Featured",
  "New Arrivals",
  "Price - High to low",
  "Price - Low to high",
  "Discount - High to low",
  "Discount - Low to high",
];

const activeSort = ref("New Arrivals");
</script>

<style lang="css" scoped></style>
