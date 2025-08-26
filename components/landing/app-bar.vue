<template>
  <ClientOnly>
    <v-app-bar app color="card" flat id="landingAppBar">
      <CoreMidScreenLayout>
        <div class="d-flex align-center px-2 px-md-0">
          <NuxtLink to="/">
            <v-img src="/full.png" :width="140"></v-img>
          </NuxtLink>
          <v-spacer></v-spacer>
          <div class="d-flex align-center ga-5" v-if="!isMobileOrTablet">
            <NuxtLink
              class="text-caption"
              v-for="{ title, full, icon, route, id } in links"
              :to="route ? { name: route } : `/#${id}`"
              :key="id"
              :title="full ?? title"
            >
              <span>{{ title }}</span>
              <v-icon end v-if="icon" :icon="icon" size="small"></v-icon>
            </NuxtLink>
            <ClientAppBarAccount
              :all="true"
              @logout="handleLogout"
              @redirect="handleRedirect"
            />
          </div>
          <LandingMenus
            :menus="links"
            v-if="isMobileOrTablet"
            @logout="handleLogout"
            @redirect="handleRedirect"
          />
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
  </ClientOnly>
</template>

<script setup>
const { isMobile, isMobileOrTablet } = useDevice();
const route = useRoute();
import { useAppStore } from "~/store/app";
const app = useAppStore();
const { currentUser, isAdmin, isLoggeIn, profileImage, loading } =
  storeToRefs(app);

const links = [
  { title: "Accueil", icon: "", id: "home" },
  // { title: "À propos", icon: "", id: "about" },
  { title: "Emplois", icon: "", id: "jobs" },
  { title: "Boutiques", icon: "", id: "shop" },
  // { title: "Assistance", icon: "mdi-help-circle-outline", route: "help" },
];

const handleLogout = async () => {
  // await logout();
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
  color: currentColor;
}
</style>
