<template>
  <v-menu open-on-hover eager="">
    <template v-slot:activator="{ props }">
      <div
        class="cursor-pointer text-caption d-flex align-center text-primary-dark"
        style="font-weight: 600"
        v-bind="props"
      >
        <v-avatar
          :image="currentUser.picture ?? profileImage"
          color="white"
          size="25"
          v-if="isLoggeIn"
        ></v-avatar>
        <Icon
          v-else
          name="line-md:account"
          :size="isMobile ? '1.5rem' : '1.2rem'"
        />
        <div class="d-flex align-center" v-if="!isMobile">
          <span class="px-2">Account</span>
          <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
        </div>
      </div>
    </template>
    <v-list
      density="compact"
      class="mt-4 elevation-3 card-outlined pa-0 rounded-lg"
      lines="false"
      min-width="200px"
    >
      <div class="" v-if="isLoggeIn">
        <v-list-item class="pt-3">
          <template v-slot:prepend>
            <v-avatar
              :image="currentUser.picture ?? profileImage"
              color="white"
              size="40"
            ></v-avatar>
          </template>
          <div class="text-caption d-flex flex-column">
            <span>{{ userNames }}</span>
            <span class="mt-n1 text-disabled">{{ currentUser.email }}</span>
          </div>
        </v-list-item>
        <div class="" v-if="isAdmin">
          <v-list-item :to="{ name: 'admin' }" target="_blank">
            <template v-slot:prepend>
              <Icon class="mr-3" size="15px" :name="`mdi:open-in-new`" />
            </template>
            <span>Admin portal</span>
          </v-list-item>
        </div>
        <v-divider class="my-2"></v-divider>
        <v-list-item
          class="text-caption"
          v-for="({ title, icon, route }, i) in filteredLinks"
          :key="i"
          :to="{ name: route }"
        >
          <template v-slot:prepend>
            <Icon class="mr-3" size="15px" :name="`${icon}`" />
          </template>
          <span>{{ title }}</span>
        </v-list-item>
      </div>
      <v-list-item class="px-2 text-caption pt-3" v-else>
        <v-btn
          class="text-caption"
          block
          color="primary"
          flat
          size="small"
          @click="handleRedirect"
        >
          <span>Login | Register</span>
        </v-btn>
      </v-list-item>

      <div class="">
        <v-list-item class="pa-0" :to="{ name: 'create-business-account' }">
          <v-divider></v-divider>
          <div class="py-1 text-caption text-center">
            <span class="text-decoration-underline text-center"
              >Create business account</span
            >
          </div>
        </v-list-item>
        <v-list-item class="pa-0" @click="handleLogout" v-if="isLoggeIn">
          <v-divider></v-divider>
          <div class="py-1 text-caption text-center">
            <span class="text-decoration-underline text-center">Log out</span>
          </div>
        </v-list-item>
      </div>
    </v-list>
  </v-menu>
</template>

<script setup>
const props = defineProps({
  all: Boolean,
});

const { isMobile } = useDevice();
const route = useRoute();
const emit = defineEmits("logout", "redirect");
import { useAppStore } from "~/store/app";
const app = useAppStore();
const { currentUser, isAdmin, isLoggeIn, profileImage } = storeToRefs(app);

const links = [
  {
    title: "My account",
    icon: "line-md:account",
    route: "profile",
    shop: true,
    job: true,
  },
  {
    title: "Inbox",
    icon: "line-md:chat",
    route: "inbox",
    shop: true,
  },
  {
    title: "My Wishlist",
    icon: "mdi:basket-plus-outline",
    route: "profile-wishlist",
    shop: true,
  },
  {
    title: "My Orders",
    icon: "mdi:basket-check-outline",
    route: "profile-orders",
    shop: true,
  },
  {
    title: "My job applications",
    icon: "mdi:briefcase-check-outline",
    route: "profile-applied-jobs",
    job: true,
  },
  {
    title: "My saved jobs",
    icon: "mdi:briefcase-plus-outline",
    route: "profile-saved-jobs",
    job: true,
  },
];

const filteredLinks = computed(() => {
  return links.filter((link) => {
    return route.fullPath.includes("/shop")
      ? link.shop
      : route.fullPath.includes("/job")
      ? link.job
      : link;
  });
});

const userNames = computed(() => {
  return currentUser.value?.firstname + " " + currentUser.value?.lastname;
});

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

<style lang="css" scoped></style>
