<template>
  <v-app>
    <AdminAppBar />
    <v-main class="system-bg">
      <v-container class="px-4 py-2">
        <NuxtPage />
      </v-container>
    </v-main>
    <AdminFooter />
  </v-app>
</template>

<script setup>
const environmentVariable = useRuntimeConfig();

import { useAppStore } from "~/store/app";
const { currentUser, token } = storeToRefs(useAppStore());

useHead({
  titleTemplate: (title) => `${title} - Administration`,
});
useSeoMeta({
  title: environmentVariable.public.app_name,
  ogTitle: "Skill Up",
  description: "Skill up administration description.",
  ogDescription: "Skill up administration description OG.",
  ogImage: "https://preview-skill",
  twitterCard: "summary_large_image",
});
</script>

<style lang="css" scoped>
.system-bg {
  background: url("~/assets/images/bg/white.png");
  background-position: center;
  background-size: contain;
  /* background-color: hsla(240, 100%, 90%, 0.1); */
}
</style>
