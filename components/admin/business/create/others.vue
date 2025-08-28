<template>
  <v-form ref="formData" class="py-1">
    <v-text-field label="Website" v-model="payload.website"></v-text-field>
    <div class="text-caption mt-1">
      <span>Business summary</span>
      <Editor :text="payload.summary" @set-text="setSummary" />
    </div>
  </v-form>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  trigger: Boolean,
});
const emits = defineEmits(["step"]);

import { useAppStore } from "~/store/app";
const { toggleSnackbar } = useAppStore();

const formData = ref(null);
watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);
const moveNext = async () => {
  // let tab = 3;
  let tab = 4;

  // const { valid } = await formData.value.validate();
  // if (valid)
  //   if (props.payload.summary) tab = 4;
  //   else
  //     toggleSnackbar({
  //       status: true,
  //       message: "Business summary is required",
  //       type: "warning",
  //     });
  emits("step", tab);
};

const setSummary = (val) => {
  props.payload.summary = val;
};
</script>

<style lang="scss" scoped></style>
