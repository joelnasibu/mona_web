<template>
  <v-container class="pa-0" fluid>
    <v-row
      class="ma-auto"
      :class="{ 'ma-0': isMobile }"
      justify="center"
      align="center"
      :no-gutters="isMobile"
    >
      <v-col xs="12" sm="12" md="12" :lg="lg" :xl="xl" class="pa-0">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({
  lg: {
    type: Number,
    default: 11,
  },
  xl: {
    type: Number,
    default: 10,
  },
});

const { isMobile } = useDevice();
</script>

<style lang="css" scoped></style>
