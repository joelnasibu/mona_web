<template>
  <v-container>
    <div class="">
      <CoreTitle2 title="Jobs by type" />
    </div>
    <div class="overflow-auto hide-scrollbar" style="white-space: nowrap">
      <v-card
        flat
        class="bg-transparent pa-2 pa-md-3"
        v-for="jobtype in data"
        :width="isMobile ? '200px' : `${100 / data.length}%`"
        height="100%"
        style="display: inline-block"
      >
        <v-card
          class="card-outlined rounded-lg text-center pa-2 pa-md-5"
          flat
          :to="{
            name: 'jobs-search',
            query: {
              jobtype: capitalizeFirstLetter(jobtype.jobtype),
            },
          }"
        >
          <v-icon
            :icon="
              jobtype.jobtype === 'FULLTIME'
                ? 'mdi-clock-outline'
                : jobtype.jobtype === 'PART-TIME'
                ? 'mdi-clock-time-nine-outline'
                : jobtype.jobtype === 'VOLUNTEER'
                ? 'mdi-account-heart-outline'
                : jobtype.jobtype === 'REMOTE'
                ? 'mdi-remote-desktop'
                : 'mdi-account-supervisor-outline'
            "
            size="x-large"
            color="secondary"
          ></v-icon>
          <div class="mt-2 d-flex flex-column">
            <span>{{ capitalizeFirstLetter(jobtype.jobtype) }}</span>
            <div class="text-body-2 text-center">
              <span class="text-grey-darken-1"
                >({{ jobsPerJobtype(jobtype.jobtype) }} jobs)</span
              >
            </div>
          </div>
        </v-card>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
const { capitalizeFirstLetter, currencyFormat } = useHelpers(),
  { isMobile } = useDevice();

import { useJobTypeStore } from "~/store/job-types";
const { getJobTypes, createType, updateType, deleteType } = useJobTypeStore();
const data = ref(await getJobTypes());

const publishedJobs = inject("publishedJobs"),
  featured = computed(() => {
    return publishedJobs.value.slice(0, 4);
  }),
  jobsPerJobtype = (jobtype) => {
    let jobs = publishedJobs.value.filter((j) => j.jobtype === jobtype);
    return jobs.length;
  };

//
</script>

<style lang="css" scoped></style>
