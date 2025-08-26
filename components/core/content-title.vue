<template>
  <div class="text-capitalize title text-subtitle-2 position-relative">
    <strong>{{ title }}</strong>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style lang="css" scoped>
.title {
  width: max-content;
}
.title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 2px;
  background-color: rgba(var(--v-theme-link));
}
</style>
