<template>
  <div class="w-100">
    <div class="py-2 text-center">
      <b>Forgot Password</b>
    </div>
    <div class="d-flex align-center justify-center w-100">
      <v-card
        class="mx-auto mt-4 pa-4 auth-card rounded-lg bg-transparent"
        flat
      >
        <v-form ref="formData">
          <v-text-field
            label="Adresse email"
            prepend-inner-icon="mdi-email-outline"
            v-model="emailAddress"
            :rules="email()"
            @keypress.enter.prevent="handleForgot"
          ></v-text-field>
          <v-btn
            class="rounded-lg text-none text-caption"
            color="primary-accent"
            block
            flat
            size="small"
            :loading="loading"
            @click="handleForgot"
          >
            <span>Submit</span>
          </v-btn>
        </v-form>
        <div class="w-100 text-caption mt-4">
          <div class="d-flex align-center w-100">
            <span>Already have account?</span>
            <NuxtLink :to="{ name: 'auth' }" class="px-2 text-primary-accent">
              <span>Sign in instead</span>
            </NuxtLink>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
const environmentVariable = useRuntimeConfig();
const { email } = useRules();

import { useAppStore } from "~/store/app";
const { loading, error } = storeToRefs(useAppStore());

import { useAuthStore } from "~/store/auth";
const { forgotPassword } = useAuthStore();

const emailAddress = ref("");
const formData = ref(null);
const handleForgot = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    await forgotPassword({ email: emailAddress.value });
    if (!error.value) {
      emailAddress.value = "";
      navigateTo({
        name: "auth",
      });
    }
  }
};
</script>

<style lang="css" scoped>
.auth-card {
  width: clamp(320px, 30%, 420px);
  /* backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.312) !important; */
}
</style>
