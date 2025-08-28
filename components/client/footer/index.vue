<template>
  <ClientOnly>
    <v-footer color="drawer" class="pa-0" id="footer" absolute>
      <div class="w-100">
        <ClientFooterBackToTop />
        <v-divider></v-divider>
        <div class="pa-1 px-md-3 px-lg-5">
          <v-container class="pa-0" fluid>
            <v-row class="ma-auto">
              <v-col cols="12" sm="12">
                <div class="d-flex align-center justify-center">
                  <!-- <div class="">
                    <b>Let's keep in touch</b>
                    <div class="d-flex py-2">
                      <div class="input caption d-flex align-center">
                        <v-icon
                          size="x-small"
                          class="px-5"
                          icon="mdi-email"
                          color="primary-accent"
                        ></v-icon>
                        <input
                          type="text"
                          placeholder="Enter your email"
                          class="rounded text-caption"
                        />
                        <v-btn
                          class="text-caption px-1 rounded-te-sm rounded-be-sm"
                          icon="mdi-send"
                          color="primary-accent"
                          flat
                          rounded="0"
                          size="small"
                          title="subscribe"
                        >
                        </v-btn>
                      </div>
                    </div>
                  </div> -->
                  <!-- <v-spacer></v-spacer> -->
                  <div
                    class="d-flex flex-column justify-center text-center align-center"
                  >
                    <b>Download our app</b>
                    <div
                      class="d-flex py-2 mx-auto justify-center"
                      style="gap: 1rem"
                    >
                      <img
                        src="~/assets/images/badges/apple-store-badge-en.svg"
                        :width="isMobile ? '50%' : '15%'"
                      />
                      <img
                        src="~/assets/images/badges/google-play-badge.png"
                        :width="isMobile ? '50%' : '15%'"
                      />
                    </div>
                  </div>
                </div>
              </v-col>
              <!-- <v-col cols="12" sm="8">
                <ClientFooterLinks />
              </v-col> -->
            </v-row>
          </v-container>
          <v-divider></v-divider>
          <ClientFooterBottom />
        </div>
      </div>
    </v-footer>
  </ClientOnly>
</template>

<script setup>
const { isMobile } = useDevice();
</script>

<style lang="css" scoped>
.input {
  border-radius: 3px;
  background-color: white;
  width: 100%;
  max-width: 600px;
}
.input input {
  outline: none;
  border: none;
  padding: 0 7px;
  width: 100%;
}
</style>
