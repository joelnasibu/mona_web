<template>
  <div class="d-flex align-center">
    <v-icon icon="mdi-map-marker-outline" size="x-small" start></v-icon>
    <div class="text-caption">
      <!-- <div>Location</div> -->
      <div>
        <span>{{ location }}</span>
      </div>
    </div>
    <v-icon icon="mdi-chevron-down" size="x-small" class="ml-1"></v-icon>
  </div>
</template>

<script setup>
const location = ref("Bunia");
</script>

<style lang="css" scoped></style>
