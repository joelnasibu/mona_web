<template>
  <v-container>
    <CoreTitle2 title="Experience-based filtering" />
    <div class="overflow-auto hide-scrollbar mt-5" style="white-space: nowrap">
      <v-card
        flat
        :width="isMobile ? '200px' : `${100 / levels.length}%`"
        class="px-2 bg-transparent"
        v-for="experience in levels"
        style="display: inline-block"
      >
        <v-card
          flat
          class="card-outlined rounded-lg pa-2 pa-md-3"
          :to="{
            name: 'jobs-search',
            query: {
              Keyword: capitalizeFirstLetter(experience),
            },
          }"
        >
          <div class="text-center text-subtitle-2 pa-3">
            <span>{{ capitalizeFirstLetter(experience) }}</span>
          </div>
          <div class="text-body-2 text-center">
            <span class="text-grey-darken-1"
              >({{
                jobsPerExperienceLevel(
                  experience === "UNSPECIFIED" ? "ANY" : experience
                )
              }}
              jobs)</span
            >
          </div>
        </v-card>
      </v-card>
    </div>
  </v-container>
</template>

<script setup>
const { capitalizeFirstLetter } = useHelpers(),
  { isMobile } = useDevice();

const levels = [
  "INTERNSHIP & GRADUATE",
  "ENTRY LEVEL",
  "SENIOR LEVEL",
  "EXECUTIVE LEVEL",
  "UNSPECIFIED",
];

const publishedJobs = inject("publishedJobs"),
  featured = computed(() => {
    return publishedJobs.value.slice(0, 4);
  }),
  jobsPerExperienceLevel = (experienceLevel) => {
    let jobs = publishedJobs.value.filter(
      (j) =>
        String(j.experienceLevel).toLowerCase() ===
        String(experienceLevel).toLowerCase()
    );
    return jobs.length;
  };

//
</script>

<style lang="css" scoped></style>
