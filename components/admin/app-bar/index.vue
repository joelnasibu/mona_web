<template>
  <ClientOnly>
    <AdminAppBarDrawer :drawer="drawer" />

    <v-app-bar density="compact" color="white" flat>
      <div
        v-if="smallSize"
        class="d-flex align-center justify-space-between w-100 h-100"
      >
        <img :src="`/full.png`" class="px-3 py-1" width="60" />

        <div class="d-flex align-center ga-2">
          <AdminAppBarUser class="px-2" :menus="menus" :sm="smallSize" />
        </div>
      </div>

      <div class="w-100 d-flex align-center h-100 px-3 ga-7" v-else>
        <v-app-bar-nav-icon
          density="compact"
          title="Toggle drawer"
          @click="drawer = !drawer"
          color="primary-dark"
        ></v-app-bar-nav-icon>

        <AdminAppBarMainLinks :menus="menus" />
        <v-spacer></v-spacer>
        <div class="d-flex align-center ga-2">
          <v-btn
            v-for="{ title, icon, value } in additionalMenus"
            :key="title"
            rounded="lg"
            icon
            size="small"
            :title="title"
            @click="setBehaviour(value)"
          >
            <v-badge
              color="link"
              content="4"
              v-if="value === 'notification'"
              location="end top"
              bordered
              class="text-caption"
              style="font-size: 6px !important"
            >
              <v-icon :icon="`mdi-${icon}`" size="20"></v-icon>
            </v-badge>
            <v-icon v-else :icon="`mdi-${icon}`" size="20"></v-icon>
          </v-btn>
        </div>
        <AdminAppBarUser />

        <!-- </div> -->
        <!-- <v-progress-linear
        indeterminate
        color="link"
        absolute
        height="3"
        :active="loading"
      ></v-progress-linear> -->
      </div>
    </v-app-bar>

    <AdminDetailsDrawer />
  </ClientOnly>
</template>

<script setup>
const route = useRoute();
import { useDisplay } from "vuetify";
import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { currentUser, loading } = storeToRefs(appStore);
const { isMobile } = useDevice();
const { smAndDown } = useDisplay();
const menu = ref(false);
const smallSize = computed(() => {
  return isMobile || smAndDown.value;
});

const drawer = ref(true);

const menus = [
  // { name: "Dashboard", route: "admin", accessLevel: [1, 2, 3] },
  { name: "Businesses", route: "admin-businesses", accessLevel: [1, 2, 3] },
  { name: "Products", route: "admin-products", accessLevel: [1, 2, 3] },
  { name: "Jobs", route: "admin-jobs", accessLevel: [1, 2, 3] },
  { name: "Users", route: "admin-users", accessLevel: [3] },
  {
    name: "Website",
    icon: "mdi-open-in-new",
    route: "index",
    accessLevel: [1, 2, 3],
    children: [
      { name: "Home", route: "index" },
      { name: "Shop", route: "shop" },
      { name: "Jobs", route: "jobs" },
    ],
    external: true,
  },
];

const additionalMenus = [
  // { title: "Search", icon: "magnify", value: "search" },
  // { title: "Language", icon: "translate", value: "language" },
  { title: "Toggle fullscreen", icon: "arrow-expand", value: "screen" },
  // { title: "Notifications", icon: "bell-outline", value: "notification" },
];

const setBehaviour = (val) => {
  switch (val) {
    case "screen":
      if (process.client) {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      break;
  }
};
</script>

<style scoped lang="css">
.icon-1,
.icon-2,
.icon-3 {
  width: 20px;
  height: 2px;
  background: #570c4d !important;
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
  border-radius: 5px;
}

.icon-1 {
  transform: translateY(-5px);
  animation-delay: 200ms;
}

.icon-2 {
  animation-delay: 250ms;
  width: 25px;
}

.icon-3 {
  animation-delay: 250ms;
  transform: translateY(5px);
}

.hamburger-icon {
  height: 60px;
  width: 35px;
  cursor: pointer;
  /* border-radius: 50%; */
  transition: all 0.2s ease-in-out;
  background: transparent;
  position: relative !important;
}

.icon-1.a {
  transform: rotate(40deg);
}

.icon-2.b {
  transform: rotate(-40deg);
}

.icon-3.c {
  /* visibility: hidden; */
  transition: all 0.4s ease-in-out;
  opacity: 0;
}
</style>
