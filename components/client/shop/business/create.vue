<template>
  <div>
    <!-- <pre class="text-caption">{{payload}}</pre> -->
    <AdminCoreStepper
      :step="tab"
      :sections="sections"
      @navigate="navigate"
      @validation="validation"
      @save="submit"
    />
    <v-window v-model="tab">
      <v-window-item :value="0">
        <ClientShopBusinessAccountType
          :payload="payload"
          :trigger="triggers.stepOne"
          @step="navigate"
        />
      </v-window-item>
      <v-window-item :value="1">
        <ClientShopBusinessBasic
          :payload="payload"
          :trigger="triggers.stepTwo"
          @step="navigate"
        />
      </v-window-item>
      <v-window-item :value="2">
        <ClientShopBusinessAccountSetup
          :payload="payload"
          :trigger="triggers.stepThree"
          @step="navigate"
        />
      </v-window-item>
      <v-window-item :value="3">
        <ClientShopBusinessCredentials
          :payload="payload"
          :trigger="triggers.stepFour"
          @step="navigate"
        />
      </v-window-item>
      <v-window-item :value="4">
        <ClientShopBusinessPreview
          :payload="payload"
          @step="navigate"
          @submit="submit"
        />
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";
const { createUser, upgradeUser } = useAuthStore();

import { useAppStore } from "~/store/app";
const { error } = storeToRefs(useAppStore());

const payload = ref({
  email: "",
  phone: "",
  firstname: "",
  lastname: "",
  username: "",
  password: "",
  cpassword: "",
  roleId: 8,
  picture:
    "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=170667a&w=0&h=zP3l7WJinOFaGb2i1F4g8IS2ylw0FlIaa6x3tP9sebU=",
  gender: "",
  type: "",
  role: "",
  category: "",
});

const tab = ref(0);
const sections = [
  { title: "Account details", icon: "mdi-playlist-check" },
  { title: "User details", icon: "mdi-account-circle-outline" },
  { title: "User identifiers", icon: "mdi-key-outline" },
  { title: "User credentials", icon: "mdi-lock-outline" },
  { title: "Preview", icon: "mdi-file-outline" },
];
const triggers = ref({
  stepOne: false,
  stepTwo: false,
  stepThree: false,
  stepFour: false,
  stepFive: false,
});
const navigate = (step) => {
  tab.value = step;
};

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
    case 4:
      triggers.value.stepFive = !triggers.value.stepFive;
      break;
  }
};

const submit = async () => {
  if (payload.value.change) await upgradeUser(payload.value);
  else await createUser(payload.value);
  if (!error.value)
    setTimeout(() => {
      navigateTo({
        name: "auth",
      });
    }, 2000);
};
</script>

<style lang="css" scoped></style>
