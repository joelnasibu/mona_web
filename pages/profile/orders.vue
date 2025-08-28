<template>
  <div>
    <div class="px-2 px-md-4">
      <div class="text-h5 pt-8 pb-4">
        <b>My Orders</b>
      </div>

      <v-btn-toggle
        v-model="toggle"
        color="primary-accent"
        border
        divided
        variant="text"
        density="compact"
      >
        <v-btn
          class="text-caption"
          v-for="(item, i) in ordersFilter"
          :value="i"
          :key="i"
        >
          <span>{{ item }}</span>
        </v-btn>
      </v-btn-toggle>
    </div>
    <div class="d-flex align-center ga-2 my-4 px-2 px-md-4 py-2">
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
          <v-icon
            class="my-auto icon"
            icon="mdi-chevron-down"
            :class="{ 'transform-180deg': orderToExpand === order.orderId }"
          ></v-icon>
        </v-card>
        <v-expand-transition>
          <div class="" v-if="orderToExpand === order.orderId">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="4"
                  class="text-grey text-caption d-flex flex-column ga-2"
                >
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
                <v-col cols="12" sm="8">
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
                    <template v-slot:[`item.review`]="{ item }">
                      <div class="">
                        <v-btn
                          size="x-small"
                          class="text-caption"
                          variant="outlined"
                          color="primary-accent"
                          @click="openDialog(item)"
                        >
                          <span>Review</span>
                        </v-btn>
                      </div>
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
  <v-dialog v-model="dialog" fullscreen transition="dialog-top-transition">
    <v-card class="card-outlined">
      <AdminCoreDialogHeader title="Review product" @close="closeDialog" />

      <v-card-text>
        <v-container>
          <v-row justify="center">
            <v-col cols="12" sm="2">
              <div class="w-100">
                <v-card
                  class="bg-transparent pa-2 product-card card-outlined d-flex flex-row flex-md-column"
                  flat
                >
                  <v-card
                    flat
                    class="d-flex align-center"
                    :width="isMobile ? '40px' : '100%'"
                    :height="isMobile ? '100%' : 150"
                  >
                    <v-img
                      :src="rating.item?.image"
                      :lazy-src="rating.item?.image"
                    ></v-img>
                  </v-card>
                  <div class="text-caption d-flex flex-column mt-0 mt-md-2">
                    <div class="one-line">
                      <span>{{ rating.item?.productName }}</span>
                    </div>
                    <div class="">
                      <client-shop-product-prices
                        :small="true"
                        :price="rating.item?.price"
                        :discount="rating.item?.discount"
                      />
                    </div>
                  </div>
                </v-card>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="text-body-2">
                <span>Product rating</span>
              </div>
              <div class="text-caption d-flex align-center">
                <v-rating
                  v-model="rating.rating"
                  color="link"
                  density="compact"
                  size="small"
                  hover
                  half-increments
                  class="mr-3"
                ></v-rating>
                <span>({{ rating.rating }}/5)</span>
              </div>
              <div class="text-disabled d-flex align-center text-caption">
                <span>This product have been averagely rated {{ 4.6 }}/5</span>
              </div>

              <div class="text-body-2 mt-4 w-100">
                <span>Comment</span>
                <Editor :text="rating.comment" @set-text="setComment" />
              </div>
              <v-btn
                class="mt-3 text-caption"
                color="primary-accent"
                size="small"
                flat
                block
                :loading="loading"
                @click="submitReview"
              >
                <span>Submit</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
const {
    currencyFormat,
    capitalizeFirstLetter,
    filterDataPerField,
    dateFormat_Month,
    numberFormat,
    dateFormat_Time,
  } = useHelpers(),
  { isMobile } = useDevice();

import { useAppStore } from "~/store/app";
const { loading, error } = storeToRefs(useAppStore());

import { useOrderStore } from "~/store/order";
const { customerOrders } = useOrderStore();
const data = ref([]);
const getData = async () => {
  data.value = await customerOrders();
  //
};
watchEffect(() => {
  getData();
});

const toggle = ref(0);
const ordersFilter = ["All", "Processing", "Delivered", "Cancelled"];

const sort = ref("Newest");
const setSort = (val) => {
  sort.value = val;
};
const filteredOrders = computed(() => {
  const unsortedData =
    toggle.value === 0
      ? filterDataPerField(data.value, "")
      : filterDataPerField(data.value, "", {
          orderStatus:
            toggle.value === 1
              ? "Processing"
              : toggle.value === 2
              ? "Delivered"
              : "Cancelled",
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
  return orderStatus.toLowerCase() === "placed"
    ? { icon: "mdi:check-circle-outline", color: "green" }
    : orderStatus.toLowerCase() === "processing"
    ? { icon: "line-md:uploading-loop", color: "orange" }
    : { icon: "mdi:close-circle-outline", color: "red" };
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
  // { title: "Discount", value: "discount" },
  { title: "Total", value: "total" },
  { title: "Action", value: "review" },
];

import { useReviewStore } from "~/store/reviews";
const { reviewProduct } = useReviewStore(),
  dialog = ref(false),
  rating = ref({
    rating: 5,
    type: "products",
    comment: "",
    itemId: null,
    item: {},
  }),
  openDialog = (val) => {
    dialog.value = true;
    rating.value.itemId = val.productId;
    rating.value.item = val;

    console.log(val);
  },
  closeDialog = () => {
    dialog.value = false;
    rating.value = {
      rating: 5,
      type: "products",
      comment: "",
      itemId: null,
      item: {},
    };
  },
  setComment = (val) => {
    rating.value.comment = val;
  },
  submitReview = async () => {
    await reviewProduct(rating.value);
    if (!error.value) closeDialog();
  };
</script>

<style lang="css" scoped></style>
