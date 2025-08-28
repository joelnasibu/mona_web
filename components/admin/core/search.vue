<template>
  <v-text-field
    style="max-width: clamp(300px, 30%, 350px)"
    :placeholder="label"
    hide-details
    prepend-inner-icon="mdi-magnify"
    v-model="searchValue"
    bg-color="off-white-1"
    rounded
    type="search"
  ></v-text-field>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Filter...",
  },
  search: String,
});
const emits = defineEmits(["search"]);

const searchValue = computed({
  get() {
    return props.search;
  },
  set(val) {
    emits("search", val);
  },
});
</script>

<style lang="scss" scoped></style>
