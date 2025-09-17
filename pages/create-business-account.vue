<template>
  <v-container class="pa-0 system-bg" fluid style="height: 100vh">
    <v-row no-gutters class="h-100">
      <v-col cols="12" sm="4" class="d-none d-md-flex position-relative">
        <v-card
          height="100%"
          class="position-sticky bg-transparent w-100 pa-0"
          style="top: 0"
          flat
          rounded="0"
        >
          <v-carousel
            hide-delimiters
            continuous
            cycle
            interval="10000"
            height="100%"
            :touch="false"
            :show-arrows="false"
          >
            <v-carousel-item
              height="100%"
              v-for="img in shuffledImages"
              :key="img"
            >
              <div class="w-100 h-100">
                <v-img :src="img" :lazy-src="img" height="100%" cover></v-img>
              </div>
            </v-carousel-item>
          </v-carousel>
          <div class="w-100 h-100 overlay position-absolute d-flex flex-column">
            <div class="mt-auto pa-3">
              <v-img
                src="/full.png"
                lazy-src="/logos/access-light-no-tag.png"
                width="140"
              ></v-img>
              <div class="text-caption mt-4 text-white">
                <span
                  >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quae, aperiam repellat quisquam repellendus, molestiae culpa
                  veritatis ex esse blanditiis necessitatibus libero nam omnis
                  deserunt magni ipsum facere. Recusandae, eum! Est!</span
                >
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" class="h-100">
        <div class="w-100 h-100 d-flex flex-column justify-center pa-1 pa-md-5">
          <div class="mt-auto">
            <ClientShopBusinessCreate />
          </div>

          <div class="mt-auto">
            <v-container>
              <v-row class="justify-center">
                <v-col cols="12">
                  <v-divider class="mb-4"></v-divider>
                  <div class="d-flex justify-center ga-3 ga-md-10 text-caption">
                    <NuxtLink
                      :to="{ name: redirect?.name, params: redirect.params }"
                      class="text-black"
                      v-if="redirect"
                    >
                      <span>Return</span>
                    </NuxtLink>
                    <div
                      class=""
                      v-for="{ title, route } in links"
                      :key="route"
                    >
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
</template>

<script setup>
definePageMeta({
  layout: false,
});

const { isMobile } = useDevice();

const images = [
    "https://www.abetterinterview.com/wp-content/uploads/2013/02/Job-Search.jpg",
    "https://shiptheory.com/blog/content/images/2020/06/ecommercestock.jpeg",
    "https://images.theconversation.com/files/239168/original/file-20181003-52688-17cspsx.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    "https://www.abrjobs.com/wp-content/uploads/2021/06/searching-for-a-new-job-picjumbo-com-scaled.jpg",
    "https://blog.hubspot.com/hubfs/ecommerce-10.jpg",
    "https://www.inspiringinterns.com/blog/wp-content/uploads/2015/02/hire-me.jpg",
    "https://futurewithtech.com/wp-content/uploads/2021/06/eCommerce-Images-1024x768.jpg",
    "https://wallpaperaccess.com/full/2593068.jpg",
    "https://www.allbusiness.com/media-library/online-shopping-concept.jpg?id=32093196",
  ],
  shuffledImages = computed(() => {
    return images
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  });

import { useAppStore } from "~/store/app";
const { redirect } = storeToRefs(useAppStore()),
  links = [
    { title: "Home", route: "/" },
    { title: "Shop", route: "/shop" },
    { title: "Jobs", route: "/jobs" },
  ];

const seo = {
  title: "Create a business account",
  description: "Business account description",
};
useSeoMeta({
  title: seo.title,
  description: seo.description,
  ogTitle: seo.title,
  ogDescription: seo.description,
  twitterTitle: seo.title,
  twitterDescription: seo.description,
});
</script>

<style lang="css" scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
}
</style>
