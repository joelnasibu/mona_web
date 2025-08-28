<template>
  <v-navigation-drawer
    v-model="jobSearchDrawerState"
    location="bottom"
    color="white"
    class="rounded-t-xl drawer"
  >
    <template v-slot:prepend>
      <div class="text-subtitle-1 pa-4">
        <b>{{ jobSearchDrawer.title }}</b>
      </div>
    </template>
    <v-list
      class="pa-0 position-relative"
      density="compact"
      lines="false"
      v-if="jobSearchDrawer.listFormat"
    >
      <div
        class="position-sticky bg-white text-body-2 mx-1 rounded-t-lg overflow-hidden"
        style="top: 0"
      >
        <input
          type="search"
          :placeholder="`Filter (${jobSearchDrawer.list.length}) items...`"
          class="px-3 w-100 filter-input bg-card"
          autofocus
          v-model="search"
        />
        <v-divider></v-divider>
      </div>
      <div class="text-caption" v-for="item in list">
        <v-list-item color="secondary">
          <span>{{ item }}</span>
        </v-list-item>
        <!-- <v-divider></v-divider> -->
      </div>
    </v-list>
    <template v-slot:append>
      <div class="text-subtitle-1 pa-4 d-flex ga-3">
        <v-btn
          variant="outlined"
          size="small"
          rounded="lg"
          class="text-caption"
        >
          <span>Reset</span>
        </v-btn>
        <div class="w-100">
          <v-btn
            flat
            active
            color="primary-accent"
            size="small"
            rounded="lg"
            class="text-caption"
            block
          >
            <span>Apply filter</span>
          </v-btn>
        </div>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
const { currencyFormat } = useHelpers();

import { useAppStore } from "~/store/app";
const appStore = useAppStore(),
  { jobSearchDrawer } = storeToRefs(appStore),
  jobSearchDrawerState = computed({
    get() {
      return jobSearchDrawer.value.status;
    },
    set() {
      appStore.closeJobSearchDrawer();
    },
  }),
  list = computed(() => {
    return jobSearchDrawer.value.list.filter((f) =>
      f.toLowerCase().includes(search.value.toLowerCase())
    );
  });

const search = ref(""),
  desctructureItemArray = (item, type) => {
    let content =
      typeof item === "string"
        ? item
        : typeof item === "object"
        ? `${type === "$" ? currencyFormat(item[0], 0) : item[0]} - ${
            type === "$" ? currencyFormat(item[1], 0) : item[1]
          }`
        : `${type === "$" ? currencyFormat(item, 0) : item}+`;
    return `${content} ${!type || type === "$" ? "" : type}`;
  };
</script>

<style lang="css" scoped>
.filter-input:focus {
  border: none;
  outline: none;
}
.filter-input {
  padding-block: 8.5px;
}

.drawer {
  min-height: 400px;
  max-height: 800px !important;
  /* height: clamp(200px, 70%, 600px) !important; */
}
</style>
