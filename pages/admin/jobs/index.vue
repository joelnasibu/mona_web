<template>
  <ClientOnly>
    <div>
      <div class="d-flex align-center ga-3 flex-wrap">
        <AdminCoreSearch :search="search" @search="setSearch" />
        <div class="" v-if="currentUser.accessLevel !== 3">
          <v-btn prepend-icon="mdi-storefront-outline" class="card-outlined px-5 text-none text-caption"
            title="Select Business" density="compact" size="small" rounded="lg" flat id="selectBusiness" variant="text">
            <span>{{ business?.name }}</span>
          </v-btn>
          <div class="mt-1">
            <AdminCoreSelect activator="#selectBusiness" :list="businessesList" :listValue="business.name"
              @setItem="setBusiness" />
          </div>
        </div>
        <v-btn-toggle mandatory color="black" divided border density="compact" class="rounded-lg" v-model="status"
          title="Status">
          <v-btn variant="text" v-for="({ name, value }, i) in statuses" class="text-none text-caption" :value="value"
            :key="i">
            <span>{{ name }}</span>
          </v-btn>
        </v-btn-toggle>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-plus" size="x-small" flat color="primary-dark" title="Add job"
          :to="{ name: 'admin-jobs-create' }"></v-btn>
      </div>
      <div class="mt-4">
        <AdminCoreTableHeader text="Jobs" :number="jobs.length" />

        <div class="hide-scrollbar" v-if="smallSize">

          <v-card flat class="border rounded mb-3" v-for="job in jobs" :key="job.id" @click="handleDetails(job)">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h6">
                  {{ job.jobName }}
                </v-card-title>

                <v-card-subtitle class="text-caption">Business: {{ job.business.businessName }}</v-card-subtitle>
                <v-card-subtitle class="text-caption">{{ job.jobId }}</v-card-subtitle>

                <v-card-actions>
                  <v-btn prepend-icon="mdi-list-status" class="ms-2 text-caption" size="small" color="primary"
                    text="Applications" variant="tonal" @click.stop="setJobApplication(job)"></v-btn>



                  <v-btn prepend-icon="mdi-list-status" class="ms-2 text-caption" size="small" color="primary"
                    v-if="job.isPublished" text="Publish" variant="tonal" @click.stop="handlePublish(job)"></v-btn>

                  <v-btn prepend-icon="mdi-check-circle" class="ms-2 text-caption" size="small" color="secondary" flat
                    v-else text="Publish" variant="text"></v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" rounded="0" size="125">
                <v-img :src="job.banner"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </div>
        <v-sheet width="100%" color="transparent" v-else>
          <v-data-table density="compact" :headers="headers" :items="jobs" :loading="loading" class="bg-background">
            <template v-slot:[`item.no`]="{ item }">
              <span>{{ jobs.indexOf(item) + 1 }}</span>
            </template>
            <template v-slot:[`item.publish`]="{ item }">
              <AdminBtnStatus :status="item.isPublished" :titles="{ isNot: 'Publish', isAlready: 'Published' }"
                @submit="handlePublish(item)" />
            </template>
            <template v-slot:[`item.applications`]="{ item }">
              <div class="text-center mx-auto">
                <v-btn icon="mdi-list-status" size="28" rounded="lg" flat color="primary" title="View applications"
                  variant="text" active @click="setJobApplication(item)"></v-btn>
              </div>
            </template>
            <template v-slot:[`item.jobstatus`]="{ item }">
              <span :class="`text-${item.jobstatus == 'OPEN' ? 'secondary' : 'warning'}`">{{
                item.jobstatus
              }}</span>
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <AdminBtnDetailsBtn @details="
                navigateTo({
                  name: 'admin-jobs-id',
                  params: { id: item.jobId },
                })
                " />
            </template>
          </v-data-table>
        </v-sheet>


      </div>
      <v-dialog v-model="publishDialog" persistent fullscreen>
        <v-card class="card-outlined system-bg hide-scrollbar pa-0" rounded="0">
          <AdminCoreDialogHeader title="Publish job" @close="close">
            <v-btn rounded flat color="link" class="text-caption text-none mx-2" prepend-icon="mdi-check-circle-outline"
              :loading="loading" size="small" @click="publishConfirmation">
              <span>Publish</span>
            </v-btn>
          </AdminCoreDialogHeader>
          <v-card-text class="pa-0">
            <v-container class="py-0">
              <v-row justify="center">
                <v-col cols="12" sm="9">
                  <v-card class="bg-transparent pa-0">
                    <AdminJobPreview :payload="job" />
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </ClientOnly>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();
const { isMobile } = useDevice();
const { replaceObjectEmptyStrings, filterDataPerField } = useHelpers();


