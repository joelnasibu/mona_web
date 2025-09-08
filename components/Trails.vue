<template>
  <div class="py-12 position-relative" style="isolation: isolate">
    <div
      class="position-absolute w-100 h-100"
      :style="{
        backgroundImage: 'url(/images/cover-image.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        opacity: 0.2,
      }"
    ></div>
    <div class="w-full bg-transparent">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <LandingTitle title="Suggested Trails & Visits" />
        <p class="text-body-1">
          Discover curated trails and visit recommendations to explore Nairobi’s
          vibrant markets and culture.
        </p>

        <div class="trails-grid mt-8">
          <div v-for="(trail, index) in trails" :key="index" class="trail-card">
            <component :is="trail.icon" class="trail-icon" />
            <h2 class="trail-title">{{ trail.title }}</h2>
            <p class="trail-description">{{ trail.description }}</p>

            <div class="trail-meta">
              <span class="duration">⏱ {{ trail.duration }}</span>
              <ul class="highlights">
                <li
                  v-for="(highlight, i) in trail.highlights"
                  :key="i"
                  class="highlight-item"
                >
                  <Check size="18" color="#032F46" /> {{ highlight }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  MapPin,
  Footprints,
  ShoppingBag,
  Camera,
  Utensils,
  Trees,
  Check,
} from "lucide-vue-next";

const trails = ref([
  {
    title: "Cultural Shopping Trail",
    icon: ShoppingBag,
    description:
      "Explore Nairobi's famous local markets including Gikomba, Maasai Market, and Toi Market.",
    duration: "Half-day",
    highlights: ["Handicrafts", "Textiles", "Local souvenirs"],
  },
  {
    title: "Historical & City Landmarks",
    icon: Camera,
    description:
      "A walking trail covering City Market, Kenyatta Avenue, and key Nairobi landmarks.",
    duration: "2-3 hours",
    highlights: ["Architecture", "Street food", "Photo spots"],
  },
  {
    title: "Food & Flavors Experience",
    icon: Utensils,
    description:
      "Discover Nairobi Farmers Market and try out authentic Kenyan cuisine.",
    duration: "Half-day",
    highlights: ["Local delicacies", "Fresh produce", "Street vendors"],
  },
  {
    title: "Hidden Gems Trail",
    icon: Footprints,
    description:
      "Visit lesser-known local spots around Kariokor and Adams Market for unique finds.",
    duration: "Half-day",
    highlights: ["Community vibe", "Handmade goods", "Affordable shopping"],
  },
  {
    title: "Green Escape Trail",
    icon: Trees,
    description:
      "Balance your market visits with a relaxing walk in Nairobi’s green spaces like Uhuru Park and Karura Forest.",
    duration: "3-4 hours",
    highlights: ["Nature walks", "Picnic spots", "Bird watching"],
  },
  {
    title: "Night Market Adventure",
    icon: MapPin,
    description:
      "Experience the vibrant Nairobi nightlife at bustling evening markets and street food stalls.",
    duration: "Evening",
    highlights: ["Street food", "Night shopping", "Music & vibe"],
  },
]);
</script>

<style scoped>
.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #f97316;
}

.trails-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.trail-card {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
}

.trail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.trail-icon {
  width: 36px;
  height: 36px;
  color: rgba(var(--v-theme-secondary));
  margin-bottom: 1rem;
}

.trail-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.trail-description {
  font-size: 0.8rem;
  color: #555;
  margin-bottom: 1rem;
}

.trail-meta {
  font-size: 0.8rem;
  color: #333;
}

.duration {
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
}

.highlights li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8rem;
  margin: 0.3rem 0;
}

.highlights li svg {
  flex-shrink: 0;
  margin-top: 2px;
}
</style>
