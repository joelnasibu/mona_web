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
<<<<<<< HEAD
=======
                <span>Market</span>
                <b>{{ payload.market }}</b>
              </div>
              <div class="d-flex ga-2 preview-row">
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                <span>Name</span>
                <b>{{ payload.businessName }}</b>
              </div>
              <div class="d-flex ga-2 preview-row">
<<<<<<< HEAD
                <span>Type</span>
                <b>{{ payload.businessType }}</b>
              </div>
              <div class="d-flex ga-2 preview-row">
                <span>Tax identification n&deg;</span>
                <b>{{ payload.taxIdentificationNumber }}</b>
              </div>
              <div class="d-flex ga-2 preview-row">
                <span>Registration n&deg;</span>
                <b>{{ payload.registrationNumber }}</b>
              </div>
              <div class="d-flex ga-2 preview-row">
                <span>Bank account name</span>
                <b>{{ payload.bankDetails.accountName }}</b>
              </div>
              <div class="d-flex ga-2 preview-row">
                <span>Bank account number</span>
                <b>{{ payload.bankDetails.accountNo }}</b>
              </div>
=======
                <span>Store Number</span>
                <b>{{ payload.storeNumber }}</b>
              </div>
              <div class="d-flex ga-2 preview-row">
                <span>PIN</span>
                <b>{{ payload.pin }}</b>
              </div>

>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
<<<<<<< HEAD
          <div class="d-flex ga-2 preview-row">
            <span>Business website</span>
            <b>{{ payload.website }}</b>
          </div>
=======
          <!-- <div class="d-flex ga-2 preview-row">
            <span>Business website</span>
            <b>{{ payload.website }}</b>
          </div> -->
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
<<<<<<< HEAD
      <div class="px-3 mt-4 w-100">
        <AdminAddressDetails :payload="payload" />
=======
      <div class="px-3 w-100">
        <div class="d-flex ga-2 preview-row">
          <span>Longitude</span>
          <b>{{ payload.longitude }}</b>
        </div>
        <div class="d-flex ga-2 preview-row">
          <span>Latitude</span>
          <b>{{ payload.latitude }}</b>
        </div>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
      </div>
    </v-row>
    <v-row>
      <v-col cols="12" class="preview-header">
<<<<<<< HEAD
        <b>Business summary</b>
      </v-col>
      <div class="px-3 py-4 w-100 text-caption">
        <div v-html="payload.summary"></div>
=======
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
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
