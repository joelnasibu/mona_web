<template>
  <v-container class="h-100" v-if="!length || loader">
    <v-row class="h-100">
      <v-col cols="12" class="text-subtitle-1 text-disabled h-100 d-flex align-center justify-center">
        <span v-if="loader">Loading...</span>
        <span v-else>No orders for this business yet</span>
      </v-col>
    </v-row>
  </v-container>
  <div class="h-100" v-else>
    <OrderContent :data="data" :small="true" @updated="getData" />
  </div>
</template>

<script setup>
const emits = defineEmits(["loader", "details"]);

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { adminDrawer, profileImage } = storeToRefs(appStore);

import { useOrderStore } from "~/store/order";
const { businessOrder } = useOrderStore();
const data = ref([]);

const loader = ref(false);
const getData = async () => {
  emits("loader", true);
  loader.value = true;
  data.value = adminDrawer.value.id ? await businessOrder(false, adminDrawer.value.id) : []
  emits("loader", false);
  loader.value = false;
  emits("details", data.value?.length);

  //
};
watchEffect(() => {
  getData();
});
const length = computed(() => {
  return data.value.length;
});

const expand = ref(false);

const status = ref("");
const statuses = ["ACCEPTED", "PENDING REVIEW", "REJECTED"];
const setStatus = (val) => {
  status.value = val;
};
</script>

<style lang="css" scoped></style>
