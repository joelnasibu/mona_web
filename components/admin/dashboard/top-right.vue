<template>
  <div class="bg-white card-outlined rounded-lg h-100">
    <AdminDashboardTitle title="Revenues">
      <div
        class="text-caption text-primary-accent py-1 px-2 rounded card-primary"
      >
        <b>{{ currencyFormat(series.reduce((a, b) => a + b, 0)) }}</b>
      </div>
    </AdminDashboardTitle>
    <div class="py-4">
      <apexchart
        type="donut"
        :options="chartOptions"
        height="300"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script setup>
const periodicity = inject("periodicity");
const { currencyFormat } = useHelpers();

const series = [1200, 200, 1054, 1874, 654];
const chartOptions = {
  chart: {
    width: 380,
    type: "donut",
  },
  labels: ["Sales", "Deliveries", "Ads", "Featured Products", "Featured Jobs"],
  fill: {
    opacity: 1,
  },
  stroke: {
    width: 0,
    colors: undefined,
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    show: true,
  },
  legend: {
    position: "bottom",
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0.5,
      },
      spokes: {
        strokeWidth: 0.5,
      },
    },
  },
  theme: {
    monochrome: {
      enabled: true,
      shadeTo: "dark",
      shadeIntensity: 0.9,
      color: "#6947b1",
    },
  },
  dataLabels: {
    enabled: true,
    // formatter(val, opts) {
    //   const name = opts.w.globals.labels[opts.seriesIndex];
    //   return [name, val.toFixed(1) + "%"];
    // },
  },
};
</script>

<style lang="css" scoped></style>
