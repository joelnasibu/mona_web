<template>
  <p :class="primary ? 'text-green' : 'text-grey'">
    <v-icon size="x-small" icon="mdi-briefcase-clock" class="pr-1"></v-icon>
    {{  dateDifference(date) }}
  </p>
</template>

<script setup>
defineProps({
  date: [String, Date],
  primary: {
    type: Boolean,
    default: true,
  },
});

const { dateDifference } = useHelpers();
</script>

<style lang="css" scoped></style>
