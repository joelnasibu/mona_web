<template>
  <ClientOnly>
    <div>
      <div class="d-flex align-center ga-3 flex-wrap">
        <AdminCoreSearch :search="search" @search="setSearch" />
        <v-btn-toggle mandatory color="black" divided border density="compact" class="rounded-lg" v-model="approved">
          <v-btn variant="text" v-for="({ name, value }, i) in approvalStatuses" class="text-none text-caption"
            :value="value" :key="i">
            <span>{{ name }}</span>
          </v-btn>
        </v-btn-toggle>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-plus" size="x-small" flat color="primary-dark" title="Add business"
          :to="{ name: 'admin-businesses-create' }"></v-btn>
      </div>
      <div class="mt-4">
        <AdminCoreTableHeader text="Businesses" :number="businesses.length" />
        <v-sheet width="100%" color="transparent">
          <v-data-table density="compact" :headers="filteredHeaders" :items="businesses" :loading="loadData"
            class="bg-background">
            <template v-slot:[`item.no`]="{ item }">
              <span>{{ businesses.indexOf(item) + 1 }}</span>
            </template>
            <template v-slot:[`item.type`]="{ item }">
              <span>{{
                getDetails(businessTypes, item.businessTypeId)?.businessType ??
                "N/A"
              }}</span>
            </template>
            <template v-slot:[`item.userId`]="{ item }">
              <span>{{ getUser(item.userId) ?? "N/A" }}</span>
            </template>
            <template v-slot:[`item.publish`]="{ item }">
              <AdminBtnStatus :status="item.approved" :titles="{ isNot: 'Approve', isAlready: 'Approved' }"
                @submit="handlePublish(item)" />
            </template>
            <template v-slot:[`item.verified`]="{ item }">
              <div v-if="!item.verified && !isVendor">
                <v-btn icon="mdi-list-status" size="28" rounded="lg" flat color="primary" title="View orders"
                  variant="text" active @click="setBusinessOrders(item)"></v-btn>
              </div>
              <div v-else-if="!item.verified && isVendor">
                <v-icon color="error" size="large">mdi-close-circle</v-icon>

              </div>
              <div v-else>
                <v-icon color="success" size="large">mdi-certificate</v-icon>
              </div>
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <AdminBtnDetailsBtn @details="
                navigateTo({
                  name: 'admin-businesses-id',
                  params: { id: item.id },
                })
                " />
            </template>
          </v-data-table>
        </v-sheet>
      </div>

      <v-dialog v-model="publishDialog" persistent fullscreen>
        <v-card class="card-outlined system-bg hide-scrollbar pa-0" rounded="0">
          <AdminCoreDialogHeader title="Publish business" @close="close">
            <v-btn rounded flat color="link" class="text-caption text-none mx-2" prepend-icon="mdi-check-circle-outline"
              :loading="loading" size="small" @click="publishConfirmation">
              <span>Approve</span>
            </v-btn>
          </AdminCoreDialogHeader>
          <v-card-text class="pa-0">
            <v-container class="py-0">
              <v-row justify="center">
                <v-col cols="12" sm="9">
                  <v-card class="bg-transparent pa-0">
                    <AdminBusinessPreview :payload="business" />
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
const {
  replaceObjectEmptyStrings,
  filterDataPerField,
  getDetails,
  getFullnames,
} = useHelpers();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { loading, currentUser, error, isAdmin, isVendor } =
  storeToRefs(appStore);

import { useBusinessTypeStore } from "~/store/business-types";
const { getBusinessTypes } = useBusinessTypeStore();
const businessTypes = ref([]);

import { useAuthStore } from "~/store/auth";
const { getUsers } = useAuthStore();
const users = ref([]);

import { useBusinessStore } from "~/store/business";
const { getBusinesses, approveBusiness } = useBusinessStore();
const data = ref([]);
const loadData = ref(false);
const getData = async () => {
  loadData.value = true;
  let allData = await getBusinesses();
  loadData.value = false;
  if (currentUser.value.accessLevel < 3) users.value = await getUsers(false);
  data.value = allData.filter((i) =>
    currentUser.value.accessLevel === 3
      ? i.userId === currentUser.value.userId
      : i
  );
  businessTypes.value = await getBusinessTypes(false);
  data.value = replaceObjectEmptyStrings(data.value);
};
watchEffect(() => {
  getData();
});
const businesses = computed(() => {
  return filterDataPerField(data.value, search.value, {
    approved: approved.value,
  });
});

const search = ref("");
const setSearch = (val) => {
  search.value = val;
};

const filteredHeaders = computed(() => {
  let list = [
    { title: "#", value: "no", show: false },
    { title: "ID", value: "code", show: true },
    { title: "Name", value: "businessName", show: true },
    { title: "Type", value: "type", show: true },
    {
      title: "Owner",
      value: "userId",
      show: currentUser.value.accessLevel < 3,
    },
    { title: "Responsible", value: "contactPerson.names", show: true },
    { title: "Contact", value: "phone", show: true },
    { title: "Verify", value: "verified", show: approved.value },
    {
      title: "Approved",
      value: "publish",
      show: !approved.value && !isVendor.value,
    },
    { title: "Action", value: "action", show: true },
  ];
  return list.filter((h) => h.show);
});

const approvalStatuses = [
  { name: "Approved", value: true },
  { name: "Pending", value: false },
];

const approved = ref(true);

const publishDialog = ref(false);
const business = ref({});

const handlePublish = (item) => {
  publishDialog.value = true;
  business.value = item;
};

const close = () => {
  publishDialog.value = false;
  business.value = {};
};

const publishConfirmation = async () => {
  await approveBusiness(business.value.id, { approved: true });
  if (!error.value) {
    close();
    getData();
    setTimeout(() => {
      approved.value = true;
    }, 2000);
  }
};

const getUser = (userId) => {
  let user = users.value?.find((u) => u.userId === userId);
  return user ? user?.firstname + " " + user?.lastname : "Firstname Lastname";
};

const setBusinessOrders = (business) => {
  appStore.setAdminDrawer({
    status: true,
    type: "business",
    title: `Business ${business.businessName} :`,
    id: business.id,
  });
};

useSeoMeta({
  title: "Businesses",
});
</script>

<style lang="css" scoped></style>
