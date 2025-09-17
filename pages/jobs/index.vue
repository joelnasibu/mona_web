<template>
  <ClientOnly>
    <div class="px-2 px-md-0 py-5">
      <CoreMidScreenLayout class="position-relative">
        <v-card class="rounded-lg card-outlined bg-card pa-2 pa-md-10" flat>
          <div class="text-h6">
            <b>Job searching <span class="text-primary-accent">made easy</span>
              <br />
              with {{ appName }}
            </b>
          </div>
          <div class="d-flex align-center pt-5" :class="{ 'flex-wrap': isMobile }">
            <v-container>
              <v-row>
                <v-col cols="12" sm="4" v-for="({ name, list, value }, i) in pageSimpleFilters" class="pa-1" :key="i">
                  <div class="text-caption d-flex align-center ga-3 card-outlined rounded-lg pa-2 cursor-pointer"
                    :id="`btn_${i}`">
                    <div class="d-flex flex-column">
                      <span class="text-grey-darken-2">{{ name }}</span>
                      <div class="mt-n1 one-line" style="font-weight: 500">
                        <span class="text-primary-dark">{{ value }}</span>
                      </div>
                    </div>
                    <v-spacer></v-spacer>
                    <v-icon icon="mdi-chevron-down" end></v-icon>
                  </div>
                  <AdminCoreSelect :activator="`#btn_${i}`" :list="list" :listValue="value" @setItem="setFilter" />
                </v-col>
              </v-row>
            </v-container>
            <v-btn color="primary-accent" :size="isMobile ? 'large' : 'x-large'" :block="isMobile" rounded="lg"
              class="text-subtitle-1" flat :to="{
                name: 'jobs-search',
                query: {
                  jobtype: pageSimpleFilters[0].value,
                  industry: pageSimpleFilters[1].value,
                  location: pageSimpleFilters[2].value,
                },
              }">
              <span>Search</span>
            </v-btn>
          </div>
        </v-card>
        <div class="mt-5">
          <LazyClientJobsByExperience />
        </div>
        <div class="my-5">
          <LazyClientJobsPreviewFeatured />
        </div>
        <div class="my-10">
          <ClientJobsAllJobsBtn />
        </div>
      </CoreMidScreenLayout>
      <div class="my-2">
        <ClientJobsCareer />
      </div>
      <CoreMidScreenLayout>
        <div class="mt-5">
          <LazyClientJobsByCategory />
        </div>
        <div class="mt-5">
          <LazyClientJobsByJobtype />
        </div>
        <div class="mt-5">
          <LazyClientJobsFeaturedBusinesses />
        </div>
      </CoreMidScreenLayout>
      <div class="my-10">
        <v-card flat rounded="0" class="system-bg card-outlined py-3 py-md-4">
          <CoreMidScreenLayout class="px-3">
            <div class="py-3 text-grey-darken-1">
              <b>For employers</b>
            </div>
            <div class="text-h5" style="max-width: 20ch">
              <b><span class="text-primary-accent">Attract top talent</span>
                with our powerful recruiting tools.
              </b>
            </div>
            <div class="my-4 text-subtitle-1 text-grey-darken-1" style="max-width: 60ch">
              <span>Unlock your recruiting potential with our cutting-edge tools,
                attracting top talent effortlessly. Build your dream team
                faster. Access a pool of 1.1+ million qualified candidates.
              </span>
            </div>
            <div class="mt-8 d-flex ga-2 justify-start">
              <v-btn class="text-caption rounded-lg" flat color="primary-accent">
                <span>Get started</span>
              </v-btn>
              <v-btn class="text-caption rounded-lg" variant="text" append-icon="mdi-arrow-right">
                <span>Learn more</span>
              </v-btn>
            </div>
          </CoreMidScreenLayout>
        </v-card>
      </div>
      <CoreMidScreenLayout>
        <div class="mt-5">
          <LazyClientJobsBySubcategories />
        </div>
      </CoreMidScreenLayout>
    </div>
  </ClientOnly>
</template>

<script setup>
const { dateDifference, filterDataPerField, capitalizeFirstLetter } =
  useHelpers(),
  { isMobile } = useDevice(),
  appName = import.meta.env.VITE_APP_NAME;

import { useJobStore } from "~/store/jobs";
const { publishedJobs } = useJobStore(),
  data = ref(await publishedJobs());
// getData = () => {
//   // emits("setLocations", [
//   //   "Any",
//   //   ...new Set(data.value.map((j) => capitalizeFirstLetter(j.location))),
//   // ]);
// };
// watchEffect(() => {
//   getData();
// });
provide("publishedJobs", data);

const pageSimpleFilters = ref([
  {
    name: "Job type",
    value: "Any",
    list: [
      "Any",
      ...new Set(data.value.map((j) => capitalizeFirstLetter(j.jobtype))),
    ],
  },
  {
    name: "Industry",
    value: "Any",
    list: [
      "Any",
      ...new Set(data.value.map((j) => capitalizeFirstLetter(j.industry))),
    ],
  },
  {
    name: "Location",
    value: "Any",
    list: [
      "Any",
      ...new Set(data.value.map((j) => capitalizeFirstLetter(j.location))),
    ],
  },
]),
  setFilter = (val, index) => {
    pageSimpleFilters.value[
      String(index).charAt(String(index).length - 1)
    ].value = val;
  };
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
