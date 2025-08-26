<template>
  <div class="h-100">
    <div class="pa-2 pa-md-4 bg-card d-flex align-center flex-wrap ga-2">

      <v-btn class="text-caption rounded " v-for="(item, i) in statuses" :value="i" :key="i" @click="status = item" flat
        size="small" :variant="status === item ? 'flat' : 'tonal'" :active="status === item"
        :color="status === item ? 'primary-dark' : 'grey-darken-2'">
        <span>{{ item }}</span>
        <v-badge :content="handleLength(item)" inline></v-badge>
      </v-btn>
    </div>

    <v-divider class="my-1"></v-divider>

    <v-container class="h-75" v-if="!length || loader">
      <v-row class="h-100">
        <v-col cols="12" class="text-subtitle-1 text-disabled h-100 d-flex align-center justify-center">
          <span v-if="loader">Loading...</span>
          <span v-else>No application {{ status.toLowerCase() }} for this job yet</span>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row v-for="(
{ applicant, user, applicationId, applicationStatus }, i
        ) in jobApplications" :key="i">
        <v-col cols="12" class="py-0">
          <v-card flat class="d-flex ga-3 text-caption cursor-pointer pa-2 rounded-lg"
            @click="expandApplication(applicationId)">
            <v-avatar color="card" class="card-outlined" rounded="lg" size="55"
              :image="user.picture ?? profileImage"></v-avatar>
            <div class="d-flex flex-column">
              <b>{{ user.names }}</b>
              <div class="d-flex flex-column ml-3">
                <a :href="`mailto:${user.email}`" title="Send mail">
                  <v-icon icon="mdi-email-outline" start size="12"></v-icon>
                  {{ user.email }}</a>
                <a :href="`tel:${user.phone}`" title="Place a call">
                  <v-icon icon="mdi-phone-outline" start size="12"></v-icon>
                  {{ user.phone }}</a>
              </div>
              <span>experience: {{ user.experience }}</span>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex align-center ga-2">
              <div class="">
                <v-btn class="text-caption" size="small" variant="tonal" active
                  :color="applicationStatus == 'CONFIRMED' ? 'secondary' : 'primary-accent'"
                  v-if="applicationStatus == 'SUBMITTED'" @click.stop="handleSubmit(applicationId)"
                  :loading="loadResponse">
                  <span class="text-capitalize">{{ applicationStatus == 'SUBMITTED' ? 'Confirm' :
                    applicationStatus.toLowerCase() }}</span>
                </v-btn>


                <v-btn v-else class="text-caption" size="small" variant="text"
                  :color="applicationStatus == 'REJECTED' ? 'link' : 'secondary'"
                  :append-icon="applicationStatus == 'REJECTED' ? 'mdi-close-circle' : 'mdi-check-circle'">
                  <span class="text-capitalize">{{
                    applicationStatus.toLowerCase()
                  }}</span>
                </v-btn>
                <!-- <AdminCoreSelect :activator="`#selectStatus_${i}`" :list="responseStatus" :list-value="selectedResponse"
                  @set-item="setNewStatus($event, { applicant, job })" /> -->
              </div>
              <v-icon icon="mdi-chevron-down" end class="my-auto" size="25" :class="{
                'transform-180deg': applicationToExpand === applicationId,
              }"></v-icon>
            </div>
          </v-card>
          <v-expand-transition>
            <div class="" v-if="applicationToExpand === applicationId">
              <div class="mt-2 text-caption">

                <div class="">
                  <div class="d-flex pa-2">
                    <span>Documents</span>
                    <v-spacer></v-spacer>
                  </div>
                  <v-container>
                    <v-row>
                      <v-col cols="12" :sm="applicant.documents.length === 1 ? 12 : 6"
                        v-for="({ name, file }, i) in applicant.documents" class="pa-1" title="Open file in new window"
                        :key="i">
                        <v-card class="d-flex align-center ga-3 pa-2 bg-card card-outlined rounded-lg" flat
                          @click="openFile(file)">
                          <Icon name="mdi:file-pdf-outline" size="1.4rem" />
                          <span>{{ name }}</span>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
              </div>
            </div>
          </v-expand-transition>
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const emits = defineEmits(["loader", "details"]);

const { filterDataPerField } = useHelpers();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { adminDrawer, profileImage, error } = storeToRefs(appStore);

import { useJobStore } from "~/store/jobs";
const {
  getJobApplicationsPerJob,
  changeApplicationStatus,
} = useJobStore();
const data = ref([]),
  jobApplications = computed(() => {
    return filterDataPerField(data.value, '', {
      applicationStatus: status.value.toUpperCase()
    })

  });

const loader = ref(false);
const getData = async () => {
  emits("loader", true);
  loader.value = true;
  data.value = adminDrawer.value.id ? await getJobApplicationsPerJob(false, adminDrawer.value.id) : []
  // console.log(data.value);

  emits("loader", false);
  loader.value = false;
  emits("details", data.value?.length);
};
watchEffect(() => {
  getData();
});
const length = computed(() => {
  return jobApplications.value.length;
});

const handleLength = (status) => {
  return data.value.filter(i => i.applicationStatus == status).length
}

const applicationToExpand = ref(null),
  expandApplication = (applicationId) => {
    if (applicationToExpand.value === applicationId) {
      closeExpand();
    } else {
      applicationToExpand.value = applicationId;
    }
  };

const openFile = (file) => {
  if (process.client) window.open(file, "_blank");
};

const status = ref("SUBMITTED");
const statuses = ["SUBMITTED", "CONFIRMED", "MARKED", "ACCEPTED", "REJECTED"]


const openTextEditor = ref(false),
  template = ref(null),
  // score = ref(0),
  selectedResponse = ref(null),
  // loadStatuses = ref(false),
  cacheApplicationId = ref(null),

  closeExpand = () => {
    applicationToExpand.value =
      selectedResponse.value =
      template.value =
      cacheApplicationId.value =
      null;
    openTextEditor.value = false;
  },
  setTemplate = (val) => {
    template.value = val;
  };

const loadResponse = ref(false),
  handleSubmit = async (applicationId) => {
    loadResponse.value = true;
    cacheApplicationId.value = applicationId
    await changeApplicationStatus({
      applicationId: cacheApplicationId.value,
      applicationStatus: "CONFIRMED",
      applicationResponse: template.value,
      applicationScore: [],
    });
    loadResponse.value = false;
    if (!error.value) {
      closeExpand();
      getData();
    }
  };
</script>

<style lang="css" scoped></style>
