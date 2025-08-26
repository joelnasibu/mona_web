<template>
  <div class="shop" id="shop">
    <LandingTitle title="Commerce Électronique" />
    <CoreMidScreenLayout :lg="10" :xl="9">
      <div class="text-center mx-auto mt-5" style="max-width: 80ch">
        <!-- data-aos-duration="1000"
        data-aos-delay="200"
        data-aos="fade-up" -->
        <span
          >Découvrez nos boutiques, votre destination ultime pour des
          collections sélectionnées, où la qualité rencontre le style et où
          chaque achat raconte une histoire. Explorez, faites-vous plaisir et
          trouvez quelque chose de parfait pour élever votre vie.</span
        >
      </div>
      <v-divider class="my-10"></v-divider>
      <v-container class="pa-0 mb-10" fluid>
        <v-row>
          <v-col
            v-for="(
              { productName, business, price, thumbnail, id }, i
            ) in products.slice(0, 4)"
            cols="6"
            sm="3"
          >
            <v-card flat @click="goTo(id)" class="">
              <v-card flat class="rounded-lg card-white pa-3 card-outlined">
                <v-card
                  flat
                  class="bg-transparent rounded-lg d-flex align-center justify-center"
                  height="200"
                >
                  <v-img
                    :src="thumbnail"
                    :lazy-src="thumbnail"
                    class="ma-auto"
                  ></v-img>
                </v-card>
                <div class="d-flex align-center mt-3 text-caption">
                  <div
                    class="d-flex flex-column text-subtitle-1 text-capitalize"
                  >
                    <b>{{ productName.toLowerCase() }}</b>
                    <span
                      class="text-grey mt-n2 text-capitalize"
                      style="font-size: 0.7rem"
                      >{{ business.businessName.toLowerCase() }}</span
                    >
                  </div>
                  <v-spacer></v-spacer>
                  <div class="d-flex flex-column">
                    <b>{{ currencyFormat(price) }}</b>
                  </div>
                </div>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="text-center">
        <!-- data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="100" -->
        <v-btn color="link" rounded flat :to="{ name: 'shop' }">
          <span>visiter nos boutiques</span>
        </v-btn>
      </div>
    </CoreMidScreenLayout>
  </div>
</template>

<script setup>
const { currencyFormat } = useHelpers();

import { useProductStore } from "~/store/products";
const { featuredProducts } = useProductStore(),
  products = ref(await featuredProducts(false));

import ProductModel from "~/models/product";
const goTo = (id) => {
  let product = products.value.find((item) => item.id === id);
  let productModel = new ProductModel(product);
  productModel.navigateToProductDetails();
};
</script>

<style lang="css" scoped></style>
