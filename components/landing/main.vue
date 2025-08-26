<template>
  <div class="position-relative" id="home">
    <!-- <v-img
      width="100%"
      height="60svh"
      cover
      src="https://wallpaperaccess.com/full/2593068.jpg"
      lazy-src="https://wallpaperaccess.com/full/2593068.jpg"
    ></v-img>
    <div
      class="overlay position-absolute w-100 h-100 text-white px-2 px-md-0 d-flex flex-column"
      style="top: 0"
    >
      <div
        class="text-body-2 d-flex flex-column align-center icon text-grey-lighten-1 mt-auto mb-15"
      >
        <div>
          <span class="mb-1">Défiler vers le bas</span>
        </div>
        <Icon class="" name="line-md:chevron-triple-down" size="3rem" />
      </div>
    </div> -->
    <v-parallax :src="img" :lazy-src="img" height="80svh">
      <div
        class="overlay w-100 h-100 text-white px-2 px-md-0 d-flex flex-column"
      >
        <div
          class="ma-auto d-flex align-center justify-center flex-column text-center text-h6 text-md-h5 h-100 tagline text-uppercase ga-4"
          style="max-width: 40ch"
        >
          <v-btn color="link" rounded flat :to="{ name: 'jobs' }" size="large">
            <span>découvrir les emplois</span>
          </v-btn>
          <v-btn color="link" rounded flat :to="{ name: 'shop' }" size="large">
            <span>visiter nos boutiques</span>
          </v-btn>
        </div>
        <div
          class="text-body-2 d-flex flex-column align-center icon text-grey-lighten-1 mt-auto mb-15"
        >
          <div>
            <span class="mb-1">Défiler vers le bas</span>
          </div>
          <Icon class="" name="line-md:chevron-triple-down" size="3rem" />
        </div>
      </div>
    </v-parallax>
  </div>
</template>

<script setup>
const imgs = [
    "https://www.abrjobs.com/wp-content/uploads/2021/06/searching-for-a-new-job-picjumbo-com-scaled.jpg",
    "https://blog.hubspot.com/hubfs/ecommerce-10.jpg",
  ],
  img = ref(imgs[0]),
  shuffleImages = () => {
    img.value = imgs[Math.floor(Math.random() * imgs.length)];
  };

// onMounted(() => {
//   shuffleImages();
// });

setInterval(shuffleImages, 10000);
</script>

<style lang="css" scoped>
.icon {
  animation: move 5s infinite ease-in-out;
}
@keyframes move {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(30px);
  }
  60% {
    transform: translateY(15px);
  }
}

.tagline b {
  /* font-size: 50px; */
  color: white;
  text-align: center;
}

.tagline b span {
  background-color: #3b286483;
  padding: 6px;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  line-height: 47px;
  text-transform: uppercase;
}
</style>
