<template>
  <div class="w-100 ">

    <div class="py-2 text-center">
      <b>Reset Password</b>
    </div>

    <div class="d-flex align-center justify-center w-100">
      <v-card class="mx-auto mt-4 pa-4 auth-card rounded-lg bg-transparent" flat>


        <v-form ref="formRef" class="form-data" @submit.prevent>

          <CorePassword :password="payload.password" :show-password="showPassword"
            @toggleShowPassword="showPassword = !showPassword" @weakPassword="checkPassword"
            @setPassword="setPassword" />

          <v-text-field placeholder="Re-enter Password" prepend-inner-icon="mdi-lock-outline" :append-inner-icon="`${showConfirm ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
            }`" @click:append-inner="showConfirm = !showConfirm" class="mt-1"
            :type="`${showConfirm ? 'text' : 'password'}`" @keypress.enter="handleSubmit"
            :rules="confirmPassword(payload.password)" bg-color="white" v-model="payload.confirmPassword"
            autocomplete="off"></v-text-field>

          <v-btn class="my-1 text-none text-caption" flat density="comfortable" color="primary-accent" block
            @click="handleSubmit()" :loading="loading">
            <span>Reset Passord</span>
          </v-btn>


        </v-form>
      </v-card>


    </div>


    <v-alert color="success" variant="tonal" class="w-100 text-h5 d-flex align-center justify-center" width="100"
      closable v-if="data.message">
      <span>{{ data.message }}</span>

    </v-alert>


  </div>
</template>

<script setup>
const route = useRoute();
const token = route.params.token;
import { useAppStore } from '~/store/app';
import { useAuthStore } from '~/store/auth'
const { decodeToken, resetPassword } = useAuthStore()
const { loading } = storeToRefs(useAppStore())
const { passwordRule, confirmPassword } = useRules()
const showPassword = ref(false);
const showConfirm = ref(false);
const isPasswordWeak = ref(false);
const checkPassword = (val) => {
  isPasswordWeak.value = val;
};
const payload = ref({
  password: "",
  confirmPassword: ""
});
const formRef = ref("")
const data = ref('');

const setPassword = (val) => {
  payload.value.password = val;
};
const getData = async () => {
  data.value = await decodeToken(token)
}
const handleSubmit = async () => {
  const { valid } = await formRef.value.validate()
  if (valid) {
    payload.value.userId = data.value.userId
    const res = await resetPassword(payload.value)
    if (res) navigateTo({ name: 'auth' })
  }


};

watchEffect(() => getData())
</script>

<style lang="css" scoped>
.auth-card {
  width: clamp(320px, 30%, 420px);
  /* backdrop-filter: blur(5px); */
  /* background-color: rgba(255, 255, 255, 0.312) !important; */
}
</style>
