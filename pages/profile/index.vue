<template>
  <v-container>
    <v-row justify="space-between" class="py-8 pb-10 mb-8">
      <v-col cols="12" sm="3">
        <div class="text-h5 px-2">
          <b>Profile Settings</b>
        </div>
        <v-list class="rounded-lg pa-0 mt-5" density="compact">
          <div
            class="text-subtitle-2"
            v-for="{ title, icon, children, route } in menus"
          >
            <v-list-item
              v-if="!children"
              :to="{ name: route }"
              :active="$route.name === route"
              color="primary"
            >
              <template v-slot:prepend>
                <v-icon :icon="icon"></v-icon>
              </template>
              <span>{{ title }}</span>
            </v-list-item>
            <v-list-group :value="title" v-else color="primary-accent">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props">
                  <template v-slot:prepend>
                    <v-icon :icon="icon"></v-icon>
                  </template>
                  <span>{{ title }}</span>
                </v-list-item>
              </template>

              <v-list-item
                v-for="({ title, route }, i) in children"
                :value="title"
                class="text-caption"
                style="font-size: 0.78rem !important"
                color="primary"
                :to="{ name: route }"
                :active="$route.name === route"
              >
                <span>{{ title }}</span>
              </v-list-item>
            </v-list-group>
          </div>
        </v-list>
      </v-col>
      <v-col cols="12" sm="8">
        <NuxtPage />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { isMobile } = useDevice(),
  { getFullnames, dateFormat_Month } = useHelpers();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { error, loading, token, currentUser, profileImage } =
  storeToRefs(appStore);

import { useAuthStore } from "~/store/auth";
const { updateUser } = useAuthStore();

const isProfileCompleted = computed(() => {
  return currentUser.value.account && currentUser.value.applicant;
});

const passwordTab = ref(0);

const tab = ref(0);
const view = ref(true);

const handleUpdate = async () => {
  await updateUser(currentUser.value);
  if (!error.value)
    setTimeout(() => {
      view.value = true;
    }, 2000);
};

const menus = [
  {
    title: "Main Profile",
    icon: "mdi-account-circle-outline",
    route: "profile-index-main",
    // children: [
    //   { title: "Main profile", route: "profile-index-main" },
    //   { title: "My Addresses", route: "" },
    // ],
  },
  {
    title: "Accounts",
    icon: "mdi-account-cog-outline",
    children: [
      { title: "My shop profile", route: "profile-index-shop" },
      { title: "My job profile", route: "profile-index-job" },
      { title: "Account status", route: "profile-index-status" },
    ],
  },
  {
    title: "Privacy & Security",
    route: "profile-index-security",
    icon: "mdi-lock-outline",
  },
];

useHead({
  title: "My profile",
});
</script>

<style lang="css" scoped></style>
