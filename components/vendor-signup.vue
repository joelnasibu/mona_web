<template>
  <section
    :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div
      class="bg-gray-50 py-16 px-6 text-center rounded-2xl shadow-md text-body-1"
    >
      <LandingTitle title="Join Nairobi Markets" />
      <p class="mt-4 mx-auto">
        Create your business account and start showcasing your products today.
      </p>

      <div class="mt-8 flex justify-center">
        <NuxtLink to="/create-business-account">
          <v-btn
            color="primary"
            size="large"
            flat
            class="rounded-xl px-10 text-lg font-semibold text-capitalize text-subtitle-1"
          >
            Become a vendor
          </v-btn>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import bgImage from "@/assets/images/bg/white.png";
definePageMeta({
  layout: "new-landing",
});
</script>
<style scoped>
.subtitle {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #f97316;
}
</style>
