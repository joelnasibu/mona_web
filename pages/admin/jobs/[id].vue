<template>
  <div>
    <AdminCorePageDetailsHeader view route="admin-jobs" @toggleView="view = !view" @delete="deleteDialog = true">
      <!-- <v-btn
        class="text-caption text-none"
        :class="{ 'disabled-btn': data.isPublished }"
        rounded
        variant="outlined"
        size="small"
        :color="data.isPublished ? 'green' : 'primary'"
      >
        <v-icon
          start
          size="small"
          icon="mdi-check-circle-outline"
          v-if="data.isPublished"
        ></v-icon>
        <span>{{ data.isPublished ? "Published" : "Publish?" }}</span>
      </v-btn> -->
    </AdminCorePageDetailsHeader>
    <div class="mt-4">
      <div class="bg-card pa-3 d-flex text-caption align-center">
        <span>{{ data.jobName + " : " + data.jobId }}</span>
        <v-spacer></v-spacer>
        <div>
          <v-switch v-model="data.jobstatus" false-value="CLOSED" true-value="OPEN" :loading="loading"
            class="text-caption" density="compact" :label="data.jobstatus.toUpperCase()" @click="toggleStatus"
            color="link"></v-switch>

          <div style="font-size: 0.65rem" class="mt-n8 text-grey text-center ml-n5">
            Click to {{ data.jobstatus == "OPEN" ? 'close' : 'open' }} this job
          </div>
        </div>
      </div>
      <div class="">
        <AdminJobPreview :payload="data" v-if="view" />
        <AdminJobInputs v-else :payload="data" />
      </div>
    </div>
    <AdminDeleteConfirmation :dialog="deleteDialog" :data="{
      name: 'Job',
      itemTitle: data.jobName,
      id: data.jobId,
    }" @cancel="deleteDialog = false" @delete="confirmDelete" />
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;

import { useAppStore } from "~/store/app";
const { error, loading } = storeToRefs(useAppStore());

import { useJobStore } from "~/store/jobs";
const { getJob, deleteJob, updateJob } = useJobStore();
const data = ref(await getJob(id));
const setData = () => {

  data.value.subcategory = data.value.category.subcategory;
  data.value.category = data.value.category.name;
  data.value.business = data.value.business.businessName;
  data.value.jobType = data.value.jobtype;
};
onMounted(() => {
  setData();
});

const view = ref(true);

const deleteDialog = ref(false);
const confirmDelete = async () => {
  await deleteJob(data.value.id);
  if (!error.value) navigateTo({ name: "admin-jobs" });
};

const toggleStatus = async () => {
  setTimeout(async () => {

    await updateJob(data.value);
  }, 500);
  // data.value.jobstatus = data.value.status === "OPEN" ? "CLOSE" : "OPEN";

  // if (!error.value) data.value = await getJob(id);
};

useSeoMeta({
  title: "Job Details",
});
</script>

<style lang="css" scoped></style>
