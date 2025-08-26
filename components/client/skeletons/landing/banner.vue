<template>
  <div class="">
    <v-card
      class="pa-3 rounded-0 text-center d-flex skeleton"
      height="47dvh"
      flat
    >
    </v-card>
    <v-container class="bg-grey-darken-4 px-2 px-md-0 py-0" fluid>
      <v-row justify="space-around" class="ma-auto">
        <v-col
          cols="4"
          v-for="({ title, icon }, i) in addOns"
          :key="i"
          class="pa-2"
        >
          <div
            class="text-caption text-md-body-2 d-flex flex-column flex-md-row align-center justify-center ga-0 ga-md-2 pt-2 py-md-0"
          >
            <Icon :name="icon" size="2rem" />
            <div class="text-uppercase text-center text-md-start add-on">
              <span>{{ title }}</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const addOns = [
  { title: "free shipping & free return", icon: "la:shipping-fast" },
  { title: "secure payment", icon: "healthicons:ui-secure-outline" },
  { title: "24/7 Customer support", icon: "fluent:person-support-24-regular" },
];
</script>

<style lang="css" scoped>
.add-on {
  text-wrap: balance;
}
</style>
