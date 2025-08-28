<template>
  <v-skeleton-loader :type="type"></v-skeleton-loader>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'image, list-item-two-line',
  },
});
</script>

<style lang="css" scoped></style>
