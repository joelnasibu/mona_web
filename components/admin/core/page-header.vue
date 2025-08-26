<template>
  <div class="">
    <div class="d-flex align-center">
      <div
        class="d-flex align-center"
        v-if="route.name !== adminRedirect?.name"
      >
        <span
          class="text-body-2 d-flex align-center text-black cursor-pointer"
          @click="goTo"
        >
          <!-- :to="{ name: adminRedirect?.name }"
          :title="`Navigate to ${pageTitle(adminRedirect?.name)}`" -->
          <v-icon icon="mdi-chevron-left" start></v-icon>
          <b>Back</b>
        </span>
        <span class="ml-3">|</span>
      </div>
      <v-btn
        :prepend-icon="`mdi-${actualPage?.icon ?? 'file'}-outline`"
        flat
        rounded="lg"
        varaint="text"
        class="bg-transparent text-body-2"
        style="pointer-events: none"
      >
        <b>{{ actualPage?.name ?? "Page title" }}</b>
      </v-btn>
      <v-spacer></v-spacer>
      <slot />
    </div>
    <v-divider class="my-2"></v-divider>
  </div>
</template>

<script setup>
defineProps({
  route: String,
  actualPage: Object,
});

const route = useRoute();
const { dateFormat_Month, pageTitle } = useHelpers();

import { useAppStore } from "~/store/app";
const { adminRedirect } = storeToRefs(useAppStore());

const goTo = () => {
  if (process.client) window.history.back();
};
</script>

<style lang="css" scoped></style>
