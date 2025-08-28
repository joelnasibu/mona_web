<template>

  <v-container class="h-100" v-if="!length || loader">
    <v-row class="h-100">
      <v-col cols="12" class="text-subtitle-1 text-disabled h-100 d-flex align-center justify-center">
        <span v-if="loader">Loading...</span>
        <span v-else>No orders Listed</span>
      </v-col>
    </v-row>
  </v-container>
  <div class="h-100" v-else>
    <div class="" v-for="(order, i) in data.orders" :key="i">
      <v-card flat class="d-flex ga-3 pa-1" @click="expandOrder(order.productId)">
        <v-img :src="order.image" height="80">
          <template v-slot:placeholder>
            <v-progress-circular class="h-50 w-100" color="primary-accent" indeterminate
              width="4"></v-progress-circular>

          </template>
        </v-img>
        <div class="text-caption d-flex flex-column">
          <span>Product#: {{ order.productId }}</span>
          <span class="text-disabled">Quantity: {{ order.quantity }} </span>
          <strong class="mt-1">{{ currencyFormat(order.total) }}</strong>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex align-center ga-3">
          <v-btn class="text-caption rounded-lg" size="small" flat :prepend-icon="setOrderStatus(data.orderStatus).icon"
          color="primary-accent" variant="tonal" :title="`Click to ${getNewStatus(
              data.orderStatus
            ).toLowerCase()} order`" @click.stop="updateOrderStatus(data)" :loading="loading">
            <span>{{ getNewStatus(data.orderStatus) }}</span>
          </v-btn>
          <v-icon class="my-auto icon" icon="mdi-chevron-down"
            :class="{ 'transform-180deg': orderToExpand === order.productId }"></v-icon>
        </div>
      </v-card>
      <v-expand-transition>
        <div class="" v-if="orderToExpand === order.productId">
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12" class="text-grey text-caption d-flex flex-column ga-2">
                <div class="d-flex justify-space-between" v-if="isAdmin">
                  <div class="d-flex ga-3">
                    <v-avatar size="40" rounded="lg" :image="data.customer?.picture === ''
                      ? profileImage
                      : data.customer?.picture
                      "></v-avatar>
                    <div class="d-flex flex-column">
                      <b>{{ data.customer.names }}</b>
                      <span>{{ data.customer.email }}</span>
                      <span>Customer</span>
                    </div>
                  </div>
                  <div class="d-flex ga-3">
                    <v-avatar size="40" rounded="lg"
                      :image="getBusiness(order.businessId)?.image ?? profileImage"></v-avatar>
                    <div class="d-flex flex-column">
                      <b>{{ getBusiness(order.businessId)?.businessName }}</b>
                      <span>{{ getBusiness(order.businessId)?.phone }}</span>
                      <span>Store</span>
                    </div>
                  </div>
                </div>
                <v-divider class="my-3"></v-divider>
                <div class="d-flex">
                  <v-icon icon="mdi-map-marker-outline" color="grey" start></v-icon>
                  <span>Delivery to {{ data.deliveryAddress }}</span>
                </div>
                <div class="d-flex">
                  <v-icon icon="mdi-clock-outline" color="grey" start></v-icon>
                  <span>Order placed on
                    {{ dateFormat_Time(data.dateCreated) }}</span>
                </div>
                <div class="d-flex">
                  <v-icon icon="mdi-clock-outline" color="grey" start></v-icon>
                  <span>Delivery on </span>
                </div>
                <div class="d-flex">
                  <v-icon icon="mdi-cash" color="grey" start></v-icon>
                  <span>Paid with {{ String(data.modeOfPayment).toLowerCase() }}
                  </span>
                </div>
                <div class="d-flex">
                  <v-icon icon="mdi-cash" color="grey" start></v-icon>
                  <span>Delivery fee {{ currencyFormat(order.deliveryFee) }}
                  </span>
                </div>
              </v-col>

            </v-row>
          </v-container>
        </div>
      </v-expand-transition>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["loader", "details"]);

const {
  currencyFormat,
  capitalizeFirstLetter,
  filterDataPerField,
  dateFormat_Month,
  numberFormat,
  dateFormat_Time,
} = useHelpers();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { loading, isAdmin, isVendor, adminDrawer, profileImage, currentUser } = storeToRefs(appStore);

import { useOrderStore } from "~/store/order";
const { singleOrder, changeOrderStatus } = useOrderStore();


import { useBusinessStore } from "~/store/business";
const { getBusinesses } = useBusinessStore()
const businesses = ref([])


const data = ref([]);
const loader = ref(false);
const getData = async () => {
  emits("loader", true);
  loader.value = true;
  data.value = await singleOrder(true, adminDrawer.value.id);
  businesses.value = await getBusinesses(false)
  emits("loader", false);
  loader.value = false;
  emits("details", data.value.orders?.length);

  //
};

const setOrderStatus = (orderStatus) => {
  return orderStatus.toLowerCase() === "confirmed"
    ? { icon: "mdi:check-circle-outline", color: "green" }
    : orderStatus.toLowerCase() === "processing"
      ? { icon: "line-md:uploading-loop", color: "orange" }
      : orderStatus.toLowerCase() === "placed"
        ? { icon: "mdi:database-check-outline", color: "orange" }
        : orderStatus.toLowerCase() === "on the way"
          ? { icon: "mdi:truck-outline", color: "orange" }
          : orderStatus.toLowerCase() === "delivered"
            ? { icon: "mdi:account-check-outline", color: "green" }
            : orderStatus.toLowerCase() === "cancelled"
              ? { icon: "mdi-close-circle-outline", color: "orange" }
              : { icon: "mdi-clipboard-arrow-left-outline", color: "red" };
};

const toggle = ref(1);
const updateOrderStatus = async (order) => {
  order.orderStatus =
    order.orderStatus === "PLACED"
      ? "PROCESSING"
      : order.orderStatus === "PROCESSING"
        ? "CONFIRMED"
        : order.orderStatus === "CONFIRMED"
          ? "ON THE WAY"
          : "DELIVERED";

  await changeOrderStatus({
    orderId: order.orderId,
    orderStatus: order.orderStatus,
  });
  if (!error.value) {
    toggle.value = toggle.value + 1;
    emits("updated");
  }
};
const getNewStatus = (status) => {
  return status === "PLACED"
    ? "Process"
    : status === "PROCESSING"
      ? "Confirm"
      : status === "CONFIRMED"
        ? "Send"
        : "Deliver";
};

const showCondition = () => {
  return toggle.value < 5 &&
    ((toggle.value < 2 && isVendor) ||
      (toggle.value > 1 && currentUser.accessLevel < 3))
}

const getBusiness = (businessId) => {
  const payload = businesses.value ? businesses.value.find(i => i.id == businessId) : ''
  return payload
}
watchEffect(() => {
  getData();
});
const length = computed(() => {
  return data.value.orders?.length;
});

const orderHeaders = [
  { title: "Image", value: "image" },
  { title: "Product", value: "productName" },
  { title: "Qty", value: "quantity" },
  { title: "Unit price", value: "price" },
  { title: "Discount", value: "discount" },
  { title: "Total", value: "total" },
  { title: "Business", value: "businessId" },
];

const expand = ref(false);
const orderToExpand = ref(null)
const expandOrder = (orderId) => {
  orderToExpand.value === orderId
    ? (orderToExpand.value = null)
    : (orderToExpand.value = orderId);
};

const status = ref("");
const statuses = ["ACCEPTED", "PENDING REVIEW", "REJECTED"];
const setStatus = (val) => {
  status.value = val;
};
</script>

<style lang="css" scoped></style>
