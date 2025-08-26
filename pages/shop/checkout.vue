<template>
  <ClientOnly>
    <CoreMidScreenLayout class="py-2 position-relative pb-10" :lg="10" :xl="9">
      <v-container class="pa-0" fluid>
        <v-row class="ma-auto checkout" justify="space-between">
          <v-col cols="12" sm="8">
            <ClientCheckout />
          </v-col>
          <v-col cols="12" sm="4" class="">
            <ClientCartSideSection />
          </v-col>
        </v-row>
      </v-container>
    </CoreMidScreenLayout>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

useSeoMeta({
  title: "Checkout",
});
</script>

<style lang="css" scoped></style>
