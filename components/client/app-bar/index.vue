<template>
  <ClientOnly>
    <!-- ? INFO===> 64 is the default v-app-bar height -->

    <ClientAppBarChat />
    <v-app-bar
      absolute
      class="card-white"
<<<<<<< HEAD
      :height="smallSize ? 110 : 64"
=======
      :height="smAndDown ? 110 : 60"
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
      flat
      id="appBar"
    >
      <CoreMidScreenLayout class="px-1 px-md-1">
        <div class="d-flex align-center">
          <NuxtLink to="/shop">
<<<<<<< HEAD
            <v-img src="/full.png" width="135"></v-img>
=======
            <v-img src="/fulls.png" width="250" style="margin-left: -40px;"></v-img>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
          </NuxtLink>
          <v-container class="pa-0" fluid>
            <v-row class="ma-auto" align="center" justify="end">
              <!-- <v-col xs="4" sm="4" md="4" lg="4" xl="4">
                
                 <ClientAppBarDelivery /> 
              </v-col> -->
              <v-col md="6" lg="7" v-if="!isMobile">
                <ClientAppBarSearch keyword="SHOP" />
              </v-col>

              <v-col xs="8" sm="8" md="4" lg="4">
<<<<<<< HEAD
                <div class="d-flex align-center justify-end ga-4 ga-md-0">
                  <ClientAppBarAccount class="mx-2 mx-md-0" />
                  <div class="d-flex align-center" v-if="!isMobile">
=======
                <div class="d-flex align-center justify-end ga-4">
                  <ClientAppBarAccount class="mx-2 mx-md-0" />
                  <!-- <div class="d-flex align-center" v-if="!isMobile">
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
<<<<<<< HEAD
                  <v-spacer v-if="!isMobile"></v-spacer>
                  <div class="" title="My shopping cart">
                    <v-badge :content="cart.length" color="primary-accent">
                      <Icon
                        name="solar:cart-large-2-linear"
                        class="mr-1 cursor-pointer text-primary-accent"
                        size="1.6rem"
=======
                  <v-spacer v-if="!isMobile"></v-spacer> -->
                  <div class="mt-1" title="My shopping cart">
                    <v-badge :content="cart.length" color="primary-accent">
                      <Icon
                        name="solar:cart-large-2-linear"
                        class="mr-1 cursor-pointer text-primary-dark"
                        :size="smallSize ? '1.5rem' : '1.2rem'"
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                        @click="openCart"
                      />
                    </v-badge>
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
              @click="toggleStatus()"
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
  </ClientOnly>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();
const route = useRoute();
const { isMobile } = useDevice();

const smallSize = computed(() => {
  return isMobile || smAndDown;
});

import { useAppStore } from "~/store/app";
const app = useAppStore();
const { loading } = storeToRefs(app);

import { useCategoryStore } from "~/store/categories";
const { toggleStatus } = useCategoryStore();

import { useCartStore } from "~/store/cart";
const cartStore = useCartStore();
const { cart, opened } = storeToRefs(cartStore);
const openCart = () => {
  cart.value.length == 0
    ? navigateTo({ name: "shop-cart" })
    : cartStore.toggleCartStatus();
};

const links = [
  { name: "Open a store", link: "create-business-account" },
  { name: "Find jobs", link: "jobs" },
];

const handleLogout = () => {
  if (process.client) localStorage.clear();

  if (route.name === "shop-checkout")
    navigateTo({
      name: "shop",
    });

  window.location.reload();
};

const handleRedirect = () => {
  const routeRedirect = {
    name: route.name,
    params: route.params,
  };
  app.setRedirect(routeRedirect);
  navigateTo({
    name: "auth",
  });
};
</script>

<style lang="css" scoped>
a {
  color: rgba(var(--v-theme-primary-accent));
  font-weight: 600;
}
</style>
