<template>
  <v-container class="pa-0" fluid>
    <v-row class="ma-auto">
      <v-col cols="12" sm="4">
        <div
          class="position-sticky"
          :style="`top: calc(${appBarHeight}px + .2rem)`"
        >
          <div class="d-flex align-center">
            <div class="text-h4 d-flex flex-column" style="width: fit-content">
              <div class="">
                <b>{{ Number(product.rating ?? 3.4).toFixed(1) }}</b
                ><span> / 5</span>
              </div>
              <div class="mt-n1">
                <ClientShopProductRatings
                  :rating="product.rating ?? 3.4"
                  :small="false"
                />
              </div>
            </div>
            <v-spacer></v-spacer>
            <div class="text-disabled">
              <b>{{ reviews }} verified reviews</b>
            </div>
          </div>
          <div
            class="reviews d-flex flex-column ga-2 text-caption text-md-body-2 mt-5"
          >
            <div
              class="d-flex ga-2 align-center"
              v-for="({ title, value }, i) in reviewsDetails"
              :key="i"
            >
              <div class="d-flex align-center ga-1 w-25">
                <v-icon size="small" icon="mdi-star" color="link"></v-icon>
                <span class="mr-2">{{ title }}</span>
                <span>({{ value }})</span>
              </div>
              <v-spacer></v-spacer>
              <div class="w-100">
                <v-progress-linear
                  :model-value="(value * 100) / reviews"
                  color="link"
                  height="8"
                  class="rounded-lg"
                ></v-progress-linear>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="8" class="px-0 pl-md-2 pl-lg-15">
        <div class="mt-5 d-flex flex-column ga-7">
          <div class="" v-for="n in 5">
            <div class="d-flex align-center ga-2 text-body-2">
              <v-avatar
                color="white"
                image="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                size="30"
              ></v-avatar>
              <span>Reviewer</span>
            </div>
            <div class="my-2">
              <ClientShopProductRatings
                :rating="Number(Math.random() * (5 - 1) + 1).toFixed(1)"
              />
            </div>
            <div class="text-caption text-md-body-2">
              <b>Review title</b>
              <p>
                Review short description Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. In, excepturi quisquam voluptatum dolor,
                eligendi, sit minus dignissimos sed iure aliquam vel explicabo.
                Non harum soluta laudantium voluptatem. Voluptate, suscipit
                quos?
              </p>
              <p class="text-grey mt-2 text-caption">
                {{ new Date().toDateString() }}
              </p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  product: Object,
});

const { isMobile } = useDevice();

const filters = ["Most recent", "Top reviews", "Least reviews"];
const filter = ref(0);

const reviews = 23;
const reviewsDetails = [
  { title: 5, value: 10 },
  { title: 4, value: 6 },
  { title: 3, value: 3 },
  { title: 2, value: 1 },
  { title: 1, value: 3 },
];

const appBarHeight = ref(64);
onMounted(() => {
  appBarHeight.value = document.getElementById("appBar").clientHeight;
});
</script>

<style lang="css" scoped></style>
