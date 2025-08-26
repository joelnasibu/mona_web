<template>
  <div>
    <AdminCorePageHeader :route="route">
      <div class="d-flex align-center">
        <v-btn prepend-icon="mdi-chevron-left" class="text-caption text-capitalize mr-2"
          :color="tab > 0 ? 'primary-accent' : ''" size="small" flat title="Previous Step" :disabled="!tab > 0"
          @click="navigate(tab - 1)" variant="text" rounded>
          <span>Prev</span>
        </v-btn>
        <v-btn class="text-capitalize ml-2 text-caption" prepend-icon="mdi-content-save" size="small"
          v-if="tab === sections.length - 1" flat color="primary-dark" @click="submit" :loading="loading" rounded>
          <span>Save</span>
        </v-btn>
        <v-btn append-icon="mdi-chevron-right" size="small" flat class="ml-2 text-caption text-capitalize"
          title="Next Step" v-else @click="validation(tab)" color="primary-dark" rounded>
          <span>Next</span>
        </v-btn>
      </div>
    </AdminCorePageHeader>
    <div class="mt-2">
      <AdminCoreStepper :step="tab" :sections="sections" @navigate="navigate" @validation="validation" @save="submit" />
      <v-window v-model="tab" class="py-3">
        <v-window-item :value="0">
          <AdminProductInputsBasic :payload="payload" :trigger="triggers.stepOne" @step="navigate" :edit="edit" />
        </v-window-item>
        <v-window-item :value="1">
          <AdminProductInputsBusiness :payload="payload" :trigger="triggers.stepTwo" @step="navigate" />
        </v-window-item>
        <v-window-item :value="2">
          <AdminProductInputsStock :payload="payload" :trigger="triggers.stepThree" @step="navigate" :edit="edit" />
        </v-window-item>
        <v-window-item :value="3">
          <AdminProductInputsDescription :payload="payload" :trigger="triggers.stepFour" @step="navigate" />
        </v-window-item>
        <v-window-item :value="4">
          <AdminProductPreview :payload="payload" />
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  edit: {
    type: Boolean,
    default: false
  },
  payload: Object,
  route: String,
});

import { useAppStore } from "~/store/app";
const { loading, error } = storeToRefs(useAppStore());

import { useProductStore } from "~/store/products";
const { createProduct, updateProduct } = useProductStore();

const tab = ref(0);
const sections = [
  { title: "Product details", icon: "mdi-content-paste" },
  { title: "Business", icon: "mdi-storefront-outline" },
  { title: "Stock", icon: "mdi-database-outline" },
  { title: "Product description", icon: "mdi-text" },
  { title: "Preview", icon: "mdi-file-outline" },
];
const triggers = ref({
  stepOne: false,
  stepTwo: false,
  stepThree: false,
  stepFour: false,
});
const navigate = (step) => {
  // if (step <= sections.length) {
  tab.value = step;
  // }
};
// watch(
//   () => tab.value,
//   (next, current) => {
//     if (current < next) {
//       validation(current);
//     }
//   }
// );
const validation = (index) => {
  switch (index) {
    case 0:
      triggers.value.stepOne = !triggers.value.stepOne;
      break;
    case 1:
      triggers.value.stepTwo = !triggers.value.stepTwo;
      break;
    case 2:
      triggers.value.stepThree = !triggers.value.stepThree;
      break;
    case 3:
      triggers.value.stepFour = !triggers.value.stepFour;
      break;
  }
};

const submit = async () => {
  props.route
    ? await createProduct(props.payload)
    : await updateProduct(props.payload);
  if (!error.value)
    setTimeout(() => {
      navigateTo({
        name: "admin-products",
      });
    }, 2000);
};
</script>

<style lang="css" scoped></style>
