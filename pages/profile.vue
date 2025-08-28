<template>
  <ClientOnly>
    <div class="">
      <v-divider></v-divider>
      <ProfileLinks />
      <CoreMidScreenLayout>
        <div>
          <NuxtPage />
        </div>
      </CoreMidScreenLayout>
    </div>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  // layout: "profile",
  middleware: ["auth"],
});
</script>

<style lang="css" scoped></style>
