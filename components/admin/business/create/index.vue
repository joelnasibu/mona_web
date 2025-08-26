<template>
  <div class="mt-2">
    <AdminCoreStepper :step="tab" :sections="sections" :action="true" @navigate="navigate" @validation="validation"
      @save="submit" />
    <v-window v-model="tab">
      <v-window-item :value="0">
        <AdminBusinessCreateBasic :payload="payload" :trigger="triggers.stepOne" @step="navigate" />
      </v-window-item>
      <v-window-item :value="1">
        <AdminBusinessCreateContact :payload="payload" :trigger="triggers.stepTwo" :update="update" @step="navigate" />
      </v-window-item>
      <v-window-item :value="2">
        <AdminAddressInputs :payload="payload" :trigger="triggers.stepThree" @step="navigate" />
      </v-window-item>
      <v-window-item :value="3">
        <CoreMidScreenLayout>
          <div class="mt-3">
            <AdminBusinessCreateOthers :payload="payload" :trigger="triggers.stepFour" @step="navigate" />
          </div>
        </CoreMidScreenLayout>
      </v-window-item>
      <v-window-item :value="4">
        <CoreMidScreenLayout>
          <AdminBusinessPreview :payload="payload" />
        </CoreMidScreenLayout>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  update: {
    type: Boolean,
    default: false,
  },
});

import { useAppStore } from "~/store/app";
const { error } = storeToRefs(useAppStore());

import { useBusinessStore } from "~/store/business";
const { createBusiness, updateBusiness } = useBusinessStore();

const tab = ref(0);
const sections = [
  { title: "Basic Info", icon: "mdi-folder-information-outline" },
  { title: "Contact", icon: "mdi-phone-outline" },
  { title: "Address", icon: "mdi-map-marker-outline" },
  { title: "Other details", icon: "mdi-menu" },
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
  props.update
    ? await updateBusiness(props.payload)
    : await createBusiness(props.payload);
  if (!error.value)
    setTimeout(() => {
      navigateTo({
        name: "admin-businesses",
      });
    }, 2000);
};

useSeoMeta({
  title: "Business details",
});
</script>

<style lang="css" scoped></style>
