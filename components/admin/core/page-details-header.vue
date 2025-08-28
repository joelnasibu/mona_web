<template>
  <AdminCorePageHeader :route="route">
    <div class="d-flex align-center ga-4 text-caption">
      <slot />
      <v-btn
        size="small"
        color="primary-dark"
        class="text-caption"
        :prepend-icon="`mdi-${view ? 'pencil' : 'eye'}-outline`"
        rounded
        variant="text"
        active
        @click="emits('toggleView')"
      >
        <span>{{ view ? "Edit" : "Preview" }}</span>
      </v-btn>
      <v-btn
        size="x-small"
        color="red-darken-4"
        icon="mdi-delete"
        title="Delete"
        flat
        @click="emits('delete')"
      >
      </v-btn>
    </div>
  </AdminCorePageHeader>
  <v-divider class="my-3"></v-divider>
</template>

<script setup>
defineProps({
  view: Boolean,
  route: String,
});
const emits = defineEmits(["delete", "toggleView"]);

import { useAppStore } from "~/store/app";
const { currentUser, isVendor } = storeToRefs(useAppStore());
</script>

<style lang="css" scoped></style>
