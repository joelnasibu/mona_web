<template>
  <ClientOnly>
    <v-footer app absolute color="white">
      <v-container class="pa-0 text-caption" fluid>
        <v-row>
          <v-col cols="12" sm="6">
            <div class="text-center text-md-start">
              <span
                >&copy; {{ new Date().getFullYear() }} - Smartsell, All rights
                reserved</span
              >
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="text-center text-md-end">
              <span
                >Powered by
                <a
                  href="https://mijinitech.com"
                  target="_blank"
                  class="text-link"
                  >Mijinitech</a
                ></span
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </ClientOnly>
</template>

<script setup></script>

<style lang="css" scoped></style>
