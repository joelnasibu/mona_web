<template>
  <v-container fluid class="pa-0">
    <v-row
      class="ma-auto bg-primary-accent rounded overflow-hidden"
      align="center"
    >
      <v-col cols="12" sm="8" class="bg-primary clip-path">
        <div class="text-subtitle-1">
          <b>Super discount on more than 100 USD</b>
          <div class="text-caption">
            <span>lorem </span>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="4" class="text-start text-md-end">
        <div class="pr-0 pr-md-5">
          <v-btn class="text-caption" flat size="small">
            <span>Shop now</span>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="css" scoped>
.clip-path {
  clip-path: polygon(0 0, 89% 0, 100% 100%, 0% 100%);
}
</style>
