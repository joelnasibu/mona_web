<template>
  <div class="w-100">
    <div class="py-2 text-center">
      <b>Set new Password</b>
    </div>
    <div class="d-flex align-center justify-center w-100">
      <v-card
        class="mx-auto mt-4 pa-4 auth-card rounded-lg bg-transparent"
        flat
      >
        <v-form ref="formData">
          <v-text-field
            label="New password"
            append-inner-icon="mdi-lock-outline"
            v-model="emailAddress"
            :rules="email()"
            @keypress.enter.prevent="handleForgot"
          ></v-text-field>
          <v-text-field
            label="Confirm password"
            append-inner-icon="mdi-lock-outline"
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
        asdf
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
