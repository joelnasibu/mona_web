<template>
  <v-card flat class="rounded-lg card-outlined">
    <AdminDashboardTitle title="Finances">
      <div class="d-flex align-center ga-3">
        <div
          class="text-caption text-primary-accent py-1 px-2 rounded card-primary"
        >
          <b>{{ currencyFormat(0) }}</b>
        </div>
        <div class="d-flex align-center text-caption text-green-accent-4">
          <v-icon size="10" icon="mdi-arrow-top-right"></v-icon>
          <span class="ml-1">2.5%</span>
        </div>
      </div>
    </AdminDashboardTitle>
    <div id="chart">
      <apexchart
        type="line"
        height="300"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </v-card>
</template>

<script setup>
const periodicity = inject("periodicity");
const { currencyFormat, chartColors } = useHelpers();

const series = [
  {
    name: "Income",
    type: "column",
    data: [8120, 3600, 800],
  },
  {
    name: "Cashflow",
    type: "area",
    data: [7500, 1900, 700],
  },
  {
    name: "Revenue",
    type: "line",
    data: [4982, 954, 700],
  },
  // {
  //           name: 'TEAM A',
  //           type: 'column',
  //           data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  //         }, {
  //           name: 'TEAM B',
  //           type: 'area',
  //           data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  //         }, {
  //           name: 'TEAM C',
  //           type: 'line',
  //           data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  //         }
];
const chartOptions = {
  chart: {
    height: 350,
    type: "line",
    stacked: false,
  },
  colors: chartColors(),
  stroke: {
    width: [0, 2, 5],
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },

  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: ["Jobs", "Products", "Subscriptions"],
  markers: {
    size: 0,
  },
  // xaxis: {
  //   type: "datetime",
  // },
  // yaxis: {
  //   title: {
  //     text: "Points",
  //   },
  //   min: 0,
  // },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return currencyFormat(y);
        }
        return y;
      },
    },
    // fixed: {
    //   enabled: true,
    //   position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
    //   offsetY: 30,
    //   offsetX: 60,
    // },
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 25,
    offsetY: 5,
  },
};
</script>

<style lang="css" scoped></style>
