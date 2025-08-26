<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" sm="5">
        <div class="text-caption d-flex ga-3 text-grey-darken-2">
          <v-icon start icon="mdi-information-outline" class="mt-1"></v-icon>
          <span
            >An essential step in safeguarding your account, where you devise a
            unique combination of characters, ensuring security and access
            solely to you.</span
          >
        </div>
      </v-col>
      <v-col cols="12" sm="7">
        <v-form ref="formData">
          <div class="text-start text-caption mb-2">
            <span
              class="text-decoration-underline cursor-pointer"
              @click="
                payload.password = payload.cpassword = randPassword();
                showPassword = true;
              "
              >Generate password</span
            >
          </div>
          <CorePassword
            :password="payload.password"
            :show-password="showPassword"
            @toggleShowPassword="showPassword = !showPassword"
            @weakPassword="checkPassword"
            @setPassword="setPassword"
          />
          <v-text-field
            label="Confirm password"
            class="mt-1"
            v-model="payload.cpassword"
            :rules="confirmPassword(payload.password)"
            prepend-inner-icon="mdi-lock-outline"
            :type="`${showPassword ? 'text' : 'password'}`"
            :append-inner-icon="`${
              showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
            }`"
            @click:append-inner="showPassword = !showPassword"
            @keypress.enter="moveNext"
          ></v-text-field>

          <v-btn
            size="small"
            flat
            block
            color="primary-dark"
            rounded
            class="text-caption"
            @click="moveNext"
          >
            <span>Continue</span>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  trigger: Boolean,
});
const emits = defineEmits(["step"]);
const { confirmPassword } = useRules();
const { randPassword } = useHelpers();
const { isMobile } = useDevice();

const formData = ref(null);
const isPasswordWeak = ref(false);
const showPassword = ref(false);
const checkPassword = (val) => {
  isPasswordWeak.value = val;
};
const setPassword = (val) => {
  props.payload.password = val;
};

watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);
const moveNext = async () => {
  let tab = 3;

  const { valid } = await formData.value.validate();
  if (valid) tab = 4;
  emits("step", tab);
};
</script>

<style lang="css" scoped></style>
