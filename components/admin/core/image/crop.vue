<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card flat rouded="lg" class="bg-white mx-auto rounded-lg" :disabled="loader">
          <v-img :src="initialImage" v-if="loader"></v-img>
          <div v-else>
            <cropper class="cropper" :src="initialImage" :stencil-props="{ aspectRatio: aspectRatio }"
              imageClass="contain" @change="change" />
          </div>
          <v-card-action>

            <v-btn class="text-caption" block flat color="purple-darken-4 rounded-lg rounded-t-0" active
              @click="removeBg" :loading="loader">
              <span>Remove background</span>
            </v-btn>
          </v-card-action>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card height="100%" elevation="8" flat class="bg-transparent overflow-hidden rounded-lg">
          <div class="pa-4 bg-white text-subtitle-2">
            <span>Final result</span>
          </div>
          <v-img :src="image" contain></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

const emits = defineEmits(["setImage", "isLoading"]);
const props = defineProps({
  image: [String],
  initialImage: [String],
  aspectRatio: [String, Number],
  imageType: String,
});

const change = ({ coordinates, canvas }) => {
  console.log(canvas)
  emits("setImage", { image: canvas?.toDataURL(), bg: true });
};

const loader = ref(false);
const removeBg = async () => {
  await checkIBg();
  // await checkIBg();
};

const checkIBg = async () => {
  emits("isLoading", true);
  loader.value = true;

  const formData = new FormData();
  formData.append(props.imageType, props.image);
  formData.append("size", "auto");
  let res = await $fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
      "X-Api-Key": import.meta.env.VITE_REMOVE_BG_KEY,
    },
    body: formData,
  });

  loader.value = false;
  emits("isLoading", false);

  const based64Img = await toBase64(res);

  emits("setImage", { image: based64Img, bg: false });
};

const toBase64 = async (file) => {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
</script>

<style lang="css" scoped></style>
