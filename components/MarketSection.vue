<template>
  <section class="py-10">
    <!-- Section Title -->
    <div class="text-center mb-8">
      <h3 class="text-h5 font-weight-bold mb-2">{{ title }}</h3>
      <div class="mx-auto" style="width: 80px; height: 3px; background-color: #ccc; border-radius: 2px;"></div>
    </div>

    <!-- Grid of Products / Deals -->
    <div class="market-container">
      <div class="market-grid">
        <a
          v-for="(item, i) in visibleItems"
          :key="i"
          href="#"
          class="market-card group"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <div class="overlay"></div>
          <div class="content">
            <h3 class="market-name">{{ item.name || item.title }}</h3>
            <v-btn
              v-if="showButton"
              color="orange-darken-2"
              size="small"
              class="rounded-pill mt-2"
              variant="flat"
            >
              {{ buttonText }}
            </v-btn>
          </div>
        </a>
      </div>

      <!-- Toggle Button -->
      <div v-if="items.length > initialCount" class="text-center mt-6">
        <v-btn color="orange-darken-2" class="rounded-pill" @click="toggleItems">
          {{ isExpanded ? 'Show Less' : 'See More' }}
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  title: String,
  items: Array,
  showButton: { type: Boolean, default: false },
  buttonText: { type: String, default: "View Deal" }
});

const initialCount = 4;
const isExpanded = ref(false);
const visibleItems = ref(props.items.slice(0, initialCount));

// Watch for updates if items change dynamically
watch(() => props.items, (newItems) => {
  visibleItems.value = newItems.slice(0, isExpanded.value ? newItems.length : initialCount);
});

function toggleItems() {
  isExpanded.value = !isExpanded.value;
  visibleItems.value = isExpanded.value ? props.items : props.items.slice(0, initialCount);
}
</script>

<style scoped>
.market-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
@media (max-width: 1024px) {
  .market-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .market-grid {
    grid-template-columns: 1fr;
  }
}

.market-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.market-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  border-radius: 12px;
  color: white;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
  min-height: 220px;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.market-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  transition: background 0.3s;
}

.market-card:hover .overlay {
  background: rgba(0, 0, 0, 0.6);
}

.content {
  position: relative;
  z-index: 2;
}

.market-name {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>
