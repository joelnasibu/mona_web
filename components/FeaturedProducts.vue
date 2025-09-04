<template>
  <v-container fluid class="pa-6  section-wrapper">
    <div>
      <!-- Section Title -->
      <div class="section-header mb-8">
        <h2 class="text-h5 font-weight-bold mb-2">Featured Product</h2>
        <div class="section-underline"></div>
      </div>

      <!-- Products Grid -->
      <v-row :gutter="24" class="px-4 justify-space-between">
        <v-col
          v-for="(product, index) in products"
          :key="index"
          cols="12"
          sm="6"
          md="6"
          lg="3"
          class="grid-card d-flex flex-column align-center"
        >
          <!-- Product Image -->
          <v-img
            :src="product.img"
            :lazy-src="product.img"
            height="200"
            width="100%"
            cover
            class="rounded-lg mb-4"
          />

          <div class="d-flex justify-space-between align-center w-100">
            <div>
              <!-- Price and Name in Orange -->
              <div class="text-caption font-weight-bold orange--text">
                $ {{ product.price }}
              </div>
              <div class="text-body-2 font-weight-medium orange--text">
                {{ product.name }}
              </div>
            </div>

            <!-- Action Icons -->
            <div class="d-flex gap-2">
              <Heart
                size="20"
                class="cursor-pointer orange--text"
                @click="goToWishlist(product)"
              />
              <ShoppingCart
                size="20"
                class="cursor-pointer orange--text"
                @click="goToCart(product)"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import { Heart, ShoppingCart } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

const products = [
  { name: "Thrift Wear", price: 10, img: "/images/categories/electronics.jpeg" },
  { name: "Leather Sandals", price: 20, img: "/images/categories/automotive.jpeg" },
  { name: "Beauty", price: 30, img: "/images/categories/beauty.jpeg" },
  { name: "Computers", price: 40, img: "/images/categories/computers.jpeg" },
  { name: "Art", price: 50, img: "/images/categories/art.jpeg" }
];

// Save to wishlist
const goToWishlist = (product) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  router.push("/profile/wishlist");
};

// Save to cart
const goToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  router.push("/shop/cart");
};
</script>

<style scoped>
.gap-2 {
  gap: 8px;
}

.section-wrapper {
  max-width: 1200px;   
  margin: 0 auto;      
  padding-left: 16px; 
  padding-right: 16px;
  margin-top: -30px; 
}


.grid-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.grid-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  background-color: #f9fafb;
}

.section-header {
  max-width: 1100px;
  margin: 0 auto 32px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 8px;
}

.section-underline {
  height: 2px;
  width: 100%;
  background-color: #e0e0e0;
}


.orange--text {
  color: #ff6600 !important;
}
</style>
