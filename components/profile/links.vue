<template>
  <div class="bg-card py-3">
    <CoreMidScreenLayout>
      <div class="d-flex align-center ga-5">
        <NuxtLink
          class="text-caption"
          v-for="({ title, route }, i) in links"
          :to="{ name: route }"
          :title="title"
          :class="{
            'router-link-exact-active':
              i === 0 && $route.name.includes(`${route}-index`),
          }"
        >
          <span>{{ title }}</span>
        </NuxtLink>
      </div>
    </CoreMidScreenLayout>
  </div>
</template>

<script setup>
const links = [
  { title: "My profiles", route: "profile" },
  //   { title: "My data", route: "profile-data" },
  {
    title: "Orders",
    route: "profile-orders",
    icon: "mdi-basket-check-outline",
  },
  {
    title: "Wishlist",
    route: "profile-wishlist",
    icon: "mdi-basket-plus-outline",
  },
  {
    title: "Application draft",
    route: "profile-application-draft",
    icon: "mdi-file-document-refresh-outline",
  },
  {
    title: "Applied jobs",
    route: "profile-applied-jobs",
    icon: "mdi-briefcase-check-outline",
  },
  {
    title: "Saved jobs",
    route: "profile-saved-jobs",
    icon: "mdi-briefcase-plus-outline",
  },
];
</script>

<style lang="css" scoped>
/* a {
} */
.router-link-active.router-link-exact-active {
  color: rgba(var(--v-theme-primary-accent));
  font-weight: 700;
  transition: all 0.2s ease-in-out;
}
a:not(.router-link-exact-active) {
  color: currentColor;
  font-weight: normal;
  transition: all 0.2s ease-in-out;
}
</style>
