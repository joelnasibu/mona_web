<script setup>
import MarketSection from "~/components/MarketSection.vue"; 
definePageMeta({ layout: "landing-page" });

const categories = [
  "Apparel", "Health & Personal Care", "Machinery",
  "Consumer Electronics", "Industrial Equipment", "Furniture", "Other Categories"
];

const heroSlides = [
  { title: "Let your home reflect", subtitle: "Luxury Interior Inside", description: "Discover premium home décor and furniture for every style.", image: "/images/banners/landing.jpeg" },
  { title: "Explore the World", subtitle: "Let’s Shop in Style", description: "Browse through our wide collection of fashion, electronics, and more.", image: "/images/landing.jpeg" },
  { title: "Mega Sale", subtitle: "Don’t Miss Out!", description: "Up to 50% OFF on select products — hurry before it’s gone!", image: "/images/sale.jpeg" },
];

const deals = [
  { title: "Big Sale", image: "/images/categories/beauty.jpeg" },
  { title: "Electronics", image: "/images/categories/electronics.jpeg" },
  { title: "Health Care", image: "/images/categories/luggage.jpeg" },
  { title: "Office & Home", image: "/images/categories/home.jpeg" },
];

const featured = [
  { name: "Headphones", price: 25, image: "/images/product1.jpg" },
  { name: "PS5", price: 500, image: "/images/product2.jpg" },
  { name: "Xbox", price: 450, image: "/images/product3.jpg" },
  { name: "Controller", price: 60, image: "/images/product4.jpg" },
  { name: "Laptop", price: 1100, image: "/images/product5.jpg" },
  { name: "Smartphone", price: 900, image: "/images/product6.jpg" },
  { name: "Tablet", price: 350, image: "/images/product7.jpg" },
  { name: "Wireless Earbuds", price: 80, image: "/images/product8.jpg" },
];

const latest = [
  { name: "Gaming Chair", price: 200, image: "/images/latest1.jpg" },
  { name: "Camera", price: 350, image: "/images/latest2.jpg" },
  { name: "VR Headset", price: 150, image: "/images/latest3.jpg" },
  { name: "Smartwatch", price: 120, image: "/images/latest4.jpg" },
  { name: "Bluetooth Speaker", price: 70, image: "/images/latest5.jpg" },
  { name: "Laptop Bag", price: 45, image: "/images/latest6.jpg" },
];

const exclusive = [
  { name: "Laptop", price: 900, image: "/images/ex1.jpg" },
  { name: "Guitar", price: 300, image: "/images/ex2.jpg" },
  { name: "Violin", price: 400, image: "/images/ex3.jpg" },
  { name: "Keyboard", price: 250, image: "/images/ex4.jpg" },
  { name: "Jewelry", price: 600, image: "/images/ex5.jpg" },
  { name: "Watch", price: 450, image: "/images/ex6.jpg" },
  { name: "Designer Bag", price: 700, image: "/images/ex7.jpg" },
];

const weekDeals = [
  { name: "Monitor", price: 250, image: "/images/week1.jpg" },
  { name: "Shoes", price: 75, image: "/images/week2.jpg" },
  { name: "Speaker", price: 150, image: "/images/week3.jpg" },
  { name: "Bag", price: 90, image: "/images/week4.jpg" },
  { name: "Headphones", price: 50, image: "/images/week5.jpg" },
];

const personalDeals = [
  { brand: "Tamara Bella", name: "Floral Summer Dress", price: 39.99, image: "/images/deal-you1.jpg" },
  { brand: "Tamara Bella", name: "Red Casual Dress", price: 42.50, image: "/images/deal-you2.jpg" },
  { brand: "Tamara Bella", name: "Blue Off-Shoulder Dress", price: 50.00, image: "/images/deal-you3.jpg" },
  { brand: "Tamara Bella", name: "Evening Pink Dress", price: 65.00, image: "/images/deal-you4.jpg" },
  { brand: "Tamara Bella", name: "Polka Dot Dress", price: 35.00, image: "/images/deal-you5.jpg" },
  { brand: "Tamara Bella", name: "Denim Dress", price: 55.00, image: "/images/deal-you6.jpg" },
  { brand: "Tamara Bella", name: "Casual Pants", price: 29.99, image: "/images/deal-you7.jpg" },
  { brand: "Tamara Bella", name: "Green Romper", price: 48.00, image: "/images/deal-you8.jpg" },
];
</script>

<template>
  <v-container fluid class="pa-0">
    <!-- Categories Bar -->
    <v-toolbar color="blue-darken-2" density="comfortable" class="text-white">
      <v-row no-gutters class="w-100">
        <v-col cols="auto" v-for="(cat, i) in categories" :key="i">
          <v-btn text class="text-white">{{ cat }}</v-btn>
        </v-col>
      </v-row>
    </v-toolbar>

    <!-- Hero Carousel -->
    <v-carousel cycle interval="4000" hide-delimiters show-arrows="false" height="500">
      <v-carousel-item v-for="(slide, i) in heroSlides" :key="i">
        <v-sheet
          height="100%"
          tile
          class="position-relative"
          :style="{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }"
        >
          <div class="position-absolute" style="bottom: 15%; left: 8%; max-width: 600px; z-index: 2;">
            <h2 class="text-h4 md:text-h3 font-weight-bold text-white mb-3">{{ slide.title }}</h2>
            <p class="text-h6 text-white mb-3">{{ slide.subtitle }}</p>
            <p class="text-body-1 text-white mb-6">{{ slide.description }}</p>
            <v-btn color="orange-darken-2" size="large" class="rounded-pill" variant="flat">
              Shop Now
            </v-btn>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- Sections using MarketSection.vue -->
    <MarketSection title="Deals and Promotions" :items="deals" :showButton="true" />
    <MarketSection title="Featured Products" :items="featured" :showButton="true" />
    <MarketSection title="Latest Products" :items="latest" :showButton="true" />
    <MarketSection title="Exclusive Products" :items="exclusive" :showButton="true" />
    <!-- Banner goes here -->
<section class="my-10">
  <a href="#" class="block w-full">
    <v-img
      src="/assets/images/banner1.jpg"
      height="250"
      class="rounded-lg"
      cover
    ></v-img>
  </a>
</section>

    <MarketSection title="Deals of the Week" :items="weekDeals" :showButton="true" />
    <MarketSection title="Just for You" :items="personalDeals" :showButton="true" />
  </v-container>
</template>
