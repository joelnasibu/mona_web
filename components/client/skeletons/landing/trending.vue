<template>
  <div class="">
    <div class="d-flex align-center">
      <CoreMainTitle title="Trending now" />
      <v-spacer></v-spacer>
      
      <div class="d-flex">
        <v-btn
          v-for="({ title }, i) in btns"
          :key="i"
          size="small"
          flat
          variant="text"
          :icon="`mdi-chevron-${title}`"
          disabled
        ></v-btn>
      </div>
    </div>
    <div
      class="mt-5 mb-1 trending-products position-relative overflow-x-auto hide-scrollbar cursor-grab"
      id="trends"
    >
      <div
        class="product-sm-card mx-3 cursor-pointer"
        v-for="n in 30"
        :key="n"
        id="product-sm-card"
      >
        <v-card class="bg-white pa-0 h-100 w-100">
          <div class="d-flex w-100 h-100 align-center pa-1">
            <v-card
              flat
              class="skeleton h-100 rounded-ts rounded-bs"
              style="width: 40%"
              rounded="0"
            >
            </v-card>
            <div class="mx-2" style="width: 60%">
              <div class="skeleton rounded-sm w-100 pa-2"></div>
              <div
                class="skeleton rounded-sm pa-2 mt-1"
                style="width: 60%"
              ></div>
              <div class="mt-3 d-flex align-center w-100">
                <div class="skeleton w-50 pa-2 rounded-sm"></div>
                <v-spacer></v-spacer>
                <v-avatar size="30" class="skeleton"></v-avatar>
              </div>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
const btns = ref([{ title: "left" }, { title: "right" }]);
</script>

<style lang="css" scoped>
.trending-products {
  white-space: nowrap;
  min-width: 0;
}

.product-sm-card {
  display: inline-block;
}

.product-sm-card:first-child {
  margin-left: 0 !important;
}
.product-sm-card:last-child {
  margin-right: 0 !important;
}
.prod-image {
  object-fit: cover;
  height: 100%;
}
</style>
