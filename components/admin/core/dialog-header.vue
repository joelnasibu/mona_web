<template>
  <v-card-title
    class="text-body-2 pa-0 d-flex align-center ga-2 bg-drawer position-sticky"
    style="top: 0; z-index: 2"
  >
    <v-btn
      icon="mdi-close"
      size="small"
      rounded="lg"
      title="Close"
      @click="emits('close')"
      variant="text"
      class="rounded-te-0 rounded-be-0"
    ></v-btn>
    <span>{{ title }}</span>
    <v-spacer></v-spacer>
    <slot />
  </v-card-title>
</template>

<script setup>
defineProps({
  title: String,
});
const emits = defineEmits(["close"]);
</script>

<style lang="css" scoped></style>
