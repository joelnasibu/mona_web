<template>
  <div>
    <AdminCorePageDetailsHeader :view="view" route="admin-products" @toggleView="view = !view"
      @delete="deleteDialog = true">
      <!-- <v-btn
        class="text-caption text-none"
        :class="{ 'disabled-btn': data.isPublished }"
        rounded
        variant="outlined"
        size="small"
        :color="data.isPublished ? 'green' : 'primary'"
      >
        <v-icon
          start
          size="small"
          icon="mdi-check-circle-outline"
          v-if="data.isPublished"
        ></v-icon>
        <span>{{ data.isPublished ? "Published" : "Publish?" }}</span>
      </v-btn> -->
    </AdminCorePageDetailsHeader>
    <div class="mt-4">
      <div class="bg-card pa-3 d-flex text-caption align-center">
        <span>{{ data.productName + " : " + data.productId }}</span>
      </div>
      <div class="">
        <AdminProductPreview :payload="data" v-if="view" />
        <AdminProductInputs v-else :payload="data" :edit="true" />
      </div>
    </div>

    <AdminDeleteConfirmation :dialog="deleteDialog" :data="{
      name: 'Product',
      itemTitle: data.productName,
      id: data.productId,
    }" @cancel="deleteDialog = false" @delete="confirmDelete" />
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
// const { replaceObjectEmptyStrings } = useHelpers();

import { useAppStore } from "~/store/app";
const { error } = storeToRefs(useAppStore());

import { useProductStore } from "~/store/products";
const { getProduct, deleteProduct } = useProductStore();
const data = ref(await getProduct(id));
const setData = () => {
  data.value.subcategory = data.value.category.subcategory;
  data.value.category = data.value.category.name;

  // replaceObjectEmptyStrings(data.value);
};
onMounted(() => {
  setData();
});

const view = ref(true);
const deleteDialog = ref(false);
const confirmDelete = async () => {
  await deleteProduct(data.value.id);
  if (!error.value) navigateTo({ name: "admin-products" });
};

useSeoMeta({
  title: "Product Details",
});
</script>

<style lang="css" scoped></style>
