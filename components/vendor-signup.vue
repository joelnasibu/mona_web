<template>
  <section
    class="w-full py-12"
    :style="{
         backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
<div class="max-w-6xl mx-auto px-6 text-center">
      <!-- Title -->
      <h1 class="page-title text-gray-900 dark:text-white">
        Become a Vendor
      </h1>
      <p
        class="subtitle text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Join our growing community of market vendors. Showcase your products,
        connect with buyers, and grow your business.
      </p>

      <!-- Square Form Card -->
      <div
        class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-xl rounded-2xl p-8 mx-auto flex flex-col"
        style="max-width: 700px; min-height: 600px;"
      >
        <v-form v-model="valid" @submit.prevent="submitForm" class="flex flex-col flex-grow">
          <!-- Form fields -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
            <v-text-field
              v-model="form.name"
              label="Full Name"
              prepend-inner-icon="mdi-account"
              variant="outlined"
              density="comfortable"
              required
            />
            <v-text-field
              v-model="form.email"
              label="Email"
              prepend-inner-icon="mdi-email"
              variant="outlined"
              type="email"
              density="comfortable"
              required
            />
            <v-text-field
              v-model="form.phone"
              label="Phone Number"
              prepend-inner-icon="mdi-phone"
              variant="outlined"
              density="comfortable"
              required
            />
            <v-text-field
              v-model="form.business"
              label="Business Name"
              prepend-inner-icon="mdi-storefront"
              variant="outlined"
              density="comfortable"
              required
            />
            <v-select
              v-model="form.category"
              :items="categories"
              label="Product Category"
              prepend-inner-icon="mdi-tag"
              variant="outlined"
              density="comfortable"
              required
            />
            <v-text-field
              v-model="form.location"
              label="Market Location"
              prepend-inner-icon="mdi-map-marker"
              variant="outlined"
              density="comfortable"
              required
            />
            <v-textarea
              v-model="form.description"
              label="Business Description"
              prepend-inner-icon="mdi-text"
              variant="outlined"
              class="md:col-span-2"
              auto-grow
              rows="3"
            />
          </div>

          <!-- Submit Button -->
          <div class="mt-auto d-flex justify-center pt-6">
            <v-btn
              color="primary"
              size="large"
              elevation="4"
              class="rounded-xl px-12 py-4 text-lg font-semibold"
              type="submit"
            >
              Sign Up
            </v-btn>
          </div>
        </v-form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import bgImage from '@/assets/images/bg/white.png'


const valid = ref(false)

const form = ref({
  name: "",
  email: "",
  phone: "",
  business: "",
  category: null,
  location: "",
  description: ""
})

const categories = [
  "Clothing & Fabrics",
  "Handmade Crafts",
  "Fresh Produce",
  "Jewelry & Accessories",
  "Food & Drinks",
  "Art & Paintings",
  "Electronics",
  "Other"
]

function submitForm() {
  if (valid.value) {
    alert("Vendor registered successfully!")
    console.log(form.value)
  }
}
</script>

<style scoped>
.subtitle {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #f97316
}
.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

</style>