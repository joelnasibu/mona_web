<template>
  <div>
    <v-list density="compact" class="hide-scrollbar rounded-lg py-0 mt-1" nav>
      <div
        class="text-caption"
        v-for="({ title, link, icon }, index) in links"
        :title="title"
        :key="index"
      >
        <v-list-item
          :to="{ name: link }"
          :value="link"
          :active="$route.name === link"
          color="primary"
          class="rounded-lg py-0 mt-1"
          density="compact"
        >
          <template v-slot:prepend>
            <v-icon :icon="icon" :title="title"></v-icon>
          </template>
          <span>{{ title }}</span>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    title: "Markets",
    link: "admin-config-markets",
    icon: "mdi-storefront-outline",
  },
  {
    title: "Payment Methods",
    link: "admin-config-payment-methods",
    icon: "mdi-credit-card-outline",
  },
  {
    title: "Product Grades",
    link: "admin-config-product-grades",
    icon: "mdi-tag-outline",
  },
  {
    title: "Roles",
    link: "admin-config-roles",
    icon: "mdi-key-outline",
  },
];
</script>

<style scoped></style>
