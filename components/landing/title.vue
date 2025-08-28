<template>
  <div
    class="container bg-white text-center py-10 text-h5 d-flex justify-center"
  >
    <!-- data-aos-duration="800"
    data-aos="fade-left" -->
    <b class="title-text position-relative mt-n6">{{ title }}</b>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="css" scoped>
.container {
  clip-path: polygon(0 0, 100% 0, 100% 55%, 0 90%);
}
.title-text::after {
  content: "";
  margin: auto;
  left: 0;
  right: 0;
  bottom: -2px;
  width: 55%;
  height: 2px;
  position: absolute;
  background-color: currentColor;
}
</style>
