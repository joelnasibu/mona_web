<template>
  <v-container class="bg-white card-outlined rounded-lg">
    <v-row>
      <v-col cols="12" sm="3" v-for="({ title, value, target }, i) in stats">
        <div class="d-flex flex-column text-caption">
          <span>{{ title }}</span>
          <p>
            <b>{{ value }}</b>
            <span class="mx-2 text-green-accent-4"
              ><v-icon icon="mdi-arrow-top-right" size="9" end></v-icon>
              100%</span
            >
          </p>

          <div class="mt-3 w-100">
            <!-- <div
              class="bg-grey-lighten-2 w-100 pa-1 rounded-lg position-relative overflow-auto"
            >
              <v-card
                class="position-absolute progress-value"
                :color="chartColors()[i]"
                :width="`${(value * 100) / target}%`"
                style="inset: 0"
              ></v-card>
            </div> -->
            <v-progress-linear
              :buffer-value="(value * 100) / target"
              :model-value="(value * 100) / target"
              :color="chartColors()[i]"
              class="rounded-lg"
              height="5"
              stream
            ></v-progress-linear>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const periodicity = inject("periodicity");
const { chartColors } = useHelpers();

const stats = ref([
  { title: "Received orders", value: 45, target: 120 },
  { title: "Delivered orders", value: 39, target: 100 },
  { title: "Featured Products", value: 12, target: 20 },
  { title: "Job applications", value: 34, target: 50 },
]);

import { useOrderStore } from "~/store/order";
const { businessOrder } = useOrderStore(),
  allOrders = ref([]);

import { useProductStore } from "~/store/products";
const { publishedProducts, featuredProducts, popularProducts } =
  useProductStore();

import { useJobStore } from "~/store/jobs";
const { getJobApplications } = useJobStore();
</script>

<style lang="css" scoped></style>
