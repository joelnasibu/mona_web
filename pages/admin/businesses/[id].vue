<template>
  <div>
    <AdminCorePageDetailsHeader view route="admin-businesses" @toggleView="view = !view" @delete="deleteDialog = true">
      <!-- <div
        class="d-flex align-center text-primary-dark cursor-pointer"
        v-if="isAdmin"
      >
        <v-icon icon="mdi-flag-outline" start size="small"></v-icon>
        <span>Flag business</span>
      </div> -->
    </AdminCorePageDetailsHeader>
    <v-container class="pa-0 mt-4" fluid>
      <div class="bg-card pa-3 d-flex text-caption align-center">
        <span>{{ data.businessName + " : " + data.code }}</span>
        <v-spacer></v-spacer>
        <!-- <span class="text-decoration-underline text-primary-dark"
          >Business products</span
        > -->
      </div>
      <div class="">
        <AdminBusinessPreview :payload="data" v-if="view" />
        <AdminBusinessCreate :payload="data" :update="true" v-else />
      </div>
    </v-container>
    <AdminDeleteConfirmation :dialog="deleteDialog" :data="{
      name: 'Business',
      itemTitle: data.businessName,
      id: data.id,
    }" @cancel="deleteDialog = false" @delete="confirmDelete" />

  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;

import { useAppStore } from "~/store/app";
const { loading, error, isAdmin } = storeToRefs(useAppStore());

import { useBusinessStore } from "~/store/business";
const { getBusiness, deleteBusiness } = useBusinessStore();
const data = ref(await getBusiness(id));
const deleteDialog = ref(false)
const confirmDelete = async () => {
  await deleteBusiness(data.value.id);
  if (!error.value) {
    deleteDialog.value = false;
    setTimeout(() => {
      navigateTo({ name: "admin-businesses" });
    }, 3000);
  }
};


import { useBusinessTypeStore } from "~/store/business-types";
const { getBusinessTypes } = useBusinessTypeStore();
const businessTypes = ref([]);
const getData = async () => {
  businessTypes.value = await getBusinessTypes(false);
  data.value.businessType = businessTypes.value.find(
    (b) => b.id == data.value.businessTypeId
  )?.businessType;
};
watchEffect(() => {
  getData();
});

const view = ref(true);

useSeoMeta({
  title: "Business Details",
});
</script>

<style lang="css" scoped></style>
