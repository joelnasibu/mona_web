<template>
  <v-btn
    class="rounded-lg"
    :class="{ 'card-outlined': !small }"
    icon="mdi-heart-outline"
    color="primary-accent"
    variant="text"
    :size="small ? '32' : 'small'"
  ></v-btn>
</template>

<script setup>
defineProps({
  small: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="css" scoped></style>
