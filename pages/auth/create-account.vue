<template>
  <div class="w-100">
    <div class="py-2 text-center">
      <b>Create a free account</b>
    </div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="4">
          <v-card
            class="mx-auto mt-4 pa-5 auth-card rounded-lg bg-transparent"
            flat
          >
            <v-form ref="formRef" class="form-data" @submit.prevent>
              <div class="d-flex ga-2">
                <v-text-field
                  placeholder="First name"
                  v-model="payload.firstname"
                  bg-color="white"
                  :rules="name()"
                  prepend-inner-icon="mdi-account-outline"
                ></v-text-field>
                <v-text-field
                  placeholder="Last name"
                  v-model="payload.lastname"
                  bg-color="white"
                  :rules="name()"
                  prepend-inner-icon="mdi-account-outline"
                ></v-text-field>
              </div>
              <v-text-field
                placeholder="Email address"
                v-model="payload.email"
                bg-color="white"
                :rules="email()"
                prepend-inner-icon="mdi-email-outline"
              ></v-text-field>
              <Telephone :number="payload.phone" @set-phone="setPhone" />
              <CorePassword
                :password="payload.password"
                :show-password="showPassword"
                @toggleShowPassword="showPassword = !showPassword"
                @weakPassword="checkPassword"
                @setPassword="setPassword"
              />
              <v-text-field
                placeholder="Re-enter Password"
                prepend-inner-icon="mdi-lock-outline"
                :append-inner-icon="`${
                  showConfirm ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                }`"
                @click:append-inner="showConfirm = !showConfirm"
                class="mt-1"
                :type="`${showConfirm ? 'text' : 'password'}`"
                :rules="confirmPassword(payload.password)"
                bg-color="white"
                v-model="payload.confirmPassword"
                autocomplete="off"
              ></v-text-field>

              <v-btn
                class="my-1 text-none text-caption"
                flat
                density="comfortable"
                color="primary-accent"
                block
                @click="handleContinue()"
                :loading="loading"
              >
                <span>Continue</span>
              </v-btn>
              <div class="text-start my-5 text-caption-2">
                <span>
                  By conitnuing, I consent to Smartsell's
                  <a href="#"> Conditions of use</a> and
                  <a href="#"> Private Policy</a>.</span
                >
              </div>
              <div class="w-100 text-caption">
                <div class="d-flex align-center w-100">
                  <span>Already have account?</span>
                  <NuxtLink
                    :to="{ name: 'auth' }"
                    class="px-2 text-primary-accent"
                  >
                    <span>Sign in instead</span>
                  </NuxtLink>
                </div>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { required, name, email, confirmPassword } = useRules();

import { useAppStore } from "~/store/app";
const { loading, error } = storeToRefs(useAppStore());

import { useAuthStore } from "~/store/auth";
const { createAccount } = useAuthStore();

const payload = ref({
  email: "",
  firstname: "",
  lastname: "",
  phone: "",
  password: "",
  confirmPassword: "",
  picture: "",
  gender: "",
  username: "",
});

const setPhone = (val) => {
  payload.value.phone = val;
};

const showPassword = ref(false);
const showConfirm = ref(false);
const isPasswordWeak = ref(false);
const checkPassword = (val) => {
  isPasswordWeak.value = val;
};
const setPassword = (val) => {
  payload.value.password = val;
};

const formRef = ref("");
const handleContinue = async () => {
  const { valid } = await formRef.value.validate();
  if (valid) {
    await createAccount(payload.value);
    if (!error.value)
      setTimeout(() => {
        navigateTo({
          name: "auth",
        });
      }, 2000);
  }
};

useHead({
  title: "Create a new account",
});
</script>

<style lang="css" scoped>
/* .auth-card {
  width: clamp(320px, 30%, 420px);
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.312) !important;
} */
a {
  color: currentColor;
}
</style>
