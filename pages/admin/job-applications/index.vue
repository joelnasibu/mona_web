<template>
  <ClientOnly>
    <div>
      <div class="d-flex align-center ga-3 flex-wrap">

        <AdminCoreSearch :search="search" @search="setSearch" />

        <!-- <div class="mt-1">
          <v-btn prepend-icon="mdi-storefront-outline" class="card-outlined px-5 text-none text-caption"
            title="Select Business" density="compact" size="small" rounded="lg" flat id="selectBusiness" variant="text">
            <span>{{ business?.name }}</span>
          </v-btn>
          <div class="mt-1">
            <AdminCoreSelect activator="#selectBusiness" :list="businessesList" :listValue="business.name"
              @setItem="setBusiness" />
          </div>
        </div> -->


        <v-btn-toggle mandatory color="black" divided border density="compact" class="rounded-lg">

          <v-btn prepend-icon="mdi-storefront-outline" class="card-outlined px-5 text-none text-caption"
            title="Select Business" density="compact" size="small" flat id="selectBusiness" variant="text">
            <span>{{ business?.name }}</span>
          </v-btn>
          <div class="mt-1">
            <AdminCoreSelect activator="#selectBusiness" :list="businessesList" :listValue="business.name"
              @setItem="setBusiness" />
          </div>



          <v-btn prepend-icon="mdi-page-next-outline" class="card-outlined px-5 text-none text-caption"
            title="Select Business" density="compact" size="small" flat id="selectStatus" variant="text">
            <span>{{ applicationStatus }}</span>
          </v-btn>
          <div class="mt-1">

            <v-menu activator="#selectStatus" :close-on-content-click="false" v-model="menu">
              <v-list class="pa-0 position-relative card-outlined rounded-lg ma-1" max-height="250" width="150"
                density="compact" lines="false">
                <div class="position-sticky bg-white text-caption" v-if="applicationStatuses.length > 6"
                  style="top: 0; z-index: 1">
                  <input type="search" :placeholder="`Filter (${applicationStatuses.length}) items...`"
                    class="px-3 w-100 filter-input bg-card" autofocus v-model="searchStatus" />
                  <v-divider></v-divider>
                </div>
                <div class="text-caption" v-for="(item, i) in filteredStatus" :key="i">
                  <!-- emitting the activator because of job filters on jobs page(website) to retrieve the index -->
                  <v-list-item @click="setStatus(item)" color="secondary">
                    <template v-slot:append>
                      <div v-if="setLength(item)" class="">
                        <!-- <div>{{ setLength(item) }}</div> -->
                        <v-badge :content="setLength(item)" inline hide-details density="compact"
                          color="secondary"></v-badge>
                      </div>
                    </template>
                    <span>{{ item }}</span>
                  </v-list-item>
                  <v-divider></v-divider>
                </div>
                <div class="py-2 text-caption text-center" v-if="filteredStatus.length === 0">
                  <span>No data</span>
                </div>
              </v-list>
            </v-menu>


















            <!-- <AdminCoreSelect activator="#selectStatus" :list="applicationStatuses" :listValue="applicationStatus"
              @setItem="setStatus" /> -->
          </div>











          <!-- 
          <v-btn variant="text" v-for="({ name, value, length }, index) in applicationStatuses"
            class="text-none text-caption" :value="value" :key="index">
            <span>{{ name }}</span>
            <v-badge inline :content="length" color="secondary" v-if="length > 0"></v-badge>
          </v-btn> -->
        </v-btn-toggle>

        <v-spacer></v-spacer>
        <v-btn icon="mdi-reload" size="x-small" flat color="primary-dark" title="Reload Data" @click="getData"></v-btn>
      </div>
      <div class="mt-4">
        <AdminCoreTableHeader text="Applications Recruiting Process" :number="applications.length" />
        <v-sheet width="100%" color="transparent">
          <v-data-table density="compact" :headers="filteredHeaders" :items="applications" :loading="loadData"
            class="bg-background">

            <template v-slot:[`item.dateCreated`]="{ item }">
              <span> {{ dateFormat_Time(item.dateCreated) }}</span>
            </template>

            <template v-slot:[`item.total`]="{ item }">
              <strong class="text-error">{{ currencyFormat(item.total) }}</strong>
            </template>

            <template v-slot:[`item.applicationScore`]="{ item }">
              <p class="mx-3"><strong :class="item.applicationScore > 2 ? 'text-success' : 'text-error'">{{
                getAverage(item.applicationScore) ?? 0
              }}</strong></p>
            </template>

            <template v-slot:[`item.applications`]="{ item }">
              <div class="">
                <v-btn icon="mdi-list-status" size="28" rounded="lg" flat color="primary" title="View applications"
                  variant="text" active @click="setApplications(item)"></v-btn>
              </div>
            </template>


          </v-data-table>

        </v-sheet>
      </div>


    </div>
  </ClientOnly>
