<template>
  <div>
    <AdminCorePageHeader
      :actualPage="{ icon: 'tag-plus', name: 'Featured Products' }"
    >
      <div class="d-flex">
        <v-btn
          icon="mdi-plus"
          size="x-small"
          flat
          color="primary-dark"
          title="Add business"
        ></v-btn>
      </div>
    </AdminCorePageHeader>
    <AdminCoreTableHeader text="Featured products" :number="0" />
    <v-sheet width="100%" color="transparent">
      <v-data-table
        density="compact"
        :headers="filteredHeaders"
        :loading="loading"
        class="bg-background"
      >
      </v-data-table>
    </v-sheet>
  </div>
</template>

<script setup>
const {
  replaceObjectEmptyStrings,
  filterDataPerField,
  getDetails,
  getFullnames,
} = useHelpers();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { loading, currentUser, error, isAdmin, isVendor } =
  storeToRefs(appStore);

const filteredHeaders = computed(() => {
  let list = [
    { title: "#", value: "no", show: true },
    { title: "Image", value: "thumbnail", show: true },
    { title: "Product Id", value: "productId", show: true },
    { title: "Product Name", value: "productName", show: true },
    { title: "Business", value: "business.businessName", show: true },
    {
      title: "Days remaining",
      value: "userId",
      show: true,
    },
    {
      title: "Renew",
      value: "renew",
      show: true,
    },
  ];
  return list.filter((h) => h.show);
});
</script>

<style lang="css" scoped></style>
