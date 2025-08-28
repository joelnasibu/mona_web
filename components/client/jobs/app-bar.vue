<template>
  <!-- ? INFO===> 64 is the default v-app-bar height -->
  <ClientOnly>
    <v-app-bar
      absolute
      class="card-white"
      :height="isMobile ? 110 : 64"
      flat
      id="appBar"
    >
      <!-- scroll-behavior="hide" -->
      <CoreMidScreenLayout class="px-1 px-md-3">
        <div class="d-flex align-center">
          <NuxtLink to="/jobs">
            <v-img src="/full.png" width="135"></v-img>
          </NuxtLink>
          <v-container class="pa-0" fluid>
            <v-row dense class="ma-auto" align="center" justify="end">
              <!--  <v-col md="4" lg="1" xl="1" xs="4" sm="4">
                 <ClientAppBarDelivery /> 
              </v-col>-->
              <v-col md="6" lg="7" v-if="!isMobile">
                <ClientAppBarSearch keyword="JOB" />
              </v-col>
              <v-col xs="8" sm="8" md="4" lg="4">
                <div class="d-flex align-center ga-4 ga-md-2">
                  <ClientAppBarAccount class="mx-3 mx-md-0" />
                  <div class="d-flex align-center" v-if="!isMobile">
                    <div class="d-flex align-center text-caption px-3 ga-5">
                      <NuxtLink
                        v-for="{ name, link } in links"
                        :to="{ name: link }"
                        :key="link"
                        class="text-decoration-none"
                      >
                        <span>{{ name }}</span>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="d-flex align-center ga-2" v-if="isMobile">
          <div class="px-3">
            <v-app-bar-nav-icon
              size="25"
              color="primary-accent"
            ></v-app-bar-nav-icon>
          </div>
          <ClientAppBarSearch />
        </div>
      </CoreMidScreenLayout>
      <!-- <v-progress-linear
        indeterminate
        color="link"
        absolute
        height="3"
        :active="loading"
      ></v-progress-linear> -->
    </v-app-bar>
    <ClientAppBarCart />
    <ClientJobsSearchDrawer />
  </ClientOnly>
</template>

<script setup>
const { isMobile } = useDevice();

import { useAppStore } from "~/store/app";
const app = useAppStore();
const { loading } = storeToRefs(app);

import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();
const { cart, opened } = storeToRefs(cartStore);
const openCart = () => {
  cart.value.length == 0
    ? navigateTo({ name: "shop-cart" })
    : cartStore.toggleCartStatus();
};

const links = [
  { name: "I am a recruter", link: "create-business-account" },
  { name: "Shop", link: "shop" },
];
</script>

<style lang="css" scoped>
a {
  color: currentColor;
}
</style>
