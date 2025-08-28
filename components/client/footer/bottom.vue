<template>
  <v-container class="pa-0" fluid>
    <v-row align="center" justify="space-between" class="ma-auto">
      <v-col cols="12" sm="4">
        <div class="d-flex text-caption ga-4">
          <span
            >Product of
            <a href="https://mijinitech.com" target="_blank" class="text-link"
              >Cemadef</a
            ></span
          >
          <span
            >Powered by
            <a href="https://mijinitech.com" target="_blank" class="text-link"
              >Mijinitech</a
            ></span
          >
        </div>
      </v-col>
      <v-col cols="12" sm="4">
        <!-- <div class="d-flex justify-center" style="gap: 15px">
          <ActionsLangSwitcher />
          <ActionsCurrency />
          <ActionsCountry />
        </div> -->
      </v-col>
      <v-col cols="12" sm="4">
        <div
          class="d-flex justify-center justify-md-end text-caption links"
          style="gap: 20px"
        >
          <div class="link" v-for="({ title, route }, i) in links" :key="i">
            <NuxtLink :to="{ name: route }">
              <span>{{ title }}</span>
            </NuxtLink>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const links = [
  { title: "Privacy", route: "privacy-policy" },
  // { title: "Term", route: "privacy-policy" },
  // { title: "Sitemap" }
];
</script>

<style lang="css" scoped>
.link {
  opacity: 0.7;
  cursor: pointer;
}
.link:hover {
  opacity: 1;
}
a {
  color: currentColor;
}
</style>
