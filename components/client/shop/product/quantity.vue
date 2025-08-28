<template>
  <div class="d-flex qty text-caption rounded overflow-hidden" style="width: fit-content">
    <div class="px-2 font-weight-bold cursor-pointer btn-qty text-black" :class="{ 'py-1 px-3': !small }"
      @click="qtyModifier(false)">
      -
    </div>
    <v-divider vertical></v-divider>
    <div class="px-2 font-weight-bold" :class="{ 'py-1 px-3': !small }">
      {{ quantity }}
    </div>
    <v-divider vertical></v-divider>
    <div class="px-2 font-weight-bold cursor-pointer btn-qty text-black" :class="{ 'py-1 px-3': !small }"
      @click="qtyModifier(true)">
      +
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["increase"]);
const props = defineProps({
  quantity: [Number, String],
  small: {
    type: Boolean,
    default: false,
  },
});

import { useAppStore } from "~/store/app";
const { toggleSnackbar } = useAppStore();

const qtyModifier = (increase) => {
  if (increase)
    if (props.quantity === 10)
      toggleSnackbar({
        status: true,
        type: "warning",
        message: "You cannot purchase more than 10 items for this product",
      });
    else emits("increase", increase);
  else if (props.quantity > 1) emits("increase", increase);
};
</script>

<style lang="css" scoped>
.qty {
  border: 1px solid #b95dff;
}

.btn-qty {
  background-color: #e4c1ff;
}
</style>
