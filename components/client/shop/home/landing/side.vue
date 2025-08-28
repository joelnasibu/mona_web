<template>
  <v-card class="card-primary h-100 rounded-lg" flat>
    <div
      class="d-flex flex-column align-center justify-center h-100 pa-5 pa-md-3"
    >
      <v-avatar size="60" color="white" :image="profileImage"></v-avatar>
      <div class="text-caption w-100 mt-5">
        <p class="text-center">Login to contact seller</p>
        <v-btn
          color="primary-accent"
          class="text-none text-caption my-3"
          flat
          block
          size="small"
          :to="{ name: 'auth-create-account' }"
          rounded
        >
          <span>Join now</span>
        </v-btn>
        <v-btn
          color="primary-accent"
          class="text-none text-caption"
          variant="outlined"
          block
          size="small"
          :to="{ name: 'auth' }"
          rounded
        >
          <span>Log in</span>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { useAppStore } from "~/store/app";
const { token, profileImage } = storeToRefs(useAppStore());
</script>

<style lang="css" scoped></style>
