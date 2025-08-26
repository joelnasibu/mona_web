<template>
  <v-card flat class="card-outlined rounded-lg w-100" :to="{ name: 'jobs-id', params: { id: job.jobId } }">
    <div class="d-flex pa-3">
      <v-avatar color="white" size="50" class="rounded-lg" :image="job.business.logo ?? job.banner"></v-avatar>
      <div class="px-3 text-body-2">
        <div class="" :class="minimal ? 'three-lines' : 'two-lines'">
          <b>{{ job.jobName }}</b>
        </div>
        <div class="d-flex flex-column mt-1 text-caption text-capitalize text-grey-darken-2">
          <NuxtLink class="text-decoration-underline text-grey-darken-2" :to="{
            name: 'company-name-id',
            params: {
              id: job.businessId,
              name: String(job.business.businessName)
                .toLowerCase()
                .replaceAll(' ', '-'),
            },
          }" @click.stop="">{{ String(job.business.businessName).toLowerCase() }}</NuxtLink>
          <span>{{ String(job.location).toLowerCase() }}</span>
        </div>
      </div>
      <v-spacer></v-spacer>
      <SaveItem :item="job" :saved="saved" type="jobs" @toggle-wishlist="emits('toggleWishlist')" />
    </div>
    <div class="mt-3 px-2" v-if="!minimal">
      <div class="d-flex ga-2 overflow-auto hide-scrollbar">
        <CoreTag v-for="(skill, i) in job.skills" :key="i" :tag="skill" grey />
      </div>
      <div class="text-caption three-lines mt-2 text-grey-darken-1">
        <span v-html="job.description"></span>
      </div>
    </div>
    <v-divider class="my-3"></v-divider>
    <div class="px-3 pt-0 pb-4 d-flex flex-wrap justify-start justify-md-space-around text-caption text-grey-darken-2">
      <div class="d-inline-block md-d-flex align-center">
        <v-icon icon="mdi-cash" start></v-icon>
        <span v-if="job.isConfidential">Confidential</span>
        <span v-else>
          {{ currencyFormat(job.salaryRange[0]) }} -
          {{ currencyFormat(job.salaryRange[1]) }}
        </span>
      </div>
      <div class="d-inline-block d-md-flex align-center">
        <v-icon icon="mdi-clock-outline" size="small" start></v-icon>
        <span>{{ dateDifference(job.deadline) }}</span>
      </div>
      <div class="d-inline-block d-md-flex align-center">
        <v-icon icon="mdi-account-multiple-outline" size="small" start></v-icon>
        <span>{{ job.applicationsLimit }} applicants</span>
      </div>
    </div>
  </v-card>
</template>

<script setup>
const props = defineProps({
  job: Object,
  minimal: {
    type: Boolean,
    default: false,
  },
  saved: Boolean,
}),
  emits = defineEmits(["toggleWishlist"]);

const { dateDifference, currencyFormat, capitalizeFirstLetter } = useHelpers();

import { useAppStore } from "~/store/app";
const { loading, error, currentUser } = storeToRefs(useAppStore());

import { useSavedItemStore } from "~/store/saved-items";
const { saveItem, deleteSavedItem } = useSavedItemStore();
</script>

<style lang="css" scoped></style>
