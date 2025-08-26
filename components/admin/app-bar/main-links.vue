<template>
  <div class="d-flex align-center ga-5 text-caption">
    <div class="d-flex align-center" v-for="{ name, route, children, icon, external } in links" :key="route">
      <NuxtLink v-if="!children" :to="{ name: route }">
        <span>{{ name }}</span>
      </NuxtLink>
      <div class="" v-if="children">
        <div class="d-flex align-center" id="link">
          <v-icon :icon="icon" v-if="icon" start color="grey-darken-2" size="x-small"></v-icon>
          <NuxtLink :to="{ name: route }" :target="external ? '_blank' : '_self'">
            <span>{{ name }}</span>
          </NuxtLink>
        </div>
        <v-menu activator="#link" open-on-hover>
          <v-list class="pa-0 mt-1 rounded-lg card-outlined bg-white" min-width="150" density="compact" lines="false">
            <div class="" v-for="{ name, route } in children" :key="route">
              <v-list-item :to="{ name: route }" target="_blank">{{
                name
              }}</v-list-item>
              <v-divider></v-divider>
            </div>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/app";
const { currentUser } = storeToRefs(useAppStore());

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

const links = computed(() => {
  return menus.filter((m) =>
    m.accessLevel.includes(currentUser.value?.accessLevel)
  );
});
</script>

<style lang="css" scoped>
a {
  color: #333;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.router-link-active.router-link-exact-active {
  /* background: rgba(var(--v-theme-primary-dark)); */
  color: rgba(var(--v-theme-link));
  text-decoration: underline;
  font-weight: 600;
  /* padding-inline: 10px; */
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}
</style>
