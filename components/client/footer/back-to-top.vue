<template>
  <div class="px-2 py-3 text-center text-body-2 bg-primary-dark w-100">
    <div
      class="d-flex align-center justify-center cursor-pointer"
      @click="scrollTop"
    >
      <span>Back to top</span>
      <v-icon x-small end icon="mdi-menu-up"></v-icon>
    </div>
  </div>
</template>

<script setup>
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style lang="css" scoped></style>
