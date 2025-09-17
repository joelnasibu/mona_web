<template>
  <CoreSnackbar :payload="snackbar" />
  <NuxtLoadingIndicator :height="4" :throttle="0" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useAppStore } from "./store/app";
const { snackbar } = storeToRefs(useAppStore());
</script>
<style>
.nuxt-loading-indicator {
  background: linear-gradient(
    90deg,
    rgba(var(--v-theme-primary)),
    rgba(var(--v-theme-secondary))
  ) !important;
  background-size: 200% 100%;
  animation: gradientMove 3s ease infinite;
}

/* Optional smooth fading effect */
@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
