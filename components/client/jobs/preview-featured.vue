<template>
  <v-container>
    <div class="">
      <CoreTitle2 title="Featured Jobs" />
    </div>
    <v-row>
      <v-col cols="12" sm="3" v-for="job in featured" :key="job.id">
        <v-card flat class="pa-2 card-outlined rounded-lg h-100" :to="{ name: 'jobs-id', params: { id: job.jobId } }">
          <div class="d-flex ga-2">
            <v-avatar size="40" :image="job.business.logo" rounded="lg"></v-avatar>
            <div class="d-flex flex-column text-caption">
              <div class="">
                by
                <span class="text-primary-accent">{{
                  capitalizeFirstLetter(job.business.businessName)
                }}</span>
              </div>
              <div class="text-body-2 two-lines">
                <span>{{ capitalizeFirstLetter(job.jobName) }}</span>
              </div>
            </div>
            <v-spacer></v-spacer>
            <SaveItem :item="job" type="jobs" />
          </div>
          <div class="mt-4">
            <div class="text-caption text-grey-darken-1">
              <div class="d-flex align-center">
                <v-icon icon="mdi-clock-outline" size="x-small" start></v-icon>
                <span>{{ capitalizeFirstLetter(job.jobtype) }}</span>
              </div>
              <div class="d-flex align-center">
                <v-icon icon="mdi-map-marker-outline" size="x-small" start></v-icon>
                <span>{{ capitalizeFirstLetter(job.location) }}</span>
              </div>
              <div class="d-flex align-center" v-if="!job.isConfidential">
                <v-icon icon="mdi-cash" size="x-small" start></v-icon>
                <span>{{ currencyFormat(job.salaryRange[0]) }} -
                  {{ currencyFormat(job.salaryRange[1]) }}</span>
              </div>
            </div>
            <div class="d-flex ga-2 overflow-auto hide-scrollbar mt-3">
              <CoreTag v-for="(skill, i) in job.skills.slice(0, 5)" :key="i" :tag="skill" :grey="true" />
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { capitalizeFirstLetter, currencyFormat } = useHelpers();

const publishedJobs = inject("publishedJobs"),
  featured = computed(() => {
    return publishedJobs.value.slice(0, 4);
  });
</script>

<style lang="css" scoped></style>
