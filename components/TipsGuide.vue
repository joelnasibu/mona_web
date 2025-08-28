<template>
  <section
    class="w-full py-12"
    :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <!-- Centered narrow wrapper -->
    <h2 class="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
      Tips & Visitor Guide
    </h2>

    <v-container class="mx-auto" style="max-width: 1300px;">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-expansion-panels multiple class="space-y-4">
            <v-expansion-panel
              v-for="(tip, index) in tips"
              :key="index"
              class="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <v-expansion-panel-title class="flex items-center gap-4 bg-white/30 dark:bg-gray-800/30 px-4 py-3 rounded-t-lg">
                <component :is="tip.icon" class="w-5 h-5 text-orange-500 shrink-0" />
                <span class="font-medium text-gray-900 dark:text-white">{{ tip.title }}</span>
              </v-expansion-panel-title>

              <v-expansion-panel-text class="text-gray-700 dark:text-gray-300 px-4 py-3 bg-white/20 dark:bg-gray-800/20 rounded-b-lg">
                {{ tip.content }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>


<script setup>
import { ref } from "vue"
import { ShoppingBag, Clock, Shield, Gift, Map, DollarSign, Users, Info } from "lucide-vue-next"
import bgImage from '@/assets/images/bg/white.png'

const tips = ref([
  { title: "How to bargain at Nairobi markets?", content: "Start lower than the asking price, keep a smile, and stay polite. Bargaining is part of the culture.", icon: ShoppingBag },
  { title: "What’s the best time to shop?", content: "Morning hours are best ,vendors are fresh, and prices are often lower at the start of the day.", icon: Clock },
  { title: "How do I stay safe?", content: "Keep valuables secure, avoid carrying large amounts of cash, and always stay aware of your surroundings.", icon: Shield },
  { title: "Which market is best for souvenirs?", content: "The Maasai Market is famous for beadwork, jewelry, and authentic African crafts perfect for gifts.", icon: Gift },
  { title: "How do I get around the markets?", content: "Walking is easiest inside markets. For larger areas, consider boda bodas (motorbikes) or matatus (minibuses).", icon: Map },
  { title: "How much should I budget?", content: "It depends on what you’re buying. Small souvenirs start at Kes200–Kes500, while fabrics and art may cost more.", icon: DollarSign },
  { title: "Are markets crowded?", content: "Yes, especially weekends. Visit weekdays if you prefer fewer crowds and a calmer shopping experience.", icon: Users },
  { title: "Do vendors speak English?", content: "Most vendors speak English and Swahili. A few words of Swahili will make your shopping experience warmer.", icon: Info },
])
</script>

<style scoped>

.v-expansion-panel-title span {
  margin-left: 0.5rem;
}


.v-expansion-panel {
  margin-left: auto ;
  margin-right: auto ;
  background-color: transparent;
}

.v-expansion-panel:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
</style>
