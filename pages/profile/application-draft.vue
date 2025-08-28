<template>
  <div>
    <div class="text-h5 pt-8 pb-4">
      <b>My Applications draft</b>
    </div>
    <div class="d-flex flex-column ga-3 px-0 px-md-4">
      <div class="" v-for="(application, i) in filteredApplications">
        <v-card
          flat
          class="d-flex ga-3 pa-2"
          @click="expandApplication(application.applicationId)"
        >
          <v-avatar
            size="60"
            color="card"
            rounded="lg"
            :image="application.job.business.logo"
          >
          </v-avatar>
          <div class="text-caption d-flex flex-column">
            <span>{{ application.job.jobName }}</span>
            <span class="text-disabled">{{
              capitalizeFirstLetter(application.job.business.businessName)
            }}</span>
            <span class="mt-1">{{
              capitalizeFirstLetter(application.job.jobtype)
            }}</span>
          </div>
          <v-spacer></v-spacer>
          <div class="my-auto" :title="application.applicationStatus">
            <Icon
              :name="setApplicationStatus(application.applicationStatus).icon"
              :color="setApplicationStatus(application.applicationStatus).color"
              size="1.5rem"
            />
          </div>
          <v-icon
            class="my-auto icon"
            icon="mdi-chevron-down"
            :class="{
              'transform-180deg':
                applicationToExpand === application.applicationId,
            }"
          ></v-icon>
        </v-card>
        <v-expand-transition>
          <div
            class=""
            v-if="applicationToExpand === application.applicationId"
          >
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="4"
                  class="text-grey text-caption d-flex flex-column ga-2"
                >
                  <div class="d-flex">
                    <v-icon
                      icon="mdi-map-marker-outline"
                      color="grey"
                      start
                    ></v-icon>
                    <span> {{ application.job.location }}</span>
                  </div>
                  <div class="d-flex">
                    <v-icon
                      icon="mdi-chevron-right"
                      color="grey"
                      start
                    ></v-icon>
                    <span>{{ application.job.industry }}</span>
                  </div>
                </v-col>
                <v-col cols="12" sm="8"> </v-col>
              </v-row>
            </v-container>
          </div>
        </v-expand-transition>
        <v-divider></v-divider>
      </div>
      <div
        class="py-10 my-10 py-md-15 my-md-15 text-disabled text-center"
        v-if="!filteredApplications.length || loading"
      >
        <span v-if="loading">Loading drafts...</span>
        <span v-else>No application draft found</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  currencyFormat,
  capitalizeFirstLetter,
  filterDataPerField,
  dateFormat_Month,
  numberFormat,
} = useHelpers();

import { useAppStore } from "~/store/app";
const { loading } = storeToRefs(useAppStore());

import { useJobStore } from "~/store/jobs";
const { getJobApplicants } = useJobStore();
const data = ref([]);
const getData = async () => {
  data.value = await getJobApplicants();
  //
};
watchEffect(() => {
  getData();
});

const filteredApplications = computed(() => {
  return filterDataPerField(data.value, "", {
    applicationStatus: "INCOMPLETE",
  });
});

const setApplicationStatus = (applicationStatus) => {
  return applicationStatus.toLowerCase() === "accepted"
    ? { icon: "mdi:check-circle-outline", color: "green" }
    : applicationStatus.toLowerCase() === "submitted"
    ? { icon: "line-md:uploading-loop", color: "orange" }
    : { icon: "mdi:close-circle-outline", color: "red" };
};

const applicationToExpand = ref(null);
const expandApplication = (applicationId) => {
  applicationToExpand.value === applicationId
    ? (applicationToExpand.value = null)
    : (applicationToExpand.value = applicationId);
};
</script>

<style lang="css" scoped></style>
