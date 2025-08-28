<template>
  <ClientOnly>
    <v-container class="pa-0 system-bg" fluid style="height: 100dvh">
      <v-row class="ma-auto h-100">
        <v-col>
          <div class="d-flex flex-column h-100">
            <div class="my-auto w-100 d-flex flex-column align-center justify-center">
              <div class="mx-auto">
                <v-img src="/logos/access-no-tag.png" width="140"></v-img>
              </div>
              <div class="pt-0 w-100">
                <NuxtPage />
              </div>
            </div>
            <div class="mt-auto">
              <v-container>
                <v-row class="justify-center">
                  <v-col sm="12" md="9" lg="7" xl="5">
                    <v-divider class="mb-4"></v-divider>
                    <div class="d-flex justify-center ga-3 ga-md-10 text-caption">
                      <NuxtLink :to="{ name: redirect?.name, params: redirect.params }" class="text-black"
                        v-if="redirect">
                        <span>Return</span>
                      </NuxtLink>
                      <div class="" v-for="{ title, route } in links" :key="title">
                        <NuxtLink :to="route" class="text-black">
                          <span>{{ title }}</span>
                        </NuxtLink>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </ClientOnly>
</template>

<script setup>
definePageMeta({
  layout: false,
});

import { useAppStore } from "~/store/app";
const { redirect } = storeToRefs(useAppStore());

const links = [
  { title: "Home", route: "/" },
  { title: "Shop", route: "/shop" },
  { title: "Jobs", route: "/jobs" },
];
</script>

<style lang="css" scoped></style>
