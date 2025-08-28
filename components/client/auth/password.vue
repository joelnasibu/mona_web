<template>
  <v-form ref="formRef" @submit.prevent>
    <div
      class="pb-2 d-flex justify-space-between text-caption font-weight-bold"
    >
      <span>{{ payload.username }}</span>
      <a @click="handleReturn" class="cursor-pointer">Change?</a>
    </div>
    <v-text-field
      label="Password"
      v-model.trim="payload.password"
      autofocus
      @keypress.enter="handleLogin()"
      :type="showPassword ? 'text' : 'password'"
      prepend-inner-icon="mdi-lock-outline"
      :append-inner-icon="
        showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
      "
      :rules="rules"
      @click:append-inner="showPassword = !showPassword"
      bg-color="white"
    ></v-text-field>
    <div class="text-left font-weight-bold text-caption">
      <NuxtLink :to="{ name: 'auth-forgot-password' }">
        <span>Forgot your password</span>
      </NuxtLink>
    </div>
    <v-btn
      block
      flat
      color="primary-accent"
      class="text-body-2 text-capitalize mt-3"
      text="Log in"
      size="small"
      @click="handleLogin()"
      :loading="loading"
    >
    </v-btn>
    <div class="my-3 d-flex align-center">
      <div class="d-flex align-center text-caption">
        <v-checkbox
          hide-details
          class="text-caption"
          color="secondary-accent"
        ></v-checkbox>
        <span>Keep me signed in?</span>
      </div>
      <v-spacer></v-spacer>
      <div class="">
        <v-tooltip
          location="right bottom"
          max-width="300"
          open-on-click
          open-on-hover
        >
          <template #activator="{ props }">
            <v-icon
              v-bind="props"
              icon="mdi-help-circle-outline"
              size="x-small"
              end
            >
            </v-icon>
          </template>
          <div class="d-flex pa-2 text-caption flex-column">
            <span>
              This reduces the number of times you're asked to sign in on this
              device.<br />
              For increased account security, use this feature only on your
              personal devices.
            </span>
          </div>
        </v-tooltip>
      </div>
    </div>
  </v-form>
</template>

<script setup>
const props = defineProps({
  payload: Object,
});
const emit = defineEmits(["return"]);

const { routeNavigation } = useHelpers();

import { useAppStore } from "~/store/app";
const { loading, error, currentUser } = storeToRefs(useAppStore());

import { useAuthStore } from "~/store/auth";
const { login } = useAuthStore();

const showPassword = ref(false);
const rules = [
  (v) => !!v || "Password Required",
  (v) => v.length >= 6 || "6 characters minimun",
];

const handleReturn = () => {
  emit("return");
};
const formRef = ref("");
const handleLogin = async () => {
  const { valid } = await formRef.value.validate();
  if (valid) {
    await login(props.payload);
    if (!error.value)
      currentUser.value?.accessLevel > 3
        ? routeNavigation()
        : navigateTo({ name: "admin" });
    else props.payload.password = "";
  }
};
</script>

<style lang="css" scoped></style>
