<template>
  <v-container class="py-3">
    <v-row class="card-outlined rounded-lg">
      <v-col cols="12" sm="3" class="d-none d-md-flex pr-0">
        <ClientShopHomeLandingCategories />
      </v-col>
      <v-col cols="12" :sm="!token ? 7 : 9" class="">
        <ClientShopHomeLandingTrending />
      </v-col>
      <v-col cols="12" sm="2" class="px-2 pl-md-0 pr-md-4" v-if="!token">
        <ClientShopHomeLandingSide />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const productsList = inject("productsList");

import { useAppStore } from "~/store/app";
const { token } = storeToRefs(useAppStore());
</script>

<style lang="css" scoped></style>