</template>

<script setup>
import { useAppStore } from "~/store/app";
import { useAuthStore } from "~/store/auth";
import { useJobStore } from "~/store/jobs";
import { useBusinessStore } from "~/store/business";

const {
  replaceObjectEmptyStrings,
  filterDataPerField,
  currencyFormat,
  dateFormat_Time
} = useHelpers();

const appStore = useAppStore();
const { loading, currentUser, error, isAdmin, isVendor } = storeToRefs(appStore);
const { getUsers } = useAuthStore()
const { getJobApplications } = useJobStore();
const { getApprovedBusinesses } = useBusinessStore();

const data = ref([]);
const users = ref([]);
const loadData = ref(false);
const search = ref("");
const applicationStatus = ref("ALL");
const menu = ref(false)
const searchStatus = ref("");


const filteredHeaders = computed(() => {
  let list = [
    { title: "Application Id", value: "applicationId", show: true },
    { title: "Job Offer", value: "job.jobName", show: true },
    { title: "Applicants", value: "applicant.name", show: true },
    { title: "Date Submitted", value: "dateCreated", show: true },
    { title: "Status", value: "applicationStatus", show: false },
    { title: "Score", value: "applicationScore", show: true },
    { title: "Process", value: "applications", show: true },
    // { title: "Action", value: "action", show: true },
  ];
  return applicationStatus.value == 'ALL'
    ? list : list.filter((i) => i.show);
});


const applicationStatuses = ref([
  "ALL",
  "CONFIRMED",
  "INTERVIEWED",
  "MARKED",
  "ACCEPTED",
  "REJECTED"
]);

const filteredStatus = computed(() => {
  return applicationStatuses.value.filter((val) => {
    return val.toLowerCase().includes(searchStatus.value.toLowerCase());
  });
});
// { name: "All", value: "ALL" },
// { name: "Submitted", value: "SUBMITTED" },
// { name: "Confirmed", value: "CONFIRMED" },
// { name: "Interviewed", value: "INTERVIEWED" },
// { name: "Marked", value: "MARKED" },
// { name: "Accepted", value: "ACCEPTED" },
// { name: "Rejected", value: "REJECTED" }



const applications = computed(() => {
  const advanced = applicationStatus.value !== "ALL"
    ? {
      applicationStatus: applicationStatus.value,
    } : {}

  return filterDataPerField(data.value, search.value, advanced).filter(val => {
    return (business.value.name !== 'ALL BUSINESSES'
      ? val.job.business.businessName == business.value.name
      : val.applicationStatus !== "SUBMITTED")
  })

})

const getAverage = (items) => {
  var sum = items.reduce((a, b) => a + Number(b.score), 0)
  var num = items.length
  var avg = num > 0 ? Math.ceil(sum / num) : 0
  return avg
}


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

const setStatus = (val) => {
  applicationStatus.value = val
  menu.value = false;
  searchStatus.value = ""
}

const setLength = (status) => {
  var payload = data.value.filter(i => i.applicationStatus == status.toUpperCase())
  return payload.length
}



const getData = async () => {
  loadData.value = true;
  data.value = await getJobApplications();

  users.value = await getUsers(false)
  const allData = await getApprovedBusinesses(false)
  loadData.value = false;


  businesses.value = allData.filter((i) =>
    currentUser.value.accessLevel === 3
      ? i.userId === currentUser.value.userId
      : i
  );
  // data.value = replaceObjectEmptyStrings(data.value);
};


watchEffect(() => {
  getData();
});


const setSearch = (val) => {
  search.value = val;
};

const setApplications = (application) => {

  appStore.setAdminDrawer({
    status: true,
    type: "view-applications",
    title: `Candidate Application# <b>${application.applicationId}</b> : Score`,
    id: application.applicationId,
  });
};


useSeoMeta({
  title: "Job Applications",
});
</script>

<style lang="css" scoped></style>
