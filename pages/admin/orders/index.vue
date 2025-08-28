<template>
  <ClientOnly>
    <div>
      <div class="d-flex align-center ga-3 flex-wrap">
        <AdminCoreSearch :search="search" @search="setSearch" />
        <v-btn-toggle mandatory color="black" divided border density="compact" class="rounded-lg" v-model="orderStatus">
          <v-btn variant="text" v-for="({ name, value, length }, index) in orderStatuses" class="text-none text-caption"
            :value="value" :key="index">
            <span>{{ name }}</span>
            <v-badge inline :content="length" color="secondary" v-if="length > 0"></v-badge>
          </v-btn>
        </v-btn-toggle>
        <v-spacer></v-spacer>
        <!-- <v-btn icon="mdi-plus" size="x-small" flat color="primary-dark" title="Add business"
          :to="{ name: 'admin-businesses-create' }"></v-btn> -->
      </div>
      <div class="mt-4">
        <AdminCoreTableHeader text="Orders" :number="orders.length" />
        <v-sheet width="100%" color="transparent">
          <v-data-table density="compact" :headers="filteredHeaders" :items="orders" :loading="loadData"
            class="bg-background">

            <template v-slot:[`item.dateCreated`]="{ item }">
              <span> {{ dateFormat_Time(item.dateCreated) }}</span>
            </template>

            <template v-slot:[`item.total`]="{ item }">
              <strong class="text-error">{{ currencyFormat(item.total) }}</strong>
            </template>

            <template v-slot:[`item.orders`]="{ item }">
              <div class="">
                <v-btn icon="mdi-list-status" size="28" rounded="lg" flat color="primary" title="View orders"
                  variant="text" active @click="setBusinessOrders(item)"></v-btn>
              </div>
            </template>

            <template v-slot:[`item.action`]="{ item }">
              <AdminBtnDetailsBtn @details="
                navigateTo({
                  name: 'admin-businesses-id',
                  params: { id: item.id }
                })" />
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
import { useOrderStore } from "~/store/order";
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
const { getOrders } = useOrderStore();
const { getApprovedBusinesses } = useBusinessStore();

const data = ref([]);
const users = ref([]);
const businessData = ref([])
const loadData = ref(false);
const search = ref("");
const searchBusiness = ref('')
const order = ref({});
const orderStatus = ref("PLACED");


const filteredHeaders = computed(() => {
  let list = [
    { title: "Date", value: "dateCreated", show: true },
    { title: "Order Id", value: "orderId", show: true },

    { title: "Customer", value: "customer.names", show: true },
    { title: "Amount", value: "total", show: true },
    { title: "Mode of Payment", value: "modeOfPayment", show: true },
    { title: "Status", value: "orderStatus", show: true },
    { title: "Orders", value: "orders", show: true },
    // { title: "Action", value: "action", show: true },
  ];
  return list.filter((i) => i.show);
});


const orderStatuses = ref([
  { name: "Placed", value: "PLACED" },
  { name: "Processing", value: "PROCESSING" },
  { name: "Confirmed", value: "CONFIRMED" },
  { name: "On the Way", value: "ON THE WAY" },
  { name: "Delivered", value: "DELIVERED" },
  { name: "Cancelled", value: "CANCELLED" },
  { name: "Returned", value: "RETURNED" }
]);




const getData = async () => {
  loadData.value = true;
  data.value = await getOrders();
  orderStatuses.value.forEach(val => {
    val.length = data.value.filter(i => i.orderStatus == val.value).length
  })
  users.value = await getUsers(false)
  const allData = await getApprovedBusinesses(false)
  loadData.value = false;


  businessData.value = allData
  // .filter((i) =>
  //   currentUser.value.accessLevel === 3
  //     ? i.userId === currentUser.value.userId
  //     : i
  // );
  // data.value = replaceObjectEmptyStrings(data.value);
};

const orders = computed(() => {
  return filterDataPerField(data.value, search.value, {
    orderStatus: orderStatus.value
  })
})



const businesses = computed(() => {
  return filterDataPerField(businessData.value, searchBusiness.value);
});

watchEffect(() => {
  getData();
});


const setSearch = (val) => {
  search.value = val;
};

const getUser = (userId) => {
  let user = users.value?.find((u) => u.userId === userId);
  return user ? user?.firstname + " " + user?.lastname : "Firstname Lastname";
};

const singleBusiness = (businessId) => {
  let payload = businessData.value?.find((u) => u.id === businessId);
  return payload
};

const setBusinessOrders = (order) => {

  appStore.setAdminDrawer({
    status: true,
    type: "view-orders",
    title: `Order # <b>${order.orderId}</b>`,
    id: order.orderId,
  });
};

useSeoMeta({
  title: "Orders",
});
</script>

<style lang="css" scoped></style>
