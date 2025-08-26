<template>
  <ClientOnly>
    <CoreMidScreenLayout>
      <v-fade-transition>
        <div class="alternative-header position-sticky bg-white pa-1 pt-4" style="top: 0; z-index: 2"
          v-if="showAlternativeHeader">
          <v-container>
            <v-row class="ma-auto card-outlined rounded-lg bg-white box-shadow-bottom" align="center">
              <v-col cols="12" sm="8">
                <div class="d-flex ga-4">
                  <div class="d-flex flex-column">
                    <div class="text-subtitle-1 text-md-h6 two-lines">
                      <b>{{ capitalizeFirstLetter(data.jobName) }}</b>
                    </div>
                    <div class="text-grey">
                      <div class="text-body-2 text-capitalize d-flex align-center ga-1">
                        <div class="d-flex align-center ga-2">
                          <v-avatar size="30" :image="data.business.logo"></v-avatar>
                          <div class="text-decoration-underline text-primary">
                            <NuxtLink :to="{
                              name: 'company-name-id',
                              params: {
                                id: data.businessId,
                                name: String(data.business.businessName)
                                  .toLowerCase()
                                  .replaceAll(' ', '-'),
                              },
                              query: {
                                type: 'jobs',
                              },
                            }" @click.stop>{{
                              String(data.business.businessName).toLowerCase()
                            }}</NuxtLink>
                          </div>
                        </div>
                        <v-icon icon="mdi-circle-small" class="text-grey"></v-icon>
                        <div class="d-flex align-center ga-1">
                          <v-icon icon="mdi-map-marker-outline" size="x-small"></v-icon>
                          <span>{{ String(data.location).toLowerCase() }}</span>
                        </div>
                        <v-icon icon="mdi-circle-small" class="text-grey"></v-icon>
                        <div class="d-flex align-center ga-1">
                          <v-icon icon="mdi-clock-outline" size="x-small"></v-icon>
                          <span>{{ String(data.jobtype).toLowerCase() }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card flat class="bg-transparent d-flex flex-column h-100 px-0 px-md-4">
                  <div class="d-flex align-center ga-2 justify-end">
                    <div class="w-100 mr-4">
                      <v-btn class="text-caption text-none mt-1" rounded="lg" color="primary-accent" flat size="small"
                        :disabled="dateDifference(data.deadline) == 'Closed' || data.jobstatus == 'CLOSED'"
                        @click="checkUser" block>
                        <span>Apply</span>
                      </v-btn>
                    </div>
                    <v-btn class="card-outlined rounded-lg" :icon="`mdi-bookmark${data.isSaved ? '' : '-outline'}`"
                      color="primary-accent" :title="data.isSaved ? 'Remove from saved' : 'Add to saved'
                        " :loading="loading" variant="text" size="30" @click.stop="toggleWishlist">
                    </v-btn>
                    <div class="">
                      <v-btn rounded="lg" icon="mdi-share" flat title="Share" color="grey" size="30"
                        id="shareJob"></v-btn>
                      <v-menu activator="#shareJob">
                        <v-card class="rounded-lg card-outlined pa-1 mt-1 bg-card elevation-2">
                          <CoreSocials :share="true" />
                        </v-card>
                      </v-menu>
                    </div>
                    <v-btn rounded="lg" icon="mdi-dots-horizontal" flat title="Options" color="grey" size="30"></v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-fade-transition>
      <v-container fluid class="px-0">
        <v-row>
          <v-col cols="12" class="pb-0">
            <CoreLinks :links="links" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="8">
            <!-- class="position-sticky"
            style="top: 0.2rem; z-index: 2" -->
            <div id="triggerSticky" ref="trigger">
              <v-container>
                <v-row class="ma-auto card-outlined rounded-lg bg-white">
                  <v-col cols="12" sm="8">
                    <div class="d-flex ga-4">
                      <v-avatar size="100" color="white" :image="data.business.logo" rounded="lg"
                        class="card-outlined pa-2"></v-avatar>
                      <div class="d-flex flex-column">
                        <div class="text-subtitle-1 text-md-h6 two-lines">
                          <b>{{ capitalizeFirstLetter(data.jobName) }}</b>
                        </div>
                        <div class="my-1">
                          <div class="text-body-2 text-decoration-underline text-capitalize">
                            <NuxtLink class="text-grey-darken-3" :to="{
                              name: 'company-name-id',
                              params: {
                                id: data.businessId,
                                name: String(data.business.businessName)
                                  .toLowerCase()
                                  .replaceAll(' ', '-'),
                              },
                              query: {
                                type: 'jobs',
                              },
                            }" @click.stop>{{
                              String(data.business.businessName).toLowerCase()
                            }}</NuxtLink>
                          </div>
                          <div class="d-flex text-disabled text-caption align-center ga-1">
                            <div class="d-flex align-center">
                              <v-icon size="x-small" icon="mdi-map-marker" start></v-icon>
                              <span>{{ data.location }}</span>
                            </div>
                          </div>
                        </div>
                        <v-btn class="text-caption text-none mt-1" rounded="lg" color="primary-accent" flat size="small"
                          :disabled="dateDifference(data.deadline) == 'Closed' || data.jobstatus == 'CLOSED'"
                          @click="checkUser" v-if="!isMobile">
                          <span>Apply</span>
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <v-card flat class="bg-transparent d-flex flex-column h-100 px-0 px-md-4">
                      <div class="d-flex align-center ga-2 justify-end">
                        <div class="w-100 mr-4" v-if="isMobile">
                          <v-btn class="text-caption text-none mt-1" rounded="lg" color="primary-accent" flat
                            :disabled="dateDifference(data.deadline) == 'Closed' || data.jobstatus == 'CLOSED'"
                            size="small" @click="checkUser" block>
                            <span>Apply</span>
                          </v-btn>
                        </div>
                        <v-btn class="card-outlined rounded-lg" :icon="`mdi-bookmark${data.isSaved ? '' : '-outline'
                          }`" color="grey" :title="data.isSaved ? 'Remove from saved' : 'Add to saved'
                            " :loading="loading" size="30" flat @click.stop="toggleWishlist">
                        </v-btn>
                        <div class="">
                          <v-btn rounded="lg" icon="mdi-share" flat title="Share" color="grey" size="30"
                            id="shareJob"></v-btn>
                          <v-menu activator="#shareJob">
                            <v-card class="rounded-lg card-outlined pa-1 mt-1 bg-card elevation-2">
                              <CoreSocials :share="true" />
                            </v-card>
                          </v-menu>
                        </div>
                        <!-- <v-btn
                          rounded="lg"
                          icon="mdi-dots-horizontal"
                          flat
                          title="Options"
                          color="grey"
                          size="30"
                        ></v-btn> -->
                      </div>
                      <div class="mt-4 mt-md-auto text-grey text-caption text-end">
                        <p v-if="data.jobstatus == 'CLOSED'" class="text-link">
                          <v-icon size="x-small" icon="mdi-briefcase-clock" class="pr-1"></v-icon>
                          {{ data.jobstatus }}
                        </p>
                        <ClientJobsDaysRemaining :date="data.deadline" v-else />
                        <p>
                          Posted:
                          {{ dateFormat_Month(data.dateCreated) }}
                        </p>
                        <p>Closing: {{ dateFormat_Month(data.deadline) }}</p>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </div>

            <v-card flat class="bg-transparent rounded-lg">
              <v-container class="pa-0" fluid>
                <v-row class="ma-auto">
                  <v-col cols="12">
                    <div class="d-flex align-center ga-3">
                      <v-btn class="disabled-btn text-caption text-capitalize font-weight-light" color="grey-lighten-4"
                        size="small" flat rounded="lg">
                        <span class="text-primary">{{
                          String(data.jobtype).toLowerCase()
                        }}</span>
                      </v-btn>
                      <v-btn class="disabled-btn text-caption text-capitalize font-weight-light" color="grey-lighten-4"
                        size="small" flat rounded="lg">
                        <span class="text-primary">{{
                          String(data.category.name).toLowerCase()
                        }}</span>
                      </v-btn>
                      <v-btn class="disabled-btn text-caption text-capitalize font-weight-light" color="grey-lighten-4"
                        size="small" flat rounded="lg">
                        <span class="text-primary">{{
                          String(data.category.subcategory).toLowerCase()
                        }}</span>
                      </v-btn>
                    </div>
                  </v-col>
                  <v-col cols="12" class="pt-0">
                    <div class="text-body-2">
                      <b>Skills</b>
                    </div>
                    <v-list class="pa-0" density="compact" lines="false">
                      <v-list-item class="text-caption text-capitalize" v-for="(skill, i) in data.skills" :key="i">
                        <v-icon icon="mdi-chevron-right" start></v-icon>
                        <span>{{ skill }}</span>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
                <v-row class="ma-auto card-outlined rounded-lg job-details">
                  <v-col cols="12" sm="12" class="pa-0">
                    <v-tabs v-model="tab" bg-color="transparent" color="link">
                      <v-tab class="text-caption text-capitalize">Description</v-tab>
                      <v-tab class="text-caption text-capitalize">Requirements</v-tab>
                      <v-tab class="text-caption text-capitalize">Responsabilities</v-tab>
                      <v-tab class="text-caption text-capitalize">About the company</v-tab>
                    </v-tabs>
                    <v-window class="pa-2 pa-md-5 bg-transparent" v-model="tab">
                      <v-window-item :value="0">
                        <div class="text-caption">
                          <p v-html="data.description"></p>
                        </div>
                      </v-window-item>
                      <v-window-item :value="1">
                        <v-list class="pa-0" density="compact" lines="false">
                          <v-list-item class="text-caption text-capitalize"
                            v-for="(requirement, i) in data.requirements" :key="i">
                            <template v-slot:prepend>
                              <v-icon icon="mdi-chevron-right"></v-icon>
                            </template>
                            <span>{{ requirement }}</span>
                          </v-list-item>
                        </v-list>
                      </v-window-item>
                      <v-window-item :value="1">
                        <v-list class="pa-0" density="compact" lines="false">
                          <v-list-item class="text-caption text-capitalize"
                            v-for="(responsability, i) in data.responsibilities" :key="i">
                            <template v-slot:prepend>
                              <v-icon icon="mdi-chevron-right"></v-icon>
                            </template>
                            <span>{{ responsability }}</span>
                          </v-list-item>
                        </v-list>
                      </v-window-item>
                      <v-window-item :value="1">
                        <div class="text-caption">
                          <p v-html="data.business.overview ?? data.business.summary
                            "></p>
                        </div>
                      </v-window-item>
                    </v-window>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="position-sticky" :style="`top: calc(${appBarHeight}px + 3rem)`">
              <ClientJobsMatchingYourSkills />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </CoreMidScreenLayout>

    <v-dialog v-model="apply" persistent :fullscreen="isMobile" :width="isMobile ? '100%' : 600">
      <v-card class="card-outlined" :rounded="isMobile ? 0 : 'lg'">
        <v-card-title class="py-2 px-2 px-md-4 bg-card d-flex align-center text-subtitle-2">
          <b>Apply to {{ data.business.businessName }}</b>
          <v-spacer></v-spacer>
          <v-btn size="small" variant="text" icon="mdi-close" rounded="lg" @click="apply = false" title="Close"></v-btn>
        </v-card-title>
        <v-card-text>
          <ClientJobsApply @close="apply = false" :payload="data" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </ClientOnly>
</template>

<script setup>
const route = useRoute(),
  id = route.params.id,
  { dateFormat_Month, capitalizeFirstLetter, dateDifference } = useHelpers(),
  { isMobile } = useDevice();

import { useAppStore } from "~/store/app";
const appStore = useAppStore(),
  { error, loading, token, currentUser } = storeToRefs(appStore);

import { useSavedItemStore } from "~/store/saved-items";
const { saveItem, deleteSavedItem } = useSavedItemStore();

import { useJobStore } from "~/store/jobs";
const { getJob } = useJobStore(),
  data = ref(await getJob(id));
//

const tab = ref(0);

const apply = ref(false),
  checkUser = () => {
    if (token.value) apply.value = true;
    else {
      const routeRedirect = {
        name: route.name,
        params: route.params,
      };
      appStore.setRedirect(routeRedirect);
      navigateTo({
        name: "auth",
      });
    }
  };

const trigger = ref(null),
  showAlternativeHeader = ref(false),
  triggerVisibility = () => {
    const rect = trigger.value?.getBoundingClientRect();
    showAlternativeHeader.value = rect?.top < Number(-155);
  },
  appBarHeight = ref(64);
onMounted(() => {
  appBarHeight.value = document.getElementById("appBar")?.clientHeight;

  window.addEventListener("scroll", () => triggerVisibility());
});

const links = [
  { title: "Home", route: "/jobs" },
  { title: String(data.value.jobName).toLowerCase() },
];

const toggleWishlist = async () => {
  if (appStore.isLoggeIn) {
    data.value.isSaved
      ? await deleteSavedItem(data.value.id)
      : await saveItem({
        userId: currentUser.value.userId,
        itemId: data.value.id,
        type: "jobs",
      });

    if (!error.value) data.value = await getJob(id);
  } else {
    const routeRedirect = {
      name: "shop-product-name-id",
      params: route.params,
    };
    appStore.setRedirect(routeRedirect);
    navigateTo({
      name: "auth",
    });
  }
};

useSeoMeta({
  title:
    `${capitalizeFirstLetter(data.value.jobName)} | ${data.value.business.businessName
    }` ?? "Job details",
  description: data.value.description,
  ogTitle:
    `${capitalizeFirstLetter(data.value.jobName)} | ${data.value.business.businessName
    }` ?? "Job details",
  ogDescription: data.value.description,
  ogImage: data.value.business.logo,
  twitterTitle:
    `${capitalizeFirstLetter(data.value.jobName)} | ${data.value.business.businessName
    }` ?? "Job details",
  twitterDescription: data.value.description,
  twitterImage: data.value.business.logo,
});
</script>

<style lang="css" scoped>
/*  */
</style>
