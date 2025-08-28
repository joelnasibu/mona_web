<template>
  <div class="">
    <CoreMainTitle title="Related Items" />
    <v-container class="pa-0" fluid>
      <v-row class="ma-auto">
        <v-col cols="12" sm="5" class="pl-0">
          <v-card class="pa-3"></v-card>
        </v-col>
        <v-col cols="12" sm="7">
          <v-container> </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();
const { roundDiscountPercentage, currencyFormat, priceAfterDiscount } =
  useHelpers();
</script>

<style lang="css" scoped>
.horizontal-scroller-card {
  width: 200px; /*if ChannelMergerNode, change also the cardWidth on <CoreHorizontalScroller>*/
}
.product-title {
  -webkit-line-clamp: 2 !important;
}
</style>
