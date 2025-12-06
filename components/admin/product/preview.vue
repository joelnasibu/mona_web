<template>
  <v-card flat color="card pa-0">
    <v-container class="text-caption" fluid>
      <v-row>
        <v-col cols="12" class="preview-header">
          <b>Product information</b>
        </v-col>
        <v-col cols="12">
          <v-container class="pa-0" fluid>
            <v-row align="center">
              <v-col cols="12" sm="6" class="text-center">
                <div class="d-flex ga-4">
                  <div
                    class="rounded-lg"
                    style="
                      border: 1.5px solid rgba(var(--v-theme-border)) !important;
                    "
                  >
                    <AdminCoreImage
                      :image="payload.thumbnail"
                      :view="true"
                      :profile="false"
                      :editable="false"
                    />
                  </div>
                  <div class="d-flex flex-wrap ga-3">
                    <div class="" v-for="(img, i) in payload.images" :key="i">
                      <v-card width="100" flat class="card-outlined rounded-lg">
                        <v-img :src="img" :aspect-ratio="4 / 3"></v-img>
                      </v-card>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="d-flex ga-2 preview-row">
                  <span>Name</span>
                  <b>{{ payload.productName }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Brand</span>
                  <b>{{ payload.brand }}</b>
                </div>
                <!-- <div class="d-flex ga-2 preview-row">
                  <span>Model</span>
                  <b>{{ payload.model }}</b>
                </div> -->
                <div class="d-flex ga-2 preview-row">
                  <span>Category</span>
                  <b>{{
                    typeof payload.category === "object"
                      ? payload.category?.name
                      : payload.category
                  }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Subcategory</span>
                  <b>{{
                    payload.subcategory ?? payload.category?.subcategory
                  }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Business</span>
                  <b>{{
                    typeof payload.business === "object"
                      ? payload.business?.businessName
                      : payload.business
                  }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Price</span>
                  <b>{{ currencyFormat(payload.price) }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Discount</span>
                  <div class="d-flex align-center ga-4">
                    <b>{{
                      currencyFormat(
                        Number(
                          payload.price -
                            priceAfterDiscount(payload.price, payload.discount)
                        )
                      )
                    }}</b>
                    <div class="px-3 card-link text-link rounded">
                      <span>- {{ payload.discount }}%</span>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="text-caption" fluid>
      <v-row>
        <v-col cols="12" class="preview-header">
          <b class="mr-5">Other Details</b>
        </v-col>
        <v-col cols="12">
          <div class="d-flex ga-2 preview-row">
            <span>Grade</span>
            <b>{{ payload.grade }}</b>
          </div>
          <div class="d-flex ga-2 preview-row">
            <span>Size</span>
            <b>{{ payload.size }}</b>
          </div>
          <div class="d-flex ga-2 preview-row">
            <span>Color</span>
            <v-card
              width="15"
              height="15"
              class="rounded-circle"
              flat
              :color="payload.color"
            ></v-card>
          </div>
          <div class="d-flex ga-2 preview-row">
            <span>Quantity</span>
            <b>{{ payload.quantity }}</b>
          </div>
          <div class="d-flex ga-2 preview-row">
            <span>Expiry Date</span>
            <b>{{ payload.expiration_date }}</b>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="text-caption" fluid>
      <v-row>
        <v-col cols="12" class="preview-header">
          <b>Summary</b>
        </v-col>
        <v-col cols="12">
          <span>{{ payload.summary }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="preview-header">
          <b>Detailed description</b>
        </v-col>
        <v-col cols="12">
          <span v-html="payload.description"></span>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
defineProps({
  payload: Object,
});

const { currencyFormat, priceAfterDiscount, dateFormat_Month } = useHelpers();

const headers = [
  { title: "#", value: "no" },
  { title: "Size", value: "size" },
  { title: "Color", value: "color" },
  { title: "Quantity", value: "stock" },
  { title: "Price", value: "price" },
  { title: "Expiry Date", value: "expiration_date" },
];
</script>

<style lang="css" scoped></style>
