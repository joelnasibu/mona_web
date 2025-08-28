<template>
  <div>
    <div
      class="text-body-2 d-flex align-center justify-space-between bg-card pa-3 rounded-t-lg"
    >
      <b>{{ isAdmin ? "User details" : "Main details" }}</b>
      <div class="text-caption" v-if="isAdmin">
        <span>{{ payload?.userId }}</span>
      </div>
      <v-btn
        class="text-caption rounded-lg"
        size="small"
        color="primary-accent"
        prepend-icon="mdi-pencil-outline"
        v-else
        variant="text"
        @click="emits('edit')"
      >
        <span>Edit</span>
      </v-btn>
    </div>
    <v-divider class="ma-0 mt-md-4"></v-divider>
    <div class="pa-1 pa-md-4 text-caption d-flex flex-column ga-4">
      <div class="d-flex justify-lg-space-between align-center details-row">
        <span>Profile</span>
        <AdminCoreImage
          :profile="true"
          :view="true"
          :image="payload?.picture"
        />
      </div>
      <div class="d-flex justify-space-between details-row">
        <span>Username</span>
        <b>{{ payload?.username }}</b>
      </div>
      <div class="d-flex justify-space-between details-row">
        <span>First name</span>
        <b>{{ payload?.firstname }}</b>
      </div>
      <div class="d-flex justify-space-between details-row">
        <span>Last name</span>
        <b>{{ payload.lastname }}</b>
      </div>
      <div class="d-flex justify-space-between details-row">
        <span>Email</span>
        <b>{{ payload.email }}</b>
      </div>
      <div class="d-flex justify-space-between details-row">
        <span>Telephone</span>
        <b>{{ payload.phone }}</b>
      </div>
      <div class="d-flex justify-space-between details-row">
        <span>Gender</span>
        <b>{{ payload.gender }}</b>
      </div>
      <div class="d-flex justify-space-between details-row" v-if="isAdmin">
        <span>Role</span>
        <b>{{ payload.role }}</b>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  payload: Object,
});
const emits = defineEmits(["edit"]);

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { isAdmin } = storeToRefs(appStore);
</script>

<style lang="css" scoped></style>
