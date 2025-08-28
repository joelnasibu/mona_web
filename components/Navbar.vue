<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const searchQuery = ref('')
const route = useRoute()

const categories = [
  'Groceries', 'Electronics', 'Clothing', 'Home', 'Beauty',
  'Toys', 'Sports', 'Automotive', 'Books'
]
</script>

<template>
  <!-- ✅ Single Navbar -->
  <v-app-bar app color="white" flat class="px-6">
    <div class="d-flex align-center w-100 position-relative">
      <!-- Logo -->
      <v-img src="/full.png" alt="Logo" max-width="120" contain />

      <!-- Search Bar -->
      <div
        class="position-absolute"
        style="left: 50%; transform: translateX(-50%); width: 50%; max-width: 700px;"
      >
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

      <!-- Buttons -->
      <div class="d-flex align-center ml-auto">
        <v-btn color="orange" class="mr-2" title="Find Market/Product">
          <v-icon color="orange" size="28">mdi-map-search-outline</v-icon>
        </v-btn>
        <v-btn icon title="Profile">
          <v-icon color="black" size="28">mdi-account-outline</v-icon>
        </v-btn>
      </div>
    </div>
  </v-app-bar>

  <div
    v-if="route.path !== '/'"
    class="d-flex w-100 justify-center bg-blue-darken-2 text-white "
     style="margin-top: -12px;"
  >
    <v-btn
      v-for="(cat, i) in categories"
      :key="i"
      variant="text"
      class="text-white text-body-2 px-3"
      density="compact"
    >
      {{ cat }}
    </v-btn>
  </div>
</template>
