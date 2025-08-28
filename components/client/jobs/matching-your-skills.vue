<template>
  <div>
    <div v-for="job in jobs">
      <v-card
        flat
        class="pa-2 bg-transparent"
        :to="{ name: 'jobs-id', params: { id: job.id } }"
      >
        <div class="d-flex align-center text-caption">
          <v-avatar
            color="white"
            :image="job.business.logo"
            size="30"
          ></v-avatar>
          <div class="d-flex align-center mx-3">
            <div class="d-flex flex-column">
              <div class="two-lines">
                <b>{{ capitalizeFirstLetter(job.jobName) }}</b>
              </div>
              <div class="text-grey-darken-1">
                <span>{{
                  capitalizeFirstLetter(job.business.businessName)
                }}</span>
              </div>
            </div>
          </div>
          <v-spacer></v-spacer>
          <v-btn
            :icon="`mdi-bookmark${job.isSaved ? '' : '-outline'}`"
            color="primary-accent"
            :title="job.isSaved ? 'Remove from saved' : 'Add to saved'"
            :loading="loading"
            size="x-small"
            class="mx-2"
            variant="text"
            @click.stop="toggleWishlist(job)"
          ></v-btn>
          <v-icon icon="mdi-dots-vertical" size="x-small"></v-icon>
        </div>
        <div class="mt-3 text-caption">
          <div
            class="text-caption d-flex align-center break-word text-disabled"
          >
            <span>{{ job.location }}</span>
            <v-icon
              icon="mdi-circle-medium"
              size="xsmall"
              class="mx-1"
            ></v-icon>
            <span>{{ dateFormat_Month(job.dateCreated) }}</span>
          </div>
          <!-- <div class="d-flex text-disabled text-caption">
            <span>12 applications</span>
            <v-spacer></v-spacer>
            <span class="text-secondary">New</span>
          </div> -->
        </div>
      </v-card>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script setup>
const { dateFormat_Month, capitalizeFirstLetter } = useHelpers();

import { useAppStore } from "~/store/app";
const { currentUser, error, loading } = storeToRefs(useAppStore());

import { useJobStore } from "~/store/jobs";
const { publishedJobs } = useJobStore(),
  data = ref(await publishedJobs()),
  jobs = computed(() => {
    return data.value.filter((j) =>
      j.skills.some((s) =>
        currentUser.value.applicant?.skills.includes(String(s).toUpperCase())
      )
    );
  });

import { useSavedItemStore } from "~/store/saved-items";
const { saveItem, deleteSavedItem } = useSavedItemStore(),
  toggleWishlist = async (job) => {
    job.isSaved
      ? await deleteSavedItem(job.id)
      : await saveItem({
          userId: currentUser.value.userId,
          itemId: job.id,
          type: "jobs",
        });

    if (!error.value) data.value = await publishedJobs();
  };

const appBarHeight = ref(64);
onMounted(() => {
  appBarHeight.value = document.getElementById("appBar").clientHeight;
});
</script>

<style lang="css" scoped></style>
