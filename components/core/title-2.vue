<template>
  <div class="title-2">
    <b>{{ title }}</b>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
.title-2 {
  font-size: 1.2rem;
}
</style>
