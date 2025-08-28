<template>
  <client-only>
    <div class="d-flex align-center ga-2 text-caption">
      <div class="d-flex align-center ga-1">
        <v-icon icon="mdi-star" color="link" size="small"></v-icon>
        <span>{{ rating }}</span>
      </div>
      <div class="text-disabled">
        <span>(0 review)</span>
      </div>
    </div>
  </client-only>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: [Number, String],
    default: 5,
  },
  small: {
    type: Boolean,
    default: true,
  },
});

const sanitizedRating = computed(() => {
  return props.rating;
});
</script>

<style lang="css" scoped></style>
