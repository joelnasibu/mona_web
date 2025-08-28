<template>
  <v-app>
    <ClientJobsAppBar />
    <v-main>
      <NuxtPage />
    </v-main>
    <ClientFooter />
  </v-app>
</template>

<script setup>
const environmentVariable = useRuntimeConfig();
useHead({
  titleTemplate: (title) =>
    `${title ?? "AG"} - ${environmentVariable.public.app_name}`,
});
</script>

<style lang="css" scoped></style>
