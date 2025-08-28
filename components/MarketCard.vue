<template>
  <div class="">
    <core-mid-screen-layout>
      <section
        class="market-grid-section py-10"
        :style="{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <div class="market-grid">
          <a
            v-for="(market, index) in markets"
            :key="index"
            :href="market.link"
            class="market-card group"
            :style="{ backgroundImage: `url('/Smartsell Logo.jpeg')` }"
          >
            <div class="overlay"></div>
            <div class="content">
              <div class="text-subtitle-2">
                <span>{{ market.name }}</span>
              </div>
              <div class="text-caption text-grey-lighten-1">
                <span>{{ market.description }}</span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </core-mid-screen-layout>
  </div>
</template>

<script setup>
import bgImage from "@/assets/images/bg/white.png";
const markets = [
  { name: "Adams Market", description: "Fresh produce", link: "#" },
  { name: "Gikomba Market", description: "Second-hand goods", link: "#" },
  { name: "Toi Market", description: "Local crafts", link: "#" },
  { name: "City Market", description: "Tourist crafts", link: "#" },
  { name: "Kariokor Market", description: "Traditional items", link: "#" },
  { name: "Maasai Market", description: "Art & jewelry", link: "#" },
  { name: "Village Market", description: "Modern shopping", link: "#" },
  { name: "Nairobi Farmers Market", description: "Organic produce", link: "#" },
];
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

.market-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  border-radius: 8px;
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
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 8px;
}

.content {
  position: relative;
  z-index: 2;
}
</style>
