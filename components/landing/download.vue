<template>
  <div class="apps py-15 my-15" id="appStores">
    <div class="text-h5 text-md-h4 text-center">
      <b>Téléchargez notre application aujourd'hui</b>
      <div
        class="my-5 text-subtitle-2 mx-auto text-disabled"
        style="max-width: 80ch"
      >
        <span
          >Bénéficiez du confort à portée de main : téléchargez notre
          application dès aujourd'hui et débloquez un monde de
          possibilités.</span
        >
      </div>
      <div class="d-flex py-2 justify-center ga-10 mt-5 mt-md-10">
        <img
          src="~/assets/images/badges/apple-store-badge-en.svg"
          :width="isMobile ? '30%' : '15%'"
          @click="alert('Coming soon')"
        />
        <img
          src="~/assets/images/badges/google-play-badge.png"
          :width="isMobile ? '30%' : '15%'"
          @click="alert('Coming soon')"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();
</script>

<style lang="css" scoped></style>
