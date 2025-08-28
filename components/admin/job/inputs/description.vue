<template>
  <v-form ref="formData" class="py-1">
    <v-textarea
      placeholder="Summary"
      v-model="payload.summary"
      :rules="required()"
    ></v-textarea>
    <div class="text-caption mt-1">
      <span>Detailed description</span>
      <Editor :text="payload.description" @set-text="setSummary" />
    </div>
  </v-form>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  trigger: Boolean,
});
const emits = defineEmits(["step"]);

const { required } = useRules();

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
  let tab = 3;

  const { valid } = await formData.value.validate();
  if (valid)
    if (props.payload.description !== "") tab = 4;
    else
      toggleSnackbar({
        status: true,
        message: "Job description is required",
        type: "warning",
      });
  emits("step", tab);
};

const setSummary = (val) => {
  props.payload.description = val;
};
</script>

<style lang="scss" scoped></style>
