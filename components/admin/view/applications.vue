<template>
  <div class="h-100">


    <v-container class="h-75" v-if="loader">
      <v-row class="h-100">
        <v-col cols="12" class="text-subtitle-1 text-disabled h-100 d-flex align-center justify-center">
          <span>Loading...</span>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <v-col cols="12" class="py-0">
          <v-card flat class="d-flex ga-3 text-caption cursor-pointer pa-2 rounded-lg"
            @click="expandApplication(application.applicationId)">
            <v-avatar color="card" class="card-outlined" rounded="lg" size="55"
              :image="application.user.picture ? application.user.picture : profileImage"></v-avatar>
            <div class="d-flex flex-column">
              <b>{{ application.user.names }}</b>
              <div class="d-flex flex-column ml-3">
                <a :href="`mailto:${application.user.email}`" title="Send mail">
                  <v-icon icon="mdi-email-outline" start size="12"></v-icon>
                  {{ application.user.email }}</a>
                <a :href="`tel:${application.user.phone}`" title="Place a call">
                  <v-icon icon="mdi-phone-outline" start size="12"></v-icon>
                  {{ application.user.phone }}</a>
              </div>
              <span>experience: {{ application.user.experience }}</span>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex align-center ga-2">
              <!-- v-if="status === 'SUBMITTED'" -->
              <div class="">
                <v-btn class="text-caption" size="small" variant="text" active color="primary-accent" id="selectStatus"
                  @click.stop="cacheApplicationId = application.applicationId" :loading="loadStatuses">
                  <span>Respond</span>
                </v-btn>
                <AdminCoreSelect :activator="`#selectStatus`" :list="responseStatus" :list-value="selectedResponse"
                  @set-item="setNewStatus" />
              </div>
              <v-icon icon="mdi-chevron-down" end class="my-auto" size="25" :class="{
                'transform-180deg': applicationToExpand === application.applicationId,
              }"></v-icon>
            </div>
          </v-card>
          <v-expand-transition>
            <div class="" v-if="applicationToExpand === application.applicationId">
              <div class="mt-2 text-caption">
                <AdminViewComments v-if="scoreSection" :payload="application.applicationScore" :users="users" :loading="loadResponse"
                  @setScore="setScores" @hide="closeExpand" @submit="handleSubmit" />

                <div class="px-3" v-else-if="openTextEditor">
                  <div class="py-2 d-flex ga-2">
                    <div class="text-caption">
                      <b>Response details</b>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn class="text-caption" size="x-small" variant="text" @click="closeExpand">
                      <span>Hide</span>
                    </v-btn>
                    <v-btn class="text-caption" color="primary" variant="flat" size="x-small" :loading="loadResponse"
                      @click="handleSubmit"><span>Submit</span></v-btn>
                  </div>


                  <div class="text-caption">
                    <span>Email template</span>
                  </div>
                  <div class="">
                    <Editor :text="template" @set-text="setTemplate" />
                  </div>
                </div>
                <div class="" v-else>
                  <div class="d-flex pa-2">
                    <span>Documents</span>
                    <v-spacer></v-spacer>
                  </div>
                  <v-container>
                    <v-row>
                      <v-col cols="12" :sm="application.applicant.documents.length === 1 ? 12 : 6"
                        v-for="({ name, file }, i) in application.applicant.documents" class="pa-1"
                        title="Open file in new window" :key="i">
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const emits = defineEmits(["loader", "details"]);

const { digitsOnly, getFullnames } = useHelpers();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { adminDrawer, profileImage, error, currentUser } = storeToRefs(appStore);

import { useTemplateStore } from '~/store/templates'

const { getJobApplicationTemplate } = useTemplateStore()

import { useJobStore } from "~/store/jobs";
import { useAuthStore } from "~/store/auth";
const { getUsers } = useAuthStore()
const {
  getSingleApplication,
  changeApplicationStatus,
} = useJobStore();

const data = ref([]),
  application = computed(() => {
    return data.value
  });

const getAverage = (items) => {
  var sum = items.reduce((a, b) => a + Number(b.score), 0)
  var num = items.length
  var avg = num > 0 ? Math.ceil(sum / num) : 0
  return avg
}

const users = ref([])
const loader = ref(false);
const getData = async () => {
  emits("loader", true);
  loader.value = true;
  data.value = await getSingleApplication(adminDrawer.value.id);
  // console.log(data.value);

  users.value = await getUsers(false)
  emits("loader", false);
  loader.value = false;
  emits("details", getAverage(application.value?.applicationScore));
};
watchEffect(() => {
  getData();
});

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


const variables = ref([
  { item: "applicant", value: "" },
  { item: "jobTitle", value: "" },
  { item: "company", value: "" },
  { item: "user", value: "" },
  { item: "phone", value: "" },
  { item: "email", value: "" }
])

const openTextEditor = ref(false),
  template = ref(null),
  // scores = ref([]),

  scoreSection = ref(false),
  responseStatus = computed(() => {
    const list = ["Mark", "Accept", "Reject"]
    const status = application.value.applicationStatus
    return status == "CONFIRMED"
      ? list.filter(v => v !== 'Accept')
      : status !== "ACCEPTED" || status !== "REJECTED"
        ? list
        : status
  }),
  selectedResponse = ref(null),
  loadStatuses = ref(false),
  cacheApplicationId = ref(null),

  setVariables = () => {
    variables.value[0].value = application.value.applicant.name
    variables.value[1].value = application.value.job.jobName
    variables.value[2].value = application.value.job.business.businessName
    variables.value[3].value = getFullnames(currentUser.value)
    variables.value[4].value = currentUser.value.phone
    variables.value[5].value = currentUser.value.email

  },

  setNewStatus = async (val) => {
    if (val == "Mark") {

      scoreSection.value = true;
      selectedResponse.value = `${val}ed`;
      applicationToExpand.value = cacheApplicationId.value;
    }
    if (val === "Accept" || val === "Reject") {

      setVariables()

      openTextEditor.value = true;
      selectedResponse.value = `${val}ed`;
      loadStatuses.value = true;

      let res = await getJobApplicationTemplate(selectedResponse.value);
      loadStatuses.value = false;
      variables.value.forEach(val => {
        var reg = new RegExp(`#${val.item}`, 'g')
        res.template = res.template.replace(reg, val.value)
      })

      template.value = res.template;

      applicationToExpand.value = cacheApplicationId.value;
    }

    if (val === "Reject") application.value.applicationScore.forEach(i => i.score = 0)
  },
  closeExpand = () => {
    applicationToExpand.value =
      selectedResponse.value =
      template.value =
      cacheApplicationId.value =
      null;
    openTextEditor.value = false;
    scoreSection.value = false;

  },
  setTemplate = (val) => {
    template.value = val;
  };

const setScores = (val, edit) => {
  if (edit) {
    let index = application.value.applicationScore.findIndex(i => i.userId == val.userId)
    application.value.applicationScore[index] = Object.assign({}, val)
  } else
    application.value.applicationScore.push(val)
  emits("details", getAverage(application.value?.applicationScore));
  handleSubmit()
}

const loadResponse = ref(false),

  handleSubmit = async () => {
    loadResponse.value = true;
    await changeApplicationStatus({
      applicationId: cacheApplicationId.value,
      applicationStatus: selectedResponse.value,
      applicationResponse: template.value,
      applicationScore: application.value.applicationScore,
    });
    loadResponse.value = false;
    if (!error.value) {
      closeExpand();
      getData();
    }
  };
</script>

<style lang="css" scoped></style>
