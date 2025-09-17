<template>
<<<<<<< HEAD
  <div class="d-flex qty text-caption rounded overflow-hidden" style="width: fit-content">
    <div class="px-2 font-weight-bold cursor-pointer btn-qty text-black" :class="{ 'py-1 px-3': !small }"
      @click="qtyModifier(false)">
=======
  <div
    class="d-flex qty text-caption rounded overflow-hidden"
    style="width: fit-content"
  >
    <div
      class="px-2 font-weight-bold cursor-pointer btn-qty text-black"
      :class="{ 'py-1 px-3': !small }"
      @click="qtyModifier(false)"
    >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
      -
    </div>
    <v-divider vertical></v-divider>
    <div class="px-2 font-weight-bold" :class="{ 'py-1 px-3': !small }">
      {{ quantity }}
    </div>
    <v-divider vertical></v-divider>
<<<<<<< HEAD
    <div class="px-2 font-weight-bold cursor-pointer btn-qty text-black" :class="{ 'py-1 px-3': !small }"
      @click="qtyModifier(true)">
=======
    <div
      class="px-2 font-weight-bold cursor-pointer btn-qty text-black"
      :class="{ 'py-1 px-3': !small }"
      @click="qtyModifier(true)"
    >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
      +
    </div>
  </div>
</template>

<script setup>
<<<<<<< HEAD
const emits = defineEmits(["increase"]);
=======
const emits = defineEmits(["change"]); // single event
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
const props = defineProps({
  quantity: [Number, String],
  small: {
    type: Boolean,
    default: false,
  },
});

import { useAppStore } from "~/store/app";
const { toggleSnackbar } = useAppStore();

<<<<<<< HEAD
const qtyModifier = (increase) => {
  if (increase)
    if (props.quantity === 10)
=======
const qtyModifier = (change) => {
  if (change > 0) {
    // increase
    if (props.quantity === 10) {
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
      toggleSnackbar({
        status: true,
        type: "warning",
        message: "You cannot purchase more than 10 items for this product",
      });
<<<<<<< HEAD
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
=======
    } else {
      emits("change", +1); // send +1
    }
  } else {
    // decrease
    if (props.quantity > 1) {
      emits("change", -1); // send -1
    }
  }
};
</script>


<style lang="css" scoped>
.qty {
  border: 1px solid rgba(var(--v-theme-primary));
}

.btn-qty {
  background-color: rgba(var(--v-theme-primary), 0.2);
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
}
</style>
