<template>
  <div class="text-caption cursor-text">
    <v-breadcrumbs :items="links" density="compact">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right" color="grey-darken-2"></v-icon>
      </template>
      <template v-slot:title="{ item }">
        <NuxtLink class="text-capitalize" :to="item.route">
          <span>{{ item.title }}</span>
        </NuxtLink>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script setup>
defineProps({
  links: Array,
});
</script>

<style lang="css" scoped>
a {
  color: currentColor;
}
a:hover {
  text-decoration: underline;
}
</style>
