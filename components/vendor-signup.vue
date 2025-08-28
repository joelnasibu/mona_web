<template>
  <section
    :style="{
         backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
    >
  
  <div class="bg-gray-50 py-16 px-6 text-center rounded-2xl shadow-md">
  
    <h2 class="text-3xl font-bold text-gray-900">Join Nairobi Markets</h2>
    <p class="subtitle text-orange-500 mt-4 text-lg max-w-xl mx-auto">
      Create your business account and start showcasing your products today.
    </p>

    <div class="mt-8 flex justify-center">
      <NuxtLink to="/create-business-account">
        <v-btn
          color="primary"
          size="large"
          elevation="4"
          class="rounded-xl px-10 text-lg font-semibold"
        >
          Become a vendor
        </v-btn>
      </NuxtLink>
    </div>
  </div
  ></section>
</template>

<script setup>
import bgImage from '@/assets/images/bg/white.png'
definePageMeta({
  layout: "new-landing",
});
</script>
<style scoped>
.subtitle {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #f97316
}
</style>