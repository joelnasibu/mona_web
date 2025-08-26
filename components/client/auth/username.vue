<template>
  <v-form ref="formRef" class="form-data" @submit.prevent>
    <v-text-field
      placeholder="Email or username"
      prepend-inner-icon="mdi-email-outline"
      v-model.trim="payload.username"
      autofocus
      :rules="rules"
      @keypress.enter.prevent="handleContinue()"
      bg-color="white"
    ></v-text-field>
    <v-btn
      class="my-1 text-none text-caption"
      flat
      density="comfortable"
      color="primary-accent"
      block
      @click.prevent="handleContinue()"
    >
      <span>Continue</span>
    </v-btn>
    <div class="my-3 text-caption text-center">
      <!-- <span>Or continue with</span>
      <div class="mt-3 d-flex flex-column ga-3">
        <div
          v-for="(social, i) in socials"
          :key="i"
          :title="`Login with ${social}`"
          class="w-100"
        >
          <v-btn
            class="card-outlined text-caption rounded-lg"
            variant="text"
            block
          >
            <div class="d-flex align-center">
              <Icon :name="`devicon:${social}`" size="1.3rem" />
              <span class="px-2">{{ social }}</span>
            </div>
          </v-btn>
        </div>
      </div> -->
      <div class="text-start my-5 text-caption-2">
        <span class="text-grey-darken-3">
          By proceeding, I consent to {{ appConfig.public.app_name }}'s
          <a href="#" class="text-decoration-underline">
            Free Membership Agreement</a
          >
          and
          <a href="#" class="text-decoration-underline"> Private Policy</a
          >.</span
        >
      </div>
    </div>
    <div class="text-caption my-2">
      <a @click="showHelp = !showHelp" class="d-flex text-black cursor-pointer">
        <v-icon
          icon="mdi-menu-right"
          start
          class="icon"
          :class="{ transform: showHelp }"
        ></v-icon>
        <div class="text-caption my-auto">
          <b>Help?</b>
          <v-expand-transition>
            <div class="text-caption d-flex flex-column" v-if="showHelp">
              <NuxtLink
                :to="{ name: 'auth-forgot-password' }"
                class="text-primary-accent mt-1"
              >
                <span>Forgot your password</span>
              </NuxtLink>
              <a href="javascript:void(0)" class="text-primary-accent mt-1"
                >Other issues with Sign in?</a
              >
            </div>
          </v-expand-transition>
        </div>
      </a>
    </div>
    <div class="text-caption w-100">
      <div class="d-flex align-center w-100">
        <span>New Skill Up account?</span>
        <NuxtLink
          :to="{ name: 'auth-create-account' }"
          class="px-2 text-primary-accent"
        >
          <span>Sign up</span>
        </NuxtLink>
      </div>
    </div>
  </v-form>
</template>

<script setup>
defineProps({
  payload: Object,
});
const emit = defineEmits(["continue"]);

const appConfig = useRuntimeConfig();

const showHelp = ref(false);
const formRef = ref("");
const rules = [(v) => !!v || "Required"];
const handleContinue = async () => {
  const { valid } = await formRef.value.validate();
  if (valid) {
    emit("continue");
  }
};

const socials = ["facebook", "google"];
</script>

<style lang="css" scoped>
.icon {
  transition: transform 0.3s linear;
}
a {
  color: currentColor;
}
</style>
