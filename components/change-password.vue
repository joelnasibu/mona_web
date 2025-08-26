<template>
  <v-form ref="formData">
    <v-text-field
      label="Current password"
      prepend-inner-icon="mdi-lock-outline"
      autocomplete="off"
      name="newPassword"
      :append-inner-icon="`${
        showCurrentPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
      }`"
      @click:append-inner="showCurrentPassword = !showCurrentPassword"
      :type="`${showCurrentPassword ? 'text' : 'password'}`"
      v-model="passwords.oldPassword"
      :rules="required()"
    ></v-text-field>
    <div
      class="text-decoration-underline text-caption mb-2 cursor-pointer"
      @click="setNewPassword"
    >
      <span>Generate new password</span>
    </div>
    <CorePassword
      :password="passwords.newPassword"
      :show-password="showPassword"
      @toggleShowPassword="showPassword = !showPassword"
      @weakPassword="checkPassword"
      @setPassword="setPassword"
    />
    <v-text-field
      label="Re-enter new password"
      prepend-inner-icon="mdi-lock-outline"
      autocomplete="off"
      :append-inner-icon="`${
        showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
      }`"
      @click:append-inner="showPassword = !showPassword"
      :type="`${showPassword ? 'text' : 'password'}`"
      v-model="passwords.confirm"
      :rules="confirmPassword(passwords.newPassword)"
      class="mt-2"
    ></v-text-field>
    <div class="d-flex justify-end">
      <v-btn
        class="text-caption text-none rounded-lg"
        color="primary-accent"
        flat
        @click="handleSave"
        block
        :loading="loading"
      >
        <span>Save</span>
      </v-btn>
    </div>
  </v-form>
</template>

<script setup>
const props = defineProps({
  dialog: Boolean,
});
const emits = defineEmits(["changed"]);

const { required, confirmPassword } = useRules();
const { randPassword } = useHelpers();

import { useAppStore } from "~/store/app";
const { error, loading, currentUser } = storeToRefs(useAppStore());

import { useAuthStore } from "~/store/auth";
const { changePassword } = useAuthStore();

const formData = ref(null);
const showPassword = ref(false);
const showCurrentPassword = ref(false);
const passwords = ref({
  oldPassword: "",
  newPassword: "",
  confirm: "",
});
const isPasswordWeak = ref(false);
const checkPassword = (val) => {
  isPasswordWeak.value = val;
};
const setPassword = (val) => {
  passwords.value.newPassword = val;
};

const setNewPassword = () => {
  passwords.value.newPassword = passwords.value.confirm = randPassword();
  showPassword.value = true;
};

const handleSave = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    await changePassword(passwords.value);
    if (!error.value) {
      setTimeout(() => {
        emits("changed");
      }, 2000);
    }
  }
};
</script>

<style lang="css" scoped></style>
