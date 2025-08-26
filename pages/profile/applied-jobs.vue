<template>
  <div class="pb-5">
    <div class="px-2 px-md-4">
      <div class="text-h5 pt-8 pb-4">
        <b>My Job applications</b>
      </div>

      <v-btn-toggle
        v-model="toggle"
        color="primary-accent"
        border
        divided
        variant="text"
        density="compact"
      >
        <v-btn
          class="text-caption"
          v-for="(item, i) in applicationsFilter"
          :value="i"
        >
          <span>{{ item }}</span>
        </v-btn>
      </v-btn-toggle>
    </div>
    <div class="d-flex flex-column ga-3 px-0 px-md-4 mt-8">
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
              <div class="text-caption">
                <span>Documents</span>
              </div>
              <v-row>
                <v-col
                  cols="12"
                  :sm="application.applicant.documents.length == 1 ? 12 : 6"
                  v-for="{ name, file } in application.applicant.documents"
                  class="pa-1 text-caption"
                  title="Open file in new window"
                >
                  <v-card
                    class="d-flex align-center ga-3 pa-2 bg-card card-outlined rounded-lg"
                    flat
                    @click="openFile(file)"
                  >
                    <Icon name="mdi:file-pdf-outline" size="1.4rem" />
                    <span>{{ name }}</span>
                  </v-card>
                </v-col>
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
        <span v-if="loading">Loading applications...</span>
        <span v-else>No applications found</span>
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

const toggle = ref(0);
const applicationsFilter = ["All", "Submitted", "Accepted", "Rejected"];
const filteredApplications = computed(() => {
  return toggle.value === 0
    ? filterDataPerField(data.value, "")
    : filterDataPerField(data.value, "", {
        applicationStatus:
          toggle.value === 1
            ? "SUBMITTED"
            : toggle.value === 2
            ? "ACCEPTED"
            : "REJECTED",
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

const openFile = (file) => {
  if (process.client) window.open(file, "_blank");
};
</script>

<style lang="css" scoped></style>
