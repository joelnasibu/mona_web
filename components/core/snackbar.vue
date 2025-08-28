<template>
  <client-only>
    <div class="bg-white" v-show="payload.status">
      <div
        id="snackbar"
        class="bg-transparent"
        data-aos="fade-right"
        :style="styles"
      >
        <v-alert
          variant="tonal"
          :type="payload.type"
          density="compact"
          border="bottom"
          class="text-caption font-weight-bold elevation-2"
        >
          <span>{{ payload.message }}</span>
        </v-alert>
      </div>
    </div>
  </client-only>
</template>

<script setup>
const props = defineProps({
  payload: Object,
});

import { useAppStore } from "~/store/app";
const { toggleSnackbar } = useAppStore();
const { isMobile } = useDevice();

const sendBack = () => {
  toggleSnackbar({
    status: false,
    type: "info",
    message: null,
  });
};

watch(
  () => props.payload,
  (newPayload) => {
    if (newPayload?.status) {
      setTimeout(() => {
        sendBack();
      }, 5000);
    }
  }
);
const styles = computed(() => {
  return isMobile ? mobileStyles : computerStyles;
});
const mobileStyles = {
  "--bottom": "10px",
};
const computerStyles = {
  "--bottom": "50px",
};
</script>

<style scoped>
#snackbar {
  min-width: 200px;
  background-color: #fff !important;
  text-align: center;
  border-radius: 5px;
  position: fixed;
  z-index: 10001;
  right: 2%;
  bottom: var(--bottom) !important;
  -webkit-animation: fadein 0.5s, fadeout 0.2s 6s;
  animation: fadein 0.5s, fadeout 0.2s 6s;
}

/* .animation {
} */
@keyframes fadein {
  from {
    right: 0;
    opacity: 0;
  }

  to {
    right: 2%;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    right: 2%;
    opacity: 1;
  }

  to {
    right: 0;
    opacity: 0;
  }
}
</style>
