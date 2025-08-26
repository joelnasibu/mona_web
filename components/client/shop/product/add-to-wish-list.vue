<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-icon
      v-bind="props"
      :icon="`mdi-heart${isHovering ? '' : '-outline'}`"
      size="21"
      title="Add to wishlist"
      class="pr-3"
    ></v-icon>
  </v-hover>
</template>

<script setup></script>

<style lang="scss" scoped></style>
