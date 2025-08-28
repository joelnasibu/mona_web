<template>
  <v-card flat rounded="0" class="system-bg card-outlined py-2 py-md-4">
    <core-mid-screen-layout>
      <v-container>
        <v-row align="center">
          <v-col cols="12" sm="4">
            <div class="text-h5" style="max-width: 20ch">
              <b>
                Find jobs that fit your skills and interests with
                <span class="text-primary-accent">{{ appName }}</span>
              </b>
            </div>
            <div class="text-subtitle-2 text-grey-darken-1 mt-4" style="max-width: 30ch; font-weight: 500">
              <span>Create a free account, complete your profile, and discover your
                dream job.</span>
            </div>
          </v-col>
          <v-col cols="12" sm="4" v-for="step in steps" :key="step.icon">
            <div class="d-flex flex-column">
              <div class="bg-card card-outlined pa-2 rounded-lg" style="width: fit-content">
                <v-icon :icon="step.icon"></v-icon>
              </div>
              <div class="text-subtitle-1 my-2">
                <b>{{ step.title }}</b>
              </div>
              <div class="text-caption">
                <span>{{ step.description }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="my-5 d-flex ga-2 justify-start justify-md-end">
          <v-btn class="text-caption rounded-lg" variant="text" append-icon="mdi-arrow-right">
            <span>Learn more</span>
          </v-btn>
          <v-btn class="text-caption rounded-lg" flat color="primary-accent">
            <span>Get started</span>
          </v-btn>
        </div>
      </v-container>
    </core-mid-screen-layout>
  </v-card>
</template>

<script setup>
const appName = import.meta.env.VITE_APP_NAME;

const steps = [
  {
    icon: "mdi-creation-outline",
    title: "Make yourself a top candidate",
    description:
      "A complete profile is your key to getting your foot in the door at top companies. It makes your applications and profile shine.",
  },
  {
    icon: "mdi-bell-outline",
    title: "Take your career to the next level",
    description:
      "Never miss a perfect fit! Get personalized job alerts that match your experience, industry, desired role, and location.",
  },
];
</script>

<style lang="css" scoped></style>
