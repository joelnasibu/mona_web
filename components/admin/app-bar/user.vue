<template>
  <div>

    <v-menu activator="parent" v-model="menu" transition="slide-y-transition" :close-on-content-click="false"
      :open-on-hover="!sm">
      <template #activator="{ props }">

        <v-avatar class="user-avatar" @click="menu = !menu" :image="currentUser.picture ?? profileImage" v-bind="props"
          color="background" size="30">
        </v-avatar>
      </template>

      <v-list density="compact" class="pa-0 card-outlined rounded-lg mt-1">
        <v-list-item class="text-caption pa-1">
          <template v-slot:prepend>
            <div class="px-3">
              <v-avatar :image="currentUser.picture ?? profileImage" color="background" size="40"
                id="user-menu"></v-avatar>
            </div>
          </template>
          <div class="d-flex flex-column pr-5">
            <span class="text-uppercase">{{ getFullnames(currentUser) }}</span>
            <span class="text-disabled mt-n1 text-capitalize">{{
              String(currentUser.role).toLowerCase()
            }}</span>
          </div>
          <template v-slot:append>
            <v-btn title="My profile" active size="x-small" rounded="sm" color="grey-darken-3" variant="text"
              icon="mdi-cog" class="rounded-lg"
              :to="{ name: 'admin-users-id', params: { id: currentUser.id } }"></v-btn>
          </template>
        </v-list-item>
        <v-divider></v-divider>
        <div v-if="sm">
          <div class="" v-for="{ name, route, children, icon, external } in menus" :key="route">
            <div class="" v-if="children">
              <v-list-group :value="name">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" :prepend-icon="icon" :title="name"></v-list-item>
                </template>
                <div class="" v-for="{ name, route } in children" :key="route">
                  <v-list-item :to="{ name: route }" :target="external ? '_blank' : '_self'">
                    <!-- <NuxtLink> -->
                    <span>{{ name }}</span>
                    <!-- </NuxtLink> -->
                  </v-list-item>
                  <v-divider></v-divider>
                </div>
              </v-list-group>
            </div>
            <v-list-item :to="{ name: route }" v-else>
              <span>{{ name }}</span>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </div>


        <v-list-item class="text-caption px-3 py-1 cursor-pointer" @click="handleLogout">
          <template v-slot:prepend>
            <v-icon>mdi-logout</v-icon>
          </template>
          <span class="">Logout</span>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
const props = defineProps({
  menus: Object,
  sm: Boolean
})
const { getFullnames } = useHelpers();

import { useAppStore } from "~/store/app";
const { profileImage, currentUser, error } = storeToRefs(useAppStore());
const menu = ref(false)

const handleLogout = async () => {
  // await logout();
  // console.log(error.value)
  if (process.client) localStorage.clear();
  // if (!error.value)
  navigateTo({
    name: "auth",
  });
  // // if (route.name === "admin-users-id")
  // window.location.reload();
};
</script>

<style lang="css" scoped></style>
