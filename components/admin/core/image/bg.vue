<template>
  <!-- <div class="bg-red"> -->
  <v-card flat class="bg-card rounded-lg" :class="{ 'card-outlined': !view }" width="180" height="180">
    <v-img :src="imageUrl" contain height="100%" width="100%"></v-img>
  </v-card>
  <div class="w-100" v-if="!view">
    <input type="file" name="image" accept="image/*"
      class="text-caption cursor-pointer bg-card mt-1 pa-1 w-100 card-outlined rounded-lg" @change="setImage" />
  </div>
  <v-dialog fullscreen v-model="dialog">
    <v-card flat class="rounded-0 hide-scrollbar">
      <AdminCoreDialogHeader title="Image setiings" @close="close">
        <div class="d-flex px-2">
          <v-btn color="primary-accent" size="small" class="text-caption rounded-lg" prepend-icon="mdi-content-save"
            @click="save">
            <span>Save</span>
          </v-btn>
        </div>
      </AdminCoreDialogHeader>
      <v-card-text>
        <v-container>
          <v-row justify="center">
            <v-col cols="12" sm="6">
              <div class="py-2">
                <v-btn-toggle v-model="toggle" mandatory color="primary-accent" density="compact" border divided
                  variant="text" v-if="processedImage">
                  <v-btn :value="0" class="text-caption">
                    <span>Initial Image</span>
                  </v-btn>
                  <v-btn :value="1" class="text-caption">
                    <span>Processed Image</span>
                  </v-btn>
                </v-btn-toggle>
              </div>
              <v-window v-model="toggle">
                <v-window-item :value="0">
                  <v-card flat rouded="lg">
                    <cropper class="cropper" :src="initialImage" :stencil-props="{
                      aspectRatio: 1 / 1,
                    }" />
                    <!-- <v-img :src="initialImage"></v-img> -->
                  </v-card>
                  <div v-if="!processedImage">
                    <div class="my-4">
                      <v-btn class="text-caption" block size="small" flat color="primary-accent rounded-lg"
                        variant="text" active :loading="loader" @click="removeBg">
                        <span>Remove background</span>
                      </v-btn>
                    </div>
                    <v-alert density="compact" class="text-caption rounded-lg" border="start" variant="tonal"
                      type="info" v-if="!processedImageCache">
                      <span>Rest assured, this process may require a bit of time,
                        but it's essential for ensuring high-quality
                        results.</span>
                    </v-alert>
                  </div>
                </v-window-item>
                <v-window-item :value="1">
                  <v-card flat rouded="lg" class="card-outlined">
                    <v-img :src="processedImage"></v-img>
                  </v-card>
                  <div class="mt-4">
                    <v-btn class="text-caption" block size="small" flat color="primary-accent rounded-lg" variant="text"
                      active @click="removeBg">
                      <span>Revert</span>
                    </v-btn>
                  </div>
                </v-window-item>
              </v-window>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
  <!-- </div> -->
</template>

<script setup>
import imglyRemoveBackground from "@imgly/background-removal";
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

const props = defineProps({
  image: String,
  profile: Boolean,
  view: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["setImage"]);

import { useAppStore } from "~/store/app";
const { placeholderImage, profileImage } = useAppStore();

const imageUrl = computed(() => {
  return props.image ?? (props.profile ? profileImage : placeholderImage);
});

const dialog = ref(true);
const initialImage = ref(null);
const processedImage = ref(null);
const processedImageCache = ref(null);
const setImage = async (e) => {
  const file = e.target.files[0];
  if (!file.type.includes("image/")) {
    alert("Please select an image file");
    return;
  }
  dialog.value = true;
  if (typeof FileReader === "function") {
    const reader = new FileReader();
    reader.onload = (evt) => {
      // emits("setImage", evt.target.result);
      initialImage.value = evt.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const loader = ref(false);
const removeBg = async () => {
  if (toggle.value === 0) {
    if (processedImageCache.value) {
      processedImage.value = processedImageCache.value;
      toggle.value = 1;
    } else {
      try {
        loader.value = true;
        let res = await imglyRemoveBackground(initialImage.value);
        loader.value = false;
        toggle.value = 1;

        const reader = new FileReader();
        reader.onload = (evt) => {
          processedImageCache.value = processedImage.value = evt.target.result;
        };
        reader.readAsDataURL(res);
      } catch (error) {
        loader.value = false;
        toggle.value = 1
        console.log(error.messa)
      }

    }
  } else {
    toggle.value = 0;
    processedImage.value = null;
  }
};

const toggle = ref(0);

const save = () => {
  emits("setImage", processedImage.value ?? initialImage.value);
  dialog.value = false;
};
const close = () => {
  processedImage.value = initialImage.value = processedImageCache.value = null;
  dialog.value = null;
};
</script>

<style lang="css" scoped></style>
