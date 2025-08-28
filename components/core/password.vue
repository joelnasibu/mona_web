<template>
  <div class="position-relative">
    <v-progress-linear
      :active="true"
      :model-value="progressVal"
      :color="progressColor"
      height="4"
      class="rounded-t"
      absolute
    >
    </v-progress-linear>
    <v-text-field
      placeholder="Password"
      prepend-inner-icon="mdi-lock-outline"
      class="text-caption"
      :append-inner-icon="`${
        showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
      }`"
      @click:append-inner="emits('toggleShowPassword')"
      :type="`${showPassword ? 'text' : 'password'}`"
      :rules="passwordRule()"
      v-model="pwd"
      hint="Password should contain a capital letter, character and number"
      :persistent-hint="progressVal < 100"
      @input="checkPwd"
      autocomplete="off"
    ></v-text-field>
  </div>
</template>

<script setup>
const props = defineProps({
  password: String,
  showPassword: Boolean,
});
const emits = defineEmits([
  "weakPassword",
  "setPassword",
  "toggleShowPassword",
]);

const { passwordRule } = useRules();

const pwd = computed({
  get() {
    return props.password;
  },
  set(val) {
    emits("setPassword", val);
  },
});

const hasUppercase = computed(() => {
  return /[A-Z]/.test(pwd.value);
});
const hasLowercase = computed(() => {
  return /[a-z]/.test(pwd.value);
});
const hasNumber = computed(() => {
  return /[0-9]/.test(pwd.value);
});
const hasSpecialCharacter = computed(() => {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd.value);
});
const isLong = computed(() => {
  return pwd.value?.length >= 8;
});
const progressVal = computed(() => {
  return (
    0 +
    isLong.value * 20 +
    hasLowercase.value * 20 +
    hasUppercase.value * 20 +
    hasNumber.value * 20 +
    hasSpecialCharacter.value * 20
  );
});
const progressColor = computed(() => {
  return progressVal.value <= 40
    ? "error"
    : progressVal.value <= 80
    ? "warning"
    : "success";
});

const checkPwd = () => {
  emits(
    "weakPassword",
    !hasUppercase.value ||
      !hasLowercase.value ||
      !hasNumber.value ||
      !hasSpecialCharacter.value ||
      !isLong.value
  );
};
</script>

<style lang="css" scoped></style>
