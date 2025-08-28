<template>
  <ClientOnly>
    <v-app-bar app color="color" density="compact" flat id="profileAppBar">
      <CoreMidScreenLayout>
        <div class="d-flex align-center justify-space-between px-2 px-md-0">
          <NuxtLink to="/">
            <v-img src="/full.png" width="135"></v-img>
          </NuxtLink>
          <!-- <v-spacer></v-spacer> -->
          <div class="d-flex align-center ga-5" v-if="!isMobileOrTablet">
            <NuxtLink
              class="text-caption"
              v-for="({ title, route }, i) in links"
              :key="i"
              :to="{ name: route }"
              :title="title"
              :class="{ 'text-link': i === 1 && $route.name.includes(route) }"
            >
              <span>{{ title }}</span>
            </NuxtLink>
          </div>
          <v-btn icon="mdi-logout" title="logout" @click="handleLogout"></v-btn>
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

import { useAppStore } from "~/store/app";
const { currentUser, loading } = storeToRefs(useAppStore());

import { useAuthStore } from "~/store/auth";
const { logout } = useAuthStore();
const handleLogout = async () => {
  await logout();
  navigateTo({
    name: "index",
  });
};

const links = [
  { title: "My profile", route: "profile" },
  { title: "My data", route: "profile-data" },
  { title: "Jobs", route: "jobs" },
  { title: "Shop", route: "shop" },
];
</script>

<style lang="css" scoped>
a {
  color: currentColor;
}
.router-link-active.router-link-exact-active {
  color: rgba(var(--v-theme-link));
  transition: all 0.2s ease-in-out;
}
</style>
