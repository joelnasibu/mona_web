<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
</script>

<template>
  <v-app-bar app color="white" flat class="px-6 position-relative">
    <!-- Logo -->
    <v-img
      src="/full.png"
      alt="Logo"
      max-width="120"
      contain
    />

    <!-- Centered Search Bar -->
    <div class="position-absolute" style="left: 50%; transform: translateX(-50%); width: 50%; max-width: 700px;">
      <v-text-field
        v-model="searchQuery"
        placeholder="Search markets or products..."
        variant="outlined"
        density="comfortable"
        hide-details
        clearable
        prepend-inner-icon="mdi-magnify"
        class="w-100"
      />
    </div>

    <!-- Buttons on the right -->
    <div class="d-flex align-center ml-auto">
      <!-- Find Button with visible icon -->
      <v-btn
        color="orange"
        class="mr-2"
        title="Find Market/Product"
      >
        <v-icon color="orange" size="28">mdi-map-search-outline</v-icon>
      </v-btn>

      <!-- Profile Icon -->
      <v-btn icon title="Profile">
        <v-icon color="black" size="28">mdi-account-outline</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>
