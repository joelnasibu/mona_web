<template>
  <CoreSnackbar :payload="snackbar" />
  <NuxtLoadingIndicator :height="4" :throttle="0" color="#9767fe" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useAppStore } from "./store/app";
const { snackbar } = storeToRefs(useAppStore());
</script>
