<template>
  <v-row class="ma-auto">
    <v-col cols="12" class="card-outlined rounded-lg">
      <v-container class="pa-0" fluid>
        <v-row class="ma-auto">
          <v-col cols="12" sm="3" v-for="(
              { productName, image, unitPrice, business, discount }, i
            ) in prod" :key="i">
            <v-card flat class="card-white rounded-lg">
              <v-card height="200" flat class="bg-card rounded-lg pa-2">
                <v-img :src="image" :lazy-src="image"></v-img>
              </v-card>
              <div class="pa-4 text-caption">
                <b>{{ currencyFormat(unitPrice) }}</b>
                <div class="my-0">
                  <span>{{ productName }}</span>
                </div>
                <div variant="text" class="text-caption text-primary-accent mt-2 cursor-pointer"
                  @click="toggleProductInCart({ ...prod[i], quantity: 1 })">
                  <v-icon start size="small" icon="mdi-cart-outline"></v-icon>
                  <span>Move to cart</span>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup>
const { currencyFormat } = useHelpers();

import { useCartStore } from "~/store/cart";
const { toggleProductInCart } = useCartStore();

const prod = [
  {
    productName: "Samsumg Galaxy Z Flip 4",
    unitPrice: 870,
    discount: 30,
    productId: "PS262727",
    image:
      "https://ipartnerstore.com/wp-content/uploads/2022/08/galaxy-z-flip4_highlights_durability_right.png",
    business: {
      businessName: "Dummy",
    },
  },
  {
    productName: "iPhone 15 Pro",
    unitPrice: 1300,
    discount: 0,
    productId: "PS2930202",
    image:
      "https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2023/09/pbi-iphone-15-pro-max.png",
    business: {
      businessName: "Dummy",
    },
  },
  {
    productName: "Apple Watch Serie 7",
    unitPrice: 420,
    discount: 24,
    productId: "PA3837873",
    image: "https://www.pngarts.com/files/8/Apple-Watch-Transparent.png",
    business: {
      businessName: "Dummy",
    },
  },
  {
    productName: "Microsoft Surface Studio",
    unitPrice: 680,
    discount: 0,
    productId: "PA38378731",
    image:
      "https://s3-eu-west-1.amazonaws.com/komputer-productsearch/content/uploads/2022/04/08121004/RE4OXzi.png",
    business: {
      businessName: "Dummy",
    },
  },
];
</script>

<style lang="css" scoped></style>
