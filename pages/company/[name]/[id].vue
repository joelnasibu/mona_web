<template>
  <ClientOnly>
    <div>
      <v-card flat :height="isMobile ? '150px' : '300px'" rounded="0">
        <v-img src="/images/world-map.svg" cover height="100%"></v-img>
      </v-card>
      <CoreMidScreenLayout>
        <div class="d-flex pa-1 position-relative">
          <v-card
            class="bg-white rounded-lg pa-2 card-outlined"
            :width="cardWidth"
            :class="{ 'position-absolute': !isMobile }"
            flat
            :style="`top: ${isMobile ? '0' : '-13vh'}; height:fit-content`"
          >
            <v-img :src="data.image" class="rounded"></v-img>
          </v-card>
          <v-container
            :style="`margin-left: calc(${
              isMobile ? '-0.9rem' : cardWidth
            } + 1rem)`"
          >
            <v-row align="center">
              <v-col cols="12" sm="8" class="pt-0">
                <div class="text-subtitle-1 text-md-h6 text-lg-h5">
                  <b>{{ capitalizeFirstLetter(data.businessName) }}</b>
                </div>
                <div class="d-flex flex-column text-body-2 my-2">
                  <a
                    :href="`mailto:${data.email}`"
                    title="Send mail"
                    class="text-decoration-underline text-grey-darken-2"
                    style="width: fit-content"
                  >
                    <v-icon icon="mdi-email-outline" start size="12"></v-icon
                    >{{ data.email }}</a
                  >
                  <a
                    :href="`tel:${data.phone}`"
                    title="Place a call"
                    class="my-1 text-decoration-underline text-grey-darken-2"
                    style="width: fit-content"
                  >
                    <v-icon icon="mdi-phone-outline" start size="12"></v-icon
                    >{{ data.phone }}</a
                  >
                  <a
                    :href="data.website"
                    target="_blank"
                    title="Visit our website"
                    class="mt-1 text-grey-darken-2 text-decoration-underline"
                    v-if="data.website"
                    style="width: fit-content"
                  >
                    <v-icon icon="mdi-web" start size="12"></v-icon
                    >Website<v-icon
                      icon="mdi-open-in-new"
                      end
                      size="10"
                    ></v-icon>
                  </a>
                </div>
              </v-col>
              <v-col class="pt-0" cols="12" sm="4">
                <div
                  class="d-flex align-center justify-start justify-md-end ga-4"
                >
                  <ClientShopProductRatings :rating="data.reviews.review" />
                  <!-- <v-spacer></v-spacer> -->
                  <!-- <v-btn
                    color="primary-accent"
                    variant="outlined"
                    size="small"
                    class="rounded-lg text-caption"
                  >
                    <span>Follow</span>
                  </v-btn>
                  <v-btn
                    color="primary-accent"
                    variant="outlined"
                    icon="mdi-bookmark"
                    size="28"
                    class="rounded-lg text-caption"
                  >
                  </v-btn> -->
                  <div class="">
                    <v-btn
                      color="primary-accent"
                      variant="outlined"
                      icon="mdi-share-outline"
                      size="28"
                      class="rounded-lg text-caption"
                      id="shareJob"
                    >
                    </v-btn>
                    <v-menu activator="#shareJob">
                      <v-card
                        class="rounded-lg card-outlined pa-1 mt-1 bg-card elevation-2"
                      >
                        <CoreSocials :share="true" />
                      </v-card>
                    </v-menu>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="8">
                <div
                  class="text-body-2 text-grey-darken-1"
                  style="line-height: 24px"
                >
                  <span> {{ data.overview }}</span>
                </div>
              </v-col></v-row
            >
          </v-container>
        </div>
        <v-container class="my-5">
          <v-row>
            <v-col cols="12" sm="8">
              <ClientJobsCompanyJobs :business="id" v-if="type === 'jobs'" />
              <ClientShopCompanyProducts :business="id" v-else />
            </v-col>
          </v-row>
        </v-container>
      </CoreMidScreenLayout>
    </div>
  </ClientOnly>
</template>

<script setup>
const route = useRoute(),
  id = route.params.id,
  name = route.params.name,
  type = route.query.type;

const { capitalizeFirstLetter } = useHelpers(),
  { isMobile } = useDevice();

const cardWidth = ref(isMobile ? "80px" : "200px");

import { useBusinessStore } from "~/store/business";
const { getSingleBusiness } = useBusinessStore(),
  data = ref(await getSingleBusiness(null, id));

//

useSeoMeta({
  title:
    ` ${capitalizeFirstLetter(data.value.businessName)} profile` ??
    "Company Profile",
  description: data.value.overview ?? "",
  ogTitle:
    `${capitalizeFirstLetter(data.value.businessName)} profile` ??
    "Company Profile",
  ogDescription: data.value.overview ?? "",
  ogImage: data.value.image,
  twitterTitle:
    `${capitalizeFirstLetter(data.value.businessName)} profile` ??
    "Company Profile",
  twitterDescription: data.value.overview ?? "",
  twitterImage: data.value.image,
});
</script>

<style lang="css" scoped></style>
