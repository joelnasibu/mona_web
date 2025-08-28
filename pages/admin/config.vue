<template>
  <div class="pa-0 d-flex ga-4" style="height: calc(100vh - 100px)">
    <div
      flat
      class="card-outlined h-100 rounded-lg position-relative bg-white transition-width"
      :style="{ width: full ? '20%' : '55px' }"
    >
      <ConfigLinks />
      <div
        class="position-absolute d-flex align-center"
        style="top: 0; bottom: 0; right: -15px"
      >
        <v-btn icon size="25" color="primary" @click="full = !full">
          <v-icon :class="{ 'transform-180': full }">mdi-chevron-left</v-icon>
        </v-btn>
      </div>
    </div>
    <v-card
      flat
      class="card-outlined py-3 h-100 overflow-auto rounded-lg hide-scrollbar"
      :style="{ width: full ? '80%' : '95%' }"
    >
      <NuxtPage />
    </v-card>
  </div>
</template>

<script setup lang="ts">
const full = ref(false);
</script>

<style scoped>
.transform-180 {
  transform: rotate(180deg) !important;
  transition: transform 0.3s ease;
}

.transition-width {
  transition: width 0.3s ease-in-out;
}
</style>
