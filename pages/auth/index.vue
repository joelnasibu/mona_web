<template>
  <div class="w-100">
    <div class="py-2 text-center">
      <b>Welcome to {{ environmentVariable.public.app_name }}</b>
    </div>

    <div class="d-flex align-center justify-center w-100">
      <v-card
        class="mx-auto mt-4 pa-4 auth-card rounded-lg bg-transparent"
        flat
      >
        <v-window v-model="username">
          <v-window-item :value="true" class="mt-1">
            <ClientAuthUsername
              v-if="username"
              @continue="username = false"
              :payload="payload"
            />
          </v-window-item>
          <v-window-item :value="false">
            <ClientAuthPassword
              v-if="!username"
              @return="username = true"
              :payload="payload"
            />
          </v-window-item>
        </v-window>
      </v-card>
    </div>
  </div>
</template>

<script setup>
const environmentVariable = useRuntimeConfig();

const payload = ref({
  username: "",
  password: "",
});

const username = ref(true);
</script>

<style lang="css" scoped>
.auth-card {
  width: clamp(320px, 30%, 420px);
  /* backdrop-filter: blur(5px); */
  /* background-color: rgba(255, 255, 255, 0.312) !important; */
}
</style>
