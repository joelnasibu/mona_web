<template>
  <div
    class="ma-auto bg-primary-accent rounded overflow-hidden position-relative"
    style="height: 50px"
  >
    <v-card flat width="80%" class="bg-primary h-100 clip-path"> </v-card>
    <NuxtLink
      :to="{
        name: 'jobs-search',
      }"
      class="text-subtitle-1 text-white"
      variant="text"
      flat
    >
      <div
        class="position-absolute ma-auto h-100 d-flex align-center justify-center"
        style="inset: 0"
      >
        <span>Explore all jobs</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.clip-path {
  clip-path: polygon(0 0, 89% 0, 100% 100%, 0% 100%);
}
</style>
