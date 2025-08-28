<template>
  <div>
    <div class="pa-2 pa-md-4 bg-card d-flex align-center flex-wrap ga-2">
      <!-- <v-btn-toggle
          v-model="toggle"
          color="primary-accent"
          border
          divided
          variant="text"
          density="compact"
        >
      </v-btn-toggle> -->
      <v-btn
        class="text-caption rounded-lg"
        v-for="(item, i) in ordersFilter"
        :value="i"
        :key="i"
        @click="toggle = i"
        flat
        size="x-small"
        :variant="toggle === i ? 'flat' : 'outlined'"
        :active="toggle === i"
        :color="toggle === i ? 'primary-dark' : 'grey-darken-2'"
      >
        <span>{{ item }}</span>
      </v-btn>
    </div>
    <div class="d-flex align-center ga-2 my-4 px-2 px-md-4">
      <div class="">
        <v-btn
          class="text-caption card-outlined rounded-lg"
          variant="text"
          size="small"
          id="sortBy"
          prepend-icon="mdi-sort"
        >
          <span>Sort by {{ String(sort).toLowerCase() }}</span>
        </v-btn>
        <AdminCoreSelect
          activator="#sortBy"
          :list="['Newest', 'Oldest', 'Big expense', 'Small expense']"
          :list-value="sort"
          @set-item="setSort"
        />
      </div>
      <!-- <v-btn
          class="text-caption card-outlined rounded-lg"
          variant="text"
          size="small"
          prepend-icon="mdi-calendar-outline"
        >
          <span>From:</span>
        </v-btn>
        <v-btn
          class="text-caption card-outlined rounded-lg"
          variant="text"
          size="small"
          prepend-icon="mdi-calendar-outline"
        >
          <span>To:</span>
        </v-btn> -->
    </div>
    <div class="d-flex flex-column ga-3 px-0 px-md-4">
      <div class="" v-for="(order, i) in filteredOrders" :key="i">
        <v-card
          flat
          class="d-flex ga-3 pa-2"
          @click="expandOrder(order.orderId)"
        >
          <v-avatar size="60" color="card" rounded="lg">
            <Icon
              :name="setOrderStatus(order.orderStatus).icon"
              size="2rem"
              :color="setOrderStatus(order.orderStatus).color"
            />
          </v-avatar>
          <div class="text-caption d-flex flex-column">
            <span>Order#: {{ order.orderId }}</span>
            <span class="text-disabled"
              >{{ order.orders.length }} Product(s)</span
            >
            <span class="mt-1">{{ currencyFormat(order.total) }}</span>
          </div>
          <v-spacer></v-spacer>
          <div class="d-flex align-center ga-3">
            <v-btn
              class="text-caption rounded-lg"
              size="small"
              flat
              variant="outlined"
              color="primary-accent"
              :title="`Click to ${getNewStatus(
                order.orderStatus
              ).toLowerCase()} order`"
              v-if="
                toggle < 5 &&
                ((toggle < 2 && isVendor) ||
                  (toggle > 1 && currentUser.accessLevel < 3))
              "
              @click.stop="updateOrderStatus(order)"
              :loading="loading"
            >
              <span>{{ getNewStatus(order.orderStatus) }}</span>
            </v-btn>
            <v-icon
              class="my-auto icon"
              icon="mdi-chevron-down"
              :class="{ 'transform-180deg': orderToExpand === order.orderId }"
            ></v-icon>
          </div>
        </v-card>
        <v-expand-transition>
          <div class="" v-if="orderToExpand === order.orderId">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  :sm="small ? 12 : 4"
                  class="text-grey text-caption d-flex flex-column ga-2"
                >
                  <div class="" v-if="isAdmin">
                    <div class="d-flex ga-3">
                      <v-avatar
                        size="40"
                        rounded="lg"
                        :image="
                          order.customer?.picture === ''
                            ? profileImage
                            : order.customer?.picture
                        "
                      ></v-avatar>
                      <div class="d-flex flex-column">
                        <b>{{ order.customer.names }}</b>
                        <span>{{ order.customer.email }}</span>
                      </div>
                    </div>
                    <v-divider class="my-3"></v-divider>
                  </div>
                  <div class="d-flex">
                    <v-icon
                      icon="mdi-map-marker-outline"
                      color="grey"
                      start
                    ></v-icon>
                    <span>Delivery to {{ order.deliveryAddress }}</span>
                  </div>
                  <div class="d-flex">
                    <v-icon
                      icon="mdi-clock-outline"
                      color="grey"
                      start
                    ></v-icon>
                    <span
                      >Order placed on
                      {{ dateFormat_Time(order.dateCreated) }}</span
                    >
                  </div>
                  <div class="d-flex">
                    <v-icon
                      icon="mdi-clock-outline"
                      color="grey"
                      start
                    ></v-icon>
                    <span>Delivery on </span>
                  </div>
                  <div class="d-flex">
                    <v-icon icon="mdi-cash" color="grey" start></v-icon>
                    <span
                      >Paid with {{ String(order.modeOfPayment).toLowerCase() }}
                    </span>
                  </div>
                  <div class="d-flex">
                    <v-icon icon="mdi-cash" color="grey" start></v-icon>
                    <span
                      >Delivery fee {{ currencyFormat(order.deliveryFee) }}
                    </span>
                  </div>
                </v-col>
                <v-col cols="12" :sm="small ? 12 : 8">
                  <v-data-table :headers="orderHeaders" :items="order.orders">
                    <template v-slot:[`item.image`]="{ item }">
                      <div class="">
                        <v-avatar size="40" :image="item.image"> </v-avatar>
                        <v-dialog activator="parent" width="400">
                          <v-card class="card-outlined rounded-lg">
                            <v-img :src="item.image">
                              <template v-slot:placeholder>
                                <v-progress-circular
                                  color="primary-accent"
                                  indeterminate
                                ></v-progress-circular>
                              </template>
                            </v-img>
                          </v-card>
                        </v-dialog>
                      </div>
                    </template>
                    <template v-slot:[`item.productName`]="{ item }">
                      <span>{{ capitalizeFirstLetter(item.productName) }}</span>
                    </template>
                    <template v-slot:[`item.price`]="{ item }">
                      <span>{{ currencyFormat(item.price) }}</span>
                    </template>
                    <template v-slot:[`item.total`]="{ item }">
                      <span>{{ currencyFormat(item.total) }}</span>
                    </template>
                    <template v-slot:[`item.discount`]="{ item }">
                      <span>{{ currencyFormat(item.discount) }}</span>
                    </template>
                  </v-data-table>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-expand-transition>
        <v-divider></v-divider>
      </div>
      <div
        class="py-10 my-10 py-md-15 my-md-15 text-disabled text-center"
        v-if="!filteredOrders.length || loading"
      >
        <span v-if="loading">Loading orders...</span>
        <span v-else>No orders found</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    data: Array,
    small: Boolean,
  }),
  emits = defineEmits(["updated"]);

const {
  currencyFormat,
  capitalizeFirstLetter,
  filterDataPerField,
  dateFormat_Month,
  numberFormat,
  dateFormat_Time,
} = useHelpers();

import { useAppStore } from "~/store/app";
const { loading, isAdmin, isVendor, profileImage, error, currentUser } =
  storeToRefs(useAppStore());

const toggle = ref(1);
const ordersFilter = [
  "All",
  "Placed",
  "Processing",
  "Confirmed",
  "On the way",
  "Delivered",
  "Cancelled",
  "Returned",
];

const sort = ref("Newest");
const setSort = (val) => {
  sort.value = val;
};
const filteredOrders = computed(() => {
  const unsortedData =
    toggle.value === 0
      ? filterDataPerField(props.data, "")
      : filterDataPerField(props.data, "", {
          orderStatus:
            toggle.value === 1
              ? "PLACED"
              : toggle.value === 2
              ? "PROCESSING"
              : toggle.value === 3
              ? "CONFIRMED"
              : toggle.value === 4
              ? "ON THE WAY"
              : toggle.value === 5
              ? "DELIVERED"
              : toggle.value === 6
              ? "CANCELLED"
              : "RETURNED",
        });
  if (sort.value === "Newest" || sort.value === "Oldest")
    return unsortedData.sort((a, b) => {
      if (a.dateCreated > b.dateCreated)
        if (sort.value === "Newest") return -1;
        else return 1;
    });
  if (sort.value === "Big expense" || sort.value === "Small expense")
    return unsortedData.sort((a, b) => {
      if (a.total > b.total) {
        if (sort.value === "Big expense") return -1;
        else return 1;
      }
    });
});

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

const getNewStatus = (status) => {
  return status === "PLACED"
    ? "Process"
    : status === "PROCESSING"
    ? "Confirm"
    : status === "CONFIRMED"
    ? "Send"
    : "Deliver";
};

import { useOrderStore } from "~/store/order";
const { changeOrderStatus } = useOrderStore();
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

const orderToExpand = ref(null);
const expandOrder = (orderId) => {
  orderToExpand.value === orderId
    ? (orderToExpand.value = null)
    : (orderToExpand.value = orderId);
};

const orderHeaders = [
  { title: "Image", value: "image" },
  { title: "Product", value: "productName" },
  { title: "Qty", value: "quantity" },
  { title: "Unit price", value: "price" },
  { title: "Discount", value: "discount" },
  { title: "Total", value: "total" },
];
</script>

<style lang="css" scoped></style>
