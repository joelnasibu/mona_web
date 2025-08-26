<template>
  <ClientOnly>
    <CoreMidScreenLayout class="position-relative">
      <v-container class="pa-0" fluid>
        <v-row class="ma-auto">
          <v-col cols="12" sm="3" v-if="token">
            <v-card
              flat
              class="bg-transparent d-flex flex-column overflow-y-auto"
              :style="`top: calc(${appBarHeight}px + .8rem) !important; position:sticky !important`"
              :height="cardHeight"
            >
              <v-card
                flat
                class="bg-card d-flex flex-column align-center pa-3 text-body-2 ga-2 rounded-lg card-outlined"
              >
                <v-avatar
                  class="user-avatar"
                  color="background"
                  size="50"
                  :image="currentUser.picture ?? profileImage"
                ></v-avatar>
                <b class="text-capitalize">{{
                  String(getFullnames(currentUser)).toLowerCase()
                }}</b>
                <div
                  class="text-grey d-flex flex-column text-center text-caption"
                  v-if="isApplicant"
                >
                  <span>{{ currentUser.applicant.title }}</span>
                  <span
                    >{{ currentUser.applicant.experience }} Year(s)
                    experience</span
                  >
                </div>
                <v-btn
                  class="text-none text-caption mt-1"
                  size="small"
                  flat
                  color="primary-accent"
                  :to="{ name: 'profile-data-applied-jobs' }"
                >
                  <Icon name="solar:cart-broken" size="1rem" class="mr-2" />
                  <span>Applied jobs</span>
                </v-btn>
              </v-card>
              <v-card flat class="pa-3 rounded-lg bg-card mt-3 card-outlined">
                <div class="d-flex align-center">
                  <CoreMainTitle title="My top skills" :small="true" />
                  <v-spacer></v-spacer>
                  <v-btn
                    icon="mdi-pencil-outline"
                    variant="text"
                    color="primary"
                    size="x-small"
                    class="text-decoration-underline"
                    v-if="isApplicant"
                    :to="{ name: 'profile' }"
                  ></v-btn>
                </div>
                <v-divider class="mt-1"></v-divider>
                <div class="d-flex my-4 flex-wrap ga-2">
                  <div
                    v-for="(skill, i) in currentUser.applicant.skills"
                    class="primary-tag rounded px-2 text-caption text-primary-accent"
                    v-if="isApplicant"
                  >
                    <span>{{ skill }}</span>
                  </div>
                  <div class="text-caption text-center" v-if="!isApplicant">
                    <span
                      >Complete your profile for better customisation?
                      <NuxtLink :to="{ name: 'profile' }">
                        <span class="text-primary-accent">Take me there</span>
                      </NuxtLink>
                    </span>
                  </div>
                </div>
              </v-card>
              <v-card
                flat
                class="pa-3 rounded-lg bg-card mt-3 card-outlined overflow-y-auto hide-scrollbar"
                v-if="isApplicant"
              >
                <div class="d-flex align-center">
                  <CoreMainTitle title="Matching your skills" :small="true" />
                  <v-spacer></v-spacer>
                  <v-icon
                    icon="mdi-information-outline"
                    color="primary"
                    size="x-small"
                  ></v-icon>
                </div>
                <v-divider class="mt-1"></v-divider>
                <ClientJobsMatchingYourSkills />
              </v-card>
            </v-card>
          </v-col>
          <v-col cols="12" :sm="token ? 6 : 9" class="pa-2 px-md-0">
            <ClientJobsFeatured
              :filters="jobFilters"
              @set-locations="setLocations"
            />
          </v-col>
          <v-col cols="12" :sm="3">
            <ClientJobsFilters
              :filters="jobFilters"
              :locations="locations"
              @set-filters="setFilters"
            />
          </v-col>
        </v-row>
      </v-container>
    </CoreMidScreenLayout>
  </ClientOnly>
</template>

<script setup>
const { getFullnames } = useHelpers();

import { useAppStore } from "~/store/app";
const { token, currentUser, profileImage } = storeToRefs(useAppStore()),
  isApplicant = computed(() => {
    return currentUser.value.applicant;
  });

const skills = [
  "Problem sloving",
  "UI",
  "Product designer",
  "Wireframing",
  "Analysis",
];

const filters = [
  { label: "Keyword", value: "" },
  { label: "Location", value: "" },
  { label: "Experience", value: "" },
  { label: "Keyword", value: "" },
];

const jobFilters = ref([]),
  setFilters = (val) => {
    if (typeof val === "object") jobFilters.value = [];
    else {
      if (jobFilters.value.includes(val))
        jobFilters.value.splice(jobFilters.value.indexOf(val), 1);
      else jobFilters.value.push(val);
    }
  };

const locations = ref([]),
  setLocations = (val) => {
    locations.value = val;
  };

const appBarHeight = ref(64);
onMounted(() => {
  appBarHeight.value = document.getElementById("appBar").clientHeight;
});
const cardHeight = computed(() => {
  if (process.client) return window.innerHeight - appBarHeight.value - 20;
});

useSeoMeta({
  title: "Jobs",
  ogTitle: "Jobs",
  twitterTitle: "Jobs",
});
</script>

<style lang="css" scoped>
.input,
.input:focus,
.input:hover {
  border: none;
  outline: none;
}
.user-avatar {
  border: 1.3px solid rgba(var(--v-theme-border));
  padding: 2px;
}
</style>
