<template>
  <div>
    <v-icon
      v-if="status"
      color="grey-darken-2"
      size="small"
      icon="mdi-check-circle-outline"
      :title="titles.isAlready"
    ></v-icon>
    <v-btn
      variant="outlined"
      size="x-small"
      color="primary"
      v-else
      class="text-caption text-none"
      @click="emits('submit')"
      rounded
    >
      <span>{{ titles.isNot }}</span>
    </v-btn>
  </div>
</template>

<script setup>
defineProps({
  status: Boolean,
  titles: Object,
});
const emits = defineEmits(["submit"]);
</script>

<style lang="css" scoped></style>
