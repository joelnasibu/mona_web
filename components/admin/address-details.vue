<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col cols="12" sm="6">
        <div class="d-flex ga-2 preview-row">
          <span>Country</span>
          <b>{{ payload.address.country }}</b>
        </div>
        <div class="d-flex ga-2 preview-row">
          <span>Province</span>
          <b>{{ payload.address.province }}</b>
        </div>
        <div class="d-flex ga-2 preview-row">
          <span>Town</span>
          <b>{{ payload.address.town }}</b>
        </div>
        <div class="d-flex ga-2 preview-row">
          <span>Commune</span>
          <b>{{ payload.address.commune }}</b>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex ga-2 preview-row">
          <span>Quartier</span>
          <b>{{ payload.address.quartier }}</b>
        </div>
        <div class="d-flex ga-2 preview-row">
          <span>Avenue</span>
          <b>{{ payload.address.avenue }}</b>
        </div>
        <div class="d-flex ga-2 preview-row">
          <span>Number</span>
          <b>{{ payload.address.no }}</b>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({
  payload: Object,
});
</script>

<style lang="css" scoped></style>
