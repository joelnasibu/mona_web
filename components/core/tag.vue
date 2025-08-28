<template>
  <v-btn
    class="rounded px-2 text-caption font-weight-regular"
    :class="grey ? 'card-border' : 'card-primary'"
    flat
    size="x-small"
    style="pointer-events: none"
  >
    <span>{{ tag }}</span>
  </v-btn>
</template>

<script setup>
defineProps({
  tag: String,
  grey: Boolean,
});
</script>

<style lang="css" scoped></style>