import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { loading, error, currentUser } = storeToRefs(appStore);

import { useBusinessStore } from "~/store/business";
const { getBusinesses } = useBusinessStore();
const businesses = ref([]);
const business = ref({ name: "ALL BUSINESSES", id: 0 });
const businessesList = computed(() => {
  let businessMap = businesses.value.map((c) => c.businessName);
  return ["ALL BUSINESSES", ...businessMap];
});
const setBusiness = (val) => {
  business.value.name = val;
  business.value.id = businesses.value.find(
    (item) => item.businessName === val
  )?.id;
};

import { useJobStore } from "~/store/jobs";
const { getJobs, publishJob } = useJobStore();
const data = ref([]);
const getData = async () => {
  let allData = await getJobs();
  businesses.value = await getBusinesses(false);
  data.value = allData.filter((i) =>
    currentUser.value.accessLevel === 3
      ? i.createdBy === currentUser.value.userId
      : i
  );
  data.value = replaceObjectEmptyStrings(data.value);
};
watchEffect(() => {
  getData();
});
const jobs = computed(() => {
  return business.value.name !== "ALL BUSINESSES"
    ? filterDataPerField(data.value, search.value, {
      isPublished: status.value,
      businessId: business.value.id,
    })
    : filterDataPerField(data.value, search.value, {
      isPublished: status.value,
    });
});

const smallSize = computed(() => {
  return isMobile || smAndDown.value
})



const search = ref("");
const setSearch = (val) => {
  search.value = val;
};

const statuses = [
  { name: "Published", value: true },
  { name: "Pending", value: false },
];
const status = ref(true);

const headers = computed(() => {
  let list = [
    // { title: "#", value: "no", show: true },
    { title: "ID", value: "jobId", show: true },
    { title: "Name", value: "jobName", show: true },
    // { title: "Job type", value: "jobtype", show: true },
    { title: "Category", value: "category.name", show: true },
    //   { title: "Subcategory", value: "category.subcategory" },
    { title: "Business", value: "business.businessName", show: true },
    { title: "Applications", value: "applications", show: status.value },
    { title: "Status", value: "jobstatus", show: status.value },
    { title: "Published", value: "publish", show: !status.value },
    { title: "Action", value: "action", show: true },
  ];
  return list.filter((h) => h.show);
});

const publishDialog = ref(false);
const job = ref({});
const handlePublish = (item) => {
  publishDialog.value = true;
  job.value = item;
};
const close = () => {
  publishDialog.value = false;
  job.value = {};
};
const publishConfirmation = async () => {
  await publishJob(job.value.jobId, { isPublished: true });
  if (!error.value) {
    close();
    getData();
  }
};

const handleDetails = (item) => {
  navigateTo({
    name: 'admin-jobs-id',
    params: { id: item.jobId },
  })
}

const setJobApplication = (job) => {
  appStore.setAdminDrawer({
    status: true,
    type: "applications",
    title: `Applications to ${job.jobName}`,
    id: job.jobId,
  });
};

useSeoMeta({
  title: "Jobs",
});
</script>

<style lang="scss" scoped></style>
