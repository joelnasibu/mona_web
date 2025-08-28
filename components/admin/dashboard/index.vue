<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="9">
        <admin-dashboard-top-left />
      </v-col>
      <v-col cols="12" sm="3">
        <admin-dashboard-top-right />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <admin-dashboard-stats />
      </v-col>
    </v-row>
    <!-- <v-row align="center">
      <v-col cols="3">
        <v-card flat class="pa-2">
          <div class="d-flex flex-column text-caption">
            <span>Pending orders</span>
            <p>
              <b>2</b>
            </p>

            <div class="mt-3 w-100">
              <v-progress-linear
                :buffer-value="50"
                :model-value="50"
                :color="chartColors()[1]"
                class="rounded-lg"
                height="5"
                stream
              ></v-progress-linear>
            </div>
          </div>
        </v-card>
        <v-card flat class="mt-3 pa-2">
          <div class="text-body-2 pa-2">
            <span>Recent orders</span>
          </div>
          <div class="text-caption d-flex flex-column ga-2">
            <div class="" v-for="i in 5">
              <div class="d-flex align-center ga-2 py-2">
                <v-avatar color="card" size="35"></v-avatar>
                <div class="">
                  <p>Order ID (2 items)</p>
                  <p>Delivery address</p>
                </div>
                <v-spacer></v-spacer>
                <p>{{ currencyFormat(100) }}</p>
              </div>
              <v-divider v-if="i !== 5"></v-divider>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card flat class="pa-2">
          <div class="d-flex flex-column text-caption">
            <span>Pending applications</span>
            <p>
              <b>4</b>
            </p>

            <div class="mt-3 w-100">
              <v-progress-linear
                :buffer-value="50"
                :model-value="50"
                :color="chartColors()[2]"
                class="rounded-lg"
                height="5"
                stream
              ></v-progress-linear>
            </div>
          </div>
        </v-card>
        <v-card flat class="mt-3 pa-2">
          <div class="text-body-2 pa-2">
            <span>Recent applications</span>
          </div>
          <div class="text-caption d-flex flex-column ga-2">
            <div class="" v-for="i in 5">
              <div class="d-flex align-center ga-2 py-2">
                <v-avatar color="card" size="35"></v-avatar>
                <div class="">
                  <p>Job title</p>
                  <p>Experience</p>
                </div>
              </div>
              <v-divider v-if="i !== 5"></v-divider>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card flat class="bg-transparent">
          <div class="bg-white rounded">
            <div class="text-body-2 pa-4">
              <span>Applications</span>
            </div>
            <div class="">
              <apexchart
                height="200px"
                type="donut"
                :options="applicationsChart.options"
                :series="applicationsChart.series"
              ></apexchart>
            </div>
          </div>

          <div class="bg-white mt-3 rounded">
            <div class="text-body-2 pa-4">
              <span>Orders</span>
            </div>
            <div class="">
              <apexchart
                height="200px"
                type="donut"
                :options="ordersChart.options"
                :series="ordersChart.series"
              ></apexchart>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script setup>
const props = defineProps({
  period: String,
});

const { chartColors, currencyFormat } = useHelpers();

const applicationsChart = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut",
      },
      // legend: {
      //   position: "bottom",
      // },
      labels: ["Pending", "Accepted", "Rejected"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  },
  ordersChart = {
    series: [44, 55, 41, 128, 10, 500, 12],
    options: {
      chart: {
        type: "donut",
      },
      // legend: {
      //   position: "bottom",
      // },
      labels: [
        "Placed",
        "Processing",
        "Confirmed",
        "On the way",
        "Delivered",
        "Cancelled",
        "Returned",
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  };

const business = inject("business");
import { useOrderStore } from "~/store/order";
import { useJobStore } from "~/store/jobs";
const { businessOrder } = useOrderStore(),
  { getJobApplications } = useJobStore(),
  orders = ref([]),
  applications = ref([]),
  getData = async () => {
    const [ordersList, applicationsList] = await Promise.all([
      businessOrder(),
      getJobApplications(),
    ]);
    console.log(ordersList, applicationsList);
  };

onMounted(() => {
  getData();
});
</script>

<style lang="css" scoped></style>
