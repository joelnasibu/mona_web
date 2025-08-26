<template>
  <v-app>
    <ProfileAppBar />
    <v-main class="system-bg">
      <NuxtPage />
    </v-main>
    <AdminFooter />
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
