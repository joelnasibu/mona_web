<template> 
  <section 
    class="market-grid-section mt-16 px-6"
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
        :style="{ backgroundImage: `url(${market.image})` }"
      >
        <div class="overlay"></div>
        <div class="content">
          <h3 class="market-name">{{ market.name }}</h3>
          <div class="market-desc flex items-center gap-2 text-orange-400">
            <component :is="market.icon" class="w-4 h-4 text-white" />
            <span>{{ market.description }}</span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import bgImage from '@/assets/images/bg/white.png'


import Adams from '@/assets/images/markets/Adams_Market.png'
import Gikomba from '@/assets/images/markets/Gikomba_Market.png'
import Toi from '@/assets/images/markets/Toi_Market.png'
import City from '@/assets/images/markets/City_Market.png'
import Kariokor from '@/assets/images/markets/Kariokor_Market.png'
import Maasai from '@/assets/images/markets/Maasai_Market.png'
import Village from '@/assets/images/markets/Village_Market.png'
import Farmers from '@/assets/images/markets/Farmers_Market.png'


import { ShoppingBag, Shirt, Home, Flower2, HandPlatter, Gem, Store, Leaf } from 'lucide-vue-next'

const markets = [
  { name: 'Adams Market', description: 'Fresh produce', link: '/shop', image: Adams, icon: ShoppingBag },
  { name: 'Gikomba Market', description: 'Fashion & Everyday Essentials', link: '#', image: Gikomba, icon: Shirt },
  { name: 'Toi Market', description: 'Fresh Produce & Home Goods', link: '#', image: Toi, icon: Home },
  { name: 'City Market', description: 'Flowers, Food & Lifestyle', link: '#', image: City, icon: Flower2 },
  { name: 'Kariokor Market', description: 'Crafts & Handmade Goods ', link: '#', image: Kariokor, icon: HandPlatter },
  { name: 'Maasai Market', description: 'Culture & Design', link: '#', image: Maasai, icon: Gem },
  { name: 'Village Market', description: 'Premium Shopping & Crafts', link: '#', image: Village, icon: Store },
  { name: 'Nairobi Farmers Market', description: 'Organic & Sustainable Living', link: '#', image: Farmers, icon: Leaf }
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
  background: rgba(0,0,0,0.2); 
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fb923c
}
.market-desc svg {
    stroke: #fb923c
  }

</style>
