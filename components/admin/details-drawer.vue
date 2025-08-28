<template>
  <v-navigation-drawer
    v-model="adminDrawerState"
    location="end"
    color="white"
    temporary
    :width="full ? fullWidth : 600"
  >
    <v-progress-linear
      indeterminate
      color="link"
      absolute
      height="3"
      :active="loader"
    ></v-progress-linear>
    <template v-slot:prepend>
      <div class="d-flex align-center ga-3 text-body-2 pa-2">
        <v-btn
          icon="mdi-arrow-left"
          title="Return"
          size="small"
          rounded="lg"
          flat
          @click="close"
        ></v-btn>
        <v-badge
          :content="details"
          color="secondary"
          inline
          class="text-caption"
        >
          <b class="mr-4" v-html="adminDrawer.title"></b>
        </v-badge>
        <v-spacer></v-spacer>
        <div
          class="text-caption text-decoration-underline text-primary-accent cursor-pointer"
          @click="full = !full"
        >
          <span>{{
            full ? "View in small window" : "View in fullscreen"
          }}</span>
        </div>
      </div>
    </template>
    <div class="h-100">
      <AdminBusinessVerify
        @loader="setLoader"
        @details="setDetails"
        v-if="adminDrawer.type === 'business'"
      />
      <AdminJobApplications
        @loader="setLoader"
        @details="setDetails"
        v-if="adminDrawer.type === 'applications'"
      />
      <AdminBusinessOrders
        @loader="setLoader"
        @details="setDetails"
        v-if="adminDrawer.type === 'orders'"
      />
      <AdminViewOrders
        @loader="setLoader"
        @details="setDetails"
        v-if="adminDrawer.type === 'view-orders'"
      />
      <AdminViewApplications
        @loader="setLoader"
        @details="setDetails"
        v-if="adminDrawer.type === 'view-applications'"
      />
    </div>
  </v-navigation-drawer>
</template>

<script setup>
const { capitalizeFirstLetter } = useHelpers();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { adminDrawer } = storeToRefs(appStore);
const adminDrawerState = computed({
  get() {
    return adminDrawer.value.status;
  },
  set() {
    appStore.setAdminDrawer({
      status: false,
      type: "",
      id: 0,
    });
  },
});
const close = () => {
  appStore.closeAdminDrawer();
  details.value = 0;
};

const loader = ref(true);
const setLoader = (val) => {
  loader.value = val;
};

const details = ref(0);
const setDetails = (val) => {
  details.value = val ?? 0;
};

const full = ref(false),
  fullWidth = computed(() => {
    let drawer = document.getElementById("mainDrawer");
    return window.screen.width - 150;
  });
</script>

<style lang="css" scoped></style>
