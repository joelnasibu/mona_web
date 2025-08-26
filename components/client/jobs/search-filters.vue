<template>
  <div
    class="rounded-lg card-outlined overflow-hidden bg-white box-shadow-bottom mx-1"
  >
    <div class="" v-if="isMobile">
      <div class="d-flex align-center pa-2">
        <v-text-field
          placeholder="Search anything..."
          prepend-inner-icon="mdi-magnify"
          rounded
          density="default"
          hide-details
          bg-color="card"
        ></v-text-field>
      </div>
      <v-divider></v-divider>
      <div class="d-flex align-center position-relative pa-2 bg-white">
        <div class="position-sticky text-body-2 d-flex align-center">
          <v-icon icon="mdi-filter-outline"></v-icon>
          <v-badge
            :content="
              filters.filter((f) =>
                typeof f.value === 'string'
                  ? f.value.length && f.value !== 'Any'
                  : f.value.length
              )?.length
            "
            inline
            color="secondary"
          >
            <span class="mx-1">Filters</span>
          </v-badge>
        </div>
        <v-divider vertical class="mx-2"></v-divider>
        <div class="overflow-auto hide-scrollbar" style="white-space: nowrap">
          <div
            class="card-outlined rounded-xl px-3 py-1 mx-1 text-caption"
            style="display: inline-block"
            v-for="({ title, value, content, type, list }, i) in filters.filter(
              (f) => !f.input
            )"
            :class="{
              'card-primary':
                typeof value === 'string'
                  ? value.length && value !== 'Any'
                  : value.length,
            }"
            @click="setDrawer(content ?? list, title, list)"
          >
            <div class="d-flex align-center">
              <span>{{ value == "" || value == "Any" ? title : value }}</span>
              <v-icon icon="mdi-chevron-down" end size="small"></v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="d-flex align-center overflow-hidden">
      <div class="px-3 text-grey-darken-2">
        <v-icon icon="mdi-filter-outline"></v-icon>
      </div>
      <v-divider vertical></v-divider>
      <div class="d-flex align-center w-100">
        <v-card
          v-for="({ title, value, content, input, type, list }, i) in filters"
          flat
          :width="`${100 / filters.length}%`"
          class="d-flex bg-transparent"
          :class="{ 'cursor-pointer': !input }"
          :id="input ? title : `selectContent_${i}`"
        >
          <div class="d-flex flex-column text-caption px-2 w-100 py-1">
            <span class="text-grey-darken-2" style="font-weight: 450">{{
              title
            }}</span>
            <div class="text-grey-darken-1 mt-1">
              <div class="d-flex align-center" v-if="input">
                <input
                  placeholder="Search anything ..."
                  type="search"
                  v-model="keyword"
                  class="w-100 text-caption"
                />
              </div>
              <div class="d-flex align-center" v-else>
                <span style="font-weight: 600" class="text-primary-dark">{{
                  value === "" ? "Any" : desctructureItemArray(value, type)
                }}</span>
                <v-spacer></v-spacer>
              </div>
              <v-menu :activator="`#selectContent_${i}`" v-if="content">
                <v-list
                  class="mt-1 card-outlined rounded-lg pa-2"
                  max-width="320"
                >
                  <div class="py-1 text-caption text-right">
                    <v-btn
                      class="text-caption"
                      variant="text"
                      color="primary-accent"
                      prepend-icon="mdi-refresh"
                      size="small"
                      @click="setValue('', title)"
                    >
                      <span>Reset</span>
                    </v-btn>
                  </div>
                  <v-divider></v-divider>
                  <div class="d-flex flex-wrap ga-3 mt-3">
                    <div
                      class="card-outlined py-1 px-4 rounded-xl cursor-pointer"
                      v-for="item in content"
                      @click="setValue(item, title)"
                      :class="{ 'active-selection': value === item }"
                    >
                      <span>{{ desctructureItemArray(item, type) }}</span>
                    </div>
                  </div>
                </v-list>
              </v-menu>
              <div class="" v-if="list">
                <AdminCoreSelect
                  :activator="`#selectContent_${i}`"
                  :list="list"
                  :listValue="value"
                  @setItem="setFilter"
                />
              </div>
            </div>
          </div>
          <v-spacer></v-spacer>
          <div class="my-auto px-1">
            <v-icon
              :icon="`mdi-${input ? 'magnify' : 'chevron-down'}`"
              size="small"
            ></v-icon>
          </div>
          <v-divider
            class="my-3"
            v-if="i < filters.length - 1"
            vertical
          ></v-divider>
        </v-card>
      </div>
      <v-divider vertical></v-divider>
      <v-btn
        icon="mdi-refresh"
        title="Réinitialiser"
        size="x-small"
        flat
        @click="resetFilters"
      ></v-btn>
    </div>
  </div>

  <!-- <v-dialog v-model="drawer" fullscreen transition="dialog-bottom-transition">
    <div class="h-100 d-flex" @click="drawer = false">
      <v-card
        class="mt-auto bg-white rounded-t-xl w-100"
        max-height="80vh"
        min-height="40vh"
        @click.stop="drawer = true"
      >
        <v-card-title class="text-subtitle-1">
          <b>Test</b>
        </v-card-title>
      </v-card>
    </div>
  </v-dialog> -->
</template>

<script setup>
const props = defineProps({
    filters: Array,
  }),
  emits = defineEmits(["setFilters", "resetFilters"]);

const { isMobile } = useDevice(),
  { currencyFormat } = useHelpers();

const keyword = ref(props.filters[0].value),
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
  },
  setValue = (val, title) => {
    emits("setFilters", { val, title });
  },
  setFilter = (val, index) => {
    let filter = props.filters[String(index).charAt(index.length - 1)];
    setValue(val, filter.title);
  };

watch(
  () => keyword.value,
  (val) => {
    let key = props.filters.find((f) => f.input);
    key.value = val;
    emits("setFilters", { val, title: key.title });
  }
);

import { useAppStore } from "~/store/app";
const { setJobSearchDrawer } = useAppStore(),
  drawer = ref(false),
  setDrawer = (items, title, listFormat) => {
    // drawer.value = true;
    setJobSearchDrawer({
      status: true,
      list: items,
      title: title,
      listFormat: typeof listFormat === "object",
    });
  };

const resetFilters = () => {
  emits("resetFilters");
};
</script>

<style lang="css" scoped>
input[type="search"] {
  /* padding-block: 5px; */
  outline: none;
}
input[type="search"]:focus,
input[type="search"]:hover {
  outline: none;
}
input[type="search"]::placeholder {
  opacity: 0.6;
}

.active-selection {
  background-color: #e4ffe3 !important;
  border-color: rgba(var(--v-theme-secondary)) !important;
}

.filters-card {
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
}
</style>
