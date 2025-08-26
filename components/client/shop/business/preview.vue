<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" sm="5">
        <div class="text-caption d-flex ga-3 text-grey-darken-2">
          <v-icon start icon="mdi-information-outline" class="mt-1"></v-icon>
          <span>Prior to submission, take a moment to thoroughly examine all
            provided information, ensuring accuracy and completeness before
            finalizing the process.</span>
        </div>
      </v-col>
      <v-col cols="12" sm="7">
        <v-card class="bg-white rounded-lg" elevation="1">
          <div class="text-caption">
            <div class="bg-card pa-2 d-flex align-center">
              <span>Account details</span>
              <v-spacer></v-spacer>
              <v-icon icon="mdi-pencil-outline" title="Edit" end size="small" color="link"
                @click="emits('step', 0)"></v-icon>
            </div>
            <div class="d-flex flex-column ga-2 pa-3">
              <span>Account type : <b>{{ payload.role }}</b></span>
              <span>Account category : <b>{{ payload.category }}</b></span>
            </div>
          </div>
          <div class="text-caption">
            <div class="bg-card pa-2 d-flex align-center">
              <span>User details</span>
              <v-spacer></v-spacer>
              <v-icon icon="mdi-pencil-outline" title="Edit" end size="small" color="link"
                @click="emits('step', 1)"></v-icon>
            </div>
            <div class="d-flex flex-column ga-2 pa-3">
              <span>First name : <b>{{ payload.firstname }}</b></span>
              <span>Last name : <b>{{ payload.lastname }}</b></span>
              <span>Gender : <b>{{ payload.gender }}</b></span>
            </div>
          </div>
          <div class="text-caption">
            <div class="bg-card pa-2 d-flex align-center">
              <span>User identifiers</span>
              <v-spacer></v-spacer>
              <v-icon icon="mdi-pencil-outline" title="Edit" end size="small" color="link"
                @click="emits('step', 1)"></v-icon>
            </div>
            <div class="d-flex flex-column ga-2 pa-3">
              <span>Email address : <b>{{ payload.email }}</b></span>
              <span>Username: <b>{{ payload.username }}</b></span>
              <span>Telephone number : <b>{{ payload.phone }}</b></span>
            </div>
          </div>
          <v-btn block color="primary-dark" size="small" flat class="text-caption mt-2 rounded-t-0 rounded-b-lg"
            @click="emits('submit')" :loading="loading">
            <span>Submit</span>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  trigger: Boolean,
});
const emits = defineEmits(["step", "submit"]);

import { useAppStore } from "~/store/app";
const { loading } = storeToRefs(useAppStore());
</script>

<style lang="css" scoped></style>
