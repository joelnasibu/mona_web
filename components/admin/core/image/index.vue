<template>
  <div class="">
    <div class="position-relative" v-if="avatar">
      <v-avatar :size="isMobile ? 50 : 135" :image="imageUrl"></v-avatar>
      <div class="position-absolute" style="bottom: 0; right: 0">
        <v-btn class="text-caption" title="Edit" icon="mdi-pencil" size="x-small" active variant="text"
          color="primary-accent" @click="dialog = true"></v-btn>
      </div>
    </div>

    <div class="" v-else>
      <v-card @click="setImage" flat class="bg-off-white-1 rounded-lg position-relative mx-auto"
        :class="{ 'card-outlined': !view }" :width="fullSize ? '80%' : 180" :height="fullSize ? '80%' : 180">
        <v-img :src="imageUrl" contain height="100%" width="100%"></v-img>
        <div class="position-absolute d-flex flex-column ga-2" style="top: 5px; right: 5px" v-if="editable || !view">
          <v-icon icon="mdi-pencil" variant="text" color="primary-accent" class="rounded-lg" size="22"
            title="Edit actual image" @click="dialog = true"
            v-if="(processedImage || imageUrl) && image && !view"></v-icon>
          <v-icon icon="mdi-refresh" variant="text" color="primary-accent" class="rounded-lg" size="22"
            title="Reset to initial image" @click="resetImage" v-if="imageUrl !== resetValue && image"></v-icon>
        </div>
      </v-card>
      <div class="w-100" v-if="!view">
        <!-- <v-btn >enter image url </v-btn>
        <v-text-field v-model="imageUrl"></v-text-field> -->
        <input type="file" name="image" accept="image/*"
          class="text-caption cursor-pointer bg-off-white mt-1 pa-1 w-100 card-outlined rounded-lg" @change="setImage"
          id="fileInput" />
      </div>
      <div class="text-disabled text-caption mt-3 text-center" style="font-size: 11px !important">
        <span>Taille maximale de l'image: <b>2MB</b></span>
      </div>
    </div>
    <v-dialog fullscreen v-model="dialog">
      <v-card flat class="rounded-0 hide-scrollbar system-bg">
        <AdminCoreDialogHeader title="Image setiings" @close="close">
          <div class="d-flex align-center mx-3 ga-2">
            <v-btn variant="text" size="small" class="text-caption rounded-lg" active @click="changeImage"
              :disabled="isLoading">
              <span>Change image</span>
            </v-btn>
            <v-btn class="text-caption rounded-lg" flat color="primary-accent" size="small"
              prepend-icon="mdi-content-save" @click="saveImage" :disabled="isLoading">
              <span>Save</span>
            </v-btn>
          </div>
        </AdminCoreDialogHeader>
        <v-card-text>
          <v-container>
            <v-row justify="center">
              <v-col cols="12" sm="8">
                <AdminCoreImageCrop :image="processedImage" :initialImage="initialImage" :aspect-ratio="aspectRatio"
                  :imageType="imageType" @set-image="setProcessedImage" @is-loading="componentIsLoading" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  profile: Boolean,
  view: {
    type: Boolean,
    default: false,
  },
  aspectRatio: {
    type: [String, Number],
    default: 1 / 1,
  },
  fullSize: Boolean,
  editable: {
    type: Boolean,
    default: true,
  },
  avatar: {
    type: Boolean,
    default: false,
  },
}),
  emits = defineEmits(["setImage"]),
  { isMobile } = useDevice();

import { useAppStore } from "~/store/app";
const { placeholderImage, profileImage, toggleSnackbar } = useAppStore();

const imageUrl = computed(() => {
  return props.image ?? (props.profile ? profileImage : placeholderImage);
});

const isLoading = ref(false);

const dialog = ref(false);
const processedImage = ref(''); //props.image
const initialImage = ref(''); //props.image

const imageType = ref("image_url");
const maxImageSize = 2 * 1024 * 1024; //in bytes

const setImage = async (e) => {
  const file = e.target.files[0];
  if (file.size > maxImageSize) {
    isLargeThanSize();
  } else {
    imageType.value = "image_file_b64";
    dialog.value = true;
    const reader = new FileReader();
    reader.onload = (evt) => {
      processedImage.value = initialImage.value = evt.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const changeImage = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.click();
  input.onchange = (e) => {
    let file = e.target.files[0];
    if (file.size > maxImageSize) {
      isLargeThanSize();
    } else {
      imageType.value = "image_file_b64";
      const reader = new FileReader();
      reader.onload = (evt) => {
        processedImage.value = initialImage.value = evt.target.result;
      };
      reader.readAsDataURL(file);
      resetFileInput();
    }
  };
};

const isLargeThanSize = () => {
  toggleSnackbar({
    status: true,
    type: "warning",
    message: "Please select an image size less than 2MB",
  });
};

const saveImage = () => {
  initialImage.value = processedImage.value;
  emits("setImage", processedImage.value);
  dialog.value = false;
  resetFileInput();
};

const close = () => {
  processedImage.value = null;
  dialog.value = false;
  isLoading.value = false;
  resetFileInput();
};

const resetFileInput = () => {
  document.getElementById("fileInput").value = "";
};

const setProcessedImage = (val) => {
  processedImage.value = val.image;
  if (!val.bg) initialImage.value = val.image;
};

const componentIsLoading = (val) => {
  isLoading.value = val;
};

const resetValue = props.image;

const resetImage = () => {
  emits("setImage", resetValue);
  initialImage.value = processedImage.value = resetValue;
  resetFileInput();
};

</script>

<style lang="css" scoped>
.blend {
  mix-blend-mode: difference !important;
}
</style>
