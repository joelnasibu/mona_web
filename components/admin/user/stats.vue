<template>
  <div class="bg-transparent rounded-lg position-relative pa-3">
    <v-progress-linear
      indeterminate
      color="link"
      absolute
      height="3"
      :active="loadData"
    ></v-progress-linear>
    <div class="text-body-2 d-flex align-center justify-space-between">
      <b>User related data</b>
      <v-btn-toggle
        color="primary"
        v-model="toggle"
        density="compact"
        border
        divided
        variant="text"
        class="rounded-lg"
        mandatory
      >
        <v-btn
          v-for="({ title, value, access, disabled }, i) in filteredLinks"
          :value="i"
          class="text-caption text-none"
          size="small"
          :disabled="disabled"
        >
          <span>{{ title }}</span>
        </v-btn>
      </v-btn-toggle>
    </div>
    <v-divider class="my-2"></v-divider>
    <div class="py-3">
      <admin-user-stats-businesses :payload="payload" @set-loader="setLoader" />
      <!-- <div class="py-15 my-15 mx-auto text-center">
        <span
          >No
          {{
            filteredLinks[toggle]?.alt[payload.accessLevel > 3 ? 1 : 0]
          }}</span
        >
      </div> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  page: {
    type: String,
    default: null,
  },
});

import { useAppStore } from "~/store/app";
const { currentUser } = storeToRefs(useAppStore());

const loadData = ref(false);
const setLoader = (val) => {
  loadData.value = val;
};

const toggle = ref(0);
const links = ref([
  {
    title: "Businesses",
    access: [1, 2, 3, 4],
    alt: ["business", "followed businesses"],
    disabled: false,
  },
  {
    title: "Jobs",
    access: [4],
    alt: ["jobs", "applied jobs"],
    disabled: false,
  },
  {
    title: "Products",
    access: [4],
    alt: ["products", "bought products"],
    disabled: false,
  },
]);

const filteredLinks = computed(() => {
  links.value.forEach((link) => {
    link.disabled = !link.access.includes(props.payload.accessLevel);
  });
  return links.value;
});
</script>

<style lang="css" scoped></style>
