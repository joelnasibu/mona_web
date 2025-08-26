<template>
  <div class="py-2 bg-card text-body-2 rounded-ts-lg rounded-te-lg px-3">
    <v-badge :content="number" inline color="link" location="end">
      <b class="mr-5">{{ text }}</b>
    </v-badge>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  number: [String, Number],
});
</script>

<style lang="scss" scoped></style>
