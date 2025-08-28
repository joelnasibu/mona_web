<template>
  <div class="d-flex w-100 align-center">
    <v-btn
      flat
      variant="text"
      active
      class="rounded-sm"
      :size="smallBtns ? '25' : 'x-small'"
      :icon="`mdi-chevron-left`"
      :disabled="btns[0].disabled"
      :title="`Scroll left`"
      @click="horizontalScroll('left')"
      v-if="showBtns"
    ></v-btn>
    <div class="mx-1 w-100 overflow-hidden">
      <div
        class="scrollers position-relative overflow-x-auto hide-scrollbar px-1"
        id="scrollers"
        @scroll="scrollHandler($event)"
      >
        <slot />
      </div>
      <div class="" v-if="showScrollerProgress && showBtns">
        <v-progress-linear
          color="primary"
          :model-value="progressValue"
          active
        ></v-progress-linear>
      </div>
    </div>
    <v-btn
      flat
      variant="text"
      active
      class="rounded-sm"
      :size="smallBtns ? '25' : 'x-small'"
      :icon="`mdi-chevron-right`"
      :disabled="btns[1].disabled"
      :title="`Scroll right`"
      @click="horizontalScroll('right')"
      v-if="showBtns"
    ></v-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  showScrollerProgress: {
    type: Boolean,
    default: true,
  },
  smallBtns: {
    type: Boolean,
    default: false,
  },
});

const btns = ref([
  { title: "left", disabled: true },
  { title: "right", disabled: false },
]);

const cardWidth = ref(200);
const getScrollerCardWidth = () => {
  let elmnt = document.getElementById("scrollerCard");
  cardWidth.value = elmnt.clientWidth;
};

const progressValue = computed(() => {
  return (
    (position.value * 100) /
    (trends.value.scrollWidth - trends.value.clientWidth)
  );
});
const position = ref(0);
const trends = ref("");
const horizontalScroll = (direction) => {
  trends.value.scrollBy({
    top: 0,
    left: direction == "left" ? cardWidth.value * -1 : cardWidth.value,
    behavior: "smooth",
  });
  scrollHandler();
};
const initDirectionButtons = () => {
  btns.value[0].disabled = position.value === 0;
  btns.value[1].disabled =
    Math.ceil(position.value) ==
    trends.value.scrollWidth - trends.value.clientWidth;
};
const scrollHandler = (event) => {
  //
  position.value = trends.value.scrollLeft;
  initDirectionButtons();
};

const showBtns = computed(() => {
  return trends.value.scrollWidth > trends.value.clientWidth;
});

onMounted(() => {
  trends.value = document.getElementById("scrollers");
  getScrollerCardWidth();
});
</script>

<style lang="css" scoped>
.scrollers {
  white-space: nowrap;
  min-width: 0;
}

.scroller-card {
  display: inline-block;
}

.scroller-card:first-child {
  margin-left: 0 !important;
}
.scroller-card:last-child {
  margin-right: 0 !important;
}
.btns {
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
