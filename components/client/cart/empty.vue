<template>
  <v-row class="ma-auto">
    <v-col>
      <div class="pa-2 pa-md-5 d-flex flex-column rounded-lg">
        <div class="py-5 text-center">
          <v-img src="/icons/empty-cart.png" width="80" class="ma-auto"></v-img>
          <div class="text-h6 py-5">
            <b>Your cart is empty!</b>
          </div>
          <div class="text-body-2 mx-auto" style="max-width: 40ch">
            <span
              >You have no items in your shopping cart. Let's go buy
              something!</span
            >
          </div>
          <v-btn
            class="text-none text-subtitle-2 mt-7 rounded-lg"
            color="primary-accent"
            flat
            prepend-icon="mdi-cart-outline"
            :to="{ name: 'shop' }"
          >
            <span>Shop now</span>
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup></script>

<style lang="css" scoped></style>
