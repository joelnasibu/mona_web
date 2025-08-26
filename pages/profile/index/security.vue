<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10">
        <div class="text-subtitle-1 pb-4">
          <b>Password settings</b>
        </div>
        <div>
          <ChangePassword :dialog="false" />
        </div>
        <div class="text-subtitle-1 pt-15 pb-2">
          <b>Account settings</b>
        </div>
        <v-btn
          class="text-caption rounded-lg"
          variant="text"
          prepend-icon="mdi-delete-outline"
        >
          <span>Deactivate my account</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="css" scoped></style>
