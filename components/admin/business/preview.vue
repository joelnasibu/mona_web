<template>
  <v-container class="bg-card text-caption" fluid>
    <v-row>
      <v-col cols="12" class="preview-header">
        <b>Basic business information</b>
      </v-col>
      <v-col cols="12">
        <v-container class="pa-0" fluid>
          <v-row align="center">
            <v-col cols="12" sm="6" class="text-center">
              <AdminCoreImage
                :image="payload.image"
                :view="true"
                :profile="false"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <div class="d-flex ga-2 preview-row">
                <span>Market</span>
                <b>{{ payload.market }}</b>
              </div>
              <div class="d-flex ga-2 preview-row">
                <span>Name</span>
                <b>{{ payload.businessName }}</b>
              </div>
              <div class="d-flex ga-2 preview-row">
                <span>Store Number</span>
                <b>{{ payload.storeNumber }}</b>
              </div>
              <div class="d-flex ga-2 preview-row">
                <span>PIN</span>
                <b>{{ payload.pin }}</b>
              </div>

              <div class="d-flex ga-2 preview-row">
                <span>Registration date</span>
                <b>{{ dateFormat_Month(payload.dateOfRegistration) }}</b>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <div class="preview-header py-3">
          <b>Contact</b>
        </div>
        <div class="mt-4">
          <!-- <div class="d-flex ga-2 preview-row">
            <span>Business website</span>
            <b>{{ payload.website }}</b>
          </div> -->
          <div class="d-flex ga-2 preview-row">
            <span>Business email address</span>
            <b>{{ payload.email }}</b>
          </div>
          <div class="d-flex ga-2 preview-row">
            <span>Business phone N&deg;</span>
            <b>{{ payload.phone }}</b>
          </div>
          <div class="d-flex ga-2 preview-row">
            <span>Business contact person</span>
            <b>{{ payload.contactPerson.names }}</b>
          </div>
          <div class="d-flex ga-2 preview-row">
            <span>Contact person email</span>
            <b>{{ payload.contactPerson.email }}</b>
          </div>
          <div class="d-flex ga-2 preview-row">
            <span>Contact person phone N&deg;</span>
            <b>{{ payload.contactPerson.phone }}</b>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="preview-header py-3">
          <b>Owner</b>
        </div>
        <div class="mt-4">
          <div class="d-flex ga-2 preview-row">
            <span>Names</span>
            <b>{{ payload.userId }}</b>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="preview-header">
        <b>Address</b>
      </v-col>
      <div class="px-3 w-100">
        <div class="d-flex ga-2 preview-row">
          <span>Longitude</span>
          <b>{{ payload.longitude }}</b>
        </div>
        <div class="d-flex ga-2 preview-row">
          <span>Latitude</span>
          <b>{{ payload.latitude }}</b>
        </div>
      </div>
    </v-row>
    <v-row>
      <v-col cols="12" class="preview-header">
        <b>Payment Methods</b>
      </v-col>
      <div class="px-3 py-4 w-100 text-caption">
        <div class="d-flex ga-2 preview-row">
          <span>M-Pesa</span>
          <b></b>
        </div>
        <div class="d-flex ga-2 preview-row">
          <span>Buy Goods</span>
          <b></b>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  payload: Object,
});

const { dateFormat_Month } = useHelpers();
</script>

<style lang="css" scoped></style>
