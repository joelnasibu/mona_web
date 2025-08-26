<template>
  <div
    class="bg-yellow-lighten-4 text-orange-darken-4 px-2 text-caption rounded-0"
    style="width: max-content"
  >
    <span>-{{ roundDiscountPercentage(discount) }}%</span>
  </div>
</template>

<script setup>
defineProps({
  discount: [Number, String],
  price: [Number, String],
});

const { roundDiscountPercentage } = useHelpers();
</script>

<style lang="scss" scoped></style>
