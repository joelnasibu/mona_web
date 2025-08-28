<template>
  <v-dialog v-model="modal" persistent :width="isMobile ? '100%' : 400">
    <v-card class="pa-3 pa-md-5 rounded-xl" color="white" :loading="loading">
      <div class="w-100 text-center">
        <v-btn
          size="large"
          color="red-darken-2"
          icon="mdi-alert"
          variant="text"
          active
          class="disabled-btn"
        ></v-btn>
        <div class="py-2 px-4 text-center">
          <div class="text-h6 my-4">
            <b>Delete {{ data.name }}</b>
          </div>
          <div class="my-3 text-body-2">
            <span
              >You are going to delete {{ data.name }} "{{ data.itemTitle }}".
              Are you sure?</span
            >
          </div>
        </div>
        <div class="d-flex pt-3">
          <v-btn
            variant="text"
            active
            class="text-body-2 text-capitalize"
            @click="emits('cancel')"
            rounded
            width="49%"
            size="large"
          >
            <span>No, keep it.</span>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="bg-red-darken-2 text-body-2 text-capitalize"
            @click="emits('delete')"
            :loading="loading"
            rounded
            flat
            width="49%"
            size="large"
          >
            <span>Yes, delete!</span>
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
const props = defineProps({
  dialog: Boolean,
  data: Object,
});
const emits = defineEmits(["delete", "cancel"]);

const { isMobile } = useDevice();

import { useAppStore } from "~/store/app";
const { loading } = storeToRefs(useAppStore());

const modal = computed({
  get() {
    return props.dialog;
  },
  set() {
    emits("cancel");
  },
});
</script>

<style lang="css" scoped></style>
