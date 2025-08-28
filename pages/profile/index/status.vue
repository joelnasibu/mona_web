<template>
  <div>Coming soon</div>
</template>

<script setup>
import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { error, loading, token, currentUser, profileImage } =
  storeToRefs(appStore);

console.log(currentUser.value);
</script>

<style lang="css" scoped></style>
