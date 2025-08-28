<template>
  <section
    class="w-full py-12"
    :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <landing-title title="Tips & Visitor Guide" />

    <v-container class="mx-auto" style="max-width: 1300px">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-expansion-panels
            multiple
            bg-color="transparent"
            flat
            class="rounded-lg"
          >
            <v-expansion-panel
              v-for="(tip, index) in tips"
              :key="index"
              class="rounded-lg"
              :elevation="0"
            >
              <v-expansion-panel-title class="">
                <component
                  :is="tip.icon"
                  class="text-secondary"
                  style="opacity: 0.7"
                  size="15"
                />
                <b class="font-medium text-body-2 ml-3">{{ tip.title }}</b>
              </v-expansion-panel-title>

              <v-expansion-panel-text class="text-caption">
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
import { ref } from "vue";
import {
  ShoppingBag,
  Clock,
  Shield,
  Gift,
  Map,
  DollarSign,
  Users,
  Info,
} from "lucide-vue-next";
import bgImage from "@/assets/images/bg/white.png";

const tips = ref([
  {
    title: "How to bargain at Nairobi markets?",
    content:
      "Start lower than the asking price, keep a smile, and stay polite. Bargaining is part of the culture.",
    icon: ShoppingBag,
  },
  {
    title: "What’s the best time to shop?",
    content:
      "Morning hours are best ,vendors are fresh, and prices are often lower at the start of the day.",
    icon: Clock,
  },
  {
    title: "How do I stay safe?",
    content:
      "Keep valuables secure, avoid carrying large amounts of cash, and always stay aware of your surroundings.",
    icon: Shield,
  },
  {
    title: "Which market is best for souvenirs?",
    content:
      "The Maasai Market is famous for beadwork, jewelry, and authentic African crafts perfect for gifts.",
    icon: Gift,
  },
  {
    title: "How do I get around the markets?",
    content:
      "Walking is easiest inside markets. For larger areas, consider boda bodas (motorbikes) or matatus (minibuses).",
    icon: Map,
  },
  {
    title: "How much should I budget?",
    content:
      "It depends on what you’re buying. Small souvenirs start at Kes200–Kes500, while fabrics and art may cost more.",
    icon: DollarSign,
  },
  {
    title: "Are markets crowded?",
    content:
      "Yes, especially weekends. Visit weekdays if you prefer fewer crowds and a calmer shopping experience.",
    icon: Users,
  },
  {
    title: "Do vendors speak English?",
    content:
      "Most vendors speak English and Swahili. A few words of Swahili will make your shopping experience warmer.",
    icon: Info,
  },
]);
</script>

<style scoped></style>
