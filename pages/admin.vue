<template>
  <v-container>
    <NuxtPage />
  </v-container>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: ["admin", "business-create"],
});
</script>

<style lang="css" scoped></style>
