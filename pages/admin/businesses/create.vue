<template>
  <div>
    <AdminCorePageHeader route="admin-businesses">
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
          title="Next Step" v-else @click="validation(tab )" color="primary-dark" rounded>
          <span>Next</span>
        </v-btn>
      </div>
    </AdminCorePageHeader>
    <div class="mt-2">
      <AdminCoreStepper :step="tab" :sections="sections" @navigate="navigate" @validation="validation" @save="submit" />
      <v-window v-model="tab">
        <v-window-item :value="0">
          <AdminBusinessCreateBasic :payload="payload" :trigger="triggers.stepOne" @step="navigate" />
        </v-window-item>
        <v-window-item :value="1">
          <AdminBusinessCreateContact :payload="payload" :trigger="triggers.stepTwo" @step="navigate" />
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
            <!-- <v-divider></v-divider> -->
            <AdminBusinessPreview :payload="payload" />
          </CoreMidScreenLayout>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/app";
const { loading, error } = storeToRefs(useAppStore());

import { useBusinessStore } from "~/store/business";
const { createBusiness } = useBusinessStore();

const payload = ref({
  businessName: "",
  userId: 0,
  registrationNumber: "",
  businessTypeId: 0,
  taxIdentificationNumber: "",
  image: null,
  owner: {
    names: "Dummy user",
    phone: "254796577628",
    email: "test@gmail.com",
  },
  contactPerson: {
    names: "",
    phone: "",
    email: "",
  },
  address: {
    country: "",
    province: "",
    town: "",
    commune: "",
    quartier: "",
    avenue: "",
    no: "",
  },
  email: "",
  phone: "",
  dateOfRegistration: new Date(),
  bankDetails: {
    accountNo: "",
    accountName: "",
  },
  website: "",
  summary: "",
  businessCategory: "UNFORMAL",
});

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
  // const formdata = new FormData()

  // for (var item in payload.value) {
  //   console.log(item, payload.value[item])
  //   if (typeof payload.value[item] == 'object') formdata.append(item, payload.value[item])
  //   else formdata.append(item, payload.value[item])
  // }









  await createBusiness(payload.value);
  if (!error.value)
    setTimeout(() => {
      navigateTo({
        name: "admin-businesses",
      });
    }, 2000);
};

useSeoMeta({
  title: "Create business",
});
</script>

<style lang="css" scoped></style>
