<template>
  <v-btn
    class="text-capitalize"
    icon="mdi-dots-horizontal"
    rounded="lg"
    size="28"
    flat
    color="primary-dark"
    title="Preview details"
    @click="emits('details')"
  >
  </v-btn>
</template>

<script setup>
const emits = defineEmits(["details"]);
</script>

<style lang="css" scoped></style>
