<template>
  <CoreHorizontalScroller
    :title="
      isMobile
        ? 'Customers also bought'
        : 'Customers purchasing this item also purchased'
    "
    card-width="200"
  >
    <div
      class="horizontal-scroller-card mx-1 cursor-pointer"
      v-for="n in 9"
      :key="n"
    >
      <v-hover v-slot="{ isHovering, props }">
        <v-card
          class="pa-0 h-100 w-100"
          v-bind="props"
          :elevation="isHovering ? 3 : 0"
        >
          <v-card flat class="bg-transparent" rounded="0" height="150">
            <v-img
              width="100%"
              height="100%"
              src="https://vitaltone.co.uk/wp-content/uploads/2021/05/3337875597371_CeraVe-Global_MoisturizingCream_1.69oz-Tube_GP1_FRONT-Copy-1138x2048.png"
            ></v-img>
          </v-card>
          <div class="pa-4 w-100">
            <div class="text-caption product-title text-wrap break-word">
              <b
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                dolores dolorum, minima dolorem pariatur libero, deserunt harum
                labore, veritatis et vero ducimus obcaecati necessitatibus
                numquam asperiores cupiditate porro repellat sunt?</b
              >
            </div>
            <div class="text-body-2 mt-2">
              <div class="d-flex align-center justify-space-between">
                <span>
                  <b>{{ currencyFormat(200) }}</b>
                </span>
                <ClientProductDeal discount="2" />
              </div>
            </div>
            <div class="d-flex align-center text-caption mt-1">
              <ClientProductRatings :rating="2" />
              <span class="text-secondary mx-2">8</span>
            </div>
          </div>
        </v-card>
      </v-hover>
    </div>
  </CoreHorizontalScroller>
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
