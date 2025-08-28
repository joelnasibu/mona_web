<template>
  <div class="d-flex ga-1 align-center">
    <div
      class=""
      v-for="social in socials"
      :title="`${share ? 'Share on ' : 'Visit us on'} ${social.title}`"
    >
      <v-btn
        icon
        size="30"
        variant="text"
        @click="shareAction(social)"
        class="rounded-lg"
      >
        <Icon :name="`fa6-brands:${social.icon}`" size="0.85rem" />
      </v-btn>
    </div>
    <div class="" title="Copy link" v-if="share">
      <v-btn
        icon
        size="30"
        variant="text"
        @click="shareAction({ title: 'copy' })"
        class="rounded-lg"
      >
        <Icon name="mdi:link" size="0.85rem" />
      </v-btn>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  share: {
    type: Boolean,
    default: false,
  },
});

// const { locale } = useI18n();

import { useAppStore } from "~/store/app";
const { toggleSnackbar } = useAppStore();

const data = ref([
  {
    title: "facebook",
    icon: "facebook",
    url: "https://www.facebook.com/sharer/sharer.php?u=",
    social: "",
  },
  {
    title: "twitter",
    icon: "x-twitter",
    url: "https://twitter.com/intent/tweet?text=",
    social: "",
  },
  {
    title: "linkedin",
    icon: "linkedin",
    url: "https://www.linkedin.com/shareArticle?mini=true&url=",
    social: "",
  },
  // {
  //   title: "youtube",
  //   icon: "youtube",
  //   social: '',
  // },
]);
const socials = computed(() => {
  return data.value;
  //    props.share
  //     ? data.value.filter((i) => i.title !== "youtube")
  //     : data.value;
});

const shareAction = (action) => {
  // if (process.client) {
  if (action.title === "copy") {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        toggleSnackbar({
          status: true,
          type: "success",
          message: "Link copied",
        });
      })
      .catch(() => {
        toggleSnackbar({
          status: true,
          type: "error",
          message: "Something went wrong, please try again later",
        });
      });
  } else {
    let url = props.share
      ? action.url + String(window.location.href)
      : action.social;

    window.open(url, "_blank");
  }
  // }
};
</script>

<style lang="css" scoped></style>
