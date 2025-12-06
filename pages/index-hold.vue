<template>
  <ClientOnly>
    <div class="system-bg overflow-hidden">
      <landingMain />
      <div class="">
        <LandingIntro />
        <LandingDownload />
        <LandingJobs />
        <div class="my-15">
          <LandingShop />
        </div>
        <div class="my-10 pt-10">
          <LandingFaq />
        </div>
      </div>
      <CoreMidScreenLayout>
        <!-- <v-container class="py-15 mt-15" fluid>
          <v-row align="center">
            <v-col cols="12" sm="6">
              <div class="d-flex flex-column text-body-2">
                <span class="text-grey-darken-3"
                  >Rejoignez notre bulletin d'information</span
                >
                <div
                  class="text-h5 font-weight-black"
                  style="text-wrap: balance"
                >
                  <b
                    >Restez informé, restez inspiré. Abonnez-vous à notre
                    newsletter aujourd'hui.</b
                  >
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="d-flex align-center position-relative">
                <div class="search w-100">
                  <v-text-field
                    hide-details
                    single-line
                    rounded
                    bg-color="white"
                    placeholder="exemple@accessglobal.com"
                    color="link"
                  ></v-text-field>
                </div>
                <v-btn
                  flat
                  rounded
                  size="small"
                  color="link"
                  class="text-body-2 text-none position-absolute mx-2"
                  location="right"
                >
                  <span>Subscribe</span>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container> -->
      </CoreMidScreenLayout>
    </div>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  layout: "landing-page",
});
</script>

<style lang="scss" scoped></style>
