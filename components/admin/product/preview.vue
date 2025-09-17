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
<<<<<<< HEAD
                  <div class="rounded-lg" style="
                      border: 1.5px solid rgba(var(--v-theme-border)) !important;
                    ">
                    <AdminCoreImage :image="payload.thumbnail" :view="true" :profile="false" :editable="false" />
=======
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
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
<<<<<<< HEAD
                          priceAfterDiscount(payload.price, payload.discount)
=======
                            priceAfterDiscount(payload.price, payload.discount)
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
<<<<<<< HEAD
          <v-badge :content="payload.stock?.length" inline color="link" location="end">
            <b class="mr-5">Stock Details</b>
          </v-badge>
        </v-col>
        <v-col cols="12">
          <v-data-table density="compact" :headers="headers" :items="payload.stock" class="bg-background">
            <template v-slot:[`item.no`]="{ item }">
              <span>{{ payload.stock.indexOf(item) + 1 }}</span>
            </template>
            <template v-slot:[`item.price`]="{ item }">
              <span>{{ currencyFormat(item.price) }}</span>
            </template>
            <template v-slot:[`item.expiration_date`]="{ item }">
              <span>{{ item.expiration_date ? dateFormat_Month(item.expiration_date) : "-" }}</span>
            </template>
            <template v-slot:[`item.color`]="{ item }">
              <v-card :color="item.color" width="15" height="15" flat rounded="circle"></v-card>
            </template>
          </v-data-table>
=======
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
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
