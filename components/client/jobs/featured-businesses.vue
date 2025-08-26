<template>
  <div>
    <CoreTitle2 title="Featured businesses" />
    <div class="overflow-auto hide-scrollbar mt-5" style="white-space: nowrap">
      <!-- :width="isMobile ? '200px' : `${100 / featuredBusinesses.length}%`" -->
      <v-card flat class="px-2 bg-transparent d-inline-block" v-for="business in featuredBusinesses"
        :style="`width:${isMobile ? '200px' : 'clamp(150px,  25%, 200px)'}`" :key="business.id">
        <v-card flat :to="{
          name: 'company-name-id',
          params: {
            id: business.id,
            name: String(business.businessName)
              .toLowerCase()
              .replaceAll(' ', '-'),
          },
        }">
          <div class="card-outlined rounded-lg pa-2 pa-md-3">
            <v-img class="" width="100%" height="160px" :src="business.logo"></v-img>
          </div>
          <div class="text-center text-subtitle-2 pa-3">
            <span>{{ capitalizeFirstLetter(business.businessName) }}</span>
          </div>
        </v-card>
      </v-card>
    </div>
  </div>
</template>

<script setup>
const { capitalizeFirstLetter } = useHelpers(),
  { isMobile } = useDevice();

import { useBusinessStore } from "~/store/business";
const { getBusinesses } = useBusinessStore(),
  data = ref(await getBusinesses(false)),
  featuredBusinesses = computed(() => {
    return data.value.filter((b) => b.approved).slice(0, 10);
  });

//
</script>

<style lang="css" scoped></style>
