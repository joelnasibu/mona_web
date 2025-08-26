<template>
  <div class="pa-3 text-subtitle-2 d-flex align-center">
    <span>{{ title }}</span>
    <v-spacer></v-spacer>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="css" scoped></style>
