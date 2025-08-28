<template>
  <section class="market-grid-section mt-16 px-6">
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
          <h3 class="market-name">{{ market.name }}</h3>
          <p class="market-desc">{{ market.description }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
const markets = [
  { name: 'Adams Market', description: 'Fresh produce', link: '#' },
  { name: 'Gikomba Market', description: 'Second-hand goods', link: '#' },
  { name: 'Toi Market', description: 'Local crafts', link: '#' },
  { name: 'City Market', description: 'Tourist crafts', link: '#' },
  { name: 'Kariokor Market', description: 'Traditional items', link: '#' },
  { name: 'Maasai Market', description: 'Art & jewelry', link: '#' },
  { name: 'Village Market', description: 'Modern shopping', link: '#' },
  { name: 'Nairobi Farmers Market', description: 'Organic produce', link: '#' }
]
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
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  border-radius: 12px;
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

.market-desc {
  font-size: 0.9rem;
  line-height: 1.3;
}
</style>
