<template>
  <ClientOnly>
    <div class="d-flex align-center ga-3 text-caption text-md-body-2">
      <v-rating v-model="ratingValue" readonly color="link" density="compact" size="x-small" half-increments></v-rating>
      <span class="text-link">{{ rating }}</span>
      <div class="text-disabled d-flex align-center ga-2">
        <v-icon icon="mdi-circle-medium" size="small"></v-icon>
        <div class="mx-1 d-flex align-center">
          <v-icon icon="mdi-message-reply-text-outline" start></v-icon>
          <span>{{ reviews }} reviews</span>
        </div>
        <v-icon icon="mdi-circle-medium" size="small"></v-icon>
        <div class="mx-1 d-flex align-center">
          <v-icon icon="mdi-basket-outline" start></v-icon>
          <span>{{ stock }} Units remaining</span>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: [Number, String],
    default: 3.5
  },
  reviews: {
    type: [Number, String],
    default: 0
  },
  stock: {
    type: [Number, String],
    default: 0
  }
});
const ratingValue = computed(() => props.rating)


</script>

<style lang="css" scoped></style>
