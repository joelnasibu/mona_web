<template>
  <div
    class="text-capitalize w-100"
    :class="small ? 'text-subtitle-2' : 'text-h6 text-md-subtitle-2 '"
  >
    <div class="mx-auto py-2">
      <b>{{ title }}</b>
      <!-- <v-divider class="mt-2" color="black"></v-divider> -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  small: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="css" scoped></style>
